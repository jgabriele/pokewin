import Event        from 'events';
import Utils        from '../Utils';

function FloatingButton(el) {
  this._el = el;
}

FloatingButton.prototype.render = function () {
  const el = Utils.DOMElementFromString(
    `<div class="floating-button"></div>`
  );

  this._el.appendChild(el);
}

export default FloatingButton;
