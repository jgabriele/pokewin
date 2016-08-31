import pos from './scripts/pos';
import Polyfills from './scripts/Polyfills';

import LocaleManager from './scripts/LocaleManager';
import Preloader from './scripts/Preloader';
import Utils from './scripts/Utils';

Polyfills.objectAssign();

const NB_VISITS_KEY = 'number-of-visits';

const NAVIGATOR_LANG_TO_LANG = {
  'en-US': 'en',
  'fr-fr': 'fr',
  'fr': 'fr'
};

const MINIUM_MOVE_EFFICIENCY_REQUIRED = 1.25;

const RATIO_EFFICIENT = 1.25;
const RATIO_WEAK = 0.8;

const _state = {};

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
    key: otherPokemon.key,
    move: _findMoveById(moves[0].move),
    efficiency: moves[0].efficiency
  };
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
        tiers: pokemon.tiers
      }
    });
}

function _getPokemonSpritesheetPosition(pokemon, size = 70) {
  const name = LocaleManager.getInstance().translate(pokemon.key, 'en');
  const key = name.toLowerCase()
    .replace(/♀/g, '_f')
    .replace(/♂/g, '_m')
    .replace(/'/g, '')
    .replace(/\./g, '_')
    .replace(/ /g, '');
  const indexX = pos[key].x;
  const indexY = pos[key].y;
  const x = indexX * size;
  const y = indexY * size;

  return `background-position: -${x}px -${y}px`;
}

function _pokemonToHTML(pokemon) {
  return Utils.DOMElementFromString(
    `<div class="pokemon js-pokemon" data-id="${pokemon.id}">
      <div class="picture">
        <div class="pokemon-image" style="${_getPokemonSpritesheetPosition(pokemon)}" /></div>
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
    const moveName = LocaleManager.getInstance().translate(counter.move.key);
    const moveType = counter.move.type;
    const fontSize = Utils.getFontSize(moveName, 70);
    const cp = Math.round(2400 / counter.efficiency);

    return {
      id: counter.id,
      key: counter.key,
      moveType,
      moveName,
      fontSize,
      efficiency: counter.efficiency,
      cp
    };
  })
  .sort((item1, item2) => item1.cp - item2.cp);

  const imageHTML = `<div class="pokemon-image"  style="${_getPokemonSpritesheetPosition(pokemon, 150)}"/></div>`;
  const counterTitle = LocaleManager.getInstance().translate('TEXT_CAN_BE_BEATEN_BY');

  document.querySelector('.overlay__data .js-name').innerText = pokemon.name;
  document.querySelector('.overlay__data .js-picture').innerHTML = imageHTML;
  document.querySelector('.overlay__data .js-types').innerHTML = typesHTML;

  document.querySelector('.overlay__data .counters .js-counters-title').innerHTML = counterTitle;

  _renderCounters(_state.counters);
}

function _renderCounters(counters) {
  const beatenByHTML = counters.map((counterData) => `<div class="other-pokemon js-pokemon" data-id="${counterData.id}">
      <div class="picture">
        <div class="pokemon-image" style="${_getPokemonSpritesheetPosition(counterData)}"/></div>
      </div>
      <div class="type ${Utils.getClassForType(counterData.moveType.id).toLowerCase()}" style="font-size: ${counterData.fontSize}">
        <span class="name">${counterData.moveName}</span>
      </div>
      <div class="cp-value">CP ${counterData.cp}</div>
    </div>`)
  .join('');

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = beatenByHTML;
}

const overlay = document.querySelector('.overlay');
const pokedex = document.querySelector('.pokedex');

function showDetail() {
  window.scroll(0, 0);
  overlay.style.display = "initial";
  overlay.classList.remove('is-hidden');
  pokedex.classList.add('is-behind');
}

overlay.addEventListener('transitionend', () => {
  overlay.style.display = "none";
});
overlay.style.display = "none";
function hideDetail() {
  overlay.classList.add('is-hidden');
  pokedex.classList.remove('is-behind');
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
let pokemonsFull;

function _startup () {
  const preloader = new Preloader()
    .on(Preloader.EVENTS.PROGRESS, _setProgress);

  preloader
    .fetchAll([
      {name: 'pokemons', url: `${location.origin}/data/pokemons.json`},
      {name: 'types', url: `${location.origin}/data/types.json`},
      {name: 'moves', url: `${location.origin}/data/moves.json`},
      {name: 'dictionary', url: `${location.origin}/data/dictionary.json`}
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
      const browserLang = navigator.language || navigator.userLanguage || 'en';
      localeManager.setLanguage(NAVIGATOR_LANG_TO_LANG[browserLang]);

      localeManager.scanAndLocalise();

      window.__localeManager = localeManager;

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

      setTimeout(_hideLoading, 600);
    })
    .catch((err) => console.error.bind(console))
}

_startup();
