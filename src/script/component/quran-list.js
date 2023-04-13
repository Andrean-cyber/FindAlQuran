import './quran-item.js';

class QuranList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set qurans(qurans) {
    this._qurans = qurans;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._qurans.forEach(quran => {
      const quranItemElement = document.createElement('quran-item');
      quranItemElement.quran = quran;
      this.shadowDOM.appendChild(quranItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('quran-list', QuranList);