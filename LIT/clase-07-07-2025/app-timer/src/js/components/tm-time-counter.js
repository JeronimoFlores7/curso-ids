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
        display: block;
        padding: 2rem;
    }

    .controls {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }

    sl-button {
        --sl-color-primary-50: #ffffff;  
        --sl-color-primary-500: #ffffff; 
        --sl-focus-ring-color: rgba(255, 255, 255, 0.3);
    }

    sl-button::part(base) {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        transition: all 0.2s ease;
    }

    sl-button::part(base):hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: white;
    }

    sl-button::part(base):active {
        background: rgba(255, 255, 255, 0.2);
    }

        `;
    
    render() {
        return html`
        <span><tm-seconds-to-time seconds='${this.seconds}'></tm-seconds-to-time></span>
        <div class="controls">
            <sl-button @click=${this.start} variant="default" circle>
                <sl-icon name="play-fill"></sl-icon>
            </sl-button>
            <sl-button @click=${this.stop} variant="default" circle>
                <sl-icon name="pause-fill"></sl-icon>
            </sl-button>
            <sl-button @click=${this.reset} variant="default" circle>
                <sl-icon name="stop-fill"></sl-icon>
            </sl-button>
        </div>
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