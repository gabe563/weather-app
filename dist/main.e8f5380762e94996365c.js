/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/place.svg */ "./src/assets/place.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/delete.svg */ "./src/assets/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Varela+Round&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.side-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 760px;\n  filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));\n}\n\n.main-temp {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  font-family: \"Inter\", sans-serif;\n  color: white;\n  margin-right: 10px;\n}\n\n.temp-info1 {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.temp-info1 .weather-state {\n  font-weight: 600;\n  font-size: 24px;\n}\n.temp-info1 .weather-place {\n  font-size: 34px;\n  font-weight: 400;\n}\n\n.temp-info2 {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n.temp-info2 .tempVal {\n  font-size: 98px;\n  font-family: \"Varela Round\", sans-serif;\n}\n.temp-info2 .tempVal p {\n  display: flex;\n}\n.temp-info2 .tempVal span {\n  font-size: 24px;\n}\n.temp-info2 .line {\n  border: 1px solid white;\n  height: 64px;\n  border-radius: 15px;\n}\n.temp-info2 .weather-conditions {\n  margin-left: 5px;\n  font-size: 18px;\n  font-weight: 200;\n}\n.temp-info2 .weather-conditions p:first-child {\n  display: flex;\n}\n.temp-info2 .weather-conditions .scale {\n  font-size: 12px;\n}\n\n.other-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: calc(100% - 760px);\n}\n.other-content .place {\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  top: 55px;\n  margin-left: 20px;\n  width: 16px;\n  height: 20px;\n  background-repeat: no-repeat;\n}\n.other-content #search {\n  padding: 16px;\n  padding-left: 65px;\n  border: 1px solid #dfe1e5;\n  border-radius: 15px;\n  width: 220px;\n  margin-top: 40px;\n  margin-right: 50px;\n  align-self: flex-start;\n}\n.other-content #search::-webkit-search-cancel-button {\n  position: relative;\n  -webkit-appearance: none;\n  top: 2px;\n  left: 4px;\n  height: 25px;\n  width: 25px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n}\n.other-content #search:focus {\n  color: #383838;\n}\n.other-content #search:focus, .other-content #search:hover {\n  border: 1px solid white;\n  outline: none;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.change-measure {\n  background-color: rgba(255, 255, 255, 0.1);\n  margin-left: 30rem;\n  margin-bottom: 10px;\n  padding: 18px;\n  padding-bottom: 20px;\n  padding-right: 20px;\n  border: 2px solid white;\n  border-radius: 100%;\n  cursor: pointer;\n}\n.change-measure .scale {\n  width: 24px;\n  height: 22px;\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 20px;\n  color: white;\n}\n\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button {\n  margin-left: 28rem;\n  margin-bottom: 10px;\n  font-family: \"Varela Round\", sans-serif;\n  position: relative;\n  width: 74px;\n  height: 42px;\n}\n\n.button,\n.button .layer {\n  border-radius: 100px;\n}\n\n.button.b2 {\n  border-radius: 2px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n\n#button-1 .knobs:before {\n  content: \"°F\";\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #000;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 12px 7px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n#button-1 .checkbox:checked + .knobs:before {\n  color: #000;\n  content: \"°C\";\n  left: 36px;\n  background-color: #fff;\n}\n\n#button-1 .checkbox:checked ~ .layer {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n#button-1 .knobs,\n#button-1 .knobs:before,\n#button-1 .layer {\n  transition: 0.3s ease all;\n}\n\n.forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  width: 502px;\n  height: 360px;\n  background-color: #fff;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  margin-top: 20%;\n}\n\n.week {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  gap: 35px;\n}\n.week .col1,\n.week .col2 {\n  display: flex;\n  justify-content: space-evenly;\n}\n.week .day {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 64px;\n  height: 88px;\n  padding: 10px;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 200;\n}\n\n.loading-screen {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.loading-screen .spinner {\n  z-index: 4;\n}\n.loading-screen .spinner .dot {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin: 3px;\n  background-color: #ffffff;\n}\n.loading-screen .spinner .dot:nth-last-child(1) {\n  animation: jumpingAnimation 0.7s 0.2s ease-in infinite;\n}\n.loading-screen .spinner .dot:nth-last-child(2) {\n  animation: jumpingAnimation 0.7s 0.3s ease-in infinite;\n}\n.loading-screen .spinner .dot:nth-last-child(3) {\n  animation: jumpingAnimation 0.7s 0.4s ease-in infinite;\n}\n\n@keyframes jumpingAnimation {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 15px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Varela+Round&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.side-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  height: 100vh;\n  width: 760px;\n  filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));\n}\n\n.main-temp {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  font-family: 'Inter', sans-serif;\n  color: white;\n  margin-right: 10px;\n}\n\n.temp-info1 {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  .weather-state {\n    font-weight: 600;\n    font-size: 24px;\n  }\n\n  .weather-place {\n    font-size: 34px;\n    font-weight: 400;\n  }\n}\n\n.temp-info2 {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n\n  .tempVal {\n    font-size: 98px;\n    font-family: 'Varela Round', sans-serif;\n\n    p {\n      display: flex;\n    }\n\n    span {\n      font-size: 24px;\n    }\n  }\n\n  .line {\n    border: 1px solid #ffff;\n    height: 64px;\n    border-radius: 15px;\n  }\n\n  .weather-conditions {\n    margin-left: 5px;\n    font-size: 18px;\n    font-weight: 200;\n\n    p:first-child {\n      display: flex;\n    }\n\n    .scale {\n      font-size: 12px;\n    }\n  }\n}\n\n.other-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: calc(100% - 760px);\n\n  .place {\n    position: absolute;\n    background-image: url(../assets/place.svg);\n    top: 55px;\n    margin-left: 20px;\n    width: 16px;\n    height: 20px;\n    background-repeat: no-repeat;\n  }\n\n  #search {\n    padding: 16px;\n    padding-left: 65px;\n    border: 1px solid #dfe1e5;\n    border-radius: 15px;\n    width: 220px;\n    margin-top: 40px;\n    margin-right: 50px;\n    align-self: flex-start;\n\n    &::-webkit-search-cancel-button {\n      position: relative;\n      -webkit-appearance: none;\n      top: 2px;\n      left: 4px;\n      height: 25px;\n      width: 25px;\n      background-image: url(../assets/delete.svg);\n      background-repeat: no-repeat;\n    }\n\n    &:focus {\n      color: #383838;\n    }\n\n    &:focus,\n    &:hover {\n      border: 1px solid white;\n      outline: none;\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    }\n  }\n}\n\n.change-measure {\n  background-color: rgba($color: white, $alpha: 0.1);\n  margin-left: 30rem;\n  margin-bottom: 10px;\n  padding: 18px;\n  padding-bottom: 20px;\n  padding-right: 20px;\n  border: 2px solid #ffff;\n  border-radius: 100%;\n  cursor: pointer;\n\n  .scale {\n    width: 24px;\n    height: 22px;\n    font-family: 'Varela Round', sans-serif;\n    font-size: 20px;\n    color: #ffff;\n  }\n}\n\n.knobs,\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.button {\n  margin-left: 28rem;\n  margin-bottom: 10px;\n  font-family: 'Varela Round', sans-serif;\n  position: relative;\n  width: 74px;\n  height: 42px;\n}\n\n.button,\n.button .layer {\n  border-radius: 100px;\n}\n\n.button.b2 {\n  border-radius: 2px;\n}\n\n.checkbox {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 3;\n}\n\n.knobs {\n  z-index: 2;\n}\n\n.layer {\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n  transition: 0.3s ease all;\n  z-index: 1;\n}\n\n#button-1 .knobs:before {\n  content: '°F';\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: 20px;\n  height: 10px;\n  color: #000;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n  padding: 12px 7px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;\n}\n\n#button-1 .checkbox:checked + .knobs:before {\n  color: #000;\n  content: '°C';\n  left: 36px;\n  background-color: #fff;\n}\n\n#button-1 .checkbox:checked ~ .layer {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n#button-1 .knobs,\n#button-1 .knobs:before,\n#button-1 .layer {\n  transition: 0.3s ease all;\n}\n\n.forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  width: 502px;\n  height: 360px;\n  background-color: #fff;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  margin-top: 20%;\n}\n\n.week {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  gap: 35px;\n\n  .col1,\n  .col2 {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .day {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    width: 64px;\n    height: 88px;\n    padding: 10px;\n    font-family: 'Inter', sans-serif;\n    font-weight: 200;\n  }\n}\n\n.loading-screen {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 3;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba($color: #000000, $alpha: 0.5);\n\n  .spinner {\n    z-index: 4;\n    .dot {\n      display: inline-block;\n      width: 25px;\n      height: 25px;\n      border-radius: 50%;\n      margin: 3px;\n      background-color: #ffffff;\n    }\n    .dot:nth-last-child(1) {\n      animation: jumpingAnimation 0.7s 0.2s ease-in infinite;\n    }\n    .dot:nth-last-child(2) {\n      animation: jumpingAnimation 0.7s 0.3s ease-in infinite;\n    }\n    .dot:nth-last-child(3) {\n      animation: jumpingAnimation 0.7s 0.4s ease-in infinite;\n    }\n  }\n}\n\n@keyframes jumpingAnimation {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  50% {\n    transform: translate3d(0, 15px, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/weatherImages/clear.png":
/*!********************************************!*\
  !*** ./src/assets/weatherImages/clear.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/clear.98ec2bf2859862bc32155ea880f12b66.png");

/***/ }),

