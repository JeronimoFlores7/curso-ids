export class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.color = "initial";
    this.attachShadow({ mode: "open" });
    // const template = document.querySelector("#tpl");
    // const content = template.content.cloneNode(true); // Clonar el contenido del template

    //this.shadowRoot.innerHTML = `<button style=background-color:${this.color}>Click me</button>`;

    //this.shadowRoot.appendChild(content);
  }

  static observedAttributes = ["color"];

  connectedCallback() { //Cuando el elemento de agrega al DOM
    console.log("Me agregaron al dom");
    this.render()
  }

  disconnectedCallback() { //Cuando quitan el elemento del DOM

  }

  attributeChangedCallback(name, oldValue, newValue) { //Cuando cabia el valor de un atributo
    if (name === "color") {
      this.color = newValue;
    }

    console.log(this.color);
  }

  render(){
    console.log(this.color);
    this.shadowRoot.innerHTML = `<button style=background-color:${this.color}>Click me</button>`
  }
}


