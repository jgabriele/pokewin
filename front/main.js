const NB_VISITS_KEY = 'number-of-visits';

// Polyfills

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

// Platform detect

/**
 * Checks if the browser supports CSS viewport height (vw) units
 *
 * See this issue: https://github.com/Modernizr/Modernizr/issues/1805
 *
 * Basically vh detection is super shit so we use vw. Thanks iOS!
 * @return {Boolean}
 */
const supportsViewportUnits = (function () {
    if (document.readyState !== 'complete' && document.readyState !== 'loaded') {
        window.console.warn('testing viewport support before dom is ready');
    }

    const element = document.createElement('div');
    element.setAttribute('style', 'height:10px;width:100vw;position:fixed;left:-105%;top:-105%;');
    document.body.appendChild(element);

    const elementWidth = element.clientWidth;

    document.body.removeChild(element);

    return elementWidth === document.body.clientWidth;
})();

const supportsInlineSVG = (function () {
    // It's not possible to emulate this method via URL properly. It
    // relies in legacy browser behavior and some JS DOM manipulation
    // will be required to implement it properly.

    const div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect !== 'undefined' && div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
})()

const supportsBorderRadius = (function () {
    const propList = ['borderRadius', 'BorderRadius', 'MozBorderRadius', 'WebkitBorderRadius', 'OBorderRadius', 'KhtmlBorderRadius'];

    for (let i = 0; i < propList.length; i++) {
        if (document.body.style[propList[i]] !== undefined) {
            return true;
        }
    }

    return false;
})()


const isAndroid = /(Android)\s+([\d.]+)/.test(window.navigator.userAgent);

/**
 * Checks if the browser is an old android webkit
 * @return {Boolean}
 */
const isOldAndroidWebkit = isAndroid && !supportsViewportUnits;

/**
 * Checks if the browser is so old
 * @return {Boolean}
 */
const isLegacyBrowser = !supportsBorderRadius || !supportsInlineSVG;






const _state = {};




const TYPE_TO_CSS_CLASS = [
  'normal',   // 1
  'fighting', // 2
  'flying',   // 3
  'poison',   // 4
  'ground',   // 5
  'rock',     // 6
  'bug',      // 7
  'ghost',    // 8
  'steel',    // 9
  'fire',     // 10
  'water',    // 11
  'grass',    // 12
  'electric', // 13
  'psychic',  // 14
  'ice',      // 15
  'dragon',   // 16
  'dark',     // 17
  'fairy',    // 18
  'unknown',  // 19
  'shadow'    // 20
];

const NAVIGATOR_LANG_TO_LANG = {
  'en-US': 'en',
  'fr-fr': 'fr',
  'fr': 'fr'
};

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1.25;

const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

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

function _intersect(array1, array2, predicate) {
  return array1.filter(function(item) {
      return predicate(array2, item);
  });
}

function _decreaseFontSize(el, unit) {
  const currentValue = Number(el.style.fontSize.substring(0, el.style.fontSize.indexOf(unit)));
  el.style.fontSize = currentValue - 1 + unit;
}

function _getFontSize(moveName, maxSize) {
  maxSize = maxSize * 0.95; // We want to fit in 95% of the size;

  const calculationDiv = document.getElementsByClassName('font-size-calculation')[0];
  calculationDiv.innerText = moveName.toUpperCase();
  calculationDiv.style.fontSize = '10px';
  while(calculationDiv.offsetWidth > maxSize) {
    _decreaseFontSize(calculationDiv, 'px');
  }
  return calculationDiv.style.fontSize;
}

function _getTypeClass(typeId) {
  return TYPE_TO_CSS_CLASS[typeId-1];
}

function _getImagePath(pokemon) {
  const imageName = localeManager.translate(pokemon.key, 'en')
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/♀/g, '_f')
    .replace(/♂/g, '_m')
    .replace(/\./g, '')
    .replace(/'/g, '')
    .replace(/-/g, '_')
  return `images/${imageName}.png`;
}




