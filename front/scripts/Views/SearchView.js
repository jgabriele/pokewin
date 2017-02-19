import Event          from 'events';
import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager';

const EVENTS = {
  SEARCH: 'search'
}

function SearchView(parent) {
  this._el = Utils.DOMElementFromString(`<div></div>`)

  parent.appendChild(this._el)
}

SearchView.prototype = Object.create(Event.prototype)

SearchView.prototype.render = function(pokemons) {
  const el = Utils.DOMElementFromString(
    `<div class="search">
      <input class="search__input" placeholder="Search..."/>
    </div>`
  )

  this._el.innerHTML = ''
  this._el.appendChild(el)

  this._el.querySelector('.search__input').addEventListener('input',
    (e) => this.emit(EVENTS.SEARCH, e.currentTarget.value))
}

SearchView.prototype.getHeight = function() {
  return this._el.clientHeight + 1
}

SearchView.prototype.block = function() {
  this._el.querySelector('.search').classList.add('is-behind');
}

SearchView.prototype.unblock = function() {
  this._el.querySelector('.search').classList.remove('is-behind');
}

SearchView.EVENTS = EVENTS;

export default SearchView;