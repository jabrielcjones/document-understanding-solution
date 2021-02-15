module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "4F+t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZYCm");


/***/ }),

/***/ "8i0C":
/***/ (function(module, exports) {

module.exports = {
	"container": "container-1KvJl",
	"modal": "modal-23ISF",
	"closeButton": "closeButton-1UzpB",
	"content": "content-3R9YY"
};

/***/ }),

/***/ "8wsC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUTTON_PALETTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_link_generators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ure5");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Fdx0");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/





const BUTTON_PALETTES = ['black', 'blue', 'orange'];
function Button(_ref) {
  let {
    children,
    className,
    disabled = false,
    inverted = false,
    link,
    onClick = null,
    palette = 'orange',
    simple = false
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "disabled", "inverted", "link", "onClick", "palette", "simple"]);

  const _ref2 = link || {},
        {
    target
  } = _ref2,
        linkProps = _objectWithoutProperties(_ref2, ["target"]);

  const buttonClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Button_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button, _Button_scss__WEBPACK_IMPORTED_MODULE_4___default.a[palette], className, {
    [_Button_scss__WEBPACK_IMPORTED_MODULE_4___default.a.disabled]: disabled,
    [_Button_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inverted]: inverted && !simple,
    [_Button_scss__WEBPACK_IMPORTED_MODULE_4___default.a.simple]: simple
  });
  onClick = disabled ? () => false : onClick;

  if (otherProps.href) {
    return __jsx("a", _extends({
      className: buttonClassNames,
      target: target || null,
      tabIndex: disabled ? -1 : null
    }, otherProps), children);
  }

  return !disabled && link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, linkProps, __jsx("a", _extends({
    className: buttonClassNames,
    target: target || null,
    tabIndex: disabled ? -1 : null
  }, otherProps), children)) : __jsx("button", _extends({
    className: buttonClassNames,
    onClick: onClick,
    tabIndex: disabled ? -1 : null
  }, otherProps), children);
}

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("a4i1");

var _router2 = __webpack_require__("bBV7");

var _useIntersection = __webpack_require__("hY8M");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "DOZ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return documentSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return documentsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lensDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lensDocument; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rEeI");
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

 // Document Schemas

const documentSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('documents', {}, {
  idAttribute: 'documentId'
});
const documentsSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Array(documentSchema); // Document Lenses

const lensDocuments = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(['entities', 'documents']);
const lensDocument = id => Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(['entities', 'documents', id]); // Initial Data

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "Ds/H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lensSampleDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lensSampleCollections; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

const lensSampleDocuments = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(["entities", "sampleDocuments", "single"]);
const lensSampleCollections = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(["entities", "sampleDocuments", "collections"]);
/* harmony default export */ __webpack_exports__["a"] = ({
  single: {
    expense: {
      id: "expense.png",
      object: "public/samples/Misc/expense.png",
      title: "Expense Report",
      previewImage: "/static/images/sample-previews/expense.png"
    },
    employment: {
      id: "employmentapp.pdf",
      object: "public/samples/Research/employmentapp.png",
      title: "Employment App",
      previewImage: "/static/images/sample-previews/employmentapp.png"
    },
    management: {
      id: "management.png",
      object: "public/samples/Misc/management.png",
      title: "Management Report",
      previewImage: "/static/images/sample-previews/management.png"
    }
  },
  collections: {
    finance: {
      id: "finance",
      title: "Finance",
      previewImage: "/static/images/sample-previews/Lacey city bonds.png",
      objects: ["public/samples/Finance/Lacey city bonds.png", "public/samples/Finance/Spokane accounting.png", "public/samples/Finance/USDC balance sheet.png", "public/samples/Finance/USDE balance sheet.png"]
    },
    medical: {
      id: "medical",
      title: "Medical",
      previewImage: "/static/images/sample-previews/history.png",
      objects: ["public/samples/Medical/HIPAA Release Form.pdf", "public/samples/Medical/Medical History Form.png", "public/samples/Medical/Medical Insurance Claim Form.pdf", "public/samples/Medical/Medical Progress Tracker.png"]
    }
  }
});

/***/ }),

/***/ "Ef8z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_SELECTED_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_HEADER_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_SELECTED_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DISMISS_WALKTHROUGH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SUBMIT_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SUBMIT_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REDACT_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HIGHLIGHT_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SUBMIT_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_CURRENT_PAGE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_DOCUMENTS_NEXT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_DOCUMENT_SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_SEARCH_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_DOCUMENT_SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_SEARCH_PERSONA; });
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/
const SET_SELECTED_TRACK = 'ui/SET_SELECTED_TRACK';
const SET_HEADER_PROPS = 'ui/SET_HEADER_PROPS';
const SET_SELECTED_SEARCH = 'ui/SET_SELECTED_SEARCH';
const DISMISS_WALKTHROUGH = 'ui/DISMISS_WALKTHROUGH';
const SUBMIT_DOCUMENT = 'api/SUBMIT_DOCUMENT';
const SUBMIT_DOCUMENTS = 'api/SUBMIT_DOCUMENTS';
const FETCH_DOCUMENTS = 'api/FETCH_DOCUMENTS';
const FETCH_DOCUMENT = 'api/FETCH_DOCUMENT';
const REDACT_DOCUMENT = 'api/REDACT_DOCUMENT';
const HIGHLIGHT_DOCUMENT = 'api/HIGHLIGHT_DOCUMENT';
const SEARCH = 'api/SEARCH';
const CLEAR_SEARCH_RESULTS = 'searchResults/CLEAR';
const SUBMIT_FEEDBACK = 'api/SUBMIT_FEEDBACK';
const SET_CURRENT_PAGE_NUMBER = 'meta/SET_CURRENT_PAGE_NUMBER';
const SET_DOCUMENTS_NEXT_TOKEN = 'meta/SET_DOCUMENTS_NEXT_TOKEN';
const SET_SEARCH_QUERY = 'meta/SET_SEARCH_QUERY';
const SET_DOCUMENT_SEARCH_QUERY = 'meta/SET_DOCUMENT_SEARCH_QUERY';
const SET_SEARCH_STATUS = 'meta/SET_SEARCH_STATUS';
const CLEAR_SEARCH_QUERY = 'meta/CLEAR_SEARCH_QUERY';
const CLEAR_DOCUMENT_SEARCH_QUERY = 'meta/CLEAR_DOCUMENT_SEARCH_QUERY';
const SET_SEARCH_PERSONA = 'meta/SET_SEARCH_PERSONA';

