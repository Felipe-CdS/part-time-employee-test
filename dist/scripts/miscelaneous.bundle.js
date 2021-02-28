/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/miscelaneous.js":
/*!*********************************!*\
  !*** ./scripts/miscelaneous.js ***!
  \*********************************/
/***/ (() => {

eval("/*Validates the phone entry via regex. Shows a warning if the phone is wrong*/\nfunction validateTelephone() {\n  //(21)00000-0000 regex || (21)000000000 regex || 21123456789 regex\n  var regex = /^\\(\\d{2}\\)\\d{5}\\-\\d{4}$|^\\(\\d{2}\\)\\d{5}\\d{4}$|^\\d{11}$/;\n  var TelephoneEntry = document.getElementById(\"phone\").value;\n\n  if (regex.test(TelephoneEntry)) {\n    document.getElementById(\"phone-input-warning\").style.display = \"none\";\n    return true;\n  } else {\n    document.getElementById(\"phone-input-warning\").style.display = \"initial\";\n    return false;\n  }\n}\n\ndocument.getElementById(\"phone\").addEventListener(\"change\", validateTelephone);\n\n//# sourceURL=webpack://part-time-employee-test/./scripts/miscelaneous.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/miscelaneous.js"]();
/******/ 	
/******/ })()
;