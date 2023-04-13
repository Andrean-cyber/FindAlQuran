class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          .search-container {
            max-width: 800px;
            box-shadow:  4px 4px 4px 4px rgba(0, 0, 0, 0.2);
            
            padding: 16px;
            border-radius: 10px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            
          }
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-radius: 10px;
            font-weight: bold;
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            
          }
          .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #2F4F4F;
          }
          .search-container > input:focus::placeholder {
            font-weight: normal;
          }
          .search-container >  input::placeholder {
            color: #2F4F4F;
            font-weight: normal;
          }
          .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #2F4F4F;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 10px;
          }
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
            .search-container > button {
              width: 100%;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Search Surah" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement')
          .addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);