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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "1AcG":
/***/ (function(module, exports) {

module.exports = {
	"header": "header-1KEA5",
	"disabled": "disabled-oHfur",
	"footer": "footer-3PntP",
	"subtitle": "subtitle-2NrIY"
};

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

/***/ "4St0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Button/Button.js
var Button = __webpack_require__("8wsC");

// EXTERNAL MODULE: ./components/Card/Card.js
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/DocumentList/DocumentList.js + 1 modules
var DocumentList = __webpack_require__("aj2n");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/FeatureTooltip/FeatureTooltip.scss
var FeatureTooltip = __webpack_require__("VXoD");
var FeatureTooltip_default = /*#__PURE__*/__webpack_require__.n(FeatureTooltip);

// CONCATENATED MODULE: ./components/FeatureTooltip/FeatureTooltip.js
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



FeatureTooltip_FeatureTooltip.defaultProps = {};
function FeatureTooltip_FeatureTooltip({
  className,
  description,
  title
}) {
  const {
    0: isVisible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const tooltipClassNames = external_classnames_default()(FeatureTooltip_default.a.tooltip, className);
  return __jsx("div", {
    className: tooltipClassNames
  }, __jsx("img", {
    src: "/static/images/icon_feature.svg",
    onClick: () => setVisible(isVisible => !isVisible)
  }), isVisible && __jsx("aside", {
    className: FeatureTooltip_default.a.overlay
  }, __jsx("header", null, __jsx("h4", null, title), __jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    onClick: () => setVisible(false)
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#f2f4f4",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, __jsx("path", {
    d: "m6 6 12 12"
  }), __jsx("path", {
    d: "m6 6 12 12",
    transform: "matrix(-1 0 0 1 24 0)"
  })))), __jsx("p", null, description)));
}
// EXTERNAL MODULE: ./components/FormInput/FormInput.js
var FormInput = __webpack_require__("NQOJ");

// EXTERNAL MODULE: ./components/Highlight/Highlight.js
var Highlight = __webpack_require__("ix55");

// EXTERNAL MODULE: ./components/Loading/Loading.js
var Loading = __webpack_require__("jlXy");

// EXTERNAL MODULE: ./components/Pager/Pager.js
var Pager = __webpack_require__("QeQk");

// EXTERNAL MODULE: ./components/SearchResults/SearchResults.js
var SearchResults = __webpack_require__("gAkU");

// EXTERNAL MODULE: ./components/Tabs/Tabs.js
var Tabs = __webpack_require__("9sU6");

// CONCATENATED MODULE: ./constants/test-data.js
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
const searchResults = [{
  documentId: '450f1114-a00a-11e9-b6e5-6aca7549dede',
  name: 'W2 Sample 1.jpg',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 2,
  brief: 'ZIP or foreign postal code ...City or town, province or state, country, and ZIP or foreign postal code',
  lines: ['ZIP or foreign postal code', 'City or town, province or state, country, and ZIP or foreign postal code']
}, {
  documentId: '43b4fee6-a00a-11e9-a9c5-baf29d9b3c50',
  name: '1099-DIV.jpg',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 2,
  brief: 'or foreign postal code, and telephone no. ...City or town, state or province, country, and ZIP or foreign postal code',
  lines: ['or foreign postal code, and telephone no.', 'City or town, state or province, country, and ZIP or foreign postal code']
}, {
  documentId: '000613cc-a07a-11e9-bf13-4e3600b1ff84',
  name: 'textract-dg_3pages.pdf',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 0,
  brief: '',
  lines: []
}, {
  documentId: '43ebaafe-a00a-11e9-badb-526a3076f9f5',
  name: '1099-PATR.jpg',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 2,
  brief: 'or foreign postal code, and telephone no. ...City or town, state or province, country, and ZIP or foreign postal code',
  lines: ['or foreign postal code, and telephone no.', 'City or town, state or province, country, and ZIP or foreign postal code']
}, {
  documentId: '46e775da-a00a-11e9-b6e5-6aca7549dede',
  name: 'Form 1097-BTC.jpg',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 2,
  brief: 'province, country, ZIP or foreign postal code, and telephone no. ...City or town, state or province, country, and ZIP or foreign postal code',
  lines: ['province, country, ZIP or foreign postal code, and telephone no.', 'City or town, state or province, country, and ZIP or foreign postal code']
}, {
  documentId: '444e28fa-a00a-11e9-b6e5-6aca7549dede',
  name: 'Form 3921.jpg',
  bucket: 'v041textractdemo-v041textractdemodocumentss3bucke-1nn0uy68vduho',
  count: 2,
  brief: 'country, and ZIP or foreign postal code ...City or town, state or province, country, and ZIP or foreign postal code',
  lines: ['country, and ZIP or foreign postal code', 'City or town, state or province, country, and ZIP or foreign postal code']
}];
// EXTERNAL MODULE: ./pages/styleguide/styleguide.scss
var styleguide = __webpack_require__("p1Rp");
var styleguide_default = /*#__PURE__*/__webpack_require__.n(styleguide);