/***/ }),

/***/ "Fdx0":
/***/ (function(module, exports) {

module.exports = {
	"button": "button-2VOdS",
	"black": "black-D58u7",
	"inverted": "inverted-2z-TJ",
	"blue": "blue-27g0O",
	"orange": "orange-1sIOz",
	"simple": "simple-2f_EP",
	"disabled": "disabled-iDs-S"
};

/***/ }),

/***/ "Hw2/":
/***/ (function(module, exports) {

module.exports = {
	"loading": "loading-6CqM9",
	"overlay": "overlay-3k6WJ"
};

/***/ }),

/***/ "IUpE":
/***/ (function(module, exports) {

module.exports = require("react-webcam");

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "Om8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8i0C");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/



function Modal({
  title,
  children,
  onRequestClose
}) {
  const stopProp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.stopPropagation();
  }, []);
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(__jsx("div", {
    className: _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    onClick: onRequestClose
  }, __jsx("div", {
    className: _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal,
    onClick: stopProp
  }, __jsx("header", null, __jsx("h2", null, title), __jsx("a", {
    className: _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.closeButton,
    onClick: onRequestClose
  }, __jsx("svg", {
    width: 20,
    height: 20
  }, __jsx("path", {
    d: "M5,5l10,10M5,15l10,-10"
  })))), __jsx("div", {
    className: _Modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content
  }, children))), document.body);
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "PsvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "QIr3":
/***/ (function(module, exports) {

module.exports = {
	"cameraCapture": "cameraCapture-18AOt",
	"button": "button-L6BQy",
	"cancel": "cancel-2BdaX"
};

/***/ }),

/***/ "R9gd":
/***/ (function(module, exports) {

module.exports = {
	"fileUpload": "fileUpload-1ojNU",
	"instructions": "instructions-jrGdg",
	"limits": "limits-rTV_L",
	"dragActive": "dragActive-2Ttru"
};

/***/ }),

/***/ "RxAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Ure5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linkShape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeDocumentLink; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

/**
 * Reusable shape to use for propType validation. Any component that uses the
 * <Link> component should accept a `link` prop that is an object of this shape.
 *
 * For example:
 * ```
 * import { linkShape } from '../../utils/link-generators.js'
 *
 * static propTypes = {
 *   link: PropTypes.shape(linkShape)
 * }
 * ```
 */

const linkShape = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['_blank'])
};
/**
 * The following functions generate link objects for various entities. These
 * objects are meant to be passed to a Link component from next.js, i.e. these
 * link objects represent the props passed to the Link component.
 *
 * For example:
 * ```
 * import Link from 'next/link'
 * import { makeDocumentLink } from '../../utils/link-generators.js'
 *
 * ...
 *
 * <Link {...makeDocumentLink('some-document-id')}>
 * ```
 */

/**
 * Generate a document link.
 *
 * @param  {String} id  The id of the document
 * @return {Object}     An object with a shape of `linkShape`
 */

