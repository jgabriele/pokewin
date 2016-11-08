import LocaleManager      from '../LocaleManager';
import Event from 'events';

let quickIndex = 0;
let specialIndex = 0;

const EVENTS = {
  CHANGE_QUICK_FREQUENCY: 'CHANGE_QUICK_FREQUENCY',
  CHANGE_SPECIAL_FREQUENCY: 'CHANGE_SPECIAL_FREQUENCY'
};

const FREQUENCY = {
  NEVER: 'NEVER',
  PARTLY: 'PARTLY',
  ALWAYS: 'ALWAYS'
}

const CLASS_FOR_FREQUENCY = {
  NEVER: 'dodge-type__button--never',
  PARTLY: 'dodge-type__button--partly',
  ALWAYS: 'dodge-type__button--always'
}
const KEYS = {
  NEVER: 'TEXT_DODGE_NEVER',
  PARTLY: 'TEXT_DODGE_PARTLY',
  ALWAYS: 'TEXT_DODGE_ALWAYS'
}
const frequenciesLength = FREQUENCY.length

const DodgeFrequencyController = Object.assign({}, Event.prototype, {
  init(parent) {
    this._quickFrequency = FREQUENCY.NEVER
    this._specialFrequency = FREQUENCY.NEVER

    this._quickDodgeEl = parent.querySelector('.js-quick-dodge')
    this._specialDodgeEl = parent.querySelector('.js-special-dodge')

    this._quickDodgeEl.addEventListener('click', this.updateQuickFrequency.bind(this))
    this._specialDodgeEl.addEventListener('click', this.updateSpecialFrequency.bind(this))
  },

  update(dodgeEl, oldFrequency, newFrequency) {
    dodgeEl.classList.remove(CLASS_FOR_FREQUENCY[oldFrequency])
    dodgeEl.classList.add(CLASS_FOR_FREQUENCY[newFrequency])
    dodgeEl.innerText = LocaleManager.getInstance().translate(KEYS[newFrequency])
    dodgeEl.dataset.localisableKey = KEYS[newFrequency]
  },

  updateQuickFrequency() {
    const oldFrequency = this._quickFrequency;
    this._quickFrequency = getNextFrequency(this._quickFrequency)
    this.update(this._quickDodgeEl, oldFrequency, this._quickFrequency)

    this.emit(EVENTS.CHANGE_QUICK_FREQUENCY, this._quickFrequency)
  },


  updateSpecialFrequency() {
    const oldFrequency = this._specialFrequency;
    this._specialFrequency = getNextFrequency(this._specialFrequency)
    this.update(this._specialDodgeEl, oldFrequency, this._specialFrequency)

    this.emit(EVENTS.CHANGE_SPECIAL_FREQUENCY, this._specialFrequency)
  },

  getQuickMovesDodgeFrequency() {
    return this._quickFrequency
  },

  getSpecialMovesDodgeFrequency() {
    return this._specialFrequency
  }
});

function getNextFrequency(frequency) {
  switch (frequency) {
    case 'NEVER':
      return 'PARTLY'
    case 'PARTLY':
      return 'ALWAYS'
    case 'ALWAYS':
      return 'NEVER'
    default:
      return 'NEVER'
  }
}

DodgeFrequencyController.EVENTS = EVENTS;

console.log(DodgeFrequencyController);
console.log(Object.create(DodgeFrequencyController));

DodgeFrequencyController.FREQUENCY = FREQUENCY

export default DodgeFrequencyController
