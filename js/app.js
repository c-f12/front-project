import '../scss/style.scss';

import logo from '../images/logo.jpg';
import autor from '../images/autor.png';
import ecoalf from '../images/ecoalf.jpg';
import equilicua from '../images/equilicua.jpg';
import ecoology from '../images/ecoology.png';

import { Main } from './main.js';
import { Form } from './form.js';
import { video } from './video.js';
import { geo } from './geo.js';


(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
    console.log('loaded')
})()