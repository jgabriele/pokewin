import PokemonToggleList  from '../Views/PokemonToggleList';
import LocaleManager      from '../LocaleManager';
import Utils              from '../Utils';
import FavouritesModel    from '../Models/Favourites';

export default {
  init(parent) {
    this._el = Utils.DOMElementFromString('<div></div>');
    parent.appendChild(this._el);
  },

  render(pokemons) {
    const favouritesTitle = LocaleManager.getInstance().translate('TEXT_FAVOURITES');
    const favouritesIntro = LocaleManager.getInstance().translate('TEXT_FAVOURITES_INTRO');
    const hintTitle = LocaleManager.getInstance().translate('TEXT_HINT_TITLE');
    const hintText = LocaleManager.getInstance().translate('TEXT_FAVOURITES_HINT_TEXT');

    const el = Utils.DOMElementFromString(
      `<div class="overlay page">
        <div class="overlay__background"></div>
        <div class="overlay__data">

          <h2 class="title title--large title--white">
            ${favouritesTitle}
          </h2>

          <div class="overlay__container js-favourites-pokemons-wrapper">
            <div class="icon-favourite"></div>
            <header>
              <div>
                ${favouritesIntro}
              </div>
              <div class="hint hint--favourite">
                <p>${hintTitle}</p>
                <p>${hintText}</p>
              </div>
            </header>
          </div>
        </div>
      </div>`
    );

    this._el.innerHTML = '';
    this._el.appendChild(el);

    pokemons = pokemons.map((p) => Object.assign({}, p, {
      isFavourite: FavouritesModel.getInstance().get(p.id)
    }));

    // OPTIM – avoid creating a new object everytime
    this._toggleList = null;
    this._toggleList = new PokemonToggleList(this._el.querySelector('.js-favourites-pokemons-wrapper'))
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
    el.classList.toggle('is-favourite');
    FavouritesModel.getInstance().toggle(pokemon.id);
  }
};
