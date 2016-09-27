import Polyfills from './scripts/Polyfills';

import LocaleManager  from './scripts/LocaleManager';
import Preloader      from './scripts/Preloader';
import Utils          from './scripts/Utils';
import PokeUtils      from './scripts/Utils/PokeUtils';

import ListView             from './scripts/Views/ListView';
import CounterView          from './scripts/Views/CounterView';
import DetailsView          from './scripts/Views/DetailsView';
import LanguageSelectView   from './scripts/Views/LanguageSelectView';
import ModalView            from './scripts/Views/ModalView';
import MultipleChoices      from './scripts/Views/Modal/MultipleChoices';
import FloatingButton       from './scripts/Views/FloatingButton';
import Menu                 from './scripts/Views/Menu';
import PokemonToggleList    from './scripts/Views/PokemonToggleList';

import FavouritesPage     from './scripts/Controllers/FavouritesPage';
import LoadingModal       from './scripts/Controllers/LoadingModal';
import MainFloatingButton from './scripts/Controllers/MainFloatingButton';
import PinnedSectionPage  from './scripts/Controllers/PinnedSectionPage';

import PinnedModel from './scripts/Models/Pinned';

Polyfills.objectAssign();

const LANGUAGE_KEY = 'language';

const NAVIGATOR_LANG_TO_LANG = {
  'en-US': 'en',
  'fr-fr': 'fr',
  'fr': 'fr'
};

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1;

//------------------

function _findById(list, id) {
  if (typeof(id) === 'string') {
    id = Number(id);
  }
  const results = list.filter((item) => item.id === id);
  return results && results[0];
}

function _findTypeById(id) {
  return _findById(types, id);
}

function _findMoveById(id) {
  const move = Object.assign({}, _findById(moves, id));
  move.type = _findTypeById(move.type);
  return move;
}

function _augmentPokemonsData(pokemons) {
  return pokemons
    .map((pokemon) => {
      return {
        id: pokemon.id,
        name: LocaleManager.getInstance().translate(pokemon.key),
        key: pokemon.key,
        types: pokemon.types
          .map((typeId) => _findById(types, typeId))
          .map((type) => Object.assign({}, type, {
              name: LocaleManager.getInstance().translate(type.key),
              cssClass: Utils.getClassForType(type.id)
          })),
        moves: {
          quick: pokemon.moves.quick.map(_findMoveById),
          charge: pokemon.moves.special.map(_findMoveById)
        },
        tiers: pokemon.tiers,
        cpMax: pokemon.cpMax
      }
    });
}

//------------------

const menu = new Menu()
  .on(Menu.EVENTS.FAVOURITES, showFavouritesPage)
  .on(Menu.EVENTS.PINNED_SECTION, showPinnedSectionPage);

function showFavouritesPage() {
  MainFloatingButton.setState('FAVOURITES');
  menu.hide();
  listView.block();

  FavouritesPage.render(pokemonsFull);
  FavouritesPage.show();
  window.scroll(0, 0);
}

function showPinnedSectionPage() {
  MainFloatingButton.setState('PINNED_SECTION');
  menu.hide();
  listView.block();

  PinnedSectionPage.render(pokemonsFull);
  PinnedSectionPage.show();
  window.scroll(0, 0);
}

