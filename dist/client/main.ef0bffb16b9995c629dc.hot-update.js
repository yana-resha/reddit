webpackHotUpdate("main",{

/***/ "./src/shared/Context/postsContext.jsx":
/*!*********************************************!*\
  !*** ./src/shared/Context/postsContext.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext({});\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = usePostsData_1.usePostsData();\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/postsContext.jsx?");

/***/ })

})