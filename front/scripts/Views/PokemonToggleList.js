import Event          from 'events';
import Utils          from '../Utils.js';
import PokemonView    from './PokemonView';
import LocaleManager  from '../LocaleManager';

const EVENTS = {
  TOGGLE_POKEMON: 'toggle-pokemon'
}

function ListView(parent) {
  this._parent = parent;
}

ListView.prototype = Object.create(Event.prototype);

ListView.prototype.render = function(pokemons) {
  this._el = Utils.DOMElementFromString(
    `<div class="pokedex">
      <p>Select any pokemon to add it to your favourites</p>
      <p>Favourites pokemons are displayed first in the list of counters</p>
    </div>`
  );

  const pokemonNodes = pokemons
    .map(this._prerenderPokemon.bind(this));

  const fragment = document.createDocumentFragment();
  pokemonNodes.forEach(fragment.appendChild.bind(fragment));

  this._el.appendChild(fragment);

  this._parent.appendChild(this._el);
}

ListView.prototype._prerenderPokemon = function(pokemon) {
  const pokeView = new PokemonView()
    .on(PokemonView.ACTIONS.SELECT_POKEMON, this.emit.bind(this, EVENTS.TOGGLE_POKEMON, pokemon));

  return pokeView.prerender(pokemon);
}

function getTitleForTiers (tiers) {
  const key = (tiers === 1) && 'TEXT_MOST_SEEN' ||
    ((tiers === 2) && 'TEXT_BIT_LESS_SEEN') ||
    'TEXT_OTHER';

  return LocaleManager.getInstance().translate(key);
}

ListView.EVENTS = EVENTS;

export default ListView;