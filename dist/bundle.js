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

/***/ "./images/autor.png":
/*!**************************!*\
  !*** ./images/autor.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/autor.png\";\n\n//# sourceURL=webpack:///./images/autor.png?");

/***/ }),

/***/ "./images/ecoalf.jpg":
/*!***************************!*\
  !*** ./images/ecoalf.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/ecoalf.jpg\";\n\n//# sourceURL=webpack:///./images/ecoalf.jpg?");

/***/ }),

/***/ "./images/ecoology.png":
/*!*****************************!*\
  !*** ./images/ecoology.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/ecoology.png\";\n\n//# sourceURL=webpack:///./images/ecoology.png?");

/***/ }),

/***/ "./images/equilicua.jpg":
/*!******************************!*\
  !*** ./images/equilicua.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/equilicua.jpg\";\n\n//# sourceURL=webpack:///./images/equilicua.jpg?");

/***/ }),

/***/ "./images/logo.jpg":
/*!*************************!*\
  !*** ./images/logo.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/logo.jpg\";\n\n//# sourceURL=webpack:///./images/logo.jpg?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.jpg */ \"./images/logo.jpg\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_autor_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/autor.png */ \"./images/autor.png\");\n/* harmony import */ var _images_autor_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_autor_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_ecoalf_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/ecoalf.jpg */ \"./images/ecoalf.jpg\");\n/* harmony import */ var _images_ecoalf_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_ecoalf_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_equilicua_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/equilicua.jpg */ \"./images/equilicua.jpg\");\n/* harmony import */ var _images_equilicua_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_equilicua_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_ecoology_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/ecoology.png */ \"./images/ecoology.png\");\n/* harmony import */ var _images_ecoology_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_ecoology_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.js */ \"./js/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video.js */ \"./js/video.js\");\n/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_video_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geo.js */ \"./js/geo.js\");\n/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_geo_js__WEBPACK_IMPORTED_MODULE_9__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n    document.addEventListener(\"DOMContentLoaded\", () => new _main_js__WEBPACK_IMPORTED_MODULE_6__[\"Main\"](), false)\r\n    console.log('loaded')\r\n})()\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Form{\r\n    constructor(){\r\n        this.vista = {\r\n            form: document.querySelector('#form'),\r\n            name: document.querySelector('#nombre'),\r\n            email: document.querySelector('#email'),\r\n            brands: document.querySelector('#marcas'),\r\n            comments: document.querySelector('#comentarios'),\r\n            resultForm: document.querySelector('#result-form'),\r\n            resultList: document.querySelector('#result-list'),\r\n            oDatos: {},\r\n        }\r\n        this.vista.form.addEventListener('submit', this.getData.bind(this),false);\r\n    }\r\n\r\n    getData(oEv){\r\n        oEv.preventDefault();\r\n        this.getName();\r\n        this.getEmail();\r\n        if(!this.getName() || !this.getEmail()){\r\n            return false;\r\n        } else {\r\n            this.getBrands();\r\n            this.getComments();\r\n            this.showData();\r\n        }\r\n    }\r\n\r\n    getName(){\r\n        console.log('name');\r\n        const name = this.vista.name.value;\r\n\r\n        if(!name.match(/^[a-z ,.'-]+$/i)){\r\n            this.vista.name.nextSibling.nextSibling.innerHTML = 'Nombre incorrecto';\r\n            return false;\r\n        } else{\r\n            this.vista.name.nextSibling.nextSibling.innerHTML = '';\r\n            this.vista.oDatos['Nombre'] = name;\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getEmail(){\r\n        console.log('email');\r\n        const email = this.vista.email.value;\r\n\r\n        if(!email.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)){\r\n            this.vista.email.nextSibling.nextSibling.innerHTML = 'Email incorrecto';\r\n            return false;\r\n        } else{\r\n            this.vista.email.nextSibling.nextSibling.innerHTML = '';\r\n            this.vista.oDatos['Email'] = email;\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getBrands(){\r\n        console.log('brands');\r\n        const brandsOptions = this.vista.brands;\r\n        const brand = brandsOptions.options[brandsOptions.selectedIndex];\r\n        const brandText = brand.text;\r\n        this.vista.oDatos['Marca'] = brandText;\r\n    }\r\n\r\n    getComments(){\r\n        console.log('comments');\r\n        const comment = this.vista.comments.value;\r\n        this.vista.oDatos['Comentario'] = comment;\r\n    }\r\n\r\n    showData(){\r\n        console.log('showdata');\r\n        this.vista.resultForm.classList.toggle('oculto');\r\n        this.vista.form.classList.toggle('oculto');\r\n\r\n        for(var i in this.vista.oDatos){\r\n            this.vista.resultList.innerHTML += \"<li><strong>\" + i + \": </strong>\" + this.vista.oDatos[i] + '</li>';\r\n            localStorage.setItem(i, this.vista.oDatos[i])\r\n        }\r\n    }\r\n}\r\n\r\n(function () {\r\n    document.addEventListener(\"DOMContentLoaded\", () => new Form(), false)\r\n})()\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/geo.js":
