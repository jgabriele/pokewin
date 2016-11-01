import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';
import FavouritesModel from '../Models/Favourites';

const ROLLING_TIMEOUT = 4 * 1000; // 4 sec

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected'
}

const INITIAL_DEFENSE_POKEMON_CP = 2000;
const INPUT_RANGE_STEP = Utils.isMobileDevice() && 10 || 1;

function DetailsView() {
  this.EVENTS = EVENTS;

  this._state = {
    defensePokemonCP: INITIAL_DEFENSE_POKEMON_CP
  };

  if (Utils.isMobileDevice()) {
    this._input = document.querySelector('.js-level-range');
    this._input.addEventListener('input', this.onInputUpdate.bind(this));
    this._input.addEventListener('change', this.onInputRelease.bind(this));
  } else {
    this._input = document.querySelector('.js-level-text');
    this._input.addEventListener('input', (e) => { this.onInputUpdate(e); this.onInputRelease(e) });
  }

  this._level = document.querySelector('.js-cp-value');

  this._name = document.querySelector('.overlay__data .js-name');
  this._picture = document.querySelector('.overlay__data .js-picture');
  this._types = document.querySelector('.overlay__data .js-types');
}

DetailsView.prototype = Object.create(Event.prototype);

DetailsView.prototype.render = function(data) {

  const pokemon = data.pokemon;
  this._state.counters = data.counters;

  const typesHTML = pokemon.types
            .map((type) => `
              <div class="type ${type.cssClass}">
                <span class="name">${type.name}</span>
              </div>`)
            .join('');

  const imageHTML = `
    <div class="pokemon-image"
        style="${Utils.getPokemonSpritesheetPosition(pokemon, 150)}"/>
    </div>`;

  this._name.innerText = LocaleManager.getInstance().translate(pokemon.key);
  this._picture.innerHTML = imageHTML;
  this._types.innerHTML = typesHTML;

  this._input.max = data.pokemon.cpMax / INPUT_RANGE_STEP;
  this.onInputUpdate({ target: this._input });

  this.renderCounters(data.isLoading);
}

DetailsView.prototype.renderCounters = function(isLoading) {
  const counterViewsAndData = this._state.counters

    // Filter out pokemons that cannot have enough CP
    .filter(highCPMaxFilter.bind(this, this._state.defensePokemonCP))

    // Convert data to view data
    .map(counterDataToViewData.bind(this, this._state.defensePokemonCP))

    // Favourite data
    .map((counterData) => Object.assign({}, counterData, {
      isFavourite: FavouritesModel.getInstance().get(counterData.id)
    }))

    // Sort them by Favourites => CP => ID
    // "=>" means "if equal then sort by"
    .sort((item1, item2) => {
      const fav1 = item1.isFavourite ? 1 : 0;
      const fav2 = item2.isFavourite ? 1 : 0;
      const favDiff = fav2 - fav1;

      if (favDiff === 0) {
        const cpDiff = item1.cp - item2.cp;
        if (cpDiff === 0) {
          return item1.id - item2.id;
        }

        return cpDiff
      }

      return favDiff
    })

    // Create CounterView for each element
    .map((counterData) => {
      const counterView = new CounterView()
        .on(CounterView.ACTIONS.SELECT_COUNTER, () => this.onSelectCounter(counterData.pokemon));
      counterData.isLoading = isLoading;
      return [counterView, counterData];
    });

  // For the rotation we only need the list of views
  const counterViews = counterViewsAndData.map((tuple) => tuple[0]);

  const countersNodes = counterViewsAndData.map((counterViewAndData) => {
    return counterViewAndData[0].prerender(counterViewAndData[1]);
  });

  const counterFragment = document.createDocumentFragment();
  countersNodes.forEach(counterFragment.appendChild.bind(counterFragment));

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = '';
  document.querySelector('.overlay__data .counters .js-beaten-by').appendChild(counterFragment);
}

DetailsView.prototype.onInputUpdate = function(e) {
  const value = e.target.value * INPUT_RANGE_STEP;
  this._state.defensePokemonCP = this._level.innerText = value;
}

DetailsView.prototype.onInputRelease = function(e) {
  this.renderCounters();
}

DetailsView.prototype.onSelectCounter = function(pokemon) {
  this.emit(EVENTS.COUNTER_SELECTED, pokemon);
}

function highCPMaxFilter(cp, counter) {
  return counter.cpMax * counter.moves[0].efficiency >= cp;
}

function counterDataToViewData(defensePokemonCP, counter){
    const move = counter.moves[0];
    const cp = Math.round(defensePokemonCP / move.efficiency);

    return {
      id: counter.id,
      key: counter.key,
      moves: counter.moves.map((move) => Object.assign({}, move, {
        name: LocaleManager.getInstance().translate(move.key)
      })),
      cp,
      pokemon: counter.pokemon
    };
}

export default new DetailsView();