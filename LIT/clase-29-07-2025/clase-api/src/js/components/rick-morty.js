import { LitElement, html, css } from "lit";
import "../index";

export class RickMorty extends LitElement {
  static properties = {};

  constructor() {
    super();
    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  static styles = css``;

  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>
    `;
  }

  _dataFormat(data) {
    let characters = [];

    data ['results'].forEach((character) => {
        characters.push({
            img: character.image,
            name: character.name,
            species: character.species,
            status: character.status
        })
    })
    console.log(characters);
  }
}
