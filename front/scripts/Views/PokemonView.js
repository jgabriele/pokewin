import Utils          from '../Utils.js';
import Event          from 'events';
import LocaleManager  from '../LocaleManager';

const ACTIONS = {
  SELECT_POKEMON: 'select-pokemon'
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

  domEl.addEventListener('click', this.emit.bind(this, ACTIONS.SELECT_POKEMON, pokemon));

  return domEl;
}

PokemonView.ACTIONS = ACTIONS;

export default PokemonView;