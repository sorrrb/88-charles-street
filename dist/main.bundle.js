"use strict";
(self["webpackChunk_88_charles_street"] = self["webpackChunk_88_charles_street"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Ephesis.ttf */ "./src/assets/fonts/Ephesis.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Quando.ttf */ "./src/assets/fonts/Quando.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/media/wine-rack.jpeg */ "./src/assets/media/wine-rack.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sanchez&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background-white: #f1f5f9;
  --background-black: #09090b;
  --text-white: #cbd5e1;
  --text-black: #27272a;
  --main-accent: #d2aa4a;
  --active-accent: #faf7e2;
  --bright-accent: #f7e988;
  --dull-accent: #ac8220;
}

@font-face {
  font-family: 'Ephesis';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'Quando';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#page-nav, .logo, .page-links, .social-links, #media-container, #info-container {
  display: flex;
}

#page-nav {
  gap: 36px;
  justify-content: center;
  align-items: center;
  background-color: var(--background-black);
}

.logo {
  gap: 8px;
  align-items: center;
  background: -webkit-linear-gradient(var(--main-accent), var(--bright-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Ephesis';
}

.logo-maintext {
  margin-top: 8px;
  font-size: 2.5rem;
}

.logo-subtext {
  text-align: center;
}

.logo-subtext > h1 {
  font-size: 1rem;
  font-weight: 500;
}

.logo-subtext > h2 {
  font-size: 0.5rem;
  font-weight: 600;
  font-family: 'Quando', 'Times New Roman', serif;
  letter-spacing: 1px;
}

.page-links {
  margin-inline: 16px;
  gap: 24px;
  font-family: 'Quando';
  font-weight: 600
}

.page-links li {
  cursor: pointer;
  list-style: none;
}

.page-links a {
  background: -webkit-linear-gradient(var(--bright-accent), var(--main-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-links a:hover {
  text-decoration: underline;
  color: var(--active-accent);
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
}

.page-links a.active-link {
  text-decoration: underline;
  color: var(--active-accent);
  background: none;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
}

.social-links {
  gap: 8px;
}

.social-links > img {
  cursor: pointer;
}

#hero-container {
  height: 400px;
  display: grid;
  place-items: center;
}

.hero-background {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(4px);
}

#hero-container > h1 {
  color: white;
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 3rem;
}

#hero-container > h1 span {
  font-size: 0.675rem;
}

#media-container {
  gap: 12px;
  padding-inline: 15%;
  height: 600px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-black);
}

.media-card {
  background-color: var(--background-white);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, lightgray, gray) 1;
  color: var(--background-black);
  font-family: 'Sanchez', Times, serif;
  letter-spacing: 1px;
  text-align: center;
}

.media-card:hover {
  box-shadow: 0 8px 16px 0 rgba(255,255,255,0.4);
}

.media-card img {
  height: 300px;
  width: 300px;
}

.media-text {
  padding: 8px 0 16px 0;
  font-size: 2rem;
}

#info-container {
  height: 600px;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(var(--main-accent), var(--dull-accent));
}

#info-text {
  font-family: 'Quando';
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

#info-text > h1 {
  font-size: 2rem;
  text-decoration: underline;
}

