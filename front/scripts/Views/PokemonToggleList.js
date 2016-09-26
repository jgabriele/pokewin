import Event          from 'events';
import Utils          from '../Utils.js';
import PokemonView    from './PokemonView';
import LocaleManager  from '../LocaleManager';

const EVENTS = {
  TOGGLE_POKEMON: 'toggle-pokemon'
}

function ListView(parent) {
  this._el = Utils.DOMElementFromString(
    `<div></div>`
  );

  parent.appendChild(this._el);
}

ListView.prototype = Object.create(Event.prototype);

ListView.prototype.render = function(pokemons) {
  const el = Utils.DOMElementFromString(
    `<div class="pokedex js-favourite-list"></div>`
  );

  const pokemonNodes = pokemons
    .map(this._prerenderPokemon.bind(this));

  const fragment = document.createDocumentFragment();
  pokemonNodes.forEach(fragment.appendChild.bind(fragment));

  el.appendChild(fragment);

  this._el.innerHTML = '';
  this._el.appendChild(el);
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