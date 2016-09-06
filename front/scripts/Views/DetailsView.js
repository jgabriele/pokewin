import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected'
}

function DetailsView() {
  this._state = {};
  document.querySelector('.js-cp-input').addEventListener('input', this.recomputeCounters.bind(this));
}

DetailsView.prototype = Object.create(Event.prototype);

DetailsView.prototype.render = function(data) {
  const pokemon = data.pokemon;
  const counters = data.counters;

  this._state.counters = counters;

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

  this.renderCounters(this._state.counters, data.isLoading);
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

DetailsView.prototype.recomputeCounters = function(e) {
  const newValue = e.target.value;
  this._state.counters = this._state.counters.map((counter) => Object.assign({}, counter, {
    cp: Math.round(Number(newValue) / counter.efficiency)
  }));

  this.renderCounters(this._state.counters);
}

DetailsView.EVENTS = EVENTS;

export default DetailsView;