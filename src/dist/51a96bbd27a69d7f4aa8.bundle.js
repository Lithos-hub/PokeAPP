/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loader/styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loader/styles.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".loader-container {\n  background-image: linear-gradient(28deg, #3B4CCA, #202020);\n  box-shadow: 0px 10px 15px black;\n  position: absolute;\n  width: 75%;\n  top: 35%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  letter-spacing: 10px;\n  padding: 1.5rem;\n  font-size: 2em;\n  text-align: center;\n  border-radius: 10px;\n  font-weight: 100;\n}", "",{"version":3,"sources":["webpack://./src/components/loader/styles.scss"],"names":[],"mappings":"AAEA;EACI,0DAAA;EACA,+BAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,OAAA;EACA,QAAA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AADJ","sourcesContent":["@import '../../scss/variables';\r\n\r\n.loader-container {\r\n    background-image: linear-gradient(28deg, $poke3, $dark);\r\n    box-shadow: 0px 10px 15px black;\r\n    position: absolute;\r\n    width: 75%;\r\n    top: 35%;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    letter-spacing: 10px;\r\n    padding: 1.5rem;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    font-weight: 100;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pika404_png__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pokeball_png__WEBPACK_IMPORTED_MODULE_4__.default);
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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_img_pokedialog_png__WEBPACK_IMPORTED_MODULE_3__.default);
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

/***/ "./src/components/loader/loader.html":
/*!*******************************************!*\
  !*** ./src/components/loader/loader.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"loader-container\">\r\n    <h1>LOADING...</h1>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

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
var code = "<div class=\"toolbar fade\">\r\n    <ul class=\"d-flex nav-list justify-between\">\r\n        <li>\r\n            <button class=\"nav-button\">First generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Second generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Thrid generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Forth generation</button>\r\n        </li>\r\n        <li>\r\n            <button class=\"nav-button disabled\">Fith generation</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"container-fluid justify-center fade\">\r\n\r\n\r\n        <div class=\"row text-center\" id=\"pokeList\"></div>\r\n\r\n</div>\r\n";
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

/***/ "./src/components/loader/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/loader/styles.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loader/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzQyLjE5OC41MDEyNzljLjM3My0uNTMxNzE1OCAxLjEwNS0uNjYwOTM3IDEuNjM3LS4yODg2MjVsMzYuMzU0IDI1LjQ1NTU0NmMuNTMyLjM3MjMuNjYxIDEuMTA1MS4yODkgMS42MzY4bC01MC41OTkgNzIuMjYyM2MyNC41OTkgNy44NTg3IDQxLjM1OCAxNi4zMzU3IDQxLjM1OCAxNi4zMzU3cy00MC45NjQgNzAuNDYyLTExMC40NDMgNzAuNDYyLTExOC44NS02NS42NzItMTE4Ljg1LTY1LjY3MiAxNy41MDYtMTEuMTcyIDQzLjQ1Ni0yMC43NTM5bC01NS41LTY2LjE0MTVjLS40MTctLjQ5NzMtLjM1Mi0xLjIzODYuMTQ1LTEuNjU1OGwzMy45OTctMjguNTI3MTVjLjQ5OC0uNDE3MjMgMS4yMzktLjM1MjM4IDEuNjU2LjE0NDg3bDcwLjI3MiA4My43NDY4OGM2LjAxNy0uNjgwNiAxMi4xNDctMS4wNjEgMTguMzMzLTEuMDYxIDguODkxIDAgMTcuNzcxLjY3NTkgMjYuNDQgMS44MjI5em0xMy43NDYgMTg5LjIwMDcyMWMxOC41NDEtMTMuMjQyIDQ2LjU5Ny00Ny44MDQgNDYuNTk3LTQ3LjgwNHM3MS42NjQgNTYuNzkgNzEuNjY0IDE3Ny4yMDZjMCAxMjAuNDE1LTEyMy44OTYgMTkyLjg4OC0xMjMuODk2IDE5Mi44ODhzLTU5LjE5NS01OS43ODEtNzMuNzI3LTEzNS41NjJjLTE0LjUzMS03NS43ODEgMjEuNDk2LTE1OS45MjcgMjEuNDk2LTE1OS45MjdzMzkuMzI0LTEzLjU1OSA1Ny44NjYtMjYuODAxem0tMTk5LjY4MyAwYy0xOC41NDEtMTMuMjQyLTQ2LjU5Ny00Ny44MDQtNDYuNTk3LTQ3LjgwNHMtNzEuNjY0IDU2Ljc5LTcxLjY2NCAxNzcuMjA2YzAgMTIwLjQxNSAxMjMuODk2IDE5Mi44ODggMTIzLjg5NiAxOTIuODg4czU5LjE5NS01OS43ODEgNzMuNzI3LTEzNS41NjJjMTQuNTMxLTc1Ljc4MS0yMS40OTYtMTU5LjkyNy0yMS40OTYtMTU5LjkyN3MtMzkuMzI0LTEzLjU1OS01Ny44NjYtMjYuODAxeiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");

/***/ }),

