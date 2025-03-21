import {LitElement, css,html} from "https://cdn.jsdelivr.net/npm/lit@3.2.1/+esm";

export class ImageCarousel extends LitElement {
  static properties = {
    images: { type: Array },
    index: { type: Number },
    height: { type: String },
    width: { type: String },
    borderRadius: { type: String },
  };

  constructor() {
    super();
    this.index = 0;
    this.images = [];
    this.height = "300px";
    this.width = "auto";
    this.borderRadius = "";
  }

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

  render() {
    console.log(this.images);
    return html` <section class="imagen">
        <img src="${this.images[this.index]}" />
      </section>
      <section class="btns">
        <button @click="${this._leftClick}"><</button>
        <p>${this.index + 1}/${this.images.length} </p>
        <button @click="${this._rightClick}">></button>
      </section>`;
  }

  _leftClick() {
    if (this.index > 0) {
      this.index--;
    }
    
  }

  _rightClick() {
    if (this.index < this.images.length - 1) {
      console.log("click");
      this.index++;
      
    }
  }
}
