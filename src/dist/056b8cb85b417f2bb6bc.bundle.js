/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/musicPlayer/styles.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/musicPlayer/styles.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fixed-footer {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n}\n\n.musicPlayer {\n  position: relative;\n  display: flex;\n  padding: 5px;\n  width: 100%;\n  height: 4rem;\n  background-color: #3B4CCA;\n  justify-content: space-between;\n}\n\n.music-player-play, .music-player-pause {\n  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\n  position: relative;\n  left: 1rem;\n  padding: 1rem;\n  width: 5rem;\n  border: 0;\n  margin: 5px;\n  outline: none;\n  transition: all 0.5s ease;\n}\n.music-player-play:hover, .music-player-pause:hover {\n  background: #202020;\n  color: white;\n  cursor: pointer;\n}\n\n.music-player-card {\n  width: 100%;\n  height: 100%;\n}\n\n.music-player-text {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/components/musicPlayer/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;AADJ;;AAIA;EACI,kBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yBCFI;EDGJ,8BAAA;AADJ;;AAKA;EACI,sDAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,yBCHQ;ADCZ;AAII;EACI,mBCvBD;EDwBC,YAAA;EACA,eAAA;AAFR;;AAMA;EACI,WAAA;EACA,YAAA;AAHJ;;AAMA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;AAHJ","sourcesContent":["@import '../../scss/variables';\r\n\r\n.fixed-footer {\r\n    position: fixed;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.musicPlayer {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 5px;\r\n    width: 100%;\r\n    height: 4rem;\r\n    background-color: $poke3;\r\n    justify-content: space-between;\r\n\r\n}\r\n\r\n.music-player-play, .music-player-pause {\r\n    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);\r\n    position: relative;\r\n    left: 1rem;\r\n    padding: 1rem;\r\n    width: 5rem;\r\n    border: 0;\r\n    margin: 5px;\r\n    outline: none;\r\n    transition: $transFast;\r\n\r\n    &:hover {\r\n        background: $dark;\r\n        color: white;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.music-player-card{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.music-player-text {\r\n    position: absolute;\r\n    top: 1rem;\r\n    right: 1rem;\r\n}","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/styles.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar {\n  background: #202020;\n  width: 100%;\n  height: 4rem;\n  box-shadow: 0px 0px 15px #202020;\n}\n\n.navbar ul {\n  color: white;\n  display: flex;\n  list-style: none;\n  position: relative;\n  margin-left: 6rem;\n}\n.navbar ul li {\n  position: relative;\n  top: 1.5rem;\n}\n.navbar ul li a {\n  margin-left: 1.5rem;\n  color: #FFCC01 !important;\n  text-decoration: none;\n  padding: 1rem;\n}\n.navbar ul li a:hover {\n  border-bottom: 5px solid #375DA9;\n  color: white !important;\n}\n\n.navbar-brand img {\n  width: 4rem;\n  height: 4rem;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  margin: 0;\n}\n\n.webpack-logo img {\n  width: 4rem;\n  height: 4rem;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  margin: 0;\n}\n\n.fa-heart {\n  color: #ba4848;\n}\n\n.navbar-text {\n  letter-spacing: 3px;\n  font-size: 1.3em;\n  font-family: \"Amatic SC\", cursive;\n  text-align: right;\n  margin-right: 4rem;\n}", "",{"version":3,"sources":["webpack://./src/components/navbar/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAEA;EACI,mBCMG;EDLH,WAAA;EACA,YAAA;EACA,gCAAA;AADJ;;AAKA;EACI,YCVQ;EDWR,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AAFJ;AAII;EACI,kBAAA;EACA,WAAA;AAFR;AAKI;EACI,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,aAAA;AAHR;AAKQ;EACA,gCAAA;EACA,uBAAA;AAHR;;AASA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;AANJ;;AASA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,SAAA;AANJ;;AASA;EACI,cCjDK;AD2CT;;AASA;EACI,mBAAA;EACA,gBAAA;EACA,iCCxCK;EDyCL,iBAAA;EACA,kBAAA;AANJ","sourcesContent":["@import '../../scss/variables';\r\n\r\n.navbar {\r\n    background: $dark;\r\n    width: 100%;\r\n    height: 4rem;\r\n    box-shadow: 0px 0px 15px $dark;\r\n\r\n}\r\n\r\n.navbar ul {\r\n    color: $mainColor;\r\n    display: flex;\r\n    list-style: none;\r\n    position: relative;\r\n    margin-left: 6rem;\r\n\r\n    li {\r\n        position: relative;\r\n        top: 1.5rem;\r\n    }\r\n\r\n    li a {\r\n        margin-left: 1.5rem;\r\n        color: $primary !important;\r\n        text-decoration: none;\r\n        padding: 1rem;\r\n\r\n        &:hover {\r\n        border-bottom: 5px solid $tertiary;\r\n        color: $mainColor !important;\r\n        }\r\n\r\n    }\r\n}\r\n\r\n.navbar-brand img {\r\n    width: 4rem;\r\n    height: 4rem;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    margin: 0;\r\n}\r\n\r\n.webpack-logo img {\r\n    width: 4rem;\r\n    height: 4rem;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 0px;\r\n    margin: 0;\r\n}\r\n\r\n.fa-heart {\r\n    color: $danger;\r\n}\r\n\r\n.navbar-text {\r\n    letter-spacing: 3px;\r\n    font-size: 1.3em;\r\n    font-family: $style2;\r\n    text-align: right;\r\n    margin-right: 4rem;\r\n}\r\n\r\n","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Cabin\", sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton {\n  text-transform: uppercase;\n}\n\n::-webkit-scrollbar {\n  width: 14px;\n}\n\n::-webkit-scrollbar-track {\n  background: #202020;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #CC0000;\n  border: 2px solid #202020;\n  margin: 2px;\n}\n\n.app-container {\n  margin-left: 10rem;\n  margin-right: 10rem;\n  margin-top: 5rem;\n  margin-bottom: 2rem;\n}\n\n#navbar-component {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 9999;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  background-image: linear-gradient(20deg, #C8A102, #ffb700);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  color: white;\n}\n\nheader {\n  font-size: 1.5em;\n  font-weight: 100;\n  min-height: 30vh;\n  letter-spacing: 5px;\n}\n\n.text-center {\n  margin: 0 auto;\n  text-align: center;\n}\n\nfooter {\n  min-height: 100vh;\n}\n\n.container {\n  margin-top: 2%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 1%;\n}\n\n.btn {\n  width: 5rem;\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: 0px;\n  letter-spacing: 1px;\n  box-shadow: 0px 2px 6px #303030;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.btn-primary {\n  background-color: #343bff;\n  color: white;\n}\n.btn-primary:hover {\n  filter: brightness(1.1);\n  color: lightgray;\n}\n\n.list {\n  list-style: none;\n  padding: 2rem;\n  background: #202020;\n  color: white;\n}\n\n.black--text {\n  color: #202020;\n}\n\n.white--text {\n  color: white;\n}\n\n.javascript--text {\n  color: #FFCC01;\n}\n\n.js {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.col {\n  justify-self: center;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(10rem, auto);\n}\n\n.row::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-block {\n  display: block;\n}\n\n.justify-center {\n  text-align: center;\n  justify-items: center;\n  margin: 0 auto;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.mt-1 {\n  margin-top: 10px;\n}\n\n.mt-2 {\n  margin-top: 20px;\n}\n\n.mt-3 {\n  margin-top: 30px;\n}\n\n.mt-4 {\n  margin-top: 40px;\n}\n\n.mt-5 {\n  margin-top: 50px;\n}\n\n.col {\n  min-width: 50%;\n}\n\n.col-1 {\n  width: 8.33%;\n}\n\n.col-2 {\n  width: 16.66%;\n}\n\n.col-3 {\n  width: 25%;\n}\n\n.col-4 {\n  width: 33.33%;\n}\n\n.col-5 {\n  width: 41.66%;\n}\n\n.col-6 {\n  width: 50%;\n}\n\n.col-7 {\n  width: 58.33%;\n}\n\n.col-8 {\n  width: 66.66%;\n}\n\n.col-9 {\n  width: 75%;\n}\n\n.col-10 {\n  width: 83.33%;\n}\n\n.col-11 {\n  width: 91.66%;\n}\n\n.col-12 {\n  width: 100%;\n}\n\n.fade {\n  animation: fade 1s ease-in-out;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAEA;EACI,gCCiBK;EDhBL,SAAA;EACA,UAAA;EACA,sBAAA;AADJ;;AAIA;EACI,yBAAA;AADJ;;AAIA;EACI,WAAA;AADJ;;AAIA;EACI,mBCTG;ADQP;;AAIA;EACI,mBCVI;EDWJ,yBAAA;EACA,WAAA;AADJ;;AAIA;EACI,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;AADJ;;AAMA;EACI,YAAA;EACA,WAAA;AAHJ;;AAMA;EACI,0DAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,YAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,kBAAA;AAHJ;;AAOA;EACI,iBAAA;AAJJ;;AAOA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAJJ;;AAOA;EACI,WAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,+BAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,yBAAA;EACA,YAAA;AAJJ;AAMI;EACI,uBAAA;EACA,gBAAA;AAJR;;AAQA;EACI,gBAAA;EACA,aAAA;EACA,mBCjGG;EDkGH,YAAA;AALJ;;AAQA;EACI,cCtGG;ADiGP;;AAQA;EACI,YAAA;AALJ;;AAQA;EACI,cCrHM;ADgHV;;AAQA;EACI,sHAAA;AALJ;;AASA;EACI,oBAAA;AANJ;;AASA;EACI,aAAA;EACA,qCAAA;EACA,mCAAA;AANJ;;AASA;EACI,WAAA;EACA,WAAA;EACA,cAAA;AANJ;;AASA;EACI,aAAA;AANJ;;AASA;EACI,cAAA;AANJ;;AASA;EACI,kBAAA;EACA,qBAAA;EACA,cAAA;AANJ;;AASA;EACI,8BAAA;AANJ;;AASA;EACI,gBAAA;AANJ;;AASA;EACI,gBAAA;AANJ;;AASA;EACI,gBAAA;AANJ;;AASA;EACI,gBAAA;AANJ;;AASA;EACI,gBAAA;AANJ;;AASA;EACI,cAAA;AANJ;;AASA;EAAQ,YAAA;AALR;;AAMA;EAAQ,aAAA;AAFR;;AAGA;EAAQ,UAAA;AACR;;AAAA;EAAQ,aAAA;AAIR;;AAHA;EAAQ,aAAA;AAOR;;AANA;EAAQ,UAAA;AAUR;;AATA;EAAQ,aAAA;AAaR;;AAZA;EAAQ,aAAA;AAgBR;;AAfA;EAAQ,UAAA;AAmBR;;AAlBA;EAAS,aAAA;AAsBT;;AArBA;EAAS,aAAA;AAyBT;;AAxBA;EAAS,WAAA;AA4BT;;AAxBA;EACI,8BAAA;AA2BJ;;AAxBA;EACI;IACI,UAAA;EA2BN;EAzBE;IACI,UAAA;EA2BN;AACF","sourcesContent":["@import 'scss/variables';\r\n\r\n* {\r\n    font-family: $style1;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    text-transform: uppercase;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 14px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: $dark;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: $poke2;\r\n    border: 2px solid $dark;\r\n    margin: 2px;\r\n}\r\n\r\n.app-container {\r\n    margin-left: 10rem;\r\n    margin-right: 10rem;\r\n    margin-top: 5rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#navbar-component {\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    z-index: 9999;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    background-image: linear-gradient(20deg, $secondary, rgb(255, 183, 0));\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    color: white;\r\n}\r\n\r\nheader {\r\n    font-size: 1.5em;\r\n    font-weight: 100;\r\n    min-height: 30vh;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n.text-center {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\nfooter {\r\n    min-height: 100vh;\r\n}\r\n\r\n.container {\r\n    margin-top: 2%;\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.btn {\r\n    width: 5rem;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n    border: 0px;\r\n    letter-spacing: 1px;\r\n    box-shadow: 0px 2px 6px $softDark;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.btn-primary {\r\n    background-color: rgb(52, 59, 255);\r\n    color: white;\r\n\r\n    &:hover {\r\n        filter: brightness(1.1);\r\n        color: rgb(211, 211, 211);\r\n    }\r\n}\r\n\r\n.list {\r\n    list-style: none;\r\n    padding: 2rem;\r\n    background: $dark;\r\n    color: white;\r\n}\r\n\r\n.black--text {\r\n    color: $dark;\r\n}\r\n\r\n.white--text {\r\n    color: white;\r\n}\r\n\r\n.javascript--text {\r\n    color: $primary;\r\n}\r\n\r\n.js {\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n\r\n.col {\r\n    justify-self: center;\r\n}\r\n\r\n.row {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-auto-rows: minmax(10rem, auto);\r\n}\r\n\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n.d-flex {\r\n    display: flex;\r\n}\r\n\r\n.d-block {\r\n    display: block;\r\n}\r\n\r\n.justify-center {\r\n    text-align: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.justify-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.mt-1 {\r\n    margin-top: 10px;\r\n}\r\n\r\n.mt-2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.mt-3 {\r\n    margin-top: 30px;\r\n}\r\n\r\n.mt-4 {\r\n    margin-top: 40px;\r\n}\r\n\r\n.mt-5 {\r\n    margin-top: 50px;\r\n}\r\n\r\n.col {\r\n    min-width: 50%;\r\n}\r\n\r\n.col-1 {width: 8.33%;}\r\n.col-2 {width: 16.66%;}\r\n.col-3 {width: 25%;}\r\n.col-4 {width: 33.33%;}\r\n.col-5 {width: 41.66%;}\r\n.col-6 {width: 50%;}\r\n.col-7 {width: 58.33%;}\r\n.col-8 {width: 66.66%;}\r\n.col-9 {width: 75%;}\r\n.col-10 {width: 83.33%;}\r\n.col-11 {width: 91.66%;}\r\n.col-12 {width: 100%;}\r\n\r\n\r\n\r\n.fade {\r\n    animation: fade 1s ease-in-out;\r\n}\r\n\r\n@keyframes fade {\r\n    from {\r\n        opacity: 0\r\n    }\r\n    to {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/404/styles.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/404/styles.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_pika404_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/pika404.png */ "./src/assets/img/pika404.png");
/* harmony import */ var _assets_img_pokeball_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/pokeball.png */ "./src/assets/img/pokeball.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pika404_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pokeball_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".secondary-background-404 {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background-image: linear-gradient(140deg, #3B4CCA, #00046f);\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(0 2%, 0 100%, 50% 100%);\n}\n\n.pika-img {\n  margin: 0 auto;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 30rem;\n  height: 35rem;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.error404 {\n  font-size: 15em;\n  color: #202020;\n  display: inline;\n}\n.error404 span {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n#number1 {\n  text-shadow: 10px 0 0 #3B4CCA, 0 10px 0 #3B4CCA, -10px 0 0 #3B4CCA, 0 -10px 0 #3B4CCA, 0 0 10px #3B4CCA;\n  color: #FFDE00;\n}\n\n#number2 {\n  width: 200px;\n  height: 200px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: inline-block;\n}\n\n#number3 {\n  text-shadow: 10px 0 0 #3B4CCA, 0 10px 0 #3B4CCA, -10px 0 0 #3B4CCA, 0 -10px 0 #3B4CCA, 0 0 10px #3B4CCA;\n  color: #FFDE00;\n}\n\n.error-text {\n  font-size: 7em;\n  letter-spacing: 5px;\n}\n\n.go-btn-404 {\n  background: #375DA9;\n  color: white;\n  font-size: 2em;\n  border: none;\n  border-radius: 15px;\n  width: 15rem;\n  height: 5rem;\n  outline: none;\n  text-shadow: 0px 0px 10px #202020;\n  box-shadow: 0px 5px 10px #303030;\n  transition: all 0.7s ease-in-out;\n}\n.go-btn-404:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  background: #202020;\n  color: #FFCC01;\n}", "",{"version":3,"sources":["webpack://./src/views/404/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAGA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,2DAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;AAFJ;;AAKA;EACI,cAAA;EACA,mDAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EACA,2BAAA;EACA,4BAAA;AAFJ;;AAKA;EACI,eAAA;EACA,cChBG;EDiBH,eAAA;AAFJ;AAII;EACI,iBAAA;EACA,kBAAA;AAFR;;AAOA;EACI,uGAAA;EACA,cCvBI;ADmBR;;AAOA;EACI,YAAA;EACA,aAAA;EACA,mDAAA;EACA,qBAAA;EACA,2BAAA;EACA,4BAAA;EACA,qBAAA;AAJJ;;AAOA;EACI,uGAAA;EACA,cCtCI;ADkCR;;AAOA;EACI,cAAA;EACA,mBAAA;AAJJ;;AASA;EACI,mBC3DO;ED4DP,YAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,gCAAA;EACA,gCAAA;AANJ;AAQI;EACI,eAAA;EACA,qBAAA;EACA,mBCrED;EDsEC,cC7EE;ADuEV","sourcesContent":["@import '../../scss/variables';\r\n\r\n\r\n.secondary-background-404 {\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-image: linear-gradient(140deg, $poke3, rgb(0, 4, 111));\r\n    width: 100%;\r\n    height: 100%;\r\n    clip-path: polygon(0 2%, 0 100%, 50% 100%);\r\n}\r\n\r\n.pika-img {\r\n    margin: 0 auto;\r\n    background: url(\"../../assets/img/pika404.png\");\r\n    width: 30rem;\r\n    height: 35rem;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.error404 {\r\n    font-size: 15em;\r\n    color: $dark;\r\n    display: inline;\r\n\r\n    span {\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n}\r\n\r\n#number1 {\r\n    text-shadow: 10px 0 0 $poke3, 0 10px 0 $poke3, -10px 0 0 $poke3, 0 -10px 0 $poke3, 0 0 10px $poke3;\r\n    color: $poke4;\r\n}\r\n\r\n#number2 {\r\n    width: 200px;\r\n    height: 200px;\r\n    background: url(\"../../assets/img/pokeball.png\");\r\n    background-size: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n}\r\n\r\n#number3 {\r\n    text-shadow: 10px 0 0 $poke3, 0 10px 0 $poke3, -10px 0 0 $poke3, 0 -10px 0 $poke3, 0 0 10px $poke3;\r\n    color: $poke4;\r\n}\r\n\r\n.error-text {\r\n    font-size: 7em;\r\n    letter-spacing: 5px;\r\n    \r\n    \r\n}\r\n\r\n.go-btn-404 {\r\n    background: $tertiary;\r\n    color: white;\r\n    font-size: 2em;\r\n    border: none;\r\n    border-radius: 15px;\r\n    width: 15rem;\r\n    height: 5rem;\r\n    outline: none;\r\n    text-shadow: 0px 0px 10px $dark;\r\n    box-shadow: 0px 5px 10px $softDark;\r\n    transition: all 0.7s ease-in-out;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        transform: scale(1.1);\r\n        background: $dark;\r\n        color: $primary;\r\n    }\r\n}","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/styles.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/styles.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_pokedialog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/pokedialog.png */ "./src/assets/img/pokedialog.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pokedialog_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n.secondary-background {\n  position: fixed;\n  top: 20px;\n  left: 20px;\n  background-image: linear-gradient(120deg, #303030, #202020, black);\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(100% 0, 50% 100%, 100% 100%);\n}\n\n.logo-image img {\n  margin: 0 auto;\n  width: 20rem;\n  height: auto;\n}\n\n#home-title {\n  font-size: 4em;\n  letter-spacing: 5px;\n  font-family: \"Amatic SC\", cursive;\n  animation: slideRight 1.5s ease-out;\n}\n\n@keyframes slideRight {\n  from {\n    opacity: 0;\n    margin-right: 2000px;\n  }\n  to {\n    opacity: 1;\n    margin-right: 0;\n  }\n}\n.oak-image img {\n  margin: 0 auto;\n  width: 15rem;\n  height: 15rem;\n  animation: slideUp 2s ease-in-out;\n  transition: 1.5s ease-in-out;\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    margin-top: 30rem;\n  }\n  to {\n    opacity: 1;\n    margin-top: 0;\n  }\n}\n.go-btn {\n  background: #375DA9;\n  color: white;\n  font-size: 1.5em;\n  border: none;\n  border-radius: 15px;\n  width: 8rem;\n  height: 3rem;\n  outline: none;\n  text-shadow: 0px 0px 10px #202020;\n  box-shadow: 0px 5px 10px #303030;\n  transition: all 0.7s ease-in-out;\n}\n.go-btn:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n  background: #202020;\n  color: #FFCC01;\n}\n\n.dialog {\n  position: absolute;\n  left: 50%;\n  padding: 0;\n  margin: 0 auto;\n}\n\n.poke-dialog {\n  border-radius: 10px;\n  position: relative;\n  margin-top: 1rem;\n  left: -50%;\n  width: 40rem;\n  height: 12.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 999;\n}\n\n.poke-dialog-text {\n  font-size: 1.8em;\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  width: 80%;\n  text-align: left;\n  font-family: \"DotGothic16\", sans-serif;\n}\n\n.version {\n  position: fixed;\n  font-family: \"Cabin\", sans-serif;\n  font-size: 1em;\n  bottom: 1rem;\n  right: 1rem;\n  color: #FFCC01;\n}", "",{"version":3,"sources":["webpack://./src/views/home/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;AADJ;;AAKA;EACI,eAAA;EACA,SAAA;EACA,UAAA;EACA,kEAAA;EACA,WAAA;EACA,YAAA;EACA,+CAAA;AAFJ;;AAKA;EACI,cAAA;EACA,YAAA;EACA,YAAA;AAFJ;;AAKA;EACI,cAAA;EACA,mBAAA;EACA,iCCTK;EDUL,mCAAA;AAFJ;;AAKA;EACI;IACI,UAAA;IACA,oBAAA;EAFN;EAIE;IACI,UAAA;IACA,eAAA;EAFN;AACF;AAKA;EAEI,cAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,4BAAA;AAJJ;;AAOA;EACI;IACI,UAAA;IACA,iBAAA;EAJN;EAME;IACI,UAAA;IACA,aAAA;EAJN;AACF;AAQA;EACI,mBC/DO;EDgEP,YAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,gCAAA;EACA,gCAAA;AANJ;AAQI;EACI,eAAA;EACA,qBAAA;EACA,mBCzED;ED0EC,cCjFE;AD2EV;;AAUA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;AAPJ;;AAUA;EACI,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,yDAAA;EACA,qBAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;AAPJ;;AAUA;EACI,gBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,sCAAA;AAPJ;;AAUA;EACI,eAAA;EACA,gCCpGK;EDqGL,cAAA;EACA,YAAA;EACA,WAAA;EACA,cC1HM;ADmHV","sourcesContent":["@import '../../scss/variables';\r\n\r\n.home {\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.secondary-background {\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 20px;\r\n    background-image: linear-gradient(120deg, $softDark, $dark, black);\r\n    width: 100%;\r\n    height: 100%;\r\n    clip-path: polygon(100% 0, 50% 100%, 100% 100%);\r\n}\r\n\r\n.logo-image img {\r\n    margin: 0 auto;\r\n    width: 20rem;\r\n    height: auto;\r\n}\r\n\r\n#home-title {\r\n    font-size: 4em;\r\n    letter-spacing: 5px;\r\n    font-family: $style2;\r\n    animation: slideRight 1.5s ease-out;\r\n}\r\n\r\n@keyframes slideRight {\r\n    from {\r\n        opacity: 0;\r\n        margin-right: 2000px;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n.oak-image img {\r\n    \r\n    margin: 0 auto;\r\n    width: 15rem;\r\n    height: 15rem;\r\n    animation: slideUp 2s ease-in-out;\r\n    transition: 1.5s ease-in-out;\r\n}\r\n\r\n@keyframes slideUp {\r\n    from {\r\n        opacity: 0;\r\n        margin-top: 30rem;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n\r\n.go-btn {\r\n    background: $tertiary;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    border: none;\r\n    border-radius: 15px;\r\n    width: 8rem;\r\n    height: 3rem;\r\n    outline: none;\r\n    text-shadow: 0px 0px 10px $dark;\r\n    box-shadow: 0px 5px 10px $softDark;\r\n    transition: all 0.7s ease-in-out;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        transform: scale(1.1);\r\n        background: $dark;\r\n        color: $primary;\r\n    }\r\n}\r\n\r\n.dialog {\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.poke-dialog {\r\n    border-radius: 10px;\r\n    position: relative;\r\n    margin-top: 1rem;\r\n    left: -50%;\r\n    width: 40rem;\r\n    height: 12.5rem;\r\n    background-image: url(\"../../assets/img/pokedialog.png\");\r\n    background-size: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    z-index: 999;\r\n}\r\n\r\n.poke-dialog-text {\r\n    font-size: 1.8em;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 10%;\r\n    width: 80%;\r\n    text-align: left;\r\n    font-family: 'DotGothic16', sans-serif;\r\n}\r\n\r\n.version {\r\n    position: fixed;\r\n    font-family: $style1;\r\n    font-size: 1em;\r\n    bottom: 1rem;\r\n    right: 1rem;\r\n    color: $primary;\r\n}\r\n","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/pokeapi/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/pokeapi/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-title {\n  color: #FFDE00;\n  font-family: \"Fira Sans Condensed\", sans-serif;\n}\n\n@media only screen and (min-width: 360px) {\n  .nav-button {\n    padding: 0rem;\n    border-radius: 10px;\n    border: 0px;\n    background: linear-gradient(180deg, #47475e, #1e3c52, #375DA9);\n    color: white;\n    text-transform: uppercase;\n    font-size: 1em;\n    font-weight: 100;\n    outline: none;\n    box-shadow: 0px 5px 10px #303030;\n    transition: all 0.5s ease;\n  }\n  .nav-button:hover:not(.disabled) {\n    transform: scale(1.1);\n    cursor: pointer;\n  }\n\n  .disabled {\n    opacity: 0.3;\n  }\n\n  .nav-list {\n    list-style: none;\n  }\n\n  .loader {\n    font-size: 5em;\n    color: white;\n    background: #3B4CCA;\n    padding: 2rem;\n    border-radius: 15px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .card-img {\n    padding-top: 2rem;\n    text-align: center;\n    display: block;\n  }\n\n  .card {\n    position: relative;\n    min-width: 30em;\n    min-height: 20rem;\n    border-radius: 15px;\n    border: 2px solid #B3A125;\n    box-shadow: 0px 10px 15px #303030;\n    margin: 0 auto;\n    justify-content: center;\n    text-align: center;\n    padding: auto;\n    transition: all 0.5s ease;\n  }\n  .card:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .card-title {\n    background-color: #202020;\n    width: 100%;\n    font-size: 2em;\n    padding-bottom: 1rem;\n  }\n\n  .card-body {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    margin-top: 0;\n    background-color: #202020;\n    font-size: 0.8rem;\n    font-weight: 100;\n    border-radius: 0px 0px 15px 15px;\n  }\n\n  .margin-cols {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .card-id {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    font-size: 2em;\n    color: #FFCC01;\n    background: #202020;\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 50%;\n  }\n}\n@media only screen and (min-width: 767px) {\n  .nav-button {\n    padding: 0.5rem;\n    border-radius: 10px;\n    border: 0px;\n    background: linear-gradient(180deg, #47475e, #1e3c52, #375DA9);\n    color: white;\n    text-transform: uppercase;\n    font-size: 1em;\n    font-weight: 100;\n    outline: none;\n    box-shadow: 0px 5px 10px #303030;\n    transition: all 0.5s ease;\n  }\n  .nav-button:hover:not(.disabled) {\n    transform: scale(1.1);\n    cursor: pointer;\n  }\n\n  .disabled {\n    opacity: 0.3;\n  }\n\n  .nav-list {\n    list-style: none;\n  }\n\n  .loader {\n    font-size: 5em;\n    color: white;\n    background: #3B4CCA;\n    padding: 2rem;\n    border-radius: 15px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .card-img {\n    padding-top: 2rem;\n    text-align: center;\n    display: block;\n  }\n\n  .card {\n    position: relative;\n    min-width: 18rem;\n    min-height: 28rem;\n    border-radius: 15px;\n    border: 2px solid #B3A125;\n    box-shadow: 0px 10px 15px #303030;\n    margin: 0 auto;\n    justify-content: center;\n    text-align: center;\n    padding: auto;\n    transition: all 0.5s ease;\n  }\n  .card:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .card-title {\n    background-color: #202020;\n    width: 100%;\n    font-size: 2em;\n    padding-bottom: 1rem;\n  }\n\n  .card-body {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    margin-top: 0;\n    background-color: #202020;\n    font-size: 0.8rem;\n    font-weight: 100;\n    border-radius: 0px 0px 15px 15px;\n  }\n\n  .margin-cols {\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .card-id {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    font-size: 1em;\n    color: #FFCC01;\n    background: #202020;\n    width: 1.8rem;\n    height: 1.8rem;\n    padding-top: 5px;\n    border-radius: 50%;\n  }\n}\n@media only screen and (min-width: 1370px) {\n  .nav-button {\n    padding: 1rem;\n    border-radius: 10px;\n    border: 0px;\n    background: linear-gradient(180deg, #47475e, #1e3c52, #375DA9);\n    color: white;\n    text-transform: uppercase;\n    font-size: 1.5em;\n    font-weight: 100;\n    outline: none;\n    box-shadow: 0px 5px 10px #303030;\n    transition: all 0.5s ease;\n  }\n  .nav-button:hover:not(.disabled) {\n    transform: scale(1.1);\n    cursor: pointer;\n  }\n\n  .disabled {\n    opacity: 0.3;\n  }\n\n  .nav-list {\n    list-style: none;\n  }\n\n  .loader {\n    font-size: 5em;\n    color: white;\n    background: #3B4CCA;\n    padding: 2rem;\n    border-radius: 15px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .card-img {\n    padding-top: 2rem;\n    text-align: center;\n    display: block;\n  }\n\n  .card {\n    position: relative;\n    min-width: 20rem;\n    min-height: 30rem;\n    border-radius: 15px;\n    border: 2px solid #B3A125;\n    box-shadow: 0px 10px 15px #303030;\n    margin: 0 auto;\n    justify-content: center;\n    text-align: center;\n    padding: auto;\n    transition: all 0.5s ease;\n  }\n  .card:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n\n  .card-title {\n    background-color: #202020;\n    width: 100%;\n    font-size: 2em;\n    padding-bottom: 1rem;\n  }\n\n  .card-body {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    margin-top: 0;\n    background-color: #202020;\n    font-size: 0.8rem;\n    font-weight: 100;\n    border-radius: 0px 0px 15px 15px;\n  }\n\n  .margin-cols {\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .card-id {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    font-size: 1.8em;\n    color: #FFCC01;\n    background: #202020;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/views/pokeapi/styles.scss","webpack://./src/scss/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import '../../scss/variables';\r\n\r\n\r\n\r\n:export {\r\n    $grassBackground: url(\"src/assets/img/grass.jpg\");\r\n}\r\n\r\n.card-title {\r\n    color: $poke4;\r\n    font-family: $style3;\r\n}\r\n\r\n// ******* MOBILE RESPONSIVE ******* //\r\n@media only screen and (min-width: 360px) {\r\n    .nav-button {\r\n        padding: 0rem;\r\n        border-radius: 10px;\r\n        border: 0px;\r\n        background: linear-gradient(180deg, rgb(71, 71, 94), rgb(30, 60, 82), $tertiary);\r\n        color: white;\r\n        text-transform: uppercase;\r\n        font-size: 1em;\r\n        font-weight: 100;\r\n        outline: none;\r\n        box-shadow: 0px 5px 10px $softDark;\r\n        transition: $transFast;\r\n        \r\n    \r\n        &:hover:not(.disabled) {\r\n            transform: scale(1.1);\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    \r\n    .disabled {\r\n        opacity: 0.3;\r\n    }\r\n    \r\n    .nav-list {\r\n        list-style: none;\r\n    }\r\n    \r\n    .loader {\r\n        font-size: 5em;\r\n        color: white;\r\n        background: $poke3;\r\n        padding: 2rem;\r\n        border-radius: 15px;\r\n        margin: 0 auto;\r\n        text-align: center;\r\n    }\r\n    \r\n    .card-img {\r\n        padding-top: 2rem;\r\n        text-align: center;\r\n        display: block;\r\n    }\r\n    \r\n    .card {\r\n        position: relative;\r\n        min-width: 30em;\r\n        min-height: 20rem;\r\n        border-radius: 15px;\r\n        border: 2px solid $poke5;\r\n        box-shadow: 0px 10px 15px $softDark;\r\n        margin: 0 auto;\r\n        justify-content: center;\r\n        text-align: center;\r\n        padding: auto;\r\n        transition: all 0.5s ease;\r\n    \r\n        &:hover {\r\n            cursor: pointer;\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n    \r\n    .card-title {\r\n        background-color: $dark;\r\n        width: 100%;\r\n        font-size: 2em;\r\n        padding-bottom: 1rem;\r\n    }\r\n    \r\n    .card-body {\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        margin-top: 0;\r\n        background-color: $dark;\r\n        font-size: 0.8rem;\r\n        font-weight: 100;\r\n        border-radius: 0px 0px 15px 15px;\r\n    }\r\n    \r\n    .margin-cols {\r\n        margin-top: 2rem;\r\n        margin-bottom: 2rem;\r\n    }\r\n    \r\n    .card-id {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 15px;\r\n        font-size: 2em;\r\n        color: $primary;\r\n        background: $dark;\r\n        width: 2.5rem;\r\n        height: 2.5rem;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n}\r\n// ******* LAPTOP RESPONSIVE ******* //\r\n@media only screen and (min-width: 767px) {\r\n    .nav-button {\r\n        padding: 0.5rem;\r\n        border-radius: 10px;\r\n        border: 0px;\r\n        background: linear-gradient(180deg, rgb(71, 71, 94), rgb(30, 60, 82), $tertiary);\r\n        color: white;\r\n        text-transform: uppercase;\r\n        font-size: 1em;\r\n        font-weight: 100;\r\n        outline: none;\r\n        box-shadow: 0px 5px 10px $softDark;\r\n        transition: $transFast;\r\n        \r\n    \r\n        &:hover:not(.disabled) {\r\n            transform: scale(1.1);\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    \r\n    .disabled {\r\n        opacity: 0.3;\r\n    }\r\n    \r\n    .nav-list {\r\n        list-style: none;\r\n    }\r\n    \r\n    .loader {\r\n        font-size: 5em;\r\n        color: white;\r\n        background: $poke3;\r\n        padding: 2rem;\r\n        border-radius: 15px;\r\n        margin: 0 auto;\r\n        text-align: center;\r\n    }\r\n    \r\n    .card-img {\r\n        padding-top: 2rem;\r\n        text-align: center;\r\n        display: block;\r\n    }\r\n    \r\n    .card {\r\n        position: relative;\r\n        min-width: 18rem;\r\n        min-height: 28rem;\r\n        border-radius: 15px;\r\n        border: 2px solid $poke5;\r\n        box-shadow: 0px 10px 15px $softDark;\r\n        margin: 0 auto;\r\n        justify-content: center;\r\n        text-align: center;\r\n        padding: auto;\r\n        transition: all 0.5s ease;\r\n    \r\n        &:hover {\r\n            cursor: pointer;\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n    \r\n    .card-title {\r\n        background-color: $dark;\r\n        width: 100%;\r\n        font-size: 2em;\r\n        padding-bottom: 1rem;\r\n\r\n    }\r\n    \r\n    .card-body {\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        margin-top: 0;\r\n        background-color: $dark;\r\n        font-size: 0.8rem;\r\n        font-weight: 100;\r\n        border-radius: 0px 0px 15px 15px;\r\n    }\r\n    \r\n    .margin-cols {\r\n        margin-top: 5rem;\r\n        margin-bottom: 5rem;\r\n    }\r\n    \r\n    .card-id {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 15px;\r\n        font-size: 1em;\r\n        color: $primary;\r\n        background: $dark;\r\n        width: 1.8rem;\r\n        height: 1.8rem;\r\n        padding-top: 5px;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n}\r\n\r\n// ******* DESKTOP RESPONSIVE ******* //\r\n@media only screen and (min-width: 1370px) {\r\n    .nav-button {\r\n        padding: 1rem;\r\n        border-radius: 10px;\r\n        border: 0px;\r\n        background: linear-gradient(180deg, rgb(71, 71, 94), rgb(30, 60, 82), $tertiary);\r\n        color: white;\r\n        text-transform: uppercase;\r\n        font-size: 1.5em;\r\n        font-weight: 100;\r\n        outline: none;\r\n        box-shadow: 0px 5px 10px $softDark;\r\n        transition: $transFast;\r\n        \r\n    \r\n        &:hover:not(.disabled) {\r\n            transform: scale(1.1);\r\n            cursor: pointer;\r\n        }\r\n    }\r\n    \r\n    .disabled {\r\n        opacity: 0.3;\r\n    }\r\n    \r\n    .nav-list {\r\n        list-style: none;\r\n    }\r\n    \r\n    .loader {\r\n        font-size: 5em;\r\n        color: white;\r\n        background: $poke3;\r\n        padding: 2rem;\r\n        border-radius: 15px;\r\n        margin: 0 auto;\r\n        text-align: center;\r\n    }\r\n    \r\n    .card-img {\r\n        padding-top: 2rem;\r\n        text-align: center;\r\n        display: block;\r\n    }\r\n    \r\n    .card {\r\n        position: relative;\r\n        min-width: 20rem;\r\n        min-height: 30rem;\r\n        border-radius: 15px;\r\n        border: 2px solid $poke5;\r\n        box-shadow: 0px 10px 15px $softDark;\r\n        margin: 0 auto;\r\n        justify-content: center;\r\n        text-align: center;\r\n        padding: auto;\r\n        transition: all 0.5s ease;\r\n    \r\n        &:hover {\r\n            cursor: pointer;\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n    \r\n    .card-title {\r\n        background-color: $dark;\r\n        width: 100%;\r\n        font-size: 2em;\r\n        padding-bottom: 1rem;\r\n    }\r\n    \r\n    .card-body {\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: 100%;\r\n        padding: 1rem;\r\n        margin-top: 0;\r\n        background-color: $dark;\r\n        font-size: 0.8rem;\r\n        font-weight: 100;\r\n        border-radius: 0px 0px 15px 15px;\r\n    }\r\n    \r\n    .margin-cols {\r\n        margin-top: 5rem;\r\n        margin-bottom: 5rem;\r\n    }\r\n    \r\n    .card-id {\r\n        position: absolute;\r\n        top: 15px;\r\n        left: 15px;\r\n        font-size: 1.8em;\r\n        color: $primary;\r\n        background: $dark;\r\n        width: 3rem;\r\n        height: 3rem;\r\n        border-radius: 50%;\r\n    }\r\n    \r\n}\r\n","// Colors\r\n$mainColor: white;\r\n$primary: #FFCC01;\r\n$secondary: #C8A102;\r\n$tertiary: #375DA9;\r\n$success:   #48a266;\r\n$danger: #ba4848;\r\n$info: #589fd5;\r\n$softDark: #303030;\r\n$dark: #202020;\r\n\r\n$poke1: #FF0000;\r\n$poke2: #CC0000;\r\n$poke3: #3B4CCA;\r\n$poke4: #FFDE00;\r\n$poke5: #B3A125;\r\n\r\n\r\n// Font-families\r\n\r\n$style1: 'Cabin', sans-serif;\r\n$style2: 'Amatic SC', cursive;\r\n$style3: 'Fira Sans Condensed', sans-serif;\r\n\r\n// Transitions\r\n\r\n$transFast: all 0.5s ease;"],"sourceRoot":""}]);
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
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/musicPlayer/musicPlayer.html":
/*!*****************************************************!*\
  !*** ./src/components/musicPlayer/musicPlayer.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_C_Users_Ka_Desktop_Proyectos_20JS_pokeappv2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file:///C:/Users/Ka/Desktop/Proyectos%20JS/pokeappv2/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var file_C_Users_Ka_Desktop_Proyectos_20JS_pokeappv2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_C_Users_Ka_Desktop_Proyectos_20JS_pokeappv2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/music/pokemusic.mp3 */ "./src/assets/music/pokemusic.mp3"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = file_C_Users_Ka_Desktop_Proyectos_20JS_pokeappv2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"fixed-footer\">\r\n    <div class=\"musicPlayer fade\">\r\n        <div class=\"row justify-between\">\r\n            <div class=\"col-6\">\r\n                <div class=\"music-player-card\">\r\n                    <button class=\"music-player-play\" id=\"playBtn\"><i class=\"fas fa-play\"></i></button>\r\n                    <button class=\"music-player-pause\" id=\"pauseBtn\"><i class=\"fas fa-pause\"></i></button>\r\n                    <audio src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" hidden id=\"music\"></audio>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"music-player-text\">\r\n                    Styles made with CSS / SCSS\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/navbar/navbar.html":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"navbar fade\">\r\n    <div class=\"navbar-brand\"></div>\r\n    <div class=\"webpack-logo\"></div>\r\n    <ul>\r\n        <li>\r\n            \r\n            <a href=\"#/\"><i class=\"fas fa-home\"></i></a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#/app\">API</a>\r\n        </li>\r\n        <li>\r\n            <div class=\"git-icon\">\r\n                <a href=\"https://github.com/Lithos-hub/JS-pokevanilla\">\r\n                <i class=\"fab fa-github white--text\"></i>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n    <div class=\"navbar-text\">\r\n        Made with pure <i class=\"fas fa-heart\"></i>, pure <span class=\"javascript--text js\">JS</span> and\r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/views/404/404.html":
/*!********************************!*\
  !*** ./src/views/404/404.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"secondary-background-404\">.</div>\r\n<div class=\"text-center justify-center\">\r\n    <div class=\"row d-block justify-center\">\r\n        <h1 class=\"error404\">Error<span id=\"number1\">4</span><div id=\"number2\"></div><span id=\"number3\">4</span></h1>\r\n        <h1 class=\"error-text\">Oops, you shouldn't be here!\r\n        </h1>\r\n        <a href=\"/\">\r\n            <button type=\"button\" class=\"go-btn-404\">Go home</button>\r\n        </a>\r\n        <div class=\"pika-img\"></div>\r\n    </div>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/views/home/home.html":
/*!**********************************!*\
  !*** ./src/views/home/home.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"secondary-background\">.</div>\r\n        <div class=\"home\">\r\n            <div class=\"text-center black--text justify-center fade\">\r\n                <div class=\"row d-block justify-center\">\r\n                    <h1 class=\"mt-2\">Powered with</h1>\r\n                    <div class=\"logo-image\"></div>\r\n                    \r\n                    <h1 class=\"mt-5\" id=\"home-title\">Welcome to the Vanilla PokéAPP</h1>\r\n                    <div class=\"oak-image mt-2 mb-2\"></div>\r\n                    <a href=\"/#/app\">\r\n                    <button class=\"go-btn\" type=\"button\">Go</button>\r\n                    </a>\r\n                    <div class=\"dialog\">\r\n                        <div class=\"poke-dialog\">\r\n                            <div class=\"poke-dialog-text\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"image\"></div>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"version\"></div>\r\n    </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/views/pokeapi/api.html":
/*!************************************!*\
  !*** ./src/views/pokeapi/api.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"toolbar fade\">\r\n    <ul class=\"d-flex nav-list justify-between\">\r\n        <li>\r\n            <button class=\"nav-button\">First generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Second generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Thrid generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Forth generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Fith generation</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"container-fluid justify-center fade\">\r\n\r\n        <div class=\"row text-center\" id=\"pokeList\"></div>\r\n\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/musicPlayer/styles.scss":
/*!************************************************!*\
  !*** ./src/components/musicPlayer/styles.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/musicPlayer/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/navbar/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/styles.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/views/404/styles.scss":
/*!***********************************!*\
  !*** ./src/views/404/styles.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/404/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/views/home/styles.scss":
/*!************************************!*\
  !*** ./src/views/home/styles.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/home/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/views/pokeapi/styles.scss":
/*!***************************************!*\
  !*** ./src/views/pokeapi/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/views/pokeapi/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ "./src/assets/icons/bug.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/bug.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7abee3dd4c129bccf5fe.svg";

/***/ }),

/***/ "./src/assets/icons/dark.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/dark.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37598045d6733660743c.svg";

/***/ }),

