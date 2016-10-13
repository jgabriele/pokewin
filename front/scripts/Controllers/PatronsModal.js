import ModalView      from '../Views/ModalView';
import PatronsModal   from '../Views/Modal/Patrons';
import LocaleManager  from '../LocaleManager';
import Utils          from '../Utils';

const IS_PATRON_KEY = 'is-patron';

export default {
  init(el) {
    ModalView.attach(el);
  },

  showModal() {
    const callbacks = {
      onSubmit: this.onSubmit.bind(this),
      onDismiss: this.onDismiss.bind(this)
    };

    const title             = LocaleManager.getInstance().translate('TEXT_PATRONS_MODAL_TITLE');
    const text              = LocaleManager.getInstance().translate('TEXT_PATRONS_MODAL_TEXT');
    const submitText        = LocaleManager.getInstance().translate('TEXT_SEND');
    const cancelText        = LocaleManager.getInstance().translate('TEXT_CANCEL');
    const placeholderText   = LocaleManager.getInstance().translate('TEXT_PATRONS_MODAL_INPUT_PLACEHOLDER');

    const patronsModalDOM = PatronsModal.render(
      title,
      text,
      submitText,
      cancelText,
      placeholderText,
      callbacks
    );

    this._patronNameInput = patronsModalDOM.querySelector('input');

    ModalView.render(patronsModalDOM, {
      onOverlayBackground: this.onDismiss.bind(this)
    });
  },

  onSubmit() {
    PatronsModal.clearError();

    const patronName = this._patronNameInput.value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = (res) => {
      if (res.currentTarget.readyState == 4) {
        try {
          const jsonResponse = JSON.parse(res.currentTarget.responseText);
          if (jsonResponse.result === 'ok') {
            this._onPatronSuccess()
          } else {
            this._onPatronFailure()
          }
        } catch(err) {
          this._onPatronFailure()
        }
      }
    };

    xhttp.open("GET", `http://localhost:1310/patrons/${patronName}`, true);

    xhttp.send();
  },

  _onPatronSuccess() {
    this.onDismiss()
    localStorage.setItem(IS_PATRON_KEY, true);
  },

  _onPatronFailure() {
    const message = LocaleManager.getInstance().translate('ERROR_PATRON_NOT_FOUND')
    PatronsModal.showError(message)
  },

  onDismiss() {
    ModalView.hide();
  }
}
