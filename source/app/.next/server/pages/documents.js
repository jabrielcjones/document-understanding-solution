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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+lYZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDocumentsNextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDocumentsTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDocumentSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCleanSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSearchPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSearchStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSearchTotalDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getSearchTotalMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getKendraQueryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getKendraFilteredQueryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getKendraResultCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getKendraFilteredResultCount; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wtyx");
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


const getCurrentPageNumber = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('currentPageNumber'), state);
const getDocumentsNextToken = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('documentsNextToken'), state);
const getDocumentsTotal = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('documentsTotal'), state);
const getSearchQuery = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchQuery'), state);
const getDocumentSearchQuery = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('documentSearchQuery'), state);
const getCleanSearchQuery = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchQuery')), ramda__WEBPACK_IMPORTED_MODULE_0__["trim"])(state);
const getSearchPersona = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchPersona'), state);
const getSearchStatus = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchStatus'), state);
const getSearchTotalDocuments = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchTotalDocuments'), state);
const getSearchTotalMatches = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('searchTotalMatches'), state);
const getKendraQueryId = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('kendraQueryId'), state);
const getKendraFilteredQueryId = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('kendraFilteredQueryId'), state);
const getKendraResultCount = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('kendraTotalResults'), state);
const getKendraFilteredResultCount = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* getMetaLens */ "b"])('kendraTotalFilteredResults'), state);

/***/ }),

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

/***/ "2qt2":
/***/ (function(module, exports) {

module.exports = {
	"actions": "actions-389eI",
	"personas": "personas-2b-ZW",
	"notes": "notes-3La7p",
	"stepLabel": "stepLabel-2MVjw",
	"sampleQueries": "sampleQueries-1XWtY",
	"toggleAPI": "toggleAPI-2tAln",
	"expanded": "expanded-tst52",
	"learnMore": "learnMore-1yqlw"
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hm7m");


/***/ }),

/***/ "4+Di":
/***/ (function(module, exports) {

module.exports = {
	"icon": "icon-1AdaH",
	"filename": "filename-1ZyWF",
	"extension": "extension-3lZYd",
	"processing": "processing-3VCIx",
	"ready": "ready-j3VH6",
	"failed": "failed-2UFr0",
	"deleteSpacer": "deleteSpacer-1aGJQ",
	"deleteButton": "deleteButton-1eHj1",
	"failedFileRow": "failedFileRow-1pwQ8"
};

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

/***/ "9JDX":
/***/ (function(module, exports) {

module.exports = {
	"item": "item-3HABX",
	"question": "question-2WN16",
	"expanded": "expanded-dtWg4",
	"answer": "answer-3EZXO"
};

/***/ }),

/***/ "9xRs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocumentById; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DOZ3");
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


const getDocuments = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["reverse"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('documentCreatedOn'))(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["filter"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["complement"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('deleted')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["values"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensDocuments */ "e"], state)))));
const getDocumentById = (state, id) => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensDocument */ "d"])(id), state);

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "BCp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedTrackId; });
/* unused harmony export getSelectedTrack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedSearch; });
/* unused harmony export getHasDismissedWalkthrough */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHeaderProps; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IxHd");
/* harmony import */ var _store_entities_tracks_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y/kv");
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



const getSelectedTrackId = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensSelectedTrack */ "e"], state);
const getSelectedTrack = state => Object(_store_entities_tracks_selectors__WEBPACK_IMPORTED_MODULE_2__[/* getTrackById */ "a"])(state, getSelectedTrackId(state));
const getSelectedSearch = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensSelectedSearch */ "d"], state);
const getHasDismissedWalkthrough = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensDismissedWalkthrough */ "b"], state);
const getHeaderProps = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensHeaderProps */ "c"], state);

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

/***/ "BW92":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper-3GW6F",
	"tab": "tab-2eNad",
	"selected": "selected-3aCwi"
};

/***/ }),

/***/ "Bb5g":
/***/ (function(module, exports) {

module.exports = {
	"list": "list-Lw2Vc",
	"listHeader": "listHeader-3822r",
	"leftSpace": "leftSpace-1lK4x",
	"nameHeader": "nameHeader-3HUod",
	"typeHeader": "typeHeader-3jKZI",
	"statusHeader": "statusHeader-1i6BL",
	"rightSpace": "rightSpace-12xC6"
};

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

/***/ "CliN":
/***/ (function(module, exports) {

module.exports = require("react-highlighter");

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

/***/ "DrtL":
/***/ (function(module, exports) {

module.exports = {
	"base": "base-dnbmI"
};

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

/***/ "IxHd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lensSelectedTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lensHeaderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lensSelectedSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lensDismissedWalkthrough; });
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

/* harmony default export */ __webpack_exports__["a"] = ({
  selectedTrack: 'search',
  selectedSearch: 'es',
  headerProps: {}
});
const lensSelectedTrack = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(['ui', 'selectedTrack']);
const lensHeaderProps = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(['ui', 'headerProps']);
const lensSelectedSearch = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(['ui', 'selectedSearch']);
const lensDismissedWalkthrough = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(['ui', 'dismissedWalkthrough']);

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

/***/ "LQ3n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MIN_SEARCH_QUERY_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENABLE_KENDRA; });
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
const MIN_SEARCH_QUERY_LENGTH = 4;
const ENABLE_KENDRA = "false" === 'true';

/***/ }),

/***/ "NQOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INPUT_TYPES */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormInput_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PiCl");
/* harmony import */ var _FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FormInput_scss__WEBPACK_IMPORTED_MODULE_2__);
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



const INPUT_TYPES = ['text', 'textarea', 'checkbox', 'radio', 'search', 'password'];
const FormInput = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function FormInput(_ref, ref) {
  let {
    children,
    className,
    disabled,
    error,
    label,
    type,
    light,
    white
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "disabled", "error", "label", "type", "light", "white"]);

  const statusClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.light]: !!light,
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.white]: !!white,
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.disabled]: !!disabled,
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.error]: !!error,
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hasLabel]: !!label
  });
  const inputClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input, statusClassNames);
  const labelClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a.label, className, {
    [_FormInput_scss__WEBPACK_IMPORTED_MODULE_2___default.a[type]]: type === 'search' || type === 'checkbox' || type === 'radio'
  });
  return __jsx("label", {
    className: labelClassNames
  }, (type === 'checkbox' || type === 'radio') && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", _extends({
    ref: ref,
    type: type,
    className: statusClassNames,
    disabled: disabled
  }, rest)), __jsx("span", null)), label, (type === 'text' || type === 'password') && __jsx("input", _extends({
    ref: ref,
    type: type,
    className: inputClassNames,
    disabled: disabled
  }, rest)), type === 'textarea' && __jsx("textarea", _extends({
    ref: ref,
    className: inputClassNames,
    disabled: disabled
  }, rest), children), type === 'search' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", _extends({
    type: "text",
    ref: ref,
    className: inputClassNames,
    disabled: disabled,
    enterKeyHint: "search"
  }, rest)), __jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m16.6177513 14.496431 4.8068699 4.8068699c.5857864.5857864.5857864 1.5355339 0 2.1213203s-1.5355339.5857864-2.1213203 0l-4.8068699-4.8068699c-1.2814131.8723474-2.8293751 1.3822487-4.496431 1.3822487-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8c0 1.6670559-.5099013 3.2150179-1.3822487 4.496431zm-6.6177513.503569c2.7614237 0 5-2.2385763 5-5 0-2.76142375-2.2385763-5-5-5-2.76142375 0-5 2.23857625-5 5 0 2.7614237 2.23857625 5 5 5z",
    fillRule: "evenodd"
  }))));
});
FormInput.defaultProps = {
  disabled: null,
  label: '',
  type: 'text'
};
/* harmony default export */ __webpack_exports__["a"] = (FormInput);

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

/***/ "PiCl":
/***/ (function(module, exports) {

module.exports = {
	"label": "label-U5LtD",
	"input": "input-3CPBH",
	"hasLabel": "hasLabel-2nKPW",
	"light": "light-2d0gj",
	"white": "white-2R8fP",
	"error": "error-uhIUE",
	"disabled": "disabled-jvG7A",
	"search": "search-2KeAw",
	"checkbox": "checkbox-3397f",
	"radio": "radio-1w3Jz"
};

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

/***/ "RoCD":
/***/ (function(module, exports) {

module.exports = require("react-floater");

/***/ }),

/***/ "Rq1n":
/***/ (function(module, exports) {

module.exports = {
	"searchBar": "searchBar-3HxDG",
	"wrapper": "wrapper-Y357x",
	"search": "search-2EH01",
	"clear": "clear-1TvMx",
	"suggestions": "suggestions-3QhLb"
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

/***/ "Uz37":
/***/ (function(module, exports) {

module.exports = {
	"tip": "tip-1p50c",
	"overlay": "overlay-mEjSj"
};

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

/***/ "Y/kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTrackById; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("quyw");
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


const getTracks = state => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["values"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensTracks */ "c"], state));
const getTrackById = (state, id) => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["view"])(Object(_data__WEBPACK_IMPORTED_MODULE_1__[/* lensTrack */ "b"])(id), state);

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "aRhH":
/***/ (function(module, exports) {

module.exports = {
	"faqs": "faqs-19Ez7"
};

/***/ }),

/***/ "aj2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DocumentList_DocumentList; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/Loading/Loading.js
var Loading = __webpack_require__("jlXy");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/entities/documents/actions.js
var actions = __webpack_require__("wopQ");

// EXTERNAL MODULE: ./components/DocumentListItem/DocumentListItem.scss
var DocumentListItem = __webpack_require__("4+Di");
var DocumentListItem_default = /*#__PURE__*/__webpack_require__.n(DocumentListItem);

// CONCATENATED MODULE: ./components/DocumentListItem/DocumentListItem.js
var __jsx = external_react_default.a.createElement;

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







function DocumentListItem_DocumentListItem({
  id,
  title,
  link,
  basename,
  extension,
  documentStatus
}) {
  const pending = documentStatus == 'IN_PROGRESS';
  useRefetch(id, pending);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const doDelete = Object(external_react_["useCallback"])(e => {
    e.stopPropagation();
    e.preventDefault();
    if (confirm('Are you sure you want to delete this document?')) dispatch(Object(actions["d" /* deleteDocument */])(id));
  }, [dispatch, id]);
  const fileProcessFailed = documentStatus == 'FAILED';

  const _ref = link || {},
        {
    target
  } = _ref,
        linkProps = _objectWithoutProperties(_ref, ["target"]);

  return __jsx("li", null, pending ? __jsx("a", {
    className: DocumentListItem_default.a.pending,
    onClick: e => e.preventDefault()
  }, __jsx("span", {
    className: DocumentListItem_default.a.icon
  }, __jsx(Loading["a" /* default */], {
    size: 24,
    overlay: false
  })), __jsx("span", {
    className: DocumentListItem_default.a.filename
  }, basename), __jsx("span", {
    className: DocumentListItem_default.a.extension
  }, extension), __jsx("span", {
    className: DocumentListItem_default.a.processing
  }, "Processing\u2026"), __jsx("span", {
    className: DocumentListItem_default.a.deleteSpacer
  })) : fileProcessFailed ? __jsx("a", {
    className: DocumentListItem_default.a.failedFileRow,
    target: null
  }, __jsx("span", {
    className: DocumentListItem_default.a.icon
  }, __jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m11.9999259 2.01129642v7.35237875.81817933h7.9707628l.0290631 10.8154583c.0014841.5522828-.4450265 1.0011995-.9973092 1.0026836-.0008958.0000024-.0017915.0000036-.0026872.0000036h-13.9997554c-.55228475 0-1-.4477153-1-1v-17.99982331c0-.55228475.44771525-1 1-1 .00052958 0 .00105915.00000042.00158873.00000126zm1.5999851.22400401 5.9122424 6.31019543h-5.9122424z"
  }))), __jsx("span", {
    className: DocumentListItem_default.a.filename
  }, basename), __jsx("span", {
    className: DocumentListItem_default.a.extension
  }, extension), __jsx("span", {
    className: DocumentListItem_default.a.failed
  }, "Failed"), __jsx("button", {
    onClick: doDelete,
    className: DocumentListItem_default.a.deleteButton
  })) : __jsx(link_default.a, linkProps, __jsx("a", {
    target: target || null
  }, __jsx("span", {
    className: DocumentListItem_default.a.icon
  }, __jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m11.9999259 2.01129642v7.35237875.81817933h7.9707628l.0290631 10.8154583c.0014841.5522828-.4450265 1.0011995-.9973092 1.0026836-.0008958.0000024-.0017915.0000036-.0026872.0000036h-13.9997554c-.55228475 0-1-.4477153-1-1v-17.99982331c0-.55228475.44771525-1 1-1 .00052958 0 .00105915.00000042.00158873.00000126zm1.5999851.22400401 5.9122424 6.31019543h-5.9122424z",
    fillRule: "evenodd"
  }))), __jsx("span", {
    className: DocumentListItem_default.a.filename
  }, basename), __jsx("span", {
    className: DocumentListItem_default.a.extension
  }, extension), __jsx("span", {
    className: DocumentListItem_default.a.ready
  }, "Ready"), __jsx("button", {
    onClick: doDelete,
    className: DocumentListItem_default.a.deleteButton
  }))));
}