function makeDocumentLink(id) {
  if (!id) {
    throw new Error(`You must pass an id argument to makeDocumentLink. Received ${id}`);
  }

  return {
    href: `/documents/view?id=${id}`
  };
}

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("PsvV"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "ZYCm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__("xg6E");
var v4_default = /*#__PURE__*/__webpack_require__.n(v4_);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: ./components/Button/Button.js
var Button = __webpack_require__("8wsC");

// EXTERNAL MODULE: ./components/Modal/Modal.js
var Modal = __webpack_require__("Om8d");

// CONCATENATED MODULE: ./components/ModalContext/ModalContext.js
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

const ModalContext = /*#__PURE__*/Object(external_react_["createContext"])();
/* harmony default export */ var ModalContext_ModalContext = (ModalContext);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-webcam"
var external_react_webcam_ = __webpack_require__("IUpE");
var external_react_webcam_default = /*#__PURE__*/__webpack_require__.n(external_react_webcam_);

// EXTERNAL MODULE: ./components/CameraCapture/CameraCapture.scss
var CameraCapture = __webpack_require__("QIr3");
var CameraCapture_default = /*#__PURE__*/__webpack_require__.n(CameraCapture);

// CONCATENATED MODULE: ./components/CameraCapture/CameraCapture.js
var __jsx = external_react_default.a.createElement;

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/





const videoConstraints = {
  facingMode: 'environment'
};

function CameraCapture_CameraCapture({
  onCapture,
  onCancel
}) {
  const webcam = Object(external_react_["useRef"])();
  const capture = Object(external_react_["useCallback"])(() => {
    const canvas = webcam.current.getCanvas();
    canvas.toBlob(blob => {
      onCapture(blob);
    }, 'image/jpeg');
  }, [onCapture]);
  return /*#__PURE__*/external_react_dom_default.a.createPortal(__jsx("div", {
    className: CameraCapture_default.a.cameraCapture
  }, __jsx(external_react_webcam_default.a, {
    ref: webcam,
    audio: false,
    screenshotFormat: "image/jpeg",
    videoConstraints: videoConstraints
  }), __jsx("div", null, __jsx("button", {
    className: CameraCapture_default.a.button,
    onClick: capture
  }), __jsx(Button["b" /* default */], {
    className: CameraCapture_default.a.cancel,
    simple: true,
    onClick: onCancel
  }, "Cancel"))), document.body);
}

/* harmony default export */ var components_CameraCapture_CameraCapture = (CameraCapture_CameraCapture);
// EXTERNAL MODULE: ./store/entities/documents/actions.js
var actions = __webpack_require__("wopQ");

// EXTERNAL MODULE: ./store/entities/meta/actions.js
var meta_actions = __webpack_require__("qjZw");

// EXTERNAL MODULE: ./components/FileUpload/FileUpload.scss
var FileUpload = __webpack_require__("R9gd");
var FileUpload_default = /*#__PURE__*/__webpack_require__.n(FileUpload);

// CONCATENATED MODULE: ./components/FileUpload/FileUpload.js
var FileUpload_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/
















const {
  publicRuntimeConfig: {
    isROMode
  }
} = config_default()();

function FileUpload_FileUpload({
  dispatch
}) {
  const {
    0: canUseCamera,
    1: setCanUseCamera
  } = Object(external_react_["useState"])({});
  const {
    0: cameraCapturing,
    1: setCameraCapturing
  } = Object(external_react_["useState"])(false);
  const {
    0: fileStatus,
    1: setFileStatus
  } = Object(external_react_["useState"])({});
  const {
    0: uploadStatus,
    1: setUploadStatus
  } = Object(external_react_["useState"])('');
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])({});
  const {
    modal,
    setModal
  } = isROMode === "true" ? Object(external_react_["useContext"])(ModalContext_ModalContext) : Object(external_react_["useState"])('');
  const fileNames = Object.keys(files); // Aggregate upload statuses

  const isUploadPending = uploadStatus === 'pending';
  const isUploadSuccessful = uploadStatus === 'success';
  const isUploadFailed = uploadStatus === 'error';
  const isReadyToUpload = !uploadStatus;
  Object(external_react_["useEffect"])(() => {
    const md = window.navigator && navigator.mediaDevices;

    if (!md || !md.enumerateDevices) {
      setCanUseCamera(false);
    } else {
      md.enumerateDevices().then(devices => {
        setCanUseCamera(devices.some(device => device.kind === 'videoinput'));
      });
    }
  }, []); // Configure dropzone

  const onDrop = Object(external_react_["useCallback"])(acceptedFiles => {
    if (isROMode === 'true') {
      setModal(true);
    } else {
      const fileMap = {};
      setUploadStatus('');
      acceptedFiles.forEach(file => {
        fileMap[file.name] = file;
      });
      setFiles(files => _objectSpread(_objectSpread({}, files), fileMap));
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(external_react_dropzone_["useDropzone"])({
    onDrop,
    disabled: !isReadyToUpload
  });
  /**
  * Handle clicks on the select documents CTA when the mode is Demonstration Mode
  *
  */

  const handleSelectDocumentsClickDemoOnly = Object(external_react_["useCallback"])(() => {
    setModal(true);
  }, []); // Dynamic class names

  const fileUploadClassNames = external_classnames_default()(FileUpload_default.a.fileUpload, {
    [FileUpload_default.a.dragActive]: isDragActive
  });
  /**
   * Click handler for upload button
   */

  const handleUploadClick = Object(external_react_["useCallback"])(() => {
    // Set aggregate status
    setUploadStatus('pending'); // Upload files

    const uploads = uploadFiles({
      fileNames,
      files,

      onProgress({
        fileName,
        progress
      }) {
        setFileStatus(fileStatus => _objectSpread(_objectSpread({}, fileStatus), {
          [fileName]: {
            progress: `${Math.min(Math.round(progress.loaded / progress.total * 100), 99)}%`
          }
        }));
      },

      onSuccess({
        result,
        fileName
      }) {
        return dispatch(Object(actions["h" /* submitDocument */])({
          key: `public/${result.key}`
        })).then(() => {
          setFileStatus(fileStatus => _objectSpread(_objectSpread({}, fileStatus), {
            [fileName]: {
              success: true
            }
          }));
        });
      },

      onError({
        fileName
      }) {
        setFileStatus(fileStatus => _objectSpread(_objectSpread({}, fileStatus), {
          [fileName]: {
            error: true
          }
        }));
      }

    }); // Set aggregate status based on result of upload promises

    Promise.all(uploads).then(() => {
      dispatch(Object(meta_actions["b" /* clearSearchQuery */])());
      setUploadStatus('success');
    }).catch(error => {
      setUploadStatus('error');
    });
  }, [dispatch, fileNames, files]);
  /**
   * Delete a file
   *
   * @param {String} fileName The name of the file to delete
   */

  function deleteFile(fileName) {
    setFiles((_ref) => {
      let files = Object.assign({}, _ref);
      return delete files[fileName] && files;
    });
  }

  const startCamera = Object(external_react_["useCallback"])(() => {
    setCameraCapturing(true);
  }, []);
  const cameraCaptured = Object(external_react_["useCallback"])(blob => {
    setCameraCapturing(false);
    const datestring = Object(external_date_fns_["format"])(new Date(), 'YYYYMMDDHHmmss');
    const filename = `cameracapture-${datestring}.jpg`;
    setFiles(files => _objectSpread(_objectSpread({}, files), {}, {
      [filename]: blob
    }));
  }, []);

  if (isROMode === "true") {
    return FileUpload_jsx("div", null, FileUpload_jsx("div", getRootProps({
      className: fileUploadClassNames,
      onClick: handleSelectDocumentsClickDemoOnly,
      tabIndex: -1
    }), FileUpload_jsx("input", getInputProps({
      disabled: true
    })), FileUpload_jsx("img", {
      src: "/static/images/icon_file-upload.svg",
      alt: "File Upload Icon"
    }), isDragActive && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Drop the documents here..."), !isDragActive && isReadyToUpload && FileUpload_jsx(external_react_default.a.Fragment, null, FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Drag and drop files or ", FileUpload_jsx("em", {
      tabIndex: "0"
    }, "Choose documents")), isReadyToUpload && FileUpload_jsx("p", {
      className: FileUpload_default.a.limits
    }, "Accepts JPG/PNG (max 5MB) and PDF (max 150 MB, max 200 pages)"), canUseCamera && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "or ", FileUpload_jsx(Button["b" /* default */], {
      onClick: () => setModal(true)
    }, "use your camera")))));
  } else {
    return FileUpload_jsx("div", getRootProps({
      className: fileUploadClassNames,
      onClick: handleSelectDocumentsClick,
      tabIndex: -1
    }), FileUpload_jsx("input", getInputProps()), FileUpload_jsx("img", {
      src: "/static/images/icon_file-upload.svg",
      alt: "File Upload Icon"
    }), isDragActive && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Drop the documents here..."), !isDragActive && isReadyToUpload && FileUpload_jsx(external_react_default.a.Fragment, null, FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Drag and drop files or ", FileUpload_jsx("em", {
      tabIndex: "0"
    }, "Choose documents")), isReadyToUpload && FileUpload_jsx("p", {
      className: FileUpload_default.a.limits
    }, "Accepts JPG/PNG (max 5MB) and PDF (max 150 MB, max 200 pages)"), canUseCamera && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "or ", FileUpload_jsx(Button["b" /* default */], {
      onClick: startCamera
    }, "use your camera"))), isUploadPending && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Uploading..."), isUploadSuccessful && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Done!"), isUploadFailed && FileUpload_jsx("p", {
      className: FileUpload_default.a.instructions
    }, "Something went wrong, please refresh and try again."), !!fileNames.length && FileUpload_jsx(external_react_["Fragment"], null, FileUpload_jsx("ul", null, fileNames.map(fileName => {
      const status = fileStatus[fileName] || {};
      const {
        success,
        error,
        progress
      } = status;
      return FileUpload_jsx("li", {
        key: fileName
      }, isReadyToUpload && FileUpload_jsx("img", {
        src: "/static/images/icon_document.svg",
        alt: "Document Icon"
      }), !success && !error && progress && FileUpload_jsx("span", null, progress), success && FileUpload_jsx("img", {
        src: "/static/images/icon_success.svg",
        alt: "Success Icon"
      }), error && FileUpload_jsx("img", {
        src: "/static/images/icon_error.svg",
        alt: "Error Icon"
      }), fileName, isReadyToUpload && FileUpload_jsx("svg", {
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: () => deleteFile(fileName)
      }, FileUpload_jsx("path", {
        d: "m12 10.5857864 5.2928932-5.29289318c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356l-5.2928932 5.29289322 5.2928932 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-5.2928932-5.2928932-5.29289322 5.2928932c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l5.29289318-5.2928932-5.29289318-5.29289322c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0z"
      })));
    })), isReadyToUpload && FileUpload_jsx(Button["b" /* default */], {
      inverted: true,
      onClick: handleUploadClick
    }, "Upload"), !isReadyToUpload && FileUpload_jsx(Button["b" /* default */], {
      inverted: true,
      disabled: !isUploadSuccessful,
      link: {
        href: '/documents'
      }
    }, "Continue")), cameraCapturing && FileUpload_jsx(components_CameraCapture_CameraCapture, {
      onCapture: cameraCaptured,
      onCancel: () => setCameraCapturing(false)
    }));
  }
}

