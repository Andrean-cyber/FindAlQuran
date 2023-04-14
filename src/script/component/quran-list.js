import './quran-item.js';

class QuranList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set quran(quran) {
    this._quran = quran;
    this.render();
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
  render() {
    this.shadowDOM.innerHTML = '';

    this._quran.forEach(quran => {
      const quranItemElement = document.createElement('quran-item');
      quranItemElement.quran = quran;
      this.shadowDOM.appendChild(quranItemElement);
    });
  }
}

customElements.define('quran-list', QuranList);