/***/ "./src/assets/weatherImages/mist.png":
/*!*******************************************!*\
  !*** ./src/assets/weatherImages/mist.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/mist.b5620c8f22c2ce9d5ece58f17ed26202.png");

/***/ }),

/***/ "./src/assets/weatherImages/overcast.png":
/*!***********************************************!*\
  !*** ./src/assets/weatherImages/overcast.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/overcast.0aa5e8dd9052f9e89eae32e1f4991348.png");

/***/ }),

/***/ "./src/assets/weatherImages/rain.png":
/*!*******************************************!*\
  !*** ./src/assets/weatherImages/rain.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rain.13b78840829676b2d51ed7f17cf08611.png");

/***/ }),

/***/ "./src/assets/weatherImages/scattered.png":
/*!************************************************!*\
  !*** ./src/assets/weatherImages/scattered.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/scattered.07008ff85e513394d500ceea98165b1f.png");

/***/ }),

/***/ "./src/assets/weatherImages/snow.png":
/*!*******************************************!*\
  !*** ./src/assets/weatherImages/snow.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/snow.20c807a2ee47307a4be6ecd2ff26f79b.png");

/***/ }),

/***/ "./src/assets/weatherImages/thunder.png":
/*!**********************************************!*\
  !*** ./src/assets/weatherImages/thunder.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/thunder.e7e0c101fc35cdc206ddb97f9c66d783.png");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/weatherImages sync \\.(png%7Cjpe?g%7Csvg)$":
/*!****************************************************************************!*\
  !*** ./src/assets/weatherImages/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear.png": "./src/assets/weatherImages/clear.png",
	"./mist.png": "./src/assets/weatherImages/mist.png",
	"./overcast.png": "./src/assets/weatherImages/overcast.png",
	"./rain.png": "./src/assets/weatherImages/rain.png",
	"./scattered.png": "./src/assets/weatherImages/scattered.png",
	"./snow.png": "./src/assets/weatherImages/snow.png",
	"./thunder.png": "./src/assets/weatherImages/thunder.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/weatherImages sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentWeather),
/* harmony export */   "weatherValues": () => (/* binding */ weatherValues)
/* harmony export */ });
/* harmony import */ var _displayCurrent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCurrent */ "./src/displayCurrent.js");
/* harmony import */ var _weatherForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherForecast */ "./src/weatherForecast.js");