function useRefetch(documentId, pending) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (!pending) return;
    const to = setInterval(() => {
      dispatch(Object(actions["g" /* fetchSingleDocument */])(documentId));
    }, 5000);
    return () => {
      clearInterval(to);
    };
  }, [dispatch, documentId, pending]);
}
// EXTERNAL MODULE: ./components/DocumentList/DocumentList.scss
var DocumentList = __webpack_require__("Bb5g");
var DocumentList_default = /*#__PURE__*/__webpack_require__.n(DocumentList);

// CONCATENATED MODULE: ./components/DocumentList/DocumentList.js
var DocumentList_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DocumentList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = DocumentList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function DocumentList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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






DocumentList_DocumentList.defaultProps = {
  items: []
};

function isSupportedExtension(extension) {
  if (['png', 'jpg', 'jpeg', 'pdf'].indexOf(extension.toLowerCase()) >= 0) {
    return true;
  }

  return false;
}

function returnFormattedExtension(extension) {
  if (isSupportedExtension(extension)) {
    return extension.toUpperCase();
  } else {
    return "NOT SUPPORTED";
  }
}

function DocumentList_DocumentList({
  className,
  items
}) {
  const listClassNames = external_classnames_default()(DocumentList_default.a.list, className);
  return !!items.length && DocumentList_jsx("nav", {
    className: listClassNames
  }, DocumentList_jsx("header", {
    className: DocumentList_default.a.listHeader
  }, DocumentList_jsx("span", {
    className: DocumentList_default.a.leftSpace
  }), DocumentList_jsx("span", {
    className: DocumentList_default.a.nameHeader
  }, "File Name"), DocumentList_jsx("span", {
    className: DocumentList_default.a.typeHeader
  }, "Type"), DocumentList_jsx("span", {
    className: DocumentList_default.a.statusHeader
  }, "Status"), DocumentList_jsx("span", {
    className: DocumentList_default.a.rightSpace
  })), DocumentList_jsx("ul", null, items.map(({
    id,
    title,
    link,
    documentStatus
  }, index) => {
    const _ref = link || {},
          {
      target
    } = _ref,
          linkProps = DocumentList_objectWithoutProperties(_ref, ["target"]);

    const filenameParts = title.split('.');
    const extension = returnFormattedExtension(filenameParts.pop());
    const basename = filenameParts.join('.');
    return DocumentList_jsx(DocumentListItem_DocumentListItem, _extends({
      key: id
    }, {
      id,
      title,
      basename,
      extension,
      documentStatus,
      link
    }));
  })));
}

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

/***/ "bSE9":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper-2O3dg",
	"personaLabel": "personaLabel-ccOMb",
	"removePersona": "removePersona-2JDSR",
	"menu": "menu-2I5-y",
	"overlay": "overlay-3tfaL"
};

/***/ }),

/***/ "bzom":
/***/ (function(module, exports) {

module.exports = {
	"resultList": "resultList-3a8al",
	"searchSummary": "searchSummary-2mG70"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dWLz":
/***/ (function(module, exports) {

module.exports = {
	"documents": "documents-2H5Sc",
	"list": "list-6DyJ4",
	"intro": "intro-19dtQ",
	"searchBar": "searchBar-LH8Tt",
	"loadingItems": "loadingItems-3XXep",
	"sentinel": "sentinel-1wCUv",
	"listDetails": "listDetails-2wZQ0",
	"fileCount": "fileCount-19gtr",
	"timeUploaded": "timeUploaded-1vAsu",
	"timeProcessed": "timeProcessed-GRGEK",
	"processing": "processing-3G2Wb",
	"searchResultContainer": "searchResultContainer-9FFrU",
	"compareButton": "compareButton-1AdoC"
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

/***/ "ekI2":
/***/ (function(module, exports) {

module.exports = {
	"container": "container-2b1MP",
	"overlay": "overlay-30mRe",
	"filterButton": "filterButton-32-nA",
	"hasFilter": "hasFilter-3NgeD"
};

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gAkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Highlight_Highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ix55");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jlXy");
/* harmony import */ var _constants_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LQ3n");
/* harmony import */ var _utils_link_generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ure5");
/* harmony import */ var _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sL8Q");
/* harmony import */ var _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SearchResults_scss__WEBPACK_IMPORTED_MODULE_7__);
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








SearchResults.defaultProps = {
  results: []
};
function SearchResults(_ref) {
  let {
    className,
    results,
    searchQuery,
    searchStatus,
    searchTotalDocuments,
    searchTotalMatches,
    isComparing
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "results", "searchQuery", "searchStatus", "searchTotalDocuments", "searchTotalMatches", "isComparing"]);

  const searchResultsClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.searchResults, className);
  const isQueryLongEnough = searchQuery && searchQuery.length >= _constants_configs__WEBPACK_IMPORTED_MODULE_5__[/* MIN_SEARCH_QUERY_LENGTH */ "b"];
  if (!searchStatus || !searchQuery) return null;
  const highlightRegex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const words = searchQuery.split(/\W+/).filter(Boolean).map(x => `\\b${x}\\b`);
    return new RegExp('(?:' + words.join('|') + ')', 'i');
  }, [searchQuery]);
  return __jsx("nav", _extends({
    className: searchResultsClassNames
  }, rest), __jsx("header", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(isComparing && _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.comparing)
  }, __jsx("h2", null, "Amazon Elasticsearch Service", !isComparing ? ' Results' : ''), isComparing ? __jsx("p", null, "Keyword search results") : null), !isQueryLongEnough && __jsx("p", {
    className: _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noContent
  }, "Enter a search query longer than ", _constants_configs__WEBPACK_IMPORTED_MODULE_5__[/* MIN_SEARCH_QUERY_LENGTH */ "b"] - 1, " characters to initiate a search."), !searchTotalDocuments && searchStatus !== 'pending' && __jsx("p", {
    className: _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noContent
  }, "No results found."), !!searchTotalDocuments && searchStatus !== 'pending' && __jsx("div", {
    className: _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.searchSummary
  }, `Found about ${searchTotalMatches} ${searchTotalMatches === 1 ? 'result' : 'results'} across ${searchTotalDocuments} ${searchTotalDocuments === 1 ? 'document' : 'documents'}`), searchStatus === 'success' && isQueryLongEnough && __jsx("ul", null, results.map(({
    documentId: id,
    count,
    name,
    lines
  }) => {
    if (!count) return null;
    return __jsx("li", {
      className: _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.resultItem,
      key: id
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_utils_link_generators__WEBPACK_IMPORTED_MODULE_6__[/* makeDocumentLink */ "a"])(id), __jsx("a", null, __jsx("header", null, __jsx("h3", null, __jsx(_components_Highlight_Highlight__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      search: highlightRegex
    }, name))), __jsx("ul", {
      className: _SearchResults_scss__WEBPACK_IMPORTED_MODULE_7___default.a.lines
    }, lines.slice(0, 4).map((line, i) => __jsx("li", {
      key: i
    }, "\u2026", __jsx(_components_Highlight_Highlight__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      search: highlightRegex
    }, line), "\u2026"))))));
  })));
}

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

/***/ "hm7m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__("p1tF");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: ./store/entities/meta/actions.js
var actions = __webpack_require__("qjZw");

// EXTERNAL MODULE: external "redux-actions"
var external_redux_actions_ = __webpack_require__("wfgH");

// EXTERNAL MODULE: external "normalizr"
var external_normalizr_ = __webpack_require__("rEeI");

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: ./constants/configs.js
var configs = __webpack_require__("LQ3n");

// EXTERNAL MODULE: ./constants/action-types.js
var action_types = __webpack_require__("Ef8z");

// CONCATENATED MODULE: ./store/entities/searchResults/data.js
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

 // Search Result Schemas

const searchResultSchema = new external_normalizr_["schema"].Entity('searchResults', {}, {
  idAttribute: 'documentId'
});
const searchResultsSchema = new external_normalizr_["schema"].Array(searchResultSchema);
const kendraResultSchema = new external_normalizr_["schema"].Entity('kendraResults', {}, {
  idAttribute: 'Id'
});
const kendraResultsSchema = new external_normalizr_["schema"].Array(kendraResultSchema);
const kendraFilteredResultSchema = new external_normalizr_["schema"].Entity('kendraFilteredResults', {}, {
  idAttribute: 'Id'
});
const kendraFilteredResultsSchema = new external_normalizr_["schema"].Array(kendraFilteredResultSchema); // Search Result Lenses

const lensSearchResults = Object(external_ramda_["lensPath"])(['entities', 'searchResults']);
const lensSearchResult = id => Object(external_ramda_["lensPath"])(['entities', 'searchResults', id]);
const lensKendraResults = Object(external_ramda_["lensPath"])(['entities', 'kendraResults']);
const lensKendraFilteredResults = Object(external_ramda_["lensPath"])(['entities', 'kendraFilteredResults']); // Initial Data

