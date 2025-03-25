import {LitElement, css, html} from 'lit';

export class ImageCarousel extends LitElement {

  constructor() {
    super();
    this.index = 0;
    this.images = [];
    this.height = "300px";
    this.width = "500px";
    this.borderRadius = "";
  }

  static properties = {
    images: { type: Array },
    index: { type: Number },
    height: { type: String },
    width: { type: String },
    borderRadius: { type: String }
  };

  static styles = css`
    img {
      border-radius: var(--img-radius);
      height: var(--img-height);
      width: var(--img-width);
    }
    .imagen {
      display: flex;
      justify-content: center;
    }

    p {
      font-family: "Gill Sans", sans-serif;
    }
    button {
      background-color: black;
      color: white;
      border: none;
      border-radius: 3px;
      margin: 1rem;
      padding: 0.5rem;
    }
    button:hover {
      background-color: grey;
      cursor: pointer;
    }
    button[disabled] {
      background-color: grey;
      cursor: not-allowed;
    }
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  updated() {
    this.style.setProperty("--img-height", this.height);
    this.style.setProperty("--img-width", this.width);
    this.style.setProperty("--img-radius", this.borderRadius);

  }

  //Ciclo de vida del componente
  render() {
    return html` <section class="imagen">
        <img src="${this.images[this.index]}" />
      </section>
      <section class="btns">
        <button id="left" @click="${this._leftClick}"><</button>
        <p>${this.index + 1}/${this.images.length}</p>
        <button id="right" @click="${this._rightClick}">></button>
      </section>`;
  }

  _leftClick() {
    if (this.index > 0) {
      this.index--;
    }
  }

  _rightClick() {
    if (this.index < this.images.length - 1) {
      this.index++;
    }
  }
}
