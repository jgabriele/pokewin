import Event        from 'events';
import Utils        from '../Utils';

const EVENTS = {
  CLICK: 'click'
};

function FloatingButton(el) {
  this._el = el;
}

FloatingButton.prototype = Object.create(Event.prototype);

FloatingButton.prototype.render = function () {
  const el = Utils.DOMElementFromString(
    `<div class="floating-button"></div>`
  );

  el.addEventListener('click', this.emit.bind(this, EVENTS.CLICK))

  this._el.appendChild(el);

  return this;
}

FloatingButton.EVENTS = EVENTS;

export default FloatingButton;
