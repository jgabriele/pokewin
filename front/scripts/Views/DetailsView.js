import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';

const ROLLING_TIMEOUT = 4 * 1000; // 4 sec

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected'
}

const ACTIONS = {
  CLOSE: 'close',
  FAVOURITE: 'favourite'
}

const INITIAL_DEFENSE_POKEMON_CP = 2000;

function DetailsView() {
  this.EVENTS = EVENTS;
  this.ACTIONS = ACTIONS;

  this._state = {
    defensePokemonCP: INITIAL_DEFENSE_POKEMON_CP
  };

  this._favourite = document.querySelector('.js-favourite');
  this._favourite.addEventListener('click', this.onFavourite.bind(this));

  this._input = document.querySelector('.js-cp-input');
  this._input.addEventListener('input', this.onInputUpdate.bind(this));
  this._input.value = this._state.defensePokemonCP;

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

  const counters = this._state.counters
    // Filter out pokemons that cannot have enough CP
    .filter(highCPMaxFilter.bind(this, this._state.defensePokemonCP))
    .map(counterDataToViewData.bind(this, this._state.defensePokemonCP))
    .sort((item1, item2) => item1.cp - item2.cp);


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

  const method = data.isFavourite ? 'add' : 'remove';
  this._favourite.classList[method]('is-active');

  this.renderCounters(counters, data.isLoading);
}

DetailsView.prototype.renderCounters = function(counters, isLoading) {
  const counterViewsAndData = counters.map((counterData) => {
    const counterView = new CounterView()
      .on(CounterView.ACTIONS.SELECT_COUNTER, this.emit.bind(this, EVENTS.COUNTER_SELECTED, counterData.pokemon));
    counterData.isLoading = isLoading;
    return [counterView, counterData];
  });

  const counterViews = counterViewsAndData.map((tuple) => tuple[0]);

  this.launchTimeoutForRotation(counterViews);

  const countersNodes = counterViewsAndData.map((counterViewAndData) => {
    return counterViewAndData[0].prerender(counterViewAndData[1]);
  });

  const counterFragment = document.createDocumentFragment();
  countersNodes.forEach(counterFragment.appendChild.bind(counterFragment));

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = '';
  document.querySelector('.overlay__data .counters .js-beaten-by').appendChild(counterFragment);
}

DetailsView.prototype.onInputUpdate = function(e) {
  this._state.defensePokemonCP = e.target.value;
  this.recomputeCounters();
}

DetailsView.prototype.recomputeCounters = function() {
  window.clearTimeout(this._rollingTimeout);
  const newValue = this._state.defensePokemonCP;
  const counters = this._state.counters
    .filter(highCPMaxFilter.bind(this, newValue))
    .map(counterDataToViewData.bind(this, this._state.defensePokemonCP))
    .sort((item1, item2) => item1.cp - item2.cp);

  this.renderCounters(counters);
}

DetailsView.prototype.launchTimeoutForRotation = function(counterViews) {
  this._rollingTimeout = setTimeout(() => {
    counterViews.forEach((counterView) => {
      counterView.rollMove();
    });
    this.launchTimeoutForRotation(counterViews);
  }, ROLLING_TIMEOUT);
}

DetailsView.prototype.onClose = function() {
  window.clearTimeout(this._rollingTimeout);
  this.emit(ACTIONS.CLOSE);
}

DetailsView.prototype.onFavourite = function() {
  this._favourite.classList.toggle('is-active');
  this.emit(ACTIONS.FAVOURITE);
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