/* harmony default export */ var searchResults_data = ({});
// CONCATENATED MODULE: ./store/entities/searchResults/actions.js
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






/**
 * Get documents from TextractDemoTextractAPI
 */

const search = Object(external_redux_actions_["createAction"])(action_types["i" /* SEARCH */], async params => {
  const headers = {
    Authorization: `Bearer ${(await external_aws_amplify_["Auth"].currentSession()).getIdToken().getJwtToken()}`
  };
  const [esResponse, kendraResponse, kendraFilteredResponse] = await Promise.all([external_aws_amplify_["API"].get("TextractDemoTextractAPI", "search", {
    headers,
    response: true,
    queryStringParameters: _objectSpread({}, params)
  }), configs["a" /* ENABLE_KENDRA */] ? external_aws_amplify_["API"].post("TextractDemoTextractAPI", "searchkendra", {
    headers,
    response: true,
    queryStringParameters: {},
    body: {
      query: params.k,
      pageNumber: 1,
      pageSize: 10
    }
  }) : null, configs["a" /* ENABLE_KENDRA */] && params.persona ? external_aws_amplify_["API"].post("TextractDemoTextractAPI", "searchkendra", {
    headers,
    response: true,
    queryStringParameters: {},
    body: {
      query: params.k,
      tag: params.persona,
      pageNumber: 1,
      pageSize: 10
    }
  }) : null]);
  const data = Array.isArray(esResponse.data) ? esResponse.data : [];
  let searchTotalMatches = 0;
  let searchTotalDocuments = 0;
  const esResults = data.map(result => {
    searchTotalMatches += result.count;
    if (result.count) searchTotalDocuments++;
    return _objectSpread(_objectSpread({}, result), {}, {
      name: result.name.replace(/^.*\//, "")
    });
  });
  const kendraQueryId = configs["a" /* ENABLE_KENDRA */] ? kendraResponse.data.QueryId : null;
  const kendraTotalResults = configs["a" /* ENABLE_KENDRA */] ? kendraResponse.data.TotalNumberOfResults : null;
  const kendraFilteredQueryId = configs["a" /* ENABLE_KENDRA */] && params.persona ? kendraFilteredResponse.data.QueryId : null;
  const kendraTotalFilteredResults = configs["a" /* ENABLE_KENDRA */] && params.persona ? kendraFilteredResponse.data.TotalNumberOfResults : null;
  const kendraData = configs["a" /* ENABLE_KENDRA */] ? Object(external_normalizr_["normalize"])(kendraResponse.data.ResultItems, kendraResultsSchema).entities : {};
  const kendraFilteredData = configs["a" /* ENABLE_KENDRA */] && params.persona ? Object(external_normalizr_["normalize"])(kendraFilteredResponse.data.ResultItems, kendraFilteredResultsSchema).entities : {};
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(external_normalizr_["normalize"])(esResults, searchResultsSchema).entities), kendraData), kendraFilteredData), {}, {
    meta: {
      searchTotalMatches,
      searchTotalDocuments,
      kendraQueryId,
      kendraFilteredQueryId,
      kendraTotalResults,
      kendraTotalFilteredResults
    }
  });
});
const submitKendraFeedback = Object(external_redux_actions_["createAction"])(action_types["u" /* SUBMIT_FEEDBACK */], async ({
  relevance,
  queryId,
  resultId
}) => {
  const response = await external_aws_amplify_["API"].post("TextractDemoTextractAPI", "feedbackkendra", {
    headers: {
      Authorization: `Bearer ${(await external_aws_amplify_["Auth"].currentSession()).getIdToken().getJwtToken()}`
    },
    response: true,
    body: {
      relevance,
      queryId,
      resultId
    }
  });
});
/**
 * Clear search results
 */

const clearSearchResults = Object(external_redux_actions_["createAction"])(action_types["c" /* CLEAR_SEARCH_RESULTS */], () => ({
  searchResults: [],
  kendraResults: [],
  kendraFilteredResults: undefined,
  meta: {
    searchTotalMatches: 0,
    searchTotalDocuments: 0,
    kendraQueryId: null
  }
}));
// EXTERNAL MODULE: ./components/DocumentList/DocumentList.js + 1 modules
var DocumentList = __webpack_require__("aj2n");

// EXTERNAL MODULE: ./components/Loading/Loading.js
var Loading = __webpack_require__("jlXy");

// EXTERNAL MODULE: ./components/Button/Button.js
var Button = __webpack_require__("8wsC");

// EXTERNAL MODULE: ./components/SearchResults/SearchResults.js
var SearchResults = __webpack_require__("gAkU");

// EXTERNAL MODULE: external "react-joyride"
var external_react_joyride_ = __webpack_require__("q+wu");

// EXTERNAL MODULE: ./components/LinkWithClickHandler/LinkWithClickHandler.js
var LinkWithClickHandler = __webpack_require__("v97B");

// EXTERNAL MODULE: ./components/KendraHighlightedText/KendraHighlightedText.scss
var KendraHighlightedText = __webpack_require__("DrtL");
var KendraHighlightedText_default = /*#__PURE__*/__webpack_require__.n(KendraHighlightedText);

// CONCATENATED MODULE: ./components/KendraHighlightedText/KendraHighlightedText.js
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



function unionSortedHighlights(highlights) {
  if (!highlights) {
    return highlights;
  }

  let prev = highlights[0];
  const unioned = [prev];

  for (let i = 1; i < highlights.length; i++) {
    const h = highlights[i];

    if (prev.EndOffset >= h.BeginOffset) {
      // union
      prev.EndOffset = Math.max(h.EndOffset, prev.EndOffset);
      prev.TopAnswer = prev.TopAnswer || h.TopAnswer;
    } else {
      // disjoint, add to results
      unioned.push(h);
      prev = h;
    }
  }

  return unioned;
}

function KendraHighlightedText_KendraHighlightedText({
  textWithHighlights
}) {
  if (!textWithHighlights) return null;
  const {
    Text: text,
    Highlights: highlights
  } = textWithHighlights;

  if (!highlights || !highlights.length) {
    return __jsx("span", null, text);
  }

  const sortedHighlights = unionSortedHighlights(highlights.sort((a, b) => a.BeginOffset - b.BeginOffset));
  const lastHighlight = sortedHighlights[sortedHighlights.length - 1];
  return __jsx("span", {
    className: KendraHighlightedText_default.a.base
  }, sortedHighlights.map((highlight, idx) => __jsx(external_react_["Fragment"], {
    key: idx
  }, text.substring(idx === 0 ? 0 : sortedHighlights[idx - 1].EndOffset, highlight.BeginOffset), __jsx("mark", null, text.substring(highlight.BeginOffset, highlight.EndOffset)))), text.substring(lastHighlight ? lastHighlight.EndOffset : 0));
}
// EXTERNAL MODULE: ./components/KendraResultTitle/KendraResultTitle.scss
var KendraResultTitle = __webpack_require__("rONH");
var KendraResultTitle_default = /*#__PURE__*/__webpack_require__.n(KendraResultTitle);

// EXTERNAL MODULE: ./utils/link-generators.js
var link_generators = __webpack_require__("Ure5");

