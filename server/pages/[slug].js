"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/lib/api.ts
var api = __webpack_require__(542);
// EXTERNAL MODULE: ./src/layouts/index.tsx + 1 modules
var layouts = __webpack_require__(311);
// EXTERNAL MODULE: ./src/constants/root.tsx
var root = __webpack_require__(10);
;// CONCATENATED MODULE: external "markdown-to-jsx"
const external_markdown_to_jsx_namespaceObject = require("markdown-to-jsx");
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/pages/[slug].tsx







const Page = ({
  menu,
  page,
  preview,
  global
}) => {
  const renderComponents = item => {
    if (item.__component === 'widgets.image-and-text') {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${item.Image_side === 'right' ? 'order-2' : 'order-1'}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `${root/* CMS_URL */.o}${item.Image.url}`,
            alt: "",
            style: {
              width: '250px'
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `ml-4 ${item.Image_side === 'right' ? 'order-1' : 'order-2'}`,
          children: item.Content
        })]
      });
    } else if (item.__component === 'widgets.columned-text') {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pr-4",
          children: item.Firstcol
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: item.Secondcol
        })]
      });
    }

    return '';
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts/* default */.Z, {
    menu: menu,
    global: global,
    children: [preview ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative bg-indigo-600",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pr-16 sm:text-center sm:px-16",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "font-medium text-white",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Preview mode is on,"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "block sm:ml-2 sm:inline-block",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/api/exit-preview",
                className: "underline hover:text-cyan transition-colors",
                children: "turn off"
              })
            })]
          })
        })
      })
    }) : null, /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "font-sans-serif text-3xl my-4",
      children: page.Title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
        children: page.Content
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-4",
      children: page.Extra.length ? page.Extra.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: renderComponents(item)
      }, item.id)) : null
    })]
  });
};

async function getStaticPaths() {
  const pages = await (0,api/* fetchAPI */.Io)('/pages');
  return {
    paths: pages.map(page => ({
      params: {
        slug: page.slug
      }
    })),
    fallback: false
  };
} // export async function getStaticProps({ params }) {
//   // Run API calls in parallel
//   const [menu, page, global] = await Promise.all([
//     fetchAPI('/menu'),
//     fetchAPI(`/pages?slug=${params.slug}`),
//     fetchAPI('/global-settings')
//   ]);
//   return {
//     props: { page: page[0], menu, global },
//     revalidate: 1
//   };
// }

async function getStaticProps({
  params,
  preview = null
}) {
  const page = await (0,api/* getPageData */.um)(params.slug, preview);
  const [menu, global] = await Promise.all([(0,api/* fetchAPI */.Io)('/menu'), (0,api/* fetchAPI */.Io)('/global-settings')]);
  return {
    props: {
      menu,
      page,
      preview,
      global
    },
    revalidate: 1
  };
}
/* harmony default export */ const _slug_ = (Page);

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,413,870], () => (__webpack_exec__(900)));
module.exports = __webpack_exports__;

})();