// CONCATENATED MODULE: ./pages/styleguide/index.js
var styleguide_jsx = external_react_default.a.createElement;

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














Styleguide.getInitialProps = function () {
  return {
    pageTitle: 'Styleguide'
  };
};

function Styleguide() {
  const {
    typeRefs: {
      h1,
      h2,
      h3,
      h4,
      h5,
      lead,
      primary,
      secondary,
      small
    },
    typeSizes: {
      h1Size,
      h2Size,
      h3Size,
      h4Size,
      h5Size,
      leadSize,
      primarySize,
      secondarySize,
      smallSize
    }
  } = useTypeResizer();
  const colorClasses = Object.keys(styleguide_default.a).filter(className => className.indexOf('color-') === 0);
  return styleguide_jsx("div", null, styleguide_jsx("h2", null, "Styleguide"), styleguide_jsx("section", null, styleguide_jsx("h3", null, "Typography"), styleguide_jsx("p", null, "Use the mixins in ", styleguide_jsx("code", null, "app/styles/shared/_typography.scss"), " to apply type styles to an element."), styleguide_jsx("pre", null, styleguide_jsx("code", null, `
@import '../styles/shared/index';

.custom-heading {
  @include type-heading-h1;
}

.white-heading {
  @include type-heading-h1(color(white)); // color override
}

`)), styleguide_jsx("hr", null), styleguide_jsx("h4", null, "Heading Mixin Samples"), styleguide_jsx("h1", {
    ref: h1
  }, "H1, ", h1Size, " Ember Bold (type-heading-h1)"), styleguide_jsx("h2", {
    ref: h2
  }, "H2, ", h2Size, " Ember Medium (type-heading-h2)"), styleguide_jsx("h3", {
    ref: h3
  }, "H3, ", h3Size, " Ember Regular (type-heading-h3)"), styleguide_jsx("h4", {
    ref: h4
  }, "H4, ", h4Size, " Ember Bold (type-heading-h4)"), styleguide_jsx("h5", {
    ref: h5
  }, "H5, ", h5Size, " Ember Bold (type-heading-h5)"), styleguide_jsx("hr", null), styleguide_jsx("h4", null, "Body Mixin Samples"), styleguide_jsx("p", {
    className: styleguide_default.a.lead,
    ref: lead
  }, "P, ", leadSize, " Ember Regular (type-body-lead)"), styleguide_jsx("p", {
    className: styleguide_default.a.primary,
    ref: primary
  }, "P, ", primarySize, " Ember Regular (type-body-primary)"), styleguide_jsx("p", {
    className: styleguide_default.a.supplemental,
    ref: secondary
  }, "P, ", secondarySize, " Ember Regular (type-body-secondary)"), styleguide_jsx("p", {
    className: styleguide_default.a.small,
    ref: small
  }, "P, ", smallSize, " Ember Bold (type-body-supplemental)"), styleguide_jsx("hr", null)), styleguide_jsx("section", null, styleguide_jsx("h3", null, "Colors"), styleguide_jsx("p", null, "Use the ", styleguide_jsx("code", null, "color"), " function defined in ", styleguide_jsx("code", null, "app/styles/shared/_colors.scss"), ". Do not use hard-coded hex codes or rgb/hsl values."), styleguide_jsx("pre", null, styleguide_jsx("code", null, `
@import '../styles/shared/colors';

.some-element {
  background: color(blue);
  color: color(blue, 10);
}

`)), styleguide_jsx("p", null, "It is considered better practice to assign colors to semantic variables instead of as direct values of a property."), styleguide_jsx("pre", null, styleguide_jsx("code", null, `
@import '../styles/shared/colors';

$button-border-color: color(blue);

.button {
  border-color: $button-border-color;
}

`)), styleguide_jsx("ul", {
    className: styleguide_default.a.colors
  }, colorClasses.map(colorClass => {
    return styleguide_jsx("li", {
      className: styleguide_default.a[colorClass],
      key: colorClass
    }, styleguide_jsx("span", null, colorClass.replace('color-', '').replace('-core', '').replace('-', ' ')));
  }))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Grids"), styleguide_jsx("p", null, "This site uses", ' ', styleguide_jsx("a", {
    href: "http://oddbird.net/susy/",
    target: "_blank"
  }, "Susy 3.0"), ' ', "for grids. There is no site-wide grid system that all items adhere to. Instead, Susy provides a few helper functions that return widths of colspans and gutters. There are intentionally no global classes or markup schemes to aid in creating grids \u2014 these are usually too rigid and require lots of unnecessary markup to get things working. The grid configs and mixins for common layouts can be found in", ' ', styleguide_jsx("code", null, `app/styles/shared/_grids.scss`)), styleguide_jsx("div", {
    className: styleguide_default.a.grid
  })), styleguide_jsx("section", {
    className: styleguide_default.a.buttons
  }, styleguide_jsx("h2", null, "Buttons"), styleguide_jsx("p", null, "Use the ", styleguide_jsx("code", null, `palette`), " prop to change the button color. Available palette values: ", Button["a" /* BUTTON_PALETTES */].join(', '), ". The default palette is orange. NOTE: Buttons have a min-width set."), styleguide_jsx("div", null, styleguide_jsx("h3", null, "Primary"), styleguide_jsx("p", null, styleguide_jsx("code", null, `inverted={false}`), " (default)"), Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx("p", {
    key: palette
  }, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    palette: palette
  }, "Sample Button"), styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    palette: palette
  }, "..."))), styleguide_jsx("p", null, styleguide_jsx("code", null, `disabled={true}`)), styleguide_jsx("p", null, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    disabled: true
  }, "Sample Button"), styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    disabled: true
  }, "..."))), styleguide_jsx("div", null, styleguide_jsx("h3", null, "Secondary"), styleguide_jsx("p", null, styleguide_jsx("code", null, `inverted={true}`)), Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx("p", {
    key: palette
  }, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    inverted: true,
    palette: palette
  }, "Sample Button"), styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    inverted: true,
    palette: palette
  }, "..."))), styleguide_jsx("p", null, styleguide_jsx("code", null, `disabled={true}`)), styleguide_jsx("p", null, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    inverted: true,
    disabled: true
  }, "Sample Button"), styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    inverted: true,
    disabled: true
  }, "..."))), styleguide_jsx("div", null, styleguide_jsx("h3", null, "Simple"), styleguide_jsx("p", null, "The inverted prop is ignored for simple buttons."), styleguide_jsx("p", null, styleguide_jsx("code", null, `simple={true}`)), styleguide_jsx("p", null, Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx(Button["b" /* default */], {
    key: palette,
    link: {
      href: '#'
    },
    simple: true,
    palette: palette
  }, "Sample Button"))), styleguide_jsx("p", null, styleguide_jsx("code", null, `disabled={true}`)), styleguide_jsx("p", null, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    simple: true,
    disabled: true
  }, "Sample Button"))), styleguide_jsx("div", null, styleguide_jsx("h3", null, "With Icons"), styleguide_jsx("p", null, Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx(Button["b" /* default */], {
    key: palette,
    link: {
      href: '#'
    },
    simple: true,
    palette: palette
  }, styleguide_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, styleguide_jsx("path", {
    d: "m15.4076667 4.52484732h-6.05924085v-2.56410764c0-1.67321315 1.35640725-3.0296204 3.02962045-3.0296204 1.6732131 0 3.0296204 1.35640725 3.0296204 3.0296204zm0 1.12134639v14.53506789l-2.2482447 4.9740929c-.227471.5032647-.8198494.7268396-1.3231141.4993686-.2356073-.1064924-.4208099-.3001023-.5167445-.5402022l-1.97113755-4.9332593v-14.53506789z",
    fillRule: "evenodd",
    transform: "matrix(.70710678 .70710678 -.70710678 .70710678 12.349321 -5.139053)"
  })), styleguide_jsx("span", null, "Sample Button")))), styleguide_jsx("p", null, Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx(Button["b" /* default */], {
    key: palette,
    link: {
      href: '#'
    },
    simple: true,
    palette: palette
  }, styleguide_jsx("span", null, "Sample Button"), styleguide_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, styleguide_jsx("path", {
    d: "m15.4076667 4.52484732h-6.05924085v-2.56410764c0-1.67321315 1.35640725-3.0296204 3.02962045-3.0296204 1.6732131 0 3.0296204 1.35640725 3.0296204 3.0296204zm0 1.12134639v14.53506789l-2.2482447 4.9740929c-.227471.5032647-.8198494.7268396-1.3231141.4993686-.2356073-.1064924-.4208099-.3001023-.5167445-.5402022l-1.97113755-4.9332593v-14.53506789z",
    fillRule: "evenodd",
    transform: "matrix(.70710678 .70710678 -.70710678 .70710678 12.349321 -5.139053)"
  }))))), styleguide_jsx("p", null, Button["a" /* BUTTON_PALETTES */].map(palette => styleguide_jsx(Button["b" /* default */], {
    key: palette,
    link: {
      href: '#'
    },
    palette: palette
  }, styleguide_jsx("span", null, "Sample Button"), styleguide_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, styleguide_jsx("path", {
    d: "m15.4076667 4.52484732h-6.05924085v-2.56410764c0-1.67321315 1.35640725-3.0296204 3.02962045-3.0296204 1.6732131 0 3.0296204 1.35640725 3.0296204 3.0296204zm0 1.12134639v14.53506789l-2.2482447 4.9740929c-.227471.5032647-.8198494.7268396-1.3231141.4993686-.2356073-.1064924-.4208099-.3001023-.5167445-.5402022l-1.97113755-4.9332593v-14.53506789z",
    fillRule: "evenodd",
    transform: "matrix(.70710678 .70710678 -.70710678 .70710678 12.349321 -5.139053)"
  }))))), styleguide_jsx("p", null, styleguide_jsx("code", null, `disabled={true}`)), styleguide_jsx("p", null, styleguide_jsx(Button["b" /* default */], {
    link: {
      href: '#'
    },
    simple: true,
    disabled: true
  }, "Sample Button", styleguide_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, styleguide_jsx("path", {
    d: "m15.4076667 4.52484732h-6.05924085v-2.56410764c0-1.67321315 1.35640725-3.0296204 3.02962045-3.0296204 1.6732131 0 3.0296204 1.35640725 3.0296204 3.0296204zm0 1.12134639v14.53506789l-2.2482447 4.9740929c-.227471.5032647-.8198494.7268396-1.3231141.4993686-.2356073-.1064924-.4208099-.3001023-.5167445-.5402022l-1.97113755-4.9332593v-14.53506789z",
    fillRule: "evenodd",
    transform: "matrix(.70710678 .70710678 -.70710678 .70710678 12.349321 -5.139053)"
  })))))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Form Controls"), styleguide_jsx("h3", null, "Single Line Text Inputs"), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    label: "Default text input",
    defaultValue: "Some default value"
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    label: "Disabled text input",
    defaultValue: "Some default value",
    disabled: true
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    label: "Erroneous text input",
    defaultValue: "Some default value",
    error: true
  })), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "Multi Line Text Inputs"), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "textarea",
    label: "Default textarea input",
    defaultValue: "Some default value"
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "textarea",
    label: "Disabled textarea input",
    defaultValue: "Some default value",
    disabled: true
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "textarea",
    label: "Erroneous textarea input",
    defaultValue: "Some default value",
    error: true
  })), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "Search Inputs"), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "search",
    defaultValue: "Search term..."
  })), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "Checkbox Inputs"), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "checkbox",
    label: "Default checkbox"
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "checkbox",
    label: "Disabled checkbox",
    disabled: true
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "checkbox",
    label: "Erroneous checkbox",
    error: true
  })), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "Radio Inputs"), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "radio",
    label: "Default radio"
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "radio",
    label: "Disabled radio",
    disabled: true
  })), styleguide_jsx("p", null, styleguide_jsx(FormInput["a" /* default */], {
    type: "radio",
    label: "Erroneous radio",
    error: true
  }))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Tables"), styleguide_jsx("table", null, styleguide_jsx("thead", null, styleguide_jsx("tr", null, styleguide_jsx("th", null, "Key"), styleguide_jsx("th", null, "Value"))), styleguide_jsx("tbody", null, styleguide_jsx("tr", null, styleguide_jsx("td", null, "some-key"), styleguide_jsx("td", null, "some-value")), styleguide_jsx("tr", {
    className: "selected"
  }, styleguide_jsx("td", null, "some-selected-key"), styleguide_jsx("td", null, "some-selected-value")), styleguide_jsx("tr", null, styleguide_jsx("td", null, "some-key"), styleguide_jsx("td", null, "some-value")), styleguide_jsx("tr", null, styleguide_jsx("td", null, "some-key"), styleguide_jsx("td", {
    className: "selected"
  }, "some-selected-value"))))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Document List"), styleguide_jsx(DocumentList["a" /* default */], {
    items: [{
      title: 'Document-Name_1.pdf',
      link: {
        href: '#'
      }
    }, {
      title: 'Document-Name_2.pdf',
      link: {
        href: '#'
      },
      pending: true
    }, {
      title: 'Document-Name_3.pdf',
      link: {
        href: '#'
      }
    }, {
      title: 'Document-Name_4.pdf',
      link: {
        href: '#'
      }
    }, {
      title: 'Document-Name_5.pdf',
      link: {
        href: '#'
      }
    }]
  })), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Cards"), styleguide_jsx("h3", null, "Without Icons"), styleguide_jsx(Card["a" /* default */], {
    title: "Black Card Title",
    subtitle: "This is the subtitle."
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    title: "Blue Card Title",
    palette: "blue",
    subtitle: "This is the subtitle."
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    title: "Teal Card Title",
    palette: "teal",
    subtitle: "This is the subtitle."
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    title: "Purple Card Title",
    palette: "purple",
    subtitle: "This is the subtitle."
  }), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "With Icons"), styleguide_jsx(Card["a" /* default */], {
    palette: "blue",
    icon: styleguide_jsx("img", {
      src: "/static/images/icon_cloud-search.svg"
    }),
    title: "Conduct a search",
    subtitle: "Find keys, values and words across the documents."
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    palette: "teal",
    icon: styleguide_jsx("img", {
      src: "/static/images/icon_redact.svg"
    }),
    title: "Make redactions",
    subtitle: "Redact values (names, SS#s etc) across these documents."
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    palette: "purple",
    icon: styleguide_jsx("img", {
      src: "/static/images/icon_workflow.svg"
    }),
    title: "Open a document",
    subtitle: "Chose a document on the left to see how it was formatted."
  }), styleguide_jsx("hr", null), styleguide_jsx("h3", null, "Different Sizes"), styleguide_jsx(Card["a" /* default */], {
    title: "Loud card",
    subtitle: "Bigger is sometimes better",
    volume: "loud"
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    title: "Conversational card",
    subtitle: "Default state",
    volume: "conversational"
  }), styleguide_jsx("hr", null), styleguide_jsx(Card["a" /* default */], {
    title: "Quiet card",
    subtitle: "Just a whisper will do",
    volume: "quiet"
  })), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Loading Spinner"), styleguide_jsx("p", null, "The spinner overlays/fills its closest ", styleguide_jsx("em", null, "positioned"), " container, and covers it with a semi-transparent background. Its default size is ", Loading["a" /* default */].defaultProps.size, "px."), styleguide_jsx("div", {
    className: styleguide_default.a.loading
  }, styleguide_jsx("p", null, "This is some content inside the filled container."), styleguide_jsx(Loading["a" /* default */], null)), styleguide_jsx("p", null, "The size prop allows you to change the size of the spinner: ", styleguide_jsx("code", null, `size={50}`)), styleguide_jsx("div", {
    className: styleguide_default.a.loading
  }, styleguide_jsx("p", null, "This is some content inside the filled container."), styleguide_jsx(Loading["a" /* default */], {
    size: 50
  })), styleguide_jsx("p", null, "You can turn of the overlay effect by setting ", styleguide_jsx("code", null, `overlay={false}`)), styleguide_jsx("div", {
    className: styleguide_default.a.loading
  }, styleguide_jsx("p", null, "This is some content inside the unfilled container."), styleguide_jsx(Loading["a" /* default */], {
    overlay: false
  }))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Feature Tooltip"), styleguide_jsx(FeatureTooltip_FeatureTooltip, {
    title: "Some cool feature",
    description: "This is a longer description of what the feature is, how it works, and why it's so cool."
  })), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Tabs"), styleguide_jsx(Tabs["a" /* default */], {
    items: [{
      id: 'text',
      title: 'Text',
      content: styleguide_jsx("div", null, "Text Contents")
    }, {
      id: 'forms',
      title: 'Forms',
      content: styleguide_jsx("div", null, "Forms Contents")
    }, {
      id: 'tables',
      title: 'Tables',
      content: styleguide_jsx("div", null, "Tables Contents")
    }, {
      id: 'source',
      title: 'Source',
      content: styleguide_jsx("div", null, "Source Contents")
    }],
    defaultActiveTabId: "text"
  })), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Pager"), styleguide_jsx(Pager["a" /* default */], {
    pageTotal: 4
  }, currentPageNumber => styleguide_jsx("p", null, "Page ", currentPageNumber, " paragraph"))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "Highlight"), styleguide_jsx("p", null, styleguide_jsx(Highlight["a" /* default */], {
    search: "brown fox"
  }, "The quick brown fox jumps over the lazy dog..."))), styleguide_jsx("section", null, styleguide_jsx("h2", null, "SearchResults"), styleguide_jsx(SearchResults["a" /* default */], {
    results: searchResults,
    searchQuery: "foreign",
    searchStatus: "success"
  })));
}

