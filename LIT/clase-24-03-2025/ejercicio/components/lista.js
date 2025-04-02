import { LitElement, html, css } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { guard } from "lit/directives/guard.js";
import { live } from "lit/directives/live.js";

export class ListaInvitados extends LitElement {
  constructor() {
    super();
    this.titulo = '';
    this.invitados = [
      { nombre: 'Jeronimo', especial: false },
      { nombre: 'Luis', especial: false },
      { nombre: 'Victor', especial: true },
      { nombre: 'Arturo', especial: false }
    ];
    this.filtro = '';
  }

  static properties = {
    titulo: { 
      type: String,
      attribute: 'titulo' 
    },
    invitados: { 
      type: Array,
      attribute: 'invitados'
    },
    filtro: {
      type: String,
      reflect: true
    }
  };

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      max-width: 300px;
    }
    h2 {
      color: #333;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    .invitado {
      background: #f3f3f3;
      margin: 4px 0;
      padding: 8px;
      border-radius: 4px;
    }
    .especial {
      font-weight: bold;
      color: white;
      background: #cb9201;
    }
    .filtro {
      margin-bottom: 16px;
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
  `;



  render() {
    return html`
      <h2>${ifDefined(this.titulo)}</h2>
      
      <input
        class="filtro"
        .value=${live(this.filtro)}
        @input=${e => this.filtro = e.target.value}
        placeholder="Filtrar invitados...">
      
      ${guard([this.invitados, this.filtro], () => 
        when(this.invitadosFiltrados.length > 0, 
          () => html`
            <ul>
              ${repeat(this.invitadosFiltrados, (invitado) => invitado.nombre, (invitado) => html`
                <li 
                  class=${classMap({ invitado: true, especial: invitado.especial })} 
                  style=${styleMap({ padding: "10px", border: "1px solid #ddd" })}>
                  ${invitado.nombre}
                </li>`)}
            </ul>
          `,
          () => html`<p>${this.filtro ? 'No hay coincidencias' : 'No hay invitados.'}</p>`
        )
      )}
    `;

    
  }
  get invitadosFiltrados() {
    return this.invitados.filter(invitado => 
      invitado.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}