const weatherValues = {
  city: 'brandon',
  units: 'imperial',
};

function getUserInput() {
  const input = document.getElementById('search');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        alert('You cannot leave the input blank');
      } else {
        currentWeather(e.target.value);
        e.target.value = '';
      }
    }
  });
}
getUserInput();

function changeCurrentMeasure() {
  const measureBtn = document.getElementById('button-1');
  measureBtn.addEventListener('click', () => {
    switch (weatherValues.units) {
      case 'imperial':
        weatherValues.units = 'metric';
        currentWeather();
        break;
      case 'metric':
        weatherValues.units = 'imperial';
        currentWeather();
        break;
    }
  });
}
changeCurrentMeasure();

let returnedData = {};

async function currentWeather(input) {
  try {
    let loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.display = 'flex';
    if (input !== undefined) {
      weatherValues.city = input;
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherValues['city']}&appid=ed602ac25926269056d7f4cc09ebb22e&units=${weatherValues['units']}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    if (weatherData.sys.country === undefined) {
      weatherData.sys.country = '';
    }
    returnedData = {
      name: weatherData.name,
      coords: { lon: weatherData.coord.lon, lat: weatherData.coord.lat },
      country: weatherData.sys.country,
      temperature: weatherData.main.temp,
      weatherState: {
        feelsLike: weatherData.main.feels_like,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      weather: [
        weatherData.weather[0].main,
        weatherData.weather[0].description,
        weatherData.weather[0].icon,
      ],
    };
    (0,_displayCurrent__WEBPACK_IMPORTED_MODULE_0__.changeWeatherValues)(returnedData, weatherValues.units);
    (0,_weatherForecast__WEBPACK_IMPORTED_MODULE_1__["default"])(returnedData.coords, loadingScreen);
  } catch (e) {
    alert('City not found');
  }
}


/***/ }),

