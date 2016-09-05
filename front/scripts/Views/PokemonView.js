import Utils from '../Utils.js';
import Event from 'events';

const ACTIONS = {
  SELECT_POKEMON: 'select-pokemon'
}

function PokemonView() {}

PokemonView.prototype = Object.create(Event.prototype);

PokemonView.prototype.prerender = function(pokemon) {
  const domEl = Utils.DOMElementFromString(
    `<div class="pokemon js-pokemon">
      <div class="picture">
        <div class="pokemon-image is-loading" style="${Utils.getPokemonSpritesheetPosition(pokemon)}" /></div>
      </div>
      <div class="name" data-localisable-key="${pokemon.key}">
        ${pokemon.name}
      </div>
    </div>`);

  domEl.addEventListener('click', this.emit.bind(this, ACTIONS.SELECT_POKEMON, pokemon));

  return domEl;
}

PokemonView.ACTIONS = ACTIONS;

export default PokemonView;