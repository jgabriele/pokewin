import Event          from 'events';
import LocaleManager  from '../LocaleManager';
import PokemonView    from './PokemonView';
import Utils          from '../Utils.js';

const EVENTS = {
  POKEMON_SELECTED: 'pokemon-selected'
}

function ListView(parent) {
  this._el = Utils.DOMElementFromString(
    `<section class="pokedex">
      <h2 class="title">
        <span class='app-title' data-localisable-key="TEXT_APP_TITLE">
        </span><span data-localisable-key="TEXT_APP_SUBTITLE"></span>
      </h2>
      <div class="intro js-intro">
        <p data-localisable-key="TEXT_INTRO_1"></p>
        <p data-localisable-key="TEXT_INTRO_2"></p>
        <p data-localisable-key="TEXT_INTRO_3"></p>
      </div>

      <div class='sections'></div>

      <footer>
        <div class="delimiter"></div>
        <div data-localisable-key="TEXT_FOOTER"></div>
        <div data-localisable-key="TEXT_FOOTER_2"></div>
        <div class="fb-like" data-href="https://www.facebook.com/pokewin.win/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
      </footer>
    </section>`
  );

  parent.appendChild(this._el);
}

ListView.prototype = Object.create(Event.prototype);

ListView.prototype.render = function(pinnedPokemons, t1Pokemons, t2Pokemons, t3Pokemons) {
  this.reset();

  if (pinnedPokemons.length) {
    this._renderSection(pinnedPokemons, 'TEXT_PINNED', 'pinned-section');
  }
  this._renderSection(t1Pokemons, 'TEXT_MOST_SEEN');
  this._renderSection(t2Pokemons, 'TEXT_BIT_LESS_SEEN');
  this._renderSection(t3Pokemons, 'TEXT_OTHER');
}

ListView.prototype.reset = function () {
  this._el.querySelector('.sections').innerHTML = '';
}

ListView.prototype._renderSection = function(pokemons, titleKey, additionalClass) {
    const tiersDOMNodes = pokemons
      .map(this._prerenderPokemon.bind(this));

    const fragment = document.createDocumentFragment();
    tiersDOMNodes.forEach(fragment.appendChild.bind(fragment));

    const section = Utils.DOMElementFromString(
      `<div>
        <h3 class="title">
          <span class="${additionalClass}" data-localisable-key="${titleKey}">
            ${LocaleManager.getInstance().translate(titleKey)}
          </span>
        </h3>
      <div>`
    );
    section.appendChild(fragment);

    this._el.querySelector('.sections').appendChild(section);
}


ListView.prototype.block = function () {
  this._el.classList.add('is-behind');
}

ListView.prototype.unBlock = function () {
  this._el.classList.remove('is-behind');
}

ListView.prototype._prerenderPokemon = function(pokemon) {
  const pokeView = new PokemonView(pokemon)
    .on(PokemonView.ACTIONS.SELECT_POKEMON, this.emit.bind(this, EVENTS.POKEMON_SELECTED, pokemon));

  return pokeView.prerender();
}

ListView.EVENTS = EVENTS;

export default ListView;