function useTypeResizer() {
  const h1 = Object(external_react_["useRef"])(null);
  const h2 = Object(external_react_["useRef"])(null);
  const h3 = Object(external_react_["useRef"])(null);
  const h4 = Object(external_react_["useRef"])(null);
  const h5 = Object(external_react_["useRef"])(null);
  const lead = Object(external_react_["useRef"])(null);
  const primary = Object(external_react_["useRef"])(null);
  const secondary = Object(external_react_["useRef"])(null);
  const small = Object(external_react_["useRef"])(null);
  const {
    0: h1Size,
    1: setH1Size
  } = Object(external_react_["useState"])(0);
  const {
    0: h2Size,
    1: setH2Size
  } = Object(external_react_["useState"])(0);
  const {
    0: h3Size,
    1: setH3Size
  } = Object(external_react_["useState"])(0);
  const {
    0: h4Size,
    1: setH4Size
  } = Object(external_react_["useState"])(0);
  const {
    0: h5Size,
    1: setH5Size
  } = Object(external_react_["useState"])(0);
  const {
    0: leadSize,
    1: setLeadSize
  } = Object(external_react_["useState"])(0);
  const {
    0: primarySize,
    1: setPrimarySize
  } = Object(external_react_["useState"])(0);
  const {
    0: secondarySize,
    1: setSecondarySize
  } = Object(external_react_["useState"])(0);
  const {
    0: smallSize,
    1: setSmallSize
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleResize() {
    setH1Size(getFontSize(h1.current));
    setH2Size(getFontSize(h2.current));
    setH3Size(getFontSize(h3.current));
    setH4Size(getFontSize(h4.current));
    setH5Size(getFontSize(h5.current));
    setLeadSize(getFontSize(lead.current));
    setPrimarySize(getFontSize(primary.current));
    setSecondarySize(getFontSize(secondary.current));
    setSmallSize(getFontSize(small.current));
  }

  function getFontSize(element) {
    return parseInt(getComputedStyle(element)['font-size'], 10);
  }

  return {
    typeRefs: {
      h1,
      h2,
      h3,
      h4,
      h5,
      lead,
      primary,
      secondary,
      small
    },
    typeSizes: {
      h1Size,
      h2Size,
      h3Size,
      h4Size,
      h5Size,
      leadSize,
      primarySize,
      secondarySize,
      smallSize
    }
  };
}

/* harmony default export */ var pages_styleguide = __webpack_exports__["default"] = (Styleguide);

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4St0");


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

/***/ "9sU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kOgf");
/* harmony import */ var _Tabs_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o4JR");
/* harmony import */ var _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Tabs_scss__WEBPACK_IMPORTED_MODULE_4__);
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