// CONCATENATED MODULE: ./components/KendraResultTitle/KendraResultTitle.js
var KendraResultTitle_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function KendraResultTitle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function KendraResultTitle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { KendraResultTitle_ownKeys(Object(source), true).forEach(function (key) { KendraResultTitle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { KendraResultTitle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function KendraResultTitle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





function KendraResultTitle_KendraResultTitle({
  result,
  submitFeedback
}) {
  let resultTitle;

  if (result.DocumentTitle && result.DocumentTitle.Text) {
    const truncatedTitle = KendraResultTitle_objectSpread(KendraResultTitle_objectSpread({}, result.DocumentTitle), {}, {
      Text: result.DocumentTitle.Text.replace(/-searchable$/, '')
    });

    resultTitle = KendraResultTitle_jsx(KendraHighlightedText_KendraHighlightedText, {
      textWithHighlights: truncatedTitle
    });
  } else if (result.DocumentURI) {
    resultTitle = result.DocumentURI;
  }

  const handleClick = Object(external_react_["useCallback"])(() => {
    submitFeedback("CLICK", result);
  }, [submitFeedback, result]);
  if (!resultTitle) return null;
  const uri = result.DocumentURI; // TODO link to doc

  return KendraResultTitle_jsx("header", {
    className: KendraResultTitle_default.a.header
  }, KendraResultTitle_jsx(LinkWithClickHandler["a" /* default */], _extends({}, Object(link_generators["a" /* makeDocumentLink */])(result.DocumentId), {
    onClick: handleClick
  }), KendraResultTitle_jsx("h3", {
    className: KendraResultTitle_default.a.title
  }, resultTitle)));
}
// EXTERNAL MODULE: ./components/KendraResultFeedback/KendraResultFeedback.scss
var KendraResultFeedback = __webpack_require__("vGbi");
var KendraResultFeedback_default = /*#__PURE__*/__webpack_require__.n(KendraResultFeedback);

// CONCATENATED MODULE: ./components/KendraResultFeedback/KendraResultFeedback.js
var KendraResultFeedback_jsx = external_react_default.a.createElement;

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




function Thumb() {
  return KendraResultFeedback_jsx("path", {
    d: "M64.5,32c1.6-5.7,0.6-11.8-2.7-16.7l-1.3-2c-1-1.5-2.7-2.4-4.5-2.3c-1.8,0.1-3.4,1.1-4.3,2.8c-1.5,3-3.4,5.7-5.5,8.1   c-1.9,2.2-3.5,3.6-5.4,5.1c-1.7,1.5-3.7,3.1-6,5.6c-2.7,2.9-5.1,6.2-7.2,9.6l-13.2,2c-3.1,0.5-5.4,3.2-5.4,6.3l0.3,23.5   c0,3.4,2.9,6.2,6.3,6.2h18.2l26.3,6.5l0.1,0c1.2,0.3,2.5,0.4,3.7,0.4c7.1,0,13.7-4.1,16.7-10.8c1.6-3.5,3.1-7.3,4.5-11.2   c1.9-5.3,3.5-10.8,4.6-16.4c0.4-2.1-0.1-4.3-1.3-6c-1.3-1.7-3.2-2.8-5.4-3.1c-3.5-0.3-6.4-0.6-9-0.9c-4.1-0.4-7.7-0.7-12.4-1.2   l2.8-5.5L64.5,32z M73.4,46c2.7,0.2,5.5,0.5,9,0.9c0.2,0,0.4,0.2,0.5,0.3c0.1,0.1,0.2,0.3,0.1,0.5c-1,5.2-2.5,10.4-4.3,15.3   c-1.4,3.7-2.8,7.3-4.3,10.7c-2.1,4.8-7.4,7.4-12.5,6.4l-27.1-6.7H16.4l-0.3-22.2l16-2.4l0.8-1.5c1.9-3.5,4.3-6.8,7-9.8   c2-2.2,3.6-3.5,5.4-5c1.9-1.6,3.9-3.2,6.1-5.9c1.8-2.1,3.5-4.4,4.9-6.8c1.8,3,2.3,6.6,1.5,10l-7,13.8l5,0.6   C63.2,45,68,45.5,73.4,46z"
  });
}

function KendraResultFeedback_KendraResultFeedback({
  result,
  submitFeedback
}) {
  const {
    0: submitted,
    1: setSubmitted
  } = Object(external_react_["useState"])(null);
  const submitPositive = Object(external_react_["useCallback"])(() => {
    setSubmitted("RELEVANT");
    submitFeedback("RELEVANT", result);
  }, [submitFeedback, result]);
  const submitNegative = Object(external_react_["useCallback"])(() => {
    setSubmitted("NOT_RELEVANT");
    submitFeedback("NOT_RELEVANT", result);
  }, [submitFeedback, result]);
  return KendraResultFeedback_jsx("div", {
    "data-walkthrough": "feedback"
  }, KendraResultFeedback_jsx("button", {
    disabled: !!submitted,
    className: external_classnames_default()(KendraResultFeedback_default.a.button, submitted === "NOT_RELEVANT" && KendraResultFeedback_default.a.selected, KendraResultFeedback_default.a.negative),
    onClick: submitNegative
  }, KendraResultFeedback_jsx("svg", {
    viewBox: "0 0 150 150"
  }, KendraResultFeedback_jsx("g", {
    transform: "translate(25 25) rotate(180 50 50)"
  }, KendraResultFeedback_jsx(Thumb, null)))), KendraResultFeedback_jsx("button", {
    disabled: !!submitted,
    className: external_classnames_default()(KendraResultFeedback_default.a.button, submitted === "RELEVANT" && KendraResultFeedback_default.a.selected, KendraResultFeedback_default.a.positive),
    onClick: submitPositive
  }, KendraResultFeedback_jsx("svg", {
    viewBox: "0 0 150 150"
  }, KendraResultFeedback_jsx("g", {
    transform: "translate(25 25)"
  }, KendraResultFeedback_jsx(Thumb, null)))));
}
// EXTERNAL MODULE: ./components/KendraResultFooter/KendraResultFooter.scss
var KendraResultFooter = __webpack_require__("kiXm");
var KendraResultFooter_default = /*#__PURE__*/__webpack_require__.n(KendraResultFooter);

// CONCATENATED MODULE: ./components/KendraResultFooter/KendraResultFooter.js
var KendraResultFooter_jsx = external_react_default.a.createElement;

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



function KendraResultFooter_KendraResultFooter({
  result,
  submitFeedback
}) {
  return KendraResultFooter_jsx("footer", {
    className: KendraResultFooter_default.a.footer
  }, KendraResultFooter_jsx("span", {
    className: KendraResultFooter_default.a.filename
  }), KendraResultFooter_jsx(KendraResultFeedback_KendraResultFeedback, {
    result: result,
    submitFeedback: submitFeedback
  }));
}
// EXTERNAL MODULE: external "react-floater"
var external_react_floater_ = __webpack_require__("RoCD");
var external_react_floater_default = /*#__PURE__*/__webpack_require__.n(external_react_floater_);

// EXTERNAL MODULE: ./components/TooltipButton/TooltipButton.scss
var TooltipButton = __webpack_require__("Uz37");
var TooltipButton_default = /*#__PURE__*/__webpack_require__.n(TooltipButton);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/TooltipButton/TooltipButton.js
var TooltipButton_jsx = external_react_default.a.createElement;

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




function TooltipButton_TooltipButton({
  tooltip,
  children
}) {
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const onClick = Object(external_react_["useCallback"])(() => {
    setOpen(open => !open);
  }, []);
  return TooltipButton_jsx(external_react_default.a.Fragment, null, TooltipButton_jsx(external_react_floater_default.a, {
    content: TooltipButton_jsx("div", {
      className: TooltipButton_default.a.tip
    }, tooltip),
    placement: "top",
    open: open,
    styles: {
      container: {
        backgroundColor: "#00a1c9",
        color: "#fff",
        borderRadius: 5
      },
      arrow: {
        color: "#00a1c9"
      },
      options: {
        zIndex: open ? 600 : 100
      }
    }
  }, /*#__PURE__*/external_react_default.a.cloneElement(children, {
    onClick
  })), open && /*#__PURE__*/Object(external_react_dom_["createPortal"])(TooltipButton_jsx("div", {
    className: TooltipButton_default.a.overlay,
    onClick: onClick
  }), document.body));
}
// EXTERNAL MODULE: ./components/KendraTopResults/KendraTopResults.scss
var KendraTopResults = __webpack_require__("vKLX");
var KendraTopResults_default = /*#__PURE__*/__webpack_require__.n(KendraTopResults);

// CONCATENATED MODULE: ./components/KendraTopResults/KendraTopResults.js
var KendraTopResults_jsx = external_react_default.a.createElement;

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








function getTopAnswer(text) {
  if (text && text.Highlights) {
    for (const highlight of text.Highlights) {
      const length = highlight.EndOffset - highlight.BeginOffset;

      if (highlight && highlight.TopAnswer && length < MAX_TOP_ANSWER_LENGTH) {
        return KendraTopResults_jsx("h1", null, text.Text.substring(highlight.BeginOffset, highlight.EndOffset));
      }
    }
  }

  return null;
}

function KendraTopResults_KendraTopResults({
  results,
  submitFeedback
}) {
  const renderedResults = Object(external_react_["useMemo"])(() => results.map(result => {
    const answer = result.AdditionalAttributes.find(attr => attr.Key === "AnswerText");
    return KendraTopResults_jsx("article", {
      key: result.id,
      className: KendraTopResults_default.a.result
    }, KendraTopResults_jsx(KendraResultTitle_KendraResultTitle, {
      result: result,
      submitFeedback: submitFeedback
    }), getTopAnswer(answer.TextWithHighlightsValue), KendraTopResults_jsx("p", null, KendraTopResults_jsx(KendraHighlightedText_KendraHighlightedText, {
      textWithHighlights: answer.Value.TextWithHighlightsValue
    })), KendraTopResults_jsx(KendraResultFooter_KendraResultFooter, {
      result: result,
      submitFeedback: submitFeedback
    }));
  }), [results]);
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  const toggleExpanded = Object(external_react_["useCallback"])(() => {
    setExpanded(e => !e);
  }, []);
  if (!results.length) return null;
  return KendraTopResults_jsx("div", {
    className: KendraTopResults_default.a.topResults
  }, KendraTopResults_jsx("header", null, KendraTopResults_jsx("h2", null, "Amazon Kendra suggested answers", KendraTopResults_jsx(TooltipButton_TooltipButton, {
    tooltip: KendraTopResults_jsx(external_react_default.a.Fragment, null, KendraTopResults_jsx("h4", null, "Amazon Kendra suggested answers"), KendraTopResults_jsx("p", null, "When you type a question, Kendra uses machine learning algorithms to understand the context and return the most relevant results, whether that be a precise answer or an entire document. Kendra will map to the relevant documents and return a specific answer."))
  }, KendraTopResults_jsx("a", null, KendraTopResults_jsx("img", {
    src: "/static/images/icon_tip.svg"
  }), "More info")))), KendraTopResults_jsx("div", {
    className: KendraTopResults_default.a.results
  }, renderedResults[0], renderedResults.length > 1 ? KendraTopResults_jsx(external_react_default.a.Fragment, null, KendraTopResults_jsx("div", {
    className: external_classnames_default()(KendraTopResults_default.a.showMore, expanded && KendraTopResults_default.a.expanded),
    onClick: toggleExpanded
  }, "More suggested answers (", renderedResults.length - 1, ")"), expanded ? KendraTopResults_jsx("div", null, renderedResults.slice(1)) : null) : null));
}
// EXTERNAL MODULE: ./components/KendraDocumentResults/KendraDocumentResults.scss
var KendraDocumentResults = __webpack_require__("o794");
var KendraDocumentResults_default = /*#__PURE__*/__webpack_require__.n(KendraDocumentResults);

// CONCATENATED MODULE: ./components/KendraDocumentResults/KendraDocumentResults.js
var KendraDocumentResults_jsx = external_react_default.a.createElement;

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





function KendraDocumentResults_KendraDocumentResults({
  results,
  submitFeedback
}) {
  const renderedResults = Object(external_react_["useMemo"])(() => results.map(result => {
    return KendraDocumentResults_jsx("article", {
      key: result.id,
      className: KendraDocumentResults_default.a.result
    }, KendraDocumentResults_jsx(KendraResultTitle_KendraResultTitle, {
      result: result,
      submitFeedback: submitFeedback
    }), KendraDocumentResults_jsx("p", null, KendraDocumentResults_jsx(KendraHighlightedText_KendraHighlightedText, {
      textWithHighlights: result.DocumentExcerpt
    })), KendraDocumentResults_jsx(KendraResultFooter_KendraResultFooter, {
      result: result,
      submitFeedback: submitFeedback
    }));
  }), [results, submitFeedback]);
  return KendraDocumentResults_jsx("div", null, renderedResults);
}
// EXTERNAL MODULE: ./components/KendraResultPage/KendraResultPage.scss
var KendraResultPage = __webpack_require__("bzom");
var KendraResultPage_default = /*#__PURE__*/__webpack_require__.n(KendraResultPage);

// EXTERNAL MODULE: ./components/KendraFAQItem/KendraFAQItem.scss
var KendraFAQItem = __webpack_require__("9JDX");
var KendraFAQItem_default = /*#__PURE__*/__webpack_require__.n(KendraFAQItem);

// CONCATENATED MODULE: ./components/KendraFAQItem/KendraFAQItem.js
var KendraFAQItem_jsx = external_react_default.a.createElement;

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





function KendraFAQItem_KendraFAQItem({
  item,
  submitFeedback
}) {
  const question = Object(external_react_["useMemo"])(() => item.AdditionalAttributes.find(att => att.Key === "QuestionText"), [item]);
  const answer = Object(external_react_["useMemo"])(() => item.AdditionalAttributes.find(att => att.Key === "AnswerText"), [item]);
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  const toggleExpanded = Object(external_react_["useCallback"])(() => setExpanded(e => !e), []);
  return KendraFAQItem_jsx("div", {
    className: KendraFAQItem_default.a.item,
    "data-walkthrough": "faq"
  }, KendraFAQItem_jsx("div", {
    className: external_classnames_default()(KendraFAQItem_default.a.question, expanded && KendraFAQItem_default.a.expanded),
    onClick: toggleExpanded
  }, KendraFAQItem_jsx("h3", null, KendraFAQItem_jsx(KendraHighlightedText_KendraHighlightedText, {
    textWithHighlights: question.Value.TextWithHighlightsValue
  }))), expanded ? KendraFAQItem_jsx("div", {
    className: KendraFAQItem_default.a.answer
  }, KendraFAQItem_jsx("p", null, KendraFAQItem_jsx(KendraHighlightedText_KendraHighlightedText, {
    textWithHighlights: answer.Value.TextWithHighlightsValue
  })), KendraFAQItem_jsx(KendraResultFooter_KendraResultFooter, {
    result: item,
    submitFeedback: submitFeedback
  })) : null);
}
// EXTERNAL MODULE: ./components/KendraFAQs/KendraFAQs.scss
var KendraFAQs = __webpack_require__("aRhH");
var KendraFAQs_default = /*#__PURE__*/__webpack_require__.n(KendraFAQs);

// CONCATENATED MODULE: ./components/KendraFAQs/KendraFAQs.js
var KendraFAQs_jsx = external_react_default.a.createElement;

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




function KendraFAQs_KendraFAQs({
  results,
  submitFeedback
}) {
  if (!results.length) return null;
  return KendraFAQs_jsx("div", {
    className: KendraFAQs_default.a.faqs
  }, KendraFAQs_jsx("header", null, KendraFAQs_jsx("h2", null, "Frequently asked questions", KendraFAQs_jsx(TooltipButton_TooltipButton, {
    tooltip: KendraFAQs_jsx(external_react_default.a.Fragment, null, KendraFAQs_jsx("h4", null, "Frequently asked questions"), KendraFAQs_jsx("p", null, "You can upload a list of FAQs to Kendra to provide direct answers to common questions your end users are asking. Kendra will find the closest question to the search query and return the corresponding answer."))
  }, KendraFAQs_jsx("a", null, KendraFAQs_jsx("img", {
    src: "/static/images/icon_tip.svg"
  }), "More info")))), results.map(item => KendraFAQs_jsx(KendraFAQItem_KendraFAQItem, {
    item: item,
    key: item.Id,
    submitFeedback: submitFeedback
  })));
}
// EXTERNAL MODULE: ./components/PersonaLabel/PersonaLabel.scss
var PersonaLabel = __webpack_require__("bSE9");
var PersonaLabel_default = /*#__PURE__*/__webpack_require__.n(PersonaLabel);

// CONCATENATED MODULE: ./components/PersonaLabel/PersonaLabel.js
var PersonaLabel_jsx = external_react_default.a.createElement;

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





const PERSONAS = {
  scientist: "Scientist",
  healthcareprovider: "Healthcare Provider",
  generalpublic: "General Public"
};
function PersonaLabel_PersonaLabel({
  persona
}) {
  const {
    0: showingMenu,
    1: setShowingMenu
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const clearPersona = Object(external_react_["useCallback"])(() => {
    dispatch(Object(actions["f" /* setSearchPersona */])(undefined));
  }, []);
  const showMenu = Object(external_react_["useCallback"])(() => {
    setShowingMenu(true);
  }, []);
  const selectPersona = Object(external_react_["useCallback"])(which => {
    dispatch(Object(actions["f" /* setSearchPersona */])(which));
    setShowingMenu(false);
  }, []);
  return PersonaLabel_jsx(external_react_default.a.Fragment, null, PersonaLabel_jsx("div", {
    className: PersonaLabel_default.a.wrapper
  }, PersonaLabel_jsx("div", {
    className: PersonaLabel_default.a.personaLabel,
    onClick: showMenu
  }, PERSONAS[persona]), showingMenu ? PersonaLabel_jsx("div", {
    className: PersonaLabel_default.a.menu
  }, Object.keys(PERSONAS).map(p => PersonaLabel_jsx("a", {
    key: p,
    onClick: () => selectPersona(p)
  }, PERSONAS[p])), /*#__PURE__*/external_react_dom_default.a.createPortal(PersonaLabel_jsx("div", {
    className: PersonaLabel_default.a.overlay
  }), document.body)) : null), PersonaLabel_jsx("a", {
    className: PersonaLabel_default.a.removePersona,
    onClick: clearPersona
  }, "Remove filter"));
}
// CONCATENATED MODULE: ./components/KendraResultPage/KendraResultPage.js
var KendraResultPage_jsx = external_react_default.a.createElement;

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








KendraResultPage_KendraResultPage.defaultProps = {
  results: []
};
function KendraResultPage_KendraResultPage({
  title,
  results,
  queryId,
  resultCount,
  persona
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const topResults = Object(external_react_["useMemo"])(() => results.filter(res => res.Type === "ANSWER"), [results]);
  const faqResults = Object(external_react_["useMemo"])(() => results.filter(res => res.Type === "QUESTION_ANSWER"), [results]);
  const docResults = Object(external_react_["useMemo"])(() => results.filter(res => res.Type === "DOCUMENT"), [results]);
  const submitFeedback = Object(external_react_["useCallback"])((feedback, item) => {
    dispatch(submitKendraFeedback({
      relevance: feedback,
      queryId: queryId,
      resultId: item.Id
    }));
  }, [dispatch, queryId]);
  return KendraResultPage_jsx("div", {
    className: KendraResultPage_default.a.resultList
  }, title && KendraResultPage_jsx("h3", null, title), KendraResultPage_jsx("div", {
    className: KendraResultPage_default.a.searchSummary
  }, "1\u2013", results.length, " of ", resultCount, " Results", persona ? KendraResultPage_jsx(external_react_default.a.Fragment, null, " ", "for", " ", KendraResultPage_jsx(PersonaLabel_PersonaLabel, {
    persona: persona
  })) : null), KendraResultPage_jsx(KendraTopResults_KendraTopResults, {
    results: topResults,
    submitFeedback: submitFeedback
  }), KendraResultPage_jsx(KendraFAQs_KendraFAQs, {
    results: faqResults,
    submitFeedback: submitFeedback
  }), KendraResultPage_jsx(KendraDocumentResults_KendraDocumentResults, {
    results: docResults,
    submitFeedback: submitFeedback
  }));
}
// EXTERNAL MODULE: ./store/entities/meta/selectors.js
var selectors = __webpack_require__("+lYZ");

// EXTERNAL MODULE: ./components/PersonaSelector/PersonaSelector.scss
var PersonaSelector = __webpack_require__("ekI2");
var PersonaSelector_default = /*#__PURE__*/__webpack_require__.n(PersonaSelector);

// EXTERNAL MODULE: ./components/Modal/Modal.js
var Modal = __webpack_require__("Om8d");

// EXTERNAL MODULE: ./components/PersonaInfoModal/PersonaInfoModal.scss
var PersonaInfoModal = __webpack_require__("2qt2");
var PersonaInfoModal_default = /*#__PURE__*/__webpack_require__.n(PersonaInfoModal);

// EXTERNAL MODULE: ./components/FormInput/FormInput.js
var FormInput = __webpack_require__("NQOJ");

// CONCATENATED MODULE: ./components/PersonaInfoModal/PersonaInfoModal.js
var PersonaInfoModal_jsx = external_react_default.a.createElement;

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








const PERSONA_QUESTIONS = ["What is muscle dystrophy?", "Is Muscular Dystrophy inherited?", "What causes Muscular Dystrophy?"];

function PersonaInfoModal_PersonaInfoModal({
  onClose,
  onSubmit,
  searchPersona
}) {
  const {
    0: selectedPersona,
    1: setSelectedPersona
  } = Object(external_react_["useState"])(searchPersona);
  const inputRef = Object(external_react_["useRef"])();
  const submit = Object(external_react_["useCallback"])(query => {
    onSubmit(selectedPersona, query);
  }, [onSubmit, selectedPersona]);
  const submitForm = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    submit(inputRef.current.value);
  }, [submit]);
  const {
    0: apiVisible,
    1: setApiVisible
  } = Object(external_react_["useState"])(false);
  const toggleAPI = Object(external_react_["useCallback"])(() => setApiVisible(x => !x), []);
  return PersonaInfoModal_jsx(Modal["a" /* default */], {
    title: "Filter query results on User Context",
    onRequestClose: onClose
  }, PersonaInfoModal_jsx("p", null, "Amazon Kendra can deliver highly relevant query results based on user name or group membership associated with the content metadata. Follow these simple steps, and see how this feature works."), PersonaInfoModal_jsx("section", null, PersonaInfoModal_jsx("header", null, PersonaInfoModal_jsx("div", {
    className: PersonaInfoModal_default.a.stepLabel
  }, "Step 1"), PersonaInfoModal_jsx("p", null, "For this demo, we created fictitious users and search queries to showcase how the filtering feature works. Select one of the fictitious users below.")), PersonaInfoModal_jsx("div", {
    className: PersonaInfoModal_default.a.personas
  }, PersonaInfoModal_jsx("label", null, PersonaInfoModal_jsx("img", {
    src: "/static/images/healthcare-provider.png"
  }), PersonaInfoModal_jsx("input", {
    name: "persona",
    type: "radio",
    value: "healthcareprovider",
    onChange: () => setSelectedPersona("healthcareprovider"),
    checked: selectedPersona === 'healthcareprovider'
  }), PersonaInfoModal_jsx("h4", null, "Healthcare provider"), PersonaInfoModal_jsx("p", null, "Has access to information for Healthcare Professionals.")), PersonaInfoModal_jsx("label", null, PersonaInfoModal_jsx("img", {
    src: "/static/images/scientist.png"
  }), PersonaInfoModal_jsx("input", {
    name: "persona",
    type: "radio",
    value: "scientist",
    onChange: () => setSelectedPersona("scientist"),
    checked: selectedPersona === 'scientist'
  }), PersonaInfoModal_jsx("h4", null, "Scientist"), PersonaInfoModal_jsx("p", null, "Has access to scientific papers and research documents.")), PersonaInfoModal_jsx("label", null, PersonaInfoModal_jsx("img", {
    src: "/static/images/general-public.png"
  }), PersonaInfoModal_jsx("input", {
    name: "persona",
    type: "radio",
    value: "generalpublic",
    onChange: () => setSelectedPersona("generalpublic"),
    checked: selectedPersona === 'generalpublic'
  }), PersonaInfoModal_jsx("h4", null, "General public"), PersonaInfoModal_jsx("p", null, "Has access to official guidance to prevent and manage diseases/medical conditions.")), PersonaInfoModal_jsx("label", null, PersonaInfoModal_jsx("img", {
    src: "/static/images/nofilter.svg"
  }), PersonaInfoModal_jsx("input", {
    name: "persona",
    type: "radio",
    value: "",
    onChange: () => setSelectedPersona(undefined),
    checked: !selectedPersona
  }), PersonaInfoModal_jsx("h4", null, "No filter"), PersonaInfoModal_jsx("p", null, "Use this option for unfiltered search results.")))), PersonaInfoModal_jsx("section", null, PersonaInfoModal_jsx("header", null, PersonaInfoModal_jsx("div", {
    className: PersonaInfoModal_default.a.stepLabel
  }, "Step 2"), PersonaInfoModal_jsx("p", null, "Choose one of the auto suggested queries we\u2019ve created to demonstrate this feature.")), PersonaInfoModal_jsx("ul", {
    className: PersonaInfoModal_default.a.sampleQueries
  }, PERSONA_QUESTIONS.map(q => PersonaInfoModal_jsx("li", {
    onClick: () => submit(q)
  }, q)))), PersonaInfoModal_jsx("aside", {
    className: PersonaInfoModal_default.a.notes
  }, "Please note, this demo allows you to upload your own documents. If you do so, Amazon Kendra will index your documents and you'll be able to search through them. However, the filtering feature won't work. The three personas and Medical datasets are used to demonstrate the", " ", PersonaInfoModal_jsx("strong", null, "Filter query results on User Context"), " feature."), PersonaInfoModal_jsx("div", {
    className: external_classnames_default()(PersonaInfoModal_default.a.toggleAPI, apiVisible && PersonaInfoModal_default.a.expanded),
    onClick: toggleAPI
  }, "Want to see the query filtering API? Check out the sample code"), apiVisible && PersonaInfoModal_jsx(external_react_default.a.Fragment, null, PersonaInfoModal_jsx("section", null, PersonaInfoModal_jsx("p", null, "Amazon Kendra can deliver highly relevant query results based on user name or group membership. To enable this feature, documents must be indexed into Kendra along with their relevance to various users and groups. Queries can then include this information to obtain filtered results sets that matter to specific users. The code snippet below shows how this information is supplied.", " ")), PersonaInfoModal_jsx("section", null, PersonaInfoModal_jsx("pre", null, `
response = kendra.query(
  QueryText = query,
  IndexId = index,
  AttributeFilter = {
    "OrAllFilters": [
      {
        "EqualsTo": {
          "Key": "_user_id",
          "Value": {
            "StringValue": "user1"
          }
        }
      },
      {
        "EqualsTo": {
          "Key": "_group_ids",
          "Value": {
            "StringListValue": ["HR", "IT"]
          }
        }
      }
    ]
  }
)
`.trim())), PersonaInfoModal_jsx("p", {
    className: PersonaInfoModal_default.a.learnMore
  }, PersonaInfoModal_jsx("a", {
    href: "https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html",
    target: "_blank"
  }, "Learn more about this feature in the Amazon Kendra Developers page"))));
}

/* harmony default export */ var components_PersonaInfoModal_PersonaInfoModal = (Object(external_react_redux_["connect"])(function mapStateToProps(state, {
  trackName
}) {
  return {
    searchPersona: Object(selectors["j" /* getSearchPersona */])(state)
  };
})(PersonaInfoModal_PersonaInfoModal));
// CONCATENATED MODULE: ./components/PersonaSelector/PersonaSelector.js
var PersonaSelector_jsx = external_react_default.a.createElement;

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








function PersonaSelector_PersonaSelector({
  dispatch,
  searchQuery,
  searchPersona
}) {
  const personaChange = Object(external_react_["useCallback"])(persona => {
    dispatch(Object(actions["f" /* setSearchPersona */])(persona));
  }, [dispatch, searchQuery]);
  const {
    0: showingInfoModal,
    1: setShowingInfoModal
  } = Object(external_react_["useState"])(false);
  const showInfoModal = Object(external_react_["useCallback"])(() => {
    setShowingInfoModal(true);
  }, []);
  const hideInfoModal = Object(external_react_["useCallback"])(() => {
    setShowingInfoModal(false);
  }, []);
  const onModalSubmit = Object(external_react_["useCallback"])((persona, query) => {
    personaChange(persona);

    if (query) {
      dispatch(Object(actions["g" /* setSearchQuery */])(query));
    }

    setShowingInfoModal(false);
  }, [personaChange, dispatch]);
  return PersonaSelector_jsx("div", {
    className: PersonaSelector_default.a.container
  }, PersonaSelector_jsx("div", {
    className: external_classnames_default()(PersonaSelector_default.a.filterButton, searchPersona && PersonaSelector_default.a.hasFilter),
    onClick: showInfoModal
  }, "Filter"), showingInfoModal ? PersonaSelector_jsx(components_PersonaInfoModal_PersonaInfoModal, {
    onClose: hideInfoModal,
    onSubmit: onModalSubmit
  }) : null);
}

/* harmony default export */ var components_PersonaSelector_PersonaSelector = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    searchQuery: Object(selectors["k" /* getSearchQuery */])(state),
    searchStatus: Object(selectors["l" /* getSearchStatus */])(state),
    searchPersona: Object(selectors["j" /* getSearchPersona */])(state)
  };
})(PersonaSelector_PersonaSelector));
// EXTERNAL MODULE: ./components/KendraResults/KendraResults.scss
var KendraResults = __webpack_require__("u+ID");
var KendraResults_default = /*#__PURE__*/__webpack_require__.n(KendraResults);

