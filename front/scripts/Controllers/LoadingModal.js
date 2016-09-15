import ModalView      from '../Views/ModalView';
import OkMessage      from '../Views/Modal/OkMessage';
import LocaleManager  from '../LocaleManager';
import Utils          from '../Utils';

const MODALS_SHOWN_KEY = 'modals-shown';

const availableModals = [
  { type: 'FACEBOOK', condition: hasSeenWebsiteOnce },
  { type: 'WHATS_NEW_ROTATION' },
];

export default {
  init(el) {
    ModalView.attach(el);
  },

  showModal(callbacks) {
    callbacks = Object.assign({}, callbacks, {
      onDismiss: this.onDismiss.bind(this)
    });
    const data = this.pickNextModal();

    if (!data) {
      return;
    }

    const okMessageDOM = OkMessage.render(data.title, data.text, data.okText, callbacks);
    ModalView.render(okMessageDOM);
  },

  pickNextModal() {
    const shownKeys = this.getShownKeys();
    for (let i=0; i< availableModals.length; i++) {
      const availableModalType = availableModals[i].type;
      const availableModalCondition = availableModals[i].condition;
      const isMatchingCondition = typeof(availableModalCondition) !== 'function' ||
          (typeof(availableModalCondition) === 'function' && availableModalCondition());
      if (shownKeys.indexOf(availableModalType) === -1 && isMatchingCondition) {
        this._currentModalType = availableModalType;
        const title = LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalType}_TITLE`);
        const text = LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalType}_TEXT`);
        const okText = LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalType}_OK_TEXT`);
        return title && text && okText && {
          title,
          text,
          okText
        };
      }
    }
    // Didn't find it
    return null;
  },

  onDismiss() {
    ModalView.hide();
    const shownKeys = this.getShownKeys();
    shownKeys.push(this._currentModalType);
    localStorage.setItem(MODALS_SHOWN_KEY, shownKeys.join(','));
  },

  getShownKeys() {
    const storedIds = localStorage.getItem(MODALS_SHOWN_KEY);

    if (storedIds) {
      return storedIds.split(',')
    } else {
      return [];
    }
  }
}

function hasSeenWebsiteOnce() {
  // It's 1 because at the moment this code is executed
  // the increment has already been done
  return Utils.getNumberOfVisits() > 1;
}
