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

/***/ "./node_modules/react-router-redux/lib/actions.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/actions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * This action type will be dispatched by the history actions below.\n * If you're writing a middleware to watch for navigation events, be sure to\n * look for actions of this type.\n */\n\nvar CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';\n\nfunction updateLocation(method) {\n  return function () {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return {\n      type: CALL_HISTORY_METHOD,\n      payload: {\n        method: method,\n        args: args\n      }\n    };\n  };\n}\n/**\n * These actions correspond to the history API.\n * The associated routerMiddleware will capture these events before they get to\n * your reducer and reissue them as the matching function on your history.\n */\n\n\nvar push = exports.push = updateLocation('push');\nvar replace = exports.replace = updateLocation('replace');\nvar go = exports.go = updateLocation('go');\nvar goBack = exports.goBack = updateLocation('goBack');\nvar goForward = exports.goForward = updateLocation('goForward');\nvar routerActions = exports.routerActions = {\n  push: push,\n  replace: replace,\n  go: go,\n  goBack: goBack,\n  goForward: goForward\n};\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/actions.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-redux/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./node_modules/react-router-redux/lib/reducer.js\");\n\nObject.defineProperty(exports, 'LOCATION_CHANGE', {\n  enumerable: true,\n  get: function get() {\n    return _reducer.LOCATION_CHANGE;\n  }\n});\nObject.defineProperty(exports, 'routerReducer', {\n  enumerable: true,\n  get: function get() {\n    return _reducer.routerReducer;\n  }\n});\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./node_modules/react-router-redux/lib/actions.js\");\n\nObject.defineProperty(exports, 'CALL_HISTORY_METHOD', {\n  enumerable: true,\n  get: function get() {\n    return _actions.CALL_HISTORY_METHOD;\n  }\n});\nObject.defineProperty(exports, 'push', {\n  enumerable: true,\n  get: function get() {\n    return _actions.push;\n  }\n});\nObject.defineProperty(exports, 'replace', {\n  enumerable: true,\n  get: function get() {\n    return _actions.replace;\n  }\n});\nObject.defineProperty(exports, 'go', {\n  enumerable: true,\n  get: function get() {\n    return _actions.go;\n  }\n});\nObject.defineProperty(exports, 'goBack', {\n  enumerable: true,\n  get: function get() {\n    return _actions.goBack;\n  }\n});\nObject.defineProperty(exports, 'goForward', {\n  enumerable: true,\n  get: function get() {\n    return _actions.goForward;\n  }\n});\nObject.defineProperty(exports, 'routerActions', {\n  enumerable: true,\n  get: function get() {\n    return _actions.routerActions;\n  }\n});\n\nvar _sync = __webpack_require__(/*! ./sync */ \"./node_modules/react-router-redux/lib/sync.js\");\n\nvar _sync2 = _interopRequireDefault(_sync);\n\nvar _middleware = __webpack_require__(/*! ./middleware */ \"./node_modules/react-router-redux/lib/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    'default': obj\n  };\n}\n\nexports.syncHistoryWithStore = _sync2['default'];\nexports.routerMiddleware = _middleware2['default'];\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/middleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = routerMiddleware;\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./node_modules/react-router-redux/lib/actions.js\");\n\nfunction _toConsumableArray(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return Array.from(arr);\n  }\n}\n/**\n * This middleware captures CALL_HISTORY_METHOD actions to redirect to the\n * provided history object. This will prevent these actions from reaching your\n * reducer or any middleware that comes after this one.\n */\n\n\nfunction routerMiddleware(history) {\n  return function () {\n    return function (next) {\n      return function (action) {\n        if (action.type !== _actions.CALL_HISTORY_METHOD) {\n          return next(action);\n        }\n\n        var _action$payload = action.payload,\n            method = _action$payload.method,\n            args = _action$payload.args;\n        history[method].apply(history, _toConsumableArray(args));\n      };\n    };\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/middleware.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/reducer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/reducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nexports.routerReducer = routerReducer;\n/**\n * This action type will be dispatched when your history\n * receives a location change.\n */\n\nvar LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';\nvar initialState = {\n  locationBeforeTransitions: null\n};\n/**\n * This reducer will update the state with the most recent location history\n * has transitioned to. This may not be in sync with the router, particularly\n * if you have asynchronously-loaded routes, so reading from and relying on\n * this state is discouraged.\n */\n\nfunction routerReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  if (type === LOCATION_CHANGE) {\n    return _extends({}, state, {\n      locationBeforeTransitions: payload\n    });\n  }\n\n  return state;\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/reducer.js?");

/***/ }),

