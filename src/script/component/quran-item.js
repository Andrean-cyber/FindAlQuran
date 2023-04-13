class QuranItem extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    set quran(quran) {
      this._quran = quran;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }

          .quran-info {
            padding: 24px;
            color: white;
          }
          .quran-info > h2 {
            font-weight: lighter;

          }
          .quran-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
        </style>
        

        <div class="quran-info">
          <h2>${this._quran.asma}</h2>
          <p>Surat : ${this._quran.nama}</p>
          <p>Arti : ${this._quran.arti}</p>
          <p>Jumlah Ayat : ${this._quran.ayat}</p>
        </div>
      `;
    }
  }
  
  customElements.define('quran-item', QuranItem);