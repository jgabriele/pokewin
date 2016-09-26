import PokemonToggleList  from '../Views/PokemonToggleList';
// import LocaleManager      from '../LocaleManager';
import Utils              from '../Utils';
import PinnedModel        from '../Models/Pinned';

export default {
  init(parent) {
    this._el = Utils.DOMElementFromString(
      `<div class="overlay page-pinned-section">
          <div class="overlay__background"></div>
          <div class="overlay__data">
            <h2 class="title title--large title--white">
              Pinned Section
            </h2>
            <div class="overlay__container js-pinned-pokemons-wrapper">
              <div class="icon-pin"></div>
              <p>Select any pokemon to add it to the Pinned Section on the main page</p>
              <p>
                The Pinned Section is displayed at the top of the main page
              </p>
              <p class="hint">
                hint: pin the pokemons you often see in gyms so you don't have to
                search them through the whole list.
              </p>
            </div>
          </div>
        </div>`
    );

    this._toggleList = new PokemonToggleList(this._el.querySelector('.js-pinned-pokemons-wrapper'))
      .on(PokemonToggleList.EVENTS.TOGGLE_POKEMON, this.onClick.bind(this));

    parent.appendChild(this._el);

    this.hide();
  },

  render(pokemons) {
    pokemons = pokemons.map((p) => Object.assign({}, p, {
      isPinned: PinnedModel.getInstance().get(p.id)
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
    el.classList.toggle('is-pinned');
    PinnedModel.getInstance().toggle(pokemon.id);
  }
};
