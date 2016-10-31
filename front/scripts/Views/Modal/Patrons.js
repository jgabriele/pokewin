/*
 * Modal for Patrons
 */

import Utils from '../../Utils';

export default {
  render(title, text, submitText, cancelText, placeholderText, callbacks) {
    this._el = Utils.DOMElementFromString(
      `<div class="modal">
          <div class="modal__content">
            <h2 class="title title--large">${title}</h2>
            <p class="text">${text}</p>
            <input type="text" placeholder="${placeholderText}"></div>
            <div class="error"></div>
            <button class="js-submit">${submitText}</button>
            <button class="button--close js-cancel">${cancelText}</button>
          </div>
      </div>`);

    this._el.querySelector('.js-submit').addEventListener('click', callbacks.onSubmit);
    this._el.querySelector('.js-cancel').addEventListener('click', callbacks.onDismiss);

    return this._el;
  },

  showError(errorText) {
    this._el.querySelector('.error').innerText = errorText;
  },

  clearError() {
    this._el.querySelector('.error').innerText = '';
  }
}