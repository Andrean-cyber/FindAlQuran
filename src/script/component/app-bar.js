class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
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
            display: flex;
            width: 100%;
            background-color: #2F4F4F;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
          h2 {
            padding: 16px;
          }  
          ul {
            display: flex;
            padding: 21px;
            margin-left:900px;
        }
          li {
            list-style: none;
          }
          li a {
            padding: 14px;
            text-decoration: none;
            color: white;
          }

        </style>
        <h2>FindAlQuran</h2>
        <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
      </nav>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);