Tabs.defaultProps = {
  children: null,
  items: []
};
function Tabs(_ref) {
  let {
    children,
    track,
    selected,
    className,
    items,
    isTrackTab,
    onSelectTab
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "track", "selected", "className", "items", "isTrackTab", "onSelectTab"]);

  let tabsClassNames = null;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  isTrackTab ? tabsClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.trackTabs, className) : tabsClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tabs, _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.className);

  function handleTabClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    onSelectTab(id);

    if (id == 'searchTrack') {
      dispatch(Object(_store_ui_actions__WEBPACK_IMPORTED_MODULE_3__[/* setSelectedTrack */ "d"])('search'));
    }

    if (id == 'complianceTrack') dispatch(Object(_store_ui_actions__WEBPACK_IMPORTED_MODULE_3__[/* setSelectedTrack */ "d"])('redaction'));
    if (id == 'workflowTrack') dispatch(Object(_store_ui_actions__WEBPACK_IMPORTED_MODULE_3__[/* setSelectedTrack */ "d"])('workflow'));
  }

  return __jsx("div", _extends({
    className: tabsClassNames
  }, rest), __jsx("nav", null, __jsx("ul", null, items.map(({
    id,
    title
  }, i) => {
    return __jsx("li", {
      key: i,
      className: selected === id ? _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : id == 'searchTrack' && track == 'search' ? _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : id == 'complianceTrack' && track == 'redaction' ? _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : id == 'workflowTrack' && track == 'workflow' ? _Tabs_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active : null
    }, __jsx("a", {
      href: "#",
      "data-id": id,
      onClick: handleTabClick
    }, title));
  }))), children);
}

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CARD_PALETTES */
/* unused harmony export CARD_VOLUMES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WabX");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_2__);
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



const CARD_PALETTES = ['blue', 'black', 'teal', 'purple'];
const CARD_VOLUMES = ['loud', 'conversational', 'quiet'];
Card.defaultProps = {
  className: '',
  palette: 'black',
  volume: 'conversational'
};
function Card(_ref) {
  let {
    children,
    className,
    icon,
    palette,
    title,
    subtitle,
    volume
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "icon", "palette", "title", "subtitle", "volume"]);

  const cardClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card, _Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a[palette], _Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a[volume], className);

  function handleKeyPress() {
    if (!rest.onClick) return;
    const code = event.keyCode || event.which;
    if (code === 13) rest.onClick();
  }

  return __jsx("div", _extends({
    className: cardClassNames,
    onKeyPress: handleKeyPress
  }, rest, {
    tabIndex: 0
  }), children ? children : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, icon && __jsx("div", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon
  }, icon), __jsx("div", null, title && __jsx("h3", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, title), subtitle && __jsx("p", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle
  }, subtitle))));
}

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

/***/ "QeQk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_entities_meta_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qjZw");
/* harmony import */ var _store_entities_meta_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+lYZ");
/* harmony import */ var _Pager_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1AcG");
/* harmony import */ var _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Pager_scss__WEBPACK_IMPORTED_MODULE_5__);
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






