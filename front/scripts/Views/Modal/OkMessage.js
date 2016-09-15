/*
 * Simple message with a single "OK" button
 */

import Utils from '../../Utils';

export default {
  render(title, text, okText, callbacks) {
    const domEl = Utils.DOMElementFromString(
      `<div class="modal">
          <div class="modal__content">
            <h2 class="title title--large">${title}</h2>
            <div class="text">${text}</div>
            <button>${okText}</button>
          </div>
      </div>`);

    domEl.querySelector('button').addEventListener('click', callbacks.onDismiss);

    return domEl;
  }
}