import FloatingButton from '../Views/FloatingButton';
import LocaleManager  from '../LocaleManager';
import Utils          from '../Utils';

export default {
  init(el) {
    this._floatingButton = new FloatingButton(el)
      .on(FloatingButton.EVENTS.CLICK, this.onClick.bind(this))
      .render();

    this._states = {};
  },

  addState(state, config) {
    this._states[state] = config;
  },

  setState(state) {
    this._currentState = this._states[state];
  },

  onClick() {
    if (this._currentState) {
      this._currentState.action && this._currentState.action();
      this._currentState = this._states[this._currentState.nextState];
    }
  }
};
