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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/App */ \"./shared/App.js\");\n/* harmony import */ var _serverMarkup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serverMarkup */ \"./server/serverMarkup.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ \"./server/store.js\");\n/* harmony import */ var _shared_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/sagas */ \"./shared/sagas/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(\"public\"));\napp.get(\"*\", function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({});\n  var context = {};\n  var markupContent = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_6__[\"App\"], null))));\n  store.runSaga(_shared_sagas__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).done.then(function () {\n    res.send(Object(_serverMarkup__WEBPACK_IMPORTED_MODULE_7__[\"markup\"])(markupContent));\n  });\n  store.close();\n});\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/serverMarkup.js":
/*!********************************!*\
  !*** ./server/serverMarkup.js ***!
  \********************************/
/*! exports provided: markup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markup\", function() { return markup; });\nvar markup = function markup(_markup) {\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n        <head>\\n            <title>FDT - Pro Wrokflow</title>\\n            <script src=\\\"/bundle.js\\\" defer></script>\\n            <script>window.__INITIAL_DATA__ = {}</script>\\n        </head>\\n        <body>\\n            <div id=\\\"app\\\">\".concat(_markup, \"</div>\\n        </body>\\n    </html>\\n    \");\n};\n\n//# sourceURL=webpack:///./server/serverMarkup.js?");

/***/ }),

/***/ "./server/store.js":
/*!*************************!*\
  !*** ./server/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history/createMemoryHistory */ \"history/createMemoryHistory\");\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/reducers */ \"./shared/reducers/index.js\");\n\n\n\n\n\nvar middlewares = [];\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddlewares.push(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_3__[\"routerMiddleware\"])(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2___default()()));\nmiddlewares.push(sagaMiddleware);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialState) {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_shared_reducers__WEBPACK_IMPORTED_MODULE_4__[\"reducers\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares)));\n  store.runSaga = sagaMiddleware.run;\n\n  store.close = function () {\n    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"END\"]);\n  };\n\n  return store;\n});\n\n//# sourceURL=webpack:///./server/store.js?");

/***/ }),

/***/ "./shared/App.js":
/*!***********************!*\
  !*** ./shared/App.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./shared/routes.js\");\n/* harmony import */ var _components_NoMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NoMatch */ \"./shared/components/NoMatch.js\");\n/* harmony import */ var _containers_common_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/common/PrivateRoute */ \"./shared/containers/common/PrivateRoute.js\");\n/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/utils */ \"./shared/utils/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"fdt-navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/projects\"\n  }, \"Projects\")), !Object(_shared_utils__WEBPACK_IMPORTED_MODULE_5__[\"isAuthenticated\"])() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/login\"\n  }, \"Login\")), Object(_shared_utils__WEBPACK_IMPORTED_MODULE_5__[\"isAuthenticated\"])() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/logout\"\n  }, \"Logout\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"routes\"].map(function (item) {\n    var path = item.path,\n        exact = item.exact,\n        C = item.component,\n        rest = _objectWithoutProperties(item, [\"path\", \"exact\", \"component\"]);\n\n    return rest.private ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_common_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__[\"PrivateRoute\"], _extends({\n      key: path\n    }, item)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: path,\n      path: path,\n      private: rest.private,\n      exact: exact,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoMatch__WEBPACK_IMPORTED_MODULE_3__[\"NoMatch\"], props);\n    }\n  })));\n};\n\n//# sourceURL=webpack:///./shared/App.js?");

/***/ }),

/***/ "./shared/actions/LoginActions.js":
/*!****************************************!*\
  !*** ./shared/actions/LoginActions.js ***!
  \****************************************/
