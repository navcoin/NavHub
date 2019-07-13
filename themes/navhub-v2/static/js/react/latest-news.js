/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"latest-news": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./react/components/latest-news.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react/components/latest-news.js":
/*!*****************************************!*\
  !*** ./react/components/latest-news.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_news_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/news-card */ \"./react/components/lib/news-card.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Parser = __webpack_require__(/*! rss-parser */ \"./node_modules/rss-parser/index.js\");\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\nvar LatestNews =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LatestNews, _React$Component);\n\n  function LatestNews(props) {\n    var _this;\n\n    _classCallCheck(this, LatestNews);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LatestNews).call(this, props));\n    _this.state = {\n      error: null,\n      isLoaded: false,\n      items: []\n    };\n    return _this;\n  }\n\n  _createClass(LatestNews, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var CORS_PROXY = \"https://cors-anywhere.herokuapp.com/\";\n      var parser = new Parser();\n      var latestNews = this;\n      parser.parseURL(CORS_PROXY + 'https://medium.com/feed/nav-coin', function (err, feed) {\n        if (err) {\n          console.error(err);\n          return latestNews.setState({\n            error: true\n          });\n        }\n\n        latestNews.setState({\n          isLoaded: true,\n          items: feed.items\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          error = _this$state.error,\n          isLoaded = _this$state.isLoaded,\n          items = _this$state.items;\n\n      if (error) {\n        return React.createElement(\"div\", {\n          className: \"status-container no-flex\"\n        }, React.createElement(\"h3\", null, \"Something went wrong\"), React.createElement(\"p\", null, \"We were unable to fetch the latest stories from medium, you can try viewing them directly on the NavCoin Collective publication on Medium.\"), React.createElement(\"a\", {\n          href: \"https://medium.com/nav-coin\"\n        }, \"NavCoin Collective \\xA0\\xA0\", React.createElement(\"span\", {\n          className: \"fa fa-chevron-right\"\n        })));\n      } else if (!isLoaded) {\n        return React.createElement(\"div\", {\n          className: \"status-container\"\n        }, React.createElement(\"h3\", null, \"Loading...\"));\n      } else {\n        return React.createElement(\"div\", {\n          className: \"card-container\"\n        }, items.map(function (value, index) {\n          if (index < 8) {\n            return React.createElement(_lib_news_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n              key: index.toString(),\n              item: value\n            });\n          }\n        }));\n      }\n    }\n  }]);\n\n  return LatestNews;\n}(React.Component);\n\nvar domContainer = document.querySelector('#react-latest-news');\nReactDOM.render(React.createElement(LatestNews), domContainer);\n\n//# sourceURL=webpack:///./react/components/latest-news.js?");

/***/ }),

/***/ "./react/components/lib/formatted-date.js":
/*!************************************************!*\
  !*** ./react/components/lib/formatted-date.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormattedDate; });\n\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction FormattedDate(props) {\n  var date = new Date(props.isoDate);\n  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  var formattedDate = \"\".concat(date.getDate(), \" \").concat(months[date.getMonth()], \" \").concat(date.getFullYear());\n  return React.createElement(\"span\", null, formattedDate);\n}\n\n//# sourceURL=webpack:///./react/components/lib/formatted-date.js?");

/***/ }),

/***/ "./react/components/lib/news-card.js":
/*!*******************************************!*\
  !*** ./react/components/lib/news-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NewsCard; });\n/* harmony import */ var _formatted_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatted-date */ \"./react/components/lib/formatted-date.js\");\n\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction NewsCard(props) {\n  var nbspTitle = props.item.title.replace(/ (?=[^ ]*$)/i, '&nbsp;');\n  var linkSplit = props.item.link.split('?');\n  var urlSegment = linkSplit[0].replace(\"https://medium.com/nav-coin/\", \"\");\n  return React.createElement(\"div\", {\n    className: \"homepage-news-card\"\n  }, React.createElement(\"a\", {\n    href: '/article/?id=' + urlSegment\n  }, React.createElement(\"div\", {\n    className: \"title-container\"\n  }, React.createElement(\"h1\", {\n    dangerouslySetInnerHTML: {\n      __html: nbspTitle\n    }\n  })), React.createElement(\"div\", {\n    className: \"lower-section\"\n  }, React.createElement(\"div\", {\n    className: \"project-author\"\n  }, React.createElement(\"span\", {\n    className: \"fa fa-user-circle-o\",\n    style: {\n      color: \"#7D5AB5\"\n    }\n  }), props.item.creator), React.createElement(\"div\", {\n    className: \"project-date\"\n  }, React.createElement(\"span\", {\n    className: \"fa fa-calendar\",\n    style: {\n      color: \"#7D5AB5\"\n    }\n  }), React.createElement(_formatted_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    isoDate: props.item.isoDate\n  })))));\n}\n\n//# sourceURL=webpack:///./react/components/lib/news-card.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ })

/******/ });