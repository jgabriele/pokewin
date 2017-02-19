import Event        from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';
import CounterView    from './CounterView';
import FavouritesModel from '../Models/Favourites';
import DodgeFrequencyController from '../Controllers/DodgeFrequency';

const EVENTS = {
  COUNTER_SELECTED: 'pokemon-selected',
  DODGE_FREQUENCY_UPDATED: 'frequency-updated'
}

const INITIAL_DEFENSE_POKEMON_CP = 2000;
const INPUT_RANGE_STEP = Utils.isMobileDevice() && 10 || 1;

function DetailsView() {
  this._state = {
    defensePokemonCP: INITIAL_DEFENSE_POKEMON_CP
  };

  if (Utils.isMobileDevice()) {
    this._input = document.querySelector('.js-level-range');
    this._input.addEventListener('input', this.onInputUpdate.bind(this));
    this._input.addEventListener('change', this.onInputRelease.bind(this));
  } else {
    this._input = document.querySelector('.js-level-text');
    this._input.addEventListener('input', (e) => { this.onInputUpdate(e); this.onInputRelease(e) });
  }

  this._level = document.querySelector('.js-cp-value');

  this._name = document.querySelector('.overlay__data .js-name');
  this._picture = document.querySelector('.overlay__data .js-picture')
  this._types = document.querySelector('.overlay__data .js-types')

  DodgeFrequencyController.init(document.querySelector('.dodge-frequency'))

  DodgeFrequencyController.on(DodgeFrequencyController.EVENTS.CHANGE_QUICK_FREQUENCY,
    this._onQuickFrequencyChange.bind(this));
  DodgeFrequencyController.on(DodgeFrequencyController.EVENTS.CHANGE_SPECIAL_FREQUENCY,
    this._onSpecialFrequencyChange.bind(this));
}

DetailsView.prototype = Object.create(Event.prototype);

DetailsView.prototype.render = function(data) {

  const pokemon = data.pokemon;
  this._state.counters = data.counters;
  this._state.weaks = data.weaks;

  const typesHTML = pokemon.types
            .map((type) => `
              <div class="type ${type.cssClass}">
                <span class="name">${type.name}</span>
              </div>`)
            .join('');

  const imageHTML = `
    <div class="pokemon-image"
        style="${Utils.getPokemonSpritesheetPosition(pokemon, 150)}"/>
    </div>`;

  this._name.innerText = LocaleManager.getInstance().translate(pokemon.key);
  this._picture.innerHTML = imageHTML;
  this._types.innerHTML = typesHTML;

  this._input.max = data.pokemon.cpMax / INPUT_RANGE_STEP;
  this.onInputUpdate({ target: this._input });

  this.renderCounters(data.isLoading)
  this.renderWeaks(data.isLoading)
}

DetailsView.prototype.renderWeaks = function(isLoading) {
  const isOnlyShittyPokemon = this._state.weaks
    .reduce((state, p) => state && (p.pokemon.tiers === 3), true)

  let weaks = this._state.weaks
  // If we have T2 or T1 pokemons, filter out T3 pokemons
  // (no one put them in gyms)
  if (!isOnlyShittyPokemon) {
    weaks = weaks.filter((p) => p.pokemon.tiers < 3)
  }

  const counterViewsAndData = weaks

    // Convert data to view data
    .map((weak) => counterDataToViewData(this._state.defensePokemonCP, weak, true))

    // Favourite data
    .map((counterData) => Object.assign({}, counterData, {
      isFavourite: FavouritesModel.getInstance().get(counterData.id)
    }))

    // Sort them by Favourites => CP => ID
    // "=>" means "if equal then sort by"
    .sort((item1, item2) => {
      const fav1 = item1.isFavourite ? 1 : 0
      const fav2 = item2.isFavourite ? 1 : 0
      const favDiff = fav2 - fav1

      if (favDiff === 0) {
        const tiersDiff = item1.pokemon.tiers - item2.pokemon.tiers
        if (tiersDiff === 0) {
          const cpDiff = item1.cp - item2.cp
          if (cpDiff === 0) {
            return item1.id - item2.id
          }
          return cpDiff
        }
        return tiersDiff
      }
      return favDiff
    })

    // Keep max 30 items
    .slice(0, 30)

    // Create CounterView for each element
    .map((counterData) => {
      const counterView = new CounterView()
        .on(CounterView.ACTIONS.SELECT_COUNTER, () => this.onSelectCounter(counterData.pokemon))
      counterData.isLoading = isLoading
      return [counterView, counterData]
    });

  const countersNodes = counterViewsAndData.map((counterViewAndData) => {
    return counterViewAndData[0].prerender(counterViewAndData[1]);
  });

  const counterFragment = document.createDocumentFragment()
  countersNodes.forEach(counterFragment.appendChild.bind(counterFragment))

  document.querySelector('.overlay__data .counters .js-can-beat').innerHTML = ''
  document.querySelector('.overlay__data .counters .js-can-beat').appendChild(counterFragment)
}

DetailsView.prototype.renderCounters = function(isLoading) {
  // Filter out pokemons that cannot have enough CP
  const countersWithEnoughCP = this._state.counters && this._state.counters
    .filter(highCPMaxFilter.bind(this, this._state.defensePokemonCP))
  
  if (!countersWithEnoughCP || !countersWithEnoughCP.length) {
    this._renderNoCounterMessage()
    return;
  }

  const counterViewsAndData = countersWithEnoughCP

    // Convert data to view data
    .map((counter) => counterDataToViewData(this._state.defensePokemonCP, counter))

    // Favourite data
    .map((counterData) => Object.assign({}, counterData, {
      isFavourite: FavouritesModel.getInstance().get(counterData.id)
    }))

    // Sort them by Favourites => tiers => CP => ID
    // "=>" means "if equal then sort by"
    .sort((item1, item2) => {
      const fav1 = item1.isFavourite ? 1 : 0
      const fav2 = item2.isFavourite ? 1 : 0
      const favDiff = fav2 - fav1

      if (favDiff === 0) {
        const cpDiff = item1.cp - item2.cp
        if (cpDiff === 0) {
          return item1.id - item2.id
        }

        return cpDiff
      }

      return favDiff
    })

    // Keep max 20 items
    .slice(0, 20)

    // Create CounterView for each element
    .map((counterData) => {
      const counterView = new CounterView()
        .on(CounterView.ACTIONS.SELECT_COUNTER, () => this.onSelectCounter(counterData.pokemon))
      counterData.isLoading = isLoading
      return [counterView, counterData]
    });

  const countersNodes = counterViewsAndData.map((counterViewAndData) => {
    return counterViewAndData[0].prerender(counterViewAndData[1])
  })

  const counterFragment = document.createDocumentFragment()
  countersNodes.forEach(counterFragment.appendChild.bind(counterFragment))

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = '';
  document.querySelector('.overlay__data .counters .js-beaten-by').appendChild(counterFragment);
}

DetailsView.prototype._renderNoCounterMessage = function() {
  const noCounterText = LocaleManager.getInstance().translate('TEXT_NO_COUNTER_FOUND')
  const hintTitle = LocaleManager.getInstance().translate('TEXT_HINT_TITLE')
  const hintText = LocaleManager.getInstance().translate('TEXT_DODGE_EXPLANATION')
  
  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = `
    <p>${noCounterText}</p>
    <div class='hint hint--regular'>
      <p>${hintTitle}</p>
      <p>${hintText}</p>
    </div>
  `
}

DetailsView.prototype.onInputUpdate = function(e) {
  const value = e.target.value * INPUT_RANGE_STEP
  this._state.defensePokemonCP = this._level.innerText = value
}

DetailsView.prototype.onInputRelease = function(e) {
  this.renderCounters()
  this.renderWeaks()
}

DetailsView.prototype.onSelectCounter = function(pokemon) {
  this.emit(EVENTS.COUNTER_SELECTED, pokemon)
}

DetailsView.prototype._onQuickFrequencyChange = function(frequency) {
  this._quickDodge = frequency
  this.emit(EVENTS.DODGE_FREQUENCY_UPDATED)
}

DetailsView.prototype._onSpecialFrequencyChange = function(frequency) {
  this._specialDodge = frequency
  this.emit(EVENTS.DODGE_FREQUENCY_UPDATED)
}

function highCPMaxFilter(cp, counter) {
  return counter.cpMax * counter.moves[0].efficiency >= cp
}

function counterDataToViewData(defensePokemonCP, counter, isWeak){
    const move = counter.moves[0]
    let cp = Math.round(defensePokemonCP / move.efficiency)
    if (isWeak) {
      cp = Math.min(Math.round(defensePokemonCP * move.efficiency), counter.cpMax)
    }

    return {
      id: counter.id,
      key: counter.key,
      moves: counter.moves.map((move) => Object.assign({}, move, {
        name: LocaleManager.getInstance().translate(move.key)
      })),
      cp,
      pokemon: counter.pokemon
    };
}

let _instance
DetailsView.getInstance = function () {
  if (!_instance) {
    _instance = new DetailsView()
  }

  return _instance
}

DetailsView.EVENTS = EVENTS

export default DetailsView