/* harmony default export */ var components_FileUpload_FileUpload = (Object(external_react_redux_["connect"])()(FileUpload_FileUpload));

async function isUUIdPresentInS3(documentUUID) {
  var s3ListPromise = external_aws_amplify_["Storage"].list(`${documentUUID}/`).then(result => {
    return result;
  });
  let s3Result = await s3ListPromise;
  return s3Result.length > 0;
}

async function getUniqueDocumentId() {
  let documentUUID = v4_default()();

  if (await isUUIdPresentInS3(documentUUID)) {
    return getUniqueDocumentId();
  } else {
    return documentUUID;
  }
}
/**
 * Upload files to S3. NOTE: Amplify does not allow you to upload multiple files
 * in a single call, which is why this function runs a loop to make a call for each file.
 *
 * @param {Object}   config             An object of configs
 * @param {Array}    config.fileNames   An array of file names
 * @param {Object}   config.files       An object of files where the keys are the file names
 * @param {Function} config.onSuccess   A callback that fires on success of a single upload
 * @param {Function} config.onError     A callback that fires on error of a single upload
 * @param {Function} config.onProgress  A callback that fires on progress of a single upload
 */


function uploadFiles({
  fileNames = [],
  files = {},
  onSuccess,
  onError,
  onProgress
}) {
  const fileLengthExceeded = Boolean(fileNames.length > 100);

  if (fileLengthExceeded) {
    alert(" Supported no. of files upload limit : less than 100");
  }

  return fileNames.map(fileName => {
    const file = files[fileName];

    if (fileLengthExceeded) {
      return onError({
        fileName
      });
    }

    if (!["application/pdf", "image/png", "image/jpeg"].includes(file.type)) {
      alert(fileName + " : Supported file formats : JPG,PNG,PDF");
      return onError({
        fileName
      });
    }

    if (file.type == "application/pdf" && file.size / 1000000 >= 150) {
      //Maximum File size supported is 150MB
      alert(fileName + " : Supported PDF size : less than 150MB");
      return onError({
        fileName
      });
    }

    if (["image/png", "image/jpeg"].includes(file.type) && file.size / 1000000 >= 5) {
      //Maximum File size supported is 5MB
      alert(fileName + " : Supported Image size : less than 5MB");
      return onError({
        fileName
      });
    }

    onProgress({
      progress: {
        loaded: 0,
        total: file.size || 100
      },
      fileName,
      file
    });
    getUniqueDocumentId().then(result => {
      const key = [result, fileName].join('/');
      external_aws_amplify_["Storage"].put(key, file, {
        progressCallback(progress) {
          onProgress({
            progress,
            fileName,
            file
          });
        }

      }).then(result => {
        return onSuccess({
          result,
          fileName,
          file
        });
      }).catch(error => {
        onError({
          error,
          fileName,
          file
        });
        throw error;
      });
    });
  });
}
/**
 * Handle clicks on the select documents CTA
 *
 * @param {Object} e Event object
 */