/***/ "./node_modules/react-router-redux/lib/sync.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-redux/lib/sync.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nexports['default'] = syncHistoryWithStore;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./node_modules/react-router-redux/lib/reducer.js\");\n\nvar defaultSelectLocationState = function defaultSelectLocationState(state) {\n  return state.routing;\n};\n/**\n * This function synchronizes your history state with the Redux store.\n * Location changes flow from history to the store. An enhanced history is\n * returned with a listen method that responds to store updates for location.\n *\n * When this history is provided to the router, this means the location data\n * will flow like this:\n * history.push -> store.dispatch -> enhancedHistory.listen -> router\n * This ensures that when the store state changes due to a replay or other\n * event, the router will be updated appropriately and can transition to the\n * correct router state.\n */\n\n\nfunction syncHistoryWithStore(history, store) {\n  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},\n      _ref$selectLocationSt = _ref.selectLocationState,\n      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,\n      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,\n      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla; // Ensure that the reducer is mounted on the store and functioning properly.\n\n\n  if (typeof selectLocationState(store.getState()) === 'undefined') {\n    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');\n  }\n\n  var initialLocation = void 0;\n  var isTimeTraveling = void 0;\n  var unsubscribeFromStore = void 0;\n  var unsubscribeFromHistory = void 0;\n  var currentLocation = void 0; // What does the store say about current location?\n\n  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {\n    var locationState = selectLocationState(store.getState());\n    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);\n  }; // Init initialLocation with potential location in store\n\n\n  initialLocation = getLocationInStore(); // If the store is replayed, update the URL in the browser to match.\n\n  if (adjustUrlOnReplay) {\n    var handleStoreChange = function handleStoreChange() {\n      var locationInStore = getLocationInStore(true);\n\n      if (currentLocation === locationInStore || initialLocation === locationInStore) {\n        return;\n      } // Update address bar to reflect store state\n\n\n      isTimeTraveling = true;\n      currentLocation = locationInStore;\n      history.transitionTo(_extends({}, locationInStore, {\n        action: 'PUSH'\n      }));\n      isTimeTraveling = false;\n    };\n\n    unsubscribeFromStore = store.subscribe(handleStoreChange);\n    handleStoreChange();\n  } // Whenever location changes, dispatch an action to get it in the store\n\n\n  var handleLocationChange = function handleLocationChange(location) {\n    // ... unless we just caused that location change\n    if (isTimeTraveling) {\n      return;\n    } // Remember where we are\n\n\n    currentLocation = location; // Are we being called for the first time?\n\n    if (!initialLocation) {\n      // Remember as a fallback in case state is reset\n      initialLocation = location; // Respect persisted location, if any\n\n      if (getLocationInStore()) {\n        return;\n      }\n    } // Tell the store to update by dispatching an action\n\n\n    store.dispatch({\n      type: _reducer.LOCATION_CHANGE,\n      payload: location\n    });\n  };\n\n  unsubscribeFromHistory = history.listen(handleLocationChange); // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves\n\n  if (history.getCurrentLocation) {\n    handleLocationChange(history.getCurrentLocation());\n  } // The enhanced history uses store as source of truth\n\n\n  return _extends({}, history, {\n    // The listeners are subscribed to the store instead of history\n    listen: function listen(listener) {\n      // Copy of last location.\n      var lastPublishedLocation = getLocationInStore(true); // Keep track of whether we unsubscribed, as Redux store\n      // only applies changes in subscriptions on next dispatch\n\n      var unsubscribed = false;\n      var unsubscribeFromStore = store.subscribe(function () {\n        var currentLocation = getLocationInStore(true);\n\n        if (currentLocation === lastPublishedLocation) {\n          return;\n        }\n\n        lastPublishedLocation = currentLocation;\n\n        if (!unsubscribed) {\n          listener(lastPublishedLocation);\n        }\n      }); // History 2.x listeners expect a synchronous call. Make the first call to the\n      // listener after subscribing to the store, in case the listener causes a\n      // location change (e.g. when it redirects)\n\n      if (!history.getCurrentLocation) {\n        listener(lastPublishedLocation);\n      } // Let user unsubscribe later\n\n\n      return function () {\n        unsubscribed = true;\n        unsubscribeFromStore();\n      };\n    },\n    // It also provides a way to destroy internal listeners\n    unsubscribe: function unsubscribe() {\n      if (adjustUrlOnReplay) {\n        unsubscribeFromStore();\n      }\n\n      unsubscribeFromHistory();\n    }\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/react-router-redux/lib/sync.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history/createMemoryHistory */ \"history/createMemoryHistory\");\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/lib/index.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/reducers */ \"./shared/reducers/index.js\");\n\n\n\n\n\nvar middlewares = [];\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddlewares.push(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_3__[\"routerMiddleware\"])(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_2___default()()));\nmiddlewares.push(sagaMiddleware);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialState) {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_shared_reducers__WEBPACK_IMPORTED_MODULE_4__[\"reducers\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares)));\n  store.runSaga = sagaMiddleware.run;\n\n  store.close = function () {\n    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"END\"]);\n  };\n\n  return store;\n});\n\n//# sourceURL=webpack:///./server/store.js?");

/***/ }),

