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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sanchez&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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

#page-nav, .logo, .page-links, .social-links, #info-container, .info-card-container {
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
  gap: 16px;
  font-family: 'Quando';
  font-weight: 600
}

.page-links li {
  list-style: none;
}

.page-links a {
  background: -webkit-linear-gradient(var(--bright-accent), var(--main-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

#hero-container {
  height: 400px;
  display: grid;
  place-items: center;
  background-color: var(--background-white);
}

#hero-container > h1 {
  color: var(--text-black);
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 3rem;
}

#hero-container > h1 span {
  font-size: 0.675rem;
}

#info-container {
  height: 600px;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--background-black);
}

.info-card {
  background-color: var(--background-white);
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: var(--background-black);
  font-family: 'Sanchez', Times, serif;
  letter-spacing: 1px;
  text-align: center;
}

.info-card img {
  height: 300px;
  width: 300px;
}

.info-text {
  padding: 8px 0 16px 0;
  font-size: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,wBAAwB;EACxB,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4CAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,QAAQ;EACR,mBAAmB;EACnB,6EAA6E;EAC7E,6BAA6B;EAC7B,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,+CAA+C;EAC/C,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,qBAAqB;EACrB;AACF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6EAA6E;EAC7E,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;EACzC,qCAAqC;EACrC,8BAA8B;EAC9B,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-white: #f1f5f9;\n  --background-black: #09090b;\n  --text-white: #cbd5e1;\n  --text-black: #27272a;\n  --main-accent: #d2aa4a;\n  --active-accent: #faf7e2;\n  --bright-accent: #f7e988;\n  --dull-accent: #ac8220;\n}\n\n@font-face {\n  font-family: 'Ephesis';\n  src: url('./assets/fonts/Ephesis.ttf');\n}\n\n@font-face {\n  font-family: 'Quando';\n  src: url('./assets/fonts/Quando.ttf');\n}\n\n#page-nav, .logo, .page-links, .social-links, #info-container, .info-card-container {\n  display: flex;\n}\n\n#page-nav {\n  gap: 36px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background-black);\n}\n\n.logo {\n  gap: 8px;\n  align-items: center;\n  background: -webkit-linear-gradient(var(--main-accent), var(--bright-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: 'Ephesis';\n}\n\n.logo-maintext {\n  margin-top: 8px;\n  font-size: 2.5rem;\n}\n\n.logo-subtext {\n  text-align: center;\n}\n\n.logo-subtext > h1 {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.logo-subtext > h2 {\n  font-size: 0.5rem;\n  font-weight: 600;\n  font-family: 'Quando', 'Times New Roman', serif;\n  letter-spacing: 1px;\n}\n\n.page-links {\n  margin-inline: 16px;\n  gap: 16px;\n  font-family: 'Quando';\n  font-weight: 600\n}\n\n.page-links li {\n  list-style: none;\n}\n\n.page-links a {\n  background: -webkit-linear-gradient(var(--bright-accent), var(--main-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.page-links a.active-link {\n  text-decoration: underline;\n  color: var(--active-accent);\n  background: none;\n  -webkit-background-clip: unset;\n  -webkit-text-fill-color: unset;\n}\n\n.social-links {\n  gap: 8px;\n}\n\n#hero-container {\n  height: 400px;\n  display: grid;\n  place-items: center;\n  background-color: var(--background-white);\n}\n\n#hero-container > h1 {\n  color: var(--text-black);\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  font-size: 3rem;\n}\n\n#hero-container > h1 span {\n  font-size: 0.675rem;\n}\n\n#info-container {\n  height: 600px;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: var(--background-black);\n}\n\n.info-card {\n  background-color: var(--background-white);\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  color: var(--background-black);\n  font-family: 'Sanchez', Times, serif;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.info-card img {\n  height: 300px;\n  width: 300px;\n}\n\n.info-text {\n  padding: 8px 0 16px 0;\n  font-size: 2rem;\n}"],"sourceRoot":""}]);
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

  const heroImageCaption = document.createElement('h1');
  heroImageCaption.innerHTML = 'Modern <span>&#9899;</span> Elegant <span>&#9899;</span> Inviting';

  heroSection.appendChild(heroImageCaption);

  return heroSection;
}

function generateInfoCard(imgSrc,subtext) {
  const card = document.createElement('div');
  card.classList.add('info-card');

  const image = new Image();
  image.src = imgSrc;

  const textContainer = document.createElement('div');
  textContainer.classList.add('info-text');

  const text = document.createElement('h4');
  text.textContent = subtext;

  textContainer.appendChild(text);

  card.appendChild(image);
  card.appendChild(textContainer);
  
  return card;
}

