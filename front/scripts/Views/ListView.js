import Event                from 'events'
import LocaleManager        from '../LocaleManager'
import PokemonView          from './PokemonView'
import LanguageSelectView   from './LanguageSelectView';
import SortingSelectView    from './SortingSelectView';
import Utils                from '../Utils.js'
import PatronsModal         from '../Controllers/PatronsModal'
import PinnedModel          from '../Models/Pinned';
import { getSorting }       from '../Config'

const EVENTS = {
  POKEMON_SELECTED: 'pokemon-selected'
}

const LANGUAGE_KEY = 'language'
const NAVIGATOR_LANG_TO_LANG = {
  'en-US': 'en',
  'fr-fr': 'fr',
  'fr': 'fr'
}


function ListView(parent) {
  this._el = Utils.DOMElementFromString(
    `<section class="pokedex">
      <div class="js-language-selector-wrapper"></div>
      <div class="js-sorting-selector-wrapper"></div>
      
      <h1 class="title">
        <span data-localisable-key="TEXT_APP_TITLE"></span>
        <span class="pokeball"></span>
        <span data-localisable-key="TEXT_APP_SUBTITLE"></span>
      </h1>
      <div class="intro js-intro">
        <p data-localisable-key="TEXT_INTRO_1"></p>
        <p data-localisable-key="TEXT_INTRO_2"></p>
        <p data-localisable-key="TEXT_INTRO_3"></p>
      </div>

      <div class="subtext subtext--patreon js-patreon">
        <p>
          <span data-localisable-key="TEXT_PATRONS_INTRO"></span>
        </p>
      </div>

      <div class='sections'></div>

      <footer>
        <div class="delimiter"></div>
        <div data-localisable-key="TEXT_FOOTER"></div>
        <div data-localisable-key="TEXT_FOOTER_2"></div>
        <div class="fb-like" data-href="https://www.facebook.com/pokewin.win/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
      </footer>
    </section>`
  )

  // Init Selectors in the header
  const languageSelectView = new LanguageSelectView(
      this._el.querySelector('.js-language-selector-wrapper'),
      LocaleManager.getInstance().getLanguages()
    )
    .on(LanguageSelectView.ACTIONS.SELECT_LANGUAGE, _onLanguageSelected);
  languageSelectView.render()

  // Sorting control to define if Pokemons are sorted by A/Z or #
  const sortingSelectView = new SortingSelectView(
      this._el.querySelector('.js-sorting-selector-wrapper')
    )
    .on(SortingSelectView.EVENTS.SORTING_TOGGLED, () => this.render())
  sortingSelectView.render()

  parent.appendChild(this._el)

  // Onclick in the subtext, show Patreon's modal
  document.querySelector('.js-patreon').addEventListener('click', () => PatronsModal.showModal())

  // Toggling the intro on click
  this._introEl = document.querySelector('.js-intro')
  this._introEl.addEventListener('click', this.toggleIntro.bind(this))


  // Check in localStorage whether we need to show the intro collapsed on start
  if (localStorage) {
    let nbVisits = Utils.getNumberOfVisits();
    if (nbVisits && nbVisits >= 3) {
      this.toggleIntro();
    }

    Utils.increateVisits();
  }

  // Priority for language:
  // 1) lang parameter in Query String
  // 2) value for localStorage
  // 3) browser language
  const queryLanguage = Utils.getLanguageQueryParameter();
  const storedLanguage = localStorage && localStorage.getItem(LANGUAGE_KEY);
  const browserLang = NAVIGATOR_LANG_TO_LANG[navigator.language || navigator.userLanguage || 'en'];
  const requestedLang = queryLanguage || storedLanguage || browserLang;

  // Localise all tagged text
  languageSelectView.selectLanguage(requestedLang);
}

ListView.prototype = Object.create(Event.prototype);

ListView.prototype.init = function(pokemons) {
  this._pokemons = pokemons
}

ListView.prototype.render = function(pokemonsOverride) {
  this.reset()

  const pokemons = pokemonsOverride || this._pokemons

  const pinnedPokemons = _getPinnedPokemons(pokemons)
  const t1Pokemons = _getTiersPokemons(pokemons, 1)
  const t2Pokemons = _getTiersPokemons(pokemons, 2)
  const t3Pokemons = _getTiersPokemons(pokemons, 3)

  if (pinnedPokemons.length) {
    this._renderSection(pinnedPokemons, 'TEXT_PINNED', 'pinned-section')
  }

  t1Pokemons.length && this._renderSection(t1Pokemons, 'TEXT_MOST_SEEN')
  t2Pokemons.length && this._renderSection(t2Pokemons, 'TEXT_BIT_LESS_SEEN')
  t3Pokemons.length && this._renderSection(t3Pokemons, 'TEXT_OTHER')
}

ListView.prototype.reset = function () {
  this._el.querySelector('.sections').innerHTML = '';
}

ListView.prototype._renderSection = function(pokemons, titleKey, additionalClass) {
  const sortingFunction = getSorting() === 'A-Z' ? Utils.sortAlphabetically : Utils.sortByNumber
  pokemons = pokemons.sort((item1, item2) => sortingFunction(item1, item2))

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

ListView.prototype.toggleIntro = function () {
  this._introEl.classList.toggle('is-collapsed');
}

ListView.prototype.block = function () {
  this._isBlocked = true;
  this._el.classList.add('is-behind');
}

ListView.prototype.unBlock = function () {
  this._isBlocked = false;
  this._el.classList.remove('is-behind');
}

ListView.prototype.isBlocked = function () {
  return this._isBlocked;
}

ListView.prototype.onSearch = function(searchValue) {
  const searchPokemons = this._pokemons.filter((p) => _isSearchMatch(p, searchValue))
  this.render(searchPokemons)
}

ListView.prototype._prerenderPokemon = function(pokemon) {
  const pokeView = new PokemonView(pokemon)
    .on(PokemonView.ACTIONS.SELECT_POKEMON, this.emit.bind(this, EVENTS.POKEMON_SELECTED, pokemon))

  return pokeView.prerender()
}

function _onLanguageSelected(lang = 'en') {
  LocaleManager.getInstance().setLanguage(lang)
  LocaleManager.getInstance().scanAndLocalise()

  // Save preferred language in localstorage
  if (localStorage) {
    localStorage.setItem(LANGUAGE_KEY, lang)
  }

  // If we're sorting alphabetically, we need to re-render the view
  if (getSorting() === 'A-Z') {
    this.render()
  }
}

function _isSearchMatch(pokemon, searchValue) {
  return LocaleManager.getInstance().translate(pokemon.key).indexOf(searchValue) !== -1
}

function _getPinnedPokemons(pokemons) {
  return pokemons.filter((p) => PinnedModel.getInstance().get(p.id))
}

function _getTiersPokemons(pokemons, tiers) {
  return pokemons.filter((p) => !PinnedModel.getInstance().get(p.id) && p.tiers === tiers)
}

ListView.EVENTS = EVENTS;

export default ListView;