function handleSelectDocumentsClick(e) {
  e.preventDefault();
  e.target.tagName.toLowerCase() !== 'em' && e.stopPropagation();
}
// EXTERNAL MODULE: ./pages/select.scss
var pages_select = __webpack_require__("tILf");
var select_default = /*#__PURE__*/__webpack_require__.n(pages_select);

// EXTERNAL MODULE: ./components/ContextModal/ContextModal.scss
var ContextModal = __webpack_require__("dbE+");
var ContextModal_default = /*#__PURE__*/__webpack_require__.n(ContextModal);

// CONCATENATED MODULE: ./components/ContextModal/ContextModal.js
var ContextModal_jsx = external_react_default.a.createElement;

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/



function ContextModal_Modal({
  children,
  onClose,
  show,
  modalTitle
}) {
  const modalClassNames = external_classnames_default()(ContextModal_default.a.modal);

  if (!show) {
    return null;
  }

  return show && ContextModal_jsx("div", {
    className: ContextModal_default.a.modal,
    id: "modal"
  }, ContextModal_jsx("div", {
    className: ContextModal_default.a.modal__content
  }, ContextModal_jsx("h4", null, modalTitle), ContextModal_jsx("div", {
    className: ContextModal_default.a.content
  }, ContextModal_jsx("p", null, children)), ContextModal_jsx("div", {
    className: ContextModal_default.a.actions
  }, ContextModal_jsx("button", {
    className: "toggle-button",
    onClick: onClose
  }, "OK"))));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: ./store/entities/sampleDocuments/data.js
var data = __webpack_require__("Ds/H");

// CONCATENATED MODULE: ./store/entities/sampleDocuments/selectors.js
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/


const getSampleDocuments = state => Object(external_ramda_["values"])(Object(external_ramda_["view"])(data["c" /* lensSampleDocuments */], state));
const getSampleCollections = state => Object(external_ramda_["values"])(Object(external_ramda_["view"])(data["b" /* lensSampleCollections */], state));
// EXTERNAL MODULE: ./components/SampleCollections/SampleCollections.scss
var SampleCollections = __webpack_require__("ssEL");
var SampleCollections_default = /*#__PURE__*/__webpack_require__.n(SampleCollections);

// EXTERNAL MODULE: ./components/Loading/Loading.js
var Loading = __webpack_require__("jlXy");

// CONCATENATED MODULE: ./components/SampleCollections/SampleCollections.js
var SampleCollections_jsx = external_react_default.a.createElement;

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/












function SampleCollections_SampleCollections({
  dispatch,
  sampleDocuments,
  sampleCollections
}) {
  const {
    0: previewDoc,
    1: setPreviewDoc
  } = Object(external_react_["useState"])(null);
  return SampleCollections_jsx("div", null, SampleCollections_jsx("ul", {
    className: SampleCollections_default.a.list
  }, sampleDocuments.map(({
    id,
    object,
    title,
    previewImage
  }) => {
    const submitAction = () => Object(actions["h" /* submitDocument */])({
      sample: true,
      key: object
    });

    return SampleCollections_jsx("li", {
      key: id,
      className: SampleCollections_default.a.item
    }, SampleCollections_jsx("div", {
      className: SampleCollections_default.a.doc
    }, SampleCollections_jsx("img", {
      src: previewImage,
      onClick: () => setPreviewDoc({
        id,
        object,
        title,
        previewImage,
        submitAction
      })
    })), title, SampleCollections_jsx(AddButton, {
      action: () => dispatch(submitAction())
    }));
  }), sampleCollections.map(({
    id,
    objects,
    title,
    previewImage
  }) => {
    const submitAction = () => Object(actions["i" /* submitDocuments */])({
      objects: objects.map(x => ({
        sample: true,
        key: x
      }))
    });

    return SampleCollections_jsx("li", {
      key: id,
      className: external_classnames_default()(SampleCollections_default.a.item, SampleCollections_default.a.collection)
    }, SampleCollections_jsx("div", {
      className: SampleCollections_default.a.docPile
    }, SampleCollections_jsx("div", {
      className: SampleCollections_default.a.doc
    }, SampleCollections_jsx("img", {
      src: previewImage,
      onClick: () => setPreviewDoc({
        id,
        objects,
        title,
        previewImage,
        submitAction
      })
    })), SampleCollections_jsx("div", {
      className: SampleCollections_default.a.doc
    }), SampleCollections_jsx("div", {
      className: SampleCollections_default.a.doc
    })), title, SampleCollections_jsx("br", null), "(", objects.length, " documents)", SampleCollections_jsx(AddButton, {
      action: () => dispatch(submitAction())
    }));
  })), previewDoc ? /*#__PURE__*/external_react_dom_default.a.createPortal(SampleCollections_jsx("div", {
    className: SampleCollections_default.a.previewDoc
  }, SampleCollections_jsx("img", {
    src: previewDoc.previewImage
  }), SampleCollections_jsx("div", {
    className: SampleCollections_default.a.details
  }, SampleCollections_jsx("h3", null, previewDoc.title), previewDoc.object ? SampleCollections_jsx("p", null, previewDoc.object.split('/').pop()) : SampleCollections_jsx("p", null, previewDoc.objects.length, " documents"), SampleCollections_jsx("p", null, SampleCollections_jsx(AddButton, {
    simple: false,
    action: () => dispatch(previewDoc.submitAction())
  })), SampleCollections_jsx("p", null, SampleCollections_jsx(Button["b" /* default */], {
    simple: true,
    onClick: () => setPreviewDoc(null)
  }, "Cancel")))), document.body) : null);
}

/* harmony default export */ var components_SampleCollections_SampleCollections = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    sampleDocuments: getSampleDocuments(state),
    sampleCollections: getSampleCollections(state)
  };
})(SampleCollections_SampleCollections));

