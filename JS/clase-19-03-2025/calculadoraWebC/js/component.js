export class Calculadora extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
   const boton = this.shadowRoot.innerHTML=`<button>Click on me</button>`
   this.shadowRoot.appendChild(boton); 
  }
}