/***/ "./src/assets/icons/dragon.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/dragon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1f160b3d7abe1af57f2.svg";

/***/ }),

/***/ "./src/assets/icons/electric.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/electric.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64903ea495f073ec8c7a.svg";

/***/ }),

/***/ "./src/assets/icons/fairy.svg":
/*!************************************!*\
  !*** ./src/assets/icons/fairy.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2595a20bf8b4d155ea3.svg";

/***/ }),

/***/ "./src/assets/icons/fighting.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/fighting.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "397a90ff9b511b7b3c38.svg";

/***/ }),

/***/ "./src/assets/icons/fire.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/fire.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bfc43baec211174f9a0.svg";

/***/ }),

/***/ "./src/assets/icons/flying.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/flying.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee1e7cf2fb7c5124ff52.svg";

/***/ }),

/***/ "./src/assets/icons/ghost.svg":
/*!************************************!*\
  !*** ./src/assets/icons/ghost.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3689500ffc4ad97ea38a.svg";

/***/ }),

/***/ "./src/assets/icons/grass.svg":
/*!************************************!*\
  !*** ./src/assets/icons/grass.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a2ede294dbdb75de249.svg";

/***/ }),

/***/ "./src/assets/icons/ground.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/ground.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25e07de42bbffeb6145e.svg";

