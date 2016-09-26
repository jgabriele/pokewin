import Utils          from '../Utils.js';
import Event          from 'events';
import LocaleManager  from '../LocaleManager';

const ACTIONS = {
  SELECT_POKEMON: 'select-pokemon'
}

function PokemonView(pokemon) {
  this._pokemon = pokemon;
}

PokemonView.prototype = Object.create(Event.prototype);

PokemonView.prototype.prerender = function() {
  const pokemon = this._pokemon;
  const pokemonName = LocaleManager.getInstance().translate(pokemon.key);
  const favouriteClass = pokemon.isFavourite ? 'is-favourite' : '';
  const domEl = Utils.DOMElementFromString(
    `<div class="pokemon ${favouriteClass} js-pokemon">
      <div class="picture">
        <div class="pokemon-image" style="${Utils.getPokemonSpritesheetPosition(pokemon)}" /></div>
      </div>
      <div class="name" data-localisable-key="${pokemon.key}">
        ${pokemonName}
      </div>
    </div>`);

  domEl.addEventListener('click', (e) => this.onClick(pokemon, e));

  return domEl;
}

PokemonView.prototype.onClick = function(pokemon, e) {
  this.emit(ACTIONS.SELECT_POKEMON, pokemon, e.currentTarget);
}

PokemonView.ACTIONS = ACTIONS;

export default PokemonView;