#page-foot {
  height: 50px;
  display: grid;
  place-items: center;
  background-color: var(--background-black);
  color: var(--text-white);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,wBAAwB;EACxB,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4CAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,QAAQ;EACR,mBAAmB;EACnB,6EAA6E;EAC7E,6BAA6B;EAC7B,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,+CAA+C;EAC/C,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,qBAAqB;EACrB;AACF;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6EAA6E;EAC7E,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,yDAAoD;EACpD,sBAAsB;EACtB,2BAA2B;EAC3B,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,mBAAmB;EACnB,0DAA0D;EAC1D,8BAA8B;EAC9B,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mEAAmE;AACrE;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,wBAAwB;AAC1B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-white: #f1f5f9;\n  --background-black: #09090b;\n  --text-white: #cbd5e1;\n  --text-black: #27272a;\n  --main-accent: #d2aa4a;\n  --active-accent: #faf7e2;\n  --bright-accent: #f7e988;\n  --dull-accent: #ac8220;\n}\n\n@font-face {\n  font-family: 'Ephesis';\n  src: url('./assets/fonts/Ephesis.ttf');\n}\n\n@font-face {\n  font-family: 'Quando';\n  src: url('./assets/fonts/Quando.ttf');\n}\n\n#page-nav, .logo, .page-links, .social-links, #media-container, #info-container {\n  display: flex;\n}\n\n#page-nav {\n  gap: 36px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background-black);\n}\n\n.logo {\n  gap: 8px;\n  align-items: center;\n  background: -webkit-linear-gradient(var(--main-accent), var(--bright-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: 'Ephesis';\n}\n\n.logo-maintext {\n  margin-top: 8px;\n  font-size: 2.5rem;\n}\n\n.logo-subtext {\n  text-align: center;\n}\n\n.logo-subtext > h1 {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.logo-subtext > h2 {\n  font-size: 0.5rem;\n  font-weight: 600;\n  font-family: 'Quando', 'Times New Roman', serif;\n  letter-spacing: 1px;\n}\n\n.page-links {\n  margin-inline: 16px;\n  gap: 24px;\n  font-family: 'Quando';\n  font-weight: 600\n}\n\n.page-links li {\n  cursor: pointer;\n  list-style: none;\n}\n\n.page-links a {\n  background: -webkit-linear-gradient(var(--bright-accent), var(--main-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.page-links a:hover {\n  text-decoration: underline;\n  color: var(--active-accent);\n  background: none;\n  -webkit-background-clip: unset;\n  -webkit-text-fill-color: unset;\n}\n\n.page-links a.active-link {\n  text-decoration: underline;\n  color: var(--active-accent);\n  background: none;\n  -webkit-background-clip: unset;\n  -webkit-text-fill-color: unset;\n}\n\n.social-links {\n  gap: 8px;\n}\n\n.social-links > img {\n  cursor: pointer;\n}\n\n#hero-container {\n  height: 400px;\n  display: grid;\n  place-items: center;\n}\n\n.hero-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: url(./assets/media/wine-rack.jpeg);\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n  filter: blur(4px);\n}\n\n#hero-container > h1 {\n  color: white;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  font-size: 3rem;\n}\n\n#hero-container > h1 span {\n  font-size: 0.675rem;\n}\n\n#media-container {\n  gap: 12px;\n  padding-inline: 15%;\n  height: 600px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-black);\n}\n\n.media-card {\n  background-color: var(--background-white);\n  border-width: 1px;\n  border-style: solid;\n  border-image: linear-gradient(to right, lightgray, gray) 1;\n  color: var(--background-black);\n  font-family: 'Sanchez', Times, serif;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.media-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(255,255,255,0.4);\n}\n\n.media-card img {\n  height: 300px;\n  width: 300px;\n}\n\n.media-text {\n  padding: 8px 0 16px 0;\n  font-size: 2rem;\n}\n\n#info-container {\n  height: 600px;\n  justify-content: space-evenly;\n  align-items: center;\n  background: linear-gradient(var(--main-accent), var(--dull-accent));\n}\n\n#info-text {\n  font-family: 'Quando';\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 36px;\n}\n\n#info-text > h1 {\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\n#page-foot {\n  height: 50px;\n  display: grid;\n  place-items: center;\n  background-color: var(--background-black);\n  color: var(--text-white);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ "./src/modules/load.js");



(function init() {
  (0,_modules_load__WEBPACK_IMPORTED_MODULE_1__.loadPage)();
})();

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadPage: () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _assets_media_instagram_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/media/instagram.svg */ "./src/assets/media/instagram.svg");
/* harmony import */ var _assets_media_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/media/facebook.svg */ "./src/assets/media/facebook.svg");
/* harmony import */ var _assets_media_food_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/media/food-1.jpg */ "./src/assets/media/food-1.jpg");
/* harmony import */ var _assets_media_cocktail_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/media/cocktail-1.jpg */ "./src/assets/media/cocktail-1.jpg");
/* harmony import */ var _assets_media_dining_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/media/dining-2.jpg */ "./src/assets/media/dining-2.jpg");






function createLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');

  const logoMainText = document.createElement('h1');
  logoMainText.textContent = '88';
  logoMainText.classList.add('logo-maintext');

  const logoSubText = document.createElement('div');
  logoSubText.classList.add('logo-subtext');

  const logoHeadText = document.createElement('h1');
  logoHeadText.textContent = 'Charles Street';

  const logoFootText = document.createElement('h2');
  logoFootText.textContent = 'RESTAURANT';

  logoSubText.appendChild(logoHeadText);
  logoSubText.appendChild(logoFootText);

  logoContainer.appendChild(logoMainText);
  logoContainer.appendChild(logoSubText);

  return logoContainer;
}

function generateSiteLinks() {
  const links = ['Home', 'About', 'Menus', 'Special Events', 'Gift Cards', 'Contact']

  const linkList = document.createElement('ul');
  linkList.classList.add('page-links');
  
  links.forEach((link) => {
    const linkItem = document.createElement('li');
    const linkTag = document.createElement('a');
    linkTag.textContent = link;

    linkItem.appendChild(linkTag);
    linkList.appendChild(linkItem);
  });

  return linkList;
}

function generateSocialLinks() {
  const linkList = document.createElement('div');
  linkList.classList.add('social-links');

  const instagramIcon = new Image();
  instagramIcon.src = _assets_media_instagram_svg__WEBPACK_IMPORTED_MODULE_0__;

  const facebookIcon = new Image();
  facebookIcon.src = _assets_media_facebook_svg__WEBPACK_IMPORTED_MODULE_1__;

  linkList.appendChild(instagramIcon);
  linkList.appendChild(facebookIcon);

  return linkList;
}

function generateNav() {
  const nav = document.createElement('nav');
  nav.id = 'page-nav';

  const logo = createLogo();
  const siteLinks = generateSiteLinks();
  const socialLinks = generateSocialLinks();

  nav.appendChild(logo);
  nav.appendChild(siteLinks);
  nav.appendChild(socialLinks);

  return nav;
}

function generateHero() {
  const heroSection = document.createElement('section');
  heroSection.id = 'hero-container';

  const heroImage = document.createElement('div');
  heroImage.classList.add('hero-background');

  const heroImageCaption = document.createElement('h1');
  heroImageCaption.innerHTML = 'Modern <span>&#9899;</span> Elegant <span>&#9899;</span> Inviting';

  heroSection.appendChild(heroImage);
  heroSection.appendChild(heroImageCaption);

  return heroSection;
}

function generateMediaCard(imgSrc,subtext) {
  const card = document.createElement('div');
  card.classList.add('media-card');

  const image = new Image();
  image.src = imgSrc;

  const textContainer = document.createElement('div');
  textContainer.classList.add('media-text');

  const text = document.createElement('h4');
  text.textContent = subtext;

  textContainer.appendChild(text);

  card.appendChild(image);
  card.appendChild(textContainer);
  
  return card;
}

