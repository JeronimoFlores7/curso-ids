// myComponent.js
import {LitElement, html, css} from 'lit';

export class MyComponent extends LitElement {
    static properties = {
        text: {
            type: String,
            attribute: 'my-component-text'
        },
        className: {
            type: String,
            attribute: 'class-name',
        },
        show: { // Añadida la propiedad show que usas en el template
            type: Boolean
        }
    };

    static styles = css`
        h1 {
            color: greenyellow; // Corregido el typo
        }
        .red {
            color: red;
        }
    `;

    constructor() {
        super();
        this.show = false; // Inicializar show
    }

    render() {
        return html`
            <h1 class="${this.className}">${this.text}</h1>
            <h1 ?hidden=${!this.show}>Hidden message</h1>
        `;
    }

    firstUpdated() {
        // Es mejor añadir event listeners en firstUpdated
        this.shadowRoot.querySelector('h1').addEventListener('click', (event) => {
            console.log('Clicked!');
        });
    }
}