/***/ }),

/***/ "./src/assets/icons/ice.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/ice.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c17b4dcd4aa8f87edf8.svg";

/***/ }),

/***/ "./src/assets/icons/normal.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/normal.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e34953aca65fec789575.svg";

/***/ }),

/***/ "./src/assets/icons/poison.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/poison.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c16fe7dae6f714b9bf46.svg";

/***/ }),

/***/ "./src/assets/icons/psychic.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/psychic.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd9f2def413ef91ed84e.svg";

/***/ }),

/***/ "./src/assets/icons/rock.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/rock.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3d37880cb03cb300357.svg";

/***/ }),

/***/ "./src/assets/icons/steel.svg":
/*!************************************!*\
  !*** ./src/assets/icons/steel.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bf4c56c4377aa62d085.svg";

/***/ }),

/***/ "./src/assets/icons/water.svg":
/*!************************************!*\
  !*** ./src/assets/icons/water.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef644eb81027942749c4.svg";

/***/ }),

/***/ "./src/assets/img/bug.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bug.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2470876f9593b10091c.jpg";

/***/ }),

/***/ "./src/assets/img/dark.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/dark.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4684c287bc7eff5122.jpg";

/***/ }),

/***/ "./src/assets/img/dragon.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/dragon.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9284cf644f33eeac346c.jpg";

