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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Post_1 = __webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\nvar store = toolkit_1.configureStore({\n    reducer: reducer_1.rootReducer,\n    middleware: [redux_thunk_1.default],\n});\nfunction AppComponent() {\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\n    useToken_1.useToken();\n    react_1.useEffect(function () {\n        setMounted(true);\n    }, []);\n    if (!mounted)\n        return (react_1.default.createElement(react_1.default.Fragment, null));\n    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(Content_1.Content, null,\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: \"/posts\" }) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"auth\", element: react_1.default.createElement(react_router_dom_1.Navigate, { replace: true, to: \"/posts\" }) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"posts/*\", element: react_1.default.createElement(CardsList_1.CardsList, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"posts/:id\", element: react_1.default.createElement(react_1.default.Fragment, null,\n                            react_1.default.createElement(CardsList_1.CardsList, null),\n                            react_1.default.createElement(Post_1.Post, null)) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(ErrorBoundary, null) }))))));\n}\nexports.App = root_1.hot(function () {\n    return react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(AppComponent, null));\n});\nfunction ErrorBoundary() {\n    return (react_1.default.createElement(\"div\", { id: \"error-page\" },\n        react_1.default.createElement(\"h1\", null, \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 404\"),\n        react_1.default.createElement(\"p\", null, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\")));\n}\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/generecList.tsx":
/*!*****************************!*\
  !*** ./src/generecList.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Text_1 = __webpack_require__(/*! ../src/shared/Text */ \"./src/shared/Text/index.ts\");\nvar noop = function () { };\nfunction GenericList(_a) {\n    var list = _a.list;\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, svg = _a.svg, text = _a.text, parentID = _a.parentID, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, className = _a.className, id = _a.id, href = _a.href, textSize = _a.textSize, mobileSizeText = _a.mobileSizeText, AsText = _a.AsText, tabletSizeText = _a.tabletSizeText, desctopSizeText = _a.desctopSizeText, colorText = _a.colorText;\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return console.log(parentID); }, key: id, href: href },\n            svg,\n            react_1.default.createElement(Text_1.Text, { As: AsText, size: textSize, color: colorText, mobileSize: mobileSizeText, tabletSize: tabletSizeText, desctopSize: desctopSizeText }, text)));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/generecList.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../store/token/actions */ \"./src/store/token/actions.ts\");\nfunction useToken() {\n    var token = react_redux_1.useSelector(function (state) { return state.token.token; });\n    var dispatch = react_redux_1.useDispatch();\n    react_1.useEffect(function () {\n        if (token.length === 0) {\n            //@ts-ignore\n            dispatch(actions_1.tokenRequestAsync());\n        }\n    });\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\nfunction useUserData() {\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\n    var token = react_redux_1.useSelector(function (state) { return state.token.token; });\n    var dispatch = react_redux_1.useDispatch();\n    react_1.useEffect(function () {\n        if (token.length > 0 && token !== 'undefined') {\n            //@ts-ignore\n            dispatch(actions_1.meRequestAsync());\n        }\n    }, [token]);\n    return { data: data, loading: loading };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black:          #333333;\\n  --orange:         #CC6633;\\n  --green:          #A4CC33;\\n  --whiteLightness: 100%;\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\n  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  overflow-x:hidden;\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  \\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"modal-root\\\"></div>\\n  <div id=\\\"dropdown-root\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = express_1.default();\nvar PORT = process.env.PORT || 3000;\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/auth', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.get('*', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.listen(PORT, function () {\n    console.log(\"server started on port http://localhost:\" + PORT);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Break = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nfunction Break(props) {\n    var _a, _b, _c, _d, _e;\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desctop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e)) }));\n}\nexports.Break = Break;\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\nfunction Card(obj) {\n    var post = react_redux_1.useSelector(function (state) { return state.posts.data; });\n    var commentsCount = post.filter(function (el) { return el.postID == obj.postID; })[0].comments.length;\n    //const commentsList:any =  useSelector<RootState, string>();\n    // let commentsCount;\n    // if (commentsList.length > 0) {\n    //   commentsCount = commentsList.length;\n    // }\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(TextContent_1.TextContent, __assign({}, obj)),\n        react_1.default.createElement(Preview_1.Preview, { img_src: obj.postImg }),\n        react_1.default.createElement(Menu_1.Menu, { postID: obj.postID }),\n        react_1.default.createElement(Controls_1.Controls, { karmaCount: obj.karmaCount, commentsCount: commentsCount })));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css\"));\nfunction CommentsButton(_a) {\n    var commentsCount = _a.commentsCount;\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, commentsCount)));\n}\nexports.CommentsButton = CommentsButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--3bUHw\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--3_qtU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Controls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/index.ts\");\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts\");\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Controls/SaveButton/index.ts\");\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Controls/ShareButton/index.ts\");\nfunction Controls(_a) {\n    var karmaCount = _a.karmaCount, commentsCount = _a.commentsCount;\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karmaCount: karmaCount }),\n        react_1.default.createElement(CommentsButton_1.CommentsButton, { commentsCount: commentsCount }),\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\n            react_1.default.createElement(ShareButton_1.ShareButton, null),\n            react_1.default.createElement(SaveButton_1.SaveButton, null))));\n}\nexports.Controls = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KarmaCounter = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css\"));\nfunction KarmaCounter(_a) {\n    var karmaCount = _a.karmaCount;\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, karmaCount),\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\n            react_1.default.createElement(\"svg\", { className: karmacounter_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))));\n}\nexports.KarmaCounter = KarmaCounter;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--fMpNv\",\n\t\"karmaValue\": \"karmacounter__karmaValue--1Ho-U\",\n\t\"down\": \"karmacounter__down--1V_4R\",\n\t\"up\": \"karmacounter__up--1SZXL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css\"));\nfunction SaveButton() {\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\n}\nexports.SaveButton = SaveButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/SaveButton/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--1jjuK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css\"));\nfunction ShareButton() {\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\n}\nexports.ShareButton = ShareButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/ShareButton/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--3ZQRi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\",\n\t\"actions\": \"controls__actions--1iXY3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts\");\nfunction Menu(_a) {\n    var postID = _a.postID;\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\n                react_1.default.createElement(Icons_1.IconMenu, null)) },\n            react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postID: postID }))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuItemsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar generecList_1 = __webpack_require__(/*! ../../../../../generecList */ \"./src/generecList.tsx\");\nvar generateId_1 = __webpack_require__(/*! ../../../../../utils/react/generateId */ \"./src/utils/react/generateId.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css\"));\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\nvar dropdownLIST = generateId_1.generateRandomIdForObject([\n    { text: 'Комментарии',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: menuitemslist_css_1.default.menuItem + \" \" + menuitemslist_css_1.default.none,\n        svg: react_1.default.createElement(Icons_1.IconComments, null),\n    },\n    { text: 'Поделиться',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: menuitemslist_css_1.default.menuItem + \" \" + menuitemslist_css_1.default.none,\n        svg: react_1.default.createElement(Icons_1.IconShare, null)\n    },\n    { text: 'Скрыть',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: \"\" + menuitemslist_css_1.default.menuItem,\n        svg: react_1.default.createElement(Icons_1.IconBlock, null),\n    },\n    { text: 'Сохранить',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: menuitemslist_css_1.default.menuItem + \" \" + menuitemslist_css_1.default.none,\n        svg: react_1.default.createElement(Icons_1.IconSave, null)\n    },\n    { text: 'Пожаловаться',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: \"\" + menuitemslist_css_1.default.menuItem,\n        svg: react_1.default.createElement(Icons_1.IconSpan, null)\n    },\n    { text: 'Закрыть',\n        textSize: 14,\n        desctopSizeText: 14,\n        tabletSizeText: 14,\n        colorText: Text_1.EColors.grey66,\n        AsText: 'span',\n        As: 'li',\n        className: menuitemslist_css_1.default.closeButton + \" \" + menuitemslist_css_1.default.closeNone,\n    }\n]);\nfunction MenuItemsList(_a) {\n    var postID = _a.postID;\n    dropdownLIST.forEach(function (obj) {\n        obj.postID = postID;\n    });\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.dropdown },\n        react_1.default.createElement(generecList_1.GenericList, { list: dropdownLIST })));\n}\nexports.MenuItemsList = MenuItemsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"dropdown\": \"menuitemslist__dropdown--2PMKa\",\n\t\"closeButton\": \"menuitemslist__closeButton--5qc2k\",\n\t\"menuItem\": \"menuitemslist__menuItem--2CsEl\",\n\t\"none\": \"menuitemslist__none--2uPhQ\",\n\t\"closeNone\": \"menuitemslist__closeNone--m5J2h\",\n\t\"divider\": \"menuitemslist__divider--1_GEo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Preview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\nfunction Preview(_a) {\n    var img_src = _a.img_src;\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, img_src.includes('https') === true ? react_1.default.createElement(\"img\", { src: img_src, alt: 'post image', className: preview_css_1.default.previewImg }) : react_1.default.createElement(\"img\", { src: 'https://cdn.dribbble.com/users/7824615/screenshots/15637984/media/0e5ae61db4bf5ad862c8facaab7ca22d.png?compress=1&resize=1000x750&vertical=top', alt: 'post image', className: preview_css_1.default.previewImg })));\n}\nexports.Preview = Preview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"PublicDate__textContent--2fzs9\",\n\t\"metaData\": \"PublicDate__metaData--1LCqI\",\n\t\"publishedLabel\": \"PublicDate__publishedLabel--Lyf3y\",\n\t\"createdAt\": \"PublicDate__createdAt--1KzK1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.jsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PublicDate = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar PublicDate_css_1 = __importDefault(__webpack_require__(/*! ./PublicDate.css */ \"./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.css\"));\nvar luxon_1 = __webpack_require__(/*! luxon */ \"luxon\");\nvar humanize_duration_1 = __importDefault(__webpack_require__(/*! humanize-duration */ \"humanize-duration\"));\nfunction PublicDate(_a) {\n    var postCreated = _a.postCreated;\n    var utcDate = postCreated;\n    var date = new Date(utcDate * 1000);\n    var validDate = luxon_1.DateTime.local(date.getFullYear(), date.getMonth() + 1, date.getDate()).setLocale('ru').toFormat('d MMMM yyyy');\n    var today = luxon_1.DateTime.now().setLocale('ru').toFormat('d MMMM yyyy');\n    var now = new Date();\n    var publicHours = (now.getHours() - date.getHours());\n    var minutesDur = humanize_duration_1.default(luxon_1.Duration.fromObject({ minutes: now.getMinutes() }).minus(luxon_1.Duration.fromObject({ minutes: date.getMinutes() })), { language: 'ru' });\n    var hoursDur = humanize_duration_1.default(luxon_1.Duration.fromObject({ hours: now.getHours() }).minus(luxon_1.Duration.fromObject({ hours: date.getHours() })), { language: 'ru' });\n    var publicDate;\n    if (validDate === today) {\n        if (publicHours === 0) {\n            publicDate = minutesDur + \" \\u043D\\u0430\\u0437\\u0430\\u0434\";\n        }\n        else {\n            publicDate = hoursDur + \" \\u043D\\u0430\\u0437\\u0430\\u0434\";\n        }\n    }\n    else {\n        publicDate = validDate;\n    }\n    return (react_1.default.createElement(\"span\", { className: PublicDate_css_1.default.createdAt },\n        react_1.default.createElement(\"span\", { className: PublicDate_css_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\n        publicDate));\n}\nexports.PublicDate = PublicDate;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.jsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/PublicDate/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/PublicDate/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PublicDate */ \"./src/shared/CardsList/Card/TextContent/PublicDate/PublicDate.jsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/PublicDate/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextContent = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar PublicDate_1 = __webpack_require__(/*! ./PublicDate */ \"./src/shared/CardsList/Card/TextContent/PublicDate/index.ts\");\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\nfunction TextContent(obj) {\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\n            react_1.default.createElement(UserLink_1.UserLink, { userName: obj.author, img_src: obj.icon, userLink: obj.userLink }),\n            react_1.default.createElement(PublicDate_1.PublicDate, { postCreated: obj.postCreated })),\n        react_1.default.createElement(Title_1.Title, { postLink: obj.postLink, postTitle: obj.postTitle, postID: obj.postID, subreddit: obj.subreddit })));\n}\nexports.TextContent = TextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Title = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/Title/title.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction Title(_a) {\n    var postTitle = _a.postTitle, postLink = _a.postLink, postID = _a.postID, subreddit = _a.subreddit;\n    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpen = _b[1];\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\" + postID, className: title_css_1.default.postLink }, postTitle)));\n}\nexports.Title = Title;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/title.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/title.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3THtn\",\n\t\"postLink\": \"title__postLink--3ZH1E\",\n\t\"textContent\": \"title__textContent--1BWZQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserLink = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/Card/TextContent/UserLink/userlink.css\"));\nfunction UserLink(_a) {\n    var img_src = _a.img_src, userName = _a.userName, userLink = _a.userLink;\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink },\n        img_src ? react_1.default.createElement(\"img\", { src: img_src, alt: 'user avatar', className: userlink_css_1.default.avatar }) : react_1.default.createElement(Icons_1.IconAnon, null),\n        react_1.default.createElement(\"a\", { href: userLink, className: userlink_css_1.default.username }, userName)));\n}\nexports.UserLink = UserLink;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/userlink.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/userlink.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlink__userLink--X580t\",\n\t\"avatar\": \"userlink__avatar--3wav7\",\n\t\"username\": \"userlink__username--1lMzo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2RuXa\",\n\t\"metaData\": \"textcontent__metaData--1L7oU\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--C6Pau\",\n\t\"createdAt\": \"textcontent__createdAt--1vECY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar actions_1 = __webpack_require__(/*! ../../store/posts/actions */ \"./src/store/posts/actions.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Post_1 = __webpack_require__(/*! ../Post */ \"./src/shared/Post/index.ts\");\nfunction CardsList() {\n    var token = react_redux_1.useSelector(function (state) { return state.token.token; });\n    var dispatch = react_redux_1.useDispatch();\n    var post = react_redux_1.useSelector(function (state) { return state.posts.data; });\n    var countLoad = react_redux_1.useSelector(function (state) { return state.posts.load; });\n    var loading = react_redux_1.useSelector(function (state) { return state.posts.loading; });\n    var errorLoading = react_redux_1.useSelector(function (state) { return state.posts.error; });\n    var _a = react_1.useState(''), tokenError = _a[0], setTokenError = _a[1];\n    var bottomOfList = react_1.useRef(null);\n    var _b = react_1.useState(false), buttonLoad = _b[0], setButtonLoad = _b[1];\n    function buttonClickLoad() {\n        countLoad = 1;\n        //@ts-ignore\n        dispatch(actions_1.postsRequestAsync(countLoad));\n        setButtonLoad(false);\n        console.log(countLoad);\n    }\n    react_1.useEffect(function () {\n        var observer = new IntersectionObserver(function (entries) {\n            if (entries[0].isIntersecting) {\n                if (token.length <= 0) {\n                    setTokenError('Пожалуйста авторизуйтесь');\n                }\n                else {\n                    setTokenError('');\n                }\n                if (token.length > 0 && countLoad <= 2) {\n                    countLoad += 1;\n                    setButtonLoad(false);\n                    //@ts-ignore\n                    dispatch(actions_1.postsRequestAsync(countLoad));\n                    console.log(countLoad);\n                    if (token.length > 0 && countLoad == 3) {\n                        countLoad += 1;\n                        console.log(countLoad);\n                    }\n                }\n                if (token.length > 0 && countLoad == 4) {\n                    setButtonLoad(true);\n                }\n            }\n        }, {\n            rootMargin: '10px',\n        });\n        if (bottomOfList.current)\n            observer.observe(bottomOfList.current);\n        return function () {\n            if (bottomOfList.current)\n                observer.unobserve(bottomOfList.current);\n        };\n    }, [bottomOfList.current, token, countLoad]);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\n        react_1.default.createElement(react_router_dom_1.Routes, null,\n            react_1.default.createElement(react_router_dom_1.Route, { path: \":id\", element: react_1.default.createElement(Post_1.Post, null) })),\n        post.map(function (el) {\n            return react_1.default.createElement(Card_1.Card, __assign({}, el, { key: el.postID }));\n        }),\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\n        loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\n        errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' }, role: 'alert' }, errorLoading)),\n        tokenError && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' }, role: 'alert' }, tokenError)),\n        buttonLoad && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\n            react_1.default.createElement(\"button\", { onClick: buttonClickLoad, className: cardslist_css_1.default.buttonLoad }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\")))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"buttonLoad\": \"cardslist__buttonLoad--2E92F\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentBlock.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentBlock/CommentBlock.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentblock_css_1 = __importDefault(__webpack_require__(/*! ./commentblock.css */ \"./src/shared/CommentBlock/commentblock.css\"));\nvar CommentPart_1 = __webpack_require__(/*! ./CommentPart */ \"./src/shared/CommentBlock/CommentPart/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction CommentBlock(_a) {\n    var id = _a.id;\n    var post = react_redux_1.useSelector(function (state) { return state.posts.data; });\n    var commentsList = post.filter(function (el) { return el.postID == id; })[0].comments;\n    var commentsPart;\n    function createComment(el) {\n        var replies;\n        var children;\n        if (el.replies !== undefined && el.replies.length > 0) {\n            replies = el.replies.map(function (element) { return createComment(element); });\n        }\n        if (replies !== undefined && replies.length > 0) {\n            children = react_1.default.createElement(\"ul\", null, replies);\n        }\n        return react_1.default.createElement(CommentPart_1.CommentPart, { children: children, obj: el, key: el.id });\n    }\n    if (commentsList.length > 0) {\n        commentsPart = commentsList.map(function (el) {\n            return createComment(el);\n        });\n    }\n    return (react_1.default.createElement(\"ul\", { className: commentblock_css_1.default.list }, commentsPart));\n}\nexports.CommentBlock = CommentBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentBlock.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/CommentButtonContainer.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/CommentButtonContainer.tsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentButtonContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\nvar KarmaCounter_1 = __webpack_require__(/*! ../../../CardsList/Card/Controls/KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts\");\nvar commentbuttoncontainer_css_1 = __importDefault(__webpack_require__(/*! ./commentbuttoncontainer.css */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/commentbuttoncontainer.css\"));\nvar ComplainButton_1 = __webpack_require__(/*! ./ComplainButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/index.ts\");\nvar RepliesButton_1 = __webpack_require__(/*! ./RepliesButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/index.ts\");\nvar ShareCommentButton_1 = __webpack_require__(/*! ./ShareCommentButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/index.ts\");\nvar NOOP = function () { };\nfunction CommentButtonContainer(_a) {\n    var _b = _a.karmaCount, karmaCount = _b === void 0 ? 0 : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\n    return (react_1.default.createElement(\"div\", { className: commentbuttoncontainer_css_1.default.buttonContainer },\n        react_1.default.createElement(\"span\", { className: commentbuttoncontainer_css_1.default.karmaCounter },\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karmaCount: karmaCount }),\n            react_1.default.createElement(Break_1.Break, { size: 20 })),\n        react_1.default.createElement(RepliesButton_1.RepliesButton, { onOpen: onOpen }),\n        react_1.default.createElement(\"div\", { className: commentbuttoncontainer_css_1.default.rigthGroupButton },\n            react_1.default.createElement(Break_1.Break, { size: 20 }),\n            react_1.default.createElement(ComplainButton_1.ComplainButton, null),\n            react_1.default.createElement(Break_1.Break, { size: 20 }),\n            react_1.default.createElement(ShareCommentButton_1.ShareCommentButton, null))));\n}\nexports.CommentButtonContainer = CommentButtonContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/CommentButtonContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/ComplainButton.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/ComplainButton.tsx ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ComplainButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar complainbutton_css_1 = __importDefault(__webpack_require__(/*! ./complainbutton.css */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/complainbutton.css\"));\nfunction ComplainButton() {\n    return (react_1.default.createElement(\"button\", { className: complainbutton_css_1.default.complainButton },\n        react_1.default.createElement(Icons_1.IconComplain, null),\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\n        react_1.default.createElement(\"span\", { className: complainbutton_css_1.default.buttonText }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")));\n}\nexports.ComplainButton = ComplainButton;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/ComplainButton.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/complainbutton.css":
