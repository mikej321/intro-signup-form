/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-intro-mobile.png */ "./src/images/bg-intro-mobile.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

body {
  position: relative;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-color: hsl(0, 100%, 74%);
}

@media screen and (min-width: 600px) {
  body {
    justify-content: center;
  }
}
.container {
  display: grid;
  max-width: 31rem;
  grid-template-areas: "header" "main";
  padding: 8rem 2rem 0rem;
}

@media screen and (min-width: 600px) {
  .container {
    max-width: 90rem;
    grid-template-areas: "header main";
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
}
header {
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 600px) {
  header {
    align-self: center;
    margin-top: 6rem;
  }
}
header h1 {
  text-align: center;
  font-size: 2.2rem;
  line-height: 3.2rem;
  max-width: 30rem;
  color: white;
  margin-bottom: 2rem;
}

@media screen and (min-width: 600px) {
  header h1 {
    font-size: 4rem;
    text-align: left;
    line-height: 4.5rem;
    max-width: unset;
  }
}
header p {
  text-align: center;
  font-size: 1.3rem;
  color: white;
  font-weight: 500;
  justify-self: center;
  margin-bottom: 5rem;
  max-width: 26rem;
  line-height: 2.1rem;
}

@media screen and (min-width: 600px) {
  header p {
    text-align: left;
    max-width: unset;
  }
}
main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main .try-container {
  background: hsl(248, 32%, 49%);
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 100%;
  height: 8rem;
  line-height: 2.2rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  padding-inline: 5rem;
}

@media screen and (min-width: 600px) {
  main .try-container {
    height: 5rem;
    padding-inline: 0;
  }
}
.try-free {
  font-weight: 700;
}

form {
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 6px rgba(0, 0, 0, 0.13);
}
form input {
  width: 100%;
  height: 4.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding-left: 1.5rem;
}
form input::placeholder {
  font-weight: 600;
  font-size: 1.2rem;
}
form input:focus {
  outline: none;
}
form input[error=""] {
  border: 1px solid hsl(0, 100%, 74%);
}
form button {
  height: 4.5rem;
  background: hsl(154, 59%, 51%);
  border: none;
  border-radius: 4px;
  color: white;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.3px;
  box-shadow: 0px 3px #2ba671;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
}
form button:hover {
  background: #61d6a3;
}

@media screen and (min-width: 600px) {
  form {
    padding: 3rem;
    width: 100%;
  }
}
.input-container {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
}
.input-container img {
  max-width: 2rem;
  position: absolute;
  bottom: 50%;
  right: 2rem;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.input-container img[error=""] {
  opacity: 1;
}
.input-container .error-msg {
  max-height: 0px;
  overflow: hidden;
  color: hsl(0, 100%, 74%);
  font-size: 1rem;
  font-style: italic;
  align-self: end;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.input-container .error-msg[error=""] {
  max-height: fit-content;
  overflow: auto;
  opacity: 1;
}

.terms {
  margin-top: -0.3rem;
  font-size: 0.9rem;
  text-align: center;
  color: hsl(246, 25%, 77%);
  font-weight: 500;
  padding-inline: 1.4rem;
  line-height: 1.6rem;
}
.terms a {
  text-decoration: none;
  color: hsl(0, 100%, 74%);
  font-weight: 700;
}

footer {
  position: fixed;
  bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAmBA;;;EAGI,sBAAA;AAjBJ;;AAmBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAhBJ;;AAkBA;EACI,gBAAA;AAfJ;;AAiBA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAdJ;;AAgBA;EACI,kBAAA;EACA,eAtBQ;EAuBR,kCArCM;EAsCN,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yDAAA;EACA,mCAxCE;AA2BN;;AAeA;EACI;IACI,uBAAA;EAZN;AACF;AAcA;EACI,aAAA;EACA,gBAAA;EACA,oCAAA;EACA,uBAAA;AAZJ;;AAcA;EACI;IACI,gBAAA;IACA,kCAAA;IACA,qCAAA;IACA,UAAA;EAXN;AACF;AAYA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAVJ;;AAYA;EACI;IACI,kBAAA;IACA,gBAAA;EATN;AACF;AAYA;EACI,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAVJ;;AAYA;EACI;IACI,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,gBAAA;EATN;AACF;AAWA;EACI,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AATJ;;AAWA;EACI;IACI,gBAAA;IACA,gBAAA;EARN;AACF;AAUA;EACI,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AARJ;;AAUA;EACI,8BA5GG;EA6GH,YAAA;EACA,kCArHM;EAsHN,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,sCAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,oBAAA;AAPJ;;AASA;EACI;IACI,YAAA;IACA,iBAAA;EANN;AACF;AAQA;EACI,gBAAA;AANJ;;AAQA;EACI,iBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,uCAAA;AALJ;AAMI;EACI,WAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,oBAAA;AAJR;AAKQ;EACI,gBAAA;EACA,iBAAA;AAHZ;AAIQ;EACI,aAAA;AAFZ;AAGQ;EACI,mCAAA;AADZ;AAEI;EACI,cAAA;EACA,8BAhKA;EAiKA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,yBAAA;EACA,gBAAA;EACA,qBAAA;EACA,2BAAA;EACA,uCAAA;EACA,eAAA;AAAR;AACQ;EACI,mBAAA;AACZ;;AACA;EACI;IACI,aAAA;IACA,WAAA;EAEN;AACF;AADA;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;AAGJ;AAFI;EACI,eAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,gCAAA;AAIR;AAHQ;EACI,UAAA;AAKZ;AAJI;EACI,eAAA;EACA,gBAAA;EACA,wBArMF;EAsME,eAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,gCAAA;AAMR;AALQ;EACI,uBAAA;EACA,cAAA;EACA,UAAA;AAOZ;;AAHA;EACI,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBA9MW;EA+MX,gBAAA;EACA,sBAAA;EACA,mBAAA;AAMJ;AALI;EACI,qBAAA;EACA,wBA5NF;EA6NE,gBAAA;AAOR;;AALA;EACI,eAAA;EACA,YAAA;AAQJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')\n\n// Fonts\n$poppins: 'Poppins', sans-serif\n\n// Primary Colors\n$red: hsl(0, 100%, 74%)\n$green: hsl(154, 59%, 51%)\n\n// Accent\n$blue: hsl(248, 32%, 49%)\n\n// Neutral\n$dark_blue: hsl(249, 10%, 26%)\n$grayish_blue: hsl(246, 25%, 77%)\n\n// Font Size\n$font_size: 16px\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\nbody\n    position: relative\n    font-size: $font_size\n    font-family: $poppins\n    display: flex\n    flex-direction: column\n    min-height: 100vh\n    align-items: center\n    background-image: url('../images/bg-intro-mobile.png')\n    background-color: $red\n\n@media screen and (min-width: 600px)\n    body\n        justify-content: center\n    \n\n.container\n    display: grid\n    max-width: 31rem\n    grid-template-areas: \"header\" \"main\"\n    padding: 8rem 2rem 0rem\n\n@media screen and (min-width: 600px)\n    .container\n        max-width: 90rem\n        grid-template-areas: \"header main\"\n        grid-template-columns: repeat(2, 1fr)\n        padding: 0\n    \nheader\n    grid-area: header\n    display: flex\n    flex-direction: column\n    align-items: center\n\n@media screen and (min-width: 600px)\n    header\n        align-self: center\n        margin-top: 6rem\n\n\n\nheader h1\n    text-align: center\n    font-size: 2.2rem\n    line-height: 3.2rem\n    max-width: 30rem\n    color: white\n    margin-bottom: 2rem\n\n@media screen and (min-width: 600px)\n    header h1\n        font-size: 4rem\n        text-align: left\n        line-height: 4.5rem\n        max-width: unset\n    \n\nheader p\n    text-align: center\n    font-size: 1.3rem\n    color: white\n    font-weight: 500\n    justify-self: center\n    margin-bottom: 5rem\n    max-width: 26rem\n    line-height: 2.1rem\n\n@media screen and (min-width: 600px)\n    header p\n        text-align: left\n        max-width: unset\n    \n\nmain\n    grid-area: main\n    display: flex\n    flex-direction: column\n    align-items: center\n\nmain .try-container\n    background: $blue\n    color: white\n    font-family: $poppins\n    text-align: center\n    width: 100%\n    height: 8rem\n    line-height: 2.2rem\n    border: none\n    border-radius: 8px\n    box-shadow: 0px 6px rgba(0, 0, 0, 0.2)\n    margin-bottom: 2rem\n    display: flex\n    align-items: center\n    justify-content: center\n    font-size: 1.3rem\n    padding-inline: 5rem\n\n@media screen and (min-width: 600px)\n    main .try-container       \n        height: 5rem\n        padding-inline: 0\n\n\n.try-free\n    font-weight: 700\n\nform\n    background: white\n    padding: 2rem\n    display: flex\n    flex-direction: column\n    gap: 1.5rem\n    border-radius: 8px\n    box-shadow: 0px 6px rgba(0, 0, 0, 0.13)\n    input\n        width: 100%\n        height: 4.5rem\n        border: 1px solid lighten(lightgrey, 5%)\n        border-radius: 4px\n        padding-left: 1.5rem\n        &::placeholder\n            font-weight: 600\n            font-size: 1.2rem\n        &:focus\n            outline: none\n        &[error='']\n            border: 1px solid $red\n    button\n        height: 4.5rem\n        background: $green\n        border: none\n        border-radius: 4px\n        color: white\n        font-family: inherit\n        text-transform: uppercase\n        font-weight: 600\n        letter-spacing: .3px\n        box-shadow: 0px 3px darken($green, 10%)\n        transition: background 0.2s ease-in-out\n        cursor: pointer\n        &:hover\n            background: lighten($green, 10%)\n\n@media screen and (min-width: 600px)\n    form\n        padding: 3rem\n        width: 100%\n\n.input-container\n    display: flex\n    flex-direction: column\n    position: relative\n    gap: .5rem\n    img\n        max-width: 2rem\n        position: absolute\n        bottom: 50%\n        right: 2rem\n        opacity: 0\n        transition: all 0.2s ease-in-out\n        &[error='']\n            opacity: 1\n    .error-msg\n        max-height: 0px\n        overflow: hidden\n        color: $red\n        font-size: 1rem\n        font-style: italic\n        align-self: end\n        opacity: 0\n        transition: all 0.2s ease-in-out\n        &[error='']\n            max-height: fit-content\n            overflow: auto\n            opacity: 1\n\n\n\n.terms\n    margin-top: -.3rem\n    font-size: .9rem\n    text-align: center\n    color: $grayish_blue\n    font-weight: 500\n    padding-inline: 1.4rem\n    line-height: 1.6rem\n    a\n        text-decoration: none\n        color: $red\n        font-weight: 700\n\nfooter\n    position: fixed\n    bottom: 1rem"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/images/bg-intro-mobile.png":
/*!****************************************!*\
  !*** ./src/images/bg-intro-mobile.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02ce398270ece1769ebc.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


const form = document.querySelector('form');
const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const submit = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll('input');

// regexes
const passwordRegex = /(?=(?:\w|[!@#$%^&*()_+]){8,20}).*/i;
const emailRegex = /^\w+@\w+\.\w{2,3}$/;

document.onload = clearForm();

function clearForm() {
    inputs.forEach((input) => {
        input.value = '';
    })
}

function events() {
    let trueEvents = 0;
    firstNameInput.addEventListener('input', () => {
        let firstNameVal = firstNameInput.value;
        if (firstNameVal === '') {
            firstNameInput.setAttribute('error', '');
            firstNameInput.nextElementSibling.setAttribute('error', '');
            firstNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            firstNameInput.removeAttribute('error');
            firstNameInput.nextElementSibling.removeAttribute('error')
            firstNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }   
    })

    firstNameInput.addEventListener('focus', () => {
        let firstNameVal = firstNameInput.value;
        if (firstNameVal === '') {
            firstNameInput.setAttribute('error', '');
            firstNameInput.nextElementSibling.setAttribute('error', '');
            firstNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            firstNameInput.removeAttribute('error');
            firstNameInput.nextElementSibling.removeAttribute('error')
            firstNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })
    
    lastNameInput.addEventListener('input', () => {
        let lastNameVal = lastNameInput.value;
        if (lastNameVal === '') {
            lastNameInput.setAttribute('error', '');
            lastNameInput.nextElementSibling.setAttribute('error', '');
            lastNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '')
        } else {
            lastNameInput.removeAttribute('error');
            lastNameInput.nextElementSibling.removeAttribute('error');
            lastNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })

    lastNameInput.addEventListener('focus', () => {
        let lastNameVal = lastNameInput.value;
        if (lastNameVal === '') {
            lastNameInput.setAttribute('error', '');
            lastNameInput.nextElementSibling.setAttribute('error', '');
            lastNameInput.nextElementSibling.nextElementSibling.setAttribute('error', '')
        } else {
            lastNameInput.removeAttribute('error');
            lastNameInput.nextElementSibling.removeAttribute('error');
            lastNameInput.nextElementSibling.nextElementSibling.removeAttribute('error')
        }
    })
    
    emailInput.addEventListener('input', () => {
        let emailVal = emailInput.value;
        if (!emailRegex.test(emailVal)) {
            emailInput.setAttribute('error', '');
            emailInput.nextElementSibling.setAttribute('error', '');
            emailInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            emailInput.removeAttribute('error');
            emailInput.nextElementSibling.removeAttribute('error');
            emailInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })

    emailInput.addEventListener('focus', () => {
        let emailVal = emailInput.value;
        if (!emailRegex.test(emailVal)) {
            emailInput.setAttribute('error', '');
            emailInput.nextElementSibling.setAttribute('error', '');
            emailInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            emailInput.removeAttribute('error');
            emailInput.nextElementSibling.removeAttribute('error');
            emailInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })
    
    passwordInput.addEventListener('input', () => {
        let passVal = passwordInput.value;
        if (!passwordRegex.test(passVal)) {
            passwordInput.setAttribute('error', '');
            passwordInput.nextElementSibling.setAttribute('error', '');
            passwordInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            passwordInput.removeAttribute('error');
            passwordInput.nextElementSibling.removeAttribute('error');
            passwordInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })

    passwordInput.addEventListener('focus', () => {
        let passVal = passwordInput.value;
        if (!passwordRegex.test(passVal)) {
            passwordInput.setAttribute('error', '');
            passwordInput.nextElementSibling.setAttribute('error', '');
            passwordInput.nextElementSibling.nextElementSibling.setAttribute('error', '');
        } else {
            passwordInput.removeAttribute('error');
            passwordInput.nextElementSibling.removeAttribute('error');
            passwordInput.nextElementSibling.nextElementSibling.removeAttribute('error');
        }
    })
}

events();

form.addEventListener('submit', (e) => {
    e.preventDefault();
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxzSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSEFBZ0gsSUFBSSxJQUFJLGtCQUFrQjtBQUMxSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUss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QTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQsaUNBQWlDLElBQUk7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ludHJvLXNpZ251cC1mb3JtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ludHJvLXNpZ251cC1mb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludHJvLXNpZ251cC1mb3JtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ludHJvLXNpZ251cC1mb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ludHJvLXNpZ251cC1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9pbnRyby1zaWdudXAtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaW50cm8tc2lnbnVwLWZvcm0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy1pbnRyby1tb2JpbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMTAwJSwgNzQlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXgtd2lkdGg6IDMxcmVtO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwibWFpblwiO1xuICBwYWRkaW5nOiA4cmVtIDJyZW0gMHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5MHJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlciBtYWluXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgfVxufVxuaGVhZGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuaGVhZGVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICBtYXgtd2lkdGg6IDI2cmVtO1xuICBsaW5lLWhlaWdodDogMi4xcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYWluIC50cnktY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogaHNsKDI0OCwgMzIlLCA0OSUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cmVtO1xuICBsaW5lLWhlaWdodDogMi4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIG1haW4gLnRyeS1jb250YWluZXIge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBwYWRkaW5nLWlubGluZTogMDtcbiAgfVxufVxuLnRyeS1mcmVlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG5mb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbmZvcm0gaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuZm9ybSBpbnB1dFtlcnJvcj1cIlwiXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA3NCUpO1xufVxuZm9ybSBidXR0b24ge1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYmFja2dyb3VuZDogaHNsKDE1NCwgNTklLCA1MSUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBib3gtc2hhZG93OiAwcHggM3B4ICMyYmE2NzE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjFkNmEzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5pbnB1dC1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICByaWdodDogMnJlbTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uaW5wdXQtY29udGFpbmVyIGltZ1tlcnJvcj1cIlwiXSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaW5wdXQtY29udGFpbmVyIC5lcnJvci1tc2cge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNzQlKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uaW5wdXQtY29udGFpbmVyIC5lcnJvci1tc2dbZXJyb3I9XCJcIl0ge1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZXJtcyB7XG4gIG1hcmdpbi10b3A6IC0wLjNyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBoc2woMjQ2LCAyNSUsIDc3JSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctaW5saW5lOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG59XG4udGVybXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGhzbCgwLCAxMDAlLCA3NCUpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFtQkE7OztFQUdJLHNCQUFBO0FBakJKOztBQW1CQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFoQko7O0FBa0JBO0VBQ0ksZ0JBQUE7QUFmSjs7QUFpQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxlQXRCUTtFQXVCUixrQ0FyQ007RUFzQ04sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlEQUFBO0VBQ0EsbUNBeENFO0FBMkJOOztBQWVBO0VBQ0k7SUFDSSx1QkFBQTtFQVpOO0FBQ0Y7QUFjQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFjQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxrQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsVUFBQTtFQVhOO0FBQ0Y7QUFZQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFZQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtFQVROO0FBQ0Y7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVko7O0FBWUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFUTjtBQUNGO0FBV0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFXQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQVJOO0FBQ0Y7QUFVQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVVBO0VBQ0ksOEJBNUdHO0VBNkdILFlBQUE7RUFDQSxrQ0FySE07RUFzSE4sa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVNBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7RUFOTjtBQUNGO0FBUUE7RUFDSSxnQkFBQTtBQU5KOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFMSjtBQU1JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKUjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUhaO0FBSVE7RUFDSSxhQUFBO0FBRlo7QUFHUTtFQUNJLG1DQUFBO0FBRFo7QUFFSTtFQUNJLGNBQUE7RUFDQSw4QkFoS0E7RUFpS0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUFBUjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjs7QUFDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUFFTjtBQUNGO0FBREE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUZJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFJUjtBQUhRO0VBQ0ksVUFBQTtBQUtaO0FBSkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFyTUY7RUFzTUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQU1SO0FBTFE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBT1o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkE5TVc7RUErTVgsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTUo7QUFMSTtFQUNJLHFCQUFBO0VBQ0Esd0JBNU5GO0VBNk5FLGdCQUFBO0FBT1I7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJylcXG5cXG4vLyBGb250c1xcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWZcXG5cXG4vLyBQcmltYXJ5IENvbG9yc1xcbiRyZWQ6IGhzbCgwLCAxMDAlLCA3NCUpXFxuJGdyZWVuOiBoc2woMTU0LCA1OSUsIDUxJSlcXG5cXG4vLyBBY2NlbnRcXG4kYmx1ZTogaHNsKDI0OCwgMzIlLCA0OSUpXFxuXFxuLy8gTmV1dHJhbFxcbiRkYXJrX2JsdWU6IGhzbCgyNDksIDEwJSwgMjYlKVxcbiRncmF5aXNoX2JsdWU6IGhzbCgyNDYsIDI1JSwgNzclKVxcblxcbi8vIEZvbnQgU2l6ZVxcbiRmb250X3NpemU6IDE2cHhcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWxcXG4gICAgZm9udC1zaXplOiA2Mi41JVxcblxcbmltZ1xcbiAgICB3aWR0aDogMTAwJVxcbiAgICBoZWlnaHQ6IGF1dG9cXG4gICAgb2JqZWN0LWZpdDogY292ZXJcXG5cXG5ib2R5XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBmb250LXNpemU6ICRmb250X3NpemVcXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JnLWludHJvLW1vYmlsZS5wbmcnKVxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGJvZHlcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIFxcblxcbi5jb250YWluZXJcXG4gICAgZGlzcGxheTogZ3JpZFxcbiAgICBtYXgtd2lkdGg6IDMxcmVtXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXJcXFwiIFxcXCJtYWluXFxcIlxcbiAgICBwYWRkaW5nOiA4cmVtIDJyZW0gMHJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuY29udGFpbmVyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwcmVtXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIG1haW5cXFwiXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpXFxuICAgICAgICBwYWRkaW5nOiAwXFxuICAgIFxcbmhlYWRlclxcbiAgICBncmlkLWFyZWE6IGhlYWRlclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBoZWFkZXJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbVxcblxcblxcblxcbmhlYWRlciBoMVxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgZm9udC1zaXplOiAyLjJyZW1cXG4gICAgbGluZS1oZWlnaHQ6IDMuMnJlbVxcbiAgICBtYXgtd2lkdGg6IDMwcmVtXFxuICAgIGNvbG9yOiB3aGl0ZVxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGhlYWRlciBoMVxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XFxuICAgICAgICBsaW5lLWhlaWdodDogNC41cmVtXFxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0XFxuICAgIFxcblxcbmhlYWRlciBwXFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcbiAgICBmb250LXNpemU6IDEuM3JlbVxcbiAgICBjb2xvcjogd2hpdGVcXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgIG1heC13aWR0aDogMjZyZW1cXG4gICAgbGluZS1oZWlnaHQ6IDIuMXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBoZWFkZXIgcFxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldFxcbiAgICBcXG5cXG5tYWluXFxuICAgIGdyaWQtYXJlYTogbWFpblxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcblxcbm1haW4gLnRyeS1jb250YWluZXJcXG4gICAgYmFja2dyb3VuZDogJGJsdWVcXG4gICAgY29sb3I6IHdoaXRlXFxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGluc1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgaGVpZ2h0OiA4cmVtXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW1cXG4gICAgYm9yZGVyOiBub25lXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICBmb250LXNpemU6IDEuM3JlbVxcbiAgICBwYWRkaW5nLWlubGluZTogNXJlbVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBtYWluIC50cnktY29udGFpbmVyICAgICAgIFxcbiAgICAgICAgaGVpZ2h0OiA1cmVtXFxuICAgICAgICBwYWRkaW5nLWlubGluZTogMFxcblxcblxcbi50cnktZnJlZVxcbiAgICBmb250LXdlaWdodDogNzAwXFxuXFxuZm9ybVxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxcbiAgICBwYWRkaW5nOiAycmVtXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBnYXA6IDEuNXJlbVxcbiAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTMpXFxuICAgIGlucHV0XFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW1cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4obGlnaHRncmV5LCA1JSlcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW1cXG4gICAgICAgICY6OnBsYWNlaG9sZGVyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgICAgICAmOmZvY3VzXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZVxcbiAgICAgICAgJltlcnJvcj0nJ11cXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkXFxuICAgIGJ1dHRvblxcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW1cXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmVlblxcbiAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXRcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IGRhcmtlbigkZ3JlZW4sIDEwJSlcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkZ3JlZW4sIDEwJSlcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgZm9ybVxcbiAgICAgICAgcGFkZGluZzogM3JlbVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG5cXG4uaW5wdXQtY29udGFpbmVyXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgZ2FwOiAuNXJlbVxcbiAgICBpbWdcXG4gICAgICAgIG1heC13aWR0aDogMnJlbVxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICBib3R0b206IDUwJVxcbiAgICAgICAgcmlnaHQ6IDJyZW1cXG4gICAgICAgIG9wYWNpdHk6IDBcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAmW2Vycm9yPScnXVxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgLmVycm9yLW1zZ1xcbiAgICAgICAgbWF4LWhlaWdodDogMHB4XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICAgICBjb2xvcjogJHJlZFxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWNcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZFxcbiAgICAgICAgb3BhY2l0eTogMFxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICZbZXJyb3I9JyddXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnRcXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0b1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcXG5cXG5cXG5cXG4udGVybXNcXG4gICAgbWFyZ2luLXRvcDogLS4zcmVtXFxuICAgIGZvbnQtc2l6ZTogLjlyZW1cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxuICAgIGNvbG9yOiAkZ3JheWlzaF9ibHVlXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcXG4gICAgcGFkZGluZy1pbmxpbmU6IDEuNHJlbVxcbiAgICBsaW5lLWhlaWdodDogMS42cmVtXFxuICAgIGFcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgY29sb3I6ICRyZWRcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG5cXG5mb290ZXJcXG4gICAgcG9zaXRpb246IGZpeGVkXFxuICAgIGJvdHRvbTogMXJlbVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImZpcnN0TmFtZVwiXScpO1xuY29uc3QgbGFzdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsYXN0TmFtZVwiXScpO1xuY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbi8vIHJlZ2V4ZXNcbmNvbnN0IHBhc3N3b3JkUmVnZXggPSAvKD89KD86XFx3fFshQCMkJV4mKigpXytdKXs4LDIwfSkuKi9pO1xuY29uc3QgZW1haWxSZWdleCA9IC9eXFx3K0BcXHcrXFwuXFx3ezIsM30kLztcblxuZG9jdW1lbnQub25sb2FkID0gY2xlYXJGb3JtKCk7XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBldmVudHMoKSB7XG4gICAgbGV0IHRydWVFdmVudHMgPSAwO1xuICAgIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBsZXQgZmlyc3ROYW1lVmFsID0gZmlyc3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChmaXJzdE5hbWVWYWwgPT09ICcnKSB7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZmlyc3ROYW1lSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpXG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKVxuICAgICAgICB9ICAgXG4gICAgfSlcblxuICAgIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICBsZXQgZmlyc3ROYW1lVmFsID0gZmlyc3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChmaXJzdE5hbWVWYWwgPT09ICcnKSB7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZmlyc3ROYW1lSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpXG4gICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBsZXQgbGFzdE5hbWVWYWwgPSBsYXN0TmFtZUlucHV0LnZhbHVlO1xuICAgICAgICBpZiAobGFzdE5hbWVWYWwgPT09ICcnKSB7XG4gICAgICAgICAgICBsYXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBsYXN0TmFtZUlucHV0Lm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIGxldCBsYXN0TmFtZVZhbCA9IGxhc3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGlmIChsYXN0TmFtZVZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBsYXN0TmFtZUlucHV0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBsYXN0TmFtZUlucHV0Lm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBsYXN0TmFtZUlucHV0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbWFpbFZhbCA9IGVtYWlsSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsVmFsKSkge1xuICAgICAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZW1haWxJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1haWxJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0Lm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbWFpbFZhbCA9IGVtYWlsSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsVmFsKSkge1xuICAgICAgICAgICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgZW1haWxJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW1haWxJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0Lm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBsZXQgcGFzc1ZhbCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghcGFzc3dvcmRSZWdleC50ZXN0KHBhc3NWYWwpKSB7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0Lm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnZXJyb3InLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgbGV0IHBhc3NWYWwgPSBwYXNzd29yZElucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIXBhc3N3b3JkUmVnZXgudGVzdChwYXNzVmFsKSkge1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKCdlcnJvcicsICcnKTtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0Lm5leHRFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXZlbnRzKCk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9