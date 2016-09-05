import Utils from '../Utils.js';

const ListView = {
  render(pokemons) {
    _renderPokemonTiers(1, pokemons);
    _renderPokemonTiers(2, pokemons);
    _renderPokemonTiers(3, pokemons);
  }
};

function _renderPokemonTiers(tiers, pokemons) {
    const tiersDOMNodes = pokemons
      .filter(p => p.tiers === tiers)
      .map(_pokemonToHTML);
    const tiersFragment = document.createDocumentFragment();
    tiersDOMNodes.forEach(tiersFragment.appendChild.bind(tiersFragment));
    document.querySelector(`.pokemon-tiers-section-${tiers}`).appendChild(tiersFragment);
}

function _pokemonToHTML(pokemon) {
  return Utils.DOMElementFromString(
    `<div class="pokemon js-pokemon" data-id="${pokemon.id}">
      <div class="picture">
        <div class="pokemon-image is-loading" style="${Utils.getPokemonSpritesheetPosition(pokemon)}" /></div>
      </div>
      <div class="name" data-localisable-key="${pokemon.key}">
        ${pokemon.name}
      </div>
    </div>`);
}

export default ListView;