/***/ "./src/displayCurrent.js":
/*!*******************************!*\
  !*** ./src/displayCurrent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeWeatherValues": () => (/* binding */ changeWeatherValues)
/* harmony export */ });
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  __webpack_require__("./src/assets/weatherImages sync \\.(png%7Cjpe?g%7Csvg)$")
);

function getImage(name) {
  return images[`${name}.png`].default;
}

function changeWeatherValues(obj, units) {
  let currentTempMeasure = '';
  let currentWindMeasure = '';
  function changeCurrentMeasureDisp() {
    if (units === 'imperial') {
      currentTempMeasure = '°F';
      currentWindMeasure = 'MPH';
    } else if (units === 'metric') {
      currentTempMeasure = '°C';
      currentWindMeasure = 'KM/H';
    }
  }
  changeCurrentMeasureDisp();

  const weatherState = document.querySelector('.weather-state p');
  const weatherPlace = document.querySelector('.weather-place p');
  const actualTemp = document.querySelector('.tempVal p');

  const weatherConditions = document.querySelector('.weather-conditions');

  let capitalizeWeather =
    obj.weather[1].charAt(0).toUpperCase() + obj.weather[1].slice(1);

  weatherState.textContent = capitalizeWeather;

  weatherPlace.textContent = `${obj.name}, ${obj.country}`;

  actualTemp.innerHTML = `${Math.round(
    obj.temperature
  )}<span class="scale">${currentTempMeasure}</span>`;

  weatherConditions.children[0].innerHTML = `FEELS LIKE: ${Math.round(
    obj.weatherState.feelsLike
  )}<span class="scale">${currentTempMeasure}</span>`;

  weatherConditions.children[1].innerHTML = `WIND: ${Math.round(
    obj.weatherState.wind
  )} ${currentWindMeasure}`;

  weatherConditions.children[2].innerHTML = `HUMIDITY: ${obj.weatherState.humidity}%`;

  switchImage(obj.weather[0], capitalizeWeather);
}

function switchImage(main, desc) {
  const image = document.querySelector('.side-page');
  function setImage(name) {
    return (image.style.backgroundImage = `url(${getImage(name)})`);
  }
  switch (main) {
    case 'Clear':
      setImage('clear');
      break;
    case 'Thunderstorm':
      setImage('thunder');
      break;
    case 'Mist':
    case 'Haze':
    case 'Dust':
    case 'Fog':
      setImage('mist');
      break;
    case 'Snow':
      setImage('snow');
      break;
    case 'Clouds':
      switch (desc) {
        case 'Few clouds':
        case 'Scattered clouds':
          setImage('scattered');
          break;
        case 'Broken clouds':
        case 'Overcast clouds':
          setImage('overcast');
          break;
      }
      break;
    case 'Rain':
    case 'Drizzle':
      setImage('rain');
      break;
  }
}


