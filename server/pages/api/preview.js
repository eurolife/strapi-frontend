"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);

async function handler(req, res) {
  if (req.query.secret !== (process.env.PREVIEW_SECRET || 'secret-token')) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  const pageData = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__/* .getPageData */ .um)(req.query.slug, true);

  if (!pageData) {
    return res.status(401).json({
      message: "Invalid slug"
    });
  }

  res.setPreviewData({});
  res.writeHead(307, {
    Location: `/${req.query.slug}`
  });
  res.end();
}
;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [413], () => (__webpack_exec__(855)));
module.exports = __webpack_exports__;

})();