function AddButton({
  action,
  simple = true
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: pending,
    1: setPending
  } = Object(external_react_["useState"])(false);
  return SampleCollections_jsx(Button["b" /* default */], {
    className: external_classnames_default()(SampleCollections_default.a.spinnerButton, pending && SampleCollections_default.a.pending),
    simple: simple,
    disabled: pending,
    onClick: () => {
      setPending(true);
      action().then(() => {
        dispatch(Object(meta_actions["b" /* clearSearchQuery */])());
        dispatch(Object(actions["f" /* fetchDocuments */])());
        router_default.a.push('/documents');
      });
    }
  }, SampleCollections_jsx("span", null, SampleCollections_jsx(Loading["a" /* default */], {
    overlay: false,
    size: 18,
    color: "currentColor",
    thickness: 6
  })), "Add");
}
// CONCATENATED MODULE: ./pages/select.js
var select_jsx = external_react_default.a.createElement;

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/









const {
  publicRuntimeConfig: {
    isROMode: select_isROMode
  }
} = config_default()();

function Select({
  dispatch
}) {
  if (select_isROMode === 'true') {
    const [modal, setModal] = external_react_default.a.useState(false);
    return select_jsx(ModalContext_ModalContext.Provider, {
      value: {
        modal: modal,
        setModal: setModal
      }
    }, select_jsx(ContextModal_Modal, {
      onClose: () => setModal(false),
      show: modal,
      modalTitle: "Cannot Upload Your Own Documents - Read Only Mode"
    }, "This DUS instance is running in Read-Only Mode which does not support uploading your own documents. To use all the features of DUS, please deploy your own instance following the instructions", select_jsx("a", {
      href: "https://github.com/awslabs/document-understanding-solution"
    }, " here.")), select_jsx("div", {
      className: select_default.a.select
    }, select_jsx("p", null, select_jsx(Button["b" /* default */], {
      inverted: true,
      link: {
        href: '/documents'
      }
    }, "View Existing Documents")), select_jsx("h2", null, "Add some example documents"), select_jsx(components_SampleCollections_SampleCollections, null), select_jsx("h2", null, "Or Upload your own documents"), select_jsx(components_FileUpload_FileUpload, null)));
  } else {
    return select_jsx("div", {
      className: select_default.a.select
    }, select_jsx("p", null, select_jsx(Button["b" /* default */], {
      inverted: true,
      link: {
        href: '/documents'
      }
    }, "View Existing Documents")), select_jsx("h2", null, "Upload your own documents"), select_jsx(components_FileUpload_FileUpload, null), select_jsx("h2", null, "Or add some example documents"), select_jsx(components_SampleCollections_SampleCollections, null));
  }
}