/*! exports provided: getLogin, getLoginSuccess, getLoginError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogin\", function() { return getLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginSuccess\", function() { return getLoginSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginError\", function() { return getLoginError; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./shared/constants/index.js\");\n\nvar getLogin = function getLogin(data) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN\"],\n    data: data\n  };\n};\nvar getLoginSuccess = function getLoginSuccess(data) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN_SUCCESS\"],\n    data: data\n  };\n};\nvar getLoginError = function getLoginError(error) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN_ERROR\"],\n    error: error\n  };\n};\n\n//# sourceURL=webpack:///./shared/actions/LoginActions.js?");

/***/ }),

/***/ "./shared/api/index.js":
/*!*****************************!*\
  !*** ./shared/api/index.js ***!
  \*****************************/
/*! exports provided: getLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginService\", function() { return getLoginService; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/apiEndpoints */ \"./shared/constants/apiEndpoints.js\");\n\n\n\nvar makeRequest = function makeRequest(urlExtension, data) {\n  var config = {\n    auth: {\n      username: data.username || 'g1kJfSk73hj',\n      password: data.password || 'uH83M9qK713bczD18'\n    },\n    params: {\n      apikey: 'VE4J-DTOL-GB9N-GPB9-PWFISMQ-DEV3572'\n    }\n  };\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlExtension, config);\n};\n\nvar getLoginService = function getLoginService(payload) {\n  return makeRequest(_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_1__[\"_REQ_URL_GET_LOGIN\"], payload);\n};\n\n//# sourceURL=webpack:///./shared/api/index.js?");

/***/ }),

/***/ "./shared/components/Login.js":
/*!************************************!*\
  !*** ./shared/components/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Login, _React$PureComponent);\n\n  function Login(props) {\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n    _this.state = {\n      username: 'g1kJfSk73hj',\n      password: 'uH83M9qK713bczD18'\n    };\n    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"handleInputChange\",\n    value: function handleInputChange(event) {\n      var target = event.target;\n      var value = target.value;\n      var name = target.name;\n      this.setState(_defineProperty({}, name, value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.getLogin(this.state);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(this.props);\n\n      if (this.props.userData.data && this.props.userData.data.status === 'Success') {\n        window.location.href = '/projects';\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        className: \"fdt-login-form\",\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Username:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        name: \"username\",\n        type: \"text\",\n        value: this.state.username,\n        onChange: this.handleInputChange\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Password:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        name: \"password\",\n        type: \"password\",\n        autoComplete: this.state.password.toString(),\n        value: this.state.password,\n        onChange: this.handleInputChange\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        value: \"Submit\"\n      }));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n\n\n//# sourceURL=webpack:///./shared/components/Login.js?");

/***/ }),

/***/ "./shared/components/NoMatch.js":
/*!**************************************!*\
  !*** ./shared/components/NoMatch.js ***!
  \**************************************/
/*! exports provided: NoMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoMatch\", function() { return NoMatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar NoMatch = function NoMatch() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Page not found !!!\");\n};\n\n//# sourceURL=webpack:///./shared/components/NoMatch.js?");

/***/ }),

/***/ "./shared/constants/apiEndpoints.js":
/*!******************************************!*\
  !*** ./shared/constants/apiEndpoints.js ***!
  \******************************************/
/*! exports provided: _REQ_URL_GET_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_REQ_URL_GET_LOGIN\", function() { return _REQ_URL_GET_LOGIN; });\nvar _REQ_URL_GET_LOGIN = 'https://api.proworkflow.net/login';\n\n//# sourceURL=webpack:///./shared/constants/apiEndpoints.js?");

/***/ }),

/***/ "./shared/constants/index.js":
/*!***********************************!*\
  !*** ./shared/constants/index.js ***!
  \***********************************/
/*! exports provided: GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LOGIN\", function() { return GET_LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LOGIN_SUCCESS\", function() { return GET_LOGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LOGIN_ERROR\", function() { return GET_LOGIN_ERROR; });\nvar GET_LOGIN = 'GET_LOGIN';\nvar GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';\nvar GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';\n\n//# sourceURL=webpack:///./shared/constants/index.js?");

/***/ }),

