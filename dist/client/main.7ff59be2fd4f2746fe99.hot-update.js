webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/cardslist.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CardsList/cardslist.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@media all and (min-width: 1024px) {\\r\\n  .cardslist__cardsList--1DoiZ {\\r\\n    padding: 40px 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.jsx\");\r\nfunction CardsList() {\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    console.log(posts);\r\n    // const token = useSelector<RootState, string>(state => state.token.token);\r\n    // const bottomOfList = useRef<HTMLDivElement>(null);\r\n    // let cards;\r\n    // if (posts.length > 0) {\r\n    //   cards = Array.from(posts).map(el => {\r\n    //     return <CommentListProvider key={el.postID} children={<Card {...el} key={el.postID}></Card>} postID={el.postID} subreddit={el.subreddit}></CommentListProvider>\r\n    //   })\r\n    // }\r\n    // useEffect(() => {\r\n    //   const observer = new IntersectionObserver(() => {\r\n    //     console.log('load posts')\r\n    //   }, {\r\n    //     rootMargin: '10px',\r\n    //   });\r\n    //   if (bottomOfList.current) {\r\n    //     observer.observe(bottomOfList.current);\r\n    //   }\r\n    //   return () => {\r\n    //     if (bottomOfList.current) {\r\n    //       observer.unobserve(bottomOfList.current);\r\n    //     }\r\n    //   }\r\n    // }, [bottomOfList.current])\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        posts.length === 0 && token.length === 0 && (react_1.default.createElement(\"li\", { style: { textAlign: 'center' } }, \"\\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0443\\u0439\\u0442\\u0435\\u0441\\u044C...\")),\r\n        posts.length === 0 && token.length > 0 && (react_1.default.createElement(\"li\", { style: { textAlign: 'center' } }, \"\\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        posts.length > 0 && (cards),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./cardslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/cardslist.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./cardslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/cardslist.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./cardslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CardsList/cardslist.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})