Select.getInitialProps = function () {
  return {
    pageTitle: 'Upload documents'
  };
};

/* harmony default export */ var pages_select_0 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {};
})(Select));

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Plc0");

var _routeLoader = __webpack_require__("RxAv");

var _denormalizePagePath = __webpack_require__("yExG");

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("4F+t"));

var _isDynamic = __webpack_require__("BCwt");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _querystring = __webpack_require__("PsvV");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("lxQX"));

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dbE+":
/***/ (function(module, exports) {

module.exports = {
	"modal": "modal-1TUva",
	"modal__content": "modal__content-39shK",
	"off": "off-dKD9-",
	"content": "content-15SbB",
	"actions": "actions-3EdT-",
	"centered-toggle-button": "centered-toggle-button-1lxwa"
};

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("z4BS");

var _querystring = __webpack_require__("PsvV");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hY8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "jlXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Hw2/");
/* harmony import */ var _Loading_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/



Loading.defaultProps = {
  overlay: true,
  size: 96,
  color: '#aab7b8',
  thickness: 2
};
function Loading(_ref) {
  let {
    className,
    overlay,
    color,
    size,
    thickness
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "overlay", "color", "size", "thickness"]);

  const loadingClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Loading_scss__WEBPACK_IMPORTED_MODULE_2___default.a.loading, className, {
    [_Loading_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay]: overlay
  });
  return __jsx("div", _extends({
    className: loadingClassNames
  }, rest), __jsx("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, __jsx("circle", {
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    r: "48",
    strokeDasharray: "226.1946710584651 77.39822368615503",
    transform: "rotate(239.89 50 50)"
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 50 50;360 50 50",
    keyTimes: "0;1",
    dur: "0.8s",
    begin: "0s",
    repeatCount: "indefinite"
  }))));
}

/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "pksY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "qjZw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCurrentPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setDocumentsNextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setDocumentSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearDocumentSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setSearchStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setSearchPersona; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ef8z");
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/


/**
 * Set the current page number
 */

const setCurrentPageNumber = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_CURRENT_PAGE_NUMBER */ "j"], currentPageNumber => {
  return {
    meta: {
      currentPageNumber
    }
  };
});
/**
 * Set the documents next token
 */

const setDocumentsNextToken = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_DOCUMENTS_NEXT_TOKEN */ "k"], documentsNextToken => {
  return {
    meta: {
      documentsNextToken
    }
  };
});
/**
 * Set the search query
 */

const setSearchQuery = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_SEARCH_QUERY */ "o"], searchQuery => {
  return {
    meta: {
      searchQuery: searchQuery.replace(/ {2,}/g, ' ')
    }
  };
});
/**
 * Clear the search query
 */

const clearSearchQuery = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR_SEARCH_QUERY */ "b"], () => {
  return {
    meta: {
      searchQuery: ''
    }
  };
});
/**
 * Set the search query
 */

const setDocumentSearchQuery = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_DOCUMENT_SEARCH_QUERY */ "l"], searchQuery => {
  return {
    meta: {
      documentSearchQuery: searchQuery.replace(/ {2,}/g, ' ')
    }
  };
});
/**
 * Clear the search query
 */

const clearDocumentSearchQuery = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* CLEAR_DOCUMENT_SEARCH_QUERY */ "a"], () => {
  return {
    meta: {
      documentSearchQuery: ''
    }
  };
});
/**
 * Set the search status
 */

const setSearchStatus = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_SEARCH_STATUS */ "p"], searchStatus => {
  return {
    meta: {
      searchStatus
    }
  };
});
const setSearchPersona = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_1__[/* SET_SEARCH_PERSONA */ "n"], persona => {
  return {
    meta: {
      searchPersona: persona
    }
  };
});

/***/ }),

/***/ "rEeI":
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ssEL":
/***/ (function(module, exports) {

module.exports = {
	"list": "list-1VUBH",
	"item": "item-1lVUs",
	"doc": "doc-2EFXX",
	"docPile": "docPile-9zHkH",
	"spinnerButton": "spinnerButton-1WiNk",
	"pending": "pending-engeQ",
	"previewDoc": "previewDoc-VOeA2",
	"details": "details-1oBI2"
};

/***/ }),

/***/ "tILf":
/***/ (function(module, exports) {

module.exports = {
	"select": "select-363SV"
};

/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "wopQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return submitDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return submitDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchSingleDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addRedactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHighlights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearRedactions; });
/* unused harmony export clearHighlights */
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rEeI");
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xg6E");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ef8z");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("DOZ3");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/







const lensNextToken = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(["data", "nextToken"]);
const lensDocumentsTotal = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(["data", "Total"]);
const lensDocumentsData = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(["data", "documents"]);
const lensDocumentData = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(["data"]);
const submitDocument = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* SUBMIT_DOCUMENT */ "s"], async ({
  sample,
  key
}) => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].post("TextractDemoTextractAPI", "document", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    body: {
      sample: !!sample,
      key
    }
  });
  const data = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentData, response);
  return data;
});
const submitDocuments = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* SUBMIT_DOCUMENTS */ "t"], async ({
  objects
}) => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].post("TextractDemoTextractAPI", "document", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    body: {
      objects
    }
  });
  const data = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentData, response);
  return data;
});
/**
 * Get documents from TextractDemoTextractAPIs
 */

