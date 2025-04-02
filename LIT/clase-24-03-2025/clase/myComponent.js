// myComponent.js
import {LitElement, html, css} from 'lit';

export class MyComponent extends LitElement {
    constructor() {
        super();
        this.show = false; 
        this.alumnos = []; //Un arreglo genera una referencia o posición en memoria
        this.counter = 0;
    }

    //requestUpdate(){} // Se utiliza cuando se cambia el valor de un objeto. Esto fuerza a realizar todo el ciclo de vida

    static properties = {
        text: {
            type: String,
            attribute: 'my-component-text'
        },
        className: {
            type: String,
            attribute: 'class-name',
        },
        alumnos:{
            type:Array
        },
        counter:{
            type:Number
        }
    };

    static styles = css`
        h1 {
            color: greenyellow; 
        }
        .red {
            color: red;
        }
    `;

    _incrementCounter(){
        this.conter++;
    }

    shouldUpdate(changedProperties){
        console.log(changedProperties);
        return changedProperties.has('counter') && this.counter < 2;
    }

    update(){
        super.update();
        console.log('updated: ', changedProperties);
    }



    render() {
        return html`
            <h1 class="${this.className}">${this.text}</h1>
            <span></span>
            <button @click('${_incrementCounter}')></button>
            
        `;
    }

   async firstUpdated(changedProperties){
        console.log(changedProperties);

        await this.updateComplete; // Asegura que s ebtengan los nodos con el último valor.
        this.shadowRoot.querySelector('button').addEventListener('click', () =>{
            console.log('Le di click')
        });

    }

    updated(changedProperties){ //Sirve para poder saber el valor final de un atributo
        console.log('updated');
        console.log(this.counter)
        if(changedProperties.has('conter') && this.counter > 2){
            this.text = 'Ya llegoó al 2'
        }
        this.dispatchEvent('show-error-modal', {detail:"No sirve el servicio "})
    }
}