// EXTERNAL MODULE: ./store/ui/actions.js
var ui_actions = __webpack_require__("kOgf");

// EXTERNAL MODULE: ./store/ui/selectors.js
var ui_selectors = __webpack_require__("BCp/");

// CONCATENATED MODULE: ./components/KendraResults/KendraResults.js
var KendraResults_jsx = external_react_default.a.createElement;

function KendraResults_extends() { KendraResults_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return KendraResults_extends.apply(this, arguments); }

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











KendraResults_KendraResults.defaultProps = {
  results: []
};
function KendraResults_KendraResults(_ref) {
  let {
    className,
    results,
    filteredResults,
    searchQuery,
    searchStatus,
    searchPersona,
    searchTotalDocuments,
    searchTotalMatches,
    kendraQueryId,
    filteredQueryId,
    resultCount,
    filteredResultCount,
    showPersonaSelector,
    isComparing
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "results", "filteredResults", "searchQuery", "searchStatus", "searchPersona", "searchTotalDocuments", "searchTotalMatches", "kendraQueryId", "filteredQueryId", "resultCount", "filteredResultCount", "showPersonaSelector", "isComparing"]);

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const isQueryLongEnough = searchQuery && searchQuery.length >= configs["b" /* MIN_SEARCH_QUERY_LENGTH */];
  if (!searchStatus || !searchQuery) return null;
  const hasFilteredResults = searchStatus === "success" && filteredResults && searchPersona && showPersonaSelector;
  const {
    0: width,
    1: setWidth
  } = Object(external_react_["useState"])(window.innerWidth);
  Object(external_react_["useEffect"])(() => {
    function resized() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
    };
  }, []);
  const canShowSideBySide = Object(external_react_["useMemo"])(() => width >= 1000, [width]);
  return KendraResults_jsx("div", {
    className: external_classnames_default()(KendraResults_default.a.base, hasFilteredResults && KendraResults_default.a.doubleWidth)
  }, KendraResults_jsx("nav", KendraResults_extends({}, rest, {
    className: KendraResults_default.a.topNav
  }), KendraResults_jsx("header", {
    className: external_classnames_default()(isComparing && KendraResults_default.a.comparing)
  }, KendraResults_jsx("h2", null, "Amazon Kendra", !isComparing ? " Results" : ""), isComparing ? KendraResults_jsx("p", null, "Semantic search results") : null), !isQueryLongEnough && KendraResults_jsx("p", {
    className: KendraResults_default.a.noContent
  }, "Enter a search query longer than ", configs["b" /* MIN_SEARCH_QUERY_LENGTH */] - 1, " ", "characters to initiate a search."), showPersonaSelector && KendraResults_jsx(components_PersonaSelector_PersonaSelector, null)), KendraResults_jsx("div", {
    className: KendraResults_default.a.resultContainer
  }, searchStatus === "success" && isQueryLongEnough && (!hasFilteredResults || canShowSideBySide) && KendraResults_jsx(KendraResultPage_KendraResultPage, {
    title: hasFilteredResults ? "Unfiltered Results" : null,
    results: results,
    queryId: kendraQueryId,
    resultCount: resultCount
  }), hasFilteredResults ? KendraResults_jsx(KendraResultPage_KendraResultPage, {
    title: "Filtered Results",
    results: filteredResults,
    queryId: filteredQueryId,
    resultCount: filteredResultCount,
    persona: searchPersona
  }) : null));
}
// EXTERNAL MODULE: ./components/SearchTypeTabs/SearchTypeTabs.scss
var SearchTypeTabs = __webpack_require__("BW92");
var SearchTypeTabs_default = /*#__PURE__*/__webpack_require__.n(SearchTypeTabs);