function generateMedia() {
  const mediaSection = document.createElement('section');
  mediaSection.id = 'media-container';

  const atmosphereCard = generateMediaCard(_assets_media_dining_2_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Ambiance');
  const foodCard = generateMediaCard(_assets_media_food_1_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Cuisine');
  const cocktailCard = generateMediaCard(_assets_media_cocktail_1_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Cocktails');

  mediaSection.appendChild(atmosphereCard);
  mediaSection.appendChild(foodCard);
  mediaSection.appendChild(cocktailCard);

  return mediaSection;
}

function generateInfo() {
  const infoSection = document.createElement('section');
  infoSection.id = 'info-container';

  const iframe = document.createElement('iframe');
  iframe.id = 'location-iframe';
  iframe.title = '88 Charles St, Montgomery, NY 12549';
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.9680971088396!2d-74.2383602!3d41.52663169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcd5e889b491b5%3A0xe838c1e5049edf0f!2s88%20Charles%20St%2C%20Montgomery%2C%20NY%2012549!5e0!3m2!1sen!2sus!4v1707002292848!5m2!1sen!2sus';
  iframe.height = 400;
  iframe.width = 400;
  iframe.allowFullscreen = '';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';

  const textContainer = document.createElement('div');
  textContainer.id = 'info-text';

  const mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Visit Us';

  const locationWrapper = document.createElement('div');
  const locationHeading = document.createElement('h2');
  locationHeading.textContent = 'Location:';
  
  const locationText = document.createElement('p');
  locationText.textContent = '88 Charles Street, Montgomery, NY 12549';

  const hoursWrapper = document.createElement('div');
  const hoursHeading = document.createElement('h2');
  hoursHeading.textContent = 'Hours:';

  const hoursText = document.createElement('p');
  hoursText.innerHTML = '12:00p - 3:00p / 4:00p - 9:00p<br>Monday, Wednesday, Thursday<br><br>12:00p - 3:00p / 4:00p - 9:00p<br>Friday<br><br>4:00p - 10:00p<br>Saturday<br><br>4:00p - 9:00p<br>Sunday';

  hoursWrapper.appendChild(hoursHeading);
  hoursWrapper.appendChild(hoursText);

  locationWrapper.appendChild(locationHeading);
  locationWrapper.appendChild(locationText);

  textContainer.appendChild(mainHeading);
  textContainer.appendChild(locationWrapper);
  textContainer.appendChild(hoursWrapper);

  infoSection.appendChild(iframe);
  infoSection.appendChild(textContainer);

  return infoSection;
}

function generateFooter() {
  const footerSection = document.createElement('footer');
  footerSection.id = 'page-foot';

  const footerText = document.createElement('p');
  footerText.innerHTML = '[2024] 88 Charles St. &#169; All Rights Reserved';

  footerSection.appendChild(footerText);

  return footerSection;
}

function generatePage() {
  const header = generateNav();
  const hero = generateHero();
  const media = generateMedia();
  const info = generateInfo();
  const footer = generateFooter();

  document.body.appendChild(header);
  document.body.appendChild(hero);
  document.body.appendChild(media);
  document.body.appendChild(info);
  document.body.appendChild(footer);
}

function loadPage() {

  generatePage();
  console.log('TESTING');
}

/***/ }),

/***/ "./src/assets/fonts/Ephesis.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/Ephesis.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d76794a944a1f234087.ttf";

/***/ }),

/***/ "./src/assets/fonts/Quando.ttf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Quando.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4031628b54a63f263311.ttf";

/***/ }),

/***/ "./src/assets/media/cocktail-1.jpg":
/*!*****************************************!*\
  !*** ./src/assets/media/cocktail-1.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cd988c9a537162b58b6.jpg";

/***/ }),

/***/ "./src/assets/media/dining-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/media/dining-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2106f80a116b0a8668e9.jpg";

/***/ }),

/***/ "./src/assets/media/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/media/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94b6dfc58e7e14d1a6e7.svg";

/***/ }),

/***/ "./src/assets/media/food-1.jpg":
/*!*************************************!*\
  !*** ./src/assets/media/food-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f32ae8f3ad50aab13106.jpg";

/***/ }),

/***/ "./src/assets/media/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/media/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b18908eee34dbcfed8ba.svg";

/***/ }),

