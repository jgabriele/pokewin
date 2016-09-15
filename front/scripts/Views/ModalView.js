export default {
  attach(el) {
    this._el = el;
    this._overlayRoot = this._overlayData = null;
  },

  render(contentDOM) {
    if (!this._el) {
      return;
    }

    const html = `
      <section class="overlay overlay--modal is-hidden js-modal-overlay">
        <div class="overlay__background"></div>
        <div class="overlay__data js-modal-overlay-data">
        </div>
      </section>
    `

    this._el.innerHTML = html;
    this._overlayRoot = this._el.querySelector('.js-modal-overlay');
    this._overlayData = this._el.querySelector('.js-modal-overlay-data');

    this._overlayData.appendChild(contentDOM);

    this._overlayRoot.addEventListener('transitionend', () => {
      this._overlayRoot.style.display = "none";
    });

    this.show();
  },

  show() {
    if (!this._overlayRoot) {
      return;
    }

    this._overlayRoot.style.display = "flex";
    this._overlayRoot.classList.remove('is-hidden');
  },

  hide() {
    if (!this._overlayRoot) {
      return;
    }

    this._overlayRoot.style.display = "none";
    this._overlayRoot.classList.add('is-hidden');
  }
}