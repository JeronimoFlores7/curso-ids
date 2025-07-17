import { LitElement, html, css } from 'lit';


export class TmTimeCounter extends LitElement {

    static properties = {
        seconds: { type: Number },
        running: { type: Boolean}
    }

    constructor() {
        super();

        this.seconds = 10;
        this.running = false;
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
        <span><tm-seconds-to-time seconds='${this.seconds}'></tm-seconds-to-time></span>
        <sl-button @click=${this.start}  variant='neutral' size='small' pill>Start</sl-button>
        <sl-button @click=${this.reset}  variant='neutral' size='small' pill>Reset</sl-button>
        <sl-button @click=${this.stop}  variant='neutral' size='small' pill>Stop</sl-button>
        `;
    }

     add() {
        this.seconds++;
    }

    start() { 

        if(this.running == true){

        }else{
            this.running = true;
            this.timeCount();
        }

    }

    stop() { 
        this.running = false;
    }

    timeCount() {
        if(this.running) { 
            this.seconds++;
            setTimeout(() => this.timeCount(), 1000);
        }
    }

    reset() { 
        this.seconds = 0;
    }
    
}