/***/ "./shared/containers/Home.js":
/*!***********************************!*\
  !*** ./shared/containers/Home.js ***!
  \***********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Home Page\");\n};\n\n//# sourceURL=webpack:///./shared/containers/Home.js?");

/***/ }),

/***/ "./shared/containers/Login.js":
/*!************************************!*\
  !*** ./shared/containers/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_LoginActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/LoginActions */ \"./shared/actions/LoginActions.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Login */ \"./shared/components/Login.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Login, _React$PureComponent);\n\n  function Login() {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"], this.props);\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    userData: state.userData\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getLogin: function getLogin(data) {\n      dispatch(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_3__[\"getLogin\"])(data));\n    }\n  };\n};\n\nLogin.propTypes = {\n  userData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,\n  getLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Login));\n\n//# sourceURL=webpack:///./shared/containers/Login.js?");

/***/ }),

/***/ "./shared/containers/Logout.js":
/*!*************************************!*\
  !*** ./shared/containers/Logout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Logout =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Logout, _React$PureComponent);\n\n  function Logout() {\n    _classCallCheck(this, Logout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Logout).apply(this, arguments));\n  }\n\n  _createClass(Logout, [{\n    key: \"render\",\n    value: function render() {\n      if (typeof window !== 'undefinded') {\n        sessionStorage.setItem('isAuthentic', false);\n        window.location.href = \"/\";\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Logout\");\n    }\n  }]);\n\n  return Logout;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n\n\n//# sourceURL=webpack:///./shared/containers/Logout.js?");

/***/ }),

/***/ "./shared/containers/ProjectDetails.js":
/*!*********************************************!*\
  !*** ./shared/containers/ProjectDetails.js ***!
  \*********************************************/
/*! exports provided: ProjectDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectDetails\", function() { return ProjectDetails; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ProjectDetails = function ProjectDetails() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"ProjectDetails Page\");\n};\n\n//# sourceURL=webpack:///./shared/containers/ProjectDetails.js?");

/***/ }),

/***/ "./shared/containers/Projects.js":
/*!***************************************!*\
  !*** ./shared/containers/Projects.js ***!
  \***************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Projects\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Projects = function Projects() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Projects Page\");\n};\n\n//# sourceURL=webpack:///./shared/containers/Projects.js?");

/***/ }),

/***/ "./shared/containers/common/PrivateRoute.js":
/*!**************************************************!*\
  !*** ./shared/containers/common/PrivateRoute.js ***!
  \**************************************************/
/*! exports provided: PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PrivateRoute\", function() { return PrivateRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./shared/utils/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, [\"component\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n    render: function render(props) {\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isAuthenticated\"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n        to: {\n          pathname: \"/login\",\n          state: {\n            from: props.location\n          }\n        }\n      });\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./shared/containers/common/PrivateRoute.js?");

/***/ }),

/***/ "./shared/reducers/LoginReducer.js":
/*!*****************************************!*\
  !*** ./shared/reducers/LoginReducer.js ***!
  \*****************************************/
/*! exports provided: getLoginReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginReducer\", function() { return getLoginReducer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./shared/constants/index.js\");\n\nvar getLoginReducer = function getLoginReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      data = _ref.data,\n      error = _ref.error;\n\n  switch (type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN\"]:\n      return data;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN_SUCCESS\"]:\n      return data;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN_ERROR\"]:\n      return error;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./shared/reducers/LoginReducer.js?");

/***/ }),

/***/ "./shared/reducers/index.js":
/*!**********************************!*\
  !*** ./shared/reducers/index.js ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducers\", function() { return reducers; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LoginReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginReducer */ \"./shared/reducers/LoginReducer.js\");\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_1__[\"routerReducer\"],\n  userData: _LoginReducer__WEBPACK_IMPORTED_MODULE_2__[\"getLoginReducer\"]\n});\n\n//# sourceURL=webpack:///./shared/reducers/index.js?");

