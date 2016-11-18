import ModalView      from '../Views/ModalView';
import OkMessage      from '../Views/Modal/OkMessage';
import LocaleManager  from '../LocaleManager';
import Utils          from '../Utils';

const MODALS_SHOWN_KEY = 'modals-shown';
const availableModals = [
  { type: 'FACEBOOK', condition: hasSeenWebsiteMultipleTimes },
  { type: 'WHATS_NEW_DODGE_FREQUENCY' }
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
    ModalView.render(okMessageDOM, {
      onOverlayBackground: this.onDismiss.bind(this)
    });
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

function hasSeenWebsiteMultipleTimes() {
  // If the guy came more than 3 times, he'll be more likely to drop a like
  return Utils.getNumberOfVisits() > 3;
}