/***/ }),

/***/ "./src/assets/img/electric.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/electric.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28a94f59a06b42a1c440.jpg";

/***/ }),

/***/ "./src/assets/img/fairy.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/fairy.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebf95c15b0016306092b.jpg";

/***/ }),

/***/ "./src/assets/img/fighting.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/fighting.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "216bc84688ef52f1522d.jpg";

/***/ }),

/***/ "./src/assets/img/fire.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/fire.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce59a33d7771132150e9.jpg";

/***/ }),

/***/ "./src/assets/img/flying.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/flying.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a576590fbcb8af84e53.jpg";

/***/ }),

/***/ "./src/assets/img/ghost.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/ghost.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f15e615ffd7a0a465a95.jpg";

/***/ }),

/***/ "./src/assets/img/grass.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/grass.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e498d5db0c656fac47b7.jpg";

/***/ }),

/***/ "./src/assets/img/ground.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/ground.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "822acae255595d3e87c6.jpg";

/***/ }),

/***/ "./src/assets/img/ice.jpg":
/*!********************************!*\
  !*** ./src/assets/img/ice.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0682c2910e9a86c390a.jpg";

/***/ }),

/***/ "./src/assets/img/js.png":
/*!*******************************!*\
  !*** ./src/assets/img/js.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f05254fe275ea3a5a2a.png";

/***/ }),

/***/ "./src/assets/img/normal.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/normal.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6537c8a5c83659571a39.jpg";

/***/ }),

/***/ "./src/assets/img/oak.png":
/*!********************************!*\
  !*** ./src/assets/img/oak.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b04ae814b6dc7719fbe4.png";

/***/ }),

/***/ "./src/assets/img/pika404.png":
/*!************************************!*\
  !*** ./src/assets/img/pika404.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa22420882431c6bc6bf.png";

/***/ }),

/***/ "./src/assets/img/poison.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/poison.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f81a3a21fa33f5714e7.jpg";

/***/ }),

/***/ "./src/assets/img/pokeapi.png":
/*!************************************!*\
  !*** ./src/assets/img/pokeapi.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "183163708356844ec197.png";

/***/ }),

/***/ "./src/assets/img/pokeball.png":
/*!*************************************!*\
  !*** ./src/assets/img/pokeball.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7070c21358c3a889493b.png";

/***/ }),

/***/ "./src/assets/img/pokedialog.png":
/*!***************************************!*\
  !*** ./src/assets/img/pokedialog.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f635441722a38f13179.png";

/***/ }),

/***/ "./src/assets/img/psychic.jpg":
/*!************************************!*\
  !*** ./src/assets/img/psychic.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f0404d375e1e48866ac.jpg";

/***/ }),

/***/ "./src/assets/img/rock.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/rock.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd88bbcc20c53c8d3f9b.jpg";

/***/ }),

/***/ "./src/assets/img/steel.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/steel.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1af4ccce6813cebff35d.jpg";

/***/ }),

/***/ "./src/assets/img/unknown.jpg":
/*!************************************!*\
  !*** ./src/assets/img/unknown.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e9c5915458e90c8cc77.jpg";

/***/ }),

/***/ "./src/assets/img/water.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/water.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1bd25b9b2787c18a729.jpg";

/***/ }),

/***/ "./src/assets/img/webpack.png":
/*!************************************!*\
  !*** ./src/assets/img/webpack.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bca6d5e9db57d6210aee.png";

/***/ }),

/***/ "./src/assets/music/pokemusic.mp3":
/*!****************************************!*\
  !*** ./src/assets/music/pokemusic.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da2c2952880d79db2b78.mp3";

/***/ }),

/***/ "./src/controllers/404.controller.js":
/*!*******************************************!*\
  !*** ./src/controllers/404.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_404_404_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/404/404.html */ "./src/views/404/404.html");
/* harmony import */ var _views_404_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/404/styles.scss */ "./src/views/404/styles.scss");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const divElement = document.createElement('div');

    divElement.innerHTML = _views_404_404_html__WEBPACK_IMPORTED_MODULE_0__.default;

    return divElement;
});

/***/ }),

/***/ "./src/controllers/api.controller.js":
/*!*******************************************!*\
  !*** ./src/controllers/api.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pokeapi_api_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pokeapi/api.html */ "./src/views/pokeapi/api.html");
/* harmony import */ var _views_pokeapi_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pokeapi/styles.scss */ "./src/views/pokeapi/styles.scss");
/* harmony import */ var _assets_img_bug_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/bug.jpg */ "./src/assets/img/bug.jpg");
/* harmony import */ var _assets_img_dark_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/dark.jpg */ "./src/assets/img/dark.jpg");
/* harmony import */ var _assets_img_dragon_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/dragon.jpg */ "./src/assets/img/dragon.jpg");
/* harmony import */ var _assets_img_electric_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/electric.jpg */ "./src/assets/img/electric.jpg");
/* harmony import */ var _assets_img_fairy_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/img/fairy.jpg */ "./src/assets/img/fairy.jpg");
/* harmony import */ var _assets_img_fighting_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/img/fighting.jpg */ "./src/assets/img/fighting.jpg");
/* harmony import */ var _assets_img_fire_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/img/fire.jpg */ "./src/assets/img/fire.jpg");
/* harmony import */ var _assets_img_flying_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/flying.jpg */ "./src/assets/img/flying.jpg");
/* harmony import */ var _assets_img_ghost_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/ghost.jpg */ "./src/assets/img/ghost.jpg");
/* harmony import */ var _assets_img_grass_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/img/grass.jpg */ "./src/assets/img/grass.jpg");
/* harmony import */ var _assets_img_ground_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/img/ground.jpg */ "./src/assets/img/ground.jpg");
/* harmony import */ var _assets_img_ice_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/img/ice.jpg */ "./src/assets/img/ice.jpg");
/* harmony import */ var _assets_img_normal_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/img/normal.jpg */ "./src/assets/img/normal.jpg");
/* harmony import */ var _assets_img_poison_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/img/poison.jpg */ "./src/assets/img/poison.jpg");
/* harmony import */ var _assets_img_psychic_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/img/psychic.jpg */ "./src/assets/img/psychic.jpg");
/* harmony import */ var _assets_img_rock_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/img/rock.jpg */ "./src/assets/img/rock.jpg");
/* harmony import */ var _assets_img_steel_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/img/steel.jpg */ "./src/assets/img/steel.jpg");
/* harmony import */ var _assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/img/water.jpg */ "./src/assets/img/water.jpg");
/* harmony import */ var _assets_img_unknown_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/img/unknown.jpg */ "./src/assets/img/unknown.jpg");
/* harmony import */ var _assets_icons_bug_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/bug.svg */ "./src/assets/icons/bug.svg");
/* harmony import */ var _assets_icons_dark_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/dark.svg */ "./src/assets/icons/dark.svg");
/* harmony import */ var _assets_icons_dragon_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/dragon.svg */ "./src/assets/icons/dragon.svg");
/* harmony import */ var _assets_icons_electric_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/electric.svg */ "./src/assets/icons/electric.svg");
/* harmony import */ var _assets_icons_fairy_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/fairy.svg */ "./src/assets/icons/fairy.svg");
/* harmony import */ var _assets_icons_fighting_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/fighting.svg */ "./src/assets/icons/fighting.svg");
/* harmony import */ var _assets_icons_fire_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/fire.svg */ "./src/assets/icons/fire.svg");
/* harmony import */ var _assets_icons_flying_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/flying.svg */ "./src/assets/icons/flying.svg");
/* harmony import */ var _assets_icons_ghost_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/icons/ghost.svg */ "./src/assets/icons/ghost.svg");
/* harmony import */ var _assets_icons_grass_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/icons/grass.svg */ "./src/assets/icons/grass.svg");
/* harmony import */ var _assets_icons_ground_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/icons/ground.svg */ "./src/assets/icons/ground.svg");
/* harmony import */ var _assets_icons_ice_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/icons/ice.svg */ "./src/assets/icons/ice.svg");
/* harmony import */ var _assets_icons_normal_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/icons/normal.svg */ "./src/assets/icons/normal.svg");
/* harmony import */ var _assets_icons_poison_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../assets/icons/poison.svg */ "./src/assets/icons/poison.svg");
/* harmony import */ var _assets_icons_psychic_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../assets/icons/psychic.svg */ "./src/assets/icons/psychic.svg");
/* harmony import */ var _assets_icons_rock_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../assets/icons/rock.svg */ "./src/assets/icons/rock.svg");
/* harmony import */ var _assets_icons_steel_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../assets/icons/steel.svg */ "./src/assets/icons/steel.svg");
/* harmony import */ var _assets_icons_water_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../assets/icons/water.svg */ "./src/assets/icons/water.svg");



// Backgrounds card




















// Type icons




















const getPokes = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await res.json();     
    } catch (error) {
        console.log(error)
    } 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
    // Create the view
    const divElement = document.createElement('div')
    divElement.innerHTML = _views_pokeapi_api_html__WEBPACK_IMPORTED_MODULE_0__.default;


    // Assign the start and end points
    let start = 1
    let end = 150
    
    // Create the array where pokemon will be storaged
    const pokeArr = []
    
    // for loop to get each pokemon with an id
    for(let id = start; id <= end; id++) {

        const pokes = await getPokes(id);
        pokeArr.push(pokes)
        
    }
    
    // assign the pokeList const to #pokeList element
    const pokeList = divElement.querySelector('#pokeList')
    
    // Verify that the array has been corrected created
    console.log(pokeArr)
    

    // Array for the types
    const typesList = []

    // for loop to get each pokemon information and create an html element with that info
    pokeArr.forEach(poke => {
        typesList.push(poke.types[0].type.name)

        let background = ''
        let icon = ''

        switch(poke.types[0].type.name) {
            case "grass":
                background = _assets_img_grass_jpg__WEBPACK_IMPORTED_MODULE_11__;
                icon = _assets_icons_grass_svg__WEBPACK_IMPORTED_MODULE_30__;
                break;
            case "fire":
                background = _assets_img_fire_jpg__WEBPACK_IMPORTED_MODULE_8__;
                icon = _assets_icons_fire_svg__WEBPACK_IMPORTED_MODULE_27__;
                break;
            case "water":
                background = _assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_19__;
                icon = _assets_icons_water_svg__WEBPACK_IMPORTED_MODULE_38__;
                break;
            case "bug":
                background = _assets_img_bug_jpg__WEBPACK_IMPORTED_MODULE_2__;
                icon = _assets_icons_bug_svg__WEBPACK_IMPORTED_MODULE_21__;
                break;
            case "normal":
                background = _assets_img_normal_jpg__WEBPACK_IMPORTED_MODULE_14__;
                icon = _assets_icons_normal_svg__WEBPACK_IMPORTED_MODULE_33__;
                break;
            case "dark":
                background = _assets_img_dark_jpg__WEBPACK_IMPORTED_MODULE_3__;
                icon = _assets_icons_dark_svg__WEBPACK_IMPORTED_MODULE_22__;
                break;
            case "dragon":
                background = _assets_img_dragon_jpg__WEBPACK_IMPORTED_MODULE_4__;
                icon = _assets_icons_dragon_svg__WEBPACK_IMPORTED_MODULE_23__;
                break;
            case "fairy":
                background = _assets_img_fairy_jpg__WEBPACK_IMPORTED_MODULE_6__;
                icon = _assets_icons_fairy_svg__WEBPACK_IMPORTED_MODULE_25__;
                break;
            case "fighting":
                background = _assets_img_fighting_jpg__WEBPACK_IMPORTED_MODULE_7__;
                icon = _assets_icons_fighting_svg__WEBPACK_IMPORTED_MODULE_26__;
                break;
            case "ghost":
                background = _assets_img_ghost_jpg__WEBPACK_IMPORTED_MODULE_10__;
                icon = _assets_icons_ghost_svg__WEBPACK_IMPORTED_MODULE_29__;
                break;
            case "ground":
                background = _assets_img_ground_jpg__WEBPACK_IMPORTED_MODULE_12__;
                icon = _assets_icons_ground_svg__WEBPACK_IMPORTED_MODULE_31__;
                break;
            case "ice":
                background = _assets_img_ice_jpg__WEBPACK_IMPORTED_MODULE_13__;
                icon = _assets_icons_ice_svg__WEBPACK_IMPORTED_MODULE_32__;
                break;
            case "poison":
                background = _assets_img_poison_jpg__WEBPACK_IMPORTED_MODULE_15__;
                icon = _assets_icons_poison_svg__WEBPACK_IMPORTED_MODULE_34__;
                break;
            case "psychic":
                background = _assets_img_psychic_jpg__WEBPACK_IMPORTED_MODULE_16__;
                icon = _assets_icons_psychic_svg__WEBPACK_IMPORTED_MODULE_35__;
                break;
            case "rock":
                background = _assets_img_rock_jpg__WEBPACK_IMPORTED_MODULE_17__;
                icon = _assets_icons_rock_svg__WEBPACK_IMPORTED_MODULE_36__;
                break;
            case "steel":
                background = _assets_img_steel_jpg__WEBPACK_IMPORTED_MODULE_18__;
                icon = _assets_icons_steel_svg__WEBPACK_IMPORTED_MODULE_37__;
                break;
            case "flying":
                background = _assets_img_flying_jpg__WEBPACK_IMPORTED_MODULE_9__;
                icon = _assets_icons_flying_svg__WEBPACK_IMPORTED_MODULE_28__;
                break;
            case "electric":
                background = _assets_img_electric_jpg__WEBPACK_IMPORTED_MODULE_5__;
                icon = _assets_icons_electric_svg__WEBPACK_IMPORTED_MODULE_24__;
                break;
            default:
                background = _assets_img_unknown_jpg__WEBPACK_IMPORTED_MODULE_20__;
        }

        pokeList.innerHTML += `
        <div class="col col-4 margin-cols">
            <div class="card" style="background-image: url(${background}); background-size: 100%; background-position: center; background-attachment: fixed">
                <div class="card-id">${poke.id}</div>
                    <div class="card-img">
                        <img src="${poke.sprites.other.dream_world.front_default}" width="150">
                    </div>
                    <div class="card-body">
                            <div class="card-title mb-5">
                                ${poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }
                            </div>
                            <ul style="list-style: none">
                            <li>
                            Main type:
                            </li>
                            <li>
                            <img src="${icon}" width="30" height="30" class="mt-1">
                            </li>
                            <li class="mt-2">
                            Weight: ${poke.weight}
                            </li>
                            <li>
                            Base experience: ${poke.base_experience}
                            </li>
                        
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        `;        
        
    })
    
    
    
    // console.log(typesList)
    
    

    

    
    return divElement;
});


