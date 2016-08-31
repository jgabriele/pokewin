

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