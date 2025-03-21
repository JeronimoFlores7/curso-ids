export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.index = 0;
        this.images = [];
        this.height = '300px';
        this.width = 'auto';
        this.radius = '';
        this.attachShadow({mode: 'open'});
    }

    static observedAttributes = ['images', 'height', 'width', 'border']; 

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
        if(name === 'height'){
            this.height = newValue;
        }
        if(name === 'width'){
            this.width = newValue;
        }
        if(name === 'border'){
            this.radius = newValue;
        }
    }
    render() {
        console.log(this.height);
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    border-radius: ${this.radius};
                    height: ${this.height};
                    width: ${this.width};
                }
                .imagen{
                display: flex;
                justify-content: center;
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

                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }
            </style>
            <br>
            <section class="imagen">
            <img src="${this.images[this.index]}">
            </section>
            <section class="btn">
                <button id="left">\<</button>
                <button id="right">\></button>
            </section>
        `;
    }
}