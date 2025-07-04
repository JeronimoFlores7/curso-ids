import {LitElement, html} from 'lit';

export class MyElement extends LitElement {
    constructor(){
        super();
        this.message = 'Hello again';
    }

    static properties = {
    message: {

    },
  };

  render() {
    return html`
      <p>Hello World!</p>
      <p>${this.message}</p>
    `;
  }
}
customElements.define('my-element', MyElement);
