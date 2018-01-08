import Polyfills from './scripts/Polyfills';

import { init as initConfig, getSorting }  from './scripts/Config';

import LocaleManager    from './scripts/LocaleManager';
import Preloader        from './scripts/Preloader';
import Utils            from './scripts/Utils';
import PokeUtils        from './scripts/Utils/PokeUtils';
import { userIsPatron } from './scripts/Utils/PatreonUtils';

import SearchView           from './scripts/Views/SearchView'
import ListView             from './scripts/Views/ListView';
import CounterView          from './scripts/Views/CounterView';
import DetailsView          from './scripts/Views/DetailsView';
import ModalView            from './scripts/Views/ModalView';
import MultipleChoices      from './scripts/Views/Modal/MultipleChoices';
import FloatingButton       from './scripts/Views/FloatingButton';
import Menu                 from './scripts/Views/Menu';
import PokemonToggleList    from './scripts/Views/PokemonToggleList';

import FavouritesPage     from './scripts/Controllers/FavouritesPage';
import LoadingModal       from './scripts/Controllers/LoadingModal';
import MainFloatingButton from './scripts/Controllers/MainFloatingButton';
import PinnedSectionPage  from './scripts/Controllers/PinnedSectionPage';

Polyfills.objectAssign()

initConfig()

const scriptsWrapper = Utils.DOMElementFromString(
  `<div class="wrapper">
  </div>`
)

// Add ads if user is not a patron and no query param to disable
if (!(userIsPatron() || Utils.getNoAdsQueryParameter())) {
  const configScript = document.createElement("script");
  configScript.type = 'text/javascript';
  configScript.appendChild(document.createTextNode(
    `var infolinks_pid = 2867010;
      var infolinks_wsid = 0;`
  ))
  scriptsWrapper.appendChild(configScript)

  const libScript = document.createElement("script")
  libScript.type = 'text/javascript'
  libScript.src = '//resources.infolinks.com/js/infolinks_main.js'
  scriptsWrapper.appendChild(libScript)
}

const gaScript = document.createElement("script");
gaScript.type = 'text/javascript';
gaScript.appendChild(document.createTextNode(
  `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-45180397-2', 'auto');
    ga('send', 'pageview');`
))
scriptsWrapper.appendChild(gaScript)

const fbScript = document.createElement("script")
fbScript.type = 'text/javascript'
fbScript.appendChild(document.createTextNode(
  `(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.7&appId=684853784906640";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));`
))
scriptsWrapper.appendChild(fbScript)

setTimeout(() => document.body.appendChild(scriptsWrapper), 2000)

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1

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
    .filter((pokemon) => !pokemon.isUnavailable) // remove unavailable pokemons for now
    .map((pokemon) => Object.assign({}, pokemon, {
        id: pokemon.id,
        name: LocaleManager.getInstance().translate(pokemon.key), // TODO remove
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
    }));
}


//------------------

const menu = new Menu()
  .on(Menu.EVENTS.FAVOURITES, showFavouritesPage)
  .on(Menu.EVENTS.PINNED_SECTION, showPinnedSectionPage);

function showFavouritesPage() {
  MainFloatingButton.setState('FAVOURITES');
  menu.hide();
  listView.block();
  searchView.block()

  FavouritesPage.render(pokemonsFull);
  FavouritesPage.show();
  window.scroll(0, 0);
}

function showPinnedSectionPage() {
  MainFloatingButton.setState('PINNED_SECTION');
  menu.hide();
  listView.block();
  searchView.block()

  PinnedSectionPage.render(pokemonsFull);
  PinnedSectionPage.show();
  window.scroll(0, 0);
}