/***/ "./src/assets/icons/dark.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/dark.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjI5LjM3OSA0NTIuODVDMjM5LjEwNiA0NTQuMzM5IDI0OS4wNjggNDU1LjExMSAyNTkuMjEyIDQ1NS4xMTFDMzY3LjIxNCA0NTUuMTExIDQ1NC43NjcgMzY3LjU1OCA0NTQuNzY3IDI1OS41NTZDNDU0Ljc2NyAxNTEuNTUzIDM2Ny4yMTQgNjQgMjU5LjIxMiA2NEMyNTEuOTY2IDY0IDI0NC44MTEgNjQuMzk0MSAyMzcuNzcgNjUuMTYyMUMyOTEuMzQ1IDEwNS43NTEgMzI2Ljc2NyAxNzYuMDYyIDMyNi43NjcgMjU2QzMyNi43NjcgMzQwLjA0IDI4Ny42MTYgNDEzLjQ0IDIyOS4zNzkgNDUyLjg1Wk0yNTUuNjU2IDUxMkMzOTcuMDQxIDUxMiA1MTEuNjU2IDM5Ny4zODUgNTExLjY1NiAyNTZDNTExLjY1NiAxMTQuNjE1IDM5Ny4wNDEgMCAyNTUuNjU2IDBDMTE0LjI3MSAwIC0wLjM0Mzc1IDExNC42MTUgLTAuMzQzNzUgMjU2Qy0wLjM0Mzc1IDM5Ny4zODUgMTE0LjI3MSA1MTIgMjU1LjY1NiA1MTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/assets/icons/dragon.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/dragon.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjgwLjcwMiAyNTQuODgxQzI4NC4xNzIgMjUyLjc2NSAyODcuMTE2IDI0OC4zMzEgMjg5LjQ5IDI0My40MDNDMzIwLjczNSAyNTYuMTczIDM0Mi42OTIgMjg2LjM0OSAzNDIuNjkyIDMyMS41NEMzNDIuNjkyIDM2OC4yOSAzMDMuOTQyIDQwNi4xODkgMjU2LjE0MiA0MDYuMTg5QzIzNi41MiA0MDYuMTg5IDIxOC40MjMgMzk5LjgwMiAyMDMuOTA2IDM4OS4wMzlDMTk5LjE0NCAzODYuNzg0IDE5NS4yMjYgMzg0LjYxOCAxOTIuMDIgMzgyLjg0NUMxODcuMDQ3IDM4MC4wOTYgMTgzLjc4NiAzNzguMjkzIDE4MS43NDQgMzc4LjU3NUMxNzUuNzc1IDM3OS4zOTggMTc3LjUwOCAzODQuODkgMTc5LjA4MyAzODkuODc5QzE4MC4xNTIgMzkzLjI2OCAxODEuMTQ5IDM5Ni40MjUgMTc5LjYwNiAzOTcuNzI3QzE3Ny45OTIgMzk5LjA5MSAxNzIuNzY0IDM5NC4xMDYgMTY2LjY1NSAzODguMjgyQzE1OC4zMzkgMzgwLjM1MyAxNDguMzkxIDM3MC44NjggMTQzLjcgMzczLjcxN0MxMzkuOTkxIDM3NS45NyAxNDMuNTkyIDM4Mi4wODEgMTQ4IDM4OS41NjFMMTQ4LjMyNyAzOTAuMTE2QzE1MC4xODkgMzkzLjI3OCAxNTIuMzQ3IDM5Ni40OTggMTU0LjMxNiAzOTkuNDM2QzE1OC4zMTkgNDA1LjQwNyAxNjEuNTQzIDQxMC4yMTkgMTU5LjkzIDQxMS4wMzNDMTU3Ljk4IDQxMi4wMTcgMTQ0LjM5NCA0MDIuODQ3IDEzMi45NDUgMzkwLjExNkMxMjguNTI2IDM4NS4yMDMgMTI0LjI0NiAzNzkuODc3IDEyMC4yNjggMzc0LjkyOEwxMjAuMjY4IDM3NC45MjdDMTExLjU2MSAzNjQuMDkzIDEwNC4zMDcgMzU1LjA2OCAxMDAuMjM1IDM1Ni4xMzdDOTUuMzM2NSAzNTcuNDIzIDk5LjA0MjEgMzY3LjUyNyAxMDQuNDg3IDM3Ny4yNUMxMDcuMDMzIDM4MS43OTcgMTEwLjAyOCAzODYuNDI3IDExMi42MjEgMzkwLjQzNkwxMTIuNjIxIDM5MC40MzdDMTE2LjY1NCAzOTYuNjcxIDExOS43MTUgNDAxLjQwMiAxMTguNjA1IDQwMS45ODRDMTE3LjEwNyA0MDIuNzY3IDEwMy45MjYgMzg5LjkxNCA5NC45NzM0IDM3My43MTdDODkuNjU1OSAzNjQuMDk2IDg1LjE5MDkgMzUzLjQ2NCA4MS41NzYxIDM0NC44NTdDNzcuNjU2IDMzNS41MjIgNzQuNzM1OSAzMjguNTY5IDcyLjgxMzEgMzI3Ljg2OUM2Ni4xMzI1IDMyNS40MzggNjYuMTMyNSAzMzkuMDU5IDY4LjgxMTkgMzU4LjcxOEM2OS4xNjE0IDM2MS4yODMgNjkuNjgxOSAzNjMuOTczIDcwLjMyMjggMzY2LjcxMkM5Ni4zMDcgNDUwLjc4NSAxNzYuMTI4IDUxMiAyNzAuNTY3IDUxMkMzODYuMDg0IDUxMiA0NzkuNzI4IDQyMC40MTIgNDc5LjcyOCAzMDcuNDMyQzQ3OS43MjggMTk5LjkgMzk0Ljg5OSAxMTEuNzQ3IDI4Ny4xMiAxMDMuNDk0QzI4Ny4yNTYgOTguNDI4NCAyODkuOSA4OC4zODMgMjg5LjkgODguMzgzQzI4OS45IDg4LjM4MyAzMDguOTI3IDQyLjM0NzIgMzA5LjkzMyAzMi41MDk5QzMwOS45OTkgMzEuODU3IDMxMC4wNzggMzEuMTQ3NSAzMTAuMTYzIDMwLjM5MTlDMzExLjM0OCAxOS43NjI5IDMxMy41NTMgMCAyOTYuNTUxIDBDMjg3LjQ3MSAwIDI4My4yNDkgNi43NTQ2NCAyNzguNDIgMTQuNDc5OUwyNzguNDIgMTQuNDhDMjc2LjU2NiAxNy40NDU3IDI3NC42MjIgMjAuNTU0NSAyNzIuMjggMjMuNDc5QzI1NS40MTIgNDQuNTQzNiAyMjcuMDQ4IDcwLjg0ODggMjEwLjk2NSA4NC44NjMxQzE3Ni45NzEgMTE0LjQ4NCAxNDMuNjE5IDEzOC44MjggMTI0LjE2NyAxNTMuMDI2TDEyNC4xNjcgMTUzLjAyNkwxMjQuMTY2IDE1My4wMjdDMTE1LjMxOSAxNTkuNDg0IDEwOS4zNDggMTYzLjg0MyAxMDcuNSAxNjUuNjQ0QzkzLjU3NCAxNzkuMjIgNDMuNjQxOCAyNjkuMjg2IDQzLjY0MTggMjY5LjI4NkM0My42NDE4IDI2OS4yODYgMjcuNDk0MyAyOTguMTgyIDMzLjIzMzggMzA0LjA0M0MzOC45NzMzIDMwOS45MDMgNTIuODE0MSAzMDguNTYgNTIuODE0MSAzMDguNTZDNTIuODE0MSAzMDguNTYgMjM4Ljc1NSAyNjUuOTAzIDI1NS40MDIgMjYyLjUzOUMyNTkuODg0IDI2MS42MzMgMjYzLjA0OCAyNjEuMTEgMjY1LjQ3NyAyNjAuNzA5QzI3Mi4wNzIgMjU5LjYyIDI3My4yNTYgMjU5LjQyNCAyODAuNzAyIDI1NC44ODFaTTE0OS4yMzUgMjAwLjA2NEMxMzkuMjU0IDIwOS41NTEgMTIyLjcwMSAyMzIuMTk2IDEyMi43MDEgMjMyLjE5NkMxMjIuNzAxIDIzMi4xOTYgMTUzLjQ2NSAyMzQuMDkxIDE3MC40MDggMjE3Ljk4NkMxODcuMzUyIDIwMS44OCAxODMuNDcgMTc0LjQzMyAxODMuNDcgMTc0LjQzM0MxODMuNDcgMTc0LjQzMyAxNTkuMjE1IDE5MC41NzcgMTQ5LjIzNSAyMDAuMDY0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/assets/icons/electric.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/electric.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUyLjU2IDAuNTgzNjU5QzE1Mi40NjEgMC4yOTc5NiAxNTIuNjc0IDAgMTUyLjk3NiAwSDMzMi44MDVDMzMyLjk5OCAwIDMzMy4xNjkgMC4xMjU1ODcgMzMzLjIyNiAwLjMwOTc4Mkw0MTUuODI0IDI2Ny4xNzFDNDE1LjkxMSAyNjcuNDU0IDQxNS43IDI2Ny43NDEgNDE1LjQwMyAyNjcuNzQxSDI5NS42ODRDMjk1LjUzOCAyNjcuNzQxIDI5NS40MzMgMjY3Ljg4IDI5NS40NzMgMjY4LjAyMUwzNjQuMTM1IDUwOS43MjZDMzY0LjI2OSA1MTAuMTk1IDM2My42NTQgNTEwLjUwMSAzNjMuMzYxIDUxMC4xMTFMOTYuNTI5NSAxNTUuMjY3Qzk2LjMxMTUgMTU0Ljk3NyA5Ni41MTg0IDE1NC41NjMgOTYuODgxIDE1NC41NjNIMjA1LjUzNkMyMDUuNjg3IDE1NC41NjMgMjA1Ljc5MyAxNTQuNDE0IDIwNS43NDMgMTU0LjI3MUwxNTIuNTYgMC41ODM2NTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/assets/icons/fairy.svg":
/*!************************************!*\
  !*** ./src/assets/icons/fairy.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAyLjcyNiA0MDUuOTc4TDE4NC44NDggMzgyLjE2NkwyNTUuNzc4IDUxMS44NTdDMjU1Ljg3MSA1MTIuMDI1IDI1Ni4xMTIgNTEyLjAyNSAyNTYuMjA0IDUxMS44NTdMMzI3LjEzNCAzODIuMTY2TDQwOS4yNTcgNDA1Ljk3OEM0MDkuNDQxIDQwNi4wMzEgNDA5LjYxMiA0MDUuODYgNDA5LjU1NyA0MDUuNjc2TDM4NS43NDEgMzI1LjE3OUw1MTEuODU2IDI1Ni4yMDRDNTEyLjAyNSAyNTYuMTEyIDUxMi4wMjUgMjU1Ljg3MSA1MTEuODU3IDI1NS43NzlMMzg0LjcwMiAxODYuMjM1TDQwOS41NTcgMTAyLjIyNUM0MDkuNjEyIDEwMi4wNDEgNDA5LjQ0MSAxMDEuODcgNDA5LjI1NyAxMDEuOTIzTDMyNS4yMDggMTI2LjI5NEwyNTYuMjA0IDAuMTI2MTg4QzI1Ni4xMTIgLTAuMDQyMDU5NyAyNTUuODcxIC0wLjA0MjA2NDQgMjU1Ljc3OSAwLjEyNjE4NEwxODYuNzc1IDEyNi4yOTRMMTAyLjcyNiAxMDEuOTIzQzEwMi41NDIgMTAxLjg3IDEwMi4zNzEgMTAyLjA0MSAxMDIuNDI2IDEwMi4yMjVMMTI3LjI4MSAxODYuMjM1TDAuMTI2MTg4IDI1NS43NzlDLTAuMDQyMDU5NyAyNTUuODcxIC0wLjA0MjA2NDQgMjU2LjExMiAwLjEyNjE4NCAyNTYuMjA0TDEyNi4yNDEgMzI1LjE3OUwxMDIuNDI2IDQwNS42NzZDMTAyLjM3MSA0MDUuODYgMTAyLjU0MiA0MDYuMDMxIDEwMi43MjYgNDA1Ljk3OFpNMTY2LjQ1MiAyNTYuODc2TDIyNC42MzEgMjg4LjY5NUwyNTYuNDUgMzQ2Ljg3M0MyNTYuNTQyIDM0Ny4wNDIgMjU2Ljc4NCAzNDcuMDQyIDI1Ni44NzYgMzQ2Ljg3M0wyODguNjk1IDI4OC42OTVMMzQ2Ljg3MyAyNTYuODc2QzM0Ny4wNDEgMjU2Ljc4NCAzNDcuMDQxIDI1Ni41NDIgMzQ2Ljg3MyAyNTYuNDVMMjg4LjY5NSAyMjQuNjMxTDI1Ni44NzYgMTY2LjQ1M0MyNTYuNzg0IDE2Ni4yODQgMjU2LjU0MiAxNjYuMjg0IDI1Ni40NSAxNjYuNDUzTDIyNC42MzEgMjI0LjYzMUwxNjYuNDUyIDI1Ni40NUMxNjYuMjg0IDI1Ni41NDIgMTY2LjI4NCAyNTYuNzg0IDE2Ni40NTIgMjU2Ljg3NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/fighting.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/fighting.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODguMjMzNiA0Mi41NjU2Qzk0LjQyOTkgMTguMTAxNCAxMTYuNTkzIDAgMTQyLjk4MyAwQzE2Mi43NzggMCAxODAuMTk1IDEwLjE4NDcgMTkwLjI3OSAyNS42SDIwNi43OTJDMjE3LjA1MSAxNS4wNzE2IDIzMS4zODQgOC41MzMzMyAyNDcuMjQ1IDguNTMzMzNDMjcwLjQ5OSA4LjUzMzMzIDI5MC40NzEgMjIuNTg4MiAyOTkuMTI5IDQyLjY2NjdIMzEyLjk1NEMzMjEuNjE3IDM3LjI1ODUgMzMxLjg1MyAzNC4xMzMzIDM0Mi44MTggMzQuMTMzM0MzNjYuMDczIDM0LjEzMzMgMzg2LjA0NCA0OC4xODgyIDM5NC43MDIgNjguMjY2N0g0MzIuMjk3QzQzMi42MTggNjguMjY2NyA0MzIuOTE5IDY4LjM1MzIgNDMzLjE3OCA2OC41MDQxQzQzNC44OTUgNjguMzQ3IDQzNi42MzQgNjguMjY2NyA0MzguMzkxIDY4LjI2NjdDNDY5LjU4MiA2OC4yNjY3IDQ5NC44NjYgOTMuNTUxNCA0OTQuODY2IDEyNC43NDJWMjk0LjA4Nkw0OTQuODY3IDI5NC40TDQ5NC44NjYgMjk0LjcxNFYyOTcuMTUzQzQ5NC44NjYgMjk4LjE4NiA0OTQuODM4IDI5OS4yMTUgNDk0Ljc4MiAzMDAuMjM5QzQ5MS4zODQgNDE3LjcxNyAzODUuNzQ5IDUxMiAyNTUuOTMzIDUxMkMxMjMuOTc0IDUxMiAxNyA0MTQuNTc3IDE3IDI5NC40QzE3IDIzNi4zOTEgNDEuOTI0OSAxODMuNjgzIDgyLjU1MzUgMTQ0LjY3NUM4Mi40NTIyIDIwMS4yMjggODMuNDA3NCAyNTkuNjk0IDg3LjgxMDcgMjU4LjY5MUM5OS42MDExIDI1Ni4wMDMgOTAuMzg5MSA4MC44Mzk1IDg4LjIzMzYgNDIuNTY1NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/fire.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/fire.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzUyLjI1OCAzOTUuMzk0QzM1OC41ODQgMzcyLjI2MyAzNDYuMzA1IDMyNC43MSAzNDYuMzA1IDMyNC43MUMzNDYuMzA1IDMyNC43MSAzMzcuMzk5IDM2My40NDkgMzIzLjQ4MyAzNzcuNzY3QzMxMS42MTEgMzg5Ljk4IDI5Ny4wNjYgMzk4LjQ1MSAyNzYuMjA2IDQwMC42NzdDMjkzLjI2MSAzOTIuMzkzIDMwNC45OSAzNzUuMTIgMzA0Ljk5IDM1NS4xNTVDMzA0Ljk5IDMyNy4xMjkgMjgxLjg3OCAzMDQuNDA5IDI1My4zNjggMzA0LjQwOUMyMjQuODU4IDMwNC40MDkgMjAxLjc0NSAzMjcuMTI5IDIwMS43NDUgMzU1LjE1NUMyMDEuNzQ1IDM2Mi44MDkgMjAzLjQ3IDM3MC4wNjggMjA2LjU1NyAzNzYuNTc2QzE4OC43MjUgMzYyLjM3IDE4NS45MjEgMzM5LjU5NCAxODUuOTIxIDMzOS41OTRDMTg1LjkyMSAzMzkuNTk0IDE2Ni4wMDkgNDIyLjI2NCAyMjAuODc1IDQ2MS4xNTJDMjc1Ljc0IDUwMC4wNCAzODMuMjE5IDQ2Ni42MTQgMzgzLjIxOSA0NjYuNjE0QzM4My4yMTkgNDY2LjYxNCAyMjkuNDEgNTc0LjgzNyAxMTUuNDM2IDQ1Ny4wNUMxNy4yNTY4IDM1NS41ODQgODkuODExMSAyMjIuMDAzIDg5LjgxMTEgMjIyLjAwM0M4OS44MTExIDIyMi4wMDMgODYuNjc3NyAyMzQuMzk1IDg2LjY3NzcgMjQ4Ljc4Qzg2LjY3NzcgMjYzLjE2NSA5NC40NzcgMjc0LjExIDk0LjQ3NyAyNzQuMTFDOTQuNDc3IDI3NC4xMSAxMTcuNzQyIDIyNS4wNzEgMTM1Ljg0OCAyMDUuMTI4QzE1Mi45ODQgMTg2LjI1NCAxNzQuNDY1IDE3MC45NDYgMTkzLjAxOSAxNTcuNzI0QzIwNy4zMDEgMTQ3LjU0NiAyMTkuODQ5IDEzOC42MDQgMjI3LjM0MyAxMzAuMjIzQzI2OC42MiA4NC4wNjg3IDI0My4zMTEgMCAyNDMuMzExIDBDMjQzLjMxMSAwIDI4OS44NDEgNDEuMDIgMzAyLjgzMSA5My45OTc4QzMwNy43ODMgMTE0LjE5MiAzMDQuNTk3IDEzNy4xNjkgMzAxLjc0OSAxNTcuNzE2QzI5Ny4xMjUgMTkxLjA3MiAyOTMuMzg4IDIxOC4wMjUgMzI2Ljc5MyAyMTYuMjc2QzM4MC43NzUgMjEzLjQ0OSAzMzMuODY2IDEzMC4yMjMgMzMzLjg2NiAxMzAuMjIzQzMzMy44NjYgMTMwLjIyMyA0NTYuMzE4IDE5NC41ODMgNDQ3LjE3IDMwNy4xNDVDNDM4LjAyMSA0MTkuNzA3IDMxMy4zMjQgNDQ1LjI5NyAzMTMuMzI0IDQ0NS4yOTdDMzEzLjMyNCA0NDUuMjk3IDM0NS45MzEgNDE4LjUyNSAzNTIuMjU4IDM5NS4zOTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/assets/icons/flying.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/flying.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTc4LjcxMiA0NzcuNzMzQzI1My43MTUgNDc3LjczMyAzMTcuOTI3IDQzNi4wNDggMzQ0LjQzNiAzNzYuOTU2QzM0NC43NiAzNzYuMjM1IDIzOC4wMDcgNDA0LjY5OSAyNDEuNDExIDM5NC42MzdDMjQyLjkzMSAzOTAuMTQ0IDMwOC4zNzEgMzY2LjIzOCAzNTYuMDQ4IDMzOC4zNTRDMzgzLjQ1MSAzMjIuMzI3IDM5Ni4wNyAyODguNCAzOTYuMDcgMjg4LjRDMzk2LjA3IDI4OC40IDM0OS45MDMgMzEwLjgxNSAzMjYuNTY0IDMxNi41MDFDMjc5LjUzMiAzMjcuOTYxIDIzOC4xMzEgMzI2LjcyNyAyMzguMTMxIDMyNS41MzNDMjM4LjEzMSAzMjIuOTUxIDMwNi44NzYgMzA5Ljg4OSA0MDIuNDI0IDI1MS42NjRDNDQ3LjM2NyAyMjQuMjc3IDQ1OS41NzQgMTc3LjEwMyA0NTkuNTc0IDE3Ny4xMDNDNDU5LjU3NCAxNzcuMTAzIDQxMC4xNjMgMjA2LjUzNSAzODAuMjkzIDIxNi4yNTJDMzA5LjQ1NyAyMzkuMjk1IDI0NC44MTUgMjQ2LjIzOSAyNDQuODE1IDI0My4xMjFDMjQ0LjgxNSAyMzYuNDQ1IDMwMS43MDIgMjIwLjgwMiAzNjIuMDE2IDE5MS41NzdDMzkzLjM3NiAxNzYuMzgyIDQyMC41MzUgMTU2LjUzIDQ1Mi4wMDggMTM0LjQ1M0M1MDMuNTA2IDk4LjMzMiA1MTEuOTk5IDM0IDUxMS45OTkgMzRDNTExLjk5OSAzNCA0NjEuMjA3IDY2Ljc2MDEgNDM2LjQyIDc3LjYzOTRDMzM0LjE0MSAxMjIuNTMxIDI0My44MjkgMTQ2LjA3OSAxNzguNzEyIDE1MS4xNzdDODAuNDE2IDE1OC44NzMgMCAyMjcuNDU2IDAgMzE2LjUwMUMwIDQwNS41NDcgODAuMDExOSA0NzcuNzMzIDE3OC43MTIgNDc3LjczM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/ghost.svg":
/*!************************************!*\
  !*** ./src/assets/icons/ghost.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzY4Ljk1MiA1MTAuMjI3QzMyMi43NjkgNTEyLjU5MSAyNjkuODk2IDUxMi41OTEgMjUxLjkyOCA1MTAuMjI3QzExMS43NyA0OTEuNzg4IDAgMzg5LjMxMyAwIDI1MC44QzAgMTEyLjI4NyAxMTQuNjE1IDAgMjU2IDBDMzk3LjM4NSAwIDUxMiAxMTIuMjg3IDUxMiAyNTAuOEM1MTIgMzE1LjIyMSA0ODcuMjA3IDM3My45NjkgNDQ2LjQ2IDQxOC4zODdDNDM1LjM5NSA0MzAuNDQ4IDQ1MC41NzcgNDM4LjkwOCA0NjYuMDAyIDQ0Ny41MDRDNDgxLjEzIDQ1NS45MzUgNDk2LjQ5MiA0NjQuNDk2IDQ4Ny41NjQgNDc2LjcxMkM0NzcuNzI2IDQ5MC4xNzMgNDI0LjM5MiA1MDcuMzg5IDM2OC45NTIgNTEwLjIyN1pNMjIwIDIxOS40NUMyMjAgMjQxLjA5MiAyMDIuMDkxIDI1OC42MzcgMTgwIDI1OC42MzdDMTU3LjkwOSAyNTguNjM3IDE0MCAyNDEuMDkyIDE0MCAyMTkuNDVDMTQwIDIwNC45MzUgMTQ4LjA1NSAxOTIuMjY0IDE2MC4wMjQgMTg1LjQ5MUMxNjAuNzEzIDIwNC4zNjIgMTc2LjIyOSAyMTkuNDQ5IDE5NS4yNjkgMjE5LjQ0OUgyMjBDMjIwIDIxOS40NDkgMjIwIDIxOS40NSAyMjAgMjE5LjQ1Wk0zNDMuOTc2IDE4NS40OTFDMzQzLjI4NyAyMDQuMzYyIDMyNy43NzEgMjE5LjQ0OSAzMDguNzMxIDIxOS40NDlIMjg0QzI4NCAyMTkuNDQ5IDI4NCAyMTkuNDUgMjg0IDIxOS40NUMyODQgMjQxLjA5MiAzMDEuOTA5IDI1OC42MzcgMzI0IDI1OC42MzdDMzQ2LjA5MSAyNTguNjM3IDM2NCAyNDEuMDkyIDM2NCAyMTkuNDVDMzY0IDIwNC45MzUgMzU1Ljk0NSAxOTIuMjY0IDM0My45NzYgMTg1LjQ5MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/grass.svg":
/*!************************************!*\
  !*** ./src/assets/icons/grass.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOTcuNDEyMSA0NDAuNjQ5Yy0xLjc1NzQtMS42NTMtMy40OTU0LTMuMzM4LTUuMjEzMi01LjA1Ni05MC42ODQ1NS05MC42ODQtOTAuNjg0NTMtMjM3LjcxMyAwLTMyOC4zOTcgOTAuNjg0MS05MC42ODQ5IDM3OS42NDAxLTk2Ljc1MTYgMzc5LjY0MDEtOTYuNzUxNnMzOS40NDIgMzM0LjQ2NDYtNTEuMjQyIDQyNS4xNDg2Yy04MC41NCA4MC41NC0yMDUuNTIyIDg5LjU1LTI5Ni4wMDUgMjcuMDMxbDcyLjkwOC04OS40NzEgMTE2LjU1LTI1LjE2My05NS4xMzktOS41MTEgNjAuNDYyLTYxLjU2MiA2OC44MjQtMTUuMDc3LTU0LjQyMi0xNi4xMTcgNTQuNDIyLTk4LjE3Ni03Ny40MSA4Ni44MjgtMjkuODkzLTQyLjE4MyAxMC41MjMgNjkuNjQ4LTUzLjkxNyA2MC43ODItMjQuOTkzLTc2Ljl2MTAyLjI2OHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/assets/icons/ground.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/ground.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEyLjc2NCA0MzkuNzU0QzExMi42MjUgNDM5Ljc1NCAxMTIuNTI4IDQzOS42MTcgMTEyLjU3NCA0MzkuNDg2TDI0My4yODkgNzAuMTM0QzI0My4zMTggNzAuMDUzNyAyNDMuMzk0IDcwIDI0My40NzkgNzBIMzgzLjAyMUMzODMuMTA2IDcwIDM4My4xODMgNzAuMDU0MSAzODMuMjExIDcwLjEzNDlMNTExLjk4NyA0MzkuNDg3QzUxMi4wMzIgNDM5LjYxOCA1MTEuOTM1IDQzOS43NTQgNTExLjc5NyA0MzkuNzU0SDExNi42OTJIMTEyLjc2NFpNMC4yMDEzMDYgNDQxLjE5OUMwLjA2MDkxMjIgNDQxLjE5OSAtMC4wMzYyODUyIDQ0MS4wNTkgMC4wMTI5NjA3IDQ0MC45MjhMOTcuMzUyNiAxODEuMDU2Qzk3LjM4MjEgMTgwLjk3NyA5Ny40NTcxIDE4MC45MjUgOTcuNTQxIDE4MC45MjVIMTgyLjExOEMxODIuMjU4IDE4MC45MjUgMTgyLjM1NSAxODEuMDY0IDE4Mi4zMDcgMTgxLjE5NUw4OC4xODIzIDQ0MS4wNjdDODguMTUzNSA0NDEuMTQ2IDg4LjA3NzkgNDQxLjE5OSA4Ny45OTMyIDQ0MS4xOTlIMC4yMDEzMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/assets/icons/ice.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/ice.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzg0LjMwNCAzOS4wNDE4TDM4NS44NzkgMTc3LjM5MkwyNjUuMjA5IDIzNS4zMTlMMjYzLjcyMSAxMDQuNjlMMzg0LjMwNCAzOS4wNDE4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MDUuMjY5IDI1Ny4wNDdMMzg1LjgxNCAzMjUuMzc0TDI2Ni4yODggMjU2LjkzOUwzODUuNzUyIDE5NC4xODdMNTA1LjI2OSAyNTcuMDQ3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNDUuMDQgMjU3LjA0N0wxMjUuNTg1IDMyNS4zNzRMNi4wNTg2MSAyNTYuOTM5TDEyNS41MjMgMTk0LjE4N0wyNDUuMDQgMjU3LjA0N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI0LjI0MyAzOC40NzUzTDI0OC4yMjkgOTkuODgxTDI0NS4wNTkgMjMzLjY5N0wxMjcuOTkzIDE3NS43MTlMMTI0LjI0MyAzOC40NzUzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zODcuNjc4IDQ3My41MjVMMjYzLjY5MiA0MTIuMTE5TDI2Ni44NjIgMjc4LjMwMkwzODMuOTI4IDMzNi4yODFMMzg3LjY3OCA0NzMuNTI1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjguNTI1IDQ3NC43N0wxMjYuOTQ5IDMzNi40MkwyNDcuNjIgMjc4LjQ5M0wyNDkuMTA4IDQwOS4xMjFMMTI4LjUyNSA0NzQuNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/assets/icons/normal.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/normal.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDgxIDI1NkM0ODEgMzgwLjI2NCAzODAuMjY0IDQ4MSAyNTYgNDgxQzEzMS43MzYgNDgxIDMxIDM4MC4yNjQgMzEgMjU2QzMxIDEzMS43MzYgMTMxLjczNiAzMSAyNTYgMzFDMzgwLjI2NCAzMSA0ODEgMTMxLjczNiA0ODEgMjU2Wk0zODQuNTcxIDI1NkMzODQuNTcxIDMyNy4wMDggMzI3LjAwOCAzODQuNTcxIDI1NiAzODQuNTcxQzE4NC45OTIgMzg0LjU3MSAxMjcuNDI5IDMyNy4wMDggMTI3LjQyOSAyNTZDMTI3LjQyOSAxODQuOTkyIDE4NC45OTIgMTI3LjQyOSAyNTYgMTI3LjQyOUMzMjcuMDA4IDEyNy40MjkgMzg0LjU3MSAxODQuOTkyIDM4NC41NzEgMjU2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/assets/icons/poison.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/poison.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDI3LjgyMSAzOTMuNDQ5QzQ3OS41MjQgMzUyLjEwOCA1MTIgMjkyLjM3NiA1MTIgMjI1Ljk1QzUxMiAxMDEuMTYxIDM5Ny4zODUgMCAyNTYgMEMxMTQuNjE1IDAgMCAxMDEuMTYxIDAgMjI1Ljk1QzAgMjg5Ljk3OCAzMC4xNzM3IDM0Ny43ODYgNzguNjU1MyAzODguOTAxQzc1LjcxNzEgMzk5LjA0NiA3NC4xMDUyIDQxMC4wODEgNzQuMTA1MiA0MjEuNjJDNzQuMTA1MiA0NzEuNTM1IDEwNC4yNjcgNTEyIDE0MS40NzQgNTEyQzE2NS42NSA1MTIgMTg2Ljg1MiA0OTQuOTE1IDE5OC43MzcgNDY5LjI1NEMyMTAuNjIyIDQ5NC45MTUgMjMxLjgyNCA1MTIgMjU2IDUxMkMyNzguMDM4IDUxMiAyOTcuNjA0IDQ5Ny44MDQgMzA5Ljg5NSA0NzUuODU3QzMyMi4xODYgNDk3LjgwNCAzNDEuNzUyIDUxMiAzNjMuNzg5IDUxMkM0MDAuOTk2IDUxMiA0MzEuMTU4IDQ3MS41MzUgNDMxLjE1OCA0MjEuNjJDNDMxLjE1OCA0MTEuNzg0IDQyOS45ODYgNDAyLjMxNCA0MjcuODIxIDM5My40NDlaTTQwNC4yMTEgMjMwLjQzMUM0MDQuMjExIDI5My43ODUgMzM2LjM0NiAzNDUuMTQ0IDI1Mi42MzIgMzQ1LjE0NEMxNjguOTE3IDM0NS4xNDQgMTAxLjA1MyAyOTMuNzg1IDEwMS4wNTMgMjMwLjQzMUMxMDEuMDUzIDE2Ny4wNzcgMTY4LjkxNyAxMTUuNzE4IDI1Mi42MzIgMTE1LjcxOEMzMzYuMzQ2IDExNS43MTggNDA0LjIxMSAxNjcuMDc3IDQwNC4yMTEgMjMwLjQzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/psychic.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/psychic.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDU1LjkyNSA0MjUuMTg0QzQ1NS45MjUgNDI1LjE4NCAzOTEuMzY1IDQ3Ni45NjMgMjYyLjg5MyA0NTUuNTM2QzE2NS40MjMgNDM5LjI3OSAxMTMuNDM3IDMzMS44MzMgMTEzLjQzNyAyNzQuMDc5QzExMy40MzcgMTM3LjE0OSAyMTQuNzgzIDEwNS45ODggMjgzLjMgMTA1Ljk4OEMzNTEuODE2IDEwNS45ODggMzk2LjUxMyAxNzIuNzg4IDM5Ni41MTMgMjI0LjUwOEMzOTYuNTEzIDI3Ni4yMjggMzU5LjkzMyAzMjEuNDY2IDMwMy4wMDYgMzIxLjQ2NkMyNDYuMDggMzIxLjQ2NiAyMjkuMjIgMjgxLjUwMSAyMjkuMjIgMjQ0Ljc1OEMyMjkuMjIgMjA4LjAxNiAyNTguOTQ3IDE5NS4wNzEgMjg2LjA1OCAxOTUuMDcxQzMxMy4xNjkgMTk1LjA3MSAzMjIuNDUyIDIxOC4yMTcgMzIyLjQ1MiAyMzguMTFDMzIyLjQ1MiAyNTguMDA0IDMwNy4wMTcgMjY1LjEyOCAyOTQuMTQzIDI2NS4xMjhDMjgxLjI2OSAyNjUuMTI4IDI3OS45OTYgMjU4LjYzMyAyNzUuMDY5IDI1MS44MDdDMjcwLjE0MSAyNDQuOTgyIDI4MS4zNTMgMjE5LjE0NiAyNjIuODkzIDIxOS4xNDZDMjQ0LjQzMyAyMTkuMTQ2IDI0MC45OTIgMjQ4Ljg0NyAyNDAuOTkyIDI0OC44NDdDMjQwLjk5MiAyNDguODQ3IDI0Ny43MjIgMzA2LjE4IDMwMy4wMDYgMzA1LjE5MUMzNTguMjkxIDMwNC4yMDEgMzg0LjUxOCAyNjEuNDYxIDM3Ni44OTYgMjE5LjE0NkMzNjkuMjc0IDE3Ni44MyAzMjguMjA3IDEzMS44NjUgMjU2LjEzMyAxNDAuOTUxQzE4NC4wNTkgMTUwLjAzNyAxNTQuNjMyIDIyMi44NjEgMTY3LjYwMyAzMDAuNjg1QzE4MC41NzQgMzc4LjUxIDI3My44MDcgNDIzLjYwMiAzNDcuMTEyIDQwNy4zNzlDNDIwLjQxOCAzOTEuMTU2IDQ5My40MjkgMzM4LjA4NiA0OTMuNDI5IDIwMy41MzNDNDkzLjQyOSA2OC45Nzg5IDM3Ni44OTYgLTExLjkwMDIgMjM3Ljk0MSAxLjQyOTEzQzk4Ljk4NTkgMTQuNzU4NCAxMi43MjkgMTM2LjI0MiAxOC4yNTAyIDI4Mi4yMDdDMjMuNzcxNCA0MjguMTcyIDE2Mi4yNzUgNTA3LjY2OSAyNzkuMzk0IDUxMS43NjZDMzk2LjUxMyA1MTUuODY0IDQ2OC4zMTIgNDQ4LjA2NyA0NjguMzEyIDQ0OC4wNjdDNDY4LjMxMiA0NDguMDY3IDQ4NC40NTkgNDMzLjY2OCA0NzguMTI4IDQyMi40MjRDNDcxLjc5OCA0MTEuMTggNDU1LjkyNSA0MjUuMTg0IDQ1NS45MjUgNDI1LjE4NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/rock.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/rock.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzk1LjEzOCAyNDQuNzU3QzM5NS4xMDkgMjQ0LjcxNyAzOTUuMDk3IDI0NC42NjcgMzk1LjEwNSAyNDQuNjE4TDQyNy43NjkgNTQuMTUxOEM0MjcuNzg0IDU0LjA2NDEgNDI3Ljg2MSA1NCA0MjcuOTQ5IDU0SDQzOC4yODdDNDM4LjM2NyA1NCA0MzguNDM3IDU0LjA1MTcgNDM4LjQ2MSA1NC4xMjc3TDUxMi4wNTEgMjg3LjEzMUM1MTIuMDc0IDI4Ny4yMDMgNTEyLjA0OSAyODcuMjgzIDUxMS45ODkgMjg3LjMzTDQ1Ny43MyAzMjkuNjkzQzQ1Ny42NDkgMzI5Ljc1NiA0NTcuNTMyIDMyOS43NCA0NTcuNDcxIDMyOS42NTdMMzk1LjEzOCAyNDQuNzU3Wk0tMSAzNzEuMDIyQy0xIDM3MS4xMDEgLTAuOTQ5MjA0IDM3MS4xNzEgLTAuODc0MTA5IDM3MS4xOTZMMTEwLjk3NSA0MDcuNzY3QzExMS4wMjkgNDA3Ljc4NSAxMTEuMDg5IDQwNy43NzYgMTExLjEzNiA0MDcuNzQ0TDM2MS4xNDUgMjM1LjE0NEMzNjEuMTg3IDIzNS4xMTUgMzYxLjIxNSAyMzUuMDcgMzYxLjIyMiAyMzUuMDJMMzg4LjAzMiA1NS4xMjg0QzM4OC4wNDkgNTUuMDE4IDM4Ny45NjMgNTQuOTE4OCAzODcuODUyIDU0LjkxODhIMTY2LjQwNkMxNjYuMzUxIDU0LjkxODggMTY2LjMgNTQuOTQzIDE2Ni4yNjUgNTQuOTg0OUwtMC45NTc5NzQgMjU2LjcxNEMtMC45ODUxNCAyNTYuNzQ3IC0xIDI1Ni43ODggLTEgMjU2LjgzMVYzNzEuMDIyWk0xNTcuNTgzIDQxNy4wODVMMjc5Ljc3NiA0NTcuMTEyQzI3OS44MzEgNDU3LjEzIDI3OS44OTIgNDU3LjEyMSAyNzkuOTM5IDQ1Ny4wODdMNDI1LjQxOCAzNTIuNzM0QzQyNS40OTkgMzUyLjY3NyA0MjUuNTE5IDM1Mi41NjYgNDI1LjQ2NCAzNTIuNDg0TDM3MC45MjggMjcxLjMyOUMzNzAuODcxIDI3MS4yNDQgMzcwLjc1NyAyNzEuMjIyIDM3MC42NzMgMjcxLjI4TDE1Ny41ODMgNDE3LjA4NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/icons/steel.svg":
/*!************************************!*\
  !*** ./src/assets/icons/steel.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4wNTExMTA3IDI1NC41MjdDLTAuMDE3MDA0NiAyNTQuNDExIC0wLjAxNzAzODggMjU0LjI2NyAwLjA1MTAxOTYgMjU0LjE1TDEyOC43OTUgMzQuMTg0M0MxMjguODYyIDM0LjA3MDIgMTI4Ljk4NSAzNCAxMjkuMTE3IDM0SDM4NC4yOTRDMzg0LjQyNyAzNCAzODQuNTUgMzQuMDcwOCAzODQuNjE3IDM0LjE4NTlMNTExLjk0OSAyNTQuMTUyQzUxMi4wMTYgMjU0LjI2NyA1MTIuMDE2IDI1NC40MSA1MTEuOTQ5IDI1NC41MjVMMzg0LjYxNyA0NzQuMjQ0QzM4NC41NSA0NzQuMzU5IDM4NC40MjcgNDc0LjQzIDM4NC4yOTQgNDc0LjQzSDEyOS4xMTdDMTI4Ljk4NSA0NzQuNDMgMTI4Ljg2MiA0NzQuMzYgMTI4Ljc5NSA0NzQuMjQ2TDAuMDUxMTEwNyAyNTQuNTI3Wk0zNzQuNjE3IDI1NC4yMTVDMzc0LjYxNyAzMTkuNzAzIDMyMS41MjggMzcyLjc5MiAyNTYuMDQgMzcyLjc5MkMxOTAuNTUyIDM3Mi43OTIgMTM3LjQ2MyAzMTkuNzAzIDEzNy40NjMgMjU0LjIxNUMxMzcuNDYzIDE4OC43MjYgMTkwLjU1MiAxMzUuNjM4IDI1Ni4wNCAxMzUuNjM4QzMyMS41MjggMTM1LjYzOCAzNzQuNjE3IDE4OC43MjYgMzc0LjYxNyAyNTQuMjE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/assets/icons/water.svg":
/*!************************************!*\
  !*** ./src/assets/icons/water.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIyLjE3MiAzNDYuNTE1QzQyMi4xNzIgNDM3Ljg5NyAzNDcuODEzIDUxMS45NzcgMjU2LjA4NiA1MTEuOTc3QzE2NC4zNTkgNTExLjk3NyA5MCA0MzcuODk3IDkwIDM0Ni41MTVDOTAgMjU3LjYzOSAyNDcuMTAyIDEzLjU0NzkgMjU1LjcxOCAwLjIyNzgxQzI1NS45MTUgLTAuMDc1OTM4NCAyNTYuMjU4IC0wLjA3NTkzNTggMjU2LjQ1NCAwLjIyNzgxM0MyNjUuMDcgMTMuNTQ3OSA0MjIuMTcyIDI1Ny42MzkgNDIyLjE3MiAzNDYuNTE1Wk0yMjguNCA0NTguOTMxQzE0NC4xMiA0NDAuNDkgMTU4LjU0MiAzNDcuMTMgMTU4LjU0MiAzNDcuMTNDMTU4LjU0MiAzNDcuMTMgMTgxLjU1NiA0MDMuNDg4IDIzNy40MDUgNDIxLjc0NEMyOTMuMjUzIDQzOS45OTkgMzYwLjc0NSA0MTMuMjI1IDM2MC43NDUgNDEzLjIyNUMzNjAuNzQ1IDQxMy4yMjUgMzEyLjY4IDQ3Ny4zNzEgMjI4LjQgNDU4LjkzMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/assets/img/bug.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bug.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8e3e821b3139a3e7576fa7061e0a5288.jpg");

/***/ }),

/***/ "./src/assets/img/dark.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/dark.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ab3006658828e87d52b4131f3c2400c8.jpg");

/***/ }),

/***/ "./src/assets/img/dragon.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/dragon.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0ecee103fac3c69b0c0ca749e000a282.jpg");

/***/ }),

/***/ "./src/assets/img/electric.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/electric.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8bf82f3cc70c30acbb6a651b22df3626.jpg");

/***/ }),

/***/ "./src/assets/img/fairy.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/fairy.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0b113e09b7596452bb12674328c66331.jpg");

/***/ }),

/***/ "./src/assets/img/fighting.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/fighting.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "781e480efe173d5d98df0596fd0b3bbc.jpg");

/***/ }),

/***/ "./src/assets/img/fire.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/fire.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b3210bb6b232d6fdc2837848f037667a.jpg");

/***/ }),

/***/ "./src/assets/img/flying.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/flying.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a346f4eb5b08ad4b9c39626525ceac3b.jpg");

/***/ }),

/***/ "./src/assets/img/ghost.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/ghost.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "19e573f91530717d7da5086e2e97f6bd.jpg");

/***/ }),

/***/ "./src/assets/img/grass.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/grass.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "31e176799dfb7f34aa90f346c92fe4f4.jpg");

/***/ }),

/***/ "./src/assets/img/ground.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/ground.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a99a25ee765516c1cbc3f3a2caf0db3a.jpg");

/***/ }),

/***/ "./src/assets/img/ice.jpg":
/*!********************************!*\
  !*** ./src/assets/img/ice.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d419f0b97bad577dfd306485cfe94d57.jpg");

/***/ }),

/***/ "./src/assets/img/js.png":
/*!*******************************!*\
  !*** ./src/assets/img/js.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2e10b2a247e94504d12c3ef067aee4f2.png");

/***/ }),

/***/ "./src/assets/img/normal.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/normal.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9ec833ab366a840555f2dd40e42e35b1.jpg");

/***/ }),

/***/ "./src/assets/img/oak.png":
/*!********************************!*\
  !*** ./src/assets/img/oak.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "51ae3ea2465c1dd0fbf8ade5aefb75b5.png");

/***/ }),

/***/ "./src/assets/img/pika404.png":
/*!************************************!*\
  !*** ./src/assets/img/pika404.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c80fd32e345005964f7429677822a6ae.png");

/***/ }),

/***/ "./src/assets/img/poison.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/poison.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5b352b605ab2b6ab161ccdc18729cce6.jpg");

/***/ }),

/***/ "./src/assets/img/pokeapi.png":
/*!************************************!*\
  !*** ./src/assets/img/pokeapi.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b1b571c5b64da3715ed95a29d56a30ac.png");

/***/ }),

/***/ "./src/assets/img/pokeball.png":
/*!*************************************!*\
  !*** ./src/assets/img/pokeball.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "10009d3f42863db2b6ea2f7267fa5e93.png");

/***/ }),

/***/ "./src/assets/img/pokedialog.png":
/*!***************************************!*\
  !*** ./src/assets/img/pokedialog.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "72be416a759e04f8f76460c74742dbc2.png");

/***/ }),

/***/ "./src/assets/img/psychic.jpg":
/*!************************************!*\
  !*** ./src/assets/img/psychic.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "609c2f1f6b47df67116471f7cd571e08.jpg");

/***/ }),

/***/ "./src/assets/img/rock.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/rock.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "57cc9f73e9ee9e3ac5580edc257dab7d.jpg");

/***/ }),

/***/ "./src/assets/img/steel.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/steel.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3a35d616520093bfb7c0cc48b5190a41.jpg");

/***/ }),

/***/ "./src/assets/img/unknown.jpg":
/*!************************************!*\
  !*** ./src/assets/img/unknown.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "376e396bd4bfbe22d888cb9c0fe10aec.jpg");

/***/ }),

/***/ "./src/assets/img/water.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/water.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8cdcd2fffd5326357ac2b013d5889939.jpg");

/***/ }),

/***/ "./src/assets/img/webpack.png":
/*!************************************!*\
  !*** ./src/assets/img/webpack.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "47692505d122dbcae490be2492a60b2e.png");

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
    const divElement = document.createElement('div');
    divElement.innerHTML = _views_pokeapi_api_html__WEBPACK_IMPORTED_MODULE_0__.default;
    
    // Assign the start and end points
    let start = 1
    let end = 150
    
    // Create the array where pokemons will be storaged
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
                background = _assets_img_grass_jpg__WEBPACK_IMPORTED_MODULE_11__.default;
                icon = _assets_icons_grass_svg__WEBPACK_IMPORTED_MODULE_30__.default;
                break;
            case "fire":
                background = _assets_img_fire_jpg__WEBPACK_IMPORTED_MODULE_8__.default;
                icon = _assets_icons_fire_svg__WEBPACK_IMPORTED_MODULE_27__.default;
                break;
            case "water":
                background = _assets_img_water_jpg__WEBPACK_IMPORTED_MODULE_19__.default;
                icon = _assets_icons_water_svg__WEBPACK_IMPORTED_MODULE_38__.default;
                break;
            case "bug":
                background = _assets_img_bug_jpg__WEBPACK_IMPORTED_MODULE_2__.default;
                icon = _assets_icons_bug_svg__WEBPACK_IMPORTED_MODULE_21__.default;
                break;
            case "normal":
                background = _assets_img_normal_jpg__WEBPACK_IMPORTED_MODULE_14__.default;
                icon = _assets_icons_normal_svg__WEBPACK_IMPORTED_MODULE_33__.default;
                break;
            case "dark":
                background = _assets_img_dark_jpg__WEBPACK_IMPORTED_MODULE_3__.default;
                icon = _assets_icons_dark_svg__WEBPACK_IMPORTED_MODULE_22__.default;
                break;
            case "dragon":
                background = _assets_img_dragon_jpg__WEBPACK_IMPORTED_MODULE_4__.default;
                icon = _assets_icons_dragon_svg__WEBPACK_IMPORTED_MODULE_23__.default;
                break;
            case "fairy":
                background = _assets_img_fairy_jpg__WEBPACK_IMPORTED_MODULE_6__.default;
                icon = _assets_icons_fairy_svg__WEBPACK_IMPORTED_MODULE_25__.default;
                break;
            case "fighting":
                background = _assets_img_fighting_jpg__WEBPACK_IMPORTED_MODULE_7__.default;
                icon = _assets_icons_fighting_svg__WEBPACK_IMPORTED_MODULE_26__.default;
                break;
            case "ghost":
                background = _assets_img_ghost_jpg__WEBPACK_IMPORTED_MODULE_10__.default;
                icon = _assets_icons_ghost_svg__WEBPACK_IMPORTED_MODULE_29__.default;
                break;
            case "ground":
                background = _assets_img_ground_jpg__WEBPACK_IMPORTED_MODULE_12__.default;
                icon = _assets_icons_ground_svg__WEBPACK_IMPORTED_MODULE_31__.default;
                break;
            case "ice":
                background = _assets_img_ice_jpg__WEBPACK_IMPORTED_MODULE_13__.default;
                icon = _assets_icons_ice_svg__WEBPACK_IMPORTED_MODULE_32__.default;
                break;
            case "poison":
                background = _assets_img_poison_jpg__WEBPACK_IMPORTED_MODULE_15__.default;
                icon = _assets_icons_poison_svg__WEBPACK_IMPORTED_MODULE_34__.default;
                break;
            case "psychic":
                background = _assets_img_psychic_jpg__WEBPACK_IMPORTED_MODULE_16__.default;
                icon = _assets_icons_psychic_svg__WEBPACK_IMPORTED_MODULE_35__.default;
                break;
            case "rock":
                background = _assets_img_rock_jpg__WEBPACK_IMPORTED_MODULE_17__.default;
                icon = _assets_icons_rock_svg__WEBPACK_IMPORTED_MODULE_36__.default;
                break;
            case "steel":
                background = _assets_img_steel_jpg__WEBPACK_IMPORTED_MODULE_18__.default;
                icon = _assets_icons_steel_svg__WEBPACK_IMPORTED_MODULE_37__.default;
                break;
            case "flying":
                background = _assets_img_flying_jpg__WEBPACK_IMPORTED_MODULE_9__.default;
                icon = _assets_icons_flying_svg__WEBPACK_IMPORTED_MODULE_28__.default;
                break;
            case "electric":
                background = _assets_img_electric_jpg__WEBPACK_IMPORTED_MODULE_5__.default;
                icon = _assets_icons_electric_svg__WEBPACK_IMPORTED_MODULE_24__.default;
                break;
            default:
                background = _assets_img_unknown_jpg__WEBPACK_IMPORTED_MODULE_20__.default;
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
    oakimg.src = _assets_img_oak_png__WEBPACK_IMPORTED_MODULE_2__.default;

    const logoimg = new Image();
    logoimg.src = _assets_img_pokeapi_png__WEBPACK_IMPORTED_MODULE_3__.default;
    
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
/* harmony import */ var _loader_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.controller */ "./src/controllers/loader.controller.js");








const pages = {
    home: _home_controller__WEBPACK_IMPORTED_MODULE_0__.default,
    api: _api_controller__WEBPACK_IMPORTED_MODULE_1__.default,
    notfound: _404_controller__WEBPACK_IMPORTED_MODULE_2__.default
}

const components = {
    navbar: _navbar_controller__WEBPACK_IMPORTED_MODULE_3__.default,
    musicplayer: _musicPlayer_controller__WEBPACK_IMPORTED_MODULE_4__.default,
    loader: _loader_controller__WEBPACK_IMPORTED_MODULE_5__.default
}



/***/ }),

/***/ "./src/controllers/loader.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/loader.controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_loader_loader_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loader/loader.html */ "./src/components/loader/loader.html");
/* harmony import */ var _components_loader_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/styles.scss */ "./src/components/loader/styles.scss");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const loaderDiv = document.createElement('div');
    loaderDiv.innerHTML = _components_loader_loader_html__WEBPACK_IMPORTED_MODULE_0__.default;

    return loaderDiv;
});

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
    brandlogo.src = _assets_img_js_png__WEBPACK_IMPORTED_MODULE_2__.default;

    const webpacklogo = new Image();
    webpacklogo.src = _assets_img_webpack_png__WEBPACK_IMPORTED_MODULE_3__.default
    
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
/* harmony import */ var sass_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sass-loader */ "sass-loader");
/* harmony import */ var sass_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sass_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/index.js */ "./src/controllers/index.js");



const content = document.querySelector("#root");
const navbarComponent = document.querySelector("#navbar-component")
const musicPlayerComponent = document.querySelector("#musicPlayer-component")
const loaderComponent = document.querySelector("#loaderDIV")

// Components
// navbarComponent.appendChild(components.navbar())
// musicPlayerComponent.appendChild(components.musicplayer())

function showComponents() {
    navbarComponent.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.components.navbar())
    musicPlayerComponent.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.components.musicplayer())
    loaderComponent.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.components.loader())

}

function hideComponents() {
    navbarComponent.innerHTML = '';
    musicPlayerComponent.innerHTML = '';
}

function hideLoader() {
    loaderComponent.innerHTML = '';
}


const router = async (route) => {
    content.innerHTML = '';

    
    // Pages / views
    switch(route) {

        case "":
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.pages.home())
        
        case "#/":
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.pages.home())
        
        case "#/app":
        showComponents()
        return { 
            page: content.appendChild(await _controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.pages.api()),
            loader: hideLoader()
        }
            
        default:
        hideComponents()
        return content.appendChild(_controllers_index_js__WEBPACK_IMPORTED_MODULE_1__.pages.notfound())
    

    }
}




/***/ }),

/***/ "sass-loader":
/*!******************************!*\
  !*** external "sass-loader" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("sass-loader");;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/readFile chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "0" means "already loaded", Promise means loading
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
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



// import {pages, components} from "../controllers/index.js";

(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash)

window.addEventListener('hashchange', () => {
    ;(0,_router_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash)
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9sb2FkZXIvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbXVzaWNQbGF5ZXIvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvdmlld3MvNDA0L3N0eWxlcy5zY3NzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy9ob21lL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy92aWV3cy9wb2tlYXBpL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbXVzaWNQbGF5ZXIvbXVzaWNQbGF5ZXIuaHRtbCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzLzQwNC80MDQuaHRtbCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvdmlld3MvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL3Bva2VhcGkvYXBpLmh0bWwiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbG9hZGVyL3N0eWxlcy5zY3NzP2YxNzQiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbXBvbmVudHMvbXVzaWNQbGF5ZXIvc3R5bGVzLnNjc3M/ODU0MyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvc3R5bGVzLnNjc3M/MTJhOCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvdmlld3MvNDA0L3N0eWxlcy5zY3NzP2RmNzIiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL3ZpZXdzL2hvbWUvc3R5bGVzLnNjc3M/NzFmNCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvdmlld3MvcG9rZWFwaS9zdHlsZXMuc2Nzcz8xZGNkIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL2J1Zy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9kYXJrLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL2RyYWdvbi5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9lbGVjdHJpYy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9mYWlyeS5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9maWdodGluZy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9maXJlLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL2ZseWluZy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9naG9zdC5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9ncmFzcy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9ncm91bmQuc3ZnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaWNvbnMvaWNlLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL25vcm1hbC5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9wb2lzb24uc3ZnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaWNvbnMvcHN5Y2hpYy5zdmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pY29ucy9yb2NrLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL3N0ZWVsLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ljb25zL3dhdGVyLnN2ZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy9idWcuanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL2RhcmsuanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL2RyYWdvbi5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvZWxlY3RyaWMuanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL2ZhaXJ5LmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy9maWdodGluZy5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvZmlyZS5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvZmx5aW5nLmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy9naG9zdC5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvZ3Jhc3MuanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvaWNlLmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy9qcy5wbmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvbm9ybWFsLmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy9vYWsucG5nIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3Bpa2E0MDQucG5nIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3BvaXNvbi5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvcG9rZWFwaS5wbmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvcG9rZWJhbGwucG5nIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3Bva2VkaWFsb2cucG5nIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3BzeWNoaWMuanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3JvY2suanBnIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9hc3NldHMvaW1nL3N0ZWVsLmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy91bmtub3duLmpwZyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvYXNzZXRzL2ltZy93YXRlci5qcGciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2Fzc2V0cy9pbWcvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbnRyb2xsZXJzLzQwNC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb250cm9sbGVycy9hcGkuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29udHJvbGxlcnMvaG9tZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9jb250cm9sbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvLi9zcmMvY29udHJvbGxlcnMvbG9hZGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbnRyb2xsZXJzL211c2ljUGxheWVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2NvbnRyb2xsZXJzL25hdmJhci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi8uL3NyYy9yb3V0ZXIvaW5kZXgucm91dGVzLmpzIiwid2VicGFjazovL3Bva2VhcHB2Mi9leHRlcm5hbCBcInNhc3MtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Bva2VhcHB2Mi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb2tlYXBwdjIvd2VicGFjay9ydW50aW1lL3JlYWRGaWxlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9rZWFwcHYyLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2REFBNkQsK0RBQStELG9DQUFvQyx1QkFBdUIsZUFBZSxhQUFhLFlBQVksYUFBYSxtQkFBbUIseUJBQXlCLG9CQUFvQixtQkFBbUIsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyxPQUFPLG9HQUFvRyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsd0RBQXdELDJCQUEyQixnRUFBZ0Usd0NBQXdDLDJCQUEyQixtQkFBbUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDZCQUE2Qix3QkFBd0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIseUJBQXlCLFNBQVMsbUJBQW1CO0FBQzltQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx5REFBeUQsb0JBQW9CLGNBQWMsZ0JBQWdCLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDhCQUE4QixtQ0FBbUMsR0FBRyw2Q0FBNkMsMkRBQTJELHVCQUF1QixlQUFlLGtCQUFrQixnQkFBZ0IsY0FBYyxnQkFBZ0Isa0JBQWtCLDhCQUE4QixHQUFHLHVEQUF1RCx3QkFBd0IsaUJBQWlC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QkFBb0IsdzBCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isb3JHOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsZ3lCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isd2lEOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsZ3VDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNHdEOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isd3dDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNHdDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNHZCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNDVCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isb3lDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNHBCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsNHBDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isd3ZEOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsZzZDOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0Isdy9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0IsbzBCOzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0EvRSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFC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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9FQUFpQjtBQUNqRCxxQ0FBcUMseUVBQXNCO0FBQzNELGdDQUFnQyxvRUFBaUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDZEQUFVOztBQUU3QztBQUNBO0FBQ0EsbUNBQW1DLDZEQUFVOztBQUU3QztBQUNBO0FBQ0EsZ0I7QUFDQSw0Q0FBNEMsNERBQVM7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLGlFQUFjOzs7QUFHakQ7QUFDQTs7QUFFaUI7Ozs7Ozs7Ozs7O0FDM0RqQix5Qzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N4QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSxrQjs7Ozs7Ozs7Ozs7OztBQ2hCdUI7O0FBRXdCO0FBQy9DLFdBQVcsa0JBQWtCOztBQUU3Qiw0REFBTTs7QUFFTjtBQUNBLElBQUksNkRBQU07QUFDVixDQUFDIiwiZmlsZSI6IjUxYTk2YmJkMjdhNjlkN2Y0YWE4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4ZGVnLCAjM0I0Q0NBLCAjMjAyMDIwKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgdG9wOiAzNSU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbG9hZGVyL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksMERBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5sb2FkZXItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4ZGVnLCAkcG9rZTMsICRkYXJrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICB0b3A6IDM1JTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZml4ZWQtZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tdXNpY1BsYXllciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I0Q0NBO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubXVzaWMtcGxheWVyLXBsYXksIC5tdXNpYy1wbGF5ZXItcGF1c2Uge1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDI1JSAwJSwgMTAwJSAwJSwgNzUlIDEwMCUsIDAlIDEwMCUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogNXJlbTtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5tdXNpYy1wbGF5ZXItcGxheTpob3ZlciwgLm11c2ljLXBsYXllci1wYXVzZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubXVzaWMtcGxheWVyLWNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tdXNpYy1wbGF5ZXItdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbXVzaWNQbGF5ZXIvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ0ZJO0VER0osOEJBQUE7QUFESjs7QUFLQTtFQUNJLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkNIUTtBRENaO0FBSUk7RUFDSSxtQkN2QkQ7RUR3QkMsWUFBQTtFQUNBLGVBQUE7QUFGUjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5maXhlZC1mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXVzaWNQbGF5ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBva2UzO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tdXNpYy1wbGF5ZXItcGxheSwgLm11c2ljLXBsYXllci1wYXVzZSB7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyNSUgMCUsIDEwMCUgMCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zRmFzdDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubXVzaWMtcGxheWVyLWNhcmR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tdXNpYy1wbGF5ZXItdGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxcmVtO1xcclxcbiAgICByaWdodDogMXJlbTtcXHJcXG59XCIsXCIvLyBDb2xvcnNcXHJcXG4kbWFpbkNvbG9yOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeTogI0ZGQ0MwMTtcXHJcXG4kc2Vjb25kYXJ5OiAjQzhBMTAyO1xcclxcbiR0ZXJ0aWFyeTogIzM3NURBOTtcXHJcXG4kc3VjY2VzczogICAjNDhhMjY2O1xcclxcbiRkYW5nZXI6ICNiYTQ4NDg7XFxyXFxuJGluZm86ICM1ODlmZDU7XFxyXFxuJHNvZnREYXJrOiAjMzAzMDMwO1xcclxcbiRkYXJrOiAjMjAyMDIwO1xcclxcblxcclxcbiRwb2tlMTogI0ZGMDAwMDtcXHJcXG4kcG9rZTI6ICNDQzAwMDA7XFxyXFxuJHBva2UzOiAjM0I0Q0NBO1xcclxcbiRwb2tlNDogI0ZGREUwMDtcXHJcXG4kcG9rZTU6ICNCM0ExMjU7XFxyXFxuXFxyXFxuXFxyXFxuLy8gRm9udC1mYW1pbGllc1xcclxcblxcclxcbiRzdHlsZTE6ICdDYWJpbicsIHNhbnMtc2VyaWY7XFxyXFxuJHN0eWxlMjogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XFxyXFxuJHN0eWxlMzogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIFRyYW5zaXRpb25zXFxyXFxuXFxyXFxuJHRyYW5zRmFzdDogYWxsIDAuNXMgZWFzZTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyIHtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAjMjAyMDIwO1xcbn1cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XFxufVxcbi5uYXZiYXIgdWwgbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxLjVyZW07XFxufVxcbi5uYXZiYXIgdWwgbGkgYSB7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgY29sb3I6ICNGRkNDMDEgIWltcG9ydGFudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5uYXZiYXIgdWwgbGkgYTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzM3NURBOTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmF2YmFyLWJyYW5kIGltZyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ud2VicGFjay1sb2dvIGltZyB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGNvbG9yOiAjYmE0ODQ4O1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LWZhbWlseTogXFxcIkFtYXRpYyBTQ1xcXCIsIGN1cnNpdmU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxtQkNNRztFRExILFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFESjs7QUFLQTtFQUNJLFlDVlE7RURXUixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBS0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBSFI7QUFLUTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFIUjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFOSjs7QUFTQTtFQUNJLGNDakRLO0FEMkNUOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQ3hDSztFRHlDTCxpQkFBQTtFQUNBLGtCQUFBO0FBTkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4ICRkYXJrO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gICAgY29sb3I6ICRtYWluQ29sb3I7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDZyZW07XFxyXFxuXFxyXFxuICAgIGxpIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpIGEge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICR0ZXJ0aWFyeTtcXHJcXG4gICAgICAgIGNvbG9yOiAkbWFpbkNvbG9yICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1icmFuZCBpbWcge1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYnBhY2stbG9nbyBpbWcge1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICAgIGNvbG9yOiAkZGFuZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLXRleHQge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICBmb250LWZhbWlseTogJHN0eWxlMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIvLyBDb2xvcnNcXHJcXG4kbWFpbkNvbG9yOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeTogI0ZGQ0MwMTtcXHJcXG4kc2Vjb25kYXJ5OiAjQzhBMTAyO1xcclxcbiR0ZXJ0aWFyeTogIzM3NURBOTtcXHJcXG4kc3VjY2VzczogICAjNDhhMjY2O1xcclxcbiRkYW5nZXI6ICNiYTQ4NDg7XFxyXFxuJGluZm86ICM1ODlmZDU7XFxyXFxuJHNvZnREYXJrOiAjMzAzMDMwO1xcclxcbiRkYXJrOiAjMjAyMDIwO1xcclxcblxcclxcbiRwb2tlMTogI0ZGMDAwMDtcXHJcXG4kcG9rZTI6ICNDQzAwMDA7XFxyXFxuJHBva2UzOiAjM0I0Q0NBO1xcclxcbiRwb2tlNDogI0ZGREUwMDtcXHJcXG4kcG9rZTU6ICNCM0ExMjU7XFxyXFxuXFxyXFxuXFxyXFxuLy8gRm9udC1mYW1pbGllc1xcclxcblxcclxcbiRzdHlsZTE6ICdDYWJpbicsIHNhbnMtc2VyaWY7XFxyXFxuJHN0eWxlMjogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XFxyXFxuJHN0eWxlMzogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIFRyYW5zaXRpb25zXFxyXFxuXFxyXFxuJHRyYW5zRmFzdDogYWxsIDAuNXMgZWFzZTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FiaW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICMyMDIwMjA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogI0NDMDAwMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMDIwMjA7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHJlbTtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jbmF2YmFyLWNvbXBvbmVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjBkZWcsICNDOEExMDIsICNmZmI3MDApO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIG1pbi1oZWlnaHQ6IDMwdmg7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXG59XFxuXFxuLmJ0biB7XFxuICB3aWR0aDogNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMzMDMwMzA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNiZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5idG4tcHJpbWFyeTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJsYWNrLS10ZXh0IHtcXG4gIGNvbG9yOiAjMjAyMDIwO1xcbn1cXG5cXG4ud2hpdGUtLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uamF2YXNjcmlwdC0tdGV4dCB7XFxuICBjb2xvcjogI0ZGQ0MwMTtcXG59XFxuXFxuLmpzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb2wge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwcmVtLCBhdXRvKTtcXG59XFxuXFxuLnJvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubXQtMyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4ubXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4ubXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29sIHtcXG4gIG1pbi13aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sLTEge1xcbiAgd2lkdGg6IDguMzMlO1xcbn1cXG5cXG4uY29sLTIge1xcbiAgd2lkdGg6IDE2LjY2JTtcXG59XFxuXFxuLmNvbC0zIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbi5jb2wtNCB7XFxuICB3aWR0aDogMzMuMzMlO1xcbn1cXG5cXG4uY29sLTUge1xcbiAgd2lkdGg6IDQxLjY2JTtcXG59XFxuXFxuLmNvbC02IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wtNyB7XFxuICB3aWR0aDogNTguMzMlO1xcbn1cXG5cXG4uY29sLTgge1xcbiAgd2lkdGg6IDY2LjY2JTtcXG59XFxuXFxuLmNvbC05IHtcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi5jb2wtMTAge1xcbiAgd2lkdGg6IDgzLjMzJTtcXG59XFxuXFxuLmNvbC0xMSB7XFxuICB3aWR0aDogOTEuNjYlO1xcbn1cXG5cXG4uY29sLTEyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmFkZSB7XFxuICBhbmltYXRpb246IGZhZGUgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxnQ0NpQks7RURoQkwsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLG1CQ1RHO0FEUVA7O0FBSUE7RUFDSSxtQkNWSTtFRFdKLHlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksMERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFDSSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJDakdHO0VEa0dILFlBQUE7QUFMSjs7QUFRQTtFQUNJLGNDdEdHO0FEaUdQOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksY0NySE07QURnSFY7O0FBUUE7RUFDSSxzSEFBQTtBQUxKOztBQVNBO0VBQ0ksb0JBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSw4QkFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0FBTko7O0FBU0E7RUFBUSxZQUFBO0FBTFI7O0FBTUE7RUFBUSxhQUFBO0FBRlI7O0FBR0E7RUFBUSxVQUFBO0FBQ1I7O0FBQUE7RUFBUSxhQUFBO0FBSVI7O0FBSEE7RUFBUSxhQUFBO0FBT1I7O0FBTkE7RUFBUSxVQUFBO0FBVVI7O0FBVEE7RUFBUSxhQUFBO0FBYVI7O0FBWkE7RUFBUSxhQUFBO0FBZ0JSOztBQWZBO0VBQVEsVUFBQTtBQW1CUjs7QUFsQkE7RUFBUyxhQUFBO0FBc0JUOztBQXJCQTtFQUFTLGFBQUE7QUF5QlQ7O0FBeEJBO0VBQVMsV0FBQTtBQTRCVDs7QUF4QkE7RUFDSSw4QkFBQTtBQTJCSjs7QUF4QkE7RUFDSTtJQUNJLFVBQUE7RUEyQk47RUF6QkU7SUFDSSxVQUFBO0VBMkJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnc2Nzcy92YXJpYWJsZXMnO1xcclxcblxcclxcbioge1xcclxcbiAgICBmb250LWZhbWlseTogJHN0eWxlMTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwb2tlMjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgJGRhcms7XFxyXFxuICAgIG1hcmdpbjogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdmJhci1jb21wb25lbnQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgJHNlY29uZGFyeSwgcmdiKDI1NSwgMTgzLCAwKSk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDElO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggJHNvZnREYXJrO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNTksIDI1NSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxhY2stLXRleHQge1xcclxcbiAgICBjb2xvcjogJGRhcms7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS0tdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmphdmFzY3JpcHQtLXRleHQge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxufVxcclxcblxcclxcbi5qcyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMHJlbSwgYXV0byk7XFxyXFxufVxcclxcblxcclxcbi5yb3c6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktY2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdC0yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm10LTMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXQtNCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tdC01IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbCB7XFxyXFxuICAgIG1pbi13aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLTEge3dpZHRoOiA4LjMzJTt9XFxyXFxuLmNvbC0yIHt3aWR0aDogMTYuNjYlO31cXHJcXG4uY29sLTMge3dpZHRoOiAyNSU7fVxcclxcbi5jb2wtNCB7d2lkdGg6IDMzLjMzJTt9XFxyXFxuLmNvbC01IHt3aWR0aDogNDEuNjYlO31cXHJcXG4uY29sLTYge3dpZHRoOiA1MCU7fVxcclxcbi5jb2wtNyB7d2lkdGg6IDU4LjMzJTt9XFxyXFxuLmNvbC04IHt3aWR0aDogNjYuNjYlO31cXHJcXG4uY29sLTkge3dpZHRoOiA3NSU7fVxcclxcbi5jb2wtMTAge3dpZHRoOiA4My4zMyU7fVxcclxcbi5jb2wtMTEge3dpZHRoOiA5MS42NiU7fVxcclxcbi5jb2wtMTIge3dpZHRoOiAxMDAlO31cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uZmFkZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZSAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwXFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltZy9waWthNDA0LnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL3Bva2ViYWxsLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2Vjb25kYXJ5LWJhY2tncm91bmQtNDA0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgIzNCNENDQSwgIzAwMDQ2Zik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDIlLCAwIDEwMCUsIDUwJSAxMDAlKTtcXG59XFxuXFxuLnBpa2EtaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGhlaWdodDogMzVyZW07XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZXJyb3I0MDQge1xcbiAgZm9udC1zaXplOiAxNWVtO1xcbiAgY29sb3I6ICMyMDIwMjA7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5lcnJvcjQwNCBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jbnVtYmVyMSB7XFxuICB0ZXh0LXNoYWRvdzogMTBweCAwIDAgIzNCNENDQSwgMCAxMHB4IDAgIzNCNENDQSwgLTEwcHggMCAwICMzQjRDQ0EsIDAgLTEwcHggMCAjM0I0Q0NBLCAwIDAgMTBweCAjM0I0Q0NBO1xcbiAgY29sb3I6ICNGRkRFMDA7XFxufVxcblxcbiNudW1iZXIyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI251bWJlcjMge1xcbiAgdGV4dC1zaGFkb3c6IDEwcHggMCAwICMzQjRDQ0EsIDAgMTBweCAwICMzQjRDQ0EsIC0xMHB4IDAgMCAjM0I0Q0NBLCAwIC0xMHB4IDAgIzNCNENDQSwgMCAwIDEwcHggIzNCNENDQTtcXG4gIGNvbG9yOiAjRkZERTAwO1xcbn1cXG5cXG4uZXJyb3ItdGV4dCB7XFxuICBmb250LXNpemU6IDdlbTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcblxcbi5nby1idG4tNDA0IHtcXG4gIGJhY2tncm91bmQ6ICMzNzVEQTk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMTVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAjMjAyMDIwO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMzMDMwMzA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuLmdvLWJ0bi00MDQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZDogIzIwMjAyMDtcXG4gIGNvbG9yOiAjRkZDQzAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvNDA0L3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsY0NoQkc7RURpQkgsZUFBQTtBQUZKO0FBSUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBT0E7RUFDSSx1R0FBQTtFQUNBLGNDdkJJO0FEbUJSOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0E7RUFDSSx1R0FBQTtFQUNBLGNDdENJO0FEa0NSOztBQU9BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBSko7O0FBU0E7RUFDSSxtQkMzRE87RUQ0RFAsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUFOSjtBQVFJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJDckVEO0VEc0VDLGNDN0VFO0FEdUVWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5LWJhY2tncm91bmQtNDA0IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAkcG9rZTMsIHJnYigwLCA0LCAxMTEpKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMiUsIDAgMTAwJSwgNTAlIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGlrYS1pbWcge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi9hc3NldHMvaW1nL3Bpa2E0MDQucG5nXFxcIik7XFxyXFxuICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5lcnJvcjQwNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVlbTtcXHJcXG4gICAgY29sb3I6ICRkYXJrO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI251bWJlcjEge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAwIDAgJHBva2UzLCAwIDEwcHggMCAkcG9rZTMsIC0xMHB4IDAgMCAkcG9rZTMsIDAgLTEwcHggMCAkcG9rZTMsIDAgMCAxMHB4ICRwb2tlMztcXHJcXG4gICAgY29sb3I6ICRwb2tlNDtcXHJcXG59XFxyXFxuXFxyXFxuI251bWJlcjIge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vYXNzZXRzL2ltZy9wb2tlYmFsbC5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI251bWJlcjMge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAwIDAgJHBva2UzLCAwIDEwcHggMCAkcG9rZTMsIC0xMHB4IDAgMCAkcG9rZTMsIDAgLTEwcHggMCAkcG9rZTMsIDAgMCAxMHB4ICRwb2tlMztcXHJcXG4gICAgY29sb3I6ICRwb2tlNDtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDdlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZ28tYnRuLTQwNCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICR0ZXJ0aWFyeTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTVyZW07XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAkZGFyaztcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICRzb2Z0RGFyaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG59XCIsXCIvLyBDb2xvcnNcXHJcXG4kbWFpbkNvbG9yOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeTogI0ZGQ0MwMTtcXHJcXG4kc2Vjb25kYXJ5OiAjQzhBMTAyO1xcclxcbiR0ZXJ0aWFyeTogIzM3NURBOTtcXHJcXG4kc3VjY2VzczogICAjNDhhMjY2O1xcclxcbiRkYW5nZXI6ICNiYTQ4NDg7XFxyXFxuJGluZm86ICM1ODlmZDU7XFxyXFxuJHNvZnREYXJrOiAjMzAzMDMwO1xcclxcbiRkYXJrOiAjMjAyMDIwO1xcclxcblxcclxcbiRwb2tlMTogI0ZGMDAwMDtcXHJcXG4kcG9rZTI6ICNDQzAwMDA7XFxyXFxuJHBva2UzOiAjM0I0Q0NBO1xcclxcbiRwb2tlNDogI0ZGREUwMDtcXHJcXG4kcG9rZTU6ICNCM0ExMjU7XFxyXFxuXFxyXFxuXFxyXFxuLy8gRm9udC1mYW1pbGllc1xcclxcblxcclxcbiRzdHlsZTE6ICdDYWJpbicsIHNhbnMtc2VyaWY7XFxyXFxuJHN0eWxlMjogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XFxyXFxuJHN0eWxlMzogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIFRyYW5zaXRpb25zXFxyXFxuXFxyXFxuJHRyYW5zRmFzdDogYWxsIDAuNXMgZWFzZTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi9hc3NldHMvaW1nL3Bva2VkaWFsb2cucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlY29uZGFyeS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzAzMDMwLCAjMjAyMDIwLCBibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDUwJSAxMDAlLCAxMDAlIDEwMCUpO1xcbn1cXG5cXG4ubG9nby1pbWFnZSBpbWcge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNob21lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQW1hdGljIFNDXFxcIiwgY3Vyc2l2ZTtcXG4gIGFuaW1hdGlvbjogc2xpZGVSaWdodCAxLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMjAwMHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxufVxcbi5vYWstaW1hZ2UgaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDEuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luLXRvcDogMzByZW07XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbi5nby1idG4ge1xcbiAgYmFja2dyb3VuZDogIzM3NURBOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2lkdGg6IDhyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAjMjAyMDIwO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMzMDMwMzA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuLmdvLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgY29sb3I6ICNGRkNDMDE7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucG9rZS1kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBsZWZ0OiAtNTAlO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgaGVpZ2h0OiAxMi41cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5wb2tlLWRpYWxvZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDEwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb3RHb3RoaWMxNlxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi52ZXJzaW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2FiaW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3R0b206IDFyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGNvbG9yOiAjRkZDQzAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvaG9tZS9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtFQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0NUSztFRFVMLG1DQUFBO0FBRko7O0FBS0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQkFBQTtFQUZOO0VBSUU7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUVJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0VBSk47RUFNRTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VBSk47QUFDRjtBQVFBO0VBQ0ksbUJDL0RPO0VEZ0VQLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQU5KO0FBUUk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkN6RUQ7RUQwRUMsY0NqRkU7QUQyRVY7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGdDQ3BHSztFRHFHTCxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQzFITTtBRG1IVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zZWNvbmRhcnktYmFja2dyb3VuZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAkc29mdERhcmssICRkYXJrLCBibGFjayk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDUwJSAxMDAlLCAxMDAlIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWFnZSBpbWcge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNob21lLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc3R5bGUyO1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlUmlnaHQgMS41cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZVJpZ2h0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMDAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub2FrLWltYWdlIGltZyB7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDE1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlVXAgMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDEuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5nby1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkdGVydGlhcnk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4ICRkYXJrO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggJHNvZnREYXJrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZGFyaztcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1kaWFsb2cge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9pbWcvcG9rZWRpYWxvZy5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtZGlhbG9nLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuOGVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRG90R290aGljMTYnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udmVyc2lvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzdHlsZTE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBib3R0b206IDFyZW07XFxyXFxuICAgIHJpZ2h0OiAxcmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnk7XFxyXFxufVxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQtdGl0bGUge1xcbiAgY29sb3I6ICNGRkRFMDA7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgU2FucyBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XFxuICAubmF2LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDc0NzVlLCAjMWUzYzUyLCAjMzc1REE5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMzMDMwMzA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAubmF2LWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjM0I0Q0NBO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcmQtaW1nIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAzMGVtO1xcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0IzQTEyNTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAjMzAzMDMwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIH1cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAuY2FyZC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAuY2FyZC1ib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxuICB9XFxuXFxuICAubWFyZ2luLWNvbHMge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtaWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOiAjRkZDQzAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XFxuICAubmF2LWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0NzQ3NWUsICMxZTNjNTIsICMzNzVEQTkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggIzMwMzAzMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIH1cXG4gIC5uYXYtYnV0dG9uOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcblxcbiAgLmxvYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMzQjRDQ0E7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2FyZC1pbWcge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4td2lkdGg6IDE4cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0IzQTEyNTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAjMzAzMDMwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIH1cXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAuY2FyZC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAuY2FyZC1ib2R5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxuICB9XFxuXFxuICAubWFyZ2luLWNvbHMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtaWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGNvbG9yOiAjRkZDQzAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogMS44cmVtO1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNzBweCkge1xcbiAgLm5hdi1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ3NDc1ZSwgIzFlM2M1MiwgIzM3NURBOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4ICMzMDMwMzA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAubmF2LWJ1dHRvbjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjM0I0Q0NBO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcmQtaW1nIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgbWluLWhlaWdodDogMzByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCM0ExMjU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggIzMwMzAzMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICB9XFxuICAuY2FyZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmNhcmQtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtYm9keSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xcbiAgfVxcblxcbiAgLm1hcmdpbi1jb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkLWlkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGNvbG9yOiAjRkZDQzAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9wb2tlYXBpL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDSSxjQ0tJO0VESkosOENDWUs7QURuQlQ7O0FBV0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSw4REFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxnQ0FBQTtJQUNBLHlCQUFBO0VBUk47RUFXTTtJQUNJLHFCQUFBO0lBQ0EsZUFBQTtFQVRWOztFQWFFO0lBQ0ksWUFBQTtFQVZOOztFQWFFO0lBQ0ksZ0JBQUE7RUFWTjs7RUFhRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJDakNBO0lEa0NBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQVZOOztFQWFFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUFWTjs7RUFhRTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0EsY0FBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7RUFWTjtFQVlNO0lBQ0ksZUFBQTtJQUNBLHFCQUFBO0VBVlY7O0VBY0U7SUFDSSx5QkN0RUQ7SUR1RUMsV0FBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtFQVhOOztFQWNFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EseUJDbEZEO0lEbUZDLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQ0FBQTtFQVhOOztFQWNFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQVhOOztFQWNFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxjQ3pHRTtJRDBHRixtQkNuR0Q7SURvR0MsYUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQVhOO0FBQ0Y7QUFlQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLDhEQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGdDQUFBO0lBQ0EseUJDdEdJO0VEeUZWO0VBZ0JNO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0VBZFY7O0VBa0JFO0lBQ0ksWUFBQTtFQWZOOztFQWtCRTtJQUNJLGdCQUFBO0VBZk47O0VBa0JFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxtQkN2SUE7SUR3SUEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBZk47O0VBa0JFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUFmTjs7RUFrQkU7SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtFQWZOO0VBaUJNO0lBQ0ksZUFBQTtJQUNBLHFCQUFBO0VBZlY7O0VBbUJFO0lBQ0kseUJDNUtEO0lENktDLFdBQUE7SUFDQSxjQUFBO0lBQ0Esb0JBQUE7RUFoQk47O0VBb0JFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EseUJDekxEO0lEMExDLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQ0FBQTtFQWpCTjs7RUFvQkU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBakJOOztFQW9CRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsY0NoTkU7SURpTkYsbUJDMU1EO0lEMk1DLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQWpCTjtBQUNGO0FBc0JBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsOERBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGdDQUFBO0lBQ0EseUJDL01JO0VEMkxWO0VBdUJNO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0VBckJWOztFQXlCRTtJQUNJLFlBQUE7RUF0Qk47O0VBeUJFO0lBQ0ksZ0JBQUE7RUF0Qk47O0VBeUJFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFDQSxtQkNoUEE7SURpUEEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBdEJOOztFQXlCRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBdEJOOztFQXlCRTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGNBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0VBdEJOO0VBd0JNO0lBQ0ksZUFBQTtJQUNBLHFCQUFBO0VBdEJWOztFQTBCRTtJQUNJLHlCQ3JSRDtJRHNSQyxXQUFBO0lBQ0EsY0FBQTtJQUNBLG9CQUFBO0VBdkJOOztFQTBCRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQ2pTRDtJRGtTQyxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7RUF2Qk47O0VBMEJFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQXZCTjs7RUEwQkU7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQ3hURTtJRHlURixtQkNsVEQ7SURtVEMsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQXZCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3Njc3MvdmFyaWFibGVzJztcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46ZXhwb3J0IHtcXHJcXG4gICAgJGdyYXNzQmFja2dyb3VuZDogdXJsKFxcXCJzcmMvYXNzZXRzL2ltZy9ncmFzcy5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgICBjb2xvcjogJHBva2U0O1xcclxcbiAgICBmb250LWZhbWlseTogJHN0eWxlMztcXHJcXG59XFxyXFxuXFxyXFxuLy8gKioqKioqKiBNT0JJTEUgUkVTUE9OU0lWRSAqKioqKioqIC8vXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xcclxcbiAgICAubmF2LWJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDcxLCA3MSwgOTQpLCByZ2IoMzAsIDYwLCA4MiksICR0ZXJ0aWFyeSk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAkc29mdERhcms7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNGYXN0O1xcclxcbiAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmRpc2FibGVkIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdi1saXN0IHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5sb2FkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkcG9rZTM7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1pbWcge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAzMGVtO1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMjByZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHBva2U1O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAkc29mdERhcms7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogYXV0bztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxyXFxuICAgIFxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtdGl0bGUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLWJvZHkge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5tYXJnaW4tY29scyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtaWQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxNXB4O1xcclxcbiAgICAgICAgbGVmdDogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XFxyXFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcbi8vICoqKioqKiogTEFQVE9QIFJFU1BPTlNJVkUgKioqKioqKiAvL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLm5hdi1idXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDcxLCA3MSwgOTQpLCByZ2IoMzAsIDYwLCA4MiksICR0ZXJ0aWFyeSk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAkc29mdERhcms7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNGYXN0O1xcclxcbiAgICAgICAgXFxyXFxuICAgIFxcclxcbiAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmRpc2FibGVkIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdi1saXN0IHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5sb2FkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAkcG9rZTM7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1pbWcge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxOHJlbTtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI4cmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwb2tlNTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggJHNvZnREYXJrO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IGF1dG87XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbiAgICBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLXRpdGxlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1ib2R5IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubWFyZ2luLWNvbHMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkLWlkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMTVweDtcXHJcXG4gICAgICAgIGxlZnQ6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xcclxcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLy8gKioqKioqKiBERVNLVE9QIFJFU1BPTlNJVkUgKioqKioqKiAvL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM3MHB4KSB7XFxyXFxuICAgIC5uYXYtYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoNzEsIDcxLCA5NCksIHJnYigzMCwgNjAsIDgyKSwgJHRlcnRpYXJ5KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggJHNvZnREYXJrO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zRmFzdDtcXHJcXG4gICAgICAgIFxcclxcbiAgICBcXHJcXG4gICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCkge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5kaXNhYmxlZCB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXYtbGlzdCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubG9hZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHBva2UzO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtaW1nIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMjByZW07XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcG9rZTU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4ICRzb2Z0RGFyaztcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC10aXRsZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNhcmQtYm9keSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm1hcmdpbi1jb2xzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY2FyZC1pZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDE1cHg7XFxyXFxuICAgICAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xcclxcbiAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblwiLFwiLy8gQ29sb3JzXFxyXFxuJG1haW5Db2xvcjogd2hpdGU7XFxyXFxuJHByaW1hcnk6ICNGRkNDMDE7XFxyXFxuJHNlY29uZGFyeTogI0M4QTEwMjtcXHJcXG4kdGVydGlhcnk6ICMzNzVEQTk7XFxyXFxuJHN1Y2Nlc3M6ICAgIzQ4YTI2NjtcXHJcXG4kZGFuZ2VyOiAjYmE0ODQ4O1xcclxcbiRpbmZvOiAjNTg5ZmQ1O1xcclxcbiRzb2Z0RGFyazogIzMwMzAzMDtcXHJcXG4kZGFyazogIzIwMjAyMDtcXHJcXG5cXHJcXG4kcG9rZTE6ICNGRjAwMDA7XFxyXFxuJHBva2UyOiAjQ0MwMDAwO1xcclxcbiRwb2tlMzogIzNCNENDQTtcXHJcXG4kcG9rZTQ6ICNGRkRFMDA7XFxyXFxuJHBva2U1OiAjQjNBMTI1O1xcclxcblxcclxcblxcclxcbi8vIEZvbnQtZmFtaWxpZXNcXHJcXG5cXHJcXG4kc3R5bGUxOiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xcclxcbiRzdHlsZTI6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xcclxcbiRzdHlsZTM6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyBUcmFuc2l0aW9uc1xcclxcblxcclxcbiR0cmFuc0Zhc3Q6IGFsbCAwLjVzIGVhc2U7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGgxPkxPQURJTkcuLi48L2gxPlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiZmlsZTovLy9DOi9Vc2Vycy9LYS9EZXNrdG9wL1Byb3llY3RvcyUyMEpTL3Bva2VhcHB2Mi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9tdXNpYy9wb2tlbXVzaWMubXAzXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiZml4ZWQtZm9vdGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibXVzaWNQbGF5ZXIgZmFkZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1iZXR3ZWVuXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm11c2ljLXBsYXllci1jYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm11c2ljLXBsYXllci1wbGF5XFxcIiBpZD1cXFwicGxheUJ0blxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wbGF5XFxcIj48L2k+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJtdXNpYy1wbGF5ZXItcGF1c2VcXFwiIGlkPVxcXCJwYXVzZUJ0blxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wYXVzZVxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGhpZGRlbiBpZD1cXFwibXVzaWNcXFwiPjwvYXVkaW8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXVzaWMtcGxheWVyLXRleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgU3R5bGVzIG1hZGUgd2l0aCBDU1MgLyBTQ1NTXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJuYXZiYXIgZmFkZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIndlYnBhY2stbG9nb1xcXCI+PC9kaXY+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjL1xcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1ob21lXFxcIj48L2k+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjL2FwcFxcXCI+QVBJPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaXQtaWNvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9MaXRob3MtaHViL0pTLXBva2V2YW5pbGxhXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhYiBmYS1naXRodWIgd2hpdGUtLXRleHRcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLXRleHRcXFwiPlxcclxcbiAgICAgICAgTWFkZSB3aXRoIHB1cmUgPGkgY2xhc3M9XFxcImZhcyBmYS1oZWFydFxcXCI+PC9pPiwgcHVyZSA8c3BhbiBjbGFzcz1cXFwiamF2YXNjcmlwdC0tdGV4dCBqc1xcXCI+SlM8L3NwYW4+IGFuZFxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwic2Vjb25kYXJ5LWJhY2tncm91bmQtNDA0XFxcIj4uPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZC1ibG9jayBqdXN0aWZ5LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcImVycm9yNDA0XFxcIj5FcnJvcjxzcGFuIGlkPVxcXCJudW1iZXIxXFxcIj40PC9zcGFuPjxkaXYgaWQ9XFxcIm51bWJlcjJcXFwiPjwvZGl2PjxzcGFuIGlkPVxcXCJudW1iZXIzXFxcIj40PC9zcGFuPjwvaDE+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcImVycm9yLXRleHRcXFwiPk9vcHMsIHlvdSBzaG91bGRuJ3QgYmUgaGVyZSFcXHJcXG4gICAgICAgIDwvaDE+XFxyXFxuICAgICAgICA8YSBocmVmPVxcXCIvXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdvLWJ0bi00MDRcXFwiPkdvIGhvbWU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBpa2EtaW1nXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInNlY29uZGFyeS1iYWNrZ3JvdW5kXFxcIj4uPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBibGFjay0tdGV4dCBqdXN0aWZ5LWNlbnRlciBmYWRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGQtYmxvY2sganVzdGlmeS1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJtdC0yXFxcIj5Qb3dlcmVkIHdpdGg8L2gxPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9nby1pbWFnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibXQtNVxcXCIgaWQ9XFxcImhvbWUtdGl0bGVcXFwiPldlbGNvbWUgdG8gdGhlIFZhbmlsbGEgUG9rw6lBUFA8L2gxPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib2FrLWltYWdlIG10LTIgbWItMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvIy9hcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ28tYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPkdvPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBva2UtZGlhbG9nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9rZS1kaWFsb2ctdGV4dFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVyc2lvblxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJ0b29sYmFyIGZhZGVcXFwiPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcImQtZmxleCBuYXYtbGlzdCBqdXN0aWZ5LWJldHdlZW5cXFwiPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdi1idXR0b25cXFwiPkZpcnN0IGdlbmVyYXRpb248L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2LWJ1dHRvbiBkaXNhYmxlZFxcXCI+U2Vjb25kIGdlbmVyYXRpb248L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2LWJ1dHRvbiBkaXNhYmxlZFxcXCI+VGhyaWQgZ2VuZXJhdGlvbjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXYtYnV0dG9uIGRpc2FibGVkXFxcIj5Gb3J0aCBnZW5lcmF0aW9uPC9idXR0b24+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdi1idXR0b24gZGlzYWJsZWRcXFwiPkZpdGggZ2VuZXJhdGlvbjwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQganVzdGlmeS1jZW50ZXIgZmFkZVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgdGV4dC1jZW50ZXJcXFwiIGlkPVxcXCJwb2tlTGlzdFxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKdWIyNWxJaUJvWldsbmFIUTlJalV4TWlJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSGRwWkhSb1BTSTFNVElpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2dZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKdE16UXlMakU1T0M0MU1ERXlOemxqTGpNM015MHVOVE14TnpFMU9DQXhMakV3TlMwdU5qWXdPVE0zSURFdU5qTTNMUzR5T0RnMk1qVnNNell1TXpVMElESTFMalExTlRVME5tTXVOVE15TGpNM01qTXVOall4SURFdU1UQTFNUzR5T0RrZ01TNDJNelk0YkMwMU1DNDFPVGtnTnpJdU1qWXlNMk15TkM0MU9Ua2dOeTQ0TlRnM0lEUXhMak0xT0NBeE5pNHpNelUzSURReExqTTFPQ0F4Tmk0ek16VTNjeTAwTUM0NU5qUWdOekF1TkRZeUxURXhNQzQwTkRNZ056QXVORFl5TFRFeE9DNDROUzAyTlM0Mk56SXRNVEU0TGpnMUxUWTFMalkzTWlBeE55NDFNRFl0TVRFdU1UY3lJRFF6TGpRMU5pMHlNQzQzTlRNNWJDMDFOUzQxTFRZMkxqRTBNVFZqTFM0ME1UY3RMalE1TnpNdExqTTFNaTB4TGpJek9EWXVNVFExTFRFdU5qVTFPR3d6TXk0NU9UY3RNamd1TlRJM01UVmpMalE1T0MwdU5ERTNNak1nTVM0eU16a3RMak0xTWpNNElERXVOalUyTGpFME5EZzNiRGN3TGpJM01pQTRNeTQzTkRZNE9HTTJMakF4TnkwdU5qZ3dOaUF4TWk0eE5EY3RNUzR3TmpFZ01UZ3VNek16TFRFdU1EWXhJRGd1T0RreElEQWdNVGN1TnpjeExqWTNOVGtnTWpZdU5EUWdNUzQ0TWpJNWVtMHhNeTQzTkRZZ01UZzVMakl3TURjeU1XTXhPQzQxTkRFdE1UTXVNalF5SURRMkxqVTVOeTAwTnk0NE1EUWdORFl1TlRrM0xUUTNMamd3TkhNM01TNDJOalFnTlRZdU56a2dOekV1TmpZMElERTNOeTR5TURaak1DQXhNakF1TkRFMUxURXlNeTQ0T1RZZ01Ua3lMamc0T0MweE1qTXVPRGsySURFNU1pNDRPRGh6TFRVNUxqRTVOUzAxT1M0M09ERXROek11TnpJM0xURXpOUzQxTmpKakxURTBMalV6TVMwM05TNDNPREVnTWpFdU5EazJMVEUxT1M0NU1qY2dNakV1TkRrMkxURTFPUzQ1TWpkek16a3VNekkwTFRFekxqVTFPU0ExTnk0NE5qWXRNall1T0RBeGVtMHRNVGs1TGpZNE15QXdZeTB4T0M0MU5ERXRNVE11TWpReUxUUTJMalU1TnkwME55NDRNRFF0TkRZdU5UazNMVFEzTGpnd05ITXROekV1TmpZMElEVTJMamM1TFRjeExqWTJOQ0F4TnpjdU1qQTJZekFnTVRJd0xqUXhOU0F4TWpNdU9EazJJREU1TWk0NE9EZ2dNVEl6TGpnNU5pQXhPVEl1T0RnNGN6VTVMakU1TlMwMU9TNDNPREVnTnpNdU56STNMVEV6TlM0MU5qSmpNVFF1TlRNeExUYzFMamM0TVMweU1TNDBPVFl0TVRVNUxqa3lOeTB5TVM0ME9UWXRNVFU1TGpreU4zTXRNemt1TXpJMExURXpMalUxT1MwMU55NDROall0TWpZdU9EQXhlaUlnWm1sc2JEMGlJMlptWmlJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpOCtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEV5SWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTWpJNUxqTTNPU0EwTlRJdU9EVkRNak01TGpFd05pQTBOVFF1TXpNNUlESTBPUzR3TmpnZ05EVTFMakV4TVNBeU5Ua3VNakV5SURRMU5TNHhNVEZETXpZM0xqSXhOQ0EwTlRVdU1URXhJRFExTkM0M05qY2dNelkzTGpVMU9DQTBOVFF1TnpZM0lESTFPUzQxTlRaRE5EVTBMamMyTnlBeE5URXVOVFV6SURNMk55NHlNVFFnTmpRZ01qVTVMakl4TWlBMk5FTXlOVEV1T1RZMklEWTBJREkwTkM0NE1URWdOalF1TXprME1TQXlNemN1TnpjZ05qVXVNVFl5TVVNeU9URXVNelExSURFd05TNDNOVEVnTXpJMkxqYzJOeUF4TnpZdU1EWXlJRE15Tmk0M05qY2dNalUyUXpNeU5pNDNOamNnTXpRd0xqQTBJREk0Tnk0Mk1UWWdOREV6TGpRMElESXlPUzR6TnprZ05EVXlMamcxV2sweU5UVXVOalUySURVeE1rTXpPVGN1TURReElEVXhNaUExTVRFdU5qVTJJRE01Tnk0ek9EVWdOVEV4TGpZMU5pQXlOVFpETlRFeExqWTFOaUF4TVRRdU5qRTFJRE01Tnk0d05ERWdNQ0F5TlRVdU5qVTJJREJETVRFMExqSTNNU0F3SUMwd0xqTTBNemMxSURFeE5DNDJNVFVnTFRBdU16UXpOelVnTWpVMlF5MHdMak0wTXpjMUlETTVOeTR6T0RVZ01URTBMakkzTVNBMU1USWdNalUxTGpZMU5pQTFNVEphSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284TDNOMlp6NEtcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1qZ3dMamN3TWlBeU5UUXVPRGd4UXpJNE5DNHhOeklnTWpVeUxqYzJOU0F5T0RjdU1URTJJREkwT0M0ek16RWdNamc1TGpRNUlESTBNeTQwTURORE16SXdMamN6TlNBeU5UWXVNVGN6SURNME1pNDJPVElnTWpnMkxqTTBPU0F6TkRJdU5qa3lJRE15TVM0MU5FTXpOREl1TmpreUlETTJPQzR5T1NBek1ETXVPVFF5SURRd05pNHhPRGtnTWpVMkxqRTBNaUEwTURZdU1UZzVRekl6Tmk0MU1pQTBNRFl1TVRnNUlESXhPQzQwTWpNZ016azVMamd3TWlBeU1ETXVPVEEySURNNE9TNHdNemxETVRrNUxqRTBOQ0F6T0RZdU56ZzBJREU1TlM0eU1qWWdNemcwTGpZeE9DQXhPVEl1TURJZ016Z3lMamcwTlVNeE9EY3VNRFEzSURNNE1DNHdPVFlnTVRnekxqYzROaUF6TnpndU1qa3pJREU0TVM0M05EUWdNemM0TGpVM05VTXhOelV1TnpjMUlETTNPUzR6T1RnZ01UYzNMalV3T0NBek9EUXVPRGtnTVRjNUxqQTRNeUF6T0RrdU9EYzVRekU0TUM0eE5USWdNemt6TGpJMk9DQXhPREV1TVRRNUlETTVOaTQwTWpVZ01UYzVMall3TmlBek9UY3VOekkzUXpFM055NDVPVElnTXprNUxqQTVNU0F4TnpJdU56WTBJRE01TkM0eE1EWWdNVFkyTGpZMU5TQXpPRGd1TWpneVF6RTFPQzR6TXprZ016Z3dMak0xTXlBeE5EZ3VNemt4SURNM01DNDROamdnTVRRekxqY2dNemN6TGpjeE4wTXhNemt1T1RreElETTNOUzQ1TnlBeE5ETXVOVGt5SURNNE1pNHdPREVnTVRRNElETTRPUzQxTmpGTU1UUTRMak15TnlBek9UQXVNVEUyUXpFMU1DNHhPRGtnTXprekxqSTNPQ0F4TlRJdU16UTNJRE01Tmk0ME9UZ2dNVFUwTGpNeE5pQXpPVGt1TkRNMlF6RTFPQzR6TVRrZ05EQTFMalF3TnlBeE5qRXVOVFF6SURReE1DNHlNVGtnTVRVNUxqa3pJRFF4TVM0d016TkRNVFUzTGprNElEUXhNaTR3TVRjZ01UUTBMak01TkNBME1ESXVPRFEzSURFek1pNDVORFVnTXprd0xqRXhOa014TWpndU5USTJJRE00TlM0eU1ETWdNVEkwTGpJME5pQXpOemt1T0RjM0lERXlNQzR5TmpnZ016YzBMamt5T0V3eE1qQXVNalk0SURNM05DNDVNamRETVRFeExqVTJNU0F6TmpRdU1Ea3pJREV3TkM0ek1EY2dNelUxTGpBMk9DQXhNREF1TWpNMUlETTFOaTR4TXpkRE9UVXVNek0yTlNBek5UY3VOREl6SURrNUxqQTBNakVnTXpZM0xqVXlOeUF4TURRdU5EZzNJRE0zTnk0eU5VTXhNRGN1TURNeklETTRNUzQzT1RjZ01URXdMakF5T0NBek9EWXVOREkzSURFeE1pNDJNakVnTXprd0xqUXpOa3d4TVRJdU5qSXhJRE01TUM0ME16ZERNVEUyTGpZMU5DQXpPVFl1TmpjeElERXhPUzQzTVRVZ05EQXhMalF3TWlBeE1UZ3VOakExSURRd01TNDVPRFJETVRFM0xqRXdOeUEwTURJdU56WTNJREV3TXk0NU1qWWdNemc1TGpreE5DQTVOQzQ1TnpNMElETTNNeTQzTVRkRE9Ea3VOalUxT1NBek5qUXVNRGsySURnMUxqRTVNRGtnTXpVekxqUTJOQ0E0TVM0MU56WXhJRE0wTkM0NE5UZEROemN1TmpVMklETXpOUzQxTWpJZ056UXVOek0xT1NBek1qZ3VOVFk1SURjeUxqZ3hNekVnTXpJM0xqZzJPVU0yTmk0eE16STFJRE15TlM0ME16Z2dOall1TVRNeU5TQXpNemt1TURVNUlEWTRMamd4TVRrZ016VTRMamN4T0VNMk9TNHhOakUwSURNMk1TNHlPRE1nTmprdU5qZ3hPU0F6TmpNdU9UY3pJRGN3TGpNeU1qZ2dNelkyTGpjeE1rTTVOaTR6TURjZ05EVXdMamM0TlNBeE56WXVNVEk0SURVeE1pQXlOekF1TlRZM0lEVXhNa016T0RZdU1EZzBJRFV4TWlBME56a3VOekk0SURReU1DNDBNVElnTkRjNUxqY3lPQ0F6TURjdU5ETXlRelEzT1M0M01qZ2dNVGs1TGprZ016azBMamc1T1NBeE1URXVOelEzSURJNE55NHhNaUF4TURNdU5EazBRekk0Tnk0eU5UWWdPVGd1TkRJNE5DQXlPRGt1T1NBNE9DNHpPRE1nTWpnNUxqa2dPRGd1TXpnelF6STRPUzQ1SURnNExqTTRNeUF6TURndU9USTNJRFF5TGpNME56SWdNekE1TGprek15QXpNaTQxTURrNVF6TXdPUzQ1T1RrZ016RXVPRFUzSURNeE1DNHdOemdnTXpFdU1UUTNOU0F6TVRBdU1UWXpJRE13TGpNNU1UbERNekV4TGpNME9DQXhPUzQzTmpJNUlETXhNeTQxTlRNZ01DQXlPVFl1TlRVeElEQkRNamczTGpRM01TQXdJREk0TXk0eU5Ea2dOaTQzTlRRMk5DQXlOemd1TkRJZ01UUXVORGM1T1V3eU56Z3VORElnTVRRdU5EaERNamMyTGpVMk5pQXhOeTQwTkRVM0lESTNOQzQyTWpJZ01qQXVOVFUwTlNBeU56SXVNamdnTWpNdU5EYzVRekkxTlM0ME1USWdORFF1TlRRek5pQXlNamN1TURRNElEY3dMamcwT0RnZ01qRXdMamsyTlNBNE5DNDROak14UXpFM05pNDVOekVnTVRFMExqUTROQ0F4TkRNdU5qRTVJREV6T0M0NE1qZ2dNVEkwTGpFMk55QXhOVE11TURJMlRERXlOQzR4TmpjZ01UVXpMakF5Tmt3eE1qUXVNVFkySURFMU15NHdNamRETVRFMUxqTXhPU0F4TlRrdU5EZzBJREV3T1M0ek5EZ2dNVFl6TGpnME15QXhNRGN1TlNBeE5qVXVOalEwUXprekxqVTNOQ0F4TnprdU1qSWdORE11TmpReE9DQXlOamt1TWpnMklEUXpMalkwTVRnZ01qWTVMakk0TmtNME15NDJOREU0SURJMk9TNHlPRFlnTWpjdU5EazBNeUF5T1RndU1UZ3lJRE16TGpJek16Z2dNekEwTGpBME0wTXpPQzQ1TnpNeklETXdPUzQ1TURNZ05USXVPREUwTVNBek1EZ3VOVFlnTlRJdU9ERTBNU0F6TURndU5UWkROVEl1T0RFME1TQXpNRGd1TlRZZ01qTTRMamMxTlNBeU5qVXVPVEF6SURJMU5TNDBNRElnTWpZeUxqVXpPVU15TlRrdU9EZzBJREkyTVM0Mk16TWdNall6TGpBME9DQXlOakV1TVRFZ01qWTFMalEzTnlBeU5qQXVOekE1UXpJM01pNHdOeklnTWpVNUxqWXlJREkzTXk0eU5UWWdNalU1TGpReU5DQXlPREF1TnpBeUlESTFOQzQ0T0RGYVRURTBPUzR5TXpVZ01qQXdMakEyTkVNeE16a3VNalUwSURJd09TNDFOVEVnTVRJeUxqY3dNU0F5TXpJdU1UazJJREV5TWk0M01ERWdNak15TGpFNU5rTXhNakl1TnpBeElESXpNaTR4T1RZZ01UVXpMalEyTlNBeU16UXVNRGt4SURFM01DNDBNRGdnTWpFM0xqazROa014T0RjdU16VXlJREl3TVM0NE9DQXhPRE11TkRjZ01UYzBMalF6TXlBeE9ETXVORGNnTVRjMExqUXpNME14T0RNdU5EY2dNVGMwTGpRek15QXhOVGt1TWpFMUlERTVNQzQxTnpjZ01UUTVMakl6TlNBeU1EQXVNRFkwV2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEM5emRtYytDZz09XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5URXlJaUJvWldsbmFIUTlJalV4TWlJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NVFV5TGpVMklEQXVOVGd6TmpVNVF6RTFNaTQwTmpFZ01DNHlPVGM1TmlBeE5USXVOamMwSURBZ01UVXlMamszTmlBd1NETXpNaTQ0TURWRE16TXlMams1T0NBd0lETXpNeTR4TmprZ01DNHhNalUxT0RjZ016TXpMakl5TmlBd0xqTXdPVGM0TWt3ME1UVXVPREkwSURJMk55NHhOekZETkRFMUxqa3hNU0F5TmpjdU5EVTBJRFF4TlM0M0lESTJOeTQzTkRFZ05ERTFMalF3TXlBeU5qY3VOelF4U0RJNU5TNDJPRFJETWprMUxqVXpPQ0F5TmpjdU56UXhJREk1TlM0ME16TWdNalkzTGpnNElESTVOUzQwTnpNZ01qWTRMakF5TVV3ek5qUXVNVE0xSURVd09TNDNNalpETXpZMExqSTJPU0ExTVRBdU1UazFJRE0yTXk0Mk5UUWdOVEV3TGpVd01TQXpOak11TXpZeElEVXhNQzR4TVRGTU9UWXVOVEk1TlNBeE5UVXVNalkzUXprMkxqTXhNVFVnTVRVMExqazNOeUE1Tmk0MU1UZzBJREUxTkM0MU5qTWdPVFl1T0RneElERTFOQzQxTmpOSU1qQTFMalV6TmtNeU1EVXVOamczSURFMU5DNDFOak1nTWpBMUxqYzVNeUF4TlRRdU5ERTBJREl3TlM0M05ETWdNVFUwTGpJM01Vd3hOVEl1TlRZZ01DNDFPRE0yTlRsYUlpQm1hV3hzUFNKM2FHbDBaU0l2UGdvOEwzTjJaejRLXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5URXlJaUJvWldsbmFIUTlJalV4TWlJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NVEF5TGpjeU5pQTBNRFV1T1RjNFRERTROQzQ0TkRnZ016Z3lMakUyTmt3eU5UVXVOemM0SURVeE1TNDROVGRETWpVMUxqZzNNU0ExTVRJdU1ESTFJREkxTmk0eE1USWdOVEV5TGpBeU5TQXlOVFl1TWpBMElEVXhNUzQ0TlRkTU16STNMakV6TkNBek9ESXVNVFkyVERRd09TNHlOVGNnTkRBMUxqazNPRU0wTURrdU5EUXhJRFF3Tmk0d016RWdOREE1TGpZeE1pQTBNRFV1T0RZZ05EQTVMalUxTnlBME1EVXVOamMyVERNNE5TNDNOREVnTXpJMUxqRTNPVXcxTVRFdU9EVTJJREkxTmk0eU1EUkROVEV5TGpBeU5TQXlOVFl1TVRFeUlEVXhNaTR3TWpVZ01qVTFMamczTVNBMU1URXVPRFUzSURJMU5TNDNOemxNTXpnMExqY3dNaUF4T0RZdU1qTTFURFF3T1M0MU5UY2dNVEF5TGpJeU5VTTBNRGt1TmpFeUlERXdNaTR3TkRFZ05EQTVMalEwTVNBeE1ERXVPRGNnTkRBNUxqSTFOeUF4TURFdU9USXpURE15TlM0eU1EZ2dNVEkyTGpJNU5Fd3lOVFl1TWpBMElEQXVNVEkyTVRnNFF6STFOaTR4TVRJZ0xUQXVNRFF5TURVNU55QXlOVFV1T0RjeElDMHdMakEwTWpBMk5EUWdNalUxTGpjM09TQXdMakV5TmpFNE5Fd3hPRFl1TnpjMUlERXlOaTR5T1RSTU1UQXlMamN5TmlBeE1ERXVPVEl6UXpFd01pNDFORElnTVRBeExqZzNJREV3TWk0ek56RWdNVEF5TGpBME1TQXhNREl1TkRJMklERXdNaTR5TWpWTU1USTNMakk0TVNBeE9EWXVNak0xVERBdU1USTJNVGc0SURJMU5TNDNOemxETFRBdU1EUXlNRFU1TnlBeU5UVXVPRGN4SUMwd0xqQTBNakEyTkRRZ01qVTJMakV4TWlBd0xqRXlOakU0TkNBeU5UWXVNakEwVERFeU5pNHlOREVnTXpJMUxqRTNPVXd4TURJdU5ESTJJRFF3TlM0Mk56WkRNVEF5TGpNM01TQTBNRFV1T0RZZ01UQXlMalUwTWlBME1EWXVNRE14SURFd01pNDNNallnTkRBMUxqazNPRnBOTVRZMkxqUTFNaUF5TlRZdU9EYzJUREl5TkM0Mk16RWdNamc0TGpZNU5Vd3lOVFl1TkRVZ016UTJMamczTTBNeU5UWXVOVFF5SURNME55NHdORElnTWpVMkxqYzROQ0F6TkRjdU1EUXlJREkxTmk0NE56WWdNelEyTGpnM00wd3lPRGd1TmprMUlESTRPQzQyT1RWTU16UTJMamczTXlBeU5UWXVPRGMyUXpNME55NHdOREVnTWpVMkxqYzROQ0F6TkRjdU1EUXhJREkxTmk0MU5ESWdNelEyTGpnM015QXlOVFl1TkRWTU1qZzRMalk1TlNBeU1qUXVOak14VERJMU5pNDROellnTVRZMkxqUTFNME15TlRZdU56ZzBJREUyTmk0eU9EUWdNalUyTGpVME1pQXhOall1TWpnMElESTFOaTQwTlNBeE5qWXVORFV6VERJeU5DNDJNekVnTWpJMExqWXpNVXd4TmpZdU5EVXlJREkxTmk0ME5VTXhOall1TWpnMElESTFOaTQxTkRJZ01UWTJMakk0TkNBeU5UWXVOemcwSURFMk5pNDBOVElnTWpVMkxqZzNObG9pSUdacGJHdzlJbmRvYVhSbElpOCtDand2YzNablBnbz1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk9EZ3VNak16TmlBME1pNDFOalUyUXprMExqUXlPVGtnTVRndU1UQXhOQ0F4TVRZdU5Ua3pJREFnTVRReUxqazRNeUF3UXpFMk1pNDNOemdnTUNBeE9EQXVNVGsxSURFd0xqRTRORGNnTVRrd0xqSTNPU0F5TlM0MlNESXdOaTQzT1RKRE1qRTNMakExTVNBeE5TNHdOekUySURJek1TNHpPRFFnT0M0MU16TXpNeUF5TkRjdU1qUTFJRGd1TlRNek16TkRNamN3TGpRNU9TQTRMalV6TXpNeklESTVNQzQwTnpFZ01qSXVOVGc0TWlBeU9Ua3VNVEk1SURReUxqWTJOamRJTXpFeUxqazFORU16TWpFdU5qRTNJRE0zTGpJMU9EVWdNek14TGpnMU15QXpOQzR4TXpNeklETTBNaTQ0TVRnZ016UXVNVE16TTBNek5qWXVNRGN6SURNMExqRXpNek1nTXpnMkxqQTBOQ0EwT0M0eE9EZ3lJRE01TkM0M01ESWdOamd1TWpZMk4wZzBNekl1TWprM1F6UXpNaTQyTVRnZ05qZ3VNalkyTnlBME16SXVPVEU1SURZNExqTTFNeklnTkRNekxqRTNPQ0EyT0M0MU1EUXhRelF6TkM0NE9UVWdOamd1TXpRM0lEUXpOaTQyTXpRZ05qZ3VNalkyTnlBME16Z3VNemt4SURZNExqSTJOamRETkRZNUxqVTRNaUEyT0M0eU5qWTNJRFE1TkM0NE5qWWdPVE11TlRVeE5DQTBPVFF1T0RZMklERXlOQzQzTkRKV01qazBMakE0Tmt3ME9UUXVPRFkzSURJNU5DNDBURFE1TkM0NE5qWWdNamswTGpjeE5GWXlPVGN1TVRVelF6UTVOQzQ0TmpZZ01qazRMakU0TmlBME9UUXVPRE00SURJNU9TNHlNVFVnTkRrMExqYzRNaUF6TURBdU1qTTVRelE1TVM0ek9EUWdOREUzTGpjeE55QXpPRFV1TnpRNUlEVXhNaUF5TlRVdU9UTXpJRFV4TWtNeE1qTXVPVGMwSURVeE1pQXhOeUEwTVRRdU5UYzNJREUzSURJNU5DNDBRekUzSURJek5pNHpPVEVnTkRFdU9USTBPU0F4T0RNdU5qZ3pJRGd5TGpVMU16VWdNVFEwTGpZM05VTTRNaTQwTlRJeUlESXdNUzR5TWpnZ09ETXVOREEzTkNBeU5Ua3VOamswSURnM0xqZ3hNRGNnTWpVNExqWTVNVU01T1M0Mk1ERXhJREkxTmk0d01ETWdPVEF1TXpnNU1TQTRNQzQ0TXprMUlEZzRMakl6TXpZZ05ESXVOVFkxTmxvaUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p3dmMzWm5QZ289XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5URXlJaUJvWldsbmFIUTlJalV4TWlJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NelV5TGpJMU9DQXpPVFV1TXprMFF6TTFPQzQxT0RRZ016Y3lMakkyTXlBek5EWXVNekExSURNeU5DNDNNU0F6TkRZdU16QTFJRE15TkM0M01VTXpORFl1TXpBMUlETXlOQzQzTVNBek16Y3VNems1SURNMk15NDBORGtnTXpJekxqUTRNeUF6TnpjdU56WTNRek14TVM0Mk1URWdNemc1TGprNElESTVOeTR3TmpZZ016azRMalExTVNBeU56WXVNakEySURRd01DNDJOemRETWprekxqSTJNU0F6T1RJdU16a3pJRE13TkM0NU9TQXpOelV1TVRJZ016QTBMams1SURNMU5TNHhOVFZETXpBMExqazVJRE15Tnk0eE1qa2dNamd4TGpnM09DQXpNRFF1TkRBNUlESTFNeTR6TmpnZ016QTBMalF3T1VNeU1qUXVPRFU0SURNd05DNDBNRGtnTWpBeExqYzBOU0F6TWpjdU1USTVJREl3TVM0M05EVWdNelUxTGpFMU5VTXlNREV1TnpRMUlETTJNaTQ0TURrZ01qQXpMalEzSURNM01DNHdOamdnTWpBMkxqVTFOeUF6TnpZdU5UYzJRekU0T0M0M01qVWdNell5TGpNM0lERTROUzQ1TWpFZ016TTVMalU1TkNBeE9EVXVPVEl4SURNek9TNDFPVFJETVRnMUxqa3lNU0F6TXprdU5UazBJREUyTmk0d01Ea2dOREl5TGpJMk5DQXlNakF1T0RjMUlEUTJNUzR4TlRKRE1qYzFMamMwSURVd01DNHdOQ0F6T0RNdU1qRTVJRFEyTmk0Mk1UUWdNemd6TGpJeE9TQTBOall1TmpFMFF6TTRNeTR5TVRrZ05EWTJMall4TkNBeU1qa3VOREVnTlRjMExqZ3pOeUF4TVRVdU5ETTJJRFExTnk0d05VTXhOeTR5TlRZNElETTFOUzQxT0RRZ09Ea3VPREV4TVNBeU1qSXVNREF6SURnNUxqZ3hNVEVnTWpJeUxqQXdNME00T1M0NE1URXhJREl5TWk0d01ETWdPRFl1TmpjM055QXlNelF1TXprMUlEZzJMalkzTnpjZ01qUTRMamM0UXpnMkxqWTNOemNnTWpZekxqRTJOU0E1TkM0ME56Y2dNamMwTGpFeElEazBMalEzTnlBeU56UXVNVEZET1RRdU5EYzNJREkzTkM0eE1TQXhNVGN1TnpReUlESXlOUzR3TnpFZ01UTTFMamcwT0NBeU1EVXVNVEk0UXpFMU1pNDVPRFFnTVRnMkxqSTFOQ0F4TnpRdU5EWTFJREUzTUM0NU5EWWdNVGt6TGpBeE9TQXhOVGN1TnpJMFF6SXdOeTR6TURFZ01UUTNMalUwTmlBeU1Ua3VPRFE1SURFek9DNDJNRFFnTWpJM0xqTTBNeUF4TXpBdU1qSXpRekkyT0M0Mk1pQTROQzR3TmpnM0lESTBNeTR6TVRFZ01DQXlORE11TXpFeElEQkRNalF6TGpNeE1TQXdJREk0T1M0NE5ERWdOREV1TURJZ016QXlMamd6TVNBNU15NDVPVGM0UXpNd055NDNPRE1nTVRFMExqRTVNaUF6TURRdU5UazNJREV6Tnk0eE5qa2dNekF4TGpjME9TQXhOVGN1TnpFMlF6STVOeTR4TWpVZ01Ua3hMakEzTWlBeU9UTXVNemc0SURJeE9DNHdNalVnTXpJMkxqYzVNeUF5TVRZdU1qYzJRek00TUM0M056VWdNakV6TGpRME9TQXpNek11T0RZMklERXpNQzR5TWpNZ016TXpMamcyTmlBeE16QXVNakl6UXpNek15NDROallnTVRNd0xqSXlNeUEwTlRZdU16RTRJREU1TkM0MU9ETWdORFEzTGpFM0lETXdOeTR4TkRWRE5ETTRMakF5TVNBME1Ua3VOekEzSURNeE15NHpNalFnTkRRMUxqSTVOeUF6TVRNdU16STBJRFEwTlM0eU9UZERNekV6TGpNeU5DQTBORFV1TWprM0lETTBOUzQ1TXpFZ05ERTRMalV5TlNBek5USXVNalU0SURNNU5TNHpPVFJhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284TDNOMlp6NEtcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1UYzRMamN4TWlBME56Y3VOek16UXpJMU15NDNNVFVnTkRjM0xqY3pNeUF6TVRjdU9USTNJRFF6Tmk0d05EZ2dNelEwTGpRek5pQXpOell1T1RVMlF6TTBOQzQzTmlBek56WXVNak0xSURJek9DNHdNRGNnTkRBMExqWTVPU0F5TkRFdU5ERXhJRE01TkM0Mk16ZERNalF5TGprek1TQXpPVEF1TVRRMElETXdPQzR6TnpFZ016WTJMakl6T0NBek5UWXVNRFE0SURNek9DNHpOVFJETXpnekxqUTFNU0F6TWpJdU16STNJRE01Tmk0d055QXlPRGd1TkNBek9UWXVNRGNnTWpnNExqUkRNemsyTGpBM0lESTRPQzQwSURNME9TNDVNRE1nTXpFd0xqZ3hOU0F6TWpZdU5UWTBJRE14Tmk0MU1ERkRNamM1TGpVek1pQXpNamN1T1RZeElESXpPQzR4TXpFZ016STJMamN5TnlBeU16Z3VNVE14SURNeU5TNDFNek5ETWpNNExqRXpNU0F6TWpJdU9UVXhJRE13Tmk0NE56WWdNekE1TGpnNE9TQTBNREl1TkRJMElESTFNUzQyTmpSRE5EUTNMak0yTnlBeU1qUXVNamMzSURRMU9TNDFOelFnTVRjM0xqRXdNeUEwTlRrdU5UYzBJREUzTnk0eE1ETkRORFU1TGpVM05DQXhOemN1TVRBeklEUXhNQzR4TmpNZ01qQTJMalV6TlNBek9EQXVNamt6SURJeE5pNHlOVEpETXpBNUxqUTFOeUF5TXprdU1qazFJREkwTkM0NE1UVWdNalEyTGpJek9TQXlORFF1T0RFMUlESTBNeTR4TWpGRE1qUTBMamd4TlNBeU16WXVORFExSURNd01TNDNNRElnTWpJd0xqZ3dNaUF6TmpJdU1ERTJJREU1TVM0MU56ZERNemt6TGpNM05pQXhOell1TXpneUlEUXlNQzQxTXpVZ01UVTJMalV6SURRMU1pNHdNRGdnTVRNMExqUTFNME0xTURNdU5UQTJJRGs0TGpNek1pQTFNVEV1T1RrNUlETTBJRFV4TVM0NU9Ua2dNelJETlRFeExqazVPU0F6TkNBME5qRXVNakEzSURZMkxqYzJNREVnTkRNMkxqUXlJRGMzTGpZek9UUkRNek0wTGpFME1TQXhNakl1TlRNeElESTBNeTQ0TWprZ01UUTJMakEzT1NBeE56Z3VOekV5SURFMU1TNHhOemRET0RBdU5ERTJJREUxT0M0NE56TWdNQ0F5TWpjdU5EVTJJREFnTXpFMkxqVXdNVU13SURRd05TNDFORGNnT0RBdU1ERXhPU0EwTnpjdU56TXpJREUzT0M0M01USWdORGMzTGpjek0xb2lJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZjM1puUGdvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEV5SWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTXpZNExqazFNaUExTVRBdU1qSTNRek15TWk0M05qa2dOVEV5TGpVNU1TQXlOamt1T0RrMklEVXhNaTQxT1RFZ01qVXhMamt5T0NBMU1UQXVNakkzUXpFeE1TNDNOeUEwT1RFdU56ZzRJREFnTXpnNUxqTXhNeUF3SURJMU1DNDRRekFnTVRFeUxqSTROeUF4TVRRdU5qRTFJREFnTWpVMklEQkRNemszTGpNNE5TQXdJRFV4TWlBeE1USXVNamczSURVeE1pQXlOVEF1T0VNMU1USWdNekUxTGpJeU1TQTBPRGN1TWpBM0lETTNNeTQ1TmprZ05EUTJMalEySURReE9DNHpPRGRETkRNMUxqTTVOU0EwTXpBdU5EUTRJRFExTUM0MU56Y2dORE00TGprd09DQTBOall1TURBeUlEUTBOeTQxTURSRE5EZ3hMakV6SURRMU5TNDVNelVnTkRrMkxqUTVNaUEwTmpRdU5EazJJRFE0Tnk0MU5qUWdORGMyTGpjeE1rTTBOemN1TnpJMklEUTVNQzR4TnpNZ05ESTBMak01TWlBMU1EY3VNemc1SURNMk9DNDVOVElnTlRFd0xqSXlOMXBOTWpJd0lESXhPUzQwTlVNeU1qQWdNalF4TGpBNU1pQXlNREl1TURreElESTFPQzQyTXpjZ01UZ3dJREkxT0M0Mk16ZERNVFUzTGprd09TQXlOVGd1TmpNM0lERTBNQ0F5TkRFdU1Ea3lJREUwTUNBeU1Ua3VORFZETVRRd0lESXdOQzQ1TXpVZ01UUTRMakExTlNBeE9USXVNalkwSURFMk1DNHdNalFnTVRnMUxqUTVNVU14TmpBdU56RXpJREl3TkM0ek5qSWdNVGMyTGpJeU9TQXlNVGt1TkRRNUlERTVOUzR5TmprZ01qRTVMalEwT1VneU1qQkRNakl3SURJeE9TNDBORGtnTWpJd0lESXhPUzQwTlNBeU1qQWdNakU1TGpRMVdrMHpORE11T1RjMklERTROUzQwT1RGRE16UXpMakk0TnlBeU1EUXVNell5SURNeU55NDNOekVnTWpFNUxqUTBPU0F6TURndU56TXhJREl4T1M0ME5EbElNamcwUXpJNE5DQXlNVGt1TkRRNUlESTROQ0F5TVRrdU5EVWdNamcwSURJeE9TNDBOVU15T0RRZ01qUXhMakE1TWlBek1ERXVPVEE1SURJMU9DNDJNemNnTXpJMElESTFPQzQyTXpkRE16UTJMakE1TVNBeU5UZ3VOak0zSURNMk5DQXlOREV1TURreUlETTJOQ0F5TVRrdU5EVkRNelkwSURJd05DNDVNelVnTXpVMUxqazBOU0F4T1RJdU1qWTBJRE0wTXk0NU56WWdNVGcxTGpRNU1Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZjM1puUGdvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSnViMjVsSWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUhkcFpIUm9QU0kxTVRJaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSnRPVGN1TkRFeU1TQTBOREF1TmpRNVl5MHhMamMxTnpRdE1TNDJOVE10TXk0ME9UVTBMVE11TXpNNExUVXVNakV6TWkwMUxqQTFOaTA1TUM0Mk9EUTFOUzA1TUM0Mk9EUXRPVEF1TmpnME5UTXRNak0zTGpjeE15QXdMVE15T0M0ek9UY2dPVEF1TmpnME1TMDVNQzQyT0RRNUlETTNPUzQyTkRBeExUazJMamMxTVRZZ016YzVMalkwTURFdE9UWXVOelV4Tm5Nek9TNDBORElnTXpNMExqUTJORFl0TlRFdU1qUXlJRFF5TlM0eE5EZzJZeTA0TUM0MU5DQTRNQzQxTkMweU1EVXVOVEl5SURnNUxqVTFMVEk1Tmk0d01EVWdNamN1TURNeGJEY3lMamt3T0MwNE9TNDBOekVnTVRFMkxqVTFMVEkxTGpFMk15MDVOUzR4TXprdE9TNDFNVEVnTmpBdU5EWXlMVFl4TGpVMk1pQTJPQzQ0TWpRdE1UVXVNRGMzTFRVMExqUXlNaTB4Tmk0eE1UY2dOVFF1TkRJeUxUazRMakUzTmkwM055NDBNU0E0Tmk0NE1qZ3RNamt1T0RrekxUUXlMakU0TXlBeE1DNDFNak1nTmprdU5qUTRMVFV6TGpreE55QTJNQzQzT0RJdE1qUXVPVGt6TFRjMkxqbDJNVEF5TGpJMk9Ib2lJR1pwYkd3OUlpTm1abVlpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJdlBqd3ZjM1puUGc9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEV5SWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTVRFeUxqYzJOQ0EwTXprdU56VTBRekV4TWk0Mk1qVWdORE01TGpjMU5DQXhNVEl1TlRJNElEUXpPUzQyTVRjZ01URXlMalUzTkNBME16a3VORGcyVERJME15NHlPRGtnTnpBdU1UTTBRekkwTXk0ek1UZ2dOekF1TURVek55QXlORE11TXprMElEY3dJREkwTXk0ME56a2dOekJJTXpnekxqQXlNVU16T0RNdU1UQTJJRGN3SURNNE15NHhPRE1nTnpBdU1EVTBNU0F6T0RNdU1qRXhJRGN3TGpFek5EbE1OVEV4TGprNE55QTBNemt1TkRnM1F6VXhNaTR3TXpJZ05ETTVMall4T0NBMU1URXVPVE0xSURRek9TNDNOVFFnTlRFeExqYzVOeUEwTXprdU56VTBTREV4Tmk0Mk9USklNVEV5TGpjMk5GcE5NQzR5TURFek1EWWdORFF4TGpFNU9VTXdMakEyTURreE1qSWdORFF4TGpFNU9TQXRNQzR3TXpZeU9EVXlJRFEwTVM0d05Ua2dNQzR3TVRJNU5qQTNJRFEwTUM0NU1qaE1PVGN1TXpVeU5pQXhPREV1TURVMlF6azNMak00TWpFZ01UZ3dMamszTnlBNU55NDBOVGN4SURFNE1DNDVNalVnT1RjdU5UUXhJREU0TUM0NU1qVklNVGd5TGpFeE9FTXhPREl1TWpVNElERTRNQzQ1TWpVZ01UZ3lMak0xTlNBeE9ERXVNRFkwSURFNE1pNHpNRGNnTVRneExqRTVOVXc0T0M0eE9ESXpJRFEwTVM0d05qZERPRGd1TVRVek5TQTBOREV1TVRRMklEZzRMakEzTnprZ05EUXhMakU1T1NBNE55NDVPVE15SURRME1TNHhPVGxJTUM0eU1ERXpNRFphSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284TDNOMlp6NEtcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk16ZzBMak13TkNBek9TNHdOREU0VERNNE5TNDROemtnTVRjM0xqTTVNa3d5TmpVdU1qQTVJREl6TlM0ek1UbE1Nall6TGpjeU1TQXhNRFF1TmpsTU16ZzBMak13TkNBek9TNHdOREU0V2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDFNRFV1TWpZNUlESTFOeTR3TkRkTU16ZzFMamd4TkNBek1qVXVNemMwVERJMk5pNHlPRGdnTWpVMkxqa3pPVXd6T0RVdU56VXlJREU1TkM0eE9EZE1OVEExTGpJMk9TQXlOVGN1TURRM1dpSWdabWxzYkQwaWQyaHBkR1VpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB5TkRVdU1EUWdNalUzTGpBME4wd3hNalV1TlRnMUlETXlOUzR6TnpSTU5pNHdOVGcyTVNBeU5UWXVPVE01VERFeU5TNDFNak1nTVRrMExqRTROMHd5TkRVdU1EUWdNalUzTGpBME4xb2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTVRJMExqSTBNeUF6T0M0ME56VXpUREkwT0M0eU1qa2dPVGt1T0RneFRESTBOUzR3TlRrZ01qTXpMalk1TjB3eE1qY3VPVGt6SURFM05TNDNNVGxNTVRJMExqSTBNeUF6T0M0ME56VXpXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswek9EY3VOamM0SURRM015NDFNalZNTWpZekxqWTVNaUEwTVRJdU1URTVUREkyTmk0NE5qSWdNamM0TGpNd01rd3pPRE11T1RJNElETXpOaTR5T0RGTU16ZzNMalkzT0NBME56TXVOVEkxV2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMHhNamd1TlRJMUlEUTNOQzQzTjB3eE1qWXVPVFE1SURNek5pNDBNa3d5TkRjdU5qSWdNamM0TGpRNU0wd3lORGt1TVRBNElEUXdPUzR4TWpGTU1USTRMalV5TlNBME56UXVOemRhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284TDNOMlp6NEtcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5EZ3hJREkxTmtNME9ERWdNemd3TGpJMk5DQXpPREF1TWpZMElEUTRNU0F5TlRZZ05EZ3hRekV6TVM0M016WWdORGd4SURNeElETTRNQzR5TmpRZ016RWdNalUyUXpNeElERXpNUzQzTXpZZ01UTXhMamN6TmlBek1TQXlOVFlnTXpGRE16Z3dMakkyTkNBek1TQTBPREVnTVRNeExqY3pOaUEwT0RFZ01qVTJXazB6T0RRdU5UY3hJREkxTmtNek9EUXVOVGN4SURNeU55NHdNRGdnTXpJM0xqQXdPQ0F6T0RRdU5UY3hJREkxTmlBek9EUXVOVGN4UXpFNE5DNDVPVElnTXpnMExqVTNNU0F4TWpjdU5ESTVJRE15Tnk0d01EZ2dNVEkzTGpReU9TQXlOVFpETVRJM0xqUXlPU0F4T0RRdU9Ua3lJREU0TkM0NU9USWdNVEkzTGpReU9TQXlOVFlnTVRJM0xqUXlPVU16TWpjdU1EQTRJREV5Tnk0ME1qa2dNemcwTGpVM01TQXhPRFF1T1RreUlETTROQzQxTnpFZ01qVTJXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NEtQQzl6ZG1jK0NnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESTNMamd5TVNBek9UTXVORFE1UXpRM09TNDFNalFnTXpVeUxqRXdPQ0ExTVRJZ01qa3lMak0zTmlBMU1USWdNakkxTGprMVF6VXhNaUF4TURFdU1UWXhJRE01Tnk0ek9EVWdNQ0F5TlRZZ01FTXhNVFF1TmpFMUlEQWdNQ0F4TURFdU1UWXhJREFnTWpJMUxqazFRekFnTWpnNUxqazNPQ0F6TUM0eE56TTNJRE0wTnk0M09EWWdOemd1TmpVMU15QXpPRGd1T1RBeFF6YzFMamN4TnpFZ016azVMakEwTmlBM05DNHhNRFV5SURReE1DNHdPREVnTnpRdU1UQTFNaUEwTWpFdU5qSkROelF1TVRBMU1pQTBOekV1TlRNMUlERXdOQzR5TmpjZ05URXlJREUwTVM0ME56UWdOVEV5UXpFMk5TNDJOU0ExTVRJZ01UZzJMamcxTWlBME9UUXVPVEUxSURFNU9DNDNNemNnTkRZNUxqSTFORU15TVRBdU5qSXlJRFE1TkM0NU1UVWdNak14TGpneU5DQTFNVElnTWpVMklEVXhNa015TnpndU1ETTRJRFV4TWlBeU9UY3VOakEwSURRNU55NDRNRFFnTXpBNUxqZzVOU0EwTnpVdU9EVTNRek15TWk0eE9EWWdORGszTGpnd05DQXpOREV1TnpVeUlEVXhNaUF6TmpNdU56ZzVJRFV4TWtNME1EQXVPVGsySURVeE1pQTBNekV1TVRVNElEUTNNUzQxTXpVZ05ETXhMakUxT0NBME1qRXVOakpETkRNeExqRTFPQ0EwTVRFdU56ZzBJRFF5T1M0NU9EWWdOREF5TGpNeE5DQTBNamN1T0RJeElETTVNeTQwTkRsYVRUUXdOQzR5TVRFZ01qTXdMalF6TVVNME1EUXVNakV4SURJNU15NDNPRFVnTXpNMkxqTTBOaUF6TkRVdU1UUTBJREkxTWk0Mk16SWdNelExTGpFME5FTXhOamd1T1RFM0lETTBOUzR4TkRRZ01UQXhMakExTXlBeU9UTXVOemcxSURFd01TNHdOVE1nTWpNd0xqUXpNVU14TURFdU1EVXpJREUyTnk0d056Y2dNVFk0TGpreE55QXhNVFV1TnpFNElESTFNaTQyTXpJZ01URTFMamN4T0VNek16WXVNelEySURFeE5TNDNNVGdnTkRBMExqSXhNU0F4TmpjdU1EYzNJRFF3TkM0eU1URWdNak13TGpRek1Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZjM1puUGdvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEV5SWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRVMUxqa3lOU0EwTWpVdU1UZzBRelExTlM0NU1qVWdOREkxTGpFNE5DQXpPVEV1TXpZMUlEUTNOaTQ1TmpNZ01qWXlMamc1TXlBME5UVXVOVE0yUXpFMk5TNDBNak1nTkRNNUxqSTNPU0F4TVRNdU5ETTNJRE16TVM0NE16TWdNVEV6TGpRek55QXlOelF1TURjNVF6RXhNeTQwTXpjZ01UTTNMakUwT1NBeU1UUXVOemd6SURFd05TNDVPRGdnTWpnekxqTWdNVEExTGprNE9FTXpOVEV1T0RFMklERXdOUzQ1T0RnZ016azJMalV4TXlBeE56SXVOemc0SURNNU5pNDFNVE1nTWpJMExqVXdPRU16T1RZdU5URXpJREkzTmk0eU1qZ2dNelU1TGprek15QXpNakV1TkRZMklETXdNeTR3TURZZ016SXhMalEyTmtNeU5EWXVNRGdnTXpJeExqUTJOaUF5TWprdU1qSWdNamd4TGpVd01TQXlNamt1TWpJZ01qUTBMamMxT0VNeU1qa3VNaklnTWpBNExqQXhOaUF5TlRndU9UUTNJREU1TlM0d056RWdNamcyTGpBMU9DQXhPVFV1TURjeFF6TXhNeTR4TmprZ01UazFMakEzTVNBek1qSXVORFV5SURJeE9DNHlNVGNnTXpJeUxqUTFNaUF5TXpndU1URkRNekl5TGpRMU1pQXlOVGd1TURBMElETXdOeTR3TVRjZ01qWTFMakV5T0NBeU9UUXVNVFF6SURJMk5TNHhNamhETWpneExqSTJPU0F5TmpVdU1USTRJREkzT1M0NU9UWWdNalU0TGpZek15QXlOelV1TURZNUlESTFNUzQ0TURkRE1qY3dMakUwTVNBeU5EUXVPVGd5SURJNE1TNHpOVE1nTWpFNUxqRTBOaUF5TmpJdU9Ea3pJREl4T1M0eE5EWkRNalEwTGpRek15QXlNVGt1TVRRMklESTBNQzQ1T1RJZ01qUTRMamcwTnlBeU5EQXVPVGt5SURJME9DNDRORGRETWpRd0xqazVNaUF5TkRndU9EUTNJREkwTnk0M01qSWdNekEyTGpFNElETXdNeTR3TURZZ016QTFMakU1TVVNek5UZ3VNamt4SURNd05DNHlNREVnTXpnMExqVXhPQ0F5TmpFdU5EWXhJRE0zTmk0NE9UWWdNakU1TGpFME5rTXpOamt1TWpjMElERTNOaTQ0TXlBek1qZ3VNakEzSURFek1TNDROalVnTWpVMkxqRXpNeUF4TkRBdU9UVXhRekU0TkM0d05Ua2dNVFV3TGpBek55QXhOVFF1TmpNeUlESXlNaTQ0TmpFZ01UWTNMall3TXlBek1EQXVOamcxUXpFNE1DNDFOelFnTXpjNExqVXhJREkzTXk0NE1EY2dOREl6TGpZd01pQXpORGN1TVRFeUlEUXdOeTR6TnpsRE5ESXdMalF4T0NBek9URXVNVFUySURRNU15NDBNamtnTXpNNExqQTROaUEwT1RNdU5ESTVJREl3TXk0MU16TkRORGt6TGpReU9TQTJPQzQ1TnpnNUlETTNOaTQ0T1RZZ0xURXhMamt3TURJZ01qTTNMamswTVNBeExqUXlPVEV6UXprNExqazROVGtnTVRRdU56VTROQ0F4TWk0M01qa2dNVE0yTGpJME1pQXhPQzR5TlRBeUlESTRNaTR5TURkRE1qTXVOemN4TkNBME1qZ3VNVGN5SURFMk1pNHlOelVnTlRBM0xqWTJPU0F5TnprdU16azBJRFV4TVM0M05qWkRNemsyTGpVeE15QTFNVFV1T0RZMElEUTJPQzR6TVRJZ05EUTRMakEyTnlBME5qZ3VNekV5SURRME9DNHdOamRETkRZNExqTXhNaUEwTkRndU1EWTNJRFE0TkM0ME5Ua2dORE16TGpZMk9DQTBOemd1TVRJNElEUXlNaTQwTWpSRE5EY3hMamM1T0NBME1URXVNVGdnTkRVMUxqa3lOU0EwTWpVdU1UZzBJRFExTlM0NU1qVWdOREkxTGpFNE5Gb2lJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZjM1puUGdvPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVEV5SWlCb1pXbG5hSFE5SWpVeE1pSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTXprMUxqRXpPQ0F5TkRRdU56VTNRek01TlM0eE1Ea2dNalEwTGpjeE55QXpPVFV1TURrM0lESTBOQzQyTmpjZ016azFMakV3TlNBeU5EUXVOakU0VERReU55NDNOamtnTlRRdU1UVXhPRU0wTWpjdU56ZzBJRFUwTGpBMk5ERWdOREkzTGpnMk1TQTFOQ0EwTWpjdU9UUTVJRFUwU0RRek9DNHlPRGRETkRNNExqTTJOeUExTkNBME16Z3VORE0zSURVMExqQTFNVGNnTkRNNExqUTJNU0ExTkM0eE1qYzNURFV4TWk0d05URWdNamczTGpFek1VTTFNVEl1TURjMElESTROeTR5TURNZ05URXlMakEwT1NBeU9EY3VNamd6SURVeE1TNDVPRGtnTWpnM0xqTXpURFExTnk0M015QXpNamt1TmprelF6UTFOeTQyTkRrZ016STVMamMxTmlBME5UY3VOVE15SURNeU9TNDNOQ0EwTlRjdU5EY3hJRE15T1M0Mk5UZE1NemsxTGpFek9DQXlORFF1TnpVM1drMHRNU0F6TnpFdU1ESXlReTB4SURNM01TNHhNREVnTFRBdU9UUTVNakEwSURNM01TNHhOekVnTFRBdU9EYzBNVEE1SURNM01TNHhPVFpNTVRFd0xqazNOU0EwTURjdU56WTNRekV4TVM0d01qa2dOREEzTGpjNE5TQXhNVEV1TURnNUlEUXdOeTQzTnpZZ01URXhMakV6TmlBME1EY3VOelEwVERNMk1TNHhORFVnTWpNMUxqRTBORU16TmpFdU1UZzNJREl6TlM0eE1UVWdNell4TGpJeE5TQXlNelV1TURjZ016WXhMakl5TWlBeU16VXVNREpNTXpnNExqQXpNaUExTlM0eE1qZzBRek00T0M0d05Ea2dOVFV1TURFNElETTROeTQ1TmpNZ05UUXVPVEU0T0NBek9EY3VPRFV5SURVMExqa3hPRGhJTVRZMkxqUXdOa014TmpZdU16VXhJRFUwTGpreE9EZ2dNVFkyTGpNZ05UUXVPVFF6SURFMk5pNHlOalVnTlRRdU9UZzBPVXd0TUM0NU5UYzVOelFnTWpVMkxqY3hORU10TUM0NU9EVXhOQ0F5TlRZdU56UTNJQzB4SURJMU5pNDNPRGdnTFRFZ01qVTJMamd6TVZZek56RXVNREl5V2sweE5UY3VOVGd6SURReE55NHdPRFZNTWpjNUxqYzNOaUEwTlRjdU1URXlRekkzT1M0NE16RWdORFUzTGpFeklESTNPUzQ0T1RJZ05EVTNMakV5TVNBeU56a3VPVE01SURRMU55NHdPRGRNTkRJMUxqUXhPQ0F6TlRJdU56TTBRelF5TlM0ME9Ua2dNelV5TGpZM055QTBNalV1TlRFNUlETTFNaTQxTmpZZ05ESTFMalEyTkNBek5USXVORGcwVERNM01DNDVNamdnTWpjeExqTXlPVU16TnpBdU9EY3hJREkzTVM0eU5EUWdNemN3TGpjMU55QXlOekV1TWpJeUlETTNNQzQyTnpNZ01qY3hMakk0VERFMU55NDFPRE1nTkRFM0xqQTROVm9pSUdacGJHdzlJbmRvYVhSbElpOCtDand2YzNablBnbz1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1DNHdOVEV4TVRBM0lESTFOQzQxTWpkRExUQXVNREUzTURBME5pQXlOVFF1TkRFeElDMHdMakF4TnpBek9EZ2dNalUwTGpJMk55QXdMakExTVRBeE9UWWdNalUwTGpFMVRERXlPQzQzT1RVZ016UXVNVGcwTTBNeE1qZ3VPRFl5SURNMExqQTNNRElnTVRJNExqazROU0F6TkNBeE1qa3VNVEUzSURNMFNETTROQzR5T1RSRE16ZzBMalF5TnlBek5DQXpPRFF1TlRVZ016UXVNRGN3T0NBek9EUXVOakUzSURNMExqRTROVGxNTlRFeExqazBPU0F5TlRRdU1UVXlRelV4TWk0d01UWWdNalUwTGpJMk55QTFNVEl1TURFMklESTFOQzQwTVNBMU1URXVPVFE1SURJMU5DNDFNalZNTXpnMExqWXhOeUEwTnpRdU1qUTBRek00TkM0MU5TQTBOelF1TXpVNUlETTROQzQwTWpjZ05EYzBMalF6SURNNE5DNHlPVFFnTkRjMExqUXpTREV5T1M0eE1UZERNVEk0TGprNE5TQTBOelF1TkRNZ01USTRMamcyTWlBME56UXVNellnTVRJNExqYzVOU0EwTnpRdU1qUTJUREF1TURVeE1URXdOeUF5TlRRdU5USTNXazB6TnpRdU5qRTNJREkxTkM0eU1UVkRNemMwTGpZeE55QXpNVGt1TnpBeklETXlNUzQxTWpnZ016Y3lMamM1TWlBeU5UWXVNRFFnTXpjeUxqYzVNa014T1RBdU5UVXlJRE0zTWk0M09USWdNVE0zTGpRMk15QXpNVGt1TnpBeklERXpOeTQwTmpNZ01qVTBMakl4TlVNeE16Y3VORFl6SURFNE9DNDNNallnTVRrd0xqVTFNaUF4TXpVdU5qTTRJREkxTmk0d05DQXhNelV1TmpNNFF6TXlNUzQxTWpnZ01UTTFMall6T0NBek56UXVOakUzSURFNE9DNDNNallnTXpjMExqWXhOeUF5TlRRdU1qRTFXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NEtQQzl6ZG1jK0NnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRFeUlpQm9aV2xuYUhROUlqVXhNaUlnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESXlMakUzTWlBek5EWXVOVEUxUXpReU1pNHhOeklnTkRNM0xqZzVOeUF6TkRjdU9ERXpJRFV4TVM0NU56Y2dNalUyTGpBNE5pQTFNVEV1T1RjM1F6RTJOQzR6TlRrZ05URXhMamszTnlBNU1DQTBNemN1T0RrM0lEa3dJRE0wTmk0MU1UVkRPVEFnTWpVM0xqWXpPU0F5TkRjdU1UQXlJREV6TGpVME56a2dNalUxTGpjeE9DQXdMakl5TnpneFF6STFOUzQ1TVRVZ0xUQXVNRGMxT1RNNE5DQXlOVFl1TWpVNElDMHdMakEzTlRrek5UZ2dNalUyTGpRMU5DQXdMakl5TnpneE0wTXlOalV1TURjZ01UTXVOVFEzT1NBME1qSXVNVGN5SURJMU55NDJNemtnTkRJeUxqRTNNaUF6TkRZdU5URTFXazB5TWpndU5DQTBOVGd1T1RNeFF6RTBOQzR4TWlBME5EQXVORGtnTVRVNExqVTBNaUF6TkRjdU1UTWdNVFU0TGpVME1pQXpORGN1TVRORE1UVTRMalUwTWlBek5EY3VNVE1nTVRneExqVTFOaUEwTURNdU5EZzRJREl6Tnk0ME1EVWdOREl4TGpjME5FTXlPVE11TWpVeklEUXpPUzQ1T1RrZ016WXdMamMwTlNBME1UTXVNakkxSURNMk1DNDNORFVnTkRFekxqSXlOVU16TmpBdU56UTFJRFF4TXk0eU1qVWdNekV5TGpZNElEUTNOeTR6TnpFZ01qSTRMalFnTkRVNExqa3pNVm9pSUdacGJHdzlJbmRvYVhSbElpOCtDand2YzNablBnbz1cIiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZTNlODIxYjMxMzlhM2U3NTc2ZmE3MDYxZTBhNTI4OC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWIzMDA2NjU4ODI4ZTg3ZDUyYjQxMzFmM2MyNDAwYzguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBlY2VlMTAzZmFjM2M2OWIwYzBjYTc0OWUwMDBhMjgyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YmY4MmYzY2M3MGMzMGFjYmI2YTY1MWIyMmRmMzYyNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGIxMTNlMDliNzU5NjQ1MmJiMTI2NzQzMjhjNjYzMzEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc4MWU0ODBlZmUxNzNkNWQ5OGRmMDU5NmZkMGIzYmJjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMzIxMGJiNmIyMzJkNmZkYzI4Mzc4NDhmMDM3NjY3YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTM0NmY0ZWI1YjA4YWQ0YjljMzk2MjY1MjVjZWFjM2IuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE5ZTU3M2Y5MTUzMDcxN2Q3ZGE1MDg2ZTJlOTdmNmJkLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMWUxNzY3OTlkZmI3ZjM0YWE5MGYzNDZjOTJmZTRmNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTk5YTI1ZWU3NjU1MTZjMWNiYzNmM2EyY2FmMGRiM2EuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0MTlmMGI5N2JhZDU3N2RmZDMwNjQ4NWNmZTk0ZDU3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyZTEwYjJhMjQ3ZTk0NTA0ZDEyYzNlZjA2N2FlZTRmMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWVjODMzYWIzNjZhODQwNTU1ZjJkZDQwZTQyZTM1YjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUxYWUzZWEyNDY1YzFkZDBmYmY4YWRlNWFlZmI3NWI1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjODBmZDMyZTM0NTAwNTk2NGY3NDI5Njc3ODIyYTZhZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWIzNTJiNjA1YWIyYjZhYjE2MWNjZGMxODcyOWNjZTYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIxYjU3MWM1YjY0ZGEzNzE1ZWQ5NWEyOWQ1NmEzMGFjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMDAwOWQzZjQyODYzZGIyYjZlYTJmNzI2N2ZhNWU5My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzJiZTQxNmE3NTllMDRmOGY3NjQ2MGM3NDc0MmRiYzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwOWMyZjFmNmI0N2RmNjcxMTY0NzFmN2NkNTcxZTA4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1N2NjOWY3M2U5ZWU5ZTNhYzU1ODBlZGMyNTdkYWI3ZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2EzNWQ2MTY1MjAwOTNiZmI3YzBjYzQ4YjUxOTBhNDEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3NmUzOTZiZDRiZmJlMjJkODg4Y2I5YzBmZTEwYWVjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4Y2RjZDJmZmZkNTMyNjM1N2FjMmIwMTNkNTg4OTkzOS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc2OTI1MDVkMTIyZGJjYWU0OTBiZTI0OTJhNjBiMmUucG5nXCI7IiwiaW1wb3J0IHZpZXcgZnJvbSAnLi4vdmlld3MvNDA0LzQwNC5odG1sJ1xyXG5pbXBvcnQgJy4uL3ZpZXdzLzQwNC9zdHlsZXMuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHZpZXc7XHJcblxyXG4gICAgcmV0dXJuIGRpdkVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgdmlldyBmcm9tIFwiLi4vdmlld3MvcG9rZWFwaS9hcGkuaHRtbFwiO1xyXG5pbXBvcnQgXCIuLi92aWV3cy9wb2tlYXBpL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4vLyBCYWNrZ3JvdW5kcyBjYXJkXHJcbmltcG9ydCBiYWNrZ3JvdW5kQlVHIGZyb20gXCIuLi9hc3NldHMvaW1nL2J1Zy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmREQVJLIGZyb20gXCIuLi9hc3NldHMvaW1nL2RhcmsuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kRFJBR09OIGZyb20gXCIuLi9hc3NldHMvaW1nL2RyYWdvbi5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRFTEVDVFJJQyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9lbGVjdHJpYy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGQUlSWSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9mYWlyeS5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGSUdIVElORyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9maWdodGluZy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRGSVJFIGZyb20gXCIuLi9hc3NldHMvaW1nL2ZpcmUuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kRkxZSU5HIGZyb20gXCIuLi9hc3NldHMvaW1nL2ZseWluZy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHSE9TVCBmcm9tIFwiLi4vYXNzZXRzL2ltZy9naG9zdC5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHUkFTUyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9ncmFzcy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRHUk9VTkQgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvZ3JvdW5kLmpwZ1wiO1xyXG5pbXBvcnQgYmFja2dyb3VuZElDRSBmcm9tIFwiLi4vYXNzZXRzL2ltZy9pY2UuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kTk9STUFMIGZyb20gXCIuLi9hc3NldHMvaW1nL25vcm1hbC5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRQT0lTT04gZnJvbSBcIi4uL2Fzc2V0cy9pbWcvcG9pc29uLmpwZ1wiO1xyXG5pbXBvcnQgYmFja2dyb3VuZFBTWUNISUMgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvcHN5Y2hpYy5qcGdcIjtcclxuaW1wb3J0IGJhY2tncm91bmRST0NLIGZyb20gXCIuLi9hc3NldHMvaW1nL3JvY2suanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kU1RFRUwgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvc3RlZWwuanBnXCI7XHJcbmltcG9ydCBiYWNrZ3JvdW5kV0FURVIgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXIuanBnXCI7XHJcbmltcG9ydCBERUZBVUxUIGZyb20gXCIuLi9hc3NldHMvaW1nL3Vua25vd24uanBnXCI7XHJcblxyXG4vLyBUeXBlIGljb25zXHJcbmltcG9ydCBpY29uQlVHIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvYnVnLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkRBUksgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9kYXJrLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkRSQUdPTiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2RyYWdvbi5zdmdcIjtcclxuaW1wb3J0IGljb25FTEVDVFJJQyBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2VsZWN0cmljLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkZBSVJZIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmFpcnkuc3ZnXCI7XHJcbmltcG9ydCBpY29uRklHSFRJTkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9maWdodGluZy5zdmdcIjtcclxuaW1wb3J0IGljb25GSVJFIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvZmlyZS5zdmdcIjtcclxuaW1wb3J0IGljb25GTFlJTkcgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9mbHlpbmcuc3ZnXCI7XHJcbmltcG9ydCBpY29uR0hPU1QgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9naG9zdC5zdmdcIjtcclxuaW1wb3J0IGljb25HUkFTUyBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2dyYXNzLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkdST1VORCBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2dyb3VuZC5zdmdcIjtcclxuaW1wb3J0IGljb25JQ0UgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9pY2Uuc3ZnXCI7XHJcbmltcG9ydCBpY29uTk9STUFMIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvbm9ybWFsLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblBPSVNPTiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3BvaXNvbi5zdmdcIjtcclxuaW1wb3J0IGljb25QU1lDSElDIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcHN5Y2hpYy5zdmdcIjtcclxuaW1wb3J0IGljb25ST0NLIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcm9jay5zdmdcIjtcclxuaW1wb3J0IGljb25TVEVFTCBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3N0ZWVsLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbldBVEVSIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvd2F0ZXIuc3ZnXCI7XHJcblxyXG5jb25zdCBnZXRQb2tlcyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTsgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIHZpZXdcclxuICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gdmlldztcclxuICAgIFxyXG4gICAgLy8gQXNzaWduIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50c1xyXG4gICAgbGV0IHN0YXJ0ID0gMVxyXG4gICAgbGV0IGVuZCA9IDE1MFxyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgdGhlIGFycmF5IHdoZXJlIHBva2Vtb25zIHdpbGwgYmUgc3RvcmFnZWRcclxuICAgIGNvbnN0IHBva2VBcnIgPSBbXVxyXG4gICAgXHJcbiAgICAvLyBmb3IgbG9vcCB0byBnZXQgZWFjaCBwb2tlbW9uIHdpdGggYW4gaWRcclxuICAgIGZvcihsZXQgaWQgPSBzdGFydDsgaWQgPD0gZW5kOyBpZCsrKSB7XHJcbiAgICAgICAgY29uc3QgcG9rZXMgPSBhd2FpdCBnZXRQb2tlcyhpZCk7XHJcbiAgICAgICAgcG9rZUFyci5wdXNoKHBva2VzKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gYXNzaWduIHRoZSBwb2tlTGlzdCBjb25zdCB0byAjcG9rZUxpc3QgZWxlbWVudFxyXG4gICAgY29uc3QgcG9rZUxpc3QgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlTGlzdCcpXHJcbiAgICBcclxuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBhcnJheSBoYXMgYmVlbiBjb3JyZWN0ZWQgY3JlYXRlZFxyXG4gICAgY29uc29sZS5sb2cocG9rZUFycilcclxuICAgIFxyXG4gICAgLy8gQXJyYXkgZm9yIHRoZSB0eXBlc1xyXG4gICAgY29uc3QgdHlwZXNMaXN0ID0gW11cclxuXHJcbiAgICAvLyBmb3IgbG9vcCB0byBnZXQgZWFjaCBwb2tlbW9uIGluZm9ybWF0aW9uIGFuZCBjcmVhdGUgYW4gaHRtbCBlbGVtZW50IHdpdGggdGhhdCBpbmZvXHJcbiAgICBwb2tlQXJyLmZvckVhY2gocG9rZSA9PiB7XHJcbiAgICAgICAgdHlwZXNMaXN0LnB1c2gocG9rZS50eXBlc1swXS50eXBlLm5hbWUpXHJcblxyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gJydcclxuICAgICAgICBsZXQgaWNvbiA9ICcnXHJcblxyXG4gICAgICAgIHN3aXRjaChwb2tlLnR5cGVzWzBdLnR5cGUubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZ3Jhc3NcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR1JBU1M7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkdSQVNTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaXJlXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEZJUkU7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkZJUkU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhdGVyXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFdBVEVSO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25XQVRFUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnVnXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEJVRztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uQlVHO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhcmtcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kREFSSztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uREFSSztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHJhZ29uXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZERSQUdPTjtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uRFJBR09OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmYWlyeVwiOlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmRGQUlSWTtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uRkFJUlk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZpZ2h0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEZJR0hUSU5HO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25GSUdIVElORztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2hvc3RcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR0hPU1Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbkdIT1NUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJncm91bmRcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kR1JPVU5EO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25HUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImljZVwiOlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IGJhY2tncm91bmRJQ0U7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvbklDRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicG9pc29uXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFBPSVNPTjtcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uUE9JU09OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwc3ljaGljXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZFBTWUNISUM7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvblBTWUNISUM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJvY2tcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kUk9DSztcclxuICAgICAgICAgICAgICAgIGljb24gPSBpY29uUk9DSztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RlZWxcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kU1RFRUw7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gaWNvblNURUVMO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmbHlpbmdcIjpcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBiYWNrZ3JvdW5kRkxZSU5HO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25GTFlJTkc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljXCI6XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYmFja2dyb3VuZEVMRUNUUklDO1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGljb25FTEVDVFJJQztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCA9IERFRkFVTFQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9rZUxpc3QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtNCBtYXJnaW4tY29sc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2dyb3VuZH0pOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pZFwiPiR7cG9rZS5pZH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1nXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwb2tlLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdH1cIiB3aWR0aD1cIjE1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtwb2tlLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwb2tlLm5hbWUuc2xpY2UoMSkgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFpbiB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpY29ufVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlaWdodDogJHtwb2tlLndlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBCYXNlIGV4cGVyaWVuY2U6ICR7cG9rZS5iYXNlX2V4cGVyaWVuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2codHlwZXNMaXN0KVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gZGl2RWxlbWVudDtcclxuXHJcblxyXG59O1xyXG4iLCJpbXBvcnQgdmlld3MgZnJvbSBcIi4uL3ZpZXdzL2hvbWUvaG9tZS5odG1sXCI7XHJcbmltcG9ydCBcIi4uL3ZpZXdzL2hvbWUvc3R5bGVzLnNjc3NcIjtcclxuXHJcbi8vIEltYWdlcyBpbXBvcnRzXHJcbmltcG9ydCBPQUsgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvb2FrLnBuZ1wiO1xyXG5pbXBvcnQgTE9HTyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9wb2tlYXBpLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICAgIC8vIEltYWdlcyBhc3NpZ25tZW50c1xyXG4gICAgY29uc3Qgb2FraW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBvYWtpbWcuc3JjID0gT0FLO1xyXG5cclxuICAgIGNvbnN0IGxvZ29pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxvZ29pbWcuc3JjID0gTE9HTztcclxuICAgIFxyXG4gICAgLy8gVmlldyBjcmVhdGlvblxyXG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB2aWV3cztcclxuICAgIC8qKioqKioqKioqKioqICovXHJcblxyXG4gICAgLy8gSW1hZ2VzIGNyZWF0aW9uXHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ29ESVYgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltYWdlJyk7XHJcbiAgICBsb2dvRElWLmFwcGVuZENoaWxkKGxvZ29pbWcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvYWtESVYgPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vYWstaW1hZ2UnKTtcclxuICAgIG9ha0RJVi5hcHBlbmRDaGlsZChvYWtpbWcpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGRpYWxvZyA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBva2UtZGlhbG9nLXRleHQnKTtcclxuICAgIGNvbnN0IHZlcnNpb24gPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVyc2lvblwiKVxyXG4gICAgY29uc3QgZ29idG4gPSBkaXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ28tYnRuXCIpXHJcblxyXG4gICAgZ29idG4uc3R5bGUub3BhY2l0eSA9IDBcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiV2VsY29tZSB0byB0aGUgd29ybGQgb2YgUE9Lw6lNT04hIEknbSBPYWssIHRoZSBQT0vDqU1PTiBwcm9mZXNzb3IuIEVudGVyIHdoZW4geW91IGFyZSByZWFkeSFcIlxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBjb25zdCBzcGVlZCA9IDQwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0eXBlKCkge1xyXG4gICAgICAgICAgICBpZiAoaSA8IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuaW5uZXJIVE1MICs9IHRleHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlLCBzcGVlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpID09PSB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZ29idG4uc3R5bGUub3BhY2l0eSA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0eXBlKClcclxuICAgIFxyXG4gICAgY29uc3QgbWFqb3JWZXJzaW9uID0gMVxyXG4gICAgY29uc3QgbWlub3JWZXJzaW9uID0gMFxyXG4gICAgY29uc3QgcGF0Y2ggPSAwXHJcbiAgICAgICAgXHJcbiAgICB2ZXJzaW9uLmluc2VydEFkamFjZW50VGV4dCgnYWZ0ZXJiZWdpbicsIGB2LiAke21ham9yVmVyc2lvbn0uJHttaW5vclZlcnNpb259LiR7cGF0Y2h9YClcclxuXHJcbiAgICByZXR1cm4gZGl2RWxlbWVudDtcclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuY29udHJvbGxlcidcclxuaW1wb3J0IEFQSSBmcm9tICcuL2FwaS5jb250cm9sbGVyJ1xyXG5pbXBvcnQgbm90Zm91bmQgZnJvbSAnLi80MDQuY29udHJvbGxlcidcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIuY29udHJvbGxlcidcclxuaW1wb3J0IE11c2ljUGxheWVyIGZyb20gJy4vbXVzaWNQbGF5ZXIuY29udHJvbGxlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuL2xvYWRlci5jb250cm9sbGVyJ1xyXG5cclxuY29uc3QgcGFnZXMgPSB7XHJcbiAgICBob21lOiBIb21lLFxyXG4gICAgYXBpOiBBUEksXHJcbiAgICBub3Rmb3VuZDogbm90Zm91bmRcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIG5hdmJhcjogTmF2YmFyLFxyXG4gICAgbXVzaWNwbGF5ZXI6IE11c2ljUGxheWVyLFxyXG4gICAgbG9hZGVyOiBMb2FkZXJcclxufVxyXG5cclxuZXhwb3J0IHsgcGFnZXMsIGNvbXBvbmVudHMgfTsiLCJpbXBvcnQgbG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuaHRtbFwiXHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL3N0eWxlcy5zY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGVyRGl2LmlubmVySFRNTCA9IGxvYWRlcjtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVyRGl2O1xyXG59IiwiaW1wb3J0IG11c2ljUGxheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL211c2ljUGxheWVyL211c2ljUGxheWVyLmh0bWxcIlxyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvbXVzaWNQbGF5ZXIvc3R5bGVzLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSBtdXNpY1BsYXllcjtcclxuXHJcbiAgICBjb25zdCBwbGF5QnRuID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXlCdG5cIilcclxuICAgIGNvbnN0IHBhdXNlQnRuID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhdXNlQnRuXCIpXHJcbiAgICBjb25zdCBtdXNpYyA9IGRpdkVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdXNpY1wiKVxyXG5cclxuXHJcbiAgICAvLyBlbnRlcmluZyB0aGUgYXBwLCB0aGUgcGxheSBidXR0b24gd2lsbCBiZSBzaG93biBidXQgbm90IHRoZSBwYXVzZSBidXR0b25cclxuICAgIHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG5cclxuICAgIGlmKHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgcGF1c2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xpY2sgb3B0aW9ucyB3aGVuIHByZXNzIHRoZSBwbGF5IGJ1dHRvblxyXG4gICAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwYXVzZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgcGxheUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICBtdXNpYy52b2x1bWUgPSAwLjU7XHJcbiAgICAgICAgbXVzaWMucGxheSgpXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgb3B0aW9ucyB3aGVuIHByZXNzIHRoZSBwYXVzZSBidXR0b25cclxuICAgIHBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBhdXNlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgIGlmKG11c2ljLnBsYXkoKSl7XHJcbiAgICAgICAgICAgIG11c2ljLnBhdXNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBkaXZFbGVtZW50O1xyXG59IiwiaW1wb3J0IG5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWxcIlxyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy5zY3NzJ1xyXG5cclxuLy8gSW1hZ2VzIGltcG9ydHNcclxuaW1wb3J0IEJSQU5EIGZyb20gXCIuLi9hc3NldHMvaW1nL2pzLnBuZ1wiO1xyXG5pbXBvcnQgV0VCUEFDS0xPR08gZnJvbSBcIi4uL2Fzc2V0cy9pbWcvd2VicGFjay5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHJcbiAgICAvLyBJbWFnZXMgY3JlYXRpb25cclxuICAgIGNvbnN0IGJyYW5kbG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYnJhbmRsb2dvLnNyYyA9IEJSQU5EO1xyXG5cclxuICAgIGNvbnN0IHdlYnBhY2tsb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICB3ZWJwYWNrbG9nby5zcmMgPSBXRUJQQUNLTE9HT1xyXG4gICAgXHJcbiAgICAvLyBWaWV3IGNyZWF0aW9uXHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gbmF2YmFyXHJcblxyXG4gICAgLy8gSW1hZ2UgZGl2IGFzc2lnbm1lbnRcclxuICAgIGNvbnN0IGJyYW5kRGl2ID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1icmFuZFwiKTtcclxuICAgIGNvbnN0IHdlYnBhY2tMb2dvRGl2ID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYnBhY2stbG9nb1wiKTtcclxuXHJcbiAgICAvLyBJbWFnZXMgZ2VuZXJhdGlvblxyXG4gICAgYnJhbmREaXYuYXBwZW5kQ2hpbGQoYnJhbmRsb2dvKTtcclxuICAgIHdlYnBhY2tMb2dvRGl2LmFwcGVuZENoaWxkKHdlYnBhY2tsb2dvKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiBkaXZFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBsb2FkZXIgZnJvbSBcInNhc3MtbG9hZGVyXCI7XHJcbmltcG9ydCB7IHBhZ2VzLCBjb21wb25lbnRzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2luZGV4LmpzXCJcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XHJcbmNvbnN0IG5hdmJhckNvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyLWNvbXBvbmVudFwiKVxyXG5jb25zdCBtdXNpY1BsYXllckNvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXVzaWNQbGF5ZXItY29tcG9uZW50XCIpXHJcbmNvbnN0IGxvYWRlckNvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGVyRElWXCIpXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vIG5hdmJhckNvbXBvbmVudC5hcHBlbmRDaGlsZChjb21wb25lbnRzLm5hdmJhcigpKVxyXG4vLyBtdXNpY1BsYXllckNvbXBvbmVudC5hcHBlbmRDaGlsZChjb21wb25lbnRzLm11c2ljcGxheWVyKCkpXHJcblxyXG5mdW5jdGlvbiBzaG93Q29tcG9uZW50cygpIHtcclxuICAgIG5hdmJhckNvbXBvbmVudC5hcHBlbmRDaGlsZChjb21wb25lbnRzLm5hdmJhcigpKVxyXG4gICAgbXVzaWNQbGF5ZXJDb21wb25lbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50cy5tdXNpY3BsYXllcigpKVxyXG4gICAgbG9hZGVyQ29tcG9uZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudHMubG9hZGVyKCkpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlQ29tcG9uZW50cygpIHtcclxuICAgIG5hdmJhckNvbXBvbmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIG11c2ljUGxheWVyQ29tcG9uZW50LmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xyXG4gICAgbG9hZGVyQ29tcG9uZW50LmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5cclxuY29uc3Qgcm91dGVyID0gYXN5bmMgKHJvdXRlKSA9PiB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIFxyXG4gICAgLy8gUGFnZXMgLyB2aWV3c1xyXG4gICAgc3dpdGNoKHJvdXRlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICBoaWRlQ29tcG9uZW50cygpXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZXMuaG9tZSgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgXCIjL1wiOlxyXG4gICAgICAgIGhpZGVDb21wb25lbnRzKClcclxuICAgICAgICByZXR1cm4gY29udGVudC5hcHBlbmRDaGlsZChwYWdlcy5ob21lKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBcIiMvYXBwXCI6XHJcbiAgICAgICAgc2hvd0NvbXBvbmVudHMoKVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICBwYWdlOiBjb250ZW50LmFwcGVuZENoaWxkKGF3YWl0IHBhZ2VzLmFwaSgpKSxcclxuICAgICAgICAgICAgbG9hZGVyOiBoaWRlTG9hZGVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaGlkZUNvbXBvbmVudHMoKVxyXG4gICAgICAgIHJldHVybiBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VzLm5vdGZvdW5kKCkpXHJcbiAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvdXRlciB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNhc3MtbG9hZGVyXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IHJlcXVpcmUoXCJ1cmxcIikucGF0aFRvRmlsZVVSTChfX2ZpbGVuYW1lKTtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIiwgUHJvbWlzZSBtZWFucyBsb2FkaW5nXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgaW5zdGFsbCBmdW5jdGlvbiBuZWVkZWRcblxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi4vcm91dGVyL2luZGV4LnJvdXRlcydcclxuLy8gaW1wb3J0IHtwYWdlcywgY29tcG9uZW50c30gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2luZGV4LmpzXCI7XHJcblxyXG5yb3V0ZXIod2luZG93LmxvY2F0aW9uLmhhc2gpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcclxuICAgIHJvdXRlcih3aW5kb3cubG9jYXRpb24uaGFzaClcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==