// Pokemon counters

// Is type1 efficient against type2
function _isTypeEfficient(type1, type2) {
  return type1.damages.double.to.indexOf(type2.id) !== -1; // type1 does 1.25 damages on type2
}

function _isTypeWeak(type1, type2) {
  return type1.damages.half.to.indexOf(type2.id) !== -1 || // type1 does 0.8 damages on type2
    type1.damages.no.to.indexOf(type2.id) !== -1; // no === half in PokeGo
}

function _isSTAB(move, pokemon) {
  return (pokemon.types.map(t => t.id).indexOf(move.type.id) !== -1);
}

function _calculateMoveEfficiency(attackPokemon, attackMove, defenseTypes) {
  // Efficiency of attack pokemon move against defensePokemon
  let attackEfficiency = 1;

  // STAB
  if (_isSTAB(attackMove, attackPokemon)) {
    attackEfficiency *= 1.25;
  }

  defenseTypes.forEach((defenseType) => {
    if (_isTypeEfficient(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_EFFICIENT;
    } else if (_isTypeWeak(attackMove.type, defenseType)) {
      attackEfficiency *= RATIO_WEAK;
    }
  });

  return attackEfficiency;
}

// Tell the type efficiency of one attack with one move against a defense Pokemon
// Average is made against all possible defense pokemon moves as we never
// know which move a defense pokemon has
function _calculatePokemonEfficiency(attackPokemon, attackPokemonMove, defensePokemon, defensePokemonMoves) {
  const attackEfficiency = _calculateMoveEfficiency(
    attackPokemon,
    attackPokemonMove,
    defensePokemon.types
  );

  // Efficiency of defense pokemon moves against attackPokemon
  let index = 0; // Used to calculate average on the fly
  const defenseEfficiency = defensePokemonMoves.reduce((state, defensePokemonMove) => {
    const oldIndex = index++;
    const currentMoveEfficiency = _calculateMoveEfficiency(
      defensePokemon,
      defensePokemonMove,
      attackPokemon.types
    );
    return (state * oldIndex + currentMoveEfficiency) / index;
  }, 1);

  return {
    move: attackPokemonMove.id,
    efficiency: (attackEfficiency / defenseEfficiency).toFixed(3)
  };
}

// Return list of tuples { move, efficiency } where efficiency is attackEff / defenseEff
// attackEff is efficiency of attackPokemon's move against defensePokemon type
// defenseEff is efficiency of each defensePokemon moveS against attackPokemon type
function _getMovesEfficiency(attackPokemon, defensePokemon) {
  const attackPokemonMoves = attackPokemon.moves.quick.concat(attackPokemon.moves.charge);
  const defensePokemonMoves = defensePokemon.moves.quick.concat(defensePokemon.moves.charge);

  return attackPokemonMoves
    .map((move) => {
      return _calculatePokemonEfficiency(
        attackPokemon,
        move,
        defensePokemon,
        defensePokemonMoves
      );
    })
    .filter((moveEfficiency) => {
      return moveEfficiency.efficiency >= MINIUM_MOVE_EFFICIENCY_REQUIRED;
    });
}







function _getCounters(pokemon, otherPokemon) {
  const moves = _getMovesEfficiency(otherPokemon, pokemon);

  if (!moves.length) {
    return null;
  }

  return {
    id: otherPokemon.id,
    image: _getImagePath(_findById(pokemons, otherPokemon.id)),
    move: _findMoveById(moves[0].move),
    efficiency: moves[0].efficiency
  };
}






function _augmentPokemonsData(pokemons) {
  return pokemons
    .map((pokemon) => {
      return {
        id: pokemon.id,
        name: localeManager.translate(pokemon.key),
        image: _getImagePath(_findById(pokemons, pokemon.id)),
        types: pokemon.types
          .map((typeId) => _findById(types, typeId))
          .map((type) => Object.assign({}, type, {
              name: localeManager.translate(type.key),
              cssClass: _getTypeClass(type.id)
          })),
        moves: {
          quick: pokemon.moves.quick.map(_findMoveById),
          charge: pokemon.moves.special.map(_findMoveById)
        },
        tiers: pokemon.tiers
      }
    });
}

function _pokemonToHTML(pokemon) {
  return _DOMElementFromString(
    `<div class="pokemon js-pokemon" data-id="${pokemon.id}">
      <div class="picture">
        <img src="${pokemon.image}">
      </div>
      <div class="name">
        ${pokemon.name}
      </div>
    </div>`);
}

function updateList(pokemons) {
  const t1DOMNodes = pokemons
    .filter(p => p.tiers === 1)
    .map(_pokemonToHTML);
  const t1Fragment = document.createDocumentFragment();
  t1DOMNodes.forEach(t1Fragment.appendChild.bind(t1Fragment));
  document.querySelector('.pokemon-tiers-section-1').appendChild(t1Fragment);

  const t2DOMNodes = pokemons
    .filter(p => p.tiers === 2)
    .map(_pokemonToHTML);
  const t2Fragment = document.createDocumentFragment();
  t2DOMNodes.forEach(t2Fragment.appendChild.bind(t2Fragment));
  document.querySelector('.pokemon-tiers-section-2').appendChild(t2Fragment);

  const t3DOMNodes = pokemons
    .filter(p => p.tiers === 3)
    .map(_pokemonToHTML);
  const t3Fragment = document.createDocumentFragment();
  t3DOMNodes.forEach(t3Fragment.appendChild.bind(t3Fragment));
  document.querySelector('.pokemon-tiers-section-3').appendChild(t3Fragment);
}

function updateDetail(pokemon) {
  // Get counters for current pokemon
  const counters = pokemonsFull
    .map(_getCounters.bind(null, pokemon))
    .filter(p => p); // Filter null efficiencies

  const typesHTML = pokemon.types
            .map((type) => `<div class="type ${type.cssClass}"><span class="name">${type.name}</span></div>`)
            .join('');

  _state.counters = counters.map((counter) => {
    const moveName = localeManager.translate(counter.move.key);
    const moveType = counter.move.type;
    const fontSize = _getFontSize(moveName, 70);
    const cp = Math.round(2400 / counter.efficiency);

    return {
      id: counter.id,
      image: counter.image,
      moveType,
      moveName,
      fontSize,
      efficiency: counter.efficiency,
      cp
    };
  })
  .sort((item1, item2) => item1.cp - item2.cp);

  const imageHTML = `<img src="${pokemon.image}" />`;
  const counterTitle = localeManager.translate('TEXT_CAN_BE_BEATEN_BY');

  document.querySelector('.overlay__data .js-name').innerText = pokemon.name;
  document.querySelector('.overlay__data .js-picture').innerHTML = imageHTML;
  document.querySelector('.overlay__data .js-types').innerHTML = typesHTML;

  document.querySelector('.overlay__data .counters .js-counters-title').innerHTML = counterTitle;

  _renderCounters(_state.counters);
}

function _renderCounters(counters) {
  const beatenByHTML = counters.map((counterData) => `<div class="other-pokemon js-pokemon" data-id="${counterData.id}">
      <div class="picture">
        <img src="${counterData.image}" />
      </div>
      <div class="type ${_getTypeClass(counterData.moveType.id).toLowerCase()}" style="font-size: ${counterData.fontSize}">
        <span class="name">${counterData.moveName}</span>
      </div>
      <div class="cp-value">CP ${counterData.cp}</div>
    </div>`)
  .join('');

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = beatenByHTML;
}

function showDetail() {
  window.scroll(0, 0);
  document.querySelector('.overlay').classList.remove('is-hidden')
  // document.querySelector('.pokedex').classList.add('is-blur')
}

function hideDetail() {
  document.querySelector('.overlay').classList.add('is-hidden')
  // document.querySelector('.pokedex').classList.remove('is-blur')
}

function toggleIntro() {
  document.querySelector('.intro').classList.toggle('is-collapsed');
}

function _DOMElementFromString(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.firstChild;
}

//===== Locale Manager =====//

function LocaleManager(dictionary) {
  this._dictionary = dictionary;
  this._lang = 'en';
}

LocaleManager.prototype.setLanguage = function(lang) {
  this._lang = lang || 'en';
}

LocaleManager.prototype.translate = function(key, lang) {
  const translations = this._dictionary[key];
  if (!translations) {
    console.error('No translation at all for', key);
    return;
  }

  return translations[lang || this._lang];
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

function _openPokemonDetail(event) {
  const pokemonId = event.currentTarget.dataset.id;
  updateDetail(_findById(pokemonsFull, pokemonId));
  showDetail();
  _addPokemonClickEventListeners();
}

function _addPokemonClickEventListeners() {
  Array.prototype.forEach.call(document.querySelectorAll('.js-pokemon'), (el) => {
    el.removeEventListener('click', _openPokemonDetail);
    el.addEventListener('click', _openPokemonDetail);
  });
}

function _addInputChangeClick() {
  document.querySelector('.js-cp-input').addEventListener('change', _recomputeMoves)
}

function _recomputeMoves(e) {
  const newValue = e.target.value;
  _state.counters = _state.counters.map((counter) => Object.assign({}, counter, {
    cp: Math.round(Number(newValue) / counter.efficiency)
  }));

  _renderCounters(_state.counters);
}

// Startup

let pokemons = null, types = null, moves = null, dictionary = null;

let localeManager, pokemonsFull;

function _fetchJson(entries) {
  console.log('Entries to fetch: ', entries.join(','));
  const data = {};
  entries.forEach((entry) => {
    const req = new XMLHttpRequest();
    req.open("GET", `data/${entry}.json`, false);
    req.send();

    if(req.status === 200) {
      localStorage.setItem(entry, req.response);
    }
  });
}

function _startup () {
  // Check in localstorage that we don't already have the data
  const entries = [
    'pokemons',
    'types',
    'moves',
    'dictionary'
  ];

  const remainingEntries = entries.filter((entry) => {
    return !localStorage.getItem(entry);
  });

  if (remainingEntries.length) {
    _fetchJson(remainingEntries);
  }

  pokemons = JSON.parse(localStorage.getItem('pokemons'));
  types = JSON.parse(localStorage.getItem('types'));
  moves = JSON.parse(localStorage.getItem('moves'));
  dictionary = JSON.parse(localStorage.getItem('dictionary'));

  localeManager = new LocaleManager(dictionary);
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  localeManager.setLanguage(NAVIGATOR_LANG_TO_LANG[browserLang]);

  const localisables = document.querySelectorAll('[data-localisable-key]');
  Array.prototype.forEach.call(localisables, (localisableElement) => {
    const key = localisableElement.dataset.localisableKey;
    localisableElement.innerText = localeManager.translate(key);
  });

  pokemonsFull = _augmentPokemonsData(pokemons);
  updateList(pokemonsFull);

  _addKeyboardListener();
  _addPokemonClickEventListeners();
  _addInputChangeClick();

  document.querySelector('.js-background').addEventListener('click', hideDetail);
  document.querySelector('.js-close').addEventListener('click', hideDetail);
  document.querySelector('.js-intro').addEventListener('click', toggleIntro);

  // Check in localStorage whether we need to show the intro collapsed on start
  let nbVisits = localStorage && localStorage.getItem(NB_VISITS_KEY);
  if (nbVisits && nbVisits >= 3) {
    toggleIntro();
  } else {
    localStorage.setItem(NB_VISITS_KEY, ++nbVisits);
  }
}

_startup();