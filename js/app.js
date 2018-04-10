import '../scss/style.scss';
import { Main } from './main.js';
import { Form } from './form.js';
/* import { Geolocation } from './geo.js'; */


(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
    console.log('loaded')
})()