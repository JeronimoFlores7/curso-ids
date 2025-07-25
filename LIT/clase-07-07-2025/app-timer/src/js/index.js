import '../css/style.css'
import { TmTimeCounter } from './components/tm-time-counter';
import { TmSecondsToTime } from './components/tm-seconds-to-time';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
setBasePath('/node_modules/@shoelace-style/shoelace/dist/');


window.customElements.define('tm-time-counter', TmTimeCounter);
window.customElements.define('tm-seconds-to-time', TmSecondsToTime);