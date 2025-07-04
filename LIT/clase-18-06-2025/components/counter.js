import {LitElement, css, html} from 'lit';

export class SimpleGreeting extends LitElement {
  static properties = {
    counter: {
      type: Number,
      reflect: true
    }
  };

   constructor() {
    super();
    // Declare reactive properties
  }

  // Define scoped styles right with your component, in plain CSS
  //La etiqueta host por así decirlo el padre de los estilos
  static styles = css`
    :host {  
      display: inline-block;
      padding: 1em;
      border: 1px solid #CCC;
      color: red;
      .parrafo{
        color: blue;
      }

      input{
        width: 50px;
      }

      button{
        padding: 1em;
        font-size: 20px;
        margin: 0 20px 0 20px;

      }
    }
  `;

  // Render the UI as a function of component state
  render() {
    return html`
    <h2>Mi contador</h2>
    <p class='parrafo'>${this.counter}</p>
    <p>
        <input id='quantity' type='number' value = 1>
    </p>
    <button @click=${this.decrement}>-</button>
    <button @click=${this.increment}>+</button>
    `;
  }

  increment(){
    let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter+= parseInt(quantity);
  }

  decrement(){
    this.counter--;
  }

}
customElements.define('simple-greeting', SimpleGreeting);
