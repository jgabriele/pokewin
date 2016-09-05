import Utils from '../Utils.js';

const CounterView = {
  render(data) {
    const isLoadingClass = data.isLoading ? ' is-loading' : '';

    return `
      <div class="other-pokemon js-pokemon" data-id="${data.id}">
        <div class="picture">
          <div class="pokemon-image${isLoadingClass}" style="${Utils.getPokemonSpritesheetPosition(data)}"/></div>
        </div>
        <div class="type ${Utils.getClassForType(data.moveType.id).toLowerCase()}" style="font-size: ${data.fontSize}">
          <span class="name">${data.moveName}</span>
        </div>
        <div class="cp-value">CP ${data.cp}</div>
      </div>`;
  }
};

export default CounterView;