import Event        from 'events';
import Utils        from '../Utils';

const EVENTS = {
  FAVOURITES: 'favourites'
};

const buttons = [
  {
    name: 'Favourites',
    event: EVENTS.FAVOURITES,
    transform: 'translate3d(-70px, -70px, 0px)'
  },
  {
    name: 'Pinned section',
    event: EVENTS.FAVOURITES,
    transform: 'translate3d(70px, -70px, 0px)'
  }
];

function Menu() {}

Menu.prototype = Object.create(Event.prototype);

Menu.prototype.render = function () {
  this.createButtonsEl();

  const el = Utils.DOMElementFromString('<div class="menu"></div>');

  this._buttonsEl.forEach((button) => {
    el.appendChild(button);
  });

  this._el = el;

  document.querySelector('body').appendChild(el);

  return this;
}

Menu.prototype.createButtonsEl = function () {
  if (this._buttonsEl) {
    return this._buttonsEl;
  }

  this._buttonsEl = buttons.map((button) => {
    const el = Utils.DOMElementFromString(
      `<div class="button">
        <div class="button__icon"></div>
        <div class="button__text is-hidden">${button.name}</div>
      </div>`
    );

    // Will be triggered for each transition end, show or hide
    el.addEventListener('transitionend', (e) => {
      if (this._isOpened) {
        // We finish by animating the text, if that's the case we don't care
        if (e.target !== el.querySelector('.button__text')) {
          showButton(el);
        }
      } else {
        this._el.classList.add('is-closed');
      }
    });

    el.addEventListener('click', this.emit.bind(this, button.event));

    el.data = button;

    return el;
  });
}

Menu.prototype.update = function () {
  if (!this._el) {
    this.render();
  }
}

Menu.prototype.show = function () {
  this._isOpened = true;

  this._el.classList.remove('is-closed');

  setTimeout(() => {
    this._buttonsEl.forEach((buttonEl) => {
      buttonEl.style.transform = buttonEl.data.transform;
      buttonEl.style.transitionDelay = buttonEl.data.transitionDelay;
    });

    this._el.classList.add('is-visible');
  }, 100);
}

Menu.prototype.hide = function () {
  this._isOpened = false;

  this._el.classList.remove('is-visible');

  this._buttonsEl.forEach((buttonEl) => {
    const buttonTextEl = buttonEl.querySelector('.button__text');
    buttonTextEl.classList.add('is-hidden');
    hideButton(buttonEl);
  });
}

function showButton (buttonEl) {
  const buttonTextEl = buttonEl.querySelector('.button__text');
  const buttonOverflowWidth = buttonTextEl.offsetWidth - buttonEl.offsetWidth;
  const left = Math.round(-1 * buttonOverflowWidth / 2);
  buttonTextEl.style.left = `${left}px`;
  buttonTextEl.classList.remove('is-hidden');
}

function hideButton (buttonEl) {
  buttonEl.style.transform = '';
  buttonEl.style.transitionDelay = buttonEl.data.transitionDelay;
}

Menu.EVENTS = EVENTS;

export default Menu;
