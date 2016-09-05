function LocaleManager(dictionary) {
  this._dictionary = dictionary;
  this._lang = 'en';
}

LocaleManager.prototype.getLanguages = function() {
  return [
    { name: 'EN', code: 'en' },
    { name: 'FR', code: 'fr' },
    { name: 'DE', code: 'de' },
    { name: 'ES', code: 'es' },
    { name: 'IT', code: 'it' },
    { name: 'JP', code: 'jp' },
    { name: 'KO', code: 'ko' }
  ];
}

LocaleManager.prototype.setLanguage = function(lang='en') {
  this._lang = lang;
  document.getElementsByTagName('html')[0].setAttribute('lang', lang)
}

LocaleManager.prototype.translate = function(key, lang) {
  const translations = this._dictionary[key];
  if (!translations) {
    console.error('No translation at all for', key);
    return;
  }

  return translations[lang || this._lang] || translations['en'];
}

LocaleManager.prototype.scanAndLocalise = function() {
  const localisables = document.querySelectorAll('[data-localisable-key]');
  Array.prototype.forEach.call(localisables, (localisableElement) => {
    const key = localisableElement.dataset.localisableKey;
    localisableElement.innerHTML = this.translate(key);
  });
}

let _instance;
LocaleManager.getInstance = function() {
  if (_instance) {
    return _instance;
  }

  if (!_dictionary) {
    console.error(`You did not prepare the Locale Manager. No dictionary available.
      Please call LocaleManager.prepare(dictionary) before.`);
    return;
  }

  _instance = new LocaleManager(_dictionary);
  return _instance;
}

let _dictionary;
LocaleManager.prepare = function(dictionary) {
  _dictionary = dictionary;
}

export default LocaleManager;