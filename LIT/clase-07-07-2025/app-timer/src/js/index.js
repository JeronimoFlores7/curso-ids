import '../css/style.css'
import { TmTimeCounter } from './components/tm-time-counter';
import { TmSecondsToTime } from './components/tm-seconds-to-time';

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';

window.customElements.define('tm-time-counter', TmTimeCounter);
window.customElements.define('tm-seconds-to-time', TmSecondsToTime);