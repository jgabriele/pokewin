import PokemonToggleList  from '../Views/PokemonToggleList';
import LocaleManager      from '../LocaleManager';
import Utils              from '../Utils';
import PinnedModel        from '../Models/Pinned';

export default {
  init(parent) {
    this._el = Utils.DOMElementFromString('<div></div>');
    parent.appendChild(this._el);
  },

  render(pokemons) {
    const pinnedTitle = LocaleManager.getInstance().translate('TEXT_PINNED_TITLE');
    const pinnedIntro = LocaleManager.getInstance().translate('TEXT_PINNED_INTRO');
    const hintTitle = LocaleManager.getInstance().translate('TEXT_HINT_TITLE');
    const hintText = LocaleManager.getInstance().translate('TEXT_PINNED_HINT_TEXT');

    const el = Utils.DOMElementFromString(
      `<div class="overlay page-pinned-section">
          <div class="overlay__background"></div>
          <div class="overlay__data">
            <h2 class="title title--large title--white">
              ${pinnedTitle}
            </h2>
            <div class="overlay__container js-pinned-pokemons-wrapper">
              <div class="icon-pin"></div>
              <div>
                ${pinnedIntro}
              </div>
              <div class="hint">
                <p>${hintTitle}</p>
                <p>${hintText}</p>
              </div>
            </div>
          </div>
        </div>`
    );

    this._el.innerHTML = '';
    this._el.appendChild(el);

    pokemons = pokemons.map((p) => Object.assign({}, p, {
      isPinned: PinnedModel.getInstance().get(p.id)
    }));

    // OPTIM – avoid creating a new object everytime
    this._toggleList = null;
    this._toggleList = new PokemonToggleList(this._el.querySelector('.js-pinned-pokemons-wrapper'))
      .on(PokemonToggleList.EVENTS.TOGGLE_POKEMON, this.onClick.bind(this))
      .render(pokemons);
  },

  show() {
    this._el.style.display = 'block';
  },

  hide() {
    this._el.style.display = 'none';
  },

  onClick(pokemon, el) {
    el.classList.toggle('is-pinned');
    PinnedModel.getInstance().toggle(pokemon.id);
  }
};
