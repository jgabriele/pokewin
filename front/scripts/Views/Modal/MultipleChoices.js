/*
 * Simple message with a single "OK" button
 */

import Utils from '../../Utils';

export default {
  render(title, choices) {
    const domEl = Utils.DOMElementFromString(
      `<div class="modal">
          <div class="modal__content js-content">
            <p>${title}</p>
          </div>
      </div>`);

    const questionsDOM = choices.map((choice) => {
      const classes = getClassesForType(choice.type);
      const questionEl = Utils.DOMElementFromString(
        `<button class="${classes}">${choice.title}</button>`
      );
      questionEl.addEventListener('click', choice.onClick);

      return questionEl;
    });

    const fragment = document.createDocumentFragment();
    questionsDOM.forEach(fragment.appendChild.bind(fragment));

    domEl.querySelector('.js-content').appendChild(fragment);

    return domEl;
  }
}

function getClassesForType(type) {
  switch (type) {
    case 'EXIT':
      return 'button--close';
    default:
      return 'button--left';
  }
}