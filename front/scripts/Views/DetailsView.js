import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected'
}

const INITIAL_DEFENSE_POKEMON_CP = 2000;

function DetailsView() {
  this._state = {
    defensePokemonCP: INITIAL_DEFENSE_POKEMON_CP
  };

  this._input = document.querySelector('.js-cp-input');
  this._input.addEventListener('input', this.onInputUpdate.bind(this));
  this._input.value = this._state.defensePokemonCP;
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

  document.querySelector('.overlay__data .js-name').innerText = LocaleManager.getInstance().translate(pokemon.key);
  document.querySelector('.overlay__data .js-picture').innerHTML = imageHTML;
  document.querySelector('.overlay__data .js-types').innerHTML = typesHTML;

  const counterTitle = LocaleManager.getInstance().translate('TEXT_CAN_BE_BEATEN_BY');
  document.querySelector('.overlay__data .counters .js-counters-title').innerHTML = counterTitle;

  this.renderCounters(counters, data.isLoading);
}

DetailsView.prototype.renderCounters = function(counters, isLoading) {
  const countersNodes = counters.map((counterData) => {
    const counterView = new CounterView()
      .on(CounterView.ACTIONS.SELECT_COUNTER, this.emit.bind(this, EVENTS.COUNTER_SELECTED, counterData.pokemon))
    counterData.isLoading = isLoading;
    return counterView.prerender(counterData);
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
  const newValue = this._state.defensePokemonCP;
  const counters = this._state.counters
    .filter(highCPMaxFilter.bind(this, newValue))
    .map(counterDataToViewData.bind(this, this._state.defensePokemonCP))
    .sort((item1, item2) => item1.cp - item2.cp);

  this.renderCounters(counters);
}

function highCPMaxFilter(cp, counter) {
  return counter.cpMax * counter.efficiency >= cp;
}

function counterDataToViewData(defensePokemonCP, counter){
    const move = counter.move;
    const moveName = LocaleManager.getInstance().translate(move.key);
    const moveType = move.type;
    const fontSize = Utils.getFontSize(moveName, 70);
    const cp = Math.round(defensePokemonCP / counter.efficiency);

    return {
      id: counter.id,
      key: counter.key,
      moveType,
      moveName,
      fontSize,
      efficiency: counter.efficiency,
      cp,
      pokemon: counter.pokemon
    };
}

DetailsView.EVENTS = EVENTS;

export default DetailsView;