/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function mapStateToProps(state) {
  return {
    currentPageNumber: Object(_store_entities_meta_selectors__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentPageNumber */ "b"])(state)
  };
})(Pager));

function Pager(_ref) {
  let {
    dispatch,
    children,
    className,
    currentPageNumber,
    noContent,
    pageTotal = 1,
    subtitle
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["dispatch", "children", "className", "currentPageNumber", "noContent", "pageTotal", "subtitle"]);

  const pagerClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.pager, className);
  const isSinglePage = pageTotal === 1;

  function handlePrevClick() {
    const prevPageNumber = Math.max(1, currentPageNumber - 1);
    dispatch && dispatch(Object(_store_entities_meta_actions__WEBPACK_IMPORTED_MODULE_3__[/* setCurrentPageNumber */ "c"])(prevPageNumber));
  }

  function handleNextClick() {
    const nextPageNumber = Math.min(pageTotal, currentPageNumber + 1);
    dispatch && dispatch(Object(_store_entities_meta_actions__WEBPACK_IMPORTED_MODULE_3__[/* setCurrentPageNumber */ "c"])(nextPageNumber));
  }

  const makeKeyPressHandler = fn => () => {
    const code = event.keyCode || event.which;
    if (code === 13) fn();
  };

  return __jsx("div", _extends({
    className: pagerClassNames
  }, rest), __jsx("header", {
    className: _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header
  }, __jsx("div", null, subtitle && __jsx("p", {
    className: _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle
  }, subtitle))), children && children(currentPageNumber), noContent && noContent, __jsx("footer", {
    className: _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.footer
  }, !isSinglePage && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
    onClick: handlePrevClick,
    onKeyPress: makeKeyPressHandler(handlePrevClick),
    className: currentPageNumber === 1 ? _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.disabled : null,
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    tabIndex: currentPageNumber === 1 ? null : 0
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, __jsx("path", {
    d: "m8 12 6 6"
  }), __jsx("path", {
    d: "m8 6 6 6",
    transform: "matrix(-1 0 0 1 22 0)"
  }))), __jsx("span", null, "Page ", currentPageNumber, " of ", pageTotal), __jsx("svg", {
    onClick: handleNextClick,
    onKeyPress: makeKeyPressHandler(handleNextClick),
    className: currentPageNumber === pageTotal ? _Pager_scss__WEBPACK_IMPORTED_MODULE_5___default.a.disabled : null,
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    tabIndex: currentPageNumber === pageTotal ? null : 0
  }, __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, __jsx("path", {
    d: "m16 12-6 6"
  }), __jsx("path", {
    d: "m16 6-6 6",
    transform: "matrix(-1 0 0 1 26 0)"
  }))))));
}

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