MainFloatingButton.init(document.querySelector('.js-floating-button-wrapper'), 'MENU');
MainFloatingButton.addState('BASE', {
  action: () => {
    menu.update();
    setTimeout(() => menu.show(), 0);
  },
  buttonType: 'MENU',
  nextState: 'MENU'
});
MainFloatingButton.addState('MENU', {
  action: () => menu.hide(),
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.addState('DETAILS', {
  action: hideDetail,
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.addState('FAVOURITES', {
  action: () => {
    menu.hide();
    FavouritesPage.hide();
    listView.unBlock();
  },
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.addState('PINNED_SECTION', {
  action: () => {
    menu.hide();
    updateListView(pokemonsFull);
    PinnedSectionPage.hide();
    listView.unBlock();
  },
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.setState('BASE');


//------------------

LoadingModal.init(document.querySelector('.js-modal-wrapper'));

//------------------

function updateListView(pokemonsFull) {
  const pinnedPokemons = pokemonsFull.filter((p) => PinnedModel.getInstance().get(p.id));
  const t1Pokemons = pokemonsFull.filter((p) => !PinnedModel.getInstance().get(p.id) && p.tiers === 1);
  const t2Pokemons = pokemonsFull.filter((p) => !PinnedModel.getInstance().get(p.id) && p.tiers === 2);
  const t3Pokemons = pokemonsFull.filter((p) => !PinnedModel.getInstance().get(p.id) && p.tiers === 3);

  listView.render(pinnedPokemons, t1Pokemons, t2Pokemons, t3Pokemons);
}

function updateDetail(pokemons, pokemon) {
  const counters = PokeUtils
    .getCounters(MINIUM_MOVE_EFFICIENCY_REQUIRED, pokemons, pokemon);

  DetailsView
    .removeAllListeners()
    .on(DetailsView.EVENTS.COUNTER_SELECTED, updateDetail.bind(null, pokemons))
    .render({
      pokemon,
      counters,
      isLoading
    });

  MainFloatingButton.setState('DETAILS');
}

const detailsOverlay = document.querySelector('.js-details-overlay');

function showDetail() {
  window.scroll(0, 0);
  detailsOverlay.style.display = "initial";
  detailsOverlay.classList.remove('is-hidden');
  listView.block();
}

detailsOverlay.addEventListener('transitionend', () => {
  detailsOverlay.style.display = "none";
});
detailsOverlay.style.display = "none";
function hideDetail() {
  detailsOverlay.classList.add('is-hidden');
  listView.unBlock();
}

function toggleIntro() {
  document.querySelector('.intro').classList.toggle('is-collapsed');
}

//===== Loading screen =====//

const loadingEl = document.querySelector('.loading-screen');
const loadingProgress = document.querySelector('.loading-screen .progress .value');

loadingEl.addEventListener('transitionend', () => {
    loadingEl.style.display = "none";
  });
loadingEl.addEventListener('webkitTransitionend', () => {
    loadingEl.style.display = "none";
  });
function _hideLoading() {
  loadingEl.classList.add('is-hidden');
}

function _setProgress(progress) {
  loadingProgress.innerHTML = progress;
}

//===== Startup =====//

// Listeners

function _addKeyboardListener() {
  window.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
      hideDetail();
    }
  })
}

function _onPokemonSelected(pokemons, pokemon) {
  updateDetail(pokemons, pokemon);
  showDetail();
}

function _removeLoadingState() {
  isLoading = false;
  document.body.classList.remove('is-loading');
}

function _onLanguageSelected(lang = 'en') {
  LocaleManager.getInstance().setLanguage(lang);
  LocaleManager.getInstance().scanAndLocalise();

  // Save preferred language in localstorage
  if (localStorage) {
    localStorage.setItem(LANGUAGE_KEY, lang);
  }
}

// Startup

let pokemons = null, types = null, moves = null, dictionary = null;
let pokemonsFull;
let listView;
let isLoading = true;

if (Utils.isMobileDevice()) {
  document.querySelector('body').classList.add('is-mobile');
}

function _startup () {
  const preloader = new Preloader()
    .on(Preloader.EVENTS.PROGRESS, _setProgress);

  preloader
    .fetchAll([
      {
        name: 'pokemons',
        url: `${location.origin}/data/pokemons.json`
      },
      {
        name: 'types',
        url: `${location.origin}/data/types.json`
      },
      {
        name: 'moves',
        url: `${location.origin}/data/moves.json`
      },
      {
        name: 'dictionary',
        url: `${location.origin}/data/dictionary.json`
      },
      {
        name: 'spritesheet-lowres',
        url: `${location.origin}/images/pokemon-spritesheet-lowres.png`,
        type: 'image'
      }
    ])
    .then((allJSONResults) => {
      // We need one object like {entryName: json, otherEntry: otherjson}
      // from array of [entryName, json]
      const entryJsonMap = allJSONResults.reduce((state, tuple) => {
        state[tuple[0]] = tuple[1];
        return state;
      }, {});

      pokemons = JSON.parse(entryJsonMap.pokemons);
      types = JSON.parse(entryJsonMap.types);
      moves = JSON.parse(entryJsonMap.moves);
      dictionary = JSON.parse(entryJsonMap.dictionary);

      LocaleManager.prepare(dictionary);
      const localeManager = LocaleManager.getInstance();

      const languageSelectView = new LanguageSelectView(
          document.querySelector('.js-language-selector-wrapper'),
          localeManager.getLanguages()
        )
        .on(LanguageSelectView.ACTIONS.SELECT_LANGUAGE, _onLanguageSelected);
      languageSelectView.render();

      // Priority for language:
      // 1) lang parameter in Query String
      // 2) value for localStorage
      // 3) browser language
      const queryLanguage = Utils.getLanguageQueryParameter();
      const storedLanguage = localStorage && localStorage.getItem(LANGUAGE_KEY);
      const browserLang = NAVIGATOR_LANG_TO_LANG[navigator.language || navigator.userLanguage || 'en'];
      const requestedLang = queryLanguage || storedLanguage || browserLang;

      pokemonsFull = _augmentPokemonsData(pokemons);

      listView = new ListView(document.querySelector('.js-list-view-wrapper'))
        .on(ListView.EVENTS.POKEMON_SELECTED, _onPokemonSelected.bind(null, pokemonsFull));
      updateListView(pokemonsFull);

      _addKeyboardListener();

      document.querySelector('.js-background').addEventListener('click', hideDetail);
      document.querySelector('.js-intro').addEventListener('click', toggleIntro);

      // Check in localStorage whether we need to show the intro collapsed on start
      if (localStorage) {
        let nbVisits = Utils.getNumberOfVisits();
        if (nbVisits && nbVisits >= 3) {
          toggleIntro();
        }

        Utils.increateVisits();
      }

      // Preload the high res spritesheet now that the page has loaded
      preloader.preloadImage(`${location.origin}/images/pokemon-spritesheet.png`)
        .then(_removeLoadingState);

      // Prepare the favourites. TODO remove from here
      FavouritesPage.init(document.body);
      PinnedSectionPage.init(document.body);

      // Localise all tagged text
      languageSelectView.selectLanguage(requestedLang);

      setTimeout(_hideLoading, 200);

      setTimeout(() => LoadingModal.showModal(), 600);

      // debug
      window.__localeManager = localeManager;
      window.__pokemons = pokemons;
      window.__types = types;
      window.__moves = moves;
    })
    .catch((err) => console.error.bind(console))
}

_startup();