// CONCATENATED MODULE: ./components/SearchTypeTabs/SearchTypeTabs.js
var SearchTypeTabs_jsx = external_react_default.a.createElement;

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







function SearchTypeTabs_SearchTypeTabs({
  selectedSearch,
  setSelectedSearch
}) {
  const selectES = Object(external_react_["useCallback"])(() => {
    setSelectedSearch("es");
  }, [setSelectedSearch]);
  const selectKendra = Object(external_react_["useCallback"])(() => {
    setSelectedSearch("kendra");
  }, [setSelectedSearch]);
  const selectBoth = Object(external_react_["useCallback"])(() => {
    setSelectedSearch("both");
  }, [setSelectedSearch]);
  const {
    0: width,
    1: setWidth
  } = Object(external_react_["useState"])(window.innerWidth);
  Object(external_react_["useEffect"])(() => {
    function resized() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
    };
  }, []);
  const canShowSideBySide = Object(external_react_["useMemo"])(() => width >= 1000, [width]);
  Object(external_react_["useEffect"])(() => {
    if (selectedSearch === "both" && !canShowSideBySide) {
      setSelectedSearch("es");
    }
  }, [selectedSearch, canShowSideBySide]);
  return SearchTypeTabs_jsx("div", {
    className: SearchTypeTabs_default.a.wrapper
  }, SearchTypeTabs_jsx("a", {
    className: external_classnames_default()(SearchTypeTabs_default.a.tab, selectedSearch === "es" && SearchTypeTabs_default.a.selected),
    onClick: selectES
  }, "Amazon ES", SearchTypeTabs_jsx("span", null, "Keyword Search Results")), SearchTypeTabs_jsx("a", {
    className: external_classnames_default()(SearchTypeTabs_default.a.tab, selectedSearch === "kendra" && SearchTypeTabs_default.a.selected),
    onClick: selectKendra
  }, "Amazon Kendra", SearchTypeTabs_jsx("span", null, "Semantic Search Results")), canShowSideBySide ? SearchTypeTabs_jsx("a", {
    className: external_classnames_default()(SearchTypeTabs_default.a.tab, selectedSearch === "both" && SearchTypeTabs_default.a.selected),
    onClick: selectBoth
  }, "Amazon ES and Amazon Kendra", SearchTypeTabs_jsx("span", null, "Compare Search Technologies")) : null);
}

/* harmony default export */ var components_SearchTypeTabs_SearchTypeTabs = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    selectedSearch: Object(ui_selectors["b" /* getSelectedSearch */])(state)
  };
}, function mapDispatchToProps(dispatch) {
  return {
    setSelectedSearch: type => dispatch(Object(ui_actions["c" /* setSelectedSearch */])(type))
  };
})(SearchTypeTabs_SearchTypeTabs));
// EXTERNAL MODULE: ./store/entities/documents/actions.js
var documents_actions = __webpack_require__("wopQ");

// EXTERNAL MODULE: ./store/entities/documents/selectors.js
var documents_selectors = __webpack_require__("9xRs");

// CONCATENATED MODULE: ./store/entities/searchResults/selectors.js
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


const getSearchResults = state => Object(external_ramda_["values"])(Object(external_ramda_["view"])(lensSearchResults, state));
const getSearchResultById = (state, id) => Object(external_ramda_["view"])(lensSearchResult(id), state);
const getKendraResults = state => Object(external_ramda_["values"])(Object(external_ramda_["view"])(lensKendraResults, state));
const getKendraFilteredResults = state => Object(external_ramda_["values"])(Object(external_ramda_["view"])(lensKendraFilteredResults, state));
// EXTERNAL MODULE: ./pages/documents/documents.scss
var documents_documents = __webpack_require__("dWLz");
var documents_default = /*#__PURE__*/__webpack_require__.n(documents_documents);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./components/SearchBar/SearchBar.scss
var SearchBar = __webpack_require__("Rq1n");
var SearchBar_default = /*#__PURE__*/__webpack_require__.n(SearchBar);