/***/ }),

/***/ "./src/controllers/home.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/home.controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_home_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home/home.html */ "./src/views/home/home.html");
/* harmony import */ var _views_home_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/home/styles.scss */ "./src/views/home/styles.scss");
/* harmony import */ var _assets_img_oak_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/oak.png */ "./src/assets/img/oak.png");
/* harmony import */ var _assets_img_pokeapi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/pokeapi.png */ "./src/assets/img/pokeapi.png");



// Images imports



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {

    // Images assignments
    const oakimg = new Image();
    oakimg.src = _assets_img_oak_png__WEBPACK_IMPORTED_MODULE_2__;

    const logoimg = new Image();
    logoimg.src = _assets_img_pokeapi_png__WEBPACK_IMPORTED_MODULE_3__;
    
    // View creation
    const divElement = document.createElement('div');
    divElement.innerHTML = _views_home_home_html__WEBPACK_IMPORTED_MODULE_0__.default;
    /************* */

    // Images creation
    
    const logoDIV = divElement.querySelector('.logo-image');
    logoDIV.appendChild(logoimg);
    
    const oakDIV = divElement.querySelector('.oak-image');
    oakDIV.appendChild(oakimg);
    
    
    const dialog = divElement.querySelector('.poke-dialog-text');
    const version = divElement.querySelector(".version")
    const gobtn = divElement.querySelector(".go-btn")

    gobtn.style.opacity = 0

        const text = "Welcome to the world of POKéMON! I'm Oak, the POKéMON professor. Enter when you are ready!"
        let i = 0;
        const speed = 40;

        function type() {
            if (i < text.length) {
                dialog.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed)
            }
            if(i === text.length) {
                gobtn.style.opacity = 1
            }
        }
        
        type()
    
    const majorVersion = 1
    const minorVersion = 0
    const patch = 0
        
    version.insertAdjacentText('afterbegin', `v. ${majorVersion}.${minorVersion}.${patch}`)

    return divElement;

});




/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "components": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.controller */ "./src/controllers/home.controller.js");
/* harmony import */ var _api_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.controller */ "./src/controllers/api.controller.js");
/* harmony import */ var _404_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404.controller */ "./src/controllers/404.controller.js");
/* harmony import */ var _navbar_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.controller */ "./src/controllers/navbar.controller.js");
/* harmony import */ var _musicPlayer_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./musicPlayer.controller */ "./src/controllers/musicPlayer.controller.js");







const pages = {
    home: _home_controller__WEBPACK_IMPORTED_MODULE_0__.default,
    api: _api_controller__WEBPACK_IMPORTED_MODULE_1__.default,
    notfound: _404_controller__WEBPACK_IMPORTED_MODULE_2__.default
}

const components = {
    navbar: _navbar_controller__WEBPACK_IMPORTED_MODULE_3__.default,
    musicplayer: _musicPlayer_controller__WEBPACK_IMPORTED_MODULE_4__.default
}



/***/ }),

/***/ "./src/controllers/musicPlayer.controller.js":
/*!***************************************************!*\
  !*** ./src/controllers/musicPlayer.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_musicPlayer_musicPlayer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/musicPlayer/musicPlayer.html */ "./src/components/musicPlayer/musicPlayer.html");
/* harmony import */ var _components_musicPlayer_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/musicPlayer/styles.scss */ "./src/components/musicPlayer/styles.scss");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const divElement = document.createElement('div');
    divElement.innerHTML = _components_musicPlayer_musicPlayer_html__WEBPACK_IMPORTED_MODULE_0__.default;

    const playBtn = divElement.querySelector("#playBtn")
    const pauseBtn = divElement.querySelector("#pauseBtn")
    const music = divElement.querySelector("#music")


    // entering the app, the play button will be shown but not the pause button
    playBtn.style.display = "block"

    if(playBtn.style.display === "block") {
        pauseBtn.style.display = "none"
    }

    // Click options when press the play button
    playBtn.addEventListener('click', () => {
        pauseBtn.style.display = "block"
        playBtn.style.display = "none"
        music.volume = 0.5;
        music.play()
        }      
    );
    
    // Click options when press the pause button
    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = "none"
        playBtn.style.display = "block"
        if(music.play()){
            music.pause()
        }
    }
    );

    return divElement;
});

/***/ }),

/***/ "./src/controllers/navbar.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/navbar.controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_navbar_navbar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar/navbar.html */ "./src/components/navbar/navbar.html");
/* harmony import */ var _components_navbar_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/styles.scss */ "./src/components/navbar/styles.scss");
/* harmony import */ var _assets_img_js_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/js.png */ "./src/assets/img/js.png");
/* harmony import */ var _assets_img_webpack_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/webpack.png */ "./src/assets/img/webpack.png");



// Images imports



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {

    // Images creation
    const brandlogo = new Image();
    brandlogo.src = _assets_img_js_png__WEBPACK_IMPORTED_MODULE_2__;

    const webpacklogo = new Image();
    webpacklogo.src = _assets_img_webpack_png__WEBPACK_IMPORTED_MODULE_3__
    
    // View creation
    const divElement = document.createElement('div')
    divElement.innerHTML = _components_navbar_navbar_html__WEBPACK_IMPORTED_MODULE_0__.default

    // Image div assignment
    const brandDiv = divElement.querySelector(".navbar-brand");
    const webpackLogoDiv = divElement.querySelector(".webpack-logo");

    // Images generation
    brandDiv.appendChild(brandlogo);
    webpackLogoDiv.appendChild(webpacklogo);
    
    


    return divElement;
});


/***/ }),

/***/ "./src/router/index.routes.js":
/*!************************************!*\
  !*** ./src/router/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _controllers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index.js */ "./src/controllers/index.js");


const content = document.querySelector("#root");
const navbarComponent = document.querySelector("#navbar-component")
const musicPlayerComponent = document.querySelector("#musicPlayer-component")


// Components
// navbarComponent.appendChild(components.navbar())
// musicPlayerComponent.appendChild(components.musicplayer())

function showComponents() {
    navbarComponent.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.components.navbar())
    musicPlayerComponent.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.components.musicplayer())
}

function hideComponents() {
    navbarComponent.innerHTML = '';
    musicPlayerComponent.innerHTML = '';
}


const router = async (route) => {
    content.innerHTML = '';

    
    // Pages / views
    switch(route) {

        case "":
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.pages.home())
        
        case "#/":
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.pages.home())
        
        case "#/app":
        showComponents()
        return content.appendChild(await _controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.pages.api())
            
        default:
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_0__.pages.notfound())
    

    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
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
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
/* harmony import */ var _router_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/index.routes */ "./src/router/index.routes.js");




if (true) {
    console.log('Looks like we are in development mode!');
  }

(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash)

