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
    transform: 'translate3d(70px, -70px, 0px)',
    transitionDelay: '200ms'
  }
];

function Menu() {}

Menu.prototype = Object.create(Event.prototype);

Menu.prototype.render = function () {
  const menuButtons = buttons.map((button) => {
    const el = Utils.DOMElementFromString(
      `<div class="button">
        <div class="button__icon"></div>
        <div class="button__text is-hidden">${button.name}</div>
      </div>`
    );

    el.addEventListener('click', this.emit.bind(this, button.event));

    setTimeout(() => {
      el.style.transform = button.transform;
      el.style.transitionDelay = button.transitionDelay;
      el.addEventListener('transitionend', function () {
        const buttonTextEl = el.querySelector('.button__text');
        const buttonOverflowWidth = buttonTextEl.offsetWidth - el.offsetWidth;
        const left = Math.round(-1 * buttonOverflowWidth / 2);
        buttonTextEl.style.left = `${left}px`;
        buttonTextEl.classList.remove('is-hidden');
      });
    }, 50);
    return el;
  });

  const el = Utils.DOMElementFromString(
    `<div class="menu">
    </div>`
  );

  menuButtons.forEach((button) => {
    el.appendChild(button);
  })

  document.querySelector('body').appendChild(el);

  setTimeout(() => { el.classList.add('is-visible') }, 0);

  return this;
}

Menu.EVENTS = EVENTS;

export default Menu;