/*!******************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/complainbutton.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"complainButton\": \"complainbutton__complainButton--1dkd3\",\n\t\"buttonText\": \"complainbutton__buttonText--3TDmF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/complainbutton.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/index.ts":
/*!********************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/index.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ComplainButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/ComplainButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ComplainButton/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/RepliesButton.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/RepliesButton.tsx ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.RepliesButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar repliesbutton_css_1 = __importDefault(__webpack_require__(/*! ./repliesbutton.css */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/repliesbutton.css\"));\nvar NOOP = function () { };\nfunction RepliesButton(_a) {\n    var _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b;\n    return (react_1.default.createElement(\"button\", { onClick: onOpen, className: repliesbutton_css_1.default.repliesButton },\n        react_1.default.createElement(Icons_1.IconReplies, null),\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\n        react_1.default.createElement(\"span\", { className: repliesbutton_css_1.default.buttonText }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")));\n}\nexports.RepliesButton = RepliesButton;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/RepliesButton.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/index.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./RepliesButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/RepliesButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/repliesbutton.css":
/*!****************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/repliesbutton.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"repliesButton\": \"repliesbutton__repliesButton--3nLHd\",\n\t\"buttonText\": \"repliesbutton__buttonText--1ZcIO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/RepliesButton/repliesbutton.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/ShareCommentButton.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/ShareCommentButton.tsx ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareCommentButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Break_1 = __webpack_require__(/*! ../../../../Break */ \"./src/shared/Break/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar sharecommentbutton_css_1 = __importDefault(__webpack_require__(/*! ./sharecommentbutton.css */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/sharecommentbutton.css\"));\nfunction ShareCommentButton() {\n    return (react_1.default.createElement(\"button\", { className: sharecommentbutton_css_1.default.shareCommentButton },\n        react_1.default.createElement(Icons_1.IconShare, null),\n        react_1.default.createElement(Break_1.Break, { size: 4 }),\n        react_1.default.createElement(\"span\", { className: sharecommentbutton_css_1.default.buttonText }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")));\n}\nexports.ShareCommentButton = ShareCommentButton;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/ShareCommentButton.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/index.ts":
/*!************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/index.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ShareCommentButton */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/ShareCommentButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/sharecommentbutton.css":
/*!**************************************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/sharecommentbutton.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareCommentButton\": \"sharecommentbutton__shareCommentButton--saCnV\",\n\t\"buttonText\": \"sharecommentbutton__buttonText--2ROg9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/ShareCommentButton/sharecommentbutton.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/commentbuttoncontainer.css":
/*!***********************************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/commentbuttoncontainer.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"buttonContainer\": \"commentbuttoncontainer__buttonContainer--14T5n\",\n\t\"rigthGroupButton\": \"commentbuttoncontainer__rigthGroupButton--3WqcH\",\n\t\"karmaCounter\": \"commentbuttoncontainer__karmaCounter--T2VVN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/commentbuttoncontainer.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentButtonContainer/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentButtonContainer/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentButtonContainer */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/CommentButtonContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentButtonContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/CommentPart.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/CommentPart.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentPart = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/Break/index.ts\");\nvar PublicDate_1 = __webpack_require__(/*! ../../CardsList/Card/TextContent/PublicDate */ \"./src/shared/CardsList/Card/TextContent/PublicDate/index.ts\");\nvar UserLink_1 = __webpack_require__(/*! ../../CardsList/Card/TextContent/UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\nvar CommentFormUnControlled_1 = __webpack_require__(/*! ../../CommentFormUnControlled */ \"./src/shared/CommentFormUnControlled/index.ts\");\nvar RepliesCommentContext_1 = __webpack_require__(/*! ../../Context/RepliesCommentContext */ \"./src/shared/Context/RepliesCommentContext.tsx\");\nvar CommentButtonContainer_1 = __webpack_require__(/*! ./CommentButtonContainer */ \"./src/shared/CommentBlock/CommentPart/CommentButtonContainer/index.ts\");\nvar commentpart_css_1 = __importDefault(__webpack_require__(/*! ./commentpart.css */ \"./src/shared/CommentBlock/CommentPart/commentpart.css\"));\nvar NOOP = function () { };\nfunction CommentPart(_a, _b) {\n    var children = _a.children, obj = _a.obj;\n    var isOpen = _b.isOpen, _c = _b.onClose, onClose = _c === void 0 ? NOOP : _c, _d = _b.onOpen, onOpen = _d === void 0 ? NOOP : _d;\n    var _e = react_1.default.useState(isOpen), isFormOpen = _e[0], setIsFormOpen = _e[1];\n    react_1.default.useEffect(function () { return setIsFormOpen(isOpen); }, [isOpen]);\n    react_1.default.useEffect(function () { return isFormOpen ? onOpen() : onClose(); }, [isFormOpen]);\n    function handleOpen() {\n        setIsFormOpen(!isFormOpen);\n        if (isOpen === undefined) {\n            setIsFormOpen(!isFormOpen);\n        }\n    }\n    return (react_1.default.createElement(\"li\", { className: commentpart_css_1.default.listPart },\n        react_1.default.createElement(\"div\", { className: commentpart_css_1.default.commentHeader },\n            react_1.default.createElement(UserLink_1.UserLink, { userName: obj.author }),\n            react_1.default.createElement(Break_1.Break, { size: 4 }),\n            react_1.default.createElement(PublicDate_1.PublicDate, { postCreated: obj.created })),\n        react_1.default.createElement(\"p\", { className: commentpart_css_1.default.commentText }, obj.commentText),\n        react_1.default.createElement(CommentButtonContainer_1.CommentButtonContainer, { karmaCount: obj.ups, onOpen: handleOpen }),\n        isFormOpen && (react_1.default.createElement(CommentFormUnControlled_1.CommentFormUnControlled, { author: obj.author, context: RepliesCommentContext_1.repliesCommentContext, onClose: function () { setIsFormOpen(false); } })),\n        children));\n}\nexports.CommentPart = CommentPart;\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/CommentPart.tsx?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/commentpart.css":
/*!*************************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/commentpart.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listPart\": \"commentpart__listPart--3373p\",\n\t\"commentHeader\": \"commentpart__commentHeader--CsUA1\",\n\t\"repliesButton\": \"commentpart__repliesButton--2s4E2\",\n\t\"buttonText\": \"commentpart__buttonText--3qL4J\",\n\t\"commentText\": \"commentpart__commentText--2FeYi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/commentpart.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/CommentPart/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CommentBlock/CommentPart/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentPart */ \"./src/shared/CommentBlock/CommentPart/CommentPart.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/CommentPart/index.ts?");

