import ModalView      from '../Views/ModalView';
import OkMessage      from '../Views/Modal/OkMessage';
import LocaleManager  from '../LocaleManager';

const MODALS_SHOWN_KEY = 'modals-shown';

const availableModalsId = [0,1];

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
    for (let i=0; i< availableModalsId.length; i++) {
      const availableModalId = availableModalsId[i];
      if (shownKeys.indexOf(availableModalId) === -1) {
        this._currentModalId = availableModalId;
        return {
          title: LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalId}_TITLE`),
          text: LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalId}_TEXT`),
          okText: LocaleManager.getInstance().translate(`TEXT_LOADING_MODAL_${availableModalId}_OK_TEXT`),
        };
      }
    }
    // Didn't find it
    return null;
  },

  onDismiss() {
    ModalView.hide();
    const shownKeys = this.getShownKeys();
    shownKeys.push(this._currentModalId);
    localStorage.setItem(MODALS_SHOWN_KEY, shownKeys.join(','));
  },

  getShownKeys() {
    const storedIds = localStorage.getItem(MODALS_SHOWN_KEY);

    if (storedIds) {
      return storedIds
        .split(',')
        .map((id) => Number(id))
    } else {
      return [];
    }
  }
}