/***/ "./src/assets/media/wine-rack.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/media/wine-rack.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b587be9622dbc9701333.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsK0hBQTRDO0FBQ3hGLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSEFBcUg7QUFDckgseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZ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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDs7QUFFdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL3NyYy9tb2R1bGVzL2xvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0VwaGVzaXMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUXVhbmRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL21lZGlhL3dpbmUtcmFjay5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5jaGV6JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLWJhY2tncm91bmQtd2hpdGU6ICNmMWY1Zjk7XG4gIC0tYmFja2dyb3VuZC1ibGFjazogIzA5MDkwYjtcbiAgLS10ZXh0LXdoaXRlOiAjY2JkNWUxO1xuICAtLXRleHQtYmxhY2s6ICMyNzI3MmE7XG4gIC0tbWFpbi1hY2NlbnQ6ICNkMmFhNGE7XG4gIC0tYWN0aXZlLWFjY2VudDogI2ZhZjdlMjtcbiAgLS1icmlnaHQtYWNjZW50OiAjZjdlOTg4O1xuICAtLWR1bGwtYWNjZW50OiAjYWM4MjIwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFcGhlc2lzJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jcGFnZS1uYXYsIC5sb2dvLCAucGFnZS1saW5rcywgLnNvY2lhbC1saW5rcywgI21lZGlhLWNvbnRhaW5lciwgI2luZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3BhZ2UtbmF2IHtcbiAgZ2FwOiAzNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XG59XG5cbi5sb2dvIHtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHZhcigtLW1haW4tYWNjZW50KSwgdmFyKC0tYnJpZ2h0LWFjY2VudCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJ0VwaGVzaXMnO1xufVxuXG4ubG9nby1tYWludGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5sb2dvLXN1YnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLXN1YnRleHQgPiBoMSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvZ28tc3VidGV4dCA+IGgyIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnUXVhbmRvJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucGFnZS1saW5rcyB7XG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XG4gIGdhcDogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdRdWFuZG8nO1xuICBmb250LXdlaWdodDogNjAwXG59XG5cbi5wYWdlLWxpbmtzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucGFnZS1saW5rcyBhIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodmFyKC0tYnJpZ2h0LWFjY2VudCksIHZhcigtLW1haW4tYWNjZW50KSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYWdlLWxpbmtzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdW5zZXQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB1bnNldDtcbn1cblxuLnBhZ2UtbGlua3MgYS5hY3RpdmUtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB1bnNldDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xufVxuXG4uc29jaWFsLWxpbmtzIHtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zb2NpYWwtbGlua3MgPiBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNoZXJvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAtMTtcbiAgZmlsdGVyOiBibHVyKDRweCk7XG59XG5cbiNoZXJvLWNvbnRhaW5lciA+IGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuI2hlcm8tY29udGFpbmVyID4gaDEgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC42NzVyZW07XG59XG5cbiNtZWRpYS1jb250YWluZXIge1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmctaW5saW5lOiAxNSU7XG4gIGhlaWdodDogNjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XG59XG5cbi5tZWRpYS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13aGl0ZSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRncmF5LCBncmF5KSAxO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XG4gIGZvbnQtZmFtaWx5OiAnU2FuY2hleicsIFRpbWVzLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVkaWEtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG59XG5cbi5tZWRpYS1jYXJkIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1lZGlhLXRleHQge1xuICBwYWRkaW5nOiA4cHggMCAxNnB4IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI2luZm8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1tYWluLWFjY2VudCksIHZhcigtLWR1bGwtYWNjZW50KSk7XG59XG5cbiNpbmZvLXRleHQge1xuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzNnB4O1xufVxuXG4jaW5mby10ZXh0ID4gaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jcGFnZS1mb290IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQiw2RUFBNkU7RUFDN0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5jaGV6JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC13aGl0ZTogI2YxZjVmOTtcXG4gIC0tYmFja2dyb3VuZC1ibGFjazogIzA5MDkwYjtcXG4gIC0tdGV4dC13aGl0ZTogI2NiZDVlMTtcXG4gIC0tdGV4dC1ibGFjazogIzI3MjcyYTtcXG4gIC0tbWFpbi1hY2NlbnQ6ICNkMmFhNGE7XFxuICAtLWFjdGl2ZS1hY2NlbnQ6ICNmYWY3ZTI7XFxuICAtLWJyaWdodC1hY2NlbnQ6ICNmN2U5ODg7XFxuICAtLWR1bGwtYWNjZW50OiAjYWM4MjIwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRXBoZXNpcyc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXBoZXNpcy50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvUXVhbmRvLnR0ZicpO1xcbn1cXG5cXG4jcGFnZS1uYXYsIC5sb2dvLCAucGFnZS1saW5rcywgLnNvY2lhbC1saW5rcywgI21lZGlhLWNvbnRhaW5lciwgI2luZm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwYWdlLW5hdiB7XFxuICBnYXA6IDM2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodmFyKC0tbWFpbi1hY2NlbnQpLCB2YXIoLS1icmlnaHQtYWNjZW50KSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiAnRXBoZXNpcyc7XFxufVxcblxcbi5sb2dvLW1haW50ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ubG9nby1zdWJ0ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tc3VidGV4dCA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5sb2dvLXN1YnRleHQgPiBoMiB7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogJ1F1YW5kbycsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5wYWdlLWxpbmtzIHtcXG4gIG1hcmdpbi1pbmxpbmU6IDE2cHg7XFxuICBnYXA6IDI0cHg7XFxuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XFxuICBmb250LXdlaWdodDogNjAwXFxufVxcblxcbi5wYWdlLWxpbmtzIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wYWdlLWxpbmtzIGEge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodmFyKC0tYnJpZ2h0LWFjY2VudCksIHZhcigtLW1haW4tYWNjZW50KSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnBhZ2UtbGlua3MgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtYWNjZW50KTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdW5zZXQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdW5zZXQ7XFxufVxcblxcbi5wYWdlLWxpbmtzIGEuYWN0aXZlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWFjY2VudCk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHVuc2V0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc29jaWFsLWxpbmtzID4gaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlcm8tY29udGFpbmVyIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9tZWRpYS93aW5lLXJhY2suanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogLTE7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG59XFxuXFxuI2hlcm8tY29udGFpbmVyID4gaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNoZXJvLWNvbnRhaW5lciA+IGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAwLjY3NXJlbTtcXG59XFxuXFxuI21lZGlhLWNvbnRhaW5lciB7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nLWlubGluZTogMTUlO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrKTtcXG59XFxuXFxuLm1lZGlhLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13aGl0ZSk7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRncmF5LCBncmF5KSAxO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmxhY2spO1xcbiAgZm9udC1mYW1pbHk6ICdTYW5jaGV6JywgVGltZXMsIHNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lZGlhLWNhcmQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcXG59XFxuXFxuLm1lZGlhLWNhcmQgaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5tZWRpYS10ZXh0IHtcXG4gIHBhZGRpbmc6IDhweCAwIDE2cHggMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2luZm8tY29udGFpbmVyIHtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tbWFpbi1hY2NlbnQpLCB2YXIoLS1kdWxsLWFjY2VudCkpO1xcbn1cXG5cXG4jaW5mby10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiAnUXVhbmRvJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzNnB4O1xcbn1cXG5cXG4jaW5mby10ZXh0ID4gaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNwYWdlLWZvb3Qge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGxvYWRQYWdlIH0gZnJvbSAnLi9tb2R1bGVzL2xvYWQnO1xuXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgbG9hZFBhZ2UoKTtcbn0pKCk7IiwiaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnLi4vYXNzZXRzL21lZGlhL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuLi9hc3NldHMvbWVkaWEvZmFjZWJvb2suc3ZnJztcbmltcG9ydCBGb29kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL21lZGlhL2Zvb2QtMS5qcGcnO1xuaW1wb3J0IERyaW5rSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL21lZGlhL2NvY2t0YWlsLTEuanBnJztcbmltcG9ydCBBdG1vc3BoZXJlSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL21lZGlhL2RpbmluZy0yLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgY29uc3QgbG9nb01haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbG9nb01haW5UZXh0LnRleHRDb250ZW50ID0gJzg4JztcbiAgbG9nb01haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ2xvZ28tbWFpbnRleHQnKTtcblxuICBjb25zdCBsb2dvU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2dvU3ViVGV4dC5jbGFzc0xpc3QuYWRkKCdsb2dvLXN1YnRleHQnKTtcblxuICBjb25zdCBsb2dvSGVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsb2dvSGVhZFRleHQudGV4dENvbnRlbnQgPSAnQ2hhcmxlcyBTdHJlZXQnO1xuXG4gIGNvbnN0IGxvZ29Gb290VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvZ29Gb290VGV4dC50ZXh0Q29udGVudCA9ICdSRVNUQVVSQU5UJztcblxuICBsb2dvU3ViVGV4dC5hcHBlbmRDaGlsZChsb2dvSGVhZFRleHQpO1xuICBsb2dvU3ViVGV4dC5hcHBlbmRDaGlsZChsb2dvRm9vdFRleHQpO1xuXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb01haW5UZXh0KTtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvU3ViVGV4dCk7XG5cbiAgcmV0dXJuIGxvZ29Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2l0ZUxpbmtzKCkge1xuICBjb25zdCBsaW5rcyA9IFsnSG9tZScsICdBYm91dCcsICdNZW51cycsICdTcGVjaWFsIEV2ZW50cycsICdHaWZ0IENhcmRzJywgJ0NvbnRhY3QnXVxuXG4gIGNvbnN0IGxpbmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlua0xpc3QuY2xhc3NMaXN0LmFkZCgncGFnZS1saW5rcycpO1xuICBcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGxpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmtUYWcudGV4dENvbnRlbnQgPSBsaW5rO1xuXG4gICAgbGlua0l0ZW0uYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gICAgbGlua0xpc3QuYXBwZW5kQ2hpbGQobGlua0l0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gbGlua0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU29jaWFsTGlua3MoKSB7XG4gIGNvbnN0IGxpbmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmtMaXN0LmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC1saW5rcycpO1xuXG4gIGNvbnN0IGluc3RhZ3JhbUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaW5zdGFncmFtSWNvbi5zcmMgPSBJbnN0YWdyYW1JY29uO1xuXG4gIGNvbnN0IGZhY2Vib29rSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBmYWNlYm9va0ljb24uc3JjID0gRmFjZWJvb2tJY29uO1xuXG4gIGxpbmtMaXN0LmFwcGVuZENoaWxkKGluc3RhZ3JhbUljb24pO1xuICBsaW5rTGlzdC5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24pO1xuXG4gIHJldHVybiBsaW5rTGlzdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuaWQgPSAncGFnZS1uYXYnO1xuXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVMb2dvKCk7XG4gIGNvbnN0IHNpdGVMaW5rcyA9IGdlbmVyYXRlU2l0ZUxpbmtzKCk7XG4gIGNvbnN0IHNvY2lhbExpbmtzID0gZ2VuZXJhdGVTb2NpYWxMaW5rcygpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbmF2LmFwcGVuZENoaWxkKHNpdGVMaW5rcyk7XG4gIG5hdi5hcHBlbmRDaGlsZChzb2NpYWxMaW5rcyk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIZXJvKCkge1xuICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVyb1NlY3Rpb24uaWQgPSAnaGVyby1jb250YWluZXInO1xuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaGVyby1iYWNrZ3JvdW5kJyk7XG5cbiAgY29uc3QgaGVyb0ltYWdlQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlcm9JbWFnZUNhcHRpb24uaW5uZXJIVE1MID0gJ01vZGVybiA8c3Bhbj4mIzk4OTk7PC9zcGFuPiBFbGVnYW50IDxzcGFuPiYjOTg5OTs8L3NwYW4+IEludml0aW5nJztcblxuICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvSW1hZ2VDYXB0aW9uKTtcblxuICByZXR1cm4gaGVyb1NlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFDYXJkKGltZ1NyYyxzdWJ0ZXh0KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZWRpYS1jYXJkJyk7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gaW1nU3JjO1xuXG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWRpYS10ZXh0Jyk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSBzdWJ0ZXh0O1xuXG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gIFxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNZWRpYSgpIHtcbiAgY29uc3QgbWVkaWFTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBtZWRpYVNlY3Rpb24uaWQgPSAnbWVkaWEtY29udGFpbmVyJztcblxuICBjb25zdCBhdG1vc3BoZXJlQ2FyZCA9IGdlbmVyYXRlTWVkaWFDYXJkKEF0bW9zcGhlcmVJbWFnZSwgJ0FtYmlhbmNlJyk7XG4gIGNvbnN0IGZvb2RDYXJkID0gZ2VuZXJhdGVNZWRpYUNhcmQoRm9vZEltYWdlLCAnQ3Vpc2luZScpO1xuICBjb25zdCBjb2NrdGFpbENhcmQgPSBnZW5lcmF0ZU1lZGlhQ2FyZChEcmlua0ltYWdlLCAnQ29ja3RhaWxzJyk7XG5cbiAgbWVkaWFTZWN0aW9uLmFwcGVuZENoaWxkKGF0bW9zcGhlcmVDYXJkKTtcbiAgbWVkaWFTZWN0aW9uLmFwcGVuZENoaWxkKGZvb2RDYXJkKTtcbiAgbWVkaWFTZWN0aW9uLmFwcGVuZENoaWxkKGNvY2t0YWlsQ2FyZCk7XG5cbiAgcmV0dXJuIG1lZGlhU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbmZvKCkge1xuICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaW5mb1NlY3Rpb24uaWQgPSAnaW5mby1jb250YWluZXInO1xuXG4gIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICBpZnJhbWUuaWQgPSAnbG9jYXRpb24taWZyYW1lJztcbiAgaWZyYW1lLnRpdGxlID0gJzg4IENoYXJsZXMgU3QsIE1vbnRnb21lcnksIE5ZIDEyNTQ5JztcbiAgaWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyOTg2Ljk2ODA5NzEwODgzOTYhMmQtNzQuMjM4MzYwMiEzZDQxLjUyNjYzMTY5OTk5OTk5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWRjZDVlODg5YjQ5MWI1JTNBMHhlODM4YzFlNTA0OWVkZjBmITJzODglMjBDaGFybGVzJTIwU3QlMkMlMjBNb250Z29tZXJ5JTJDJTIwTlklMjAxMjU0OSE1ZTAhM20yITFzZW4hMnN1cyE0djE3MDcwMDIyOTI4NDghNW0yITFzZW4hMnN1cyc7XG4gIGlmcmFtZS5oZWlnaHQgPSA0MDA7XG4gIGlmcmFtZS53aWR0aCA9IDQwMDtcbiAgaWZyYW1lLmFsbG93RnVsbHNjcmVlbiA9ICcnO1xuICBpZnJhbWUubG9hZGluZyA9ICdsYXp5JztcbiAgaWZyYW1lLnJlZmVycmVyUG9saWN5ID0gJ25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJztcblxuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRDb250YWluZXIuaWQgPSAnaW5mby10ZXh0JztcblxuICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gJ1Zpc2l0IFVzJztcblxuICBjb25zdCBsb2NhdGlvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9jYXRpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbG9jYXRpb25IZWFkaW5nLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uOic7XG4gIFxuICBjb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICc4OCBDaGFybGVzIFN0cmVldCwgTW9udGdvbWVyeSwgTlkgMTI1NDknO1xuXG4gIGNvbnN0IGhvdXJzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnSG91cnM6JztcblxuICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvdXJzVGV4dC5pbm5lckhUTUwgPSAnMTI6MDBwIC0gMzowMHAgLyA0OjAwcCAtIDk6MDBwPGJyPk1vbmRheSwgV2VkbmVzZGF5LCBUaHVyc2RheTxicj48YnI+MTI6MDBwIC0gMzowMHAgLyA0OjAwcCAtIDk6MDBwPGJyPkZyaWRheTxicj48YnI+NDowMHAgLSAxMDowMHA8YnI+U2F0dXJkYXk8YnI+PGJyPjQ6MDBwIC0gOTowMHA8YnI+U3VuZGF5JztcblxuICBob3Vyc1dyYXBwZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcbiAgaG91cnNXcmFwcGVyLmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XG5cbiAgbG9jYXRpb25XcmFwcGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGluZyk7XG4gIGxvY2F0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuXG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkhlYWRpbmcpO1xuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uV3JhcHBlcik7XG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNXcmFwcGVyKTtcblxuICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICByZXR1cm4gaW5mb1NlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3RlclNlY3Rpb24uaWQgPSAncGFnZS1mb290JztcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJUZXh0LmlubmVySFRNTCA9ICdbMjAyNF0gODggQ2hhcmxlcyBTdC4gJiMxNjk7IEFsbCBSaWdodHMgUmVzZXJ2ZWQnO1xuXG4gIGZvb3RlclNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgcmV0dXJuIGZvb3RlclNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZ2VuZXJhdGVOYXYoKTtcbiAgY29uc3QgaGVybyA9IGdlbmVyYXRlSGVybygpO1xuICBjb25zdCBtZWRpYSA9IGdlbmVyYXRlTWVkaWEoKTtcbiAgY29uc3QgaW5mbyA9IGdlbmVyYXRlSW5mbygpO1xuICBjb25zdCBmb290ZXIgPSBnZW5lcmF0ZUZvb3RlcigpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZXJvKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZWRpYSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuXG4gIGdlbmVyYXRlUGFnZSgpO1xuICBjb25zb2xlLmxvZygnVEVTVElORycpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==