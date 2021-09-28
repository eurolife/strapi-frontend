"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  try {
    // Clears the preview mode cookies.
    // This function accepts no arguments.
    res.clearPreviewData();
    return res.status(200).json({
      message: 'Cookies Cleared'
    });
  } catch (error) {
    return res.status(500).json({
      message: error
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(286));
module.exports = __webpack_exports__;

})();