/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactInfo\": () => (/* binding */ contactInfo)\n/* harmony export */ });\n\nfunction contactInfo() {\n\n    const container = document.getElementById('content');\n    container.replaceChildren();\n    \n\n    container.classList.add('contact');\n\n    const contactInfoContainer = document.createElement('div');\n    contactInfoContainer.classList.add('contact-info-container');\n    container.appendChild(contactInfoContainer);\n\n    const rowContainer1 = document.createElement('div');\n    rowContainer1.classList.add('row1');\n    const rowContainer2 = document.createElement('div');\n    rowContainer2.classList.add('row2');\n    const rowContainer3 = document.createElement('div');\n    rowContainer3.classList.add('row3');\n\n\n\n    const contactInfoTitle = document.createElement('h2');\n    contactInfoTitle.classList.add('contact-info');\n    contactInfoTitle.textContent=\"Come taste our carfully prepared meals:\";\n    contactInfoContainer.appendChild(contactInfoTitle);\n\n\n\n    const contactInfoLocation = document.createElement('img');\n    contactInfoLocation.classList.add('contact-info-svg');\n    \n    contactInfoLocation.src=\"/home/luci/repos/restaurant-page/src/location.svg\";\n    rowContainer1.appendChild(contactInfoLocation);\n    contactInfoContainer.appendChild(rowContainer1);\n\n    const contactInfoLocationPara = document.createElement('p');\n    contactInfoLocationPara.classList.add('contact-info-para');\n    contactInfoLocationPara.textContent=\"Alea Trandafirilor nr 29, Iasi\";\n    rowContainer1.appendChild(contactInfoLocationPara);\n    contactInfoContainer.appendChild(rowContainer1);\n\n\n    const contactInfoEmail = document.createElement('img');\n    contactInfoEmail.classList.add('contact-info-svg');\n    contactInfoEmail.src=\"/home/luci/repos/restaurant-page/src/email.svg\";\n    rowContainer2.appendChild(contactInfoEmail)\n    contactInfoContainer.appendChild(rowContainer2);\n\n    const contactInfoEmailPara = document.createElement('p');\n    contactInfoEmailPara.classList.add('contact-info-para');\n    contactInfoEmailPara.textContent=\"contactlucis@corporate.com\";\n    rowContainer2.appendChild(contactInfoEmailPara)\n    contactInfoContainer.appendChild(rowContainer2);\n\n\n    const contactInfoPhone = document.createElement('img');\n    contactInfoPhone.classList.add('contact-info-svg');\n    contactInfoPhone.src=\"/home/luci/repos/restaurant-page/src/phone.svg\";\n    rowContainer3.appendChild(contactInfoPhone)\n    contactInfoContainer.appendChild(rowContainer3);\n\n    const contactInfoPhonePara = document.createElement('p');\n    contactInfoPhonePara.classList.add('contact-info-para');\n    contactInfoPhonePara.textContent=\"+40758438751\";\n    rowContainer3.appendChild(contactInfoPhonePara)\n    contactInfoContainer.appendChild(rowContainer3);\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeFactory\": () => (/* binding */ homeFactory)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nfunction homeFactory() {\n    \n\n    const container = document.getElementById('content');\n    container.replaceChildren();\n    \n    function initializePage() {\n        createBackground();\n        createLPText();\n        createButton();\n    }\n\n    \n\n    function createBackground() {  \n        container.style.backgroundImage=\"url(/home/luci/repos/restaurant-page/src/bck2.jpg)\";\n        container.style.backgroundSize=\"cover\";\n        \n    }\n    \n    function createLPText() {\n        const mainTitle = document.createElement('h1');\n        mainTitle.classList.add('mainTitle');\n        mainTitle.textContent=\"Welcome to Luci's restaurant\";\n        container.appendChild(mainTitle);\n\n        const paragraph1 = document.createElement('p');\n        paragraph1.classList.add('paragraph1');\n        paragraph1.textContent=\"Take a look through our menu...\";\n        container.appendChild(paragraph1);\n    }\n\n    function createButton() {\n        const mainButton = document.createElement('button');\n        mainButton.classList.add('button');\n        mainButton.textContent=\"MENU\";\n        container.appendChild(mainButton);\n        mainButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__.menuFactory);\n     }\n     \n    createLPText();\n    createButton();\n\n    return {\n        createBackground,\n        createLPText,\n        container,\n        createButton,\n        initializePage, \n    }\n };\n \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeFactory)().initializePage();\n\nvar myModule = (function(){\n\n    const home = document.querySelector('.home');\n    home.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.homeFactory);\n\n    const menu = document.querySelector('.menu');\n    menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.menuFactory);\n\n    const contact = document.querySelector('.contact');\n    contact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.contactInfo);\n    \n})();\n\n\n\n\n    \n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuFactory\": () => (/* binding */ menuFactory)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\nfunction menuFactory() {\n   \n    \n    const container = document.getElementById('content');\n    container.replaceChildren();\n    container.classList.add('menu');\n\n// Creating the menu title\n    const menuTitle = document.createElement('h1');\n    menuTitle.classList.add('h1');\n    menuTitle.textContent=\"Luci's Menu\"\n    container.appendChild(menuTitle);\n\n// Creating 2 containers to store the 5 different menu items\n    const sideContainer = document.createElement('div');\n    sideContainer.classList.add('side-container');\n    container.appendChild(sideContainer);\n\n    const leftSide = document.createElement('div');\n    leftSide.classList.add(\"left-side\");\n    sideContainer.appendChild(leftSide);\n    const rightSide = document.createElement('div');\n    rightSide.classList.add(\"right-side\");\n    sideContainer.appendChild(rightSide);\n\n// Creating 5 rows\n    const row1 = document.createElement('div');\n    row1.classList.add('row1');\n    leftSide.appendChild(row1);\n\n    const row2 = document.createElement('div');\n    row2.classList.add('row2');\n    leftSide.appendChild(row2);\n\n    const row3 = document.createElement('div');\n    row3.classList.add('row3');\n    leftSide.appendChild(row3);\n\n    const row4 = document.createElement('div');\n    row4.classList.add('row4');\n    rightSide.appendChild(row4);\n\n    const row5 = document.createElement('div');\n    row5.classList.add('row5');\n    rightSide.appendChild(row5);\n\n\n\n        const menuItem1 = document.createElement('img');\n        menuItem1.classList.add('mancare');\n        menuItem1.src=\"/home/luci/repos/restaurant-page/src/sha.jpg\";\n        row1.appendChild(menuItem1);\n        const paraMenuItem1 = document.createElement('p');\n        paraMenuItem1.classList.add('para-mancare');\n        paraMenuItem1.textContent=\"...\";\n        row1.appendChild(paraMenuItem1);\n\n        const menuItem2 = document.createElement('img');\n        menuItem2.classList.add('mancare');\n        menuItem2.src=\"/home/luci/repos/restaurant-page/src/radauteana.jpg\";\n        row2.appendChild(menuItem2);\n        const paraMenuItem2 = document.createElement('p');\n        paraMenuItem2.classList.add('para-mancare');\n        paraMenuItem2.textContent=\"...\";\n        row2.appendChild(paraMenuItem2);\n\n        const menuItem3 = document.createElement('img');\n        menuItem3.classList.add('mancare');\n        menuItem3.src=\"/home/luci/repos/restaurant-page/src/coaste.jpg\";\n        row3.appendChild(menuItem3);\n        const paraMenuItem3 = document.createElement('p');\n        paraMenuItem3.classList.add('para-mancare');\n        paraMenuItem3.textContent=\"...\";\n        row3.appendChild(paraMenuItem3);\n\n        const menuItem4 = document.createElement('img');\n        menuItem4.classList.add('mancare');\n        menuItem4.src=\"/home/luci/repos/restaurant-page/src/pizza.jpg\";\n        row4.appendChild(menuItem4);\n        const paraMenuItem4 = document.createElement('p');\n        paraMenuItem4.classList.add('para-mancare');\n        paraMenuItem4.textContent=\"...\";\n        row4.appendChild(paraMenuItem4);\n\n        const menuItem5 = document.createElement('img');\n        menuItem5.classList.add('mancare');\n        menuItem5.src=\"/home/luci/repos/restaurant-page/src/papanasi.jpg\";\n        row5.appendChild(menuItem5);\n        const paraMenuItem5 = document.createElement('p');\n        paraMenuItem5.classList.add('para-mancare');\n        paraMenuItem5.textContent=\"...\";\n        row5.appendChild(paraMenuItem5);\n\n\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;