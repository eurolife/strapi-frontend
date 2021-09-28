exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/components/Nav.tsx



const Nav = ({
  menu
}) => {
  const renderLink = item => {
    var _item$url2;

    if (item.new_window) {
      var _item$url;

      return /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: `/${(_item$url = item.url) !== null && _item$url !== void 0 && _item$url.length ? item.url : item.page.slug}`,
        target: "_blank",
        rel: "noopener noreferrer",
        children: item.title
      });
    }

    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/${(_item$url2 = item.url) !== null && _item$url2 !== void 0 && _item$url2.length ? item.url : item.page.slug}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: item.title
      })
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "flex",
      children: menu.item.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: renderLink(item)
      }, item.id))
    })
  });
};

/* harmony default export */ const components_Nav = (Nav);
// EXTERNAL MODULE: ./src/constants/root.tsx
var root = __webpack_require__(10);
;// CONCATENATED MODULE: ./src/layouts/index.tsx





const Layout = ({
  children,
  menu,
  global
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container flex flex-col justify-start p-4 mx-auto min-h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://eurolife.github.io/strapi-frontend/",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${root/* CMS_URL */.o}${global.logo.url}`,
          alt: global.company_name,
          style: {
            width: '150px'
          }
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Nav, {
        menu: menu
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-grow",
      children: /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-8 text-gray-400",
      children: /*#__PURE__*/jsx_runtime_.jsx("footer", {
        children: "\xA9 2021 CPR"
      })
    })]
  });
};

/* harmony default export */ const layouts = (Layout);

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;