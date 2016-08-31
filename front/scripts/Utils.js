import TYPE_TO_CSS_CLASS from './TYPE_TO_CSS_CLASS';

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

    const calculationDiv = document.getElementsByClassName('font-size-calculation')[0];
    calculationDiv.innerText = moveName.toUpperCase();
    calculationDiv.style.fontSize = '10px';
    while(calculationDiv.offsetWidth > maxSize) {
      _decreaseFontSize(calculationDiv, 'px');
    }
    return calculationDiv.style.fontSize;
  }
}

function _decreaseFontSize(el, unit) {
  const currentValue = Number(el.style.fontSize.substring(0, el.style.fontSize.indexOf(unit)));
  el.style.fontSize = currentValue - 1 + unit;
}

export default Utils;