/***/ }),

/***/ "./src/displayForecast.js":
/*!********************************!*\
  !*** ./src/displayForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeForecastValues": () => (/* binding */ changeForecastValues)
/* harmony export */ });
function changeForecastValues(temp) {
  let week = [];
  function nameWeek() {
    let date = new Date().getDay();
    switch (date) {
      case 0:
        week = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        return week;
      case 1:
        week = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ];
        return week;
      case 2:
        week = [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
        ];
        return week;
      case 3:
        week = [
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
        ];
        return week;
      case 4:
        week = [
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
        ];
        return week;
      case 5:
        week = [
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ];
        return week;
      case 6:
        week = [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ];
        return week;
    }
  }
  nameWeek();
  const days = document.querySelectorAll('.week .day');
  days.forEach((day, i) => {
    day.querySelector('.name p').textContent = week[i];
    day.querySelector('.temp p').textContent = `${Math.round(
      temp[i].temp.day
    )} / ${Math.round(temp[i].temp.night)}`;
    function changeIcon() {
      switch (temp[i].weather[0].main) {
        case 'Clouds':
          switch (temp[i].weather[0].icon) {
            case '02d':
              return 'https://assets5.lottiefiles.com/temp/lf20_dgjK9i.json';
            case '02n':
              return 'https://assets5.lottiefiles.com/temp/lf20_Jj2Qzq.json';
            default:
              return 'https://assets5.lottiefiles.com/temp/lf20_VAmWRg.json';
          }
        case 'Rain':
          switch (temp[i].weather[0].icon) {
            case '10d':
            case '09d':
              return 'https://assets2.lottiefiles.com/temp/lf20_rpC1Rd.json';
            case '10n':
            case '09n':
              return 'https://assets9.lottiefiles.com/temp/lf20_I5XMi9.json';
            case '13d':
              return 'https://assets8.lottiefiles.com/temp/lf20_BSVgyt.json';
            case '13n':
              return 'https://assets8.lottiefiles.com/temp/lf20_RHbbn6.json';
          }
        case 'Clear':
          switch (temp[i].weather[0].icon) {
            case '01d':
              return 'https://assets10.lottiefiles.com/temp/lf20_Stdaec.json';
            case '01n':
              return 'https://assets6.lottiefiles.com/temp/lf20_y6mY2A.json';
          }
        case 'Thunderstorm':
          switch (temp[i].weather[0].id) {
            case 200:
            case 201:
            case 202:
              return 'https://assets9.lottiefiles.com/temp/lf20_XkF78Y.json';
            default:
              return 'https://assets8.lottiefiles.com/temp/lf20_Kuot2e.json ';
          }
        case 'Snow':
          return 'https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json';
        case 'Mist':
          return 'https://assets6.lottiefiles.com/temp/lf20_kOfPKE.json';
      }
    }
    day.querySelector('.anim lottie-player').load(changeIcon());
  });
}


/***/ }),

/***/ "./src/weatherForecast.js":
/*!********************************!*\
  !*** ./src/weatherForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherForecast)
/* harmony export */ });
/* harmony import */ var _displayForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayForecast */ "./src/displayForecast.js");
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentWeather */ "./src/currentWeather.js");



async function weatherForecast(obj, loadingScreen) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=current,hourly,minutely&units=${_currentWeather__WEBPACK_IMPORTED_MODULE_1__.weatherValues.units}&appid=0ad713fac120b83bd907261fb7742fd7`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    (0,_displayForecast__WEBPACK_IMPORTED_MODULE_0__.changeForecastValues)(weatherData.daily);
    loadingScreen.style.display = 'none';
  } catch (e) {
    console.log(e);
  }
}


/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dc41111a1e6076f79cee.svg";

/***/ }),

/***/ "./src/assets/place.svg":
/*!******************************!*\
  !*** ./src/assets/place.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "974c012842b9230177d4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentWeather */ "./src/currentWeather.js");
/* harmony import */ var _weatherForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherForecast */ "./src/weatherForecast.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




(0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.e8f5380762e94996365c.js.map