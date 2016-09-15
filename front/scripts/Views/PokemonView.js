import Utils          from '../Utils.js';
import Event          from 'events';
import LocaleManager  from '../LocaleManager';

const ACTIONS = {
  SELECT_POKEMON: 'select-pokemon',
  LONG_SELECT_POKEMON: 'long-select-pokemon'
}

// Attaching the "click" tp touchend triggers it even in case of scroll
// and we don't want that. So we set a flag when we scroll and during 300ms
// after stopping;
let _isScrolling = false;
let _scrollStopTimoutId = null;
document.addEventListener('scroll', () => {
  _isScrolling = true;
  window.clearTimeout(_scrollStopTimoutId);
  _scrollStopTimoutId = window.setTimeout(() => { _isScrolling = false }, 300);
});

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
  if (_isScrolling) {
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