function generateInfo() {
  const infoSection = document.createElement('section');
  infoSection.id = 'info-container';

  const foodCard = generateInfoCard(_assets_media_food_1_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Cuisine');
  const cocktailCard = generateInfoCard(_assets_media_cocktail_1_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Cocktails');
  const atmosphereCard = generateInfoCard(_assets_media_dining_2_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Ambiance');

  infoSection.appendChild(foodCard);
  infoSection.appendChild(cocktailCard);
  infoSection.appendChild(atmosphereCard);

  return infoSection;
}

function generatePage() {
  const header = generateNav();
  const hero = generateHero();
  const info = generateInfo();

  document.body.appendChild(header);
  document.body.appendChild(hero);
  document.body.appendChild(info);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzg4LWNoYXJsZXMtc3RyZWV0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vODgtY2hhcmxlcy1zdHJlZXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly84OC1jaGFybGVzLXN0cmVldC8uL3NyYy9tb2R1bGVzL2xvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0VwaGVzaXMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUXVhbmRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2FuY2hleiZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLWJhY2tncm91bmQtd2hpdGU6ICNmMWY1Zjk7XG4gIC0tYmFja2dyb3VuZC1ibGFjazogIzA5MDkwYjtcbiAgLS10ZXh0LXdoaXRlOiAjY2JkNWUxO1xuICAtLXRleHQtYmxhY2s6ICMyNzI3MmE7XG4gIC0tbWFpbi1hY2NlbnQ6ICNkMmFhNGE7XG4gIC0tYWN0aXZlLWFjY2VudDogI2ZhZjdlMjtcbiAgLS1icmlnaHQtYWNjZW50OiAjZjdlOTg4O1xuICAtLWR1bGwtYWNjZW50OiAjYWM4MjIwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdFcGhlc2lzJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jcGFnZS1uYXYsIC5sb2dvLCAucGFnZS1saW5rcywgLnNvY2lhbC1saW5rcywgI2luZm8tY29udGFpbmVyLCAuaW5mby1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNwYWdlLW5hdiB7XG4gIGdhcDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmxhY2spO1xufVxuXG4ubG9nbyB7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh2YXIoLS1tYWluLWFjY2VudCksIHZhcigtLWJyaWdodC1hY2NlbnQpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6ICdFcGhlc2lzJztcbn1cblxuLmxvZ28tbWFpbnRleHQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4ubG9nby1zdWJ0ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1zdWJ0ZXh0ID4gaDEge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2dvLXN1YnRleHQgPiBoMiB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogJ1F1YW5kbycsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnBhZ2UtbGlua3Mge1xuICBtYXJnaW4taW5saW5lOiAxNnB4O1xuICBnYXA6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnUXVhbmRvJztcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuXG4ucGFnZS1saW5rcyBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5wYWdlLWxpbmtzIGEge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh2YXIoLS1icmlnaHQtYWNjZW50KSwgdmFyKC0tbWFpbi1hY2NlbnQpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZ2UtbGlua3MgYS5hY3RpdmUtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB1bnNldDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xufVxuXG4uc29jaWFsLWxpbmtzIHtcbiAgZ2FwOiA4cHg7XG59XG5cbiNoZXJvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtd2hpdGUpO1xufVxuXG4jaGVyby1jb250YWluZXIgPiBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbiNoZXJvLWNvbnRhaW5lciA+IGgxIHNwYW4ge1xuICBmb250LXNpemU6IDAuNjc1cmVtO1xufVxuXG4jaW5mby1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XG59XG5cbi5pbmZvLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmxhY2spO1xuICBmb250LWZhbWlseTogJ1NhbmNoZXonLCBUaW1lcywgc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8tY2FyZCBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pbmZvLXRleHQge1xuICBwYWRkaW5nOiA4cHggMCAxNnB4IDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsNkVBQTZFO0VBQzdFLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLCtDQUErQztFQUMvQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5jaGV6JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC13aGl0ZTogI2YxZjVmOTtcXG4gIC0tYmFja2dyb3VuZC1ibGFjazogIzA5MDkwYjtcXG4gIC0tdGV4dC13aGl0ZTogI2NiZDVlMTtcXG4gIC0tdGV4dC1ibGFjazogIzI3MjcyYTtcXG4gIC0tbWFpbi1hY2NlbnQ6ICNkMmFhNGE7XFxuICAtLWFjdGl2ZS1hY2NlbnQ6ICNmYWY3ZTI7XFxuICAtLWJyaWdodC1hY2NlbnQ6ICNmN2U5ODg7XFxuICAtLWR1bGwtYWNjZW50OiAjYWM4MjIwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRXBoZXNpcyc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRXBoZXNpcy50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1F1YW5kbyc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvUXVhbmRvLnR0ZicpO1xcbn1cXG5cXG4jcGFnZS1uYXYsIC5sb2dvLCAucGFnZS1saW5rcywgLnNvY2lhbC1saW5rcywgI2luZm8tY29udGFpbmVyLCAuaW5mby1jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcGFnZS1uYXYge1xcbiAgZ2FwOiAzNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XFxufVxcblxcbi5sb2dvIHtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHZhcigtLW1haW4tYWNjZW50KSwgdmFyKC0tYnJpZ2h0LWFjY2VudCkpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogJ0VwaGVzaXMnO1xcbn1cXG5cXG4ubG9nby1tYWludGV4dCB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmxvZ28tc3VidGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLXN1YnRleHQgPiBoMSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubG9nby1zdWJ0ZXh0ID4gaDIge1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6ICdRdWFuZG8nLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucGFnZS1saW5rcyB7XFxuICBtYXJnaW4taW5saW5lOiAxNnB4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdRdWFuZG8nO1xcbiAgZm9udC13ZWlnaHQ6IDYwMFxcbn1cXG5cXG4ucGFnZS1saW5rcyBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucGFnZS1saW5rcyBhIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHZhcigtLWJyaWdodC1hY2NlbnQpLCB2YXIoLS1tYWluLWFjY2VudCkpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wYWdlLWxpbmtzIGEuYWN0aXZlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWFjY2VudCk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHVuc2V0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xcbn1cXG5cXG4uc29jaWFsLWxpbmtzIHtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4jaGVyby1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13aGl0ZSk7XFxufVxcblxcbiNoZXJvLWNvbnRhaW5lciA+IGgxIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jaGVyby1jb250YWluZXIgPiBoMSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMC42NzVyZW07XFxufVxcblxcbiNpbmZvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1ibGFjayk7XFxufVxcblxcbi5pbmZvLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtYmxhY2spO1xcbiAgZm9udC1mYW1pbHk6ICdTYW5jaGV6JywgVGltZXMsIHNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8tY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmluZm8tdGV4dCB7XFxuICBwYWRkaW5nOiA4cHggMCAxNnB4IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vbW9kdWxlcy9sb2FkJztcblxuKGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxvYWRQYWdlKCk7XG59KSgpOyIsImltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnLi4vYXNzZXRzL21lZGlhL2ZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgRm9vZEltYWdlIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS9mb29kLTEuanBnJztcbmltcG9ydCBEcmlua0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS9jb2NrdGFpbC0xLmpwZyc7XG5pbXBvcnQgQXRtb3NwaGVyZUltYWdlIGZyb20gJy4uL2Fzc2V0cy9tZWRpYS9kaW5pbmctMi5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuXG4gIGNvbnN0IGxvZ29NYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvZ29NYWluVGV4dC50ZXh0Q29udGVudCA9ICc4OCc7XG4gIGxvZ29NYWluVGV4dC5jbGFzc0xpc3QuYWRkKCdsb2dvLW1haW50ZXh0Jyk7XG5cbiAgY29uc3QgbG9nb1N1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb1N1YlRleHQuY2xhc3NMaXN0LmFkZCgnbG9nby1zdWJ0ZXh0Jyk7XG5cbiAgY29uc3QgbG9nb0hlYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbG9nb0hlYWRUZXh0LnRleHRDb250ZW50ID0gJ0NoYXJsZXMgU3RyZWV0JztcblxuICBjb25zdCBsb2dvRm9vdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsb2dvRm9vdFRleHQudGV4dENvbnRlbnQgPSAnUkVTVEFVUkFOVCc7XG5cbiAgbG9nb1N1YlRleHQuYXBwZW5kQ2hpbGQobG9nb0hlYWRUZXh0KTtcbiAgbG9nb1N1YlRleHQuYXBwZW5kQ2hpbGQobG9nb0Zvb3RUZXh0KTtcblxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29NYWluVGV4dCk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb1N1YlRleHQpO1xuXG4gIHJldHVybiBsb2dvQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpdGVMaW5rcygpIHtcbiAgY29uc3QgbGlua3MgPSBbJ0hvbWUnLCAnQWJvdXQnLCAnTWVudXMnLCAnU3BlY2lhbCBFdmVudHMnLCAnR2lmdCBDYXJkcycsICdDb250YWN0J11cblxuICBjb25zdCBsaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpbmtMaXN0LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbGlua3MnKTtcbiAgXG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBjb25zdCBsaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rVGFnLnRleHRDb250ZW50ID0gbGluaztcblxuICAgIGxpbmtJdGVtLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuICAgIGxpbmtMaXN0LmFwcGVuZENoaWxkKGxpbmtJdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpbmtMaXN0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNvY2lhbExpbmtzKCkge1xuICBjb25zdCBsaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5rTGlzdC5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtbGlua3MnKTtcblxuICBjb25zdCBpbnN0YWdyYW1JY29uID0gbmV3IEltYWdlKCk7XG4gIGluc3RhZ3JhbUljb24uc3JjID0gSW5zdGFncmFtSWNvbjtcblxuICBjb25zdCBmYWNlYm9va0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZmFjZWJvb2tJY29uLnNyYyA9IEZhY2Vib29rSWNvbjtcblxuICBsaW5rTGlzdC5hcHBlbmRDaGlsZChpbnN0YWdyYW1JY29uKTtcbiAgbGlua0xpc3QuYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcblxuICByZXR1cm4gbGlua0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmlkID0gJ3BhZ2UtbmF2JztcblxuICBjb25zdCBsb2dvID0gY3JlYXRlTG9nbygpO1xuICBjb25zdCBzaXRlTGlua3MgPSBnZW5lcmF0ZVNpdGVMaW5rcygpO1xuICBjb25zdCBzb2NpYWxMaW5rcyA9IGdlbmVyYXRlU29jaWFsTGlua3MoKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdi5hcHBlbmRDaGlsZChzaXRlTGlua3MpO1xuICBuYXYuYXBwZW5kQ2hpbGQoc29jaWFsTGlua3MpO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGVybygpIHtcbiAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGhlcm9TZWN0aW9uLmlkID0gJ2hlcm8tY29udGFpbmVyJztcblxuICBjb25zdCBoZXJvSW1hZ2VDYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0ltYWdlQ2FwdGlvbi5pbm5lckhUTUwgPSAnTW9kZXJuIDxzcGFuPiYjOTg5OTs8L3NwYW4+IEVsZWdhbnQgPHNwYW4+JiM5ODk5Ozwvc3Bhbj4gSW52aXRpbmcnO1xuXG4gIGhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9JbWFnZUNhcHRpb24pO1xuXG4gIHJldHVybiBoZXJvU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbmZvQ2FyZChpbWdTcmMsc3VidGV4dCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnaW5mby1jYXJkJyk7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gaW1nU3JjO1xuXG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLXRleHQnKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IHN1YnRleHQ7XG5cbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluZm8oKSB7XG4gIGNvbnN0IGluZm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBpbmZvU2VjdGlvbi5pZCA9ICdpbmZvLWNvbnRhaW5lcic7XG5cbiAgY29uc3QgZm9vZENhcmQgPSBnZW5lcmF0ZUluZm9DYXJkKEZvb2RJbWFnZSwgJ0N1aXNpbmUnKTtcbiAgY29uc3QgY29ja3RhaWxDYXJkID0gZ2VuZXJhdGVJbmZvQ2FyZChEcmlua0ltYWdlLCAnQ29ja3RhaWxzJyk7XG4gIGNvbnN0IGF0bW9zcGhlcmVDYXJkID0gZ2VuZXJhdGVJbmZvQ2FyZChBdG1vc3BoZXJlSW1hZ2UsICdBbWJpYW5jZScpO1xuXG4gIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGZvb2RDYXJkKTtcbiAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29ja3RhaWxDYXJkKTtcbiAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXRtb3NwaGVyZUNhcmQpO1xuXG4gIHJldHVybiBpbmZvU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKCkge1xuICBjb25zdCBoZWFkZXIgPSBnZW5lcmF0ZU5hdigpO1xuICBjb25zdCBoZXJvID0gZ2VuZXJhdGVIZXJvKCk7XG4gIGNvbnN0IGluZm8gPSBnZW5lcmF0ZUluZm8oKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVybyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcblxuICBnZW5lcmF0ZVBhZ2UoKTtcbiAgY29uc29sZS5sb2coJ1RFU1RJTkcnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=