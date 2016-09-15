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

  domEl.addEventListener('touchstart', this.onTouchStart.bind(this));
  domEl.addEventListener('touchend', () => this.onTouchEnd(pokemon));

  return domEl;
}

PokemonView.prototype.onTouchStart = function() {
  this._touchStartTime = new Date();
}

PokemonView.prototype.onTouchEnd = function(pokemon) {
  if (Utils.isDocumentScrolling()) {
    return;
  }

  const diff = new Date() - this._touchStartTime;

  if (diff < 250) {
    this.emit(ACTIONS.SELECT_POKEMON, pokemon);
  } else {
    this.emit(ACTIONS.LONG_SELECT_POKEMON, pokemon);
  }

}

PokemonView.ACTIONS = ACTIONS;

export default PokemonView;