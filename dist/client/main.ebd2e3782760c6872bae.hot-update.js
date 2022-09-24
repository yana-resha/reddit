webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar postsContext_1 = __webpack_require__(/*! ../Context/postsContext */ \"./src/shared/Context/postsContext.jsx\");\r\nfunction CardsList() {\r\n    var posts = react_1.useContext(postsContext_1.postsContext);\r\n    console.log(posts);\r\n    // const token = useSelector<RootState, string>(state => state.token.token);\r\n    // const bottomOfList = useRef<HTMLDivElement>(null);\r\n    // let cards;\r\n    // if (posts.length > 0) {\r\n    //   cards = Array.from(posts).map(el => {\r\n    //     return <CommentListProvider key={el.postID} children={<Card {...el} key={el.postID}></Card>} postID={el.postID} subreddit={el.subreddit}></CommentListProvider>\r\n    //   })\r\n    // }\r\n    // useEffect(() => {\r\n    //   const observer = new IntersectionObserver(() => {\r\n    //     console.log('load posts')\r\n    //   }, {\r\n    //     rootMargin: '10px',\r\n    //   });\r\n    //   if (bottomOfList.current) {\r\n    //     observer.observe(bottomOfList.current);\r\n    //   }\r\n    //   return () => {\r\n    //     if (bottomOfList.current) {\r\n    //       observer.unobserve(bottomOfList.current);\r\n    //     }\r\n    //   }\r\n    // }, [bottomOfList.current])\r\n    // return (\r\n    //   <ul className={styles.cardsList}>\r\n    //     {posts.length === 0 && token.length === 0 && (<li style={{textAlign: 'center'}}>авторизуйтесь...</li>)}\r\n    //     {posts.length === 0 && token.length > 0 && (<li style={{textAlign: 'center'}}>загрузка...</li>)}\r\n    //     {posts.length > 0 && (cards)}\r\n    //     <div ref={bottomOfList}/>\r\n    //   </ul>\r\n    // )\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

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