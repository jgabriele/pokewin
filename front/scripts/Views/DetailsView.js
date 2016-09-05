import Utils          from '../Utils.js';
import LocaleManager  from '../LocaleManager'
import CounterView    from './CounterView'

const DetailsView = {
  render(data) {
    const pokemon = data.pokemon;
    const counters = data.counters;

    const typesHTML = pokemon.types
              .map((type) => `
                <div class="type ${type.cssClass}">
                  <span class="name">${type.name}</span>
                </div>`)
              .join('');

    const isLoadingClass = data.isLoading ? ' is-loading' : '';
    const imageHTML = `
      <div class="pokemon-image${isLoadingClass}"
          style="${Utils.getPokemonSpritesheetPosition(pokemon, 150)}"/>
      </div>`;

    document.querySelector('.overlay__data .js-name').innerText = LocaleManager.getInstance().translate(pokemon.key);
    document.querySelector('.overlay__data .js-picture').innerHTML = imageHTML;
    document.querySelector('.overlay__data .js-types').innerHTML = typesHTML;

    const counterTitle = LocaleManager.getInstance().translate('TEXT_CAN_BE_BEATEN_BY');
    document.querySelector('.overlay__data .counters .js-counters-title').innerHTML = counterTitle;

    _renderCounters(counters, data.isLoading);
  }
};

function _renderCounters(counters, isLoading) {
  const beatenByHTML = counters.map((counterData) => {
    counterData.isLoading = isLoading;
    return CounterView.render(counterData);
  })
  .join('');

  document.querySelector('.overlay__data .counters .js-beaten-by').innerHTML = beatenByHTML;
}

export default DetailsView;