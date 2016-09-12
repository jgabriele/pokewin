import TYPE_TO_CSS_CLASS from './TYPE_TO_CSS_CLASS';
import pos from './pos';
import LocaleManager from './LocaleManager';

const Utils = {
  DOMElementFromString(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstChild;
  },

  getClassForType(typeId) {
    return TYPE_TO_CSS_CLASS[typeId];
  },

  getFontSize(moveName, maxSize) {
    maxSize = maxSize * 0.95; // We want to fit in 95% of the size;

    const calculationDiv = document.getElementsByClassName('js-font-size-calculation')[0];
    calculationDiv.innerText = moveName.toUpperCase();
    calculationDiv.style.fontSize = '10px';
    while(calculationDiv.offsetWidth > maxSize) {
      _decreaseFontSize(calculationDiv, 'px');
    }
    return calculationDiv.style.fontSize;
  },

  getPokemonSpritesheetPosition(pokemon, size=70) {
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
  },

  getLanguageQueryParameter() {
    const lang = this.getQueryParameter('lang');
    const VALID_LANG = ['en', 'fr', 'de', 'es', 'it', 'jp', 'ko'];
    return VALID_LANG.indexOf(lang) !== -1 ?
      lang :
      ''
  },

  getQueryParameter(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}

function _decreaseFontSize(el, unit) {
  const currentValue = Number(el.style.fontSize.substring(0, el.style.fontSize.indexOf(unit)));
  el.style.fontSize = currentValue - 1 + unit;
}

export default Utils;