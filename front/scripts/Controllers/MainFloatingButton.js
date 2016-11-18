import FloatingButton from '../Views/FloatingButton'
import LocaleManager  from '../LocaleManager'
import Utils          from '../Utils'

export default {
  init(el, firstButton) {
    this._floatingButton = new FloatingButton(el)
      .on(FloatingButton.EVENTS.CLICK, this.onClick.bind(this))
      .render(firstButton)

    this._states = {}
  },

  addState(state, config) {
    this._states[state] = config
  },

  setState(state) {
    this._currentState = this._states[state]
    this._floatingButton.setButtonType(this._currentState.buttonType)
  },

  show() {
    this._floatingButton.show()
  },

  hide() {
    this._floatingButton.hide()
  },

  onClick() {
    if (this._currentState) {
      this._currentState.action && this._currentState.action()

      this.setState(this._currentState.nextState)
    }
  }
};
