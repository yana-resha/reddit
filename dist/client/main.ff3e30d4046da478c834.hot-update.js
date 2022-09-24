webpackHotUpdate("main",{

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction usePostsData() {\r\n    var arrPosts = [];\r\n    var dataObj = { after: '', loading: false, error: error, posts: arrPosts };\r\n    var _a = react_1.useState(dataObj), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token.token; });\r\n    react_1.useEffect(function () {\r\n        if (token.length > 0 && token !== 'undefined') {\r\n            axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n                headers: { Authorization: \"bearer \" + token },\r\n            })\r\n                .then(function (resp) {\r\n                var postsData = resp.data.data.children;\r\n                dataObj.after = resp.data.data.after;\r\n                postsData.forEach(function (obj) {\r\n                    var newobj = {\r\n                        author: obj.data.author,\r\n                        postTitle: obj.data.title,\r\n                        postImg: obj.data.thumbnail,\r\n                        postLink: obj.data.url,\r\n                        postCreated: obj.data.created,\r\n                        icon: obj.data.sr_detail.icon_img,\r\n                        postID: obj.data.id,\r\n                        userLink: obj.data.url_overridden_by_dest,\r\n                        karmaCount: obj.data.ups,\r\n                        subreddit: obj.data.subreddit,\r\n                    };\r\n                    arrPosts.push(newobj);\r\n                });\r\n                setData(dataObj);\r\n            })\r\n                .catch(function (err) {\r\n                console.log(err);\r\n            });\r\n        }\r\n    }, [token]);\r\n    return data;\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

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