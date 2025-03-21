export class MyButton extends HTMLElement {
    constructor() {
        super(); // mandar llamar al metodo constructor de la clase padre
        this.color = 'inital';
        this.attachShadow({mode: 'open'}); // generar un sub arbol del DOM, shadowDOM
        // const template = document.querySelector('#tpl');
        // const contenido = template.textContent.cloneNode(true);
    }

    static observedAttributes = ['color'];
    
    // ciclo de vida de un web component
    connectedCallback() {
        // cuando el elemento es agregado al DOM
        console.log('Me agregaron al DOM :D');
        this.render();
    }

    disconnectedCallback() {
        console.log('Me quitaron del DOM D:')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // name = color
        // oldValue = red
        // newValue = green
        if(name === 'images') {
            this.color = newValue;
            // const btn = this.shadowRoot.querySelector('button');
            // btn.style.backgroundColor = newValue;
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: ${this.color};
                }
            </style>
            <button>CLICK ME</button>
        `;
    }
}

export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.index = 0;
        this.images = [];
        this.attachShadow({mode: 'open'});
    }

    static observedAttributes = ['images'];

    connectedCallback() {
        this.render(); // pintar mi componente con todo y shadow DOM
        // const btnLeft = this.shadowRoot.querySelector('#left');
        // const btnRight = this.shadowRoot.querySelector('#right');

        this.shadowRoot.querySelector('#left').addEventListener('click', () => {
            if(this.index > 0) {
                this.index--;
            }

            if(this.index === 0) {
                // this.buttonLeftDisabled = true;
                this.shadowRoot.querySelector('#left').setAttribute('disabled', 'false');
                this.shadowRoot.querySelector('#right').removeAttribute('disabled');
            }
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        });

        this.shadowRoot.querySelector('#right').addEventListener('click', () => {
            if(this.index < this.images.length - 1) {
                this.index++;
            }

            if(this.index === this.images.length - 1) {
                // this.buttonRightDisabled = true;
                this.shadowRoot.querySelector('#right').setAttribute('disabled', 'true');
                this.shadowRoot.querySelector('#left').removeAttribute('disabled');
            }
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'images') {
            this.images = JSON.parse(newValue);
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    height: 100px;
                    width: auto;
                }
                button  {
                    background-color: black;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    margin: 1rem;
                }   
                button:hover {
                    background-color: grey;
                    cursor: pointer;
                }
                button[disabled] {
                    background-color: grey;
                }

                section {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }
            </style>
            <br>
            <img src="${this.images[this.index]}">
            <section>
                <button id="left">\<</button>
                <button id="right">\></button>
            </section>
        `;
    }
}