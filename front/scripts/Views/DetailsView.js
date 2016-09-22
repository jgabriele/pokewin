import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';
import FavouritesModel from '../Models/Favourites';

const ROLLING_TIMEOUT = 4 * 1000; // 4 sec

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected'
}

const ACTIONS = {
  CLOSE: 'close'
}

const INITIAL_DEFENSE_POKEMON_CP = 2000;
const INPUT_RANGE_STEP = 10;

function DetailsView() {
  this.EVENTS = EVENTS;
  this.ACTIONS = ACTIONS;

  this._state = {
    defensePokemonCP: INITIAL_DEFENSE_POKEMON_CP
  };

  this._input = document.querySelector('.js-level-range');
  this._input.addEventListener('change', this.onInputUpdate.bind(this));

  this._level = document.querySelector('.js-cp-value');

  this._name = document.querySelector('.overlay__data .js-name');
  this._picture = document.querySelector('.overlay__data .js-picture');
  this._types = document.querySelector('.overlay__data .js-types');

  this._close = document.querySelector('.js-close');
  this._close.addEventListener('click', this.onClose.bind(this));
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

  const isLoadingClass = data.isLoading ? ' is-loading' : '';
  const imageHTML = `
    <div class="pokemon-image${isLoadingClass}"
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

    // Sort them
    .sort((item1, item2) => {
      if (item1.cp !== item2.cp) {
        return item1.cp - item2.cp;
      } else {
        return Number(item1.id) - Number(item2.id)
      }
    })
    // .map((counterData) => Object.assign({}, counterData, {
    //   isFavourite: FavouritesModel.get(counterData.id)
    // }))

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
  this.renderCounters();
}

DetailsView.prototype.onClose = function() {
  this.emit(ACTIONS.CLOSE);
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