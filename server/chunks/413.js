"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CMS_URL)
/* harmony export */ });
// export const CMS_URL = 'http://localhost:1337';
// export const CMS_URL = 'https://ec2-3-8-148-62.eu-west-2.compute.amazonaws.com';
const CMS_URL = 'https://pchwebservices.co.uk';

/***/ }),

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Io": () => (/* binding */ fetchAPI),
/* harmony export */   "um": () => (/* binding */ getPageData)
/* harmony export */ });
/* unused harmony export getStrapiURL */
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function getStrapiURL(path = '') {
  // const url = 'ec2-3-8-148-62.eu-west-2.compute.amazonaws.com';
  // const url = 'localhost:1337'
  return `${_constants_root__WEBPACK_IMPORTED_MODULE_0__/* .CMS_URL */ .o}${path}`; // return `http://localhost:1337${path}`;
} // Helper to make GET requests to Strapi

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
async function getPageData(slug, preview = false) {
  // Find the pages that match this slug
  console.log(preview);
  const pagesData = await fetchAPI(`/pages?slug=${slug}&status=published${preview ? "&status=draft" : ''}`); // Make sure we found something, otherwise return null

  if (pagesData == null || pagesData.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pagesData[0];
}

/***/ })

};
;