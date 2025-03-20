
class calculadora extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './css/calculadora.css');
    shadow.innerHTML = `
      <main>
       <input type="text" id="resultado"/>
      <section id="operaciones" class="operaciones">
        <button id="reset" type="button" value="C">C</button>
        <button id="suma" type="button" value="+">+</button>
        <button id="resta" type="button" value="-">-</button>
        <button id="mult" type="button" value="x">x</button>
        <button id="div" type="button" value="/">/</button>
        <button id="igual" type="button" value="=">=</button>
      </section>

      <section class="numeros">
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
        <button id="cero" type="button" value="0">0</button>
        <button type="button" value=".">.</button>
      </section>
      </main>`;
    shadow.appendChild(link);
  }

}
customElements.define('app-calculadora', calculadora);