// CONCATENATED MODULE: ./components/SearchBar/SearchBar.js
var SearchBar_jsx = external_react_default.a.createElement;

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












SearchBar_SearchBar.defaultProps = {};

function SearchBar_SearchBar({
  className,
  dispatch,
  searchQuery,
  searchPersona,
  light,
  suggestions,
  placeholder
}) {
  const searchBarClassNames = external_classnames_default()(SearchBar_default.a.searchBar, className);
  const {
    0: hasTerm,
    1: setHasTerm
  } = Object(external_react_["useState"])(!!searchQuery);
  const handleClearClick = Object(external_react_["useCallback"])(() => {
    dispatch(Object(actions["b" /* clearSearchQuery */])());
    input.current.value = "";
  }, [dispatch]);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions["b" /* clearSearchQuery */])()); // eslint-disable-next-line
  }, []);
  const input = Object(external_react_["useRef"])();
  const handleSubmit = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(actions["g" /* setSearchQuery */])(input.current.value));
    dispatch(Object(actions["f" /* setSearchPersona */])(undefined));
    input.current.blur();
  }, []);
  const searchValueChange = Object(external_react_["useCallback"])(e => {
    setHasTerm(!!e.target.value);
  }, []);
  Object(external_react_["useEffect"])(() => {
    input.current.value = searchQuery;
    searchValueChange({
      target: {
        value: searchQuery
      }
    });
  }, [searchQuery]);
  const selectSuggestion = Object(external_react_["useCallback"])(q => {
    dispatch(Object(actions["g" /* setSearchQuery */])(q));
    dispatch(Object(actions["f" /* setSearchPersona */])(undefined));
  }, [dispatch]);
  return SearchBar_jsx("form", {
    className: searchBarClassNames,
    onSubmit: handleSubmit
  }, SearchBar_jsx("div", {
    className: SearchBar_default.a.wrapper
  }, SearchBar_jsx(FormInput["a" /* default */], {
    ref: input,
    light: light,
    type: "search",
    className: SearchBar_default.a.search,
    placeholder: placeholder || "Search...",
    defaultValue: searchQuery,
    onChange: searchValueChange
  }), hasTerm ? SearchBar_jsx(Button["b" /* default */], {
    type: "button",
    simple: true,
    palette: "black",
    className: SearchBar_default.a.clear,
    onClick: handleClearClick
  }, SearchBar_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, SearchBar_jsx("path", {
    d: "m12 10.5857864 5.2928932-5.29289318c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356l-5.2928932 5.29289322 5.2928932 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-5.2928932-5.2928932-5.29289322 5.2928932c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l5.29289318-5.2928932-5.29289318-5.29289322c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0z"
  }))) : null, suggestions ? SearchBar_jsx("div", {
    className: SearchBar_default.a.suggestions
  }, SearchBar_jsx("ul", null, suggestions.map(q => SearchBar_jsx("li", {
    key: q,
    onClick: () => selectSuggestion(q)
  }, q)))) : null), SearchBar_jsx(Button["b" /* default */], {
    onClick: handleSubmit
  }, "Search"));
}

/* harmony default export */ var components_SearchBar_SearchBar = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    searchQuery: Object(selectors["k" /* getSearchQuery */])(state),
    searchStatus: Object(selectors["l" /* getSearchStatus */])(state),
    searchPersona: Object(selectors["j" /* getSearchPersona */])(state)
  };
})(SearchBar_SearchBar));
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./pages/documents/index.js
var documents_jsx = external_react_default.a.createElement;

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




























Documents.defaultProps = {
  documents: []
};

function Documents({
  documents,
  documentsNextToken,
  documentsTotal,
  dispatch,
  searchQuery,
  searchPersona,
  searchResults,
  kendraResults,
  kendraFilteredResults,
  searchStatus,
  searchTotalDocuments,
  searchTotalMatches,
  kendraQueryId,
  kendraFilteredQueryId,
  kendraResultCount,
  kendraFilteredResultCount,
  track,
  selectedSearch
}) {
  const [sentinelRef, isSentinelVisible] = Object(external_react_intersection_observer_["useInView"])({
    threshold: 1
  });
  const {
    status
  } = useFetchDocuments({
    dispatch,
    nextToken: documentsNextToken,
    isSentinelVisible
  });
  const doSearch = useSearchCallback(dispatch, searchPersona);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions["g" /* setSearchQuery */])(''));
  }, []);
  Object(external_react_["useEffect"])(() => {
    doSearch(searchQuery);
  }, [searchQuery, doSearch]);
  let files = documents.map(({
    documentId,
    documentName,
    documentStatus,
    documentCreatedOn,
    documentCompletedOn
  }) => {
    const uploadedTime = Object(external_date_fns_["distanceInWordsToNow"])(`${documentCreatedOn}Z`, {
      addSuffix: true
    });
    const processedTime = documentCompletedOn && Object(external_date_fns_["distanceInWords"])(`${documentCreatedOn}Z`, `${documentCompletedOn}Z`);
    return {
      id: documentId,
      title: documentName,
      link: Object(link_generators["a" /* makeDocumentLink */])(documentId),
      documentStatus: documentStatus,
      uploadedTime,
      processedTime
    };
  });
  const listDetailsClassNames = external_classnames_default()(documents_default.a.listDetails);
  const introClassNames = external_classnames_default()(documents_default.a.intro);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(ui_actions["b" /* setHeaderProps */])({
      showNavigation: !!searchQuery
    }));
  }, [searchQuery]);

  if (documentsTotal === 0 && status === 'success') {
    return documents_jsx("div", {
      className: documents_default.a.documents
    }, documents_jsx("p", {
      className: "noContent"
    }, "No documents found. ", documents_jsx("br", null), documents_jsx(Button["b" /* default */], {
      link: {
        href: '/select'
      }
    }, "+ Add a new Document")));
  }

  const isQueryLongEnough = searchQuery && searchQuery.length >= configs["b" /* MIN_SEARCH_QUERY_LENGTH */];
  return documents_jsx("div", {
    className: documents_default.a.documents
  }, documents_jsx("div", {
    className: introClassNames
  }, !searchQuery && documents_jsx("h3", null, "Search through documents to find the information you are looking for"), documents_jsx(components_SearchBar_SearchBar, {
    className: documents_default.a.searchBar,
    light: true,
    suggestions: configs["a" /* ENABLE_KENDRA */] && ['What is diabetes?', 'What are the types of diabetes?', 'How many people have diabetes?', 'How to manage kidney disease', 'Does high blood pressure cause kidney disease?', 'How to prevent kidney disease']
  })), status === 'pending' && !files.length && documents_jsx(Loading["a" /* default */], null), (status === 'success' || !!files.length) && !searchQuery && documents_jsx(external_react_["Fragment"], null, documents_jsx("div", {
    className: listDetailsClassNames
  }, documents_jsx("h3", null, "Document list"), documents_jsx("p", {
    className: documents_default.a.instructions
  }, !!files.length && documents_jsx("span", {
    className: documents_default.a.fileCount
  }, "Showing ", files.length, " of ", documentsTotal, " document", documentsTotal !== 1 && 's'), "Analyze a document from the list of documents below, or ", documents_jsx(link_default.a, {
    href: "/select"
  }, documents_jsx("a", null, "upload your own documents")), ".")), documents_jsx(DocumentList["a" /* default */], {
    items: files,
    className: documents_default.a.list
  }), status === 'pending' && !!files.length && documents_jsx(Loading["a" /* default */], {
    size: 64,
    overlay: false,
    className: documents_default.a.loadingItems
  }), status === 'success' && documentsNextToken && documents_jsx("div", {
    ref: sentinelRef,
    className: documents_default.a.sentinel
  })), status === 'error' && documents_jsx("p", {
    className: "noContent"
  }, "Something went wrong, please refresh the page to try again."), searchQuery && documents_jsx(external_react_default.a.Fragment, null, documents_jsx("div", null, configs["a" /* ENABLE_KENDRA */] ? documents_jsx(components_SearchTypeTabs_SearchTypeTabs, null) : null, documents_jsx("div", {
    className: documents_default.a.searchResultContainer
  }, !configs["a" /* ENABLE_KENDRA */] || selectedSearch === 'es' || selectedSearch === 'both' ? documents_jsx(SearchResults["a" /* default */], {
    results: searchResults,
    searchStatus: searchStatus,
    searchQuery: searchQuery,
    searchTotalDocuments: searchTotalDocuments,
    searchTotalMatches: searchTotalMatches,
    isComparing: selectedSearch === 'both'
  }) : null, selectedSearch === 'both' && documents_jsx(TooltipButton_TooltipButton, {
    tooltip: documents_jsx(external_react_default.a.Fragment, null, documents_jsx("p", null, "In a traditional keyword search, the results are provided in a list. The user needs to go through the list, select a document that may have the answer, and then go find the answer within the document."), documents_jsx("p", null, "Amazon Kendra is automating all of that to parse the results. It shortens the cycle of opening the link and directly extracts suggested answers, as well as frequently asked questions related to the search query."))
  }, documents_jsx("div", {
    className: documents_default.a.compareButton
  }, documents_jsx("img", {
    src: "/static/images/icon_tip.svg"
  }), "What's the difference?")), configs["a" /* ENABLE_KENDRA */] && (selectedSearch === 'kendra' || selectedSearch === 'both') ? documents_jsx(KendraResults_KendraResults, {
    results: kendraResults,
    filteredResults: kendraFilteredResults,
    searchStatus: searchStatus,
    searchQuery: searchQuery,
    kendraQueryId: kendraQueryId,
    filteredQueryId: kendraFilteredQueryId,
    resultCount: kendraResultCount,
    filteredResultCount: kendraFilteredResultCount,
    searchPersona: searchPersona,
    showPersonaSelector: selectedSearch === 'kendra',
    isComparing: selectedSearch === 'both'
  }) : null, searchStatus === 'pending' && isQueryLongEnough && documents_jsx(Loading["a" /* default */], null)))));
}