/***/ }),

/***/ "./src/shared/CommentBlock/commentblock.css":
/*!**************************************************!*\
  !*** ./src/shared/CommentBlock/commentblock.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"commentblock__list--2dnTe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/commentblock.css?");

/***/ }),

/***/ "./src/shared/CommentBlock/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentBlock/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentBlock */ \"./src/shared/CommentBlock/CommentBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar reducer_1 = __webpack_require__(/*! ../../store/reducer */ \"./src/store/reducer.ts\");\nfunction CommentForm(_a) {\n    var _b;\n    var value = _a.value;\n    var dispatch = react_redux_1.useDispatch();\n    var _c = react_hook_form_1.useForm({\n        mode: \"onSubmit\",\n        defaultValues: {\n            \"comment\": value,\n        },\n    }), register = _c.register, errors = _c.formState.errors, handleSubmit = _c.handleSubmit;\n    var onSubmit = function (data) {\n        dispatch(reducer_1.updateComment(data.comment));\n        console.log(data);\n    };\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\n        react_1.default.createElement(\"textarea\", __assign({ className: commentform_css_1.default.input }, register(\"comment\", {\n            required: \"Введите больше 3-x символов\",\n            minLength: {\n                value: 3,\n                message: \"Введите больше 3-x символов\"\n            }\n        }), { \"aria-invalid\": ((_b = errors.comment) === null || _b === void 0 ? void 0 : _b.type) === 'required' ? 'true' : undefined })),\n        errors.comment && react_1.default.createElement(\"div\", null, errors.comment.message),\n        react_1.default.createElement(\"button\", { type: 'submit', className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\nvar react_redux_2 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction CommentFormContainer() {\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\n    var dispatch = react_redux_2.useDispatch();\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value }));\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormUnControlled/CommentFormUnControlled.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CommentFormUnControlled/CommentFormUnControlled.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormUnControlled = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar commentformuncontrolled_css_1 = __importDefault(__webpack_require__(/*! ./commentformuncontrolled.css */ \"./src/shared/CommentFormUnControlled/commentformuncontrolled.css\"));\nfunction CommentFormUnControlled(_a) {\n    var onClose = _a.onClose, context = _a.context, author = _a.author;\n    var _b = react_1.useContext(context), defaultValue = _b.defaultValue, onChange = _b.onChange;\n    var ref = react_1.useRef(null);\n    react_1.useEffect(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                onClose === null || onClose === void 0 ? void 0 : onClose();\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    function handleSubmit(event) {\n        var _a;\n        event.preventDefault();\n        console.log((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value);\n        return false;\n    }\n    return (react_1.default.createElement(\"form\", { className: commentformuncontrolled_css_1.default.form, onSubmit: handleSubmit },\n        react_1.default.createElement(\"textarea\", { className: commentformuncontrolled_css_1.default.input, defaultValue: author + \", \", ref: ref }),\n        react_1.default.createElement(\"button\", { type: 'submit', onClick: handleSubmit, className: commentformuncontrolled_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\n}\nexports.CommentFormUnControlled = CommentFormUnControlled;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormUnControlled/CommentFormUnControlled.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormUnControlled/commentformuncontrolled.css":
/*!************************************************************************!*\
  !*** ./src/shared/CommentFormUnControlled/commentformuncontrolled.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentformuncontrolled__form--23j0m\",\n\t\"input\": \"commentformuncontrolled__input--3nB3l\",\n\t\"button\": \"commentformuncontrolled__button--2sTZI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormUnControlled/commentformuncontrolled.css?");

/***/ }),