/***/ "VXoD":
/***/ (function(module, exports) {

module.exports = {
	"tooltip": "tooltip-3CJne",
	"overlay": "overlay-9qgah"
};

/***/ }),

/***/ "WabX":
/***/ (function(module, exports) {

module.exports = {
	"card": "card-1y4vO",
	"title": "title-3rGNR",
	"loud": "loud-3W6uy",
	"quiet": "quiet-1tSQ-",
	"subtitle": "subtitle-2B10F",
	"icon": "icon-2UAo-",
	"black": "black-2sSiS",
	"blue": "blue-1tUTx",
	"teal": "teal-2nlbC",
	"purple": "purple-2N-WO"
};

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "o4JR":
/***/ (function(module, exports) {

module.exports = {
	"tabs": "tabs-KOXfP",
	"active": "active-VNGch",
	"trackTabs": "trackTabs-3q8_S"
};

/***/ }),

/***/ "p1Rp":
/***/ (function(module, exports) {

module.exports = {
	"colors": "colors-1ie5Q",
	"color-orange-core": "color-orange-core-2U9Qz",
	"color-orange-10": "color-orange-10-EuIvY",
	"color-orange-20": "color-orange-20-En0NB",
	"color-orange-30": "color-orange-30-2h-tF",
	"color-orange-40": "color-orange-40-3x0tm",
	"color-purple-core": "color-purple-core-e2RNc",
	"color-purple-10": "color-purple-10-1R1vo",
	"color-purple-20": "color-purple-20-2M6n0",
	"color-purple-30": "color-purple-30-3HTYL",
	"color-purple-40": "color-purple-40-3GkHh",
	"color-red-core": "color-red-core-jeSTS",
	"color-red-10": "color-red-10-3A1DU",
	"color-red-20": "color-red-20-Trc2u",
	"color-red-30": "color-red-30-15wiy",
	"color-red-40": "color-red-40-2ukGD",
	"color-blue-core": "color-blue-core-3N3dN",
	"color-blue-10": "color-blue-10-3t3a1",
	"color-blue-20": "color-blue-20-158sw",
	"color-blue-30": "color-blue-30-n7u-d",
	"color-blue-40": "color-blue-40-3-f8_",
	"color-magenta-core": "color-magenta-core-k7U7F",
	"color-magenta-10": "color-magenta-10-2iTyc",
	"color-magenta-20": "color-magenta-20-1xG4x",
	"color-magenta-30": "color-magenta-30-1PkoJ",
	"color-magenta-40": "color-magenta-40-109cj",
	"color-teal-core": "color-teal-core-3FgEH",
	"color-teal-10": "color-teal-10-3lKWW",
	"color-teal-20": "color-teal-20-1_l0a",
	"color-teal-30": "color-teal-30-39Vjk",
	"color-teal-40": "color-teal-40-2Y6ci",
	"color-gray-core": "color-gray-core-17Ogz",
	"color-gray-10": "color-gray-10-b8oax",
	"color-gray-20": "color-gray-20-1n4hY",
	"color-gray-30": "color-gray-30-1UDGp",
	"color-gray-40": "color-gray-40-244j-",
	"color-gray-50": "color-gray-50-aWFsS",
	"color-gray-60": "color-gray-60-2_vjQ",
	"color-gray-70": "color-gray-70-29gTZ",
	"color-gray-80": "color-gray-80-185bu",
	"color-gray-90": "color-gray-90-e0lHe",
	"color-gray-95": "color-gray-95-EUGUS",
	"color-gray-100": "color-gray-100-38u-R",
	"color-black-core": "color-black-core-1XZ0s",
	"color-white-core": "color-white-core-2fAKU",
	"lead": "lead-3q3qO",
	"primary": "primary-11jtd",
	"supplemental": "supplemental-NByqX",
	"small": "small-1se_4",
	"grid": "grid-3zuJM",
	"buttons": "buttons-1rhDu",
	"loading": "loading-1uZGE"
};

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