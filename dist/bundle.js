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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ \"./js/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n/* import { Geolocation } from './geo.js'; */\r\n\r\n\r\n(function () {\r\n    document.addEventListener(\"DOMContentLoaded\", () => new _main_js__WEBPACK_IMPORTED_MODULE_1__[\"Main\"](), false)\r\n    console.log('loaded')\r\n})()\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Form{\r\n    constructor(){\r\n        this.vista = {\r\n            form: document.querySelector('#form'),\r\n            name: document.querySelector('#nombre'),\r\n            email: document.querySelector('#email'),\r\n            brands: document.querySelector('#marcas'),\r\n            comments: document.querySelector('#comentarios'),\r\n            resultForm: document.querySelector('#result-form'),\r\n            resultList: document.querySelector('#result-list'),\r\n            oDatos: {},\r\n        }\r\n        this.vista.form.addEventListener('submit', this.getData.bind(this),false);\r\n    }\r\n\r\n    getData(oEv){\r\n        oEv.preventDefault();\r\n        this.getName();\r\n        this.getEmail();\r\n        if(!this.getName() || !this.getEmail()){\r\n            return false;\r\n        } else {\r\n            this.getBrands();\r\n            this.getComments();\r\n            this.showData();\r\n        }\r\n    }\r\n\r\n    getName(){\r\n        console.log('name');\r\n        const name = this.vista.name.value;\r\n\r\n        if(!name.match(/^[a-z ,.'-]+$/i)){\r\n            this.vista.name.nextSibling.nextSibling.innerHTML = 'Nombre incorrecto';\r\n            return false;\r\n        } else{\r\n            this.vista.name.nextSibling.nextSibling.innerHTML = '';\r\n            this.vista.oDatos['Nombre'] = name;\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getEmail(){\r\n        console.log('email');\r\n        const email = this.vista.email.value;\r\n\r\n        if(!email.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)){\r\n            this.vista.email.nextSibling.nextSibling.innerHTML = 'Email incorrecto';\r\n            return false;\r\n        } else{\r\n            this.vista.email.nextSibling.nextSibling.innerHTML = '';\r\n            this.vista.oDatos['Email'] = email;\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getBrands(){\r\n        console.log('brands');\r\n        const brandsOptions = this.vista.brands;\r\n        const brand = brandsOptions.options[brandsOptions.selectedIndex];\r\n        const brandText = brand.text;\r\n        this.vista.oDatos['Marca'] = brandText;\r\n    }\r\n\r\n    getComments(){\r\n        console.log('comments');\r\n        const comment = this.vista.comments.value;\r\n        this.vista.oDatos['Comentario'] = comment;\r\n    }\r\n\r\n    showData(){\r\n        console.log('showdata');\r\n        this.vista.resultForm.classList.toggle('oculto');\r\n        this.vista.form.classList.toggle('oculto');\r\n\r\n        for(var i in this.vista.oDatos){\r\n            this.vista.resultList.innerHTML += \"<li><strong>\" + i + \": </strong>\" + this.vista.oDatos[i] + '</li>';\r\n            localStorage.setItem(i, this.vista.oDatos[i])\r\n        }\r\n    }\r\n}\r\n\r\n(function () {\r\n    document.addEventListener(\"DOMContentLoaded\", () => new Form(), false)\r\n})()\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\nclass Main{\r\n    constructor(){\r\n        this.vista = {\r\n            menuList: document.querySelector('#menu-list'),\r\n            navBars: document.querySelector('#nav-bars'),\r\n        }\r\n        this.vista.navBars.addEventListener('click',this.showMenu.bind(this),false);\r\n    }\r\n\r\n    showMenu(){\r\n\r\n        if(menuList.style.display == 'block'){\r\n            this.menuList.style.display = 'none';\r\n            this.navBars.classList.add('fa-bars');\r\n            this.navBars.classList.remove('fa-times');\r\n        } \r\n        else {\r\n            this.menuList.style.display = 'block';\r\n            this.navBars.classList.remove('fa-bars');\r\n            this.navBars.classList.add('fa-times');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/main.js?");

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