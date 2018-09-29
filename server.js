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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n  'use strict';\n\n  var assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\n  var vary = __webpack_require__(/*! vary */ \"vary\");\n\n  var defaults = {\n    origin: '*',\n    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n    preflightContinue: false,\n    optionsSuccessStatus: 204\n  };\n\n  function isString(s) {\n    return typeof s === 'string' || s instanceof String;\n  }\n\n  function isOriginAllowed(origin, allowedOrigin) {\n    if (Array.isArray(allowedOrigin)) {\n      for (var i = 0; i < allowedOrigin.length; ++i) {\n        if (isOriginAllowed(origin, allowedOrigin[i])) {\n          return true;\n        }\n      }\n\n      return false;\n    } else if (isString(allowedOrigin)) {\n      return origin === allowedOrigin;\n    } else if (allowedOrigin instanceof RegExp) {\n      return allowedOrigin.test(origin);\n    } else {\n      return !!allowedOrigin;\n    }\n  }\n\n  function configureOrigin(options, req) {\n    var requestOrigin = req.headers.origin,\n        headers = [],\n        isAllowed;\n\n    if (!options.origin || options.origin === '*') {\n      // allow any origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: '*'\n      }]);\n    } else if (isString(options.origin)) {\n      // fixed origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: options.origin\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    } else {\n      isAllowed = isOriginAllowed(requestOrigin, options.origin); // reflect origin\n\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: isAllowed ? requestOrigin : false\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureMethods(options) {\n    var methods = options.methods;\n\n    if (methods.join) {\n      methods = options.methods.join(','); // .methods is an array, so turn it into a string\n    }\n\n    return {\n      key: 'Access-Control-Allow-Methods',\n      value: methods\n    };\n  }\n\n  function configureCredentials(options) {\n    if (options.credentials === true) {\n      return {\n        key: 'Access-Control-Allow-Credentials',\n        value: 'true'\n      };\n    }\n\n    return null;\n  }\n\n  function configureAllowedHeaders(options, req) {\n    var allowedHeaders = options.allowedHeaders || options.headers;\n    var headers = [];\n\n    if (!allowedHeaders) {\n      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers\n\n      headers.push([{\n        key: 'Vary',\n        value: 'Access-Control-Request-Headers'\n      }]);\n    } else if (allowedHeaders.join) {\n      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string\n    }\n\n    if (allowedHeaders && allowedHeaders.length) {\n      headers.push([{\n        key: 'Access-Control-Allow-Headers',\n        value: allowedHeaders\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureExposedHeaders(options) {\n    var headers = options.exposedHeaders;\n\n    if (!headers) {\n      return null;\n    } else if (headers.join) {\n      headers = headers.join(','); // .headers is an array, so turn it into a string\n    }\n\n    if (headers && headers.length) {\n      return {\n        key: 'Access-Control-Expose-Headers',\n        value: headers\n      };\n    }\n\n    return null;\n  }\n\n  function configureMaxAge(options) {\n    var maxAge = options.maxAge && options.maxAge.toString();\n\n    if (maxAge && maxAge.length) {\n      return {\n        key: 'Access-Control-Max-Age',\n        value: maxAge\n      };\n    }\n\n    return null;\n  }\n\n  function applyHeaders(headers, res) {\n    for (var i = 0, n = headers.length; i < n; i++) {\n      var header = headers[i];\n\n      if (header) {\n        if (Array.isArray(header)) {\n          applyHeaders(header, res);\n        } else if (header.key === 'Vary' && header.value) {\n          vary(res, header.value);\n        } else if (header.value) {\n          res.setHeader(header.key, header.value);\n        }\n      }\n    }\n  }\n\n  function cors(options, req, res, next) {\n    var headers = [],\n        method = req.method && req.method.toUpperCase && req.method.toUpperCase();\n\n    if (method === 'OPTIONS') {\n      // preflight\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureMethods(options, req));\n      headers.push(configureAllowedHeaders(options, req));\n      headers.push(configureMaxAge(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n\n      if (options.preflightContinue) {\n        next();\n      } else {\n        // Safari (and potentially other browsers) need content-length 0,\n        //   for 204 or they just hang waiting for a body\n        res.statusCode = options.optionsSuccessStatus || defaults.optionsSuccessStatus;\n        res.setHeader('Content-Length', '0');\n        res.end();\n      }\n    } else {\n      // actual response\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n      next();\n    }\n  }\n\n  function middlewareWrapper(o) {\n    // if options are static (either via defaults or custom options passed in), wrap in a function\n    var optionsCallback = null;\n\n    if (typeof o === 'function') {\n      optionsCallback = o;\n    } else {\n      optionsCallback = function (req, cb) {\n        cb(null, o);\n      };\n    }\n\n    return function corsMiddleware(req, res, next) {\n      optionsCallback(req, function (err, options) {\n        if (err) {\n          next(err);\n        } else {\n          var corsOptions = assign({}, defaults, options);\n          var originCallback = null;\n\n          if (corsOptions.origin && typeof corsOptions.origin === 'function') {\n            originCallback = corsOptions.origin;\n          } else if (corsOptions.origin) {\n            originCallback = function (origin, cb) {\n              cb(null, corsOptions.origin);\n            };\n          }\n\n          if (originCallback) {\n            originCallback(req.headers.origin, function (err2, origin) {\n              if (err2 || !origin) {\n                next(err2);\n              } else {\n                corsOptions.origin = origin;\n                cors(corsOptions, req, res, next);\n              }\n            });\n          } else {\n            next();\n          }\n        }\n      });\n    };\n  } // can pass either an options hash, an options delegate, or nothing\n\n\n  module.exports = middlewareWrapper;\n})();\n\n//# sourceURL=webpack:///./node_modules/cors/lib/index.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n/* eslint-disable no-unused-vars */\n\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n  if (val === null || val === undefined) {\n    throw new TypeError('Object.assign cannot be called with null or undefined');\n  }\n\n  return Object(val);\n}\n\nfunction shouldUseNative() {\n  try {\n    if (!Object.assign) {\n      return false;\n    } // Detect buggy property enumeration order in older V8 versions.\n    // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\n\n    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers\n\n    test1[5] = 'de';\n\n    if (Object.getOwnPropertyNames(test1)[0] === '5') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test2 = {};\n\n    for (var i = 0; i < 10; i++) {\n      test2['_' + String.fromCharCode(i)] = i;\n    }\n\n    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n      return test2[n];\n    });\n\n    if (order2.join('') !== '0123456789') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test3 = {};\n    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n      test3[letter] = letter;\n    });\n\n    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {\n      return false;\n    }\n\n    return true;\n  } catch (err) {\n    // We don't expect any of the above to throw, but better to be safe.\n    return false;\n  }\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n  var from;\n  var to = toObject(target);\n  var symbols;\n\n  for (var s = 1; s < arguments.length; s++) {\n    from = Object(arguments[s]);\n\n    for (var key in from) {\n      if (hasOwnProperty.call(from, key)) {\n        to[key] = from[key];\n      }\n    }\n\n    if (getOwnPropertySymbols) {\n      symbols = getOwnPropertySymbols(from);\n\n      for (var i = 0; i < symbols.length; i++) {\n        if (propIsEnumerable.call(from, symbols[i])) {\n          to[symbols[i]] = from[symbols[i]];\n        }\n      }\n    }\n  }\n\n  return to;\n};\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n// import \"babel-polyfill\";\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"public\"));\napp.get(\"*\", function (req, res) {\n  res.send(\"\\n    <!DOCTYPE html>\\n    <html>\\n        <head>\\n        <title>SSR with RR</title>\\n        <script src=\\\"/bundle.js\\\" defer></script>\\n        <script>window.__INITIAL_DATA__ = ''</script>\\n        </head>\\n\\n        <body>\\n        <div id=\\\"app\\\">Hello world!!!</div>\\n        </body>\\n    </html>\\n    \");\n});\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "vary":
/*!***********************!*\
  !*** external "vary" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vary\");\n\n//# sourceURL=webpack:///external_%22vary%22?");

/***/ })

/******/ });