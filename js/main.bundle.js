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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./source/css/form.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/css/form.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*Компонент форма*/\n/*Часто используемы цвета*/\n:root {\n    --red__basic: hsl(0, 76%, 59%);\n    --light__red: rgba(230, 70, 70, .3);\n    --black__basic: rgb(0, 0, 0);\n    --white__basic: rgb(255, 255, 255);\n    --basic__grey: rgb(128, 128, 128);\n    --light__grey: rgb(226, 225, 225);\n    --basic__blue: rgb(81, 129, 184);\n    --light__blue: rgba(81, 129, 184, .5);\n    --darker__blue: rgba(81, 129, 184, .8);\n\n    --darken__night-theme: rgb(17, 17, 17);\n    --grey__text: rgb(117, 117, 117);\n    --basic__yellow: rgb(255, 188, 4);\n    --light__yellow: rgba(255, 188, 4, .5);\n  }\n\n  /* Светлая тема*/\n\n  label {\n    cursor: pointer;\n  }\n\n  .form {\n    width: 900px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    padding-left: 20px;\n    padding-bottom: 30px;\n  }\n\n  .form__wrap-title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  .form__wrap-title svg {\n    width: 50px;\n    height: 40px;\n  }\n\n  .form__wrap-name {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  }\n\n  .form__wrap-age,\n  .form__residence {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .form__input,\n  .form__select {\n    border: 2px solid var(--light__grey);\n    font-family: \"sf\", \"Arial\", sans-serif;\n    height: 25px;\n    border-radius: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  .form__select {\n    height: 30px;\n  }\n\n  .form__textarea {\n    height: 100px;\n    width: 350px;\n    border-radius: 15px;\n    padding: 10px;\n    border: 2px solid var(--light__grey);\n  }\n\n  .form__input:hover,\n  .form__input:focus,\n  .form__select:hover,\n  .form__select:focus\n  .form__textarea:hover,\n  .form__textarea:focus {\n    border: 2px solid var(--basic__blue);\n    outline: none;\n  }\n\n  .form__input:active,\n  .form__select:active,\n  .form__textarea:active {\n    border: 2px solid var(--basic__blue);\n    outline: none;\n  }\n\n  .form__upload-field-wrap {\n    margin-top: 10px;\n  }\n\n  .form__wrap-checkbox {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .form__wrap-checkbox p {\n    margin-top: 0px;\n    margin-right: 20px;\n  }\n\n  .form__wrap-checkbox label {\n    margin-left: 10px;\n  }\n\n  .form__checkbox {\n    display: flex;\n    position: relative;\n    flex-wrap: wrap;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .form__checkbox-input {\n    opacity: 0;\n    position: absolute;\n  }\n\n  .form__checkbox-pseudo {\n    width: 18px;\n    height: 18px;\n    background-color: transparent;\n    border: 1px solid var(--light__grey);\n    cursor: pointer;\n  }\n\n  .form__checkbox-pseudo:hover {\n    border: 1px solid var(--basic__grey);\n  }\n\n  .form__checkbox-input:checked + .form__checkbox-pseudo::before {\n    content: 'Г';\n    font-weight: bold;\n    color: var(--basic__blue);\n    transform: rotate(220deg);\n    top: 4px;\n    width: 12px;\n    height: 12px;\n    position: absolute;\n  }\n\n  .form__checkbox-text {\n    margin-left: 10px;\n    cursor: pointer;\n  }\n\n  .form__button {\n    font-family: inherit;\n    cursor: pointer;\n    width: 180px;\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    margin-right: 30px;\n  }\n\n  .form__submit {\n    background-color: var(--basic__blue);\n    color: var(--white__basic);\n  }\n\n  .form__submit:hover,\n  .form__submit:focus,\n  .form__submit:disabled {\n    background-color: var(--light__blue);\n    outline: none;\n  }\n\n  .form__submit:active {\n    background-color: var(--darker__blue);\n    border: 2px solid var(--basic__black);\n  }\n\n  .form__reset {\n    width: 100px;\n    color: var(--red__basic);\n    background-color: transparent;\n    border: 1px solid var(--red__basic);\n  }\n\n  .form__reset:hover,\n  .form__reset:focus {\n    background-color: var(--light__red);\n    outline: none;\n  }\n\n  .form__reset:active {\n    background-color: var(--light__red);\n    border: 2px solid var(--red__basic);\n  }\n\n  .form__change {\n    position: relative;\n    width: 35px;\n    border-radius: 100%;\n    background-color: transparent;\n    fill: var(--basic__grey);\n  }\n\n  .form__change:hover,\n  .form__change:focus {\n    fill: var(--basic__yellow);\n    outline: none;\n  }\n\n  .form__change:active {\n    fill: var(--light__yellow);\n    outline: none;\n  }\n\n  /*Темная тема*/\n\n  .form--night {\n    color: var(--grey__text);\n    background-color: var(--darken__night-theme);\n  }\n\n  .form__input--night,\n  .form__select--night {\n    border: 1px solid var(--light__grey);\n    background-color: var(--darken__night-theme);\n    border-radius: 10px;\n    color: var(--white__basic);\n  }\n\n  .form__input--night:hover,\n  .form__input--night:focus,\n  .form__select--night:hover,\n  .form__select--night:focus\n  .form__textarea--night:hover,\n  .form__textarea--night:focus {\n    border: 1px solid var(--basic__blue);\n  }\n\n  .form__input--night:active,\n  .form__select--night:active,\n  .form__textarea--night:active {\n    border: 1px solid var(--basic__blue);\n  }\n\n  .form__textarea--night {\n    background-color: transparent;\n    color: var(--white__basic);\n    border: 1px solid var(--white__basic);\n  }\n\n  .form__submit--night {\n    background-color: transparent;\n    border: 1px solid var(--basic__blue);\n    color: var(--white__basic);\n  }\n\n  .form__submit--night:hover,\n  .form__submit--night:focus {\n    border: 2px solid var(--basic__blue);\n  }\n\n  .form__submit--night:active {\n    background-color: transparent;\n    border: 4px solid var(--basic__blue);\n  }\n", "",{"version":3,"sources":["webpack://./source/css/form.css"],"names":[],"mappings":"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","sourcesContent":["/*Компонент форма*/\n/*Часто используемы цвета*/\n:root {\n    --red__basic: hsl(0, 76%, 59%);\n    --light__red: rgba(230, 70, 70, .3);\n    --black__basic: rgb(0, 0, 0);\n    --white__basic: rgb(255, 255, 255);\n    --basic__grey: rgb(128, 128, 128);\n    --light__grey: rgb(226, 225, 225);\n    --basic__blue: rgb(81, 129, 184);\n    --light__blue: rgba(81, 129, 184, .5);\n    --darker__blue: rgba(81, 129, 184, .8);\n\n    --darken__night-theme: rgb(17, 17, 17);\n    --grey__text: rgb(117, 117, 117);\n    --basic__yellow: rgb(255, 188, 4);\n    --light__yellow: rgba(255, 188, 4, .5);\n  }\n\n  /* Светлая тема*/\n\n  label {\n    cursor: pointer;\n  }\n\n  .form {\n    width: 900px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    padding-left: 20px;\n    padding-bottom: 30px;\n  }\n\n  .form__wrap-title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n\n  .form__wrap-title svg {\n    width: 50px;\n    height: 40px;\n  }\n\n  .form__wrap-name {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  }\n\n  .form__wrap-age,\n  .form__residence {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .form__input,\n  .form__select {\n    border: 2px solid var(--light__grey);\n    font-family: \"sf\", \"Arial\", sans-serif;\n    height: 25px;\n    border-radius: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    margin-bottom: 20px;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  .form__select {\n    height: 30px;\n  }\n\n  .form__textarea {\n    height: 100px;\n    width: 350px;\n    border-radius: 15px;\n    padding: 10px;\n    border: 2px solid var(--light__grey);\n  }\n\n  .form__input:hover,\n  .form__input:focus,\n  .form__select:hover,\n  .form__select:focus\n  .form__textarea:hover,\n  .form__textarea:focus {\n    border: 2px solid var(--basic__blue);\n    outline: none;\n  }\n\n  .form__input:active,\n  .form__select:active,\n  .form__textarea:active {\n    border: 2px solid var(--basic__blue);\n    outline: none;\n  }\n\n  .form__upload-field-wrap {\n    margin-top: 10px;\n  }\n\n  .form__wrap-checkbox {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\n  .form__wrap-checkbox p {\n    margin-top: 0px;\n    margin-right: 20px;\n  }\n\n  .form__wrap-checkbox label {\n    margin-left: 10px;\n  }\n\n  .form__checkbox {\n    display: flex;\n    position: relative;\n    flex-wrap: wrap;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .form__checkbox-input {\n    opacity: 0;\n    position: absolute;\n  }\n\n  .form__checkbox-pseudo {\n    width: 18px;\n    height: 18px;\n    background-color: transparent;\n    border: 1px solid var(--light__grey);\n    cursor: pointer;\n  }\n\n  .form__checkbox-pseudo:hover {\n    border: 1px solid var(--basic__grey);\n  }\n\n  .form__checkbox-input:checked + .form__checkbox-pseudo::before {\n    content: 'Г';\n    font-weight: bold;\n    color: var(--basic__blue);\n    transform: rotate(220deg);\n    top: 4px;\n    width: 12px;\n    height: 12px;\n    position: absolute;\n  }\n\n  .form__checkbox-text {\n    margin-left: 10px;\n    cursor: pointer;\n  }\n\n  .form__button {\n    font-family: inherit;\n    cursor: pointer;\n    width: 180px;\n    height: 40px;\n    border: none;\n    border-radius: 5px;\n    margin-right: 30px;\n  }\n\n  .form__submit {\n    background-color: var(--basic__blue);\n    color: var(--white__basic);\n  }\n\n  .form__submit:hover,\n  .form__submit:focus,\n  .form__submit:disabled {\n    background-color: var(--light__blue);\n    outline: none;\n  }\n\n  .form__submit:active {\n    background-color: var(--darker__blue);\n    border: 2px solid var(--basic__black);\n  }\n\n  .form__reset {\n    width: 100px;\n    color: var(--red__basic);\n    background-color: transparent;\n    border: 1px solid var(--red__basic);\n  }\n\n  .form__reset:hover,\n  .form__reset:focus {\n    background-color: var(--light__red);\n    outline: none;\n  }\n\n  .form__reset:active {\n    background-color: var(--light__red);\n    border: 2px solid var(--red__basic);\n  }\n\n  .form__change {\n    position: relative;\n    width: 35px;\n    border-radius: 100%;\n    background-color: transparent;\n    fill: var(--basic__grey);\n  }\n\n  .form__change:hover,\n  .form__change:focus {\n    fill: var(--basic__yellow);\n    outline: none;\n  }\n\n  .form__change:active {\n    fill: var(--light__yellow);\n    outline: none;\n  }\n\n  /*Темная тема*/\n\n  .form--night {\n    color: var(--grey__text);\n    background-color: var(--darken__night-theme);\n  }\n\n  .form__input--night,\n  .form__select--night {\n    border: 1px solid var(--light__grey);\n    background-color: var(--darken__night-theme);\n    border-radius: 10px;\n    color: var(--white__basic);\n  }\n\n  .form__input--night:hover,\n  .form__input--night:focus,\n  .form__select--night:hover,\n  .form__select--night:focus\n  .form__textarea--night:hover,\n  .form__textarea--night:focus {\n    border: 1px solid var(--basic__blue);\n  }\n\n  .form__input--night:active,\n  .form__select--night:active,\n  .form__textarea--night:active {\n    border: 1px solid var(--basic__blue);\n  }\n\n  .form__textarea--night {\n    background-color: transparent;\n    color: var(--white__basic);\n    border: 1px solid var(--white__basic);\n  }\n\n  .form__submit--night {\n    background-color: transparent;\n    border: 1px solid var(--basic__blue);\n    color: var(--white__basic);\n  }\n\n  .form__submit--night:hover,\n  .form__submit--night:focus {\n    border: 2px solid var(--basic__blue);\n  }\n\n  .form__submit--night:active {\n    background-color: transparent;\n    border: 4px solid var(--basic__blue);\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./source/css/form.css":
/*!*****************************!*\
  !*** ./source/css/form.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./source/css/form.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./source/js/components/form-view.js":
/*!*******************************************!*\
  !*** ./source/js/components/form-view.js ***!
  \*******************************************/
/*! exports provided: createFormTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormTemplate", function() { return createFormTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/form.css */ "./source/css/form.css");
/* harmony import */ var _render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/render-elem.js */ "./source/js/render/render-elem.js");




  const CHECKBOX_BORDER = '1px solid grey';


//создает разметку на основе нашего JSON
const createFormTemplate = (data = null) => {

  const {submit = '',
    personalData  = '',
    statistics = '',
    textPlace = '',
    contactInformation = '',
    placeOfResidence = '',
    date = '',
    agreement = '',
    sex = '',
    uploadFiles = '',
    button = ''} = data;

    const isTextPlace = textPlace.length;
    const isPersonalData = personalData && statistics && textPlace && sex && date && uploadFiles;
    const isContactInfo = contactInformation && placeOfResidence && agreement;

  return `<form class='form' action=${submit ? submit[0].url : ''} method=${submit ? submit[0].type : ''} enctype='${submit ? submit[0].enctype : ''}'>
        <div class='form__wrap-title'>
          ${isPersonalData ? `<h2>Личные данные</h2>` : ''}
          <button class='form__button form__change' type='button'>
            <svg class='form__svg-night'>
              <use width="40" height="40" xlink:href='img/sprite/sprite.svg#moon'></use>
            </svg>
            <svg class='visually-hidden form__svg-day'>
              <use width="40" height="40" xlink:href='img/sprite/sprite.svg#sun'></use>
            </svg>
          </button>
        </div>

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupInput"])(personalData) ?
          `<div class='form__wrap-name'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupInput"])(personalData)}
          </div>
          <div class='form__wrap-age'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupInput"])(date)}
          </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupCheck"])(sex) ? `<div class='form__wrap-checkbox'>
        <p>Выбирите пол:</p>
        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupCheck"])(sex)}
        </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupSelect"])(statistics)}

        ${isTextPlace ?
          Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupTextarea"])(textPlace) : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupUploadFile"])(uploadFiles) ?
          `<div class='form__upload-field-wrap'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupUploadFile"])(uploadFiles)}
          </div>` : ''}

        ${isContactInfo ? `<h3>Контактная информация</h3>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupSelect"])(placeOfResidence) ? `<div class='form__residence'>
          ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupSelect"])(placeOfResidence)}
        </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupInput"])(contactInformation)}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupCheck"])(agreement)}
        <div>
         ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_1__["getMarkupButton"])(button)}
        </div>
      </form>
  `;
};


class Form {
  constructor(dataJSON) {
    this._dataJSON = dataJSON;
    this._data = null;

    this._focusPseudoCheckboxHandler = this._focusPseudoCheckboxHandler.bind(this);
    this._themeChangeHandler = this._themeChangeHandler.bind(this);
  }

  _getData() {
    return this._data = JSON.parse(this._dataJSON);
  }

  init() {
    if (!this._data.submit && this._data.button) {
      document.querySelector('.form__submit').disabled = true;
      throw Error('You must specify the attributes in the <form> tag');
    }

    this.getTemplate();
    this.setFocusPseudoCheckboxHandler();
    this.setThemeChangeHandler();
  }

  getTemplate() {
    return createFormTemplate(this._getData());
  }

  setFocusPseudoCheckboxHandler() {
    document.querySelectorAll('.form__checkbox-input')
    .forEach((inputs) => {
    return inputs.addEventListener('focus', this._focusPseudoCheckboxHandler);
    });
  }

  _focusPseudoCheckboxHandler(evt) {
    const formPseudoCheckboxes = document.querySelectorAll('.form__checkbox-pseudo');

      formPseudoCheckboxes.forEach((checkbox) => {
        if (checkbox.getAttribute('for') === evt.target.id) {
          checkbox.style.border = CHECKBOX_BORDER;
        } else {
          checkbox.style.border = '';
        }
    });
  }

  _toggleClass(classElem, classElemAdd) {
    document.querySelectorAll(classElem).
      forEach((item) => { return item.classList.toggle(classElemAdd) });
  }

  setThemeChangeHandler() {
    document.querySelector('.form__change').
      addEventListener('click', this._themeChangeHandler);
  }

  _themeChangeHandler() {
    document.querySelector('.form').classList.toggle('form--night');
    document.querySelector('.page__body').classList.toggle('page__body--night');
    this._toggleClass('.form__input', 'form__input--night');
    this._toggleClass('.form__select', 'form__select--night');
    this._toggleClass('.form__submit', 'form__submit--night');
    this._toggleClass('.form__textarea', 'form__textarea--night');

    document.querySelector('.form__change').querySelectorAll('svg')
      .forEach((item) => { item.classList.toggle('visually-hidden');
    });
  }

}



/***/ }),

/***/ "./source/js/data/data.js":
/*!********************************!*\
  !*** ./source/js/data/data.js ***!
  \********************************/
/*! exports provided: dataJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataJSON", function() { return dataJSON; });
const data = {
  'submit' : [
    {
      'url': 'www.example.com',
      'type': 'POST',
      'enctype': 'multipart/form-data',
    },
  ],
  'personalData': [
    {
      'label': 'Фамилия',
      'type': 'text',
      'id': 'surname',
      'placeholder': 'Иванов'
    },
    {
      'label': 'Имя',
      'type': 'text',
      'id': 'name',
      'placeholder': 'Иван'
    },
    {
      'label': 'Отчество',
      'type': 'text',
      'id': 'patronymic',
      'placeholder': 'Иванович'
    },
  ],
  'sex' : [
    {
      'id': 'men',
      'type': 'radio',
      'label': 'Мужчина',
      'name' : 'sex'
    },
    {
      'id': 'women',
      'type': 'radio',
      'label': 'Женщина',
      'name' : 'sex'
    }
  ],
  'date' : [
    {
      'id': 'date',
      'label': 'Дата рождения',
      'placeholder': '',
      'type': 'date',
    },
  ],
  'statistics' : [
    {
      'label': 'Семейное положение',
      'id': 'family__status',
      'values': [
        'Не замужем, не женат',
        'Замужем, женат',
        'Разведён, разведена',
        'Вдова, вдовец',
      ]
    },
    {
      'label': 'Образование',
      'id': 'education',
      'values': [
        'Высшее',
        'Среднее профессиональное',
        'Среднее (полное)',
        'Среднее',
      ]
    },
  ],
  'textPlace': [
    {
      'placeholder' : 'Расскажите о себе...',
    },
  ],
  'uploadFiles' : [
    {
      'id': 'upload',
      'label': '...или можете загрузить текстовый документ',
      'placeholder': '',
      'type': 'file',
      'accept' : '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
  ],
  'placeOfResidence' : [
    {
      'label': 'Город',
      'id': 'city',
      'values': [
        'Москва',
        'Казань',
        'Санкт-Петербург',
        'Волгоград',
        'Краснодар',
        'Сочи',
      ]
    },
  ],
  'contactInformation' : [
    {
      'label': 'Моб. телефон',
      'type': 'text',
      'id': 'phone',
      'placeholder': '89518998989'
    },
    {
      'label': 'Электронная почта',
      'type': 'text',
      'id': 'email',
      'placeholder': 'example@example.ru'
    },
  ],
  'agreement' : [
    {
      'id': 'agreement',
      'type': 'checkbox',
      'name' : 'agreement',
      'label': 'Я принимаю условия соглашения',
    },
  ],
  'button' : [
    {
      text: 'Отправить',
      type: 'submit',
    },
    {
      text: 'Сбросить',
      type: 'reset',
    }
  ]
}

const dataJSON = JSON.stringify(data);




/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data.js */ "./source/js/data/data.js");
/* harmony import */ var _components_form_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form-view.js */ "./source/js/components/form-view.js");



const RENDER_CONTAINER = 'h1';
const AFTEREND = 'afterend';

const renderContainer = document.querySelector(RENDER_CONTAINER);

//Рендер компонента формы в контейнер
const formView = new _components_form_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](_data_data_js__WEBPACK_IMPORTED_MODULE_0__["dataJSON"]);
renderContainer.insertAdjacentHTML(AFTEREND, formView.getTemplate());
formView.init();


/***/ }),

/***/ "./source/js/render/render-elem.js":
/*!*****************************************!*\
  !*** ./source/js/render/render-elem.js ***!
  \*****************************************/
/*! exports provided: getMarkupCheck, getMarkupInput, getMarkupUploadFile, getMarkupSelect, getMarkupTextarea, getMarkupButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupCheck", function() { return getMarkupCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupInput", function() { return getMarkupInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupUploadFile", function() { return getMarkupUploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupSelect", function() { return getMarkupSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupTextarea", function() { return getMarkupTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupButton", function() { return getMarkupButton; });
//рендерит разметку чекбоксов в форму
const getMarkupCheck = (checkbox) => {

  if (checkbox.length === 0) {
    return '';
  };

  return checkbox.map((item) => {
    return (
      `<div class='form__checkbox'>
        <input class='form__checkbox-input' type='${item.type}' name='${item.name}' id='${item.id}' value='${item.id}' required>
        <label class='form__checkbox-pseudo' for='${item.id}' name='${item.name}'></label>
        <label class='form__checkbox-text' name='${item.name}' for='${item.id}'>${item.label}</label>
      </div>`
      );
    }).join(' ');
};

//рендерит разметку инпутов в форму
const getMarkupInput = (personalData) => {

  if (personalData.length === 0) {
    return '';
  };

  return personalData.map((item) => {
    return (
      `<div>
        <label for='${item.id}'>${item.label}</label>
        <input class='form__input' type='${item.type}' id='${item.id}' placeholder='${item.placeholder}' required>
      </div>
      `);
  }).join(' ');
};

//рендерит разметку поля для загрузки в форму
const getMarkupUploadFile = (MarkupUploadFile) => {

  if (MarkupUploadFile.length === 0) {
    return '';
  };

  return MarkupUploadFile.map((item) => {
    return (
      `<div>
        <label for='${item.id}'>${item.label}</label>
        <input class='form__upload-field' type='${item.type}' id='${item.id}' placeholder='${item.placeholder}' accept='${item.accept}'>
      </div>
      `);
  }).join(' ');
};

//рендерит разметку textarea в форму
const getMarkupTextarea = (textPlace) => {
  if (textPlace.length === 0) {
    return '';
  };

  return textPlace.map((item) => {
    return `<textarea class='form__textarea' placeholder='${item.placeholder}'></textarea>`;
  }).join(' ');
};

//рендерит разметку кнопок в форму
const getMarkupButton = (button) => {
  if (button.length === 0) {
    return '';
  };

  return button.map((item) => {
    return `<button class='form__button form__${item.type}' type='${item.type}'>${item.text}</button>`;
  }).join(' ');
};

//рендерит разметку селектов в форму
const getMarkupSelect = (statistics) => {
  if (statistics.length === 0) {
    return '';
  };

  return statistics.map((item) => {
    return (
    `<div>
      <label for='${item.id}'>${item.label}</label>
      <select class='form__select' id='${item.id}' name='${item.id}' required>
      <option selected disabled value=''>Выберите из списка...</option>
        ${item.values.map((value) => { return `<option value='${value}'>${value}</option>` }).join('\n')}
      </select>
    </div>
    `);
  }).join(' ');
};




/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map