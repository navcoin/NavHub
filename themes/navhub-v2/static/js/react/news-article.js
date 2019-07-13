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
/******/ 		"news-article": 0
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
/******/ 	deferredModules.push(["./react/components/news-article.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react/components/lib/article-meta.js":
/*!**********************************************!*\
  !*** ./react/components/lib/article-meta.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArticleMeta; });\n\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction ArticleMeta(props) {\n  var publicationUrl = 'https://medium.com/nav-coin';\n  var text = 'Check out this article about #NavCoin on #Medium: ' + props.title;\n  return React.createElement(\"div\", {\n    className: \"blog-meta-wrapper\",\n    style: {\n      marginTop: \"30px\"\n    }\n  }, React.createElement(\"div\", {\n    className: \"read-more\"\n  }, React.createElement(\"div\", {\n    className: \"themeix-button-group\"\n  }, React.createElement(\"a\", {\n    href: \"\".concat(publicationUrl, \"/\").concat(props.id),\n    className: \"btn btn-purple\",\n    target: \"e\"\n  }, \"Read on Medium\"))), React.createElement(\"div\", {\n    className: \"social-icon-sect\"\n  }, React.createElement(\"div\", {\n    className: \"share-icon\"\n  }, React.createElement(\"span\", null, \"share\"), React.createElement(\"a\", {\n    className: \"social-icon twitter\",\n    href: \"https://twitter.com/intent/tweet?text=\".concat(text, \"&url=\").concat(publicationUrl, \"/\").concat(props.id, \"&via=NavCoin&related=NavCoin\"),\n    rel: \"nofollow\",\n    target: \"_blank\",\n    title: \"Share on Twitter\"\n  }, React.createElement(\"i\", {\n    className: \"fa fa-twitter\"\n  })), React.createElement(\"a\", {\n    className: \"social-icon facebook\",\n    href: \"https://facebook.com/sharer.php?u=\".concat(publicationUrl, \"/\").concat(props.id),\n    rel: \"nofollow\",\n    target: \"_blank\",\n    title: \"Share on Facebook\"\n  }, React.createElement(\"i\", {\n    className: \"fa fa-facebook\"\n  })))));\n}\n\n//# sourceURL=webpack:///./react/components/lib/article-meta.js?");

/***/ }),

/***/ "./react/components/news-article.js":
/*!******************************************!*\
  !*** ./react/components/news-article.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_article_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/article-meta */ \"./react/components/lib/article-meta.js\");\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\n\n\nvar NewsArticle =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(NewsArticle, _React$Component);\n\n  function NewsArticle(props) {\n    var _this;\n\n    _classCallCheck(this, NewsArticle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewsArticle).call(this, props));\n    _this.state = {\n      error: null,\n      isLoaded: false,\n      items: []\n    };\n    return _this;\n  }\n\n  _createClass(NewsArticle, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var newsArticle = this;\n      var urlParams = new URLSearchParams(window.location.search);\n      var articleId = urlParams.get('id');\n      console.log(articleId);\n      var CORS_PROXY = \"https://cors-anywhere.herokuapp.com/\";\n      fetch(CORS_PROXY + 'https://medium.com/nav-coin/' + articleId).then(function (res) {\n        return res.text();\n      }).then(function (result) {\n        var body = _this2.getBody(result);\n\n        var elm = document.createElement('div');\n        elm.innerHTML = body;\n        var articles = elm.getElementsByTagName(\"article\");\n        var headers = elm.getElementsByTagName(\"h1\");\n        var highResImages = articles[0].innerHTML.replace(/\\/max\\/[0-9]+\\//g, '/max/700/');\n        var publication = highResImages.replace(/href=\"\\/nav-coin/g, 'href=\"https://medium.com/nav-coin');\n        var author = publication.replace(/href=\"\\/@/g, 'href=\"https://medium.com/@');\n        var footerIndex = author.search(/<p[\\w\\s\"=]+>— — —<\\/p>/);\n        var article = \"\";\n\n        if (footerIndex !== -1) {\n          article = author.substr(0, footerIndex) + '</div></section></div>';\n        } else {\n          article = author;\n        }\n\n        newsArticle.setState({\n          isLoaded: true,\n          article: article,\n          id: articleId,\n          title: headers[0].innerHTML\n        });\n      });\n    }\n  }, {\n    key: \"getBody\",\n    value: function getBody(content) {\n      var x = content.indexOf(\"<body\");\n      x = content.indexOf(\">\", x);\n      var y = content.lastIndexOf(\"</body>\");\n      return content.slice(x + 1, y);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          error = _this$state.error,\n          isLoaded = _this$state.isLoaded,\n          article = _this$state.article,\n          id = _this$state.id,\n          title = _this$state.title;\n\n      if (error) {\n        return React.createElement(\"div\", {\n          className: \"ninety-vw-container\"\n        }, React.createElement(\"div\", {\n          className: \"status-container no-flex\"\n        }, React.createElement(\"h3\", null, \"Something went wrong\"), React.createElement(\"p\", null, \"We were unable to fetch the latest stories from medium, you can try viewing them directly on the NavCoin Collective publication on Medium.\"), React.createElement(\"a\", {\n          href: \"https://medium.com/nav-coin\"\n        }, \"NavCoin Collective \\xA0\\xA0\", React.createElement(\"span\", {\n          className: \"fa fa-chevron-right\"\n        }))));\n      } else if (!isLoaded) {\n        return React.createElement(\"div\", {\n          className: \"ninety-vw-container\"\n        }, React.createElement(\"div\", {\n          className: \"status-container\"\n        }, React.createElement(\"h3\", null, \"Loading...\")));\n      } else {\n        return React.createElement(\"div\", null, React.createElement(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: article\n          }\n        }), React.createElement(_lib_article_meta__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          article: article,\n          id: id,\n          title: title\n        }));\n      }\n    }\n  }]);\n\n  return NewsArticle;\n}(React.Component);\n\nvar domContainer = document.querySelector('#react-news-article');\nReactDOM.render(React.createElement(NewsArticle), domContainer);\n\n//# sourceURL=webpack:///./react/components/news-article.js?");

/***/ })

/******/ });