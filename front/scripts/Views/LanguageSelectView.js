import Event          from 'events';
import Utils          from '../Utils.js';

const ACTIONS = {
  SELECT_LANGUAGE: 'select-language'
}

function LanguageSelectView(el, languages) {
  this._el = el;
  this._languages = languages;
  this._onSelectLanguage = this._onSelectLanguage.bind(this);
  this.collapse = this.collapse.bind(this);
}

LanguageSelectView.prototype = Object.create(Event.prototype);

LanguageSelectView.prototype.render = function(pokemons) {
  // Generate <li> for options
  const langHTMLString = this._languages
    .map((lang) => `<li class="language js-language" data-language="${lang.code}">
        ${lang.name}
      </li>`)
    .join('');

  const domEl = this._root = Utils.DOMElementFromString(
    `<ul class="language-selector js-language-selector">
      ${langHTMLString}
    </ul>`);

  domEl.addEventListener('click', (e) => {
    this.expand();

    // Add listener to anywhere else to collapse the language select
    document.body.addEventListener('click', this.collapse);

    // Add click listener to languages
    Array.prototype.forEach.call(domEl.querySelectorAll('.js-language'), (el) => {
      el.removeEventListener('click', this._onSelectLanguage);
      el.addEventListener('click', this._onSelectLanguage);
    });

    // To avoid body to _collapseLanguage
    e.stopPropagation();
  });

  this._el.appendChild(domEl);
}

// Expand the language select
LanguageSelectView.prototype.expand = function() {
  this._root.classList.add('is-expanded');
  return this;
}

// Collapse the language select
LanguageSelectView.prototype.collapse = function() {
  this._root.classList.remove('is-expanded');
  return this;
}

LanguageSelectView.prototype.selectLanguage = function(lang) {
  // Trigger event with lang
  this.emit(ACTIONS.SELECT_LANGUAGE, lang);

  // Add selected class to the language in the list of possible languages
  Array.prototype.forEach.call(this._el.querySelectorAll('.js-language'), (el) => {
    if (el.dataset.language === lang) {
      el.classList.add('is-selected');
    } else {
      el.classList.remove('is-selected');
    }
  });
}

// Click callback to update the selected language
LanguageSelectView.prototype._onSelectLanguage = function(e) {
  const lang = e.target.dataset.language || 'en';

  this.selectLanguage(lang);

  // Remove click listener on body
  document.body.removeEventListener('click', this.collapse);

  // Collapse the language selection
  this.collapse();

  // To avoid .js-language-selector to re-expand
  e.stopPropagation();
};

LanguageSelectView.ACTIONS = ACTIONS;

export default LanguageSelectView;