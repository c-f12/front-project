/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ \"./js/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.js */ \"./js/video.js\");\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_video_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* import { Geolocation } from './geo.js'; */\n\n\n(function () {\n    document.addEventListener(\"DOMContentLoaded\", () => new _main_js__WEBPACK_IMPORTED_MODULE_1__[\"Main\"](), false)\n    console.log('loaded')\n})()\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Form{\n    constructor(){\n        this.vista = {\n            form: document.querySelector('#form'),\n            name: document.querySelector('#nombre'),\n            email: document.querySelector('#email'),\n            brands: document.querySelector('#marcas'),\n            comments: document.querySelector('#comentarios'),\n            resultForm: document.querySelector('#result-form'),\n            resultList: document.querySelector('#result-list'),\n            oDatos: {},\n        }\n        this.vista.form.addEventListener('submit', this.getData.bind(this),false);\n    }\n\n    getData(oEv){\n        oEv.preventDefault();\n        this.getName();\n        this.getEmail();\n        if(!this.getName() || !this.getEmail()){\n            return false;\n        } else {\n            this.getBrands();\n            this.getComments();\n            this.showData();\n        }\n    }\n\n    getName(){\n        console.log('name');\n        const name = this.vista.name.value;\n\n        if(!name.match(/^[a-z ,.'-]+$/i)){\n            this.vista.name.nextSibling.nextSibling.innerHTML = 'Nombre incorrecto';\n            return false;\n        } else{\n            this.vista.name.nextSibling.nextSibling.innerHTML = '';\n            this.vista.oDatos['Nombre'] = name;\n            return true;\n        }\n    }\n\n    getEmail(){\n        console.log('email');\n        const email = this.vista.email.value;\n\n        if(!email.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)){\n            this.vista.email.nextSibling.nextSibling.innerHTML = 'Email incorrecto';\n            return false;\n        } else{\n            this.vista.email.nextSibling.nextSibling.innerHTML = '';\n            this.vista.oDatos['Email'] = email;\n            return true;\n        }\n    }\n\n    getBrands(){\n        console.log('brands');\n        const brandsOptions = this.vista.brands;\n        const brand = brandsOptions.options[brandsOptions.selectedIndex];\n        const brandText = brand.text;\n        this.vista.oDatos['Marca'] = brandText;\n    }\n\n    getComments(){\n        console.log('comments');\n        const comment = this.vista.comments.value;\n        this.vista.oDatos['Comentario'] = comment;\n    }\n\n    showData(){\n        console.log('showdata');\n        this.vista.resultForm.classList.toggle('oculto');\n        this.vista.form.classList.toggle('oculto');\n\n        for(var i in this.vista.oDatos){\n            this.vista.resultList.innerHTML += \"<li><strong>\" + i + \": </strong>\" + this.vista.oDatos[i] + '</li>';\n            localStorage.setItem(i, this.vista.oDatos[i])\n        }\n    }\n}\n\n(function () {\n    document.addEventListener(\"DOMContentLoaded\", () => new Form(), false)\n})()\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\nclass Main{\n    constructor(){\n        this.vista = {\n            menuList: document.querySelector('#menu-list'),\n            navBars: document.querySelector('#nav-bars'),\n        }\n        this.vista.navBars.addEventListener('click',this.showMenu.bind(this),false);\n    }\n\n    showMenu(){\n        if(this.vista.menuList.style.display == 'block'){\n            this.vista.menuList.style.display = 'none';\n            this.vista.navBars.classList.add('fa-bars');\n            this.vista.navBars.classList.remove('fa-times');\n        } \n        else {\n            this.vista.menuList.style.display = 'block';\n            this.vista.navBars.classList.remove('fa-bars');\n            this.vista.navBars.classList.add('fa-times');\n        }\n    }\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/video.js":
/*!*********************!*\
  !*** ./js/video.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function video () {\n   const maximo = 720; // ancho total en px de la barra de progreso, definido en css \n   let oVideo = document.querySelector('.video');\n   let oReproducir = document.querySelector('.btn-reproducir');\n   let oBarra = document.querySelector('.barra');\n\n   oReproducir.addEventListener('click', clickReproducir)\n   oBarra.addEventListener('click', clickBarra)\n\n   function clickReproducir () {\n       if(!oVideo.paused && !oVideo.ended) {\n           //paramos el vídeo\n            oReproducir.classList.add('fa-play');\n            oReproducir.classList.remove('fa-pause');\n            oVideo.pause();\n            window.clearInterval(bucle);\n        }else{\n            //reproducimos el video\n            oVideo.play();\n            oReproducir.classList.remove('fa-play');\n            oReproducir.classList.add('fa-pause');\n            var bucle = window.setInterval(estado, 1000);\n            // cada segundo ejecuto la función estado, que pintará la barra de estado\n            // bucle corresponde al identificator del setInterval\n            return bucle;\n        }\t \n   }; // fin de la funcion clicReproducir, manejadora de click en el boton\n\n   function clickBarra (e) {\n       if(!oVideo.paused && !oVideo.ended) {\n            //si el video se esta reproduciendo\n            var ratonX = e.pageX - oBarra.offsetLeft;\n            // valor en x de la barra: x(raton) - x(inicio barra) \n            var nuevoTiempo = ratonX * oVideo.duration/maximo;\n            // valor x en segundos  x * t / x(maximo)\n            oVideo.currentTime = nuevoTiempo;\n            // cambio de tiempo del video\n            oBarra.value = ratonX;\n            // cambio de aspecto de la barra\n       }\n   }; // fin de la funcion clicBarra, manejadora de click en la barra\n\n   function estado(bucle){\n       if(!oVideo.ended){\n           // si continua la reproducción\n           var total=parseInt(oVideo.currentTime * maximo/oVideo.duration);\n           //paso el curretTime a pixels\n           oBarra.value = total;\n           // actualizo el aspecto de la barra\n       }else{\n           oBarra.value = 0;\n           // actualizo el aspecto de la barra\n           oReproducir.classList.add('fa-play');\n           oReproducir.classList.remove('fa-pause');\n           // actualizo el aspecto del boton\n           window.clearInterval(bucle);\n           // termino con la ejecución repetida de la función\n       };\n   }; // Fin de la función estado()\n\n};\n\n\n(function () {\n   document.addEventListener(\"DOMContentLoaded\", video, false)\n   console.log('video loaded')\n})()\n\n//# sourceURL=webpack:///./js/video.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ })

/******/ });