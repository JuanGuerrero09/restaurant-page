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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\r\n    const contactSection = document.createElement('div')\r\n    contactSection.classList.add('contact', 'container')\r\n\r\n    const contactTitle = document.createElement('h1')\r\n    contactTitle.classList.add('title')\r\n    contactTitle.innerText = 'Contáctenos'\r\n\r\n   const mapDirection = document.createElement('img')\r\n   mapDirection.src = './images/apprendistadirection.jpg'\r\n   mapDirection.classList.add('map-image')\r\n\r\n   const directionDetails = document.createElement('div')\r\n   directionDetails.classList.add('direction-details')\r\n\r\n   const contactDirection = document.createElement('p')\r\n   contactDirection.innerHTML = `<i class=\"fa-solid fa-location-dot\"></i> Dirección<br> \r\n   Cra. 30a #31-27, Bucaramanga, Santander`\r\n\r\n   const contactHours = document.createElement('p')\r\n   contactHours.innerHTML = '<i class=\"fa-solid fa-clock\"></i>Horario<br> 12:00 - 16:00 & 18:00 - 22:00'\r\n\r\n    directionDetails.append(contactDirection, contactHours)\r\n    \r\n\r\n    contactSection.append(contactTitle, mapDirection, directionDetails)\r\n    return contactSection\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome(){\r\n    const homeSection = document.createElement('div')\r\n    homeSection.classList.add('home', 'container')\r\n\r\n    const homeTitle = document.createElement('h1')\r\n    homeTitle.classList.add('title')\r\n    homeTitle.innerText = \"RESTAURANTE ITALIANO \\n(Pasta, Lasaña, Panini, Pizza)\"\r\n\r\n    const homeImage = document.createElement('img')\r\n    homeImage.src = './images/lasaña.jpg'\r\n    homeImage.alt = 'Lasaña con miamor'\r\n    homeImage.width = 200\r\n\r\n    const description = document.createElement('p')\r\n    description.innerText = \"Un rincón italiano lleno de nuestra esencia, acogedor, buena energia y deliciosa comida casera hecha por italiano¡Visítanos!\"\r\n\r\n    homeSection.append(homeTitle, homeImage, description)\r\n\r\n    return homeSection\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createMenuSection(title){\r\n    const menuSection = document.createElement('div')\r\n    menuSection.classList.add('menu-section')\r\n\r\n    const menuSectionTitle = document.createElement('h3')\r\n    menuSectionTitle.classList.add('menu-title')\r\n    menuSectionTitle.innerText = title\r\n\r\n    const menuSectionBody = document.createElement('div')\r\n    menuSectionBody.classList.add('menu-section-body')\r\n\r\n    menuSection.append(menuSectionTitle, menuSectionBody)\r\n\r\n    return menuSection\r\n}\r\n\r\n\r\n\r\nfunction createMenuElement(imageDir, elementName, elementPrice){\r\n    const menuElement = document.createElement('div')\r\n    menuElement.classList.add('menu-element')\r\n\r\n    const img = document.createElement('img')\r\n    img.src = imageDir\r\n    img.alt = imageDir.split('/')[2]\r\n    img.width = 100\r\n    img.height = 100\r\n\r\n    const menuElementName = document.createElement('p')\r\n    menuElementName.innerText = elementName\r\n\r\n    const menuElementPrice = document.createElement('p')\r\n    menuElementPrice.innerText = elementPrice\r\n    \r\n    menuElement.append(img, menuElementName, menuElementPrice)\r\n    \r\n    return menuElement\r\n}\r\n\r\n//Antipasto -> crostini caprese\r\n//Lasaña -> Italiana pollochampiñones\r\n//Pasta -> Boloñesa carbonara pesto\r\n//Panini -> clasico hawaiano serrano\r\n//Piatti speciali -> ravioli ensalada caprese\r\n//Dolce -> Tiramisu\r\n\r\nfunction createMenu(){\r\n    const menu = document.createElement('div')\r\n    menu.classList.add('menu', 'container')\r\n\r\n    const menuTitle = document.createElement('h1')\r\n    menuTitle.classList.add('title')\r\n    menuTitle.innerText = 'Menu'\r\n\r\n    const menuBody = document.createElement('div')\r\n    menuBody.classList.add('menu-body')\r\n\r\n    const antipasto = createMenuSection('Antipasto')\r\n    const crostini = createMenuElement('./images/crostini.jpg', 'Crostini', 6000)\r\n    const caprese = createMenuElement('./images/caprese.jpg', 'Caprese', 6000)\r\n    antipasto.lastChild.append(crostini, caprese)\r\n\r\n    const lasaña = createMenuSection('Lasaña')\r\n    const italiana = createMenuElement('./images/italiana.jpg', 'Italiana', 19000)\r\n    const polloChampiñones = createMenuElement('./images/pollochampiñones.jpg', 'Pollo Champiñones', 21000)\r\n    lasaña.lastChild.append(italiana, polloChampiñones)\r\n\r\n    const pasta = createMenuSection('Pasta')\r\n    const boloñesa = createMenuElement('./images/pastaboloñesa.jpg', 'Boloñesa', 16000)\r\n    const carbonara = createMenuElement('./images/pastacarbonara.jpg', 'Carbonara', 18000)\r\n    const pesto = createMenuElement('./images/pastapesto.jpg', 'Pesto', 18000)\r\n    pasta.lastChild.append(boloñesa, carbonara, pesto)\r\n\r\n    const panini = createMenuSection('Panini')\r\n    const clasico = createMenuElement('./images/paniniclasico.jpg', 'Clásico', 14000)\r\n    const hawaiano = createMenuElement('./images/paninihawaiano.jpg', 'Hawaiano', 14000)\r\n    panini.lastChild.append(clasico, hawaiano)\r\n\r\n    menuBody.append(antipasto, lasaña, pasta, panini)\r\n    \r\n\r\n\r\n    menu.append(menuTitle, menuBody)\r\n    return menu\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement('header')\r\n\r\n    const title = document.createElement('h1')\r\n    title.innerText = \"Apprendista\"\r\n\r\n    header.appendChild(title)\r\n    header.appendChild(createNavbar())\r\n\r\n\r\n    return header\r\n}\r\n\r\nfunction createNavbar(){\r\n    const navBar = document.createElement('nav')\r\n    navBar.classList.add('nav')\r\n\r\n    const createButton = (name) => {\r\n        const btnElement = document.createElement('div')\r\n        btnElement.innerText = name[0].toUpperCase() + name.substr(1)\r\n        btnElement.classList.add(`nav-btn`)\r\n        btnElement.classList.add(`nav-${name}`)\r\n\r\n        btnElement.addEventListener('click', activeSection)\r\n        return btnElement\r\n    }\r\n    const home = createButton('home')\r\n    const menu = createButton('menu')\r\n    const contact = createButton('contact')\r\n\r\n    home.classList.add('active')\r\n\r\n    navBar.append(home, menu, contact)\r\n\r\n    return navBar\r\n}\r\n\r\n\r\nfunction createMain(){\r\n    const main = document.createElement('main')\r\n    main.classList.add('main')\r\n    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())   \r\n    return main\r\n}\r\n\r\nfunction activeSection(e){\r\n    const main = document.querySelector('main')\r\n    const sectionBtns = document.querySelectorAll('.nav-btn')\r\n    sectionBtns.forEach(btn => btn.classList.remove('active'))\r\n    const btnSelected = e.target\r\n    btnSelected.classList.add('active')\r\n    console.log(sectionBtns[0].classList.contains('active'))\r\n    \r\n    main.innerHTML = ''\r\n\r\n    if (sectionBtns[0].classList.contains('active')){\r\n        main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n    }\r\n    else if (sectionBtns[1].classList.contains('active')){\r\n        //Menu function\r\n        main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n    }\r\n    else if (sectionBtns[2].classList.contains('active')){\r\n        main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\n    }\r\n    \r\n    //TODO Separar lógica de activar sección y activar clase\r\n    \r\n}\r\n\r\nfunction createFooter(){\r\n    const footer = document.createElement('footer')\r\n    footer.classList.add('footer')\r\n    footer.innerText = 'JDev'\r\n    return footer\r\n}\r\n\r\nfunction createWebsite(){\r\n    const content = document.querySelector('.content')\r\n    content.append(createHeader(), createMain(), createFooter())\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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