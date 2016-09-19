import Utils          from '../Utils.js';
import Event          from 'events';
import LocaleManager  from '../LocaleManager';

const ACTIONS = {
  SELECT_POKEMON: 'select-pokemon',
  LONG_SELECT_POKEMON: 'long-select-pokemon'
}

function PokemonView() {}

PokemonView.prototype = Object.create(Event.prototype);

PokemonView.prototype.prerender = function(pokemon) {
  const pokemonName = LocaleManager.getInstance().translate(pokemon.key);
  const domEl = Utils.DOMElementFromString(
    `<div class="pokemon js-pokemon">
      <div class="picture">
        <div class="pokemon-image is-loading" style="${Utils.getPokemonSpritesheetPosition(pokemon)}" /></div>
      </div>
      <div class="name" data-localisable-key="${pokemon.key}">
        ${pokemonName}
      </div>
    </div>`);

  // if (Utils.isMobileDevice()) {
  //   domEl.addEventListener('touchstart', () => this.onTouchStart(pokemon));
  //   domEl.addEventListener('touchend', (e) => this.onTouchEnd(pokemon, e));
  // } else {
    domEl.addEventListener('click', (e) => this.onTouchEnd(pokemon, e));
  // }

  return domEl;
}

PokemonView.prototype.onTouchStart = function(pokemon) {
  this._longSelectHandled = false;
  // Start a timer to emit LONG_SELECT_POKEMON event after 500ms
  this._startTimeoutId = setTimeout(() => {
    this._longSelectHandled = true;
    this.emit(ACTIONS.LONG_SELECT_POKEMON, pokemon);
  }, 500);
}

PokemonView.prototype.onTouchEnd = function(pokemon, e) {
  if (this._longSelectHandled) {
    // To avoid triggering other stuff later
    e.preventDefault();
    return;
  }

  // Finally it was not a long select
  clearTimeout(this._startTimeoutId);

  if (Utils.isDocumentScrolling()) {
    return;
  }

  this.emit(ACTIONS.SELECT_POKEMON, pokemon);

  // To avoid triggering other stuff later
  e.preventDefault();

}

PokemonView.ACTIONS = ACTIONS;

export default PokemonView;