/*!*******************!*\
  !*** ./js/geo.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function initMap() {\r\n    window.navigator.geolocation.getCurrentPosition((position) => {\r\n        let latitud = position.coords.latitude;\r\n        let longitud = position.coords.longitude;\r\n        \r\n        console.log(latitud);\r\n        console.log(longitud)\r\n        var myLatLng = {lat: latitud, lng: longitud};\r\n\r\n        var map = new google.maps.Map(document.getElementById('map'), {\r\n            zoom: 13,\r\n            center: myLatLng\r\n        });\r\n\r\n        var marker = new google.maps.Marker({\r\n            position: myLatLng,\r\n            map: map,\r\n            title: 'Estás aquí'\r\n        });\r\n\r\n        var iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';\r\n        var icon = iconBase + 'grn-blank.png'\r\n\r\n        var features = [\r\n            {\r\n                position: new google.maps.LatLng(40.426118, -3.696861),\r\n            },\r\n            {\r\n                position: new google.maps.LatLng(40.423492, -3.698385),\r\n            },\r\n            {\r\n                position: new google.maps.LatLng(40.424440, -3.714377),\r\n            }\r\n        ]\r\n\r\n        features.forEach(function(feature) {\r\n            var marker = new google.maps.Marker({\r\n                position: feature.position,\r\n                icon: icon,\r\n                map: map\r\n            });\r\n        });\r\n    })\r\n}\r\n\r\n\r\n(function () {\r\n    document.addEventListener(\"DOMContentLoaded\", initMap, false)\r\n    console.log('geo loaded')\r\n})()\n\n//# sourceURL=webpack:///./js/geo.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\nclass Main{\r\n    constructor(){\r\n        this.vista = {\r\n            menuList: document.querySelector('#menu-list'),\r\n            navBars: document.querySelector('#nav-bars'),\r\n        }\r\n        this.vista.navBars.addEventListener('click',this.showMenu.bind(this),false);\r\n    }\r\n\r\n    showMenu(){\r\n        if(this.vista.menuList.style.display == 'block'){\r\n            this.vista.menuList.style.display = 'none';\r\n            this.vista.navBars.classList.add('fa-bars');\r\n            this.vista.navBars.classList.remove('fa-times');\r\n        } \r\n        else {\r\n            this.vista.menuList.style.display = 'block';\r\n            this.vista.navBars.classList.remove('fa-bars');\r\n            this.vista.navBars.classList.add('fa-times');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/video.js":
/*!*********************!*\
  !*** ./js/video.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function video () {\r\n   const maximo = 720; // ancho total en px de la barra de progreso\r\n   let oVideo = document.querySelector('.video');\r\n   let oReproducir = document.querySelector('.btn-reproducir');\r\n   let oBarra = document.querySelector('.barra');\r\n\r\n   oReproducir.addEventListener('click', clickReproducir)\r\n   oBarra.addEventListener('click', clickBarra)\r\n\r\n   function clickReproducir () {\r\n       if(!oVideo.paused && !oVideo.ended) {\r\n           //paramos el vídeo\r\n            oReproducir.classList.add('fa-play');\r\n            oReproducir.classList.remove('fa-pause');\r\n            oVideo.pause();\r\n            window.clearInterval(bucle);\r\n        }else{\r\n            //reproducimos el video\r\n            oVideo.play();\r\n            oReproducir.classList.remove('fa-play');\r\n            oReproducir.classList.add('fa-pause');\r\n            var bucle = window.setInterval(estado, 1000);\r\n            // cada segundo ejecuto la función estado, que pintará la barra de estado\r\n            return bucle;\r\n        }\t \r\n   };\r\n\r\n   function clickBarra (e) {\r\n       if(!oVideo.paused && !oVideo.ended) {\r\n            //si el video se esta reproduciendo\r\n            var ratonX = e.pageX - oBarra.offsetLeft;\r\n            // valor en x de la barra: x(raton) - x(inicio barra) \r\n            var nuevoTiempo = ratonX * oVideo.duration/maximo;\r\n            // valor x en segundos  x * t / x(maximo)\r\n            oVideo.currentTime = nuevoTiempo;\r\n            // cambio de tiempo del video\r\n            oBarra.value = ratonX;\r\n            // cambio de aspecto de la barra\r\n       }\r\n   };\r\n\r\n   function estado(bucle){\r\n       if(!oVideo.ended){\r\n           // si continua la reproducción\r\n           var total=parseInt(oVideo.currentTime * maximo/oVideo.duration);\r\n           oBarra.value = total;\r\n       }else{\r\n           oBarra.value = 0;\r\n           oReproducir.classList.add('fa-play');\r\n           oReproducir.classList.remove('fa-pause');\r\n           window.clearInterval(bucle);\r\n           // termino con la ejecución repetida de la función\r\n       };\r\n   };\r\n};\r\n\r\n\r\n(function () {\r\n   document.addEventListener(\"DOMContentLoaded\", video, false)\r\n   console.log('video loaded')\r\n})()\n\n//# sourceURL=webpack:///./js/video.js?");

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