window.addEventListener('hashchange', () => {
    ;(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash)
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9tdXNpY1BsYXllci9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy80MDQvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL2hvbWUvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL3Bva2VhcGkvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb21wb25lbnRzL211c2ljUGxheWVyL211c2ljUGxheWVyLmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy80MDQvNDA0Lmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL2hvbWUvaG9tZS5odG1sIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy9wb2tlYXBpL2FwaS5odG1sIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb21wb25lbnRzL211c2ljUGxheWVyL3N0eWxlcy5zY3NzPzg1NDMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy5zY3NzPzEyYTgiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzLzQwNC9zdHlsZXMuc2Nzcz9kZjcyIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy9ob21lL3N0eWxlcy5zY3NzPzcxZjQiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL3Bva2VhcGkvc3R5bGVzLnNjc3M/MWRjZCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbnRyb2xsZXJzLzQwNC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb250cm9sbGVycy9hcGkuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29udHJvbGxlcnMvaG9tZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb250cm9sbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29udHJvbGxlcnMvbXVzaWNQbGF5ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29udHJvbGxlcnMvbmF2YmFyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3JvdXRlci9pbmRleC5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx5REFBeUQsb0JBQW9CLGNBQWMsZ0JBQWdCLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDhCQUE4QixtQ0FBbUMsR0FBRyw2Q0FBNkMsMkRBQTJELHVCQUF1QixlQUFlLGtCQUFrQixnQkFBZ0IsY0FBYyxnQkFBZ0Isa0JBQWtCLDhCQUE4QixHQUFHLHVEQUF1RCx3QkFBd0IsaUJBQWlCLG9CQUFvQixHQUFHLHdCQUF3QixnQkFBZ0IsaUJBQWlCLEdBQUcsd0JBQXdCLHVCQUF1QixjQUFjLGdCQUFnQixHQUFHLE9BQU8sZ0pBQWdKLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUs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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7O0FDeEJ1Qjs7QUFFd0I7O0FBRS9DLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSw0REFBTTs7QUFFTjtBQUNBLElBQUksNkRBQU07QUFDVixDQUFDIiwiZmlsZSI6IjA1NmI4Y2I4NWI0MTdmMmJiNmJjLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpeGVkLWZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubXVzaWNQbGF5ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNCNENDQTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm11c2ljLXBsYXllci1wbGF5LCAubXVzaWMtcGxheWVyLXBhdXNlIHtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigyNSUgMCUsIDEwMCUgMCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDVyZW07XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4ubXVzaWMtcGxheWVyLXBsYXk6aG92ZXIsIC5tdXNpYy1wbGF5ZXItcGF1c2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm11c2ljLXBsYXllci1jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubXVzaWMtcGxheWVyLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL211c2ljUGxheWVyL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNGSTtFREdKLDhCQUFBO0FBREo7O0FBS0E7RUFDSSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJDSFE7QURDWjtBQUlJO0VBQ0ksbUJDdkJEO0VEd0JDLFlBQUE7RUFDQSxlQUFBO0FBRlI7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4uZml4ZWQtZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm11c2ljUGxheWVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwb2tlMztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubXVzaWMtcGxheWVyLXBsYXksIC5tdXNpYy1wbGF5ZXItcGF1c2Uge1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjUlIDAlLCAxMDAlIDAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246ICR0cmFuc0Zhc3Q7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm11c2ljLXBsYXllci1jYXJke1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXVzaWMtcGxheWVyLXRleHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMXJlbTtcXHJcXG4gICAgcmlnaHQ6IDFyZW07XFxyXFxufVwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggIzIwMjAyMDtcXG59XFxuXFxuLm5hdmJhciB1bCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbn1cXG4ubmF2YmFyIHVsIGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMS41cmVtO1xcbn1cXG4ubmF2YmFyIHVsIGxpIGEge1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gIGNvbG9yOiAjRkZDQzAxICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ubmF2YmFyIHVsIGxpIGE6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMzNzVEQTk7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5hdmJhci1icmFuZCBpbWcge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLndlYnBhY2stbG9nbyBpbWcge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mYS1oZWFydCB7XFxuICBjb2xvcjogI2JhNDg0ODtcXG59XFxuXFxuLm5hdmJhci10ZXh0IHtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbWF0aWMgU0NcXFwiLCBjdXJzaXZlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdmJhci9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksbUJDTUc7RURMSCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBREo7O0FBS0E7RUFDSSxZQ1ZRO0VEV1IsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUhSO0FBS1E7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBSFI7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBTko7O0FBU0E7RUFDSSxjQ2pESztBRDJDVDs7QUFTQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0N4Q0s7RUR5Q0wsaUJBQUE7RUFDQSxrQkFBQTtBQU5KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAkZGFyaztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCB7XFxyXFxuICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaSBhIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkdGVydGlhcnk7XFxyXFxuICAgICAgICBjb2xvcjogJG1haW5Db2xvciAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnJhbmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi53ZWJwYWNrLWxvZ28gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgICBjb2xvcjogJGRhbmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci10ZXh0IHtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzdHlsZTI7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIkNhYmluXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICNDQzAwMDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjAyMDIwO1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTByZW07XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI25hdmJhci1jb21wb25lbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIwZGVnLCAjQzhBMTAyLCAjZmZiNzAwKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtaW4taGVpZ2h0OiAzMHZoO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICBtYXJnaW4tbGVmdDogMyU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgbWFyZ2luLWJvdHRvbTogMSU7XFxufVxcblxcbi5idG4ge1xcbiAgd2lkdGg6IDVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMzAzMDMwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYmZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ibGFjay0tdGV4dCB7XFxuICBjb2xvcjogIzIwMjAyMDtcXG59XFxuXFxuLndoaXRlLS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmphdmFzY3JpcHQtLXRleHQge1xcbiAgY29sb3I6ICNGRkNDMDE7XFxufVxcblxcbi5qcyB7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29sIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMHJlbSwgYXV0byk7XFxufVxcblxcbi5yb3c6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm10LTEge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLm10LTQge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmNvbCB7XFxuICBtaW4td2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC0xIHtcXG4gIHdpZHRoOiA4LjMzJTtcXG59XFxuXFxuLmNvbC0yIHtcXG4gIHdpZHRoOiAxNi42NiU7XFxufVxcblxcbi5jb2wtMyB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uY29sLTQge1xcbiAgd2lkdGg6IDMzLjMzJTtcXG59XFxuXFxuLmNvbC01IHtcXG4gIHdpZHRoOiA0MS42NiU7XFxufVxcblxcbi5jb2wtNiB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sLTcge1xcbiAgd2lkdGg6IDU4LjMzJTtcXG59XFxuXFxuLmNvbC04IHtcXG4gIHdpZHRoOiA2Ni42NiU7XFxufVxcblxcbi5jb2wtOSB7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4uY29sLTEwIHtcXG4gIHdpZHRoOiA4My4zMyU7XFxufVxcblxcbi5jb2wtMTEge1xcbiAgd2lkdGg6IDkxLjY2JTtcXG59XFxuXFxuLmNvbC0xMiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZhZGUge1xcbiAgYW5pbWF0aW9uOiBmYWRlIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksZ0NDaUJLO0VEaEJMLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxtQkNURztBRFFQOztBQUlBO0VBQ0ksbUJDVkk7RURXSix5QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUNJLDBEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9BO0VBQ0ksaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBSko7QUFNSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQ2pHRztFRGtHSCxZQUFBO0FBTEo7O0FBUUE7RUFDSSxjQ3RHRztBRGlHUDs7QUFRQTtFQUNJLFlBQUE7QUFMSjs7QUFRQTtFQUNJLGNDckhNO0FEZ0hWOztBQVFBO0VBQ0ksc0hBQUE7QUFMSjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNBO0VBQ0ksOEJBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KOztBQVNBO0VBQVEsWUFBQTtBQUxSOztBQU1BO0VBQVEsYUFBQTtBQUZSOztBQUdBO0VBQVEsVUFBQTtBQUNSOztBQUFBO0VBQVEsYUFBQTtBQUlSOztBQUhBO0VBQVEsYUFBQTtBQU9SOztBQU5BO0VBQVEsVUFBQTtBQVVSOztBQVRBO0VBQVEsYUFBQTtBQWFSOztBQVpBO0VBQVEsYUFBQTtBQWdCUjs7QUFmQTtFQUFRLFVBQUE7QUFtQlI7O0FBbEJBO0VBQVMsYUFBQTtBQXNCVDs7QUFyQkE7RUFBUyxhQUFBO0FBeUJUOztBQXhCQTtFQUFTLFdBQUE7QUE0QlQ7O0FBeEJBO0VBQ0ksOEJBQUE7QUEyQko7O0FBeEJBO0VBQ0k7SUFDSSxVQUFBO0VBMkJOO0VBekJFO0lBQ0ksVUFBQTtFQTJCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3Njc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzdHlsZTE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkcG9rZTI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrO1xcclxcbiAgICBtYXJnaW46IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTByZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNuYXZiYXItY29tcG9uZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjBkZWcsICRzZWNvbmRhcnksIHJnYigyNTUsIDE4MywgMCkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgbWluLWhlaWdodDogMzB2aDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICRzb2Z0RGFyaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDU5LCAyNTUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrLS10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICRkYXJrO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtLXRleHQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5qYXZhc2NyaXB0LS10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG4uanMge1xcclxcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb2wge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTByZW0sIGF1dG8pO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNlbnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm10LTEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdC0zIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm10LTQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtNSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2wge1xcclxcbiAgICBtaW4td2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbC0xIHt3aWR0aDogOC4zMyU7fVxcclxcbi5jb2wtMiB7d2lkdGg6IDE2LjY2JTt9XFxyXFxuLmNvbC0zIHt3aWR0aDogMjUlO31cXHJcXG4uY29sLTQge3dpZHRoOiAzMy4zMyU7fVxcclxcbi5jb2wtNSB7d2lkdGg6IDQxLjY2JTt9XFxyXFxuLmNvbC02IHt3aWR0aDogNTAlO31cXHJcXG4uY29sLTcge3dpZHRoOiA1OC4zMyU7fVxcclxcbi5jb2wtOCB7d2lkdGg6IDY2LjY2JTt9XFxyXFxuLmNvbC05IHt3aWR0aDogNzUlO31cXHJcXG4uY29sLTEwIHt3aWR0aDogODMuMzMlO31cXHJcXG4uY29sLTExIHt3aWR0aDogOTEuNjYlO31cXHJcXG4uY29sLTEyIHt3aWR0aDogMTAwJTt9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmZhZGUge1xcclxcbiAgICBhbmltYXRpb246IGZhZGUgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMFxcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDFcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIi8vIENvbG9yc1xcclxcbiRtYWluQ29sb3I6IHdoaXRlO1xcclxcbiRwcmltYXJ5OiAjRkZDQzAxO1xcclxcbiRzZWNvbmRhcnk6ICNDOEExMDI7XFxyXFxuJHRlcnRpYXJ5OiAjMzc1REE5O1xcclxcbiRzdWNjZXNzOiAgICM0OGEyNjY7XFxyXFxuJGRhbmdlcjogI2JhNDg0ODtcXHJcXG4kaW5mbzogIzU4OWZkNTtcXHJcXG4kc29mdERhcms6ICMzMDMwMzA7XFxyXFxuJGRhcms6ICMyMDIwMjA7XFxyXFxuXFxyXFxuJHBva2UxOiAjRkYwMDAwO1xcclxcbiRwb2tlMjogI0NDMDAwMDtcXHJcXG4kcG9rZTM6ICMzQjRDQ0E7XFxyXFxuJHBva2U0OiAjRkZERTAwO1xcclxcbiRwb2tlNTogI0IzQTEyNTtcXHJcXG5cXHJcXG5cXHJcXG4vLyBGb250LWZhbWlsaWVzXFxyXFxuXFxyXFxuJHN0eWxlMTogJ0NhYmluJywgc2Fucy1zZXJpZjtcXHJcXG4kc3R5bGUyOiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcXHJcXG4kc3R5bGUzOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gVHJhbnNpdGlvbnNcXHJcXG5cXHJcXG4kdHJhbnNGYXN0OiBhbGwgMC41cyBlYXNlO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWcvcGlrYTQwNC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9wb2tlYmFsbC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlY29uZGFyeS1iYWNrZ3JvdW5kLTQwNCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMzQjRDQ0EsICMwMDA0NmYpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyJSwgMCAxMDAlLCA1MCUgMTAwJSk7XFxufVxcblxcbi5waWthLWltZyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB3aWR0aDogMzByZW07XFxuICBoZWlnaHQ6IDM1cmVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmVycm9yNDA0IHtcXG4gIGZvbnQtc2l6ZTogMTVlbTtcXG4gIGNvbG9yOiAjMjAyMDIwO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZXJyb3I0MDQgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuI251bWJlcjEge1xcbiAgdGV4dC1zaGFkb3c6IDEwcHggMCAwICMzQjRDQ0EsIDAgMTBweCAwICMzQjRDQ0EsIC0xMHB4IDAgMCAjM0I0Q0NBLCAwIC0xMHB4IDAgIzNCNENDQSwgMCAwIDEwcHggIzNCNENDQTtcXG4gIGNvbG9yOiAjRkZERTAwO1xcbn1cXG5cXG4jbnVtYmVyMiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNudW1iZXIzIHtcXG4gIHRleHQtc2hhZG93OiAxMHB4IDAgMCAjM0I0Q0NBLCAwIDEwcHggMCAjM0I0Q0NBLCAtMTBweCAwIDAgIzNCNENDQSwgMCAtMTBweCAwICMzQjRDQ0EsIDAgMCAxMHB4ICMzQjRDQ0E7XFxuICBjb2xvcjogI0ZGREUwMDtcXG59XFxuXFxuLmVycm9yLXRleHQge1xcbiAgZm9udC1zaXplOiA3ZW07XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG5cXG4uZ28tYnRuLTQwNCB7XFxuICBiYWNrZ3JvdW5kOiAjMzc1REE5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggIzIwMjAyMDtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMzAzMDMwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5nby1idG4tNDA0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICBjb2xvcjogI0ZGQ0MwMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzLzQwNC9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGNDaEJHO0VEaUJILGVBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZSOztBQU9BO0VBQ0ksdUdBQUE7RUFDQSxjQ3ZCSTtBRG1CUjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BO0VBQ0ksdUdBQUE7RUFDQSxjQ3RDSTtBRGtDUjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVNBO0VBQ0ksbUJDM0RPO0VENERQLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0FBTko7QUFRSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQ3JFRDtFRHNFQyxjQzdFRTtBRHVFVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuXFxyXFxuLnNlY29uZGFyeS1iYWNrZ3JvdW5kLTQwNCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgJHBva2UzLCByZ2IoMCwgNCwgMTExKSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIlLCAwIDEwMCUsIDUwJSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpa2EtaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZy9waWthNDA0LnBuZ1xcXCIpO1xcclxcbiAgICB3aWR0aDogMzByZW07XFxyXFxuICAgIGhlaWdodDogMzVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3I0MDQge1xcclxcbiAgICBmb250LXNpemU6IDE1ZW07XFxyXFxuICAgIGNvbG9yOiAkZGFyaztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNudW1iZXIxIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMCAwICRwb2tlMywgMCAxMHB4IDAgJHBva2UzLCAtMTBweCAwIDAgJHBva2UzLCAwIC0xMHB4IDAgJHBva2UzLCAwIDAgMTBweCAkcG9rZTM7XFxyXFxuICAgIGNvbG9yOiAkcG9rZTQ7XFxyXFxufVxcclxcblxcclxcbiNudW1iZXIyIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWcvcG9rZWJhbGwucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNudW1iZXIzIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMCAwICRwb2tlMywgMCAxMHB4IDAgJHBva2UzLCAtMTBweCAwIDAgJHBva2UzLCAwIC0xMHB4IDAgJHBva2UzLCAwIDAgMTBweCAkcG9rZTM7XFxyXFxuICAgIGNvbG9yOiAkcG9rZTQ7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiA3ZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmdvLWJ0bi00MDQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkdGVydGlhcnk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggJGRhcms7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAkc29mdERhcms7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xcclxcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICB9XFxyXFxufVwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9wb2tlZGlhbG9nLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWNvbmRhcnktYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMwMzAzMCwgIzIwMjAyMCwgYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA1MCUgMTAwJSwgMTAwJSAxMDAlKTtcXG59XFxuXFxuLmxvZ28taW1hZ2UgaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jaG9tZS10aXRsZSB7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkFtYXRpYyBTQ1xcXCIsIGN1cnNpdmU7XFxuICBhbmltYXRpb246IHNsaWRlUmlnaHQgMS41cyBlYXNlLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMDBweDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG4ub2FrLWltYWdlIGltZyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGhlaWdodDogMTVyZW07XFxuICBhbmltYXRpb246IHNsaWRlVXAgMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiAxLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbi10b3A6IDMwcmVtO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4uZ28tYnRuIHtcXG4gIGJhY2tncm91bmQ6ICMzNzVEQTk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggIzIwMjAyMDtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMzAzMDMwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5nby1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiAjRkZDQzAxO1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnBva2UtZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbGVmdDogLTUwJTtcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGhlaWdodDogMTIuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ucG9rZS1kaWFsb2ctdGV4dCB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMCU7XFxuICBsZWZ0OiAxMCU7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRG90R290aGljMTZcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udmVyc2lvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmb250LWZhbWlseTogXFxcIkNhYmluXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogI0ZGQ0MwMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2hvbWUvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNDVEs7RURVTCxtQ0FBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0JBQUE7RUFGTjtFQUlFO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUFGTjtBQUNGO0FBS0E7RUFFSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FBSko7O0FBT0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtFQUpOO0VBTUU7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFQUpOO0FBQ0Y7QUFRQTtFQUNJLG1CQy9ETztFRGdFUCxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUFOSjtBQVFJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJDekVEO0VEMEVDLGNDakZFO0FEMkVWOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlEQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxnQ0NwR0s7RURxR0wsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0MxSE07QURtSFZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5ob21lIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJhY2tncm91bmQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG4gICAgbGVmdDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgJHNvZnREYXJrLCAkZGFyaywgYmxhY2spO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA1MCUgMTAwJSwgMTAwJSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1hZ2UgaW1nIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJHN0eWxlMjtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVJpZ2h0IDEuNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVSaWdodCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjAwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm9hay1pbWFnZSBpbWcge1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiAxNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ28tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHRlcnRpYXJ5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDhyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAkZGFyaztcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICRzb2Z0RGFyaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtZGlhbG9nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBsZWZ0OiAtNTAlO1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogMTIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1nL3Bva2VkaWFsb2cucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWRpYWxvZy10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LWZhbWlseTogJ0RvdEdvdGhpYzE2Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnNpb24ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc3R5bGUxO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgYm90dG9tOiAxcmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbn1cXHJcXG5cIixcIi8vIENvbG9yc1xcclxcbiRtYWluQ29sb3I6IHdoaXRlO1xcclxcbiRwcmltYXJ5OiAjRkZDQzAxO1xcclxcbiRzZWNvbmRhcnk6ICNDOEExMDI7XFxyXFxuJHRlcnRpYXJ5OiAjMzc1REE5O1xcclxcbiRzdWNjZXNzOiAgICM0OGEyNjY7XFxyXFxuJGRhbmdlcjogI2JhNDg0ODtcXHJcXG4kaW5mbzogIzU4OWZkNTtcXHJcXG4kc29mdERhcms6ICMzMDMwMzA7XFxyXFxuJGRhcms6ICMyMDIwMjA7XFxyXFxuXFxyXFxuJHBva2UxOiAjRkYwMDAwO1xcclxcbiRwb2tlMjogI0NDMDAwMDtcXHJcXG4kcG9rZTM6ICMzQjRDQ0E7XFxyXFxuJHBva2U0OiAjRkZERTAwO1xcclxcbiRwb2tlNTogI0IzQTEyNTtcXHJcXG5cXHJcXG5cXHJcXG4vLyBGb250LWZhbWlsaWVzXFxyXFxuXFxyXFxuJHN0eWxlMTogJ0NhYmluJywgc2Fucy1zZXJpZjtcXHJcXG4kc3R5bGUyOiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcXHJcXG4kc3R5bGUzOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gVHJhbnNpdGlvbnNcXHJcXG5cXHJcXG4kdHJhbnNGYXN0OiBhbGwgMC41cyBlYXNlO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLXRpdGxlIHtcXG4gIGNvbG9yOiAjRkZERTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnMgQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xcbiAgLm5hdi1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ3NDc1ZSwgIzFlM2M1MiwgIzM3NURBOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMzAzMDMwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgfVxcbiAgLm5hdi1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuXFxuICAubG9hZGVyIHtcXG4gICAgZm9udC1zaXplOiA1ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzNCNENDQTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXJkLWltZyB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMzBlbTtcXG4gICAgbWluLWhlaWdodDogMjByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCM0ExMjU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggIzMwMzAzMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmNhcmQtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xcbiAgfVxcblxcbiAgLm1hcmdpbi1jb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkLWlkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjogI0ZGQ0MwMTtcXG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xcbiAgLm5hdi1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDc0NzVlLCAjMWUzYzUyLCAjMzc1REE5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMzMDMwMzA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAubmF2LWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjM0I0Q0NBO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcmQtaW1nIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAxOHJlbTtcXG4gICAgbWluLWhlaWdodDogMjhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCM0ExMjU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggIzMwMzAzMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmNhcmQtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xcbiAgfVxcblxcbiAgLm1hcmdpbi1jb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkLWlkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBjb2xvcjogI0ZGQ0MwMTtcXG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzcwcHgpIHtcXG4gIC5uYXYtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0NzQ3NWUsICMxZTNjNTIsICMzNzVEQTkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAjMzAzMDMwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgfVxcbiAgLm5hdi1idXR0b246aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuXFxuICAubG9hZGVyIHtcXG4gICAgZm9udC1zaXplOiA1ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzNCNENDQTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXJkLWltZyB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIG1pbi1oZWlnaHQ6IDMwcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQjNBMTI1O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4ICMzMDMwMzA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbiAgfVxcbiAgLmNhcmQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIC5jYXJkLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkLWJvZHkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcXG4gIH1cXG5cXG4gIC5tYXJnaW4tY29scyB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICB9XFxuXFxuICAuY2FyZC1pZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBjb2xvcjogI0ZGQ0MwMTtcXG4gICAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvcG9rZWFwaS9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0ksY0NLSTtFREpKLDhDQ1lLO0FEbkJUOztBQVdBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsOERBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFB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bUJDaFBBO0lEaVBBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQXRCTjs7RUF5QkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQXRCTjs7RUF5QkU7SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtFQXRCTjtFQXdCTTtJQUNJLGVBQUE7SUFDQSxxQkFBQTtFQXRCVjs7RUEwQkU7SUFDSSx5QkNyUkQ7SURzUkMsV0FBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtFQXZCTjs7RUEwQkU7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSx5QkNqU0Q7SURrU0MsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdDQUFBO0VBdkJOOztFQTBCRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUF2Qk47O0VBMEJFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0N4VEU7SUR5VEYsbUJDbFREO0lEbVRDLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUF2Qk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOmV4cG9ydCB7XFxyXFxuICAgICRncmFzc0JhY2tncm91bmQ6IHVybChcXFwic3JjL2Fzc2V0cy9pbWcvZ3Jhc3MuanBnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICRwb2tlNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzdHlsZTM7XFxyXFxufVxcclxcblxcclxcbi8vICoqKioqKiogTU9CSUxFIFJFU1BPTlNJVkUgKioqKioqKiAvL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzYwcHgpIHtcXHJcXG4gICAgLm5hdi1idXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMHJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYig3MSwgNzEsIDk0KSwgcmdiKDMwLCA2MCwgODIpLCAkdGVydGlhcnkpO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggJHNvZnREYXJrO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zRmFzdDtcXHJcXG4gICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5kaXNhYmxlZCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXYtbGlzdCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubG9hZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHBva2UzO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtaW1nIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMzBlbTtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwb2tlNTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggJHNvZnREYXJrO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IGF1dG87XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbiAgICBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLXRpdGxlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1ib2R5IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubWFyZ2luLWNvbHMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLWlkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMTVweDtcXHJcXG4gICAgICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xcclxcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG4vLyAqKioqKioqIExBUFRPUCBSRVNQT05TSVZFICoqKioqKiogLy9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC5uYXYtYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYig3MSwgNzEsIDk0KSwgcmdiKDMwLCA2MCwgODIpLCAkdGVydGlhcnkpO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggJHNvZnREYXJrO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zRmFzdDtcXHJcXG4gICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5kaXNhYmxlZCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXYtbGlzdCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubG9hZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHBva2UzO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtaW1nIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMThyZW07XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAyOHJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcG9rZTU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4ICRzb2Z0RGFyaztcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC10aXRsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtYm9keSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm1hcmdpbi1jb2xzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1pZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDE1cHg7XFxyXFxuICAgICAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgICAgIHdpZHRoOiAxLjhyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8vICoqKioqKiogREVTS1RPUCBSRVNQT05TSVZFICoqKioqKiogLy9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNzBweCkge1xcclxcbiAgICAubmF2LWJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDcxLCA3MSwgOTQpLCByZ2IoMzAsIDYwLCA4MiksICR0ZXJ0aWFyeSk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICRzb2Z0RGFyaztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc0Zhc3Q7XFxyXFxuICAgICAgICBcXHJcXG4gICAgXFxyXFxuICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuZGlzYWJsZWQge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubmF2LWxpc3Qge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmxvYWRlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDVlbTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRwb2tlMztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLWltZyB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzByZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHBva2U1O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAkc29mdERhcms7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogYXV0bztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxyXFxuICAgIFxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtdGl0bGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLWJvZHkge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5tYXJnaW4tY29scyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtaWQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxNXB4O1xcclxcbiAgICAgICAgbGVmdDogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cIixcIi8vIENvbG9yc1xcclxcbiRtYWluQ29sb3I6IHdoaXRlO1xcclxcbiRwcmltYXJ5OiAjRkZDQzAxO1xcclxcbiRzZWNvbmRhcnk6ICNDOEExMDI7XFxyXFxuJHRlcnRpYXJ5OiAjMzc1REE5O1xcclxcbiRzdWNjZXNzOiAgICM0OGEyNjY7XFxyXFxuJGRhbmdlcjogI2JhNDg0ODtcXHJcXG4kaW5mbzogIzU4OWZkNTtcXHJcXG4kc29mdERhcms6ICMzMDMwMzA7XFxyXFxuJGRhcms6ICMyMDIwMjA7XFxyXFxuXFxyXFxuJHBva2UxOiAjRkYwMDAwO1xcclxcbiRwb2tlMjogI0NDMDAwMDtcXHJcXG4kcG9rZTM6ICMzQjRDQ0E7XFxyXFxuJHBva2U0OiAjRkZERTAwO1xcclxcbiRwb2tlNTogI0IzQTEyNTtcXHJcXG5cXHJcXG5cXHJcXG4vLyBGb250LWZhbWlsaWVzXFxyXFxuXFxyXFxuJHN0eWxlMTogJ0NhYmluJywgc2Fucy1zZXJpZjtcXHJcXG4kc3R5bGUyOiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcXHJcXG4kc3R5bGUzOiAnRmlyYSBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gVHJhbnNpdGlvbnNcXHJcXG5cXHJcXG4kdHJhbnNGYXN0OiBhbGwgMC41cyBlYXNlO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcImZpbGU6Ly8vQzovVXNlcnMvS2EvRGVza3RvcC9Qcm95ZWN0b3MlMjBKUy9wb2tlYXBwdjIvbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvbXVzaWMvcG9rZW11c2ljLm1wM1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImZpeGVkLWZvb3RlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm11c2ljUGxheWVyIGZhZGVcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktYmV0d2VlblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtdXNpYy1wbGF5ZXItY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJtdXNpYy1wbGF5ZXItcGxheVxcXCIgaWQ9XFxcInBsYXlCdG5cXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGxheVxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibXVzaWMtcGxheWVyLXBhdXNlXFxcIiBpZD1cXFwicGF1c2VCdG5cXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGF1c2VcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhdWRpbyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBoaWRkZW4gaWQ9XFxcIm11c2ljXFxcIj48L2F1ZGlvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm11c2ljLXBsYXllci10ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFN0eWxlcyBtYWRlIHdpdGggQ1NTIC8gU0NTU1xcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwibmF2YmFyIGZhZGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWJwYWNrLWxvZ29cXFwiPjwvZGl2PlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiIy9cXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtaG9tZVxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiIy9hcHBcXFwiPkFQSTwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2l0LWljb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vTGl0aG9zLWh1Yi9KUy1wb2tldmFuaWxsYVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYWIgZmEtZ2l0aHViIHdoaXRlLS10ZXh0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci10ZXh0XFxcIj5cXHJcXG4gICAgICAgIE1hZGUgd2l0aCBwdXJlIDxpIGNsYXNzPVxcXCJmYXMgZmEtaGVhcnRcXFwiPjwvaT4sIHB1cmUgPHNwYW4gY2xhc3M9XFxcImphdmFzY3JpcHQtLXRleHQganNcXFwiPkpTPC9zcGFuPiBhbmRcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNlY29uZGFyeS1iYWNrZ3JvdW5kLTQwNFxcXCI+LjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGQtYmxvY2sganVzdGlmeS1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJlcnJvcjQwNFxcXCI+RXJyb3I8c3BhbiBpZD1cXFwibnVtYmVyMVxcXCI+NDwvc3Bhbj48ZGl2IGlkPVxcXCJudW1iZXIyXFxcIj48L2Rpdj48c3BhbiBpZD1cXFwibnVtYmVyM1xcXCI+NDwvc3Bhbj48L2gxPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJlcnJvci10ZXh0XFxcIj5Pb3BzLCB5b3Ugc2hvdWxkbid0IGJlIGhlcmUhXFxyXFxuICAgICAgICA8L2gxPlxcclxcbiAgICAgICAgPGEgaHJlZj1cXFwiL1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnby1idG4tNDA0XFxcIj5HbyBob21lPC9idXR0b24+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaWthLWltZ1xcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJzZWNvbmRhcnktYmFja2dyb3VuZFxcXCI+LjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG9tZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgYmxhY2stLXRleHQganVzdGlmeS1jZW50ZXIgZmFkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBkLWJsb2NrIGp1c3RpZnktY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibXQtMlxcXCI+UG93ZXJlZCB3aXRoPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ28taW1hZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm10LTVcXFwiIGlkPVxcXCJob21lLXRpdGxlXFxcIj5XZWxjb21lIHRvIHRoZSBWYW5pbGxhIFBva8OpQVBQPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9hay1pbWFnZSBtdC0yIG1iLTJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLyMvYXBwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImdvLWJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5HbzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGlhbG9nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb2tlLWRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBva2UtZGlhbG9nLXRleHRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZlcnNpb25cXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwidG9vbGJhciBmYWRlXFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJkLWZsZXggbmF2LWxpc3QganVzdGlmeS1iZXR3ZWVuXFxcIj5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXYtYnV0dG9uXFxcIj5GaXJzdCBnZW5lcmF0aW9uPC9idXR0b24+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdi1idXR0b24gZGlzYWJsZWRcXFwiPlNlY29uZCBnZW5lcmF0aW9uPC9idXR0b24+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdi1idXR0b24gZGlzYWJsZWRcXFwiPlRocmlkIGdlbmVyYXRpb248L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2LWJ1dHRvbiBkaXNhYmxlZFxcXCI+Rm9ydGggZ2VuZXJhdGlvbjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXYtYnV0dG9uIGRpc2FibGVkXFxcIj5GaXRoIGdlbmVyYXRpb248L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkIGp1c3RpZnktY2VudGVyIGZhZGVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHRleHQtY2VudGVyXFxcIiBpZD1cXFwicG9rZUxpc3RcXFwiPjwvZGl2PlxcclxcblxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB2aWV3IGZyb20gJy4uL3ZpZXdzLzQwNC80MDQuaHRtbCdcclxuaW1wb3J0ICcuLi92aWV3cy80MDQvc3R5bGVzLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB2aWV3O1xyXG5cclxuICAgIHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IHZpZXcgZnJvbSBcIi4uL3ZpZXdzL3Bva2VhcGkvYXBpLmh0bWxcIjtcclxuaW1wb3J0IFwiLi4vdmlld3MvcG9rZWFwaS9zdHlsZXMuc2Nzc1wiXHJcblxyXG4vLyBCYWNrZ3JvdW5kcyBjYXJkXHJcbmltcG9ydCBiYWNrZ3JvdW5kQlVHIGZyb20gXCIuLi9hc3NldHMvaW1nL2J1Zy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmREQVJLIGZyb20gXCIuLi9hc3NldHMvaW1nL2RhcmsuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kRFJBR09OIGZyb20gXCIuLi9hc3NldHMvaW1nL2RyYWdvbi5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRFTEVDVFJJQyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9lbGVjdHJpYy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGQUlSWSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9mYWlyeS5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGSUdIVElORyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9maWdodGluZy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGSVJFIGZyb20gXCIuLi9hc3NldHMvaW1nL2ZpcmUuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kRkxZSU5HIGZyb20gXCIuLi9hc3NldHMvaW1nL2ZseWluZy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHSE9TVCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9naG9zdC5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHUkFTUyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9ncmFzcy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHUk9VTkQgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYmFja2dyb3VuZElDRSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9pY2UuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kTk9STUFMIGZyb20gXCIuLi9hc3NldHMvaW1nL25vcm1hbC5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRQT0lTT04gZnJvbSBcIi4uL2Fzc2V0cy9pbWcvcG9pc29uLmpwZ1wiO1xyXG5pbXBvcnQgYmFja2dyb3VuZFBTWUNISUMgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvcHN5Y2hpYy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRST0NLIGZyb20gXCIuLi9hc3NldHMvaW1nL3JvY2suanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kU1RFRUwgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvc3RlZWwuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kV0FURVIgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXIuanBnXCI7XHJcbmltcG9ydCBERUZBVUxUIGZyb20gXCIuLi9hc3NldHMvaW1nL3Vua25vd24uanBnXCI7XHJcblxyXG4vLyBUeXBlIGljb25zXHJcbmltcG9ydCBpY29uQlVHIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvYnVnLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkRBUksgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9kYXJrLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkRSQUdPTiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2RyYWdvbi5zdmdcIjtcclxuaW1wb3J0IGljb25FTEVDVFJJQyBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2VsZWN0cmljLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkZBSVJZIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmFpcnkuc3ZnXCI7XHJcbmltcG9ydCBpY29uRklHSFRJTkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9maWdodGluZy5zdmdcIjtcclxuaW1wb3J0IGljb25GSVJFIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmlyZS5zdmdcIjtcclxuaW1wb3J0IGljb25GTFlJTkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9mbHlpbmcuc3ZnXCI7XHJcbmltcG9ydCBpY29uR0hPU1QgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9naG9zdC5zdmdcIjtcclxuaW1wb3J0IGljb25HUkFTUyBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2dyYXNzLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkdST1VORCBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2dyb3VuZC5zdmdcIjtcclxuaW1wb3J0IGljb25JQ0UgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9pY2Uuc3ZnXCI7XHJcbmltcG9ydCBpY29uTk9STUFMIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvbm9ybWFsLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblBPSVNPTiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3BvaXNvbi5zdmdcIjtcclxuaW1wb3J0IGljb25QU1lDSElDIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcHN5Y2hpYy5zdmdcIjtcclxuaW1wb3J0IGljb25ST0NLIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcm9jay5zdmdcIjtcclxuaW1wb3J0IGljb25TVEVFTCBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3N0ZWVsLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbldBVEVSIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2F0ZXIuc3ZnXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0UG9rZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpOyAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSB2aWV3XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gdmlldztcclxuXHJcblxyXG4gICAgLy8gQXNzaWduIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50c1xyXG4gICAgbGV0IHN0YXJ0ID0gMVxyXG4gICAgbGV0IGVuZCA9IDE1MFxyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgdGhlIGFycmF5IHdoZXJlIHBva2Vtb24gd2lsbCBiZSBzdG9yYWdlZFxyXG4gICAgY29uc3QgcG9rZUFyciA9IFtdXHJcbiAgICBcclxuICAgIC8vIGZvciBsb29wIHRvIGdldCBlYWNoIHBva2Vtb24gd2l0aCBhbiBpZFxyXG4gICAgZm9yKGxldCBpZCA9IHN0YXJ0OyBpZCA8PSBlbmQ7IGlkKyspIHtcclxuXHJcbiAgICAgICAgY29uc3QgcG9rZXMgPSBhd2FpdCBnZXRQb2tlcyhpZCk7XHJcbiAgICAgICAgcG9rZUFyci5wdXNoKHBva2VzKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhc3NpZ24gdGhlIHBva2VMaXN0IGNvbnN0IHRvICNwb2tlTGlzdCBlbGVtZW50XHJcbiAgICBjb25zdCBwb2tlTGlzdCA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Bva2VMaXN0JylcclxuICAgIFxyXG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGFycmF5IGhhcyBiZWVuIGNvcnJlY3RlZCBjcmVhdGVkXHJcbiAgICBjb25zb2xlLmxvZyhwb2tlQXJyKVxyXG4gICAgXHJcblxyXG4gICAgLy8gQXJyYXkgZm9yIHRoZSB0eXBlc1xyXG4gICAgY29uc3QgdHlwZXNMaXN0ID0gW11cclxuXHJcbiAgICAvLyBmb3IgbG9vcCB0byBnZXQgZWFjaCBwb2tlbW9uIGluZm9ybWF0aW9uIGFuZCBjcmVhdGUgYW4gaHRtbCBlbGVtZW50IHdpdGggdGhhdCBpbmZvXHJcbiAgICBwb2tlQXJyLmZvckVhY2gocG9rZSA9PiB7XHJcbiAgICAgICAgdHlwZXNMaXN0LnB1c2gocG9rZS50eXBlc1swXS50eXBlLm5hbWUpXHJcblxyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gJydcclxuICAgICAgICBsZXQgaWNvbiA9ICcnXHJcblxyXG4gICAgICAgIHN3aXRjaChwb2tlLnR5cGVzWzBdLnR5cGUubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZ3Jhc3NcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR1JBU1M7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkdSQVNTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaXJlXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEZJUkU7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkZJUkU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhdGVyXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFdBVEVSO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25XQVRFUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnVnXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEJVRztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uQlVHO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhcmtcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kREFSSztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uREFSSztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhZ29uXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZERSQUdPTjtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uRFJBR09OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmYWlyeVwiOlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmRGQUlSWTtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uRkFJUlk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZpZ2h0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEZJR0hUSU5HO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25GSUdIVElORztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2hvc3RcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR0hPU1Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkdIT1NUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJncm91bmRcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR1JPVU5EO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25HUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImljZVwiOlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmRJQ0U7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbklDRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicG9pc29uXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFBPSVNPTjtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uUE9JU09OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwc3ljaGljXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFBTWUNISUM7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvblBTWUNISUM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJvY2tcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kUk9DSztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uUk9DSztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RlZWxcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kU1RFRUw7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvblNURUVMO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmbHlpbmdcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kRkxZSU5HO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25GTFlJTkc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEVMRUNUUklDO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25FTEVDVFJJQztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IERFRkFVTFQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb2tlTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTQgbWFyZ2luLWNvbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmR9KTsgYmFja2dyb3VuZC1zaXplOiAxMDAlOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWlkXCI+JHtwb2tlLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cG9rZS5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHR9XCIgd2lkdGg9XCIxNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwb2tlLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwb2tlLm5hbWUuc2xpY2UoMSkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWluIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb259XCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VpZ2h0OiAke3Bva2Uud2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgZXhwZXJpZW5jZTogJHtwb2tlLmJhc2VfZXhwZXJpZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2codHlwZXNMaXN0KVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIHJldHVybiBkaXZFbGVtZW50O1xyXG59O1xyXG4iLCJpbXBvcnQgdmlld3MgZnJvbSBcIi4uL3ZpZXdzL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBcIi4uL3ZpZXdzL2hvbWUvc3R5bGVzLnNjc3NcIjtcclxuXHJcbi8vIEltYWdlcyBpbXBvcnRzXHJcbmltcG9ydCBPQUsgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvb2FrLnBuZ1wiO1xyXG5pbXBvcnQgTE9HTyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb2tlYXBpLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICAgIC8vIEltYWdlcyBhc3NpZ25tZW50c1xyXG4gICAgY29uc3Qgb2FraW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBvYWtpbWcuc3JjID0gT0FLO1xyXG5cclxuICAgIGNvbnN0IGxvZ29pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxvZ29pbWcuc3JjID0gTE9HTztcclxuICAgIFxyXG4gICAgLy8gVmlldyBjcmVhdGlvblxyXG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB2aWV3cztcclxuICAgIC8qKioqKioqKioqKioqICovXHJcblxyXG4gICAgLy8gSW1hZ2VzIGNyZWF0aW9uXHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ29ESVYgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltYWdlJyk7XHJcbiAgICBsb2dvRElWLmFwcGVuZENoaWxkKGxvZ29pbWcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvYWtESVYgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vYWstaW1hZ2UnKTtcclxuICAgIG9ha0RJVi5hcHBlbmRDaGlsZChvYWtpbWcpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGRpYWxvZyA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBva2UtZGlhbG9nLXRleHQnKTtcclxuICAgIGNvbnN0IHZlcnNpb24gPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVyc2lvblwiKVxyXG4gICAgY29uc3QgZ29idG4gPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ28tYnRuXCIpXHJcblxyXG4gICAgZ29idG4uc3R5bGUub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiV2VsY29tZSB0byB0aGUgd29ybGQgb2YgUE9Lw6lNT04hIEknbSBPYWssIHRoZSBQT0vDqU1PTiBwcm9mZXNzb3IuIEVudGVyIHdoZW4geW91IGFyZSByZWFkeSFcIlxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBjb25zdCBzcGVlZCA9IDQwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0eXBlKCkge1xyXG4gICAgICAgICAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuaW5uZXJIVE1MICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlLCBzcGVlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpID09PSB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZ29idG4uc3R5bGUub3BhY2l0eSA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0eXBlKClcclxuICAgIFxyXG4gICAgY29uc3QgbWFqb3JWZXJzaW9uID0gMVxyXG4gICAgY29uc3QgbWlub3JWZXJzaW9uID0gMFxyXG4gICAgY29uc3QgcGF0Y2ggPSAwXHJcbiAgICAgICAgXHJcbiAgICB2ZXJzaW9uLmluc2VydEFkamFjZW50VGV4dCgnYWZ0ZXJiZWdpbicsIGB2LiAke21ham9yVmVyc2lvbn0uJHttaW5vclZlcnNpb259LiR7cGF0Y2h9YClcclxuXHJcbiAgICByZXR1cm4gZGl2RWxlbWVudDtcclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuY29udHJvbGxlcidcclxuaW1wb3J0IEFQSSBmcm9tICcuL2FwaS5jb250cm9sbGVyJ1xyXG5pbXBvcnQgbm90Zm91bmQgZnJvbSAnLi80MDQuY29udHJvbGxlcidcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIuY29udHJvbGxlcidcclxuaW1wb3J0IE11c2ljUGxheWVyIGZyb20gJy4vbXVzaWNQbGF5ZXIuY29udHJvbGxlcidcclxuXHJcbmNvbnN0IHBhZ2VzID0ge1xyXG4gICAgaG9tZTogSG9tZSxcclxuICAgIGFwaTogQVBJLFxyXG4gICAgbm90Zm91bmQ6IG5vdGZvdW5kXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBuYXZiYXI6IE5hdmJhcixcclxuICAgIG11c2ljcGxheWVyOiBNdXNpY1BsYXllclxyXG59XHJcblxyXG5leHBvcnQgeyBwYWdlcywgY29tcG9uZW50cyB9OyIsImltcG9ydCBtdXNpY1BsYXllciBmcm9tIFwiLi4vY29tcG9uZW50cy9tdXNpY1BsYXllci9tdXNpY1BsYXllci5odG1sXCJcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL211c2ljUGxheWVyL3N0eWxlcy5zY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gbXVzaWNQbGF5ZXI7XHJcblxyXG4gICAgY29uc3QgcGxheUJ0biA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5QnRuXCIpXHJcbiAgICBjb25zdCBwYXVzZUJ0biA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXVzZUJ0blwiKVxyXG4gICAgY29uc3QgbXVzaWMgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXVzaWNcIilcclxuXHJcblxyXG4gICAgLy8gZW50ZXJpbmcgdGhlIGFwcCwgdGhlIHBsYXkgYnV0dG9uIHdpbGwgYmUgc2hvd24gYnV0IG5vdCB0aGUgcGF1c2UgYnV0dG9uXHJcbiAgICBwbGF5QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuXHJcbiAgICBpZihwbGF5QnRuLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgIHBhdXNlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsaWNrIG9wdGlvbnMgd2hlbiBwcmVzcyB0aGUgcGxheSBidXR0b25cclxuICAgIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGF1c2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgbXVzaWMudm9sdW1lID0gMC41O1xyXG4gICAgICAgIG11c2ljLnBsYXkoKVxyXG4gICAgICAgIH0gICAgICBcclxuICAgICk7XHJcbiAgICBcclxuICAgIC8vIENsaWNrIG9wdGlvbnMgd2hlbiBwcmVzcyB0aGUgcGF1c2UgYnV0dG9uXHJcbiAgICBwYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwYXVzZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICBwbGF5QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICBpZihtdXNpYy5wbGF5KCkpe1xyXG4gICAgICAgICAgICBtdXNpYy5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZGl2RWxlbWVudDtcclxufSIsImltcG9ydCBuYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sXCJcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL25hdmJhci9zdHlsZXMuc2NzcydcclxuXHJcbi8vIEltYWdlcyBpbXBvcnRzXHJcbmltcG9ydCBCUkFORCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9qcy5wbmdcIjtcclxuaW1wb3J0IFdFQlBBQ0tMT0dPIGZyb20gXCIuLi9hc3NldHMvaW1nL3dlYnBhY2sucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gICAgLy8gSW1hZ2VzIGNyZWF0aW9uXHJcbiAgICBjb25zdCBicmFuZGxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJyYW5kbG9nby5zcmMgPSBCUkFORDtcclxuXHJcbiAgICBjb25zdCB3ZWJwYWNrbG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2VicGFja2xvZ28uc3JjID0gV0VCUEFDS0xPR09cclxuICAgIFxyXG4gICAgLy8gVmlldyBjcmVhdGlvblxyXG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IG5hdmJhclxyXG5cclxuICAgIC8vIEltYWdlIGRpdiBhc3NpZ25tZW50XHJcbiAgICBjb25zdCBicmFuZERpdiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItYnJhbmRcIik7XHJcbiAgICBjb25zdCB3ZWJwYWNrTG9nb0RpdiA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWJwYWNrLWxvZ29cIik7XHJcblxyXG4gICAgLy8gSW1hZ2VzIGdlbmVyYXRpb25cclxuICAgIGJyYW5kRGl2LmFwcGVuZENoaWxkKGJyYW5kbG9nbyk7XHJcbiAgICB3ZWJwYWNrTG9nb0Rpdi5hcHBlbmRDaGlsZCh3ZWJwYWNrbG9nbyk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gZGl2RWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBwYWdlcywgY29tcG9uZW50cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9pbmRleC5qc1wiXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xyXG5jb25zdCBuYXZiYXJDb21wb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1jb21wb25lbnRcIilcclxuY29uc3QgbXVzaWNQbGF5ZXJDb21wb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI211c2ljUGxheWVyLWNvbXBvbmVudFwiKVxyXG5cclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy8gbmF2YmFyQ29tcG9uZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudHMubmF2YmFyKCkpXHJcbi8vIG11c2ljUGxheWVyQ29tcG9uZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudHMubXVzaWNwbGF5ZXIoKSlcclxuXHJcbmZ1bmN0aW9uIHNob3dDb21wb25lbnRzKCkge1xyXG4gICAgbmF2YmFyQ29tcG9uZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudHMubmF2YmFyKCkpXHJcbiAgICBtdXNpY1BsYXllckNvbXBvbmVudC5hcHBlbmRDaGlsZChjb21wb25lbnRzLm11c2ljcGxheWVyKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVDb21wb25lbnRzKCkge1xyXG4gICAgbmF2YmFyQ29tcG9uZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgbXVzaWNQbGF5ZXJDb21wb25lbnQuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcblxyXG5jb25zdCByb3V0ZXIgPSBhc3luYyAocm91dGUpID0+IHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgXHJcbiAgICAvLyBQYWdlcyAvIHZpZXdzXHJcbiAgICBzd2l0Y2gocm91dGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSBcIlwiOlxyXG4gICAgICAgIGhpZGVDb21wb25lbnRzKClcclxuICAgICAgICByZXR1cm4gY29udGVudC5hcHBlbmRDaGlsZChwYWdlcy5ob21lKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBcIiMvXCI6XHJcbiAgICAgICAgaGlkZUNvbXBvbmVudHMoKVxyXG4gICAgICAgIHJldHVybiBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VzLmhvbWUoKSlcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFwiIy9hcHBcIjpcclxuICAgICAgICBzaG93Q29tcG9uZW50cygpXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXdhaXQgcGFnZXMuYXBpKCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaGlkZUNvbXBvbmVudHMoKVxyXG4gICAgICAgIHJldHVybiBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VzLm5vdGZvdW5kKCkpXHJcbiAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvdXRlciB9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIGRlZmVycmVkIHN0YXJ0dXBcblxuLy8gbm8ganNvbnAgZnVuY3Rpb25cblxuLy8gbm8gZGVmZXJyZWQgc3RhcnR1cCIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXIvaW5kZXgucm91dGVzJ1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb29rcyBsaWtlIHdlIGFyZSBpbiBkZXZlbG9wbWVudCBtb2RlIScpO1xyXG4gIH1cclxuXHJcbnJvdXRlcih3aW5kb3cubG9jYXRpb24uaGFzaClcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgcm91dGVyKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9