/***/ "./shared/App.js":
/*!***********************!*\
  !*** ./shared/App.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./shared/routes.js\");\n/* harmony import */ var _components_NoMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NoMatch */ \"./shared/components/NoMatch.js\");\n/* harmony import */ var _containers_common_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/common/PrivateRoute */ \"./shared/containers/common/PrivateRoute.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/\"\n  }, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/login\"\n  }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeStyle: {\n      fontWeight: 'bold'\n    },\n    exact: true,\n    to: \"/projects\"\n  }, \"Projects\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_2__[\"routes\"].map(function (item) {\n    var path = item.path,\n        exact = item.exact,\n        C = item.component,\n        rest = _objectWithoutProperties(item, [\"path\", \"exact\", \"component\"]);\n\n    return rest.private ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_common_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__[\"PrivateRoute\"], _extends({\n      key: path\n    }, item)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: path,\n      path: path,\n      private: rest.private,\n      exact: exact,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoMatch__WEBPACK_IMPORTED_MODULE_3__[\"NoMatch\"], props);\n    }\n  })));\n};\n\n//# sourceURL=webpack:///./shared/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginService\", function() { return getLoginService; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/apiEndpoints */ \"./shared/constants/apiEndpoints.js\");\n\n\n\nvar makeRequest = function makeRequest(urlExtension) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlExtension, {\n    crossdomain: true\n  });\n};\n\nvar getLoginService = function getLoginService() {\n  return makeRequest(_constants_apiEndpoints__WEBPACK_IMPORTED_MODULE_1__[\"_REQ_URL_GET_LOGIN\"]);\n};\n\n//# sourceURL=webpack:///./shared/api/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_LoginActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/LoginActions */ \"./shared/actions/LoginActions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Login, _React$PureComponent);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));\n  }\n\n  _createClass(Login, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.getLogin();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Login Page\");\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    userData: state.userData\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getLogin: function getLogin() {\n      dispatch(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_3__[\"getLogin\"])({\n        name: 'Sid'\n      }));\n    }\n  };\n};\n\nLogin.propTypes = {\n  userData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,\n  getLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Login));\n\n//# sourceURL=webpack:///./shared/containers/Login.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginReducer\", function() { return getLoginReducer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./shared/constants/index.js\");\n\nvar getLoginReducer = function getLoginReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    name: 'Siddhartha'\n  };\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      data = _ref.data,\n      error = _ref.error;\n\n  switch (type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN\"]:\n      return data;\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./shared/reducers/LoginReducer.js?");

/***/ }),

/***/ "./shared/reducers/index.js":
/*!**********************************!*\
  !*** ./shared/reducers/index.js ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducers\", function() { return reducers; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ \"./node_modules/react-router-redux/lib/index.js\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LoginReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginReducer */ \"./shared/reducers/LoginReducer.js\");\n\n\n\nvar reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_1__[\"routerReducer\"],\n  userData: _LoginReducer__WEBPACK_IMPORTED_MODULE_2__[\"getLoginReducer\"]\n});\n\n//# sourceURL=webpack:///./shared/reducers/index.js?");

/***/ }),

/***/ "./shared/routes.js":
/*!**************************!*\
  !*** ./shared/routes.js ***!
  \**************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/Home */ \"./shared/containers/Home.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Login */ \"./shared/containers/Login.js\");\n/* harmony import */ var _containers_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Projects */ \"./shared/containers/Projects.js\");\n/* harmony import */ var _containers_ProjectDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/ProjectDetails */ \"./shared/containers/ProjectDetails.js\");\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _containers_Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"],\n  private: false\n}, {\n  path: '/login',\n  component: _containers_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  private: false\n}, {\n  path: '/projects',\n  component: _containers_Projects__WEBPACK_IMPORTED_MODULE_2__[\"Projects\"],\n  private: true\n}, {\n  path: '/projects/:id',\n  component: _containers_ProjectDetails__WEBPACK_IMPORTED_MODULE_3__[\"ProjectDetails\"],\n  private: true\n}];\n\n//# sourceURL=webpack:///./shared/routes.js?");

/***/ }),

/***/ "./shared/sagas/LoginSaga.js":
/*!***********************************!*\
  !*** ./shared/sagas/LoginSaga.js ***!
  \***********************************/
/*! exports provided: getLogin, getLoginSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogin\", function() { return getLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginSaga\", function() { return getLoginSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./shared/constants/index.js\");\n/* harmony import */ var _actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/LoginActions */ \"./shared/actions/LoginActions.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./shared/api/index.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(getLogin),\n    _marked2 =\n/*#__PURE__*/\nregeneratorRuntime.mark(getLoginSaga);\n\n\n\n\n\nfunction getLogin() {\n  var data;\n  return regeneratorRuntime.wrap(function getLogin$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_api__WEBPACK_IMPORTED_MODULE_3__[\"getLoginService\"]);\n\n        case 3:\n          data = _context.sent;\n          _context.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__[\"getLoginSuccess\"])(data));\n\n        case 6:\n          _context.next = 12;\n          break;\n\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          _context.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions_LoginActions__WEBPACK_IMPORTED_MODULE_2__[\"getLoginError\"])(_context.t0));\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[0, 8]]);\n}\nfunction getLoginSaga() {\n  return regeneratorRuntime.wrap(function getLoginSaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_LOGIN\"], getLogin);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./shared/sagas/LoginSaga.js?");

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