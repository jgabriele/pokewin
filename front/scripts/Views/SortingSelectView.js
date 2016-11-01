import Event          from 'events'
import Utils          from '../Utils'
import { setSorting }  from '../Config'

const EVENTS = {
  SORTING_TOGGLED: 'sorting-toggled'
}

const SORTING_OPTIONS = {
  ALPHABETICALLY: 'A-Z',
  POKEMON_NUMBER: '#'
}

const SORTING_KEY = 'pokemon-sorting'

function SortingSelectView(el) {
  this._el = el
  this._sorting = localStorage.getItem(SORTING_KEY) || SORTING_OPTIONS.POKEMON_NUMBER
  setSorting(this._sorting)
}

SortingSelectView.prototype = Object.create(Event.prototype);

SortingSelectView.prototype.render = function() {
  const domEl = this._root = Utils.DOMElementFromString(
    `<div class="sorting-selector js-sorting-selector">
      ${this._sorting}
    </ul>`)

  domEl.addEventListener('click', () => this.toggleSorting())

  this._el.appendChild(domEl)
}

// Click callback to toggle the sorting
SortingSelectView.prototype.toggleSorting = function(e) {
  this._sorting = getNextState(this._sorting)
  this._root.innerText = this._sorting

  localStorage.setItem(SORTING_KEY, this._sorting)
  setSorting(this._sorting)

  this.emit(EVENTS.SORTING_TOGGLED, this._sorting)
};


function getNextState(currentState) {
  return currentState === SORTING_OPTIONS.ALPHABETICALLY ?
    SORTING_OPTIONS.POKEMON_NUMBER :
    SORTING_OPTIONS.ALPHABETICALLY
}

SortingSelectView.EVENTS = EVENTS

export default SortingSelectView