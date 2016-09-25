import Event        from 'events';
import Utils        from '../Utils.js';
import PokemonView  from './PokemonView';

const EVENTS = {
  POKEMON_SELECTED: 'pokemon-selected'
}

function ListView() {}

ListView.prototype = Object.create(Event.prototype);

ListView.prototype.render = function(pokemons) {
  this._renderPokemonTiers(1, pokemons);
  this._renderPokemonTiers(2, pokemons);
  this._renderPokemonTiers(3, pokemons);
}

ListView.prototype._renderPokemonTiers = function(tiers, pokemons) {
    const tiersDOMNodes = pokemons
      .filter(p => p.tiers === tiers)
      .map(this._prerenderPokemon.bind(this));

    const tiersFragment = document.createDocumentFragment();

    tiersDOMNodes.forEach(tiersFragment.appendChild.bind(tiersFragment));

    document.querySelector(`.pokemon-tiers-section-${tiers}`).appendChild(tiersFragment);
}

ListView.prototype._prerenderPokemon = function(pokemon) {
  const pokeView = new PokemonView()
    .on(PokemonView.ACTIONS.SELECT_POKEMON, this.emit.bind(this, EVENTS.POKEMON_SELECTED, pokemon));

  return pokeView.prerender(pokemon);
}

ListView.EVENTS = EVENTS;

export default ListView;