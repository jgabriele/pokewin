import Event        from 'events';
import Utils        from '../Utils';

const EVENTS = {
  CLICK: 'click'
};

function FloatingButton(parent) {
  this._el = Utils.DOMElementFromString('<div></div>');
  parent.appendChild(this._el);
}

FloatingButton.prototype = Object.create(Event.prototype);

FloatingButton.prototype.render = function (buttonType) {
  const el = Utils.DOMElementFromString(
    `<div class="floating-button">
      <div class="floating-button__icon">
        ${getIconForButton(buttonType)}
      </div>
    </div>`
  );

  el.addEventListener('click', this.emit.bind(this, EVENTS.CLICK))

  this._el.innerHTML = '';
  this._el.appendChild(el);

  return this;
}

FloatingButton.prototype.show = function () {
  this._el.style.display = 'initial';
}

FloatingButton.prototype.hide = function () {
  this._el.style.display = 'none';
}

FloatingButton.prototype.setButtonType = function (buttonType) {
  const icon = this._el.querySelector('.floating-button__icon');

  icon.addEventListener('transitionend', () => {
    this.render(buttonType);
  });
  setTimeout(() => icon.classList.add('is-hidden'), 0);
}

function getIconForButton (buttonType) {
  switch (buttonType) {
    case 'CLOSE':
      return '<img src="/images/icon-close.png" />';
    case 'MENU':
      return '<img src="/images/icon-menu.png" />';
    default:
      return '';
  }
}

FloatingButton.EVENTS = EVENTS;

export default FloatingButton;
