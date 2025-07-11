import { LitElement, html, css } from 'lit';

export class TmTimeCounter extends LitElement {

    static properties = {
        seconds: { type: Number }
    }

    constructor() {
        super();

        this.seconds = 10;
    }

    static styles = css`
        :host {
            display: inline-block;
            border: 1px solid black;
            padding: 1rem;
        }

        p {
            color: red;
        }
        `;
    
    render() {
        return html`
        <p>${this.seconds}</p>
        <button @click=${this.add}>+1</button>
        `;
    }

     add() {
        this.seconds++;
    }
    
}