/* harmony default export */ var pages_documents = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    documents: Object(documents_selectors["b" /* getDocuments */])(state),
    documentsNextToken: Object(selectors["d" /* getDocumentsNextToken */])(state),
    documentsTotal: Object(selectors["e" /* getDocumentsTotal */])(state),
    searchQuery: Object(selectors["a" /* getCleanSearchQuery */])(state),
    searchStatus: Object(selectors["l" /* getSearchStatus */])(state),
    searchPersona: Object(selectors["j" /* getSearchPersona */])(state),
    searchResults: getSearchResults(state),
    kendraResults: getKendraResults(state),
    kendraFilteredResults: getKendraFilteredResults(state),
    searchTotalDocuments: Object(selectors["m" /* getSearchTotalDocuments */])(state),
    searchTotalMatches: Object(selectors["n" /* getSearchTotalMatches */])(state),
    kendraQueryId: Object(selectors["h" /* getKendraQueryId */])(state),
    kendraFilteredQueryId: Object(selectors["f" /* getKendraFilteredQueryId */])(state),
    kendraResultCount: Object(selectors["i" /* getKendraResultCount */])(state),
    kendraFilteredResultCount: Object(selectors["g" /* getKendraFilteredResultCount */])(state),
    track: Object(ui_selectors["c" /* getSelectedTrackId */])(state),
    selectedSearch: Object(ui_selectors["b" /* getSelectedSearch */])(state)
  };
})(Documents));
/**
 * Conditionally fetch documents.
 *
 * @param {Function} dispatch Redux dispatch function
 * @param {String} nextToken Indicates that there are more documents available to fetch
 * @param {Boolean} isSentinelVisible Is the window scrolled to the end of the list and the are more docs to fetch
 * @return {Object} Returns an object with the current fetch status
 */

function useFetchDocuments({
  dispatch,
  nextToken,
  isSentinelVisible
}) {
  const isMounted = Object(external_react_["useRef"])(true);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    if (!status) dispatch(Object(actions["e" /* setDocumentsNextToken */])(null));
    const isFirstFetch = !!(!nextToken && !status);
    const isReadyToFetchMore = !!(nextToken && isSentinelVisible && status === 'success');

    if (isReadyToFetchMore || isFirstFetch) {
      setStatus('pending'); // Immediately clear the nextToken until we hear back from the fetch.
      // The response may or may not include a new nextToken.

      nextToken && dispatch(Object(actions["e" /* setDocumentsNextToken */])(null)); // Fetch documents

      dispatch(Object(documents_actions["f" /* fetchDocuments */])({
        nextToken
      })).then(() => {
        isMounted.current && setStatus('success');
      }).catch(() => {
        isMounted.current && setStatus('error');
      });
    }
  }, [dispatch, nextToken, isSentinelVisible, status]); // Ensure we don't try to set state after component unmount

  Object(external_react_["useEffect"])(() => () => isMounted.current = false, []);
  return {
    status
  };
}
/**
 * Create a throttled search handler.
 * Search query must be greater than or equal to MIN_SEARCH_QUERY_LENGTH.
 *
 * @param {Function} dispatch Redux dispatch function
 * @return {Function} Returns a search handler
 */


function useSearchCallback(dispatch, persona) {
  const isMounted = Object(external_react_["useRef"])(true); // Ensure we don't try to set state after component unmount

  Object(external_react_["useEffect"])(() => () => isMounted.current = false, []);
  const handleSearchChange = Object(external_react_["useCallback"])(k => {
    if (k && k.length >= configs["b" /* MIN_SEARCH_QUERY_LENGTH */]) {
      dispatch(Object(actions["h" /* setSearchStatus */])('pending'));
      const params = Object(external_ramda_["reject"])(external_ramda_["isNil"], {
        k,
        persona
      }); // Clear out old search results

      dispatch(clearSearchResults()); // Search documents

      dispatch(search(params)).then(() => {
        isMounted.current && dispatch(Object(actions["h" /* setSearchStatus */])('success'));
      }).catch(err => {
        console.log(err);
        isMounted.current && dispatch(Object(actions["h" /* setSearchStatus */])('error'));
      });
    }
  }, [dispatch, persona]);
  return handleSearchChange;
}

/***/ }),

/***/ "ix55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Highlight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CliN");
/* harmony import */ var react_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sRQy");
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Highlight_scss__WEBPACK_IMPORTED_MODULE_3__);
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




Highlight.defaultProps = {};
function Highlight(_ref) {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  const matchClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Highlight_scss__WEBPACK_IMPORTED_MODULE_3___default.a.match, className);
  return __jsx(react_highlighter__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    matchClass: matchClassNames
  }, rest), children);
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

/***/ "kOgf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setSelectedTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setHeaderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setSelectedSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dismissWalkthrough; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_action_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ef8z");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IxHd");
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




const setSelectedTrack = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SET_SELECTED_TRACK */ "r"], selectedTrack => {
  localStorage.setItem('track', selectedTrack);
  return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["set"])(_data__WEBPACK_IMPORTED_MODULE_3__[/* lensSelectedTrack */ "e"], selectedTrack, {});
});
const setHeaderProps = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SET_HEADER_PROPS */ "m"], props => Object(ramda__WEBPACK_IMPORTED_MODULE_1__["set"])(_data__WEBPACK_IMPORTED_MODULE_3__[/* lensHeaderProps */ "c"], props, {}));
const setSelectedSearch = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types_js__WEBPACK_IMPORTED_MODULE_2__[/* SET_SELECTED_SEARCH */ "q"], searchType => Object(ramda__WEBPACK_IMPORTED_MODULE_1__["set"])(_data__WEBPACK_IMPORTED_MODULE_3__[/* lensSelectedSearch */ "d"], searchType, {}));
const dismissWalkthrough = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_types_js__WEBPACK_IMPORTED_MODULE_2__[/* DISMISS_WALKTHROUGH */ "d"], () => {
  localStorage.setItem('dismissedWalkthrough', 1);
  return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["set"])(_data__WEBPACK_IMPORTED_MODULE_3__[/* lensDismissedWalkthrough */ "b"], true, {});
});

/***/ }),

/***/ "kiXm":
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer-2eEnK"
};

/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "o794":
/***/ (function(module, exports) {

module.exports = {
	"result": "result-35KTp"
};

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

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

/***/ "q+wu":
/***/ (function(module, exports) {

module.exports = require("react-joyride");

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

/***/ "quyw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export trackSchema */
/* unused harmony export tracksSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lensTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lensTrack; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rEeI");
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalizr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LQ3n");
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


 // Track Schemas

const trackSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('tracks');
const tracksSchema = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Array(trackSchema); // Track Lenses

const lensTracks = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(['entities', 'tracks']);
const lensTrack = id => Object(ramda__WEBPACK_IMPORTED_MODULE_1__["lensPath"])(['entities', 'tracks', id]);
const kendraModeDescription = `
In this track, you can search through multiple documents and find information faster
and more efficiently, using  traditional search based technologies such as Amazon 
Elasticsearch Service (Amazon ES) as well using state-of-the-art machine learning and natural language enterprise search
with Amazon Kendra.

Once you select a document, you'll be able to interact with Amazon Textract,
Amazon Comprehend, and Amazon Comprehend Medical to experience the power
of document digitization and extraction of sensitive information.

For demo purposes, the solution is pre-loaded with data related to certain medical conditions such as Diabetes and Kidney Disease. Ask a question related to these topics or use the suggested queries in the search bar and explore the different search capabilities.
`;
const classicModeDescription = `In this track, you can search through multiple documents and find information faster
and more efficiently, using Amazon Elasticsearch.

Once you select a document, you'll be able to interact with Amazon Textract,
Amazon Comprehend, and Amazon Comprehend Medical to experience the power
of document digitization and extraction of sensitive information.`;
const discoveryTrackDescription = _constants_configs__WEBPACK_IMPORTED_MODULE_2__[/* ENABLE_KENDRA */ "a"] ? kendraModeDescription : classicModeDescription;
; // Initial Data

/* harmony default export */ __webpack_exports__["a"] = ({
  search: {
    id: 'search',
    title: 'Discovery',
    subtitle: 'Search across many documents, or within a single document',
    longDescription: discoveryTrackDescription,
    icon: '/static/images/icon_cloud-search.svg',
    palette: 'blue'
  },
  redaction: {
    id: 'redaction',
    title: 'Compliance',
    subtitle: 'Redact information from a document',
    longDescription: `
      In the compliance track, you can redact information from documents. You have the
      capability to redact specific key-value pairs detected by Amazon Textract, entities
      detected by Amazon Comprehend and medical entities detected by Comprehend
      Medical. You also have the flexibility to redact specific word matches under the
      Preview Tab.

      These controls help you redact Protected Health Information (PHI) and other
      sensitive information that may be critical to your use case. You also have the option
      to download the redacted document before you would want to share it.
    `,
    icon: '/static/images/icon_redact.svg',
    palette: 'teal'
  },
  workflow: {
    id: 'workflow',
    title: 'Workflow automation',
    subtitle: 'Edit and transfer data to other tools',
    longDescription: `
      This track focusses on how data from different AWS services in DUS can be
      consumed. The data extracted from DUS is available in the backend storage
      (Amazon S3) and then it can be consumed by your downstream dependencies.
    `,
    icon: '/static/images/icon_workflow.svg',
    palette: 'purple'
  }
});

/***/ }),

/***/ "rEeI":
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),

/***/ "rONH":
/***/ (function(module, exports) {

module.exports = {
	"title": "title-15Oii",
	"header": "header-1_bSb"
};

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sL8Q":
/***/ (function(module, exports) {

module.exports = {
	"searchResults": "searchResults-33hC1",
	"comparing": "comparing-19ERT",
	"resultItem": "resultItem-1sbNN",
	"count": "count-2BM1l",
	"lines": "lines-3IGUN",
	"searchSummary": "searchSummary-11l3c",
	"noContent": "noContent-WUVRw"
};

/***/ }),

/***/ "sRQy":
/***/ (function(module, exports) {

module.exports = {
	"match": "match-1Rh7_"
};

/***/ }),

/***/ "u+ID":
/***/ (function(module, exports) {

module.exports = {
	"base": "base-17JkT",
	"doubleWidth": "doubleWidth-2izsf",
	"resultContainer": "resultContainer-rAh9S",
	"topNav": "topNav-2bgj2",
	"comparing": "comparing-1hnS2"
};

/***/ }),

/***/ "v97B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkWithClickHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


const WrappedLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function WrappedLink(_ref, ref) {
  let {
    customClick,
    onClick,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["customClick", "onClick", "children"]);

  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    customClick(e);
    onClick(e);
  }, [customClick, onClick]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children), _objectSpread({
    ref,
    onClick: handleClick
  }, rest));
});
function LinkWithClickHandler(_ref2) {
  let {
    onClick,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["onClick", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, rest, {
    passHref: true
  }), __jsx(WrappedLink, {
    customClick: onClick
  }, children));
}

/***/ }),

/***/ "vGbi":
/***/ (function(module, exports) {

module.exports = {
	"button": "button-20eDB",
	"selected": "selected-3oYfG"
};

/***/ }),

/***/ "vKLX":
/***/ (function(module, exports) {

module.exports = {
	"topResults": "topResults-aOpxh",
	"results": "results-3LXAq",
	"result": "result-14kGO",
	"showMore": "showMore-2wvkt",
	"expanded": "expanded-3usxe"
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

/***/ "wtyx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMetaLens; });
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
 // Meta Lenses

const getMetaLens = key => Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensPath"])(['entities', 'meta', key]); // Initial Data

/* harmony default export */ __webpack_exports__["a"] = ({
  currentPageNumber: 1,
  documentsNextToken: null,
  documentsTotal: 0,
  searchQuery: '',
  searchPersona: undefined,
  searchStatus: '',
  searchTotalDocuments: 0,
  searchTotalMatches: 0
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