/***/ "./src/shared/CommentFormUnControlled/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CommentFormUnControlled/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentFormUnControlled */ \"./src/shared/CommentFormUnControlled/CommentFormUnControlled.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormUnControlled/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Context/RepliesCommentContext.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Context/RepliesCommentContext.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.RepliesCommentContextProvider = exports.repliesCommentContext = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nexports.repliesCommentContext = react_1.default.createContext({\n    defaultValue: '',\n    onChange: function () { }\n});\nfunction RepliesCommentContextProvider(_a) {\n    var children = _a.children, author = _a.author;\n    var _b = react_1.useState(author + \", \"), repliesValue = _b[0], setRepliesValue = _b[1];\n    return (react_1.default.createElement(exports.repliesCommentContext.Provider, { value: { defaultValue: repliesValue, onChange: setRepliesValue } }, children));\n}\nexports.RepliesCommentContextProvider = RepliesCommentContextProvider;\n// export const repliesCommentContext = React.createContext<CommentContextType>({\n//   value: '',\n//   onChange: () => {}\n// });\n// export function RepliesCommentContextProvider ({children, author}: {children: React.ReactNode, author?:string}) {\n//   const [repliesValue, setRepliesValue] = useState(`${author}, `);\n//   return (\n//     <repliesCommentContext.Provider value={{value: repliesValue, onChange:setRepliesValue}}>\n//       {children}\n//     </repliesCommentContext.Provider>\n//   )\n// }\n\n\n//# sourceURL=webpack:///./src/shared/Context/RepliesCommentContext.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\nvar NOOP = function () { };\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\n    var _d = react_1.default.useState({ top: '0px', right: '0px' }), isDropdownPosition = _d[0], setIsDropdownPosition = _d[1];\n    var _e = react_1.default.useState(isOpen), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];\n    var ref = react_1.useRef(null);\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    react_1.default.useEffect(function () {\n        function dropdownClose(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                setIsDropdownOpen(false);\n            }\n        }\n        document.addEventListener('click', dropdownClose);\n        return function () {\n            document.removeEventListener('click', dropdownClose);\n        };\n    }, []);\n    function handleOpen(event) {\n        var _a;\n        if (event.target instanceof Node && ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n            setIsDropdownPosition({ top: event.target.getBoundingClientRect().bottom + 20 + window.scrollY + \"px\",\n                right: event.target.getBoundingClientRect().left - 80 + \"px\" });\n        }\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n    }\n    var node = document.querySelector('#dropdown-root');\n    if (!node)\n        return null;\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: handleOpen, ref: ref },\n            button,\n            isDropdownOpen && react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, style: { position: 'absolute', top: isDropdownPosition.top,\n                    left: isDropdownPosition.right } },\n                react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))), node))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nfunction SearchBlock() {\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=YXxs90nMyhV_5fYlczthJA&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity', className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userBox },\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n                ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImage })\n                : react_1.default.createElement(Icons_1.IconAnon, null)),\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\n                react_1.default.createElement(Break_1.Break, { size: 12 }),\n                loading === true ? (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430\"))\n                    : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним'))))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"Sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconBlock.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconBlock.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconBlock() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\n}\nexports.IconBlock = IconBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconBlock.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconComments.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconComments.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconComments = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconComments() {\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.IconComments = IconComments;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconComments.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconComplain.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconComplain.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconComplain = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconComplain() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.IconComplain = IconComplain;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconComplain.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMenu.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconMenu.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconMenu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconMenu() {\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\n}\nexports.IconMenu = IconMenu;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconMenu.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconReplies.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconReplies.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconReplies = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconReplies() {\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\n}\nexports.IconReplies = IconReplies;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconReplies.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSave.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconSave.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconSave = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconSave() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n}\nexports.IconSave = IconSave;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconSave.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconShare.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconShare.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconShare = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconShare() {\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.IconShare = IconShare;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconShare.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSpan.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconSpan.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconSpan = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconSpan() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.IconSpan = IconSpan;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconSpan.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./IconMenu */ \"./src/shared/Icons/IconMenu.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconComments */ \"./src/shared/Icons/IconComments.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconShare */ \"./src/shared/Icons/IconShare.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconBlock */ \"./src/shared/Icons/IconBlock.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconSave */ \"./src/shared/Icons/IconSave.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconSpan */ \"./src/shared/Icons/IconSpan.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/Icons/IconAnon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconReplies */ \"./src/shared/Icons/IconReplies.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconComplain */ \"./src/shared/Icons/IconComplain.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    var token = localStorage.getItem('token');\n    var navigate = react_router_dom_1.useNavigate();\n    react_1.useEffect(function () {\n        // navigate('/posts');\n    }, []);\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar CommentBlock_1 = __webpack_require__(/*! ../CommentBlock */ \"./src/shared/CommentBlock/index.ts\");\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nfunction Post(props) {\n    var id = react_router_dom_1.useParams().id;\n    var ref = react_1.useRef(null);\n    var navigate = react_router_dom_1.useNavigate();\n    var location = react_router_dom_1.useLocation();\n    var postList = react_redux_1.useSelector(function (state) { return state.posts.data; });\n    var post = postList.filter(function (el) { return el.postID == id; });\n    react_1.useEffect(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                navigate('/posts');\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var node = document.querySelector('#modal-root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n        react_1.default.createElement(\"h2\", null, post[0].postTitle),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\n            react_1.default.createElement(\"p\", null, \"\\u0422\\u0435\\u043A\\u0441\\u0442\"),\n            react_1.default.createElement(\"p\", null, \"\\u0422\\u0435\\u043A\\u0441\\u0442\"),\n            react_1.default.createElement(\"p\", null, \"\\u0422\\u0435\\u043A\\u0441\\u0442\")),\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\n        react_1.default.createElement(CommentBlock_1.CommentBlock, { id: id }))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = exports.EColors = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar EColors;\n(function (EColors) {\n    EColors[\"black\"] = \"black\";\n    EColors[\"orange\"] = \"orange\";\n    EColors[\"green\"] = \"green\";\n    EColors[\"whiteLightness\"] = \"whiteLightness\";\n    EColors[\"white\"] = \"white\";\n    EColors[\"grayF4\"] = \"grayF4\";\n    EColors[\"greyF3\"] = \"greyF3\";\n    EColors[\"greyEC\"] = \"greyEC\";\n    EColors[\"greyD9\"] = \"greyD9\";\n    EColors[\"greyC4\"] = \"greyC4\";\n    EColors[\"grey99\"] = \"grey99\";\n    EColors[\"grey66\"] = \"grey66\";\n})(EColors = exports.EColors || (exports.EColors = {}));\nfunction Text(props) {\n    var _a, _b, _c;\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, children = props.children, _e = props.color, color = _e === void 0 ? EColors.black : _e, size = props.size, mobileSize = props.mobileSize, desctopSize = props.desctopSize, tabletSize = props.tabletSize;\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"d\" + desctopSize]] = desctopSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c));\n    return (react_1.default.createElement(As, { className: classes }, children));\n}\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\n// fetch\nexports.ME_REQUEST = 'ME_REQUEST';\nvar meRequest = function () { return ({\n    type: exports.ME_REQUEST,\n}); };\nexports.meRequest = meRequest;\n// success\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\nvar meRequestSuccess = function (data) { return ({\n    type: exports.ME_REQUEST_SUCCESS,\n    data: data,\n}); };\nexports.meRequestSuccess = meRequestSuccess;\n// error\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\nvar meRequestError = function (error) { return ({\n    type: exports.ME_REQUEST_ERROR,\n    error: error,\n}); };\nexports.meRequestError = meRequestError;\nvar meRequestAsync = function () { return function (dispatch, getState) {\n    if (localStorage.getItem('token') != null) {\n        dispatch(exports.meRequest());\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me/', {\n            headers: { Authorization: \"bearer \" + localStorage.getItem('token') },\n        })\n            .then(function (resp) {\n            var userData = resp.data;\n            dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));\n        })\n            .catch(function (err) {\n            console.log(err);\n            dispatch(exports.meRequestError(String(err)));\n        });\n    }\n}; };\nexports.meRequestAsync = meRequestAsync;\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\nvar meReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.ME_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        case actions_1.ME_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { data: action.data, loading: false });\n        default: return state;\n    }\n};\nexports.meReducer = meReducer;\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/posts/actions.ts":
/*!************************************!*\
  !*** ./src/store/posts/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postsRequestAsync = exports.postsRequestError = exports.POSTS_REQUEST_ERROR = exports.postsRequestSuccess = exports.POSTS_REQUEST_SUCCESS = exports.postsRequest = exports.POSTS_REQUEST = exports.createComments = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nfunction createComments(arr) {\n    return arr\n        .filter(function (obj) { return obj.kind !== 'more'; })\n        .map(function (obj) {\n        var commentObject = {\n            author: obj.data.author,\n            commentText: obj.data.body,\n            created: obj.data.created,\n            id: obj.data.id,\n            parent_id: obj.data.parent_id,\n            ups: obj.data.ups,\n            replies: [],\n        };\n        obj.data.replies ? commentObject.replies = createComments(obj.data.replies.data.children) : commentObject.replies = [];\n        return commentObject;\n    });\n}\nexports.createComments = createComments;\n// fetch\nexports.POSTS_REQUEST = 'POSTS_REQUEST';\nvar postsRequest = function () { return ({\n    type: exports.POSTS_REQUEST,\n}); };\nexports.postsRequest = postsRequest;\n// success\nexports.POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';\nvar postsRequestSuccess = function (data, after, load) { return ({\n    type: exports.POSTS_REQUEST_SUCCESS,\n    after: after,\n    load: load,\n    data: data,\n}); };\nexports.postsRequestSuccess = postsRequestSuccess;\n// error\nexports.POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';\nvar postsRequestError = function (error) { return ({\n    type: exports.POSTS_REQUEST_ERROR,\n    error: error,\n}); };\nexports.postsRequestError = postsRequestError;\nvar postsRequestAsync = function (load) { return function (dispatch, getState) {\n    var arrPosts = getState().posts.data;\n    if (getState().token.token.length > 0 && getState().token.token !== 'undefined') {\n        dispatch(exports.postsRequest());\n        var lastPosts = getState().posts.after;\n        axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\n            headers: { Authorization: \"bearer \" + getState().token.token },\n            params: {\n                limit: 10,\n                after: lastPosts,\n            }\n        })\n            .then(function (response) {\n            var postsData = response.data.data.children;\n            var after = response.data.data.after;\n            postsData.forEach(function (obj) {\n                var newobj = {\n                    author: obj.data.author,\n                    postTitle: obj.data.title,\n                    postImg: obj.data.thumbnail,\n                    postLink: obj.data.url,\n                    postCreated: obj.data.created,\n                    icon: obj.data.sr_detail.icon_img,\n                    postID: obj.data.id,\n                    userLink: obj.data.url_overridden_by_dest,\n                    karmaCount: obj.data.ups,\n                    subreddit: obj.data.subreddit,\n                    comments: [],\n                };\n                arrPosts.push(newobj);\n            });\n            var arrComments = [];\n            arrPosts.forEach(function (obj) {\n                axios_1.default.get(\"https://oauth.reddit.com/r/\" + obj.subreddit + \"/comments/\" + obj.postID + \"/\", {\n                    headers: { Authorization: \"bearer \" + localStorage.getItem('token') },\n                })\n                    .then(function (res) {\n                    var commentInfoArray = createComments(res.data[1].data.children);\n                    arrComments = commentInfoArray;\n                })\n                    .catch(function (err) {\n                    dispatch(exports.postsRequestError(String(err)));\n                })\n                    .then(function () {\n                    obj.comments = arrComments;\n                })\n                    .then(function () {\n                    dispatch(exports.postsRequestSuccess(arrPosts, after, load));\n                });\n            });\n            return [after, arrPosts];\n        });\n    }\n}; };\nexports.postsRequestAsync = postsRequestAsync;\n\n\n//# sourceURL=webpack:///./src/store/posts/actions.ts?");

/***/ }),

