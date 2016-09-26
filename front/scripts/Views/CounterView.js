import Utils from '../Utils';
import Event from 'events';

const ACTIONS = {
  SELECT_COUNTER: 'select-pokemon'
}

function CounterView() {}

CounterView.prototype = Object.create(Event.prototype);

CounterView.prototype.prerender = function(counter) {
  const cp = counter.cp;
  const quickMove = counter.moves[0];
  const quickMoveFontSize = Utils.getFontSize(quickMove.name, 70);
  const specialMove = counter.moves[1];
  const specialMoveFontSize = Utils.getFontSize(specialMove.name, 70);

  const favouriteClass = counter.isFavourite ? ' is-favourite' : '';
  const domEl = Utils.DOMElementFromString(
    `<div class="other-pokemon${favouriteClass} js-pokemon">
      <div class="picture">
        <div class="pokemon-image"
            style="${Utils.getPokemonSpritesheetPosition(counter)}"/>
        </div>
      </div>
      <div class="type ${Utils.getClassForType(quickMove.type.id).toLowerCase()} js-move" style="font-size: ${quickMoveFontSize}">
        <span class="name">${quickMove.name}</span>
      </div>
      <div class="type ${Utils.getClassForType(specialMove.type.id).toLowerCase()} js-move" style="font-size: ${specialMoveFontSize}">
        <span class="name">${specialMove.name}</span>
      </div>
      <div class="cp-value">
        CP ${cp}
      </div>
    </div>`);

  // if (Utils.isMobileDevice()) {
  //   domEl.addEventListener('touchend', () => this.onTouchEnd(counter));
  // } else {
    domEl.addEventListener('click', () => this.onTouchEnd(counter));
  // }

  this._el = domEl;

  return domEl;
}

CounterView.prototype.onTouchEnd = function (counter) {
  if (Utils.isDocumentScrolling()) {
    return;
  }

  this.emit(ACTIONS.SELECT_COUNTER, counter);
}

CounterView.ACTIONS = ACTIONS;

export default CounterView;