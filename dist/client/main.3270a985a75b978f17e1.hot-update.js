webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/Context/postsContext */ \"./src/shared/Context/postsContext.jsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar store = toolkit_1.configureStore({\r\n    reducer: reducer_1.rootReducer,\r\n    middleware: [redux_thunk_1.default],\r\n});\r\nfunction AppComponent() {\r\n    useToken_1.useToken();\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(CardsList_1.CardsList, null)))));\r\n}\r\nexports.App = root_1.hot(function () {\r\n    return react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(AppComponent, null));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction usePostsData() {\r\n    var arrPosts = [];\r\n    var _a = react_1.useState(arrPosts), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token.token; });\r\n    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];\r\n    react_1.useEffect(function () {\r\n        if (token.length > 0 && token !== 'undefined') {\r\n            setLoading(true);\r\n            axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n                headers: { Authorization: \"bearer \" + token },\r\n            })\r\n                .then(function (resp) {\r\n                var postsData = resp.data.data.children;\r\n                postsData.forEach(function (obj) {\r\n                    var newobj = {\r\n                        author: obj.data.author,\r\n                        postTitle: obj.data.title,\r\n                        postImg: obj.data.thumbnail,\r\n                        postLink: obj.data.url,\r\n                        postCreated: obj.data.created,\r\n                        icon: obj.data.sr_detail.icon_img,\r\n                        postID: obj.data.id,\r\n                        userLink: obj.data.url_overridden_by_dest,\r\n                        karmaCount: obj.data.ups,\r\n                        subreddit: obj.data.subreddit,\r\n                    };\r\n                    arrPosts.push(newobj);\r\n                });\r\n                setData(arrPosts);\r\n            })\r\n                .catch(function (err) {\r\n                console.log(err);\r\n            })\r\n                .finally(function () { return setLoading(false); });\r\n        }\r\n    }, [token]);\r\n    return [data, loading];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/shared/Context/postsContext.jsx":
/*!*********************************************!*\
  !*** ./src/shared/Context/postsContext.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var _b = usePostsData_1.usePostsData(), data = _b[0], loading = _b[1];\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: true, data: true }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/postsContext.jsx?");

/***/ })

})