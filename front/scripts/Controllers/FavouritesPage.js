import PokemonToggleList  from '../Views/PokemonToggleList';
// import LocaleManager      from '../LocaleManager';
import Utils              from '../Utils';
import FavouritesModel    from '../Models/Favourites';

export default {
  init(parent) {
    this._el = Utils.DOMElementFromString(
      `<div class="overlay">
          <div class="overlay__background"></div>
          <div class="overlay__data">
            <div class="overlay__container js-togglelist-wrapper"></div>
          </div>
        </div>`
    );

    this._toggleList = new PokemonToggleList(this._el.querySelector('.js-togglelist-wrapper'))
      .on(PokemonToggleList.EVENTS.TOGGLE_POKEMON, this.onClick.bind(this));

    parent.appendChild(this._el);

    this.hide();
  },

  render(pokemons) {
    pokemons = pokemons.map((p) => Object.assign({}, p, {
      isFavourite: FavouritesModel.get(p.id)
    }));
    this._toggleList.render(pokemons);
  },

  show() {
    this._el.style.display = 'block';
  },

  hide() {
    this._el.style.display = 'none';
  },

  onClick(pokemon) {
    FavouritesModel.toggle(pokemon.id);
  }
};