const fetchDocuments = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* FETCH_DOCUMENTS */ "f"], async ({
  nextToken: nexttoken
} = {}) => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].get("TextractDemoTextractAPI", "documents", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    queryStringParameters: Object(ramda__WEBPACK_IMPORTED_MODULE_1__["reject"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["either"])(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"], ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]), {
      nexttoken,
      type: "user"
    })
  });
  const documentsNextToken = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensNextToken, response) || null;
  const documentsTotal = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentsTotal, response);
  const documents = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentsData, response).map(document => _objectSpread(_objectSpread({}, document), {}, {
    documentName: document.objectName.replace(/^.*\//, "")
  }));
  const {
    entities
  } = Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])(documents, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentsSchema */ "c"]);
  const meta = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["reject"])(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"], {
    documentsNextToken,
    documentsTotal
  });
  return _objectSpread(_objectSpread({}, entities), {}, {
    meta
  });
});
const fetchSingleDocument = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* FETCH_DOCUMENT */ "e"], async documentid => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].get("TextractDemoTextractAPI", "document", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    queryStringParameters: {
      documentid
    }
  });
  const document = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentData, response);
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])(document, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});
/**
 * Get document from TextractDemoTextractAPI
 */

const fetchDocument = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* FETCH_DOCUMENT */ "e"], async documentid => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].get("TextractDemoTextractAPI", "document", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    queryStringParameters: {
      documentid
    }
  });
  const document = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["view"])(lensDocumentData, response);
  const {
    documentId,
    objectName,
    bucketName
  } = document; // Remove the last slash and everything before it

  const documentName = objectName.replace(/^.*\//, "");
  const fileNameWithoutExtension = documentName.split(".")[0]; // Amplify prepends public/ to the path, so we have to strip it

  const documentPublicSubPath = objectName.replace("public/", "");
  const resultDirectory = `${documentId}/output`;
  const textractResponsePath = `${resultDirectory}/textract/response.json`;
  const comprehendMedicalResponsePath = `${resultDirectory}/comprehend/comprehendMedicalEntities.json`;
  const comprehendResponsePath = `${resultDirectory}/comprehend/comprehendEntities.json`; // Get a pre-signed URL for the original document upload

  const [documentData, searchablePdfData] = await Promise.all([aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Storage"].get(documentPublicSubPath, {
    bucket: bucketName,
    download: true
  }), aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Storage"].get(`${resultDirectory}/${fileNameWithoutExtension}-searchable.pdf`, {
    download: true
  })]);
  const documentBlob = new Blob([documentData.Body], {
    type: documentData.contentType
  });
  const searchablePdfBlob = new Blob([searchablePdfData.Body], {
    type: "application/pdf"
  }); // Get the raw textract response data from a json file on S3

  const s3Response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Storage"].get(textractResponsePath, {
    download: true
  });
  const textractResponse = JSON.parse(s3Response.Body ? s3Response.Body.toString() : null); // Get the raw comprehend medical response data from a json file on S3

  const s3ComprehendMedicalResponse = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Storage"].get(comprehendMedicalResponsePath, {
    download: true
  });
  const comprehendMedicalRespone = JSON.parse(s3ComprehendMedicalResponse.Body ? s3ComprehendMedicalResponse.Body.toString() : null); // Get the raw comprehend response data from a json file on S3

  const s3ComprehendResponse = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Storage"].get(comprehendResponsePath, {
    download: true
  });
  const comprehendRespone = JSON.parse(s3ComprehendResponse.Body ? s3ComprehendResponse.Body.toString() : null);
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])(_objectSpread(_objectSpread({}, document), {}, {
    documentURL: URL.createObjectURL(documentBlob),
    searchablePdfURL: URL.createObjectURL(searchablePdfBlob),
    documentName,
    textractResponse,
    textractFetchedAt: Date.now(),
    comprehendMedicalRespone,
    comprehendRespone,
    resultDirectory
  }), _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});
const deleteDocument = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* FETCH_DOCUMENT */ "e"], async documentid => {
  const response = await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["API"].del("TextractDemoTextractAPI", "document", {
    headers: {
      Authorization: `Bearer ${(await aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    queryStringParameters: {
      documentid
    }
  });
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])({
    documentId: documentid,
    deleted: true
  }, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});
const addRedactions = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* REDACT_DOCUMENT */ "h"], (documentId, pageNumber, redactions) => {
  const keyedRedactions = redactions.reduce((acc, r) => {
    acc[uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()()] = r;
    return acc;
  }, {});
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])({
    documentId,
    redactions: {
      [pageNumber]: keyedRedactions
    }
  }, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});
const addHighlights = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* HIGHLIGHT_DOCUMENT */ "g"], (documentId, pageNumber, highlights) => {
  const response = Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])({
    documentId,
    highlights: highlights
  }, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
  return response;
});
const clearRedactions = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* REDACT_DOCUMENT */ "h"], documentId => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])({
    documentId,
    redactions: false
  }, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});
const clearHighlights = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types__WEBPACK_IMPORTED_MODULE_5__[/* HIGHLIGHT_DOCUMENT */ "g"], documentId => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_2__["normalize"])({
    documentId,
    highlights: []
  }, _data__WEBPACK_IMPORTED_MODULE_6__[/* documentSchema */ "b"]).entities;
});

/***/ }),

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "yExG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ })

/******/ });