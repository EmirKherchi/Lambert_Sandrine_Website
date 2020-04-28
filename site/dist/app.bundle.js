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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _smtp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smtp.js */ \"./src/js/smtp.js\");\n\nvar name = document.getElementById(\"nom\");\nvar firstname = document.getElementById(\"prenom\");\nvar phone = document.getElementById(\"phone\");\nvar email = document.getElementById(\"email\");\nvar message = document.getElementById(\"message\");\nvar child = document.getElementById(\"enfant\");\nvar adult = document.getElementById(\"adulte\");\n\nfunction sendEmail() {\n  Email.send({\n    SecureToken: \"56be052d-0061-4712-ab5d-449c30d9dade\",\n    To: 'contact@ekherchi.fr',\n    From: \"contact@ekherchi.fr\",\n    Subject: \"text\",\n    Body: \"test 2\"\n  }).then(function (message) {\n    return alert(\"Votre mail est envoyé, merci.\");\n  });\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/smtp.js":
/*!************************!*\
  !*** ./src/js/smtp.js ***!
  \************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Email\", function() { return Email; });\n/* SmtpJS.com - v3.0.0 */\nvar Email = {\n  send: function send(a) {\n    return new Promise(function (n, e) {\n      a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = \"Send\";\n      var t = JSON.stringify(a);\n      Email.ajaxPost(\"https://smtpjs.com/v3/smtpjs.aspx?\", t, function (e) {\n        n(e);\n      });\n    });\n  },\n  ajaxPost: function ajaxPost(e, n, t) {\n    var a = Email.createCORSRequest(\"POST\", e);\n    a.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\"), a.onload = function () {\n      var e = a.responseText;\n      null != t && t(e);\n    }, a.send(n);\n  },\n  ajax: function ajax(e, n) {\n    var t = Email.createCORSRequest(\"GET\", e);\n    t.onload = function () {\n      var e = t.responseText;\n      null != n && n(e);\n    }, t.send();\n  },\n  createCORSRequest: function createCORSRequest(e, n) {\n    var t = new XMLHttpRequest();\n    return \"withCredentials\" in t ? t.open(e, n, !0) : \"undefined\" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;\n  }\n};\n\n//# sourceURL=webpack:///./src/js/smtp.js?");

/***/ })

/******/ });