/***/ }),

/***/ "./shared/routes.js":
/*!**************************!*\
  !*** ./shared/routes.js ***!
  \**************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/Home */ \"./shared/containers/Home.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Login */ \"./shared/containers/Login.js\");\n/* harmony import */ var _containers_Logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Logout */ \"./shared/containers/Logout.js\");\n/* harmony import */ var _containers_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Projects */ \"./shared/containers/Projects.js\");\n/* harmony import */ var _containers_ProjectDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/ProjectDetails */ \"./shared/containers/ProjectDetails.js\");\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _containers_Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"],\n  private: false\n}, {\n  path: '/login',\n  component: _containers_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  private: false\n}, {\n  path: '/projects',\n  component: _containers_Projects__WEBPACK_IMPORTED_MODULE_3__[\"Projects\"],\n  private: true\n}, {\n  path: '/projects/:id',\n  component: _containers_ProjectDetails__WEBPACK_IMPORTED_MODULE_4__[\"ProjectDetails\"],\n  private: true\n}, {\n  path: '/logout',\n  component: _containers_Logout__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  private: false\n}];\n\n//# sourceURL=webpack:///./shared/routes.js?");

/***/ }),

/***/ "./shared/sagas/LoginSaga.js":
/*!***********************************!*\
  !*** ./shared/sagas/LoginSaga.js ***!
  \***********************************/
/*! exports provided: getLogin, getLoginSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogin\", function() { return getLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginSaga\", function() { return getLoginSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./shared/constants/index.js\");\n/* harmony import */ var _actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/LoginActions */ \"./shared/actions/LoginActions.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./shared/api/index.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(getLogin),\n    _marked2 =\n/*#__PURE__*/\nregeneratorRuntime.mark(getLoginSaga);\n\n\n\n\n\nfunction getLogin(inputData) {\n  var data;\n  return regeneratorRuntime.wrap(function getLogin$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_api__WEBPACK_IMPORTED_MODULE_3__[\"getLoginService\"], inputData.data);\n\n        case 3:\n          data = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__[\"getLoginSuccess\"])(data));\n\n        case 6:\n          sessionStorage.setItem('isAuthentic', true);\n          _context.next = 14;\n          break;\n\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 13;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__[\"getLoginError\"])(_context.t0));\n\n        case 13:\n          sessionStorage.setItem('isAuthentic', false);\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[0, 9]]);\n}\nfunction getLoginSaga() {\n  return regeneratorRuntime.wrap(function getLoginSaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_LOGIN\"], getLogin);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./shared/sagas/LoginSaga.js?");

/***/ }),

/***/ "./shared/sagas/index.js":
/*!*******************************!*\
  !*** ./shared/sagas/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoginSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginSaga */ \"./shared/sagas/LoginSaga.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(rootSaga);\n\n\n\nfunction rootSaga() {\n  return regeneratorRuntime.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_LoginSaga__WEBPACK_IMPORTED_MODULE_1__[\"getLoginSaga\"])]);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this);\n}\n\n//# sourceURL=webpack:///./shared/sagas/index.js?");

/***/ }),

/***/ "./shared/utils/index.js":
/*!*******************************!*\
  !*** ./shared/utils/index.js ***!
  \*******************************/
/*! exports provided: isAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAuthenticated\", function() { return isAuthenticated; });\nvar isAuthenticated = function isAuthenticated() {\n  return typeof window !== 'undefined' && sessionStorage.getItem('isAuthentic') === 'true';\n};\n\n//# sourceURL=webpack:///./shared/utils/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history/createMemoryHistory":
/*!**********************************************!*\
  !*** external "history/createMemoryHistory" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history/createMemoryHistory\");\n\n//# sourceURL=webpack:///external_%22history/createMemoryHistory%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-redux\");\n\n//# sourceURL=webpack:///external_%22react-router-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });