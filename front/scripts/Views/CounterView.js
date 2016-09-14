import Utils from '../Utils.js';
import Event from 'events';

const ACTIONS = {
  SELECT_COUNTER: 'select-pokemon'
}

function CounterView() {}

CounterView.prototype = Object.create(Event.prototype);

CounterView.prototype.prerender = function(counter) {
  const isLoadingClass = counter.isLoading ? ' is-loading' : '';

  this._moves = counter.moves;
  this._index = 0;

  const cp = counter.cp;
  const move = this.getNextMove();
  const fontSize = Utils.getFontSize(move.name, 70);

  const domEl = Utils.DOMElementFromString(
    `<div class="other-pokemon js-pokemon">
      <div class="picture">
        <div class="pokemon-image${isLoadingClass}"
            style="${Utils.getPokemonSpritesheetPosition(counter)}"/>
        </div>
      </div>
      <div class="type ${Utils.getClassForType(move.type.id).toLowerCase()} js-move" style="font-size: ${fontSize}">
        <span class="name">${move.name}</span>
      </div>
      <div class="cp-value">
        CP ${cp}
      </div>
    </div>`);

  domEl.addEventListener('touchend', this.emit.bind(this, ACTIONS.SELECT_COUNTER, counter));

  this._el = domEl;

  return domEl;
}

CounterView.prototype.rollMove = function() {
  const move = this.getNextMove();
  const moveEl = this._el.querySelector('.js-move');
  moveEl.className = '';
  moveEl.classList.add('type');
  moveEl.classList.add('js-move');
  moveEl.classList.add(Utils.getClassForType(move.type.id).toLowerCase());

  moveEl.style.fontSize = Utils.getFontSize(move.name, 70);

  this._el.querySelector('.js-move .name').innerText = move.name;
}

CounterView.prototype.getNextMove = function() {
  return this._moves[this._index++ % this._moves.length];
}

CounterView.ACTIONS = ACTIONS;

export default CounterView;