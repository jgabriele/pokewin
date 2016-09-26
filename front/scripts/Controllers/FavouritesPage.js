import PokemonToggleList  from '../Views/PokemonToggleList';
// import LocaleManager      from '../LocaleManager';
import Utils              from '../Utils';
import FavouritesModel    from '../Models/Favourites';

export default {
  init(parent) {
    this._el = Utils.DOMElementFromString(
      `<div class="overlay page-favourite">
          <div class="overlay__background"></div>
          <div class="overlay__data">
            <h2 class="title title--large title--white">Favourites</h2>
            <div class="overlay__container js-favourites-pokemons-wrapper">
              <div class="icon-favourite"></div>
              <p>Select any pokemon to add it to your favourites</p>
              <p>
                Favourites pokemons are displayed first in the list of counters.
              </p>
              <p class="hint">
                hint: favourite the pokemons you own to find easily who they counter.
              </p>
            </div>
          </div>
        </div>`
    );

    this._toggleList = new PokemonToggleList(this._el.querySelector('.js-favourites-pokemons-wrapper'))
      .on(PokemonToggleList.EVENTS.TOGGLE_POKEMON, this.onClick.bind(this));

    parent.appendChild(this._el);

    this.hide();
  },

  render(pokemons) {
    pokemons = pokemons.map((p) => Object.assign({}, p, {
      isFavourite: FavouritesModel.getInstance().get(p.id)
    }));
    this._toggleList.render(pokemons);
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