MainFloatingButton.init(document.querySelector('.js-floating-button-wrapper'), 'MENU');
MainFloatingButton.addState('BASE', {
  action: () => {
    menu.update()
    setTimeout(() => menu.show(), 0)
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
    FavouritesPage.hide()
    listView.unBlock()
    searchView.unblock()
    window.scroll(0, window.scrollY + searchView.getHeight())
  },
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.addState('PINNED_SECTION', {
  action: () => {
    menu.hide()
    listView.render()
    PinnedSectionPage.hide()
    listView.unBlock()
    searchView.unblock()
    window.scroll(0, window.scrollY + searchView.getHeight())
  },
  buttonType: 'CLOSE',
  nextState: 'BASE'
});
MainFloatingButton.setState('BASE')


//------------------

LoadingModal.init(document.querySelector('.js-modal-wrapper'))

//------------------

function updateDetail(pokemons, pokemon) {
  const counters = PokeUtils
    .getCounters(MINIUM_MOVE_EFFICIENCY_REQUIRED, pokemons, pokemon)

  const weaks = PokeUtils
    .getWeaks(MINIUM_MOVE_EFFICIENCY_REQUIRED, pokemons, pokemon)

  DetailsView.getInstance()
    .removeAllListeners()
    .on(DetailsView.EVENTS.COUNTER_SELECTED, updateDetail.bind(null, pokemons))
    .on(DetailsView.EVENTS.DODGE_FREQUENCY_UPDATED, updateDetail.bind(null, pokemons, pokemon))
    .render({
      pokemon,
      counters,
      weaks,
      isLoading
    });

  MainFloatingButton.setState('DETAILS')
}

const detailsOverlay = document.querySelector('.js-details-overlay')

function showDetail() {
  window.scroll(0, 0)
  detailsOverlay.style.display = "initial"
  detailsOverlay.classList.remove('is-hidden')
  listView.block()
  searchView.block()
}

detailsOverlay.addEventListener('transitionend', () => {
  detailsOverlay.style.display = "none";
});
detailsOverlay.style.display = "none";
function hideDetail() {
  detailsOverlay.classList.add('is-hidden')
  listView.unBlock()
  searchView.unblock()
  window.scroll(0, window.scrollY + searchView.getHeight())
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
  loadingEl.classList.add('is-hidden')
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
  isLoading = false
  document.body.classList.remove('is-loading')
}

// Startup

let pokemons = null, types = null, moves = null, dictionary = null;
let pokemonsFull;
let listView, searchView;
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

      pokemonsFull = _augmentPokemonsData(pokemons);

      listView = new ListView(document.querySelector('.js-list-view-wrapper'))
        .on(ListView.EVENTS.POKEMON_SELECTED, _onPokemonSelected.bind(null, pokemonsFull));
      listView.init(pokemonsFull)
      listView.render()

      searchView = new SearchView(document.querySelector('.search-wrapper'))
      searchView.render()
      searchView.on(SearchView.EVENTS.SEARCH, (value) => {
        listView.onSearch(value)
      })

      _addKeyboardListener()

      document.querySelector('.js-background').addEventListener('click', hideDetail);

      // Preload the high res spritesheet now that the page has loaded
      preloader.preloadImage(`${location.origin}/images/pokemon-spritesheet.png`)
        .then(_removeLoadingState);

      // Prepare the favourites. TODO remove from here
      FavouritesPage.init(document.body);
      PinnedSectionPage.init(document.body);

      setTimeout(() => {
        _hideLoading()
        let shouldHideScroll = false;

        // On the first 3 visits, user will see the search on load.
        // As it's ugly and after 3 visits people will know where the
        // search is, we will hide it
        if (localStorage) {
          let nbVisits = Utils.getNumberOfVisitsSinceSearch()
          shouldHideScroll = nbVisits >= 4

          Utils.increateVisitsSinceSearch();
        }

        window.scroll(0, shouldHideScroll ? searchView.getHeight() : 0)
      }, 200)

      setTimeout(() => {
        LoadingModal.showModal()
      }, 600)

      // debug
      window.__localeManager = localeManager;
      window.__pokemons = pokemons;
      window.__types = types;
      window.__moves = moves;
    })
    .catch((err) => console.error.bind(console))
}

_startup();
