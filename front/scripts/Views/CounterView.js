import Utils from '../Utils.js';
import Event from 'events';

const ACTIONS = {
  SELECT_COUNTER: 'select-pokemon'
}

function CounterView() {}

CounterView.prototype = Object.create(Event.prototype);

CounterView.prototype.prerender = function(counter) {
  const isLoadingClass = counter.isLoading ? ' is-loading' : '';

  const domEl = Utils.DOMElementFromString(
    `<div class="other-pokemon js-pokemon">
      <div class="picture">
        <div class="pokemon-image${isLoadingClass}"
            style="${Utils.getPokemonSpritesheetPosition(counter)}"/>
        </div>
      </div>
      <div class="type ${Utils.getClassForType(counter.moveType.id).toLowerCase()}" style="font-size: ${counter.fontSize}">
        <span class="name">${counter.moveName}</span>
      </div>
      <div class="cp-value">
        CP ${counter.cp}
      </div>
    </div>`);

  domEl.addEventListener('click', this.emit.bind(this, ACTIONS.SELECT_COUNTER, counter));

  return domEl;
}

CounterView.ACTIONS = ACTIONS;

export default CounterView;