/***/ "./src/store/posts/reducer.ts":
/*!************************************!*\
  !*** ./src/store/posts/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postsReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/posts/actions.ts\");\nvar postsReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.POSTS_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.POSTS_REQUEST_ERROR:\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        case actions_1.POSTS_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { data: action.data, after: action.after, load: action.load, loading: false });\n        default: return state;\n    }\n};\nexports.postsReducer = postsReducer;\n\n\n//# sourceURL=webpack:///./src/store/posts/reducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.updateComment = void 0;\nvar reducer_1 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\nvar reducer_2 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\nvar actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\nvar actions_3 = __webpack_require__(/*! ./posts/actions */ \"./src/store/posts/actions.ts\");\nvar reducer_3 = __webpack_require__(/*! ./posts/reducer */ \"./src/store/posts/reducer.ts\");\n//@ts-ignore\nvar initialState = {\n    commentText: 'Привет!',\n    me: { loading: false, error: '', data: {} },\n    token: { loading: false, error: '', token: '' },\n    posts: { loading: false, error: '', data: [], after: '', load: 0 },\n};\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\nvar updateComment = function (text) { return ({\n    type: UPDATE_COMMENT,\n    text: text,\n}); };\nexports.updateComment = updateComment;\nvar rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case UPDATE_COMMENT:\n            return __assign(__assign({}, state), { commentText: action.text });\n        case actions_1.ME_REQUEST:\n        case actions_1.ME_REQUEST_SUCCESS:\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { me: reducer_2.meReducer(state.me, action) });\n        case actions_2.TOKEN_REQUEST:\n        case actions_2.TOKEN_REQUEST_SUCCESS:\n        case actions_2.TOKEN_REQUEST_ERROR:\n            return __assign(__assign({}, state), { token: reducer_1.tokenReducer(state.token, action) });\n        case actions_3.POSTS_REQUEST:\n        case actions_3.POSTS_REQUEST_SUCCESS:\n        case actions_3.POSTS_REQUEST_ERROR:\n            return __assign(__assign({}, state), { posts: reducer_3.postsReducer(state.posts, action) });\n        default:\n            return state;\n    }\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenRequestAsync = exports.tokenRequestError = exports.TOKEN_REQUEST_ERROR = exports.tokenRequestSuccess = exports.TOKEN_REQUEST_SUCCESS = exports.tokenRequest = exports.TOKEN_REQUEST = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\n// fetch\nexports.TOKEN_REQUEST = 'TOKEN_REQUEST';\nvar tokenRequest = function () { return ({\n    type: exports.TOKEN_REQUEST,\n}); };\nexports.tokenRequest = tokenRequest;\n// success \nexports.TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\nvar tokenRequestSuccess = function (token) { return ({\n    type: exports.TOKEN_REQUEST_SUCCESS,\n    token: token,\n}); };\nexports.tokenRequestSuccess = tokenRequestSuccess;\n// error\nexports.TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';\nvar tokenRequestError = function (error) { return ({\n    type: exports.TOKEN_REQUEST_ERROR,\n    error: error,\n}); };\nexports.tokenRequestError = tokenRequestError;\nvar tokenRequestAsync = function () { return function (dispatch, getState) {\n    var _a, _b, _c;\n    var paramsString = document.location.search;\n    var searchParams = new URLSearchParams(paramsString);\n    // if (localStorage.getItem('token') != null) {\n    //   dispatch(tokenRequestSuccess(localStorage.getItem('token')));\n    // }\n    if (document.location.pathname == '/auth') {\n        if (!((_c = (_b = (_a = getState()) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.token) === null || _c === void 0 ? void 0 : _c.length)) {\n            dispatch(exports.tokenRequest());\n            var code = searchParams.get(\"code\");\n            if (code) {\n                axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + code + \"&redirect_uri=http://localhost:3000/auth\", {\n                    auth: { username: 'YXxs90nMyhV_5fYlczthJA', password: 'K-NMuOdyKUmhmLh9y9yhBbhiayxHiw' },\n                    headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n                })\n                    .then(function (_a) {\n                    var data = _a.data;\n                    localStorage.setItem('token', data.access_token);\n                    dispatch(exports.tokenRequestSuccess(data.access_token));\n                })\n                    .catch(function (err) {\n                    dispatch(exports.tokenRequestError());\n                });\n            }\n        }\n    }\n}; };\nexports.tokenRequestAsync = tokenRequestAsync;\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\nvar tokenReducer = function (state, action) {\n    switch (action.type) {\n        case actions_1.TOKEN_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.TOKEN_REQUEST_ERROR:\n            return __assign(__assign({}, state), { error: action.error, loading: false });\n        case actions_1.TOKEN_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { token: action.token, loading: false });\n        default: return state;\n    }\n};\nexports.tokenReducer = tokenReducer;\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateId.ts":
/*!***************************************!*\
  !*** ./src/utils/react/generateId.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateRandomIdForObject = exports.generateKey = exports.assignId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.generateRandomString = generateRandomString;\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\nvar generateKey = function (obj) { return exports.assignId(obj); };\nexports.generateKey = generateKey;\nfunction generateRandomIdForObject(arr) {\n    return arr.map(function (el) {\n        return __assign(__assign({}, el), { id: exports.generateRandomString() });\n    });\n}\nexports.generateRandomIdForObject = generateRandomIdForObject;\n\n\n//# sourceURL=webpack:///./src/utils/react/generateId.ts?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");\n\n//# sourceURL=webpack:///external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "humanize-duration":
/*!************************************!*\
  !*** external "humanize-duration" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"humanize-duration\");\n\n//# sourceURL=webpack:///external_%22humanize-duration%22?");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"luxon\");\n\n//# sourceURL=webpack:///external_%22luxon%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

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

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });