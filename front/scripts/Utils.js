import TYPE_TO_CSS_CLASS from './TYPE_TO_CSS_CLASS';
import pos from './pos';
import LocaleManager from './LocaleManager';

const NB_VISITS_KEY = 'number-of-visits';
const NB_VISITS_SEARCH_KEY = 'number-of-visits-since-search';

// Check of device  type
var _check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) _check = true;})(navigator.userAgent||navigator.vendor||window.opera);

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
    const indexX = pos[pokemon.id - 1].x;
    const indexY = pos[pokemon.id - 1].y;
    const x = indexX * size / 2; // No idea why / 2
    const y = indexY * size / 2;

    return `background-position: -${x}px -${y}px`;
  },

  getLanguageQueryParameter() {
    const lang = this.getQueryParameter('lang');
    const VALID_LANG = ['en', 'fr', 'de', 'es', 'it', 'jp', 'ko'];
    return VALID_LANG.indexOf(lang) !== -1 ?
      lang :
      ''
  },

  getNoAdsQueryParameter() {
    const noAds = this.getQueryParameter('noads');
    return !!noAds;
  },

  getQueryParameter(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },

  getNumberOfVisits() {
    return Number(localStorage.getItem(NB_VISITS_KEY)) || 0;
  },

  getNumberOfVisitsSinceSearch() {
    return Number(localStorage.getItem(NB_VISITS_SEARCH_KEY)) || 0;
  },

  increateVisits() {
    if (localStorage) {
      let nbVisits = this.getNumberOfVisitsSinceSearch();
      localStorage.setItem(NB_VISITS_SEARCH_KEY, ++nbVisits);
    }
  },

  increateVisitsSinceSearch() {
    if (localStorage) {
      let nbVisits = this.getNumberOfVisits();
      localStorage.setItem(NB_VISITS_KEY, ++nbVisits);
    }
  },

  isMobileDevice() {
    return _check;
  },

  sortByNumber(pokemon1, pokemon2) {
    return pokemon1.id - pokemon2.id
  },

  sortAlphabetically(pokemon1, pokemon2) {
    const pokemon1LocalisedName = LocaleManager.getInstance().translate(pokemon1.key)
      .replace(/??/g, 'E')
      .replace(/??/g, 'e')
    const pokemon2LocalisedName = LocaleManager.getInstance().translate(pokemon2.key)
      .replace(/??/g, 'E')
      .replace(/??/g, 'e')

    // We check up to 3 chars
    const firstLetterDiff = pokemon1LocalisedName.charCodeAt(0) - pokemon2LocalisedName.charCodeAt(0)
    const secondLetterDiff = pokemon1LocalisedName.charCodeAt(1) - pokemon2LocalisedName.charCodeAt(1)
    const thirdLetterDiff = pokemon1LocalisedName.charCodeAt(2) - pokemon2LocalisedName.charCodeAt(2)

    if (firstLetterDiff === 0) {
      if (secondLetterDiff === 0) {
        return thirdLetterDiff
      }

      return secondLetterDiff
    }

    return firstLetterDiff
  }
}

function _decreaseFontSize(el, unit) {
  const currentValue = Number(el.style.fontSize.substring(0, el.style.fontSize.indexOf(unit)));
  el.style.fontSize = currentValue - 1 + unit;
}

export default Utils;
