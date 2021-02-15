module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "/Y/U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: ./components/Loading/Loading.js
var Loading = __webpack_require__("jlXy");

// EXTERNAL MODULE: external "react-pdf"
var external_react_pdf_ = __webpack_require__("ZKom");

// EXTERNAL MODULE: ./components/Pager/Pager.js
var Pager = __webpack_require__("QeQk");

// EXTERNAL MODULE: ./components/Button/Button.js
var Button = __webpack_require__("8wsC");

// EXTERNAL MODULE: ./components/TableDownloader/TableDownloader.scss
var TableDownloader = __webpack_require__("2/h2");
var TableDownloader_default = /*#__PURE__*/__webpack_require__.n(TableDownloader);

// CONCATENATED MODULE: ./components/TableDownloader/TableDownloader.js
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



function TableDownloader_TableDownloader({
  table,
  rows
}) {
  const tableBlob = Object(external_react_["useMemo"])(() => {
    const csv = rows.map(row => {
      return row.map(cell => cell.content).map(x => `"${x.replace(/"/g, '""')}"`).join(',');
    }).join('\n');
    return new Blob(['\ufeff', csv], {
      type: 'text/csv'
    });
  }, [rows]);
  const url = Object(external_react_["useMemo"])(() => URL.createObjectURL(tableBlob), [tableBlob]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [url]);
  const {
    Top,
    Left,
    Width,
    Height
  } = table.Geometry.BoundingBox;
  return __jsx(Button["b" /* default */], {
    style: {
      top: `${(Top + Height) * 100}%`,
      left: `${Left * 100}%`
    },
    className: TableDownloader_default.a.button,
    download: "table.csv",
    href: url
  }, "Download CSV");
}
// EXTERNAL MODULE: ./components/DocumentViewer/DocumentViewer.scss
var DocumentViewer = __webpack_require__("9URM");
var DocumentViewer_default = /*#__PURE__*/__webpack_require__.n(DocumentViewer);

// CONCATENATED MODULE: ./components/DocumentViewer/DocumentViewer.js
var DocumentViewer_jsx = external_react_default.a.createElement;

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



external_react_pdf_["pdfjs"].GlobalWorkerOptions.workerSrc = `/static/pdf.worker.min.js`;





DocumentViewer_DocumentViewer.defaultProps = {};
function DocumentViewer_DocumentViewer(_ref) {
  let {
    className,
    document,
    marks,
    redactions,
    tables,
    pageCount,
    highlightedMark
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "document", "marks", "redactions", "tables", "pageCount", "highlightedMark"]);

  const {
    documentName,
    searchablePdfURL,
    documentURL
  } = document;
  const isPDF = true; // /.pdf$/.test(documentName)

  const viewerClassNames = external_classnames_default()(DocumentViewer_default.a.viewer, className, isPDF && DocumentViewer_default.a.pdfViewer);
  const {
    containerRef,
    documentWidth,
    handleResize
  } = useDocumentResizer(isPDF, [marks, tables]);
  const onLoadSuccess = Object(external_react_["useCallback"])(handleResize, []);

  const pager = DocumentViewer_jsx(Pager["a" /* default */], {
    className: DocumentViewer_default.a.pager,
    pageTotal: pageCount
  }, currentPageNumber => isPDF ? DocumentViewer_jsx(DocumentViewer_DocumentMarks, {
    marks: marks,
    highlightedMark: highlightedMark,
    tables: tables,
    redactions: redactions,
    ref: containerRef
  }, DocumentViewer_jsx(external_react_pdf_["Page"], {
    className: DocumentViewer_default.a.page,
    loading: DocumentViewer_jsx(Loading["a" /* default */], null),
    pageNumber: currentPageNumber,
    width: documentWidth,
    renderAnnotationLayer: false
  })) : DocumentViewer_jsx("div", {
    className: DocumentViewer_default.a.imageWrapper
  }, DocumentViewer_jsx(DocumentViewer_DocumentMarks, {
    marks: marks,
    highlightedMark: highlightedMark,
    tables: tables,
    redactions: redactions
  }, DocumentViewer_jsx("img", {
    className: DocumentViewer_default.a.image,
    src: documentURL
  }))));

  return DocumentViewer_jsx("div", _extends({
    className: viewerClassNames
  }, rest), documentURL && isPDF && DocumentViewer_jsx(external_react_pdf_["Document"], {
    className: DocumentViewer_default.a.document,
    file: searchablePdfURL,
    loading: DocumentViewer_jsx(Loading["a" /* default */], null),
    onLoadSuccess: onLoadSuccess
  }, pager), documentURL && !isPDF && pager, !documentURL && DocumentViewer_jsx(Loading["a" /* default */], null));
} // Resize PDF on window resize

function useDocumentResizer(isPDF, resizeDeps) {
  const containerRef = Object(external_react_["useRef"])(null);
  const {
    0: documentWidth,
    1: setDocumentWidth
  } = Object(external_react_["useState"])(0);
  const handleResize = Object(external_react_["useCallback"])(() => {
    const sz = containerRef && containerRef.current && containerRef.current.offsetWidth;
    if (sz !== documentWidth) setDocumentWidth(sz);
  }, [documentWidth]); // eslint-disable-next-line consistent-return

  Object(external_react_["useEffect"])(() => {
    if (isPDF) {
      window.addEventListener('resize', handleResize, {
        passive: true
      });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, isPDF]);
  Object(external_react_["useEffect"])(() => {
    handleResize();
    setTimeout(() => {
      handleResize();
    }, 500);
  }, resizeDeps); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    containerRef,
    documentWidth,
    handleResize
  };
}

const DocumentViewer_DocumentMarks = /*#__PURE__*/Object(external_react_["forwardRef"])(function DocumentMarks({
  children,
  marks,
  tables,
  redactions,
  highlightedMark
}, ref) {
  return DocumentViewer_jsx("div", {
    className: DocumentViewer_default.a.canvasWrapper
  }, DocumentViewer_jsx("div", {
    className: DocumentViewer_default.a.canvas,
    ref: ref
  }, children, marks && marks.map(({
    Top,
    Left,
    Width,
    Height,
    type,
    id
  }, i) => DocumentViewer_jsx("mark", {
    key: `${id || ''}${type || ''}` || i,
    className: external_classnames_default()(DocumentViewer_default.a.highlight, type, id === highlightedMark && DocumentViewer_default.a.highlighted),
    style: {
      top: `${Top * 100}%`,
      left: `${Left * 100}%`,
      width: `${Width * 100}%`,
      height: `${Height * 100}%`
    }
  })), redactions && Object.values(redactions).map(({
    Top,
    Left,
    Width,
    Height
  }, i) => DocumentViewer_jsx("mark", {
    key: i,
    className: DocumentViewer_default.a.redact,
    style: {
      top: `${Top * 100}%`,
      left: `${Left * 100}%`,
      width: `${Width * 100}%`,
      height: `${Height * 100}%`
    }
  })), tables && tables.map(({
    table,
    rows
  }, i) => DocumentViewer_jsx(TableHighlight, {
    key: i,
    table: table,
    rows: rows
  }))));
});
DocumentViewer_DocumentMarks.displayName = 'DocumentMarks';

function TableHighlight({
  table,
  rows
}) {
  const {
    Top,
    Left,
    Width,
    Height
  } = table.Geometry.BoundingBox;
  return DocumentViewer_jsx(external_react_default.a.Fragment, null, DocumentViewer_jsx("mark", {
    className: DocumentViewer_default.a.highlight,
    style: {
      top: `${Top * 100}%`,
      left: `${Left * 100}%`,
      width: `${Width * 100}%`,
      height: `${Height * 100}%`
    }
  }), DocumentViewer_jsx(TableDownloader_TableDownloader, {
    table,
    rows
  }), rows.map((r, i) => DocumentViewer_jsx(external_react_["Fragment"], {
    key: i
  }, r.map((cell, i) => {
    const {
      Top,
      Left,
      Width,
      Height
    } = cell.Geometry.BoundingBox;
    return DocumentViewer_jsx("mark", {
      className: DocumentViewer_default.a.cellHighlight,
      style: {
        top: `${Top * 100}%`,
        left: `${Left * 100}%`,
        width: `${Width * 100}%`,
        height: `${Height * 100}%`
      }
    });
  }))));
}
// EXTERNAL MODULE: ./components/FormInput/FormInput.js
var FormInput = __webpack_require__("NQOJ");

// EXTERNAL MODULE: ./store/entities/meta/actions.js
var actions = __webpack_require__("qjZw");

// EXTERNAL MODULE: ./store/entities/meta/selectors.js
var selectors = __webpack_require__("+lYZ");

// EXTERNAL MODULE: ./components/DocumentSearchBar/DocumentSearchBar.scss
var DocumentSearchBar = __webpack_require__("Tsw3");
var DocumentSearchBar_default = /*#__PURE__*/__webpack_require__.n(DocumentSearchBar);

// CONCATENATED MODULE: ./components/DocumentSearchBar/DocumentSearchBar.js
var DocumentSearchBar_jsx = external_react_default.a.createElement;

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








DocumentSearchBar_DocumentSearchBar.defaultProps = {};

function DocumentSearchBar_DocumentSearchBar({
  className,
  dispatch,
  searchQuery,
  searchPersona,
  light,
  suggestions,
  placeholder
}) {
  const searchBarClassNames = external_classnames_default()(DocumentSearchBar_default.a.searchBar, className);
  const handleClearClick = Object(external_react_["useCallback"])(() => {
    dispatch(Object(actions["a" /* clearDocumentSearchQuery */])());
  }, [dispatch]);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions["a" /* clearDocumentSearchQuery */])()); // eslint-disable-next-line
  }, []);
  const searchValueChange = Object(external_react_["useCallback"])(e => {
    dispatch(Object(actions["d" /* setDocumentSearchQuery */])(e.target.value));
  }, []);
  const preventDefault = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
  }, []);
  return DocumentSearchBar_jsx("form", {
    className: searchBarClassNames,
    onSubmit: preventDefault
  }, DocumentSearchBar_jsx("div", {
    className: DocumentSearchBar_default.a.wrapper
  }, DocumentSearchBar_jsx(FormInput["a" /* default */], {
    light: light,
    type: "search",
    className: DocumentSearchBar_default.a.search,
    placeholder: placeholder || "Search...",
    value: searchQuery,
    onChange: searchValueChange
  }), !!searchQuery ? DocumentSearchBar_jsx(Button["b" /* default */], {
    type: "button",
    simple: true,
    palette: "black",
    className: DocumentSearchBar_default.a.clear,
    onClick: handleClearClick
  }, DocumentSearchBar_jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, DocumentSearchBar_jsx("path", {
    d: "m12 10.5857864 5.2928932-5.29289318c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356l-5.2928932 5.29289322 5.2928932 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-5.2928932-5.2928932-5.29289322 5.2928932c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l5.29289318-5.2928932-5.29289318-5.29289322c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0z"
  }))) : null));
}

/* harmony default export */ var components_DocumentSearchBar_DocumentSearchBar = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  return {
    searchQuery: Object(selectors["c" /* getDocumentSearchQuery */])(state)
  };
})(DocumentSearchBar_DocumentSearchBar));
// EXTERNAL MODULE: ./components/Tabs/Tabs.js
var Tabs = __webpack_require__("9sU6");

// EXTERNAL MODULE: ./store/entities/documents/actions.js
var documents_actions = __webpack_require__("wopQ");

// EXTERNAL MODULE: ./store/entities/documents/selectors.js
var documents_selectors = __webpack_require__("9xRs");

// EXTERNAL MODULE: ./store/ui/actions.js
var ui_actions = __webpack_require__("kOgf");

// EXTERNAL MODULE: ./store/ui/selectors.js
var ui_selectors = __webpack_require__("BCp/");

// CONCATENATED MODULE: ./utils/dus-constants.js
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
const COMPREHEND_SERVICE = 'COMPREHEND';
const COMPREHEND_MEDICAL_SERVICE = 'COMPREHEND_MEDICAL';
// CONCATENATED MODULE: ./utils/document.js
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

 // Location of Blocks within a document object

const lensDocumentBlocks = Object(external_ramda_["lensPath"])(['textractResponse', 'Blocks']); // Location of page count within single/multi page document

const lensPageCount = Object(external_ramda_["lensPath"])(['textractResponse', 'DocumentMetadata', 'Pages']);
const lensMultiPageCount = Object(external_ramda_["lensPath"])(['textractResponse', 0, 'DocumentMetadata', 'Pages']);
/**
 * Get a PAGE block by page number
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber A page number
 * @return {Object}
 */

function getPage(document, pageNumber) {
  const blocks = getDocumentBlocks(document);
  const pageBlocks = blocks.filter(({
    BlockType,
    Page
  }) => // Single page docs only have one PAGE, and it doesn't include a Page prop
  BlockType === 'PAGE' && (Page === pageNumber || pageNumber === 1 && !Page));
  return Object(external_ramda_["isEmpty"])(pageBlocks) ? {} : pageBlocks[0];
}
/**
 * Get all Blocks for a given document.
 * @param {Object} document A Textract document object
 * @return {Array}
 */


function getDocumentBlocks(document) {
  if (Object(external_ramda_["either"])(external_ramda_["isNil"], external_ramda_["isEmpty"])(document) || !document.textractResponse) return [];
  const isChunkedResponse = Object(external_ramda_["is"])(Array, document.textractResponse);
  const combinedChunks = isChunkedResponse && document.textractResponse.reduce((accumulator, {
    Blocks
  }) => accumulator.concat(Blocks), []);
  return isChunkedResponse ? combinedChunks : Object(external_ramda_["view"])(lensDocumentBlocks, document) || [];
}
/**
 * Get all Blocks for a given document, in an object indexed by ID
 * @param {Object} document A Textract document object
 * @return {Object}
 */


function getIndexedDocumentBlocks(document) {
  const blocks = getDocumentBlocks(document);
  const indexedBlocks = Object(external_ramda_["indexBy"])(Object(external_ramda_["prop"])('Id'), blocks);
  return indexedBlocks;
}
/**
 * Memoized version of the above, since indexing blocks by ID is a
 * common and very expensive task on very large documents
 */


const memoizedGetIndexedBlocks = Object(external_ramda_["memoizeWith"])(doc => [doc.id, doc.textractFetchedAt].join(), getIndexedDocumentBlocks);
/**
 * Get a list of Blocks matching the IDs provided.
 * @param {Object} document A Textract document object
 * @param {Array} ids An array of Block IDs to get
 * @return {Array}
 */

function getDocumentBlocksByIds(document, ids) {
  const indexedBlocks = memoizedGetIndexedBlocks(document);
  return ids.reduce((accumulator, current) => {
    return indexedBlocks[current] ? [...accumulator, indexedBlocks[current]] : accumulator;
  }, []);
}
/**
 * Get text/boolean content of VALUE or CELL Blocks.
 * @param {Object} document A Textract document object
 * @param {Array} ids An array of Block IDs
 * @return {Boolean|String}
 */


function getCellOrValueContents(document, ids) {
  if (!ids) return '';
  const contentBlocks = getDocumentBlocksByIds(document, ids);
  let isCheckbox = false;
  const value = contentBlocks.map(({
    Text,
    BlockType,
    SelectionStatus
  }) => {
    if (BlockType === 'SELECTION_ELEMENT') isCheckbox = true;
    return BlockType === 'WORD' ? Text : SelectionStatus === 'SELECTED';
  }); // If the value is a checkbox, we want to retain it as a boolean value
  // instead of joining it, which converts it to a string

  return isCheckbox ? value[0] ? 'Yes' : 'No' : value.join(' ');
}
/**
 * Get a page's child Blocks of a given type.
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber A page number
 * @param {String} type A BlockType
 * @return {Array}
 */


function getPageChildrenByType(document, pageNumber, type) {
  const Relationships = Object(external_ramda_["prop"])('Relationships', getPage(document, pageNumber)) || [];
  const childBlockIds = Object(external_ramda_["path"])([0, 'Ids'], Relationships) || [];
  const children = getDocumentBlocksByIds(document, childBlockIds);
  const filteredChildren = type ? filterBlocksByType(children, type) : children;
  return filteredChildren;
}
/**
 * Get test from a list of LINE Blocks
 * @param {Array} blocks An array of LINE Blocks
 * @return {Array}
 */


function transformLineBlocksToText(blocks) {
  return blocks.map(({
    Text
  }) => Text);
}
/**
 * Filter a list of Blocks with a given BlockType.
 * @param {Array} blocks An array of Blocks
 * @param {String} type A BlockType
 * @return {Array}
 */


function filterBlocksByType(blocks, type) {
  return blocks.filter(({
    BlockType
  }) => BlockType === type);
}
/**
 * Get the total number of pages in a document.
 * @param {Object} document A Textract document object
 * @return {Number}
 */


function getDocumentPageCount(document) {
  const isChunkedResponse = Object(external_ramda_["is"])(Array, document.textractResponse);
  return Object(external_ramda_["view"])(isChunkedResponse ? lensMultiPageCount : lensPageCount, document);
}
function getDocumentLines(document) {
  const totalPages = getDocumentPageCount(document);
  const linesByPage = Object(external_ramda_["range"])(1, totalPages + 1).map(pageNumber => {
    const lines = getPageLines(document, pageNumber);
    return lines;
  });
  return Object(external_ramda_["flatten"])(linesByPage);
}
/**
 * Get lines of text found in a page.
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber The page number to get results for
 * @return {Array}
 */

function getPageLines(document, pageNumber) {
  const lines = getPageChildrenByType(document, pageNumber, 'LINE');
  return lines.map(({
    Text,
    Geometry,
    Page
  }) => {
    return {
      text: Text,
      pageNumber: Page,
      boundingBox: Geometry.BoundingBox
    };
  });
}
function getDocumentBlocksByType(document, type) {
  const blocks = getDocumentBlocks(document);
  return filterBlocksByType(blocks, type);
}
function countDocumentKeyValuePairs(document) {
  const keyValueSetBlocks = getDocumentBlocksByType(document, 'KEY_VALUE_SET'); // Filter those down to get the blocks of EntityType KEY
  // NOTE: EntityTypes is an array, even though it only ever contains one value

  const keyBlocks = keyValueSetBlocks.filter(({
    EntityTypes
  }) => EntityTypes.indexOf('KEY') >= 0);
  return keyBlocks.length;
}
/**
 * Get forms found in a page.
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber The page number to get results for
 * @return {Array}
 */

function getDocumentKeyValuePairs(document) {
  const totalPages = getDocumentPageCount(document);
  const blocksByPage = Object(external_ramda_["range"])(1, totalPages + 1).map(pageNumber => {
    const blocks = getPageKeyValuePairs(document, pageNumber);
    return blocks.map(b => {
      return _objectSpread(_objectSpread({}, b), {}, {
        pageNumber
      });
    });
  });
  return Object(external_ramda_["flatten"])(blocksByPage);
}
/**
 * Get entities found in a page.
 * @param {Object} document A Comprehend document object
 * @param {String} comprehendService The comprehend Service being used : Comprehend/ComprehendMedical
 * @return {Array}
 */

function getDocumentEntityPairs(document, comprehendService) {
  const totalPages = getDocumentPageCount(document);
  let MERGE_KEY = null;

  if (comprehendService == COMPREHEND_MEDICAL_SERVICE) {
    MERGE_KEY = 'Category';
  } else {
    MERGE_KEY = 'Type';
  }

  const blocksByPage = Object(external_ramda_["range"])(1, totalPages + 1).map(pageNumber => {
    const blocks = getPageEntityPairs(document, pageNumber, comprehendService);
    const entity_array = consolidateDictionaryList(blocks["Entities"], MERGE_KEY, "Text");
    return entity_array.map(b => {
      return _objectSpread(_objectSpread({}, b), {}, {
        pageNumber
      });
    });
  });
  return Object(external_ramda_["isEmpty"])(blocksByPage) ? [] : [].concat.apply([], blocksByPage);
}
function consolidateDictionaryList(dictionaryList, mergeKey, mergeValue) {
  let output = [];
  let entity_object = {};
  let processing_dict = {};
  dictionaryList.forEach(function (item) {
    if (!(item[mergeKey] in processing_dict)) {
      processing_dict[item[mergeKey]] = new Set();
    }

    processing_dict[item[mergeKey]].add(item[mergeValue]);
  });
  const entityDictKeys = Object.keys(processing_dict);

  for (const key of entityDictKeys) {
    entity_object["entity"] = key;
    entity_object["value"] = [...processing_dict[key]];
    output.push(entity_object);
    entity_object = {};
  }

  return output;
}
function resetFormsonPage() {
  let formsCollection = document.forms;

  for (let i = 0; i < formsCollection.length; i++) {
    formsCollection[i].reset();
  }
}
/**
 * Get forms found in a page.
 * @param {Object} document A Comprehend/Comprehend Medical document object
 * @param {Number} pageNumber The page number to get results for
 * @param {String} comprehendService The comprehend service used : Comprehend/ComprehendMedical
 * @return {Array}
 */

function getPageEntityPairs(document, pageNumber, comprehendService) {
  // Get all blocks of Entities for a PAGE
  let blocks = [];

  if (comprehendService == COMPREHEND_MEDICAL_SERVICE) {
    blocks = document.comprehendMedicalRespone["results"];
  } else {
    blocks = document.comprehendRespone["results"];
  }

  const pageBlocks = blocks.filter(({
    Entities,
    Page
  }) => // Single page docs only have one PAGE, and it doesn't include a Page prop
  Page === pageNumber);
  return Object(external_ramda_["isEmpty"])(pageBlocks) ? {} : pageBlocks[0];
}
/**
 * Get forms found in a page.
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber The page number to get results for
 * @return {Array}
 */

function getPageKeyValuePairs(document, pageNumber) {
  // Get all blocks of BlockType KEY_VALUE_SET for a PAGE
  const keyValueSetBlocks = getPageChildrenByType(document, pageNumber, 'KEY_VALUE_SET'); // Filter those down to get the blocks of EntityType KEY
  // NOTE: EntityTypes is an array, even though it only ever contains one value

  const keyBlocks = keyValueSetBlocks.filter(({
    EntityTypes
  }) => EntityTypes.indexOf('KEY') >= 0); // Iterate over each KEY block

  const pairs = keyBlocks.map(({
    Id,
    Relationships,
    Geometry
  }) => {
    // Get related VALUE blocks and WORD blocks for this KEY block
    const valueBlockIds = Object(external_ramda_["path"])([0, 'Ids'], Relationships) || [];
    const keyWordIds = Object(external_ramda_["path"])([1, 'Ids'], Relationships) || [];
    const keyWordBlocks = getDocumentBlocksByIds(document, keyWordIds);
    const valueBlocks = getDocumentBlocksByIds(document, valueBlockIds); // Get WORD blocks for each VALUE block

    const valueWordIds = valueBlocks.reduce((accumulator, {
      Relationships
    }) => {
      const childIds = Relationships ? Relationships[0].Ids : [];
      return [...accumulator, ...childIds];
    }, []); // Finally, return a simple object containing joined KEY and VALUE words

    const key = keyWordBlocks.map(({
      Text
    }) => Text).join(' ');
    const value = getCellOrValueContents(document, valueWordIds);
    return {
      id: Id,
      key,
      value,
      keyBoundingBox: Geometry.BoundingBox,
      valueBoundingBox: valueBlocks[0].Geometry.BoundingBox
    };
  });
  return Object(external_ramda_["sortBy"])(x => x.keyBoundingBox.Top + 0.05 * x.keyBoundingBox.Left)(pairs.filter(p => p.key || p.value));
}
function getDocumentTables(document) {
  const totalPages = getDocumentPageCount(document);
  const blocksByPage = Object(external_ramda_["range"])(1, totalPages + 1).map(pageNumber => {
    const blocks = getPageTables(document, pageNumber);
    return blocks.map(b => {
      return _objectSpread(_objectSpread({}, b), {}, {
        pageNumber
      });
    });
  });
  return Object(external_ramda_["isEmpty"])(blocksByPage) ? [] : [].concat.apply([], blocksByPage);
}
/**
 * Get tables/rows/cells found in a page.
 * @param {Number} pageNumber The page number to get results for
 * @param {Object} document A Textract document object
 * @return {Array}
 */

function getPageTables(document, pageNumber) {
  // Get all blocks of BlockType TABLE for a PAGE
  const tableBlocks = getPageChildrenByType(document, pageNumber, 'TABLE'); // Iterate each TABLE in order to build a new data structure

  const tables = tableBlocks.map(table => {
    const {
      Relationships
    } = table; // Get all blocks of BlockType CELL within this TABLE

    const cellBlockIds = Object(external_ramda_["path"])([0, 'Ids'], Relationships) || [];
    const cellBlocks = getDocumentBlocksByIds(document, cellBlockIds); // Iterate each CELL in order to build an array for each row containing an object for each cell

    const rowData = cellBlocks.reduce((accumulator, current) => {
      const {
        RowIndex,
        ColumnIndex,
        RowSpan,
        ColumnSpan,
        Relationships,
        Geometry
      } = current;
      const contentBlockIds = Object(external_ramda_["path"])([0, 'Ids'], Relationships) || [];
      const row = accumulator[RowIndex - 1] || [];
      row[ColumnIndex - 1] = {
        RowIndex,
        ColumnIndex,
        RowSpan,
        ColumnSpan,
        content: getCellOrValueContents(document, contentBlockIds),
        Geometry
      };
      accumulator[RowIndex - 1] = row;
      return accumulator;
    }, []);
    return {
      table,
      rows: rowData
    };
  });
  return tables;
}
function getMultiPageWordsBySearch(document, pageNumber, wordList) {
  let output = [];
  wordList.forEach(function (item) {
    output.push(...getPageWordsBySearch(document, pageNumber, item));
  });
  return output;
}
/**
 * Get WORD blocks that match a search query on a page.
 * @param {Object} document A Textract document object
 * @param {Number} pageNumber The page number to get results for
 * @param {String} searchQuery The string to find in the document
 * @return {Array}
 */

function getPageWordsBySearch(document, pageNumber, searchQuery) {
  if (!searchQuery) return [];
  const searchQueryWords = Object(external_ramda_["reject"])(external_ramda_["isEmpty"], searchQuery.split(' '));

  function escapeRegex(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|]/g, '\\$&');
  }

  const searchQueryRegex = RegExp(escapeRegex(searchQuery), 'i'); // Get all the LINE Blocks for a PAGE that match the searchQuery

  const lines = getPageChildrenByType(document, pageNumber, 'LINE');
  const matchingLines = lines.filter(({
    Text
  }) => searchQueryRegex.test(Text)); // Get all the WORD Blocks for each LINE that match the searchQuery

  const matchingWords = matchingLines.reduce((accumulator, {
    Relationships
  }) => {
    const wordIds = Object(external_ramda_["path"])([0, 'Ids'], Relationships) || []; // Sort all the WORD Blocks in order from left to right

    const wordBlocks = Object(external_ramda_["sortWith"])([Object(external_ramda_["ascend"])(Object(external_ramda_["path"])(['Geometry', 'BoundingBox', 'Left']))])(getDocumentBlocksByIds(document, wordIds));
    const wordText = wordBlocks.map(word => word.Text).join(' ');
    const matchRegexp = RegExp(escapeRegex(searchQueryWords.join(' ')), 'ig');
    let res;

    function getWordIndexByStringIndex(idx) {
      let searchIndex = 0;
      let wordIndex;

      for (wordIndex = 0; wordIndex < wordBlocks.length; wordIndex++) {
        const word = wordBlocks[wordIndex];
        if (idx < searchIndex + word.Text.length + 1) return wordIndex;
        searchIndex += word.Text.length + 1;
      }

      return wordIndex;
    }

    const matchingWordBlocks = [];

    while ((res = matchRegexp.exec(wordText)) !== null) {
      const startIndex = res.index;
      const endIndex = startIndex + res[0].length;
      const startWord = getWordIndexByStringIndex(startIndex);
      const endWord = getWordIndexByStringIndex(endIndex);

      for (let i = startWord; i <= endWord; i++) {
        if (!matchingWordBlocks.includes(wordBlocks[i])) matchingWordBlocks.push(wordBlocks[i]);
      }
    } // TODO most of the below logic can probably be removed / consolidated into the above
    // Pick specific props from each WORD Block


    const matchingWordBounds = matchingWordBlocks.map(({
      Text,
      Geometry: {
        BoundingBox: {
          Top,
          Left,
          Width,
          Height
        }
      }
    }) => ({
      Text,
      Top,
      Left,
      Width,
      Height
    })); // Sort all the words by their location from top/left to bottom/right

    const matchingWordBoundsSorted = Object(external_ramda_["sortWith"])([({
      Top: a
    }, {
      Top: b
    }) => {
      const difference = Object(external_ramda_["pipe"])(Math.abs, Object(external_ramda_["multiply"])(100), Math.floor)(a - b);
      return !difference ? 0 : a < b ? -1 : a > b ? 1 : 0;
    }, Object(external_ramda_["ascend"])(Object(external_ramda_["path"])(['Left']))])(matchingWordBounds); // Combine words together such that they match the query (and merge their bounding box info)

    let unmatched = null;
    const matchingWordBoundsCombined = matchingWordBoundsSorted.reduce((accumulator, word) => {
      const wordMatches = searchQueryRegex.test(word.Text); // If a single word matches the query, add it to the list

      if (wordMatches) {
        unmatched = null;
        return [...accumulator, word];
      } // If there's an unmatched word from a previous iteration,
      // see if combining the two will match the query


      if (unmatched) {
        const combinedText = `${unmatched.Text} ${word.Text}`;
        const combinedWords = {
          Text: combinedText,
          Top: Math.max(unmatched.Top, word.Top),
          Left: Math.min(unmatched.Left, word.Left),
          Width: word.Left - unmatched.Left + word.Width,
          Height: Math.max(unmatched.Height, word.Height)
        };
        const combinedWordsMatch = searchQueryRegex.test(combinedText); // If the combined words match the query, add it to the list

        if (combinedWordsMatch) {
          unmatched = null;
          return [...accumulator, combinedWords];
        } // Otherwise, update unmatched with the combined words object


        unmatched = combinedWords;
      } else {
        // If there wasn't an unmatched word from a previous iteration, set unmatched
        unmatched = word;
      }

      return accumulator;
    }, []);
    return accumulator.concat(matchingWordBoundsCombined);
  }, []);
  return matchingWords;
}
// EXTERNAL MODULE: ./pages/documents/view.scss
var view = __webpack_require__("ndm7");
var view_default = /*#__PURE__*/__webpack_require__.n(view);

// EXTERNAL MODULE: ./components/KeyValueList/KeyValueList.scss
var KeyValueList = __webpack_require__("Nykm");
var KeyValueList_default = /*#__PURE__*/__webpack_require__.n(KeyValueList);

// CONCATENATED MODULE: ./components/KeyValueList/KeyValueList.js
var KeyValueList_jsx = external_react_default.a.createElement;

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





function KeyValueList_KeyValueList({
  kvPairs,
  visible,
  pageCount,
  currentPageNumber,
  onSwitchPage,
  onRedact,
  onHighlight,
  showRedaction,
  onRedactAll,
  onDownload
}) {
  const container = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (visible && container.current) {
      const firstOnThisPage = container.current.querySelector(`.${KeyValueList_default.a.onThisPage}`);
      if (firstOnThisPage) firstOnThisPage.scrollIntoView();
    }
  }, [currentPageNumber, visible]);

  if (!kvPairs.length && visible) {
    return KeyValueList_jsx("p", {
      className: external_classnames_default()(KeyValueList_default.a.noKv)
    }, "No Key-Value Pairs detected");
  }

  return KeyValueList_jsx("div", {
    className: external_classnames_default()(KeyValueList_default.a.kvList, visible && KeyValueList_default.a.visible),
    ref: container
  }, KeyValueList_jsx("ul", null, KeyValueList_jsx("h4", null, "Key-Value Pairs : ", kvPairs.length || 0, " Found"), Object(external_ramda_["groupWith"])((a, b) => a.pageNumber === b.pageNumber)(kvPairs).map((pairs, i) => KeyValueList_jsx(external_react_["Fragment"], {
    key: pairs[0].pageNumber
  }, pageCount > 1 ? KeyValueList_jsx("li", {
    key: `pn${i}`,
    className: external_classnames_default()(KeyValueList_default.a.pageSeparator, pairs[0].pageNumber === currentPageNumber && KeyValueList_default.a.onThisPage)
  }, "Page ", pairs[0].pageNumber) : null, pairs.map(({
    id,
    key,
    value,
    pageNumber,
    keyBoundingBox,
    valueBoundingBox
  }, i) => KeyValueList_jsx("li", {
    key: i,
    className: external_classnames_default()(KeyValueList_default.a.kv, pageNumber === currentPageNumber && KeyValueList_default.a.onThisPage, showRedaction && KeyValueList_default.a.hasRedact),
    onClick: () => {
      onHighlight(id);
      onSwitchPage(pageNumber);
    }
  }, KeyValueList_jsx("h5", null, key), KeyValueList_jsx("p", null, value && String(value).trim() || KeyValueList_jsx("em", null, "no value"), " "), showRedaction ? KeyValueList_jsx("a", {
    title: "Redact this value",
    className: KeyValueList_default.a.valueRedact,
    onClick: e => {
      e.stopPropagation();
      onRedact(valueBoundingBox, pageNumber);
      onSwitchPage(pageNumber);
    }
  }, "Redact") : null))))), KeyValueList_jsx("footer", {
    className: KeyValueList_default.a.actions
  }, showRedaction ? KeyValueList_jsx(Button["b" /* default */], {
    className: KeyValueList_default.a.redactButton,
    onClick: onRedactAll
  }, "Redact All Values") : KeyValueList_jsx(Button["b" /* default */], {
    className: KeyValueList_default.a.downloadButton,
    onClick: onDownload
  }, "Download CSV")));
}
// EXTERNAL MODULE: ./components/RawTextLines/RawTextLines.scss
var RawTextLines = __webpack_require__("pbYL");
var RawTextLines_default = /*#__PURE__*/__webpack_require__.n(RawTextLines);

// CONCATENATED MODULE: ./components/RawTextLines/RawTextLines.js
var RawTextLines_jsx = external_react_default.a.createElement;

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





function RawTextLines_RawTextLines({
  lines,
  visible,
  pageCount,
  currentPageNumber,
  onSwitchPage,
  onHighlight
}) {
  const container = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (visible && container.current) {
      const firstOnThisPage = container.current.querySelector(`.${RawTextLines_default.a.onThisPage}`);
      if (firstOnThisPage) firstOnThisPage.scrollIntoView();
    }
  }, [currentPageNumber, visible]);

  if (!lines.length) {
    return RawTextLines_jsx("p", {
      className: RawTextLines_default.a.empty
    }, "No Key-Value Pairs detected");
  }

  return RawTextLines_jsx("div", {
    className: external_classnames_default()(RawTextLines_default.a.lineList, visible && RawTextLines_default.a.visible),
    ref: container
  }, RawTextLines_jsx("ul", null, Object(external_ramda_["groupWith"])((a, b) => a.pageNumber === b.pageNumber)(lines).map((pageLines, i) => RawTextLines_jsx(external_react_["Fragment"], {
    key: pageLines[0].pageNumber
  }, pageCount > 1 ? RawTextLines_jsx("li", {
    key: `pn${i}`,
    className: external_classnames_default()(RawTextLines_default.a.pageSeparator, pageLines[0].pageNumber === currentPageNumber && RawTextLines_default.a.onThisPage)
  }, "Page ", pageLines[0].pageNumber) : null, pageLines.map(({
    id,
    text,
    pageNumber,
    boundingBox
  }, i) => RawTextLines_jsx("li", {
    key: i,
    className: external_classnames_default()(RawTextLines_default.a.line, pageNumber === currentPageNumber && RawTextLines_default.a.onThisPage),
    onClick: () => {
      onHighlight(id);
    }
  }, text))))), RawTextLines_jsx("footer", {
    className: RawTextLines_default.a.actions
  }));
}
// EXTERNAL MODULE: ./components/EntitiesCheckbox/EntitiesCheckbox.scss
var EntitiesCheckbox = __webpack_require__("9bDB");
var EntitiesCheckbox_default = /*#__PURE__*/__webpack_require__.n(EntitiesCheckbox);

// CONCATENATED MODULE: ./components/EntitiesCheckbox/EntitiesCheckbox.js
var EntitiesCheckbox_jsx = external_react_default.a.createElement;

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







function EntitiesCheckbox_EntitiesCheckbox({
  entities,
  visible,
  pageCount,
  currentPageNumber,
  onSwitchPage,
  onRedact,
  onHighlight,
  showRedaction,
  onRedactAll,
  onDownloadPrimary,
  onDownloadSecondary,
  comprehendService,
  document
}) {
  const container = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (visible && container.current) {
      const firstOnThisPage = container.current.querySelector(`.${EntitiesCheckbox_default.a.onThisPage}`);
      if (firstOnThisPage) firstOnThisPage.scrollIntoView();
      onHighlight(getMultiPageWordsBySearch(document, currentPageNumber, ['']));
      resetFormsonPage();
    }
  }, [currentPageNumber, visible]);
  let is_comprehend_medical = false;
  if (comprehendService == COMPREHEND_MEDICAL_SERVICE) is_comprehend_medical = true;

  if (!entities.length && visible) {
    return EntitiesCheckbox_jsx("p", {
      className: EntitiesCheckbox_default.a.noEntity
    }, "No ", is_comprehend_medical ? `Medical ` : null, "Entities detected");
  }

  return EntitiesCheckbox_jsx("div", {
    className: external_classnames_default()(EntitiesCheckbox_default.a.entityList, visible && EntitiesCheckbox_default.a.visible),
    ref: container
  }, EntitiesCheckbox_jsx("ul", null, EntitiesCheckbox_jsx("h4", null, is_comprehend_medical ? `Medical ` : null, "Entities: ", entities.length || 0, " Found"), Object(external_ramda_["groupWith"])((a, b) => a.pageNumber === b.pageNumber)(entities).map((pairs, i) => EntitiesCheckbox_jsx(external_react_["Fragment"], {
    key: pairs[0].pageNumber
  }, pageCount > 1 ? EntitiesCheckbox_jsx("li", {
    key: `pn${i}`,
    className: external_classnames_default()(EntitiesCheckbox_default.a.pageSeparator, pairs[0].pageNumber === currentPageNumber && EntitiesCheckbox_default.a.onThisPage)
  }, "Page ", pairs[0].pageNumber) : null, EntitiesCheckbox_jsx("form", {
    id: `${comprehendService}-${i}-form`
  }, pairs.map(({
    id,
    entity,
    value,
    pageNumber
  }, i) => EntitiesCheckbox_jsx("li", {
    key: i,
    className: external_classnames_default()(EntitiesCheckbox_default.a.ev, pageNumber === currentPageNumber && EntitiesCheckbox_default.a.onThisPage, showRedaction && EntitiesCheckbox_default.a.hasRedact)
  }, EntitiesCheckbox_jsx("input", {
    id: entity,
    name: "entityChoice",
    type: "radio",
    onClick: e => {
      e.stopPropagation();
      onSwitchPage(pageNumber);
      onHighlight(getMultiPageWordsBySearch(document, pageNumber, value), pageNumber);
    }
  }), " ", EntitiesCheckbox_jsx("label", {
    for: entity
  }, entity), showRedaction ? EntitiesCheckbox_jsx("span", {
    className: EntitiesCheckbox_default.a.redactSpan
  }, EntitiesCheckbox_jsx("a", {
    title: "Redact Entity Matches",
    className: EntitiesCheckbox_default.a.valueRedact,
    onClick: e => {
      e.stopPropagation();
      onRedact(pageNumber, getMultiPageWordsBySearch(document, pageNumber, value));
      onSwitchPage(pageNumber);
    }
  }, "Redact")) : null)))))), EntitiesCheckbox_jsx("footer", {
    className: EntitiesCheckbox_default.a.actions
  }, EntitiesCheckbox_jsx("div", {
    className: EntitiesCheckbox_default.a.downloadButtons
  }, EntitiesCheckbox_jsx(Button["b" /* default */], {
    onClick: onDownloadPrimary
  }, "\u2B07 ", is_comprehend_medical ? `Medical ` : null, " Entities")), is_comprehend_medical ? EntitiesCheckbox_jsx("div", {
    className: EntitiesCheckbox_default.a.downloadButtons
  }, EntitiesCheckbox_jsx(Button["b" /* default */], {
    className: EntitiesCheckbox_default.a.downloadButton,
    onClick: onDownloadSecondary
  }, "\u2B07 ICD-10 Ontologies")) : null));
}
// EXTERNAL MODULE: ./components/DocumentPreview/DocumentPreview.scss
var DocumentPreview = __webpack_require__("vGDt");
var DocumentPreview_default = /*#__PURE__*/__webpack_require__.n(DocumentPreview);

// CONCATENATED MODULE: ./components/DocumentPreview/DocumentPreview.js
var DocumentPreview_jsx = external_react_default.a.createElement;

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





function DocumentPreview_DocumentPreview({
  pageCount,
  visible,
  track,
  document
}) {
  const container = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (visible && container.current) {
      const firstOnThisPage = container.current.querySelector(`.${DocumentPreview_default.a.onThisPage}`);
      if (firstOnThisPage) firstOnThisPage.scrollIntoView();
    }
  }, [visible]);
  return DocumentPreview_jsx("div", {
    className: external_classnames_default()(DocumentPreview_default.a.entityList, visible && DocumentPreview_default.a.visible),
    ref: container
  }, DocumentPreview_jsx("ul", null, DocumentPreview_jsx("h4", null, "File Details"), DocumentPreview_jsx(external_react_["Fragment"], {
    key: document.documentName
  }, DocumentPreview_jsx("h5", null, "Name : ", document.documentName), DocumentPreview_jsx("h5", null, "Total Page: ", pageCount))), DocumentPreview_jsx("footer", {
    className: DocumentPreview_default.a.actions
  }, track === 'search' ? DocumentPreview_jsx("div", {
    className: DocumentPreview_default.a.downloadButtons
  }, DocumentPreview_jsx(Button["b" /* default */], {
    download: document.documentName.split('.')[0] + "-searchable.pdf",
    href: document.searchablePdfURL
  }, "\u2B07 Searchable PDF")) : null, DocumentPreview_jsx("div", {
    className: DocumentPreview_default.a.downloadButtons
  }, DocumentPreview_jsx(Button["b" /* default */], {
    inverted: true,
    download: document.documentName.split('/').pop(),
    href: document.documentURL
  }, "\u2B07 Original Doc"))));
}
// EXTERNAL MODULE: ./components/TableResults/TableResults.scss
var TableResults = __webpack_require__("jM89");
var TableResults_default = /*#__PURE__*/__webpack_require__.n(TableResults);

// CONCATENATED MODULE: ./components/TableResults/TableResults.js
var TableResults_jsx = external_react_default.a.createElement;

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





function TableResults_TableResults({
  tables,
  visible,
  pageCount,
  currentPageNumber,
  onSwitchPage,
  onHighlight,
  onDownload,
  document
}) {
  const container = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    if (visible && container.current) {
      const firstOnThisPage = container.current.querySelector(`.${TableResults_default.a.onThisPage}`);
      if (firstOnThisPage) firstOnThisPage.scrollIntoView();
    }
  }, [currentPageNumber, visible]);

  if (!tables.length && visible) {
    return TableResults_jsx("p", {
      className: TableResults_default.a.noTable
    }, "No Tables detected");
  }

  return TableResults_jsx("div", {
    className: external_classnames_default()(TableResults_default.a.tableList, visible && TableResults_default.a.visible),
    ref: container
  }, TableResults_jsx("ul", null, TableResults_jsx("h4", null, "Tables: ", tables.length || 0, " Found"), Object(external_ramda_["groupWith"])((a, b) => a.pageNumber === b.pageNumber)(tables).map((pairs, i) => TableResults_jsx(external_react_["Fragment"], {
    key: pairs[0].pageNumber
  }, pageCount > 1 ? TableResults_jsx("li", {
    key: `pn${i}`,
    className: external_classnames_default()(TableResults_default.a.pageSeparator, pairs[0].pageNumber === currentPageNumber && TableResults_default.a.onThisPage)
  }, "Page ", pairs[0].pageNumber) : null, pairs.map(({
    table,
    pageNumber,
    rows
  }, i) => TableResults_jsx("li", {
    key: i,
    className: external_classnames_default()(TableResults_default.a.ev, pageNumber === currentPageNumber && TableResults_default.a.onThisPage),
    onClick: () => {
      onSwitchPage(pageNumber);
    }
  }, TableResults_jsx("h5", null, "Table ", i + 1, " : ", rows.length || 0, " rows")))))), TableResults_jsx("footer", {
    className: TableResults_default.a.actions
  }));
}
// CONCATENATED MODULE: ./pages/documents/view.js
var view_jsx = external_react_default.a.createElement;

function view_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function view_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { view_ownKeys(Object(source), true).forEach(function (key) { view_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { view_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function view_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

























Document.defaultProps = {
  document: {}
};

Document.getInitialProps = function ({
  query,
  store
}) {
  const state = store.getState();
  const {
    id
  } = query || {};
  const {
    documentName
  } = Object(documents_selectors["a" /* getDocumentById */])(state, id) || {};
  const props = {
    showNavigation: false,
    backButton: true
  };
  return props;
};

function Document({
  currentPageNumber,
  dispatch,
  id,
  document,
  pageTitle,
  searchQuery,
  track
}) {
  // TODO: Ensure id corresponds to a valid resource, otherwise 404
  // e.g. /documents/export and /documents/view should fail
  const isDocumentFetched = !!document.textractResponse && !!document.comprehendMedicalResponse && !!document.comprehendResponse;
  const {
    status
  } = useFetchDocument(dispatch, id, isDocumentFetched);
  const pageCount = getDocumentPageCount(document);
  const {
    documentName,
    documentURL,
    searchablePdfURL
  } = document; // Reset currentPageNumber on mount

  Object(external_react_["useEffect"])(() => {
    dispatch(Object(actions["c" /* setCurrentPageNumber */])(1));
  }, [dispatch]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      dispatch(Object(documents_actions["c" /* clearRedactions */])(id));
    };
  }, [dispatch, id]); // Set search results data

  const wordsMatchingSearch = Object(external_react_["useMemo"])(() => {
    return getPageWordsBySearch(document, currentPageNumber, searchQuery);
  }, [document, currentPageNumber, searchQuery]);
  const docData = Object(external_react_["useMemo"])(() => {
    const pairs = getDocumentKeyValuePairs(document);
    const tables = getDocumentTables(document);
    const lines = getDocumentLines(document);
    const entities = getDocumentEntityPairs(document, COMPREHEND_SERVICE);
    const medicalEntities = getDocumentEntityPairs(document, COMPREHEND_MEDICAL_SERVICE);
    return {
      pairs,
      tables,
      lines,
      entities,
      medicalEntities
    }; // eslint-disable-next-line
  }, [document, document.textractResponse, document.medicalComprehendResponse, document.comprehendResponse]); // Set the paged content for each tab

  const pageData = Object(external_react_["useMemo"])(() => {
    const lines = getPageLines(document, currentPageNumber);
    const pairs = docData.pairs.filter(d => d.pageNumber === currentPageNumber);
    const tables = docData.tables.filter(d => d.pageNumber === currentPageNumber);
    const entities = docData.entities.filter(d => d.pageNumber === currentPageNumber);
    const medicalEntities = docData.medicalEntities.filter(d => d.pageNumber === currentPageNumber);
    return {
      lines,
      pairs,
      tables,
      entities,
      medicalEntities
    }; // eslint-disable-next-line
  }, [document, document.textractResponse, document.comprehendMedicalResponse, currentPageNumber, docData.pairs, docData.entities, docData.medicalEntities, docData.tables]);
  const {
    0: tab,
    1: selectTab
  } = Object(external_react_["useState"])('search');
  const {
    0: trackTab,
    1: selectTrack
  } = Object(external_react_["useState"])('search');
  const downloadKV = Object(external_react_["useCallback"])(async () => {
    const {
      resultDirectory
    } = document;
    const url = await external_aws_amplify_["Storage"].get(`${resultDirectory}/textract/page-${currentPageNumber}-forms.csv`, {
      expires: 300
    });
    window.open(url);
  }, [currentPageNumber, document]);
  const downloadEntities = Object(external_react_["useCallback"])(async () => {
    const {
      resultDirectory
    } = document;
    const url = await external_aws_amplify_["Storage"].get(`${resultDirectory}/comprehend/comprehendEntities.json`, {
      expires: 300
    });
    window.open(url);
  }, [document]);
  const downloadMedicalEntities = Object(external_react_["useCallback"])(async () => {
    const {
      resultDirectory
    } = document;
    const url = await external_aws_amplify_["Storage"].get(`${resultDirectory}/comprehend/comprehendMedicalEntities.json`, {
      expires: 300
    });
    window.open(url);
  }, [document]);
  const downloadMedicalICD10Ontologies = Object(external_react_["useCallback"])(async () => {
    const {
      resultDirectory
    } = document;
    const url = await external_aws_amplify_["Storage"].get(`${resultDirectory}/comprehend/comprehendMedicalICD10.json`, {
      expires: 300
    });
    window.open(url);
  }, [document]);
  const redactMatches = Object(external_react_["useCallback"])(async () => {
    dispatch(Object(documents_actions["b" /* addRedactions */])(id, currentPageNumber, wordsMatchingSearch));
    dispatch(Object(actions["d" /* setDocumentSearchQuery */])(''));
  }, [currentPageNumber, dispatch, id, wordsMatchingSearch]);
  const redact = Object(external_react_["useCallback"])(async (bbox, pageNumber = currentPageNumber) => {
    dispatch(Object(documents_actions["b" /* addRedactions */])(id, pageNumber, [bbox]));
  }, [currentPageNumber, dispatch, id]);
  const highlightEntities = Object(external_react_["useCallback"])(async (bbox, pageNumber = currentPageNumber) => {
    dispatch(Object(documents_actions["a" /* addHighlights */])(id, pageNumber, bbox));
  }, [currentPageNumber, dispatch, id]);
  const clearReds = Object(external_react_["useCallback"])(() => {
    dispatch(Object(documents_actions["c" /* clearRedactions */])(id));
  }, [dispatch, id]);
  const redactAllValues = Object(external_react_["useCallback"])(async (bbox, pageNumber = currentPageNumber) => {
    dispatch(Object(documents_actions["b" /* addRedactions */])(id, currentPageNumber, pageData.pairs.map(p => p.valueBoundingBox)));
  }, [currentPageNumber, dispatch, id, pageData.pairs]);
  const redactEntityMatches = Object(external_react_["useCallback"])(async (pageNumber, bboxlist) => {
    dispatch(Object(documents_actions["b" /* addRedactions */])(id, pageNumber, bboxlist.map(p => p)));
  }, [currentPageNumber, dispatch, id]);
  const contentRef = Object(external_react_["useRef"])();
  const downloadRedacted = Object(external_react_["useCallback"])(async () => {
    const theThing = contentRef.current.querySelector('canvas,img');
    const cnv = window.document.createElement('canvas'); // TODO the resolution is just based on the viewport for pdfs. It shouldn't be.

    cnv.width = theThing.naturalWidth || theThing.width;
    cnv.height = theThing.naturalHeight || theThing.height;
    const ctx = cnv.getContext('2d');
    ctx.drawImage(theThing, 0, 0);
    ctx.fillStyle = '#000';

    const x = val => val * cnv.width;

    const y = val => val * cnv.height;

    const margin = 2;
    Object.values(document.redactions[currentPageNumber]).forEach(red => {
      ctx.fillRect(x(red.Left) - margin, y(red.Top) - margin, x(red.Width) + 2 * margin, y(red.Height) + 2 * margin);
    });
    cnv.toBlob(blob => {
      const a = window.document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.target = '_blank';
      a.style.display = 'none';
      a.download = document.objectName.split('/').pop().replace(/\.[^.]+$/, '-REDACTED.png');
      window.document.body.appendChild(a);
      a.click();
    }, 'image/png');
  }, [currentPageNumber, document.objectName, document.redactions]);
  const pagePairsAsMarks = Object(external_react_["useMemo"])(() => {
    return pageData.pairs.reduce((acc, {
      id,
      keyBoundingBox,
      valueBoundingBox
    }) => {
      return [...acc, view_objectSpread(view_objectSpread({}, keyBoundingBox), {}, {
        id,
        type: 'key'
      }), view_objectSpread(view_objectSpread({}, valueBoundingBox), {}, {
        id,
        type: 'value'
      })];
    }, []);
  }, [pageData.pairs]);
  const pageLinesAsMarks = Object(external_react_["useMemo"])(() => {
    return pageData.lines.map(({
      id,
      boundingBox
    }) => {
      return view_objectSpread({
        id
      }, boundingBox);
    });
  }, [pageData.lines]);
  const {
    0: highlightedKv,
    1: setHighlightedKv
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (highlightedKv) {
      setTimeout(() => {
        setHighlightedKv(null);
      }, 10);
    }
  }, [highlightedKv]);
  const switchPage = Object(external_react_["useCallback"])(pageNumber => {
    dispatch(Object(actions["c" /* setCurrentPageNumber */])(pageNumber));
  }, [dispatch]);
  const setHighlightedLine = Object(external_react_["useCallback"])(() => {}, []);
  return view_jsx("div", {
    className: view_default.a.document
  }, status === 'pending' && view_jsx(Loading["a" /* default */], null), status === 'success' && view_jsx(external_react_default.a.Fragment, null, view_jsx("div", {
    className: view_default.a.tabWrapper
  }, view_jsx(Tabs["a" /* default */], {
    isTrackTab: false,
    selected: tab,
    track: track,
    onSelectTab: selectTab,
    items: [{
      id: 'search',
      title: 'Preview'
    }, {
      id: 'text',
      title: 'Raw Text'
    }, {
      id: 'kv',
      title: `Key-Value Pairs`
    }, {
      id: 'tables',
      title: `Tables`
    }, {
      id: 'entities',
      title: `Entities`
    }, {
      id: 'medical_entities',
      title: `Medical Entities`
    }]
  }), track === 'redaction' && document.redactions && Object.keys(document.redactions).length ? view_jsx("div", {
    className: view_default.a.downloadButtons
  }, view_jsx(Button["b" /* default */], {
    inverted: true,
    onClick: clearReds
  }, "Clear Redaction"), view_jsx(Button["b" /* default */], {
    className: view_default.a.downloadRedacted,
    onClick: downloadRedacted
  }, "\u2B07 Redacted Doc")) : null, view_jsx("div", null, view_jsx(Tabs["a" /* default */], {
    isTrackTab: true,
    selected: trackTab,
    track: track,
    onSelectTab: selectTrack,
    items: [{
      id: 'searchTrack',
      title: 'Discovery'
    }, {
      id: 'complianceTrack',
      title: 'Compliance'
    }, {
      id: 'workflowTrack',
      title: 'Workflow Automation'
    }]
  }))), view_jsx("div", {
    className: external_classnames_default()(view_default.a.searchBarWrapper, tab === 'search' && view_default.a.visible)
  }, view_jsx(components_DocumentSearchBar_DocumentSearchBar, {
    className: view_default.a.searchBar,
    placeholder: "Search current document\u2026"
  }), track === 'redaction' ? view_jsx(Button["b" /* default */], {
    onClick: redactMatches
  }, "Redact matches") : null), view_jsx("div", {
    className: view_default.a.content,
    ref: contentRef
  }, view_jsx(DocumentViewer_DocumentViewer, {
    className: external_classnames_default()(view_default.a.tabSourceViewer, tab === 'kv' && view_default.a.withKv, tab === 'entities' && view_default.a.withEv, tab === 'medical_entities' && view_default.a.withEv, tab === 'text' && view_default.a.withText),
    document: document,
    pageCount: pageCount,
    redactions: (document.redactions || {})[currentPageNumber],
    marks: tab === 'search' ? wordsMatchingSearch : tab === 'text' ? pageLinesAsMarks : tab === 'kv' ? pagePairsAsMarks : tab === 'entities' ? document.highlights || [] : tab === 'medical_entities' ? document.highlights || [] : [],
    tables: tab === 'tables' && pageData.tables,
    highlightedMark: highlightedKv
  }), view_jsx("div", {
    className: external_classnames_default()(view_default.a.sidebar, (tab === 'kv' || tab === 'text' || tab === 'entities' || tab === 'medical_entities' || tab === 'search' || tab === 'text' || tab === 'tables') && view_default.a.visible)
  }, view_jsx(KeyValueList_KeyValueList, {
    kvPairs: docData.pairs,
    pageCount: pageCount,
    currentPageNumber: currentPageNumber,
    showRedaction: track === 'redaction',
    onHighlight: setHighlightedKv,
    onSwitchPage: switchPage,
    onRedact: redact,
    onRedactAll: redactAllValues,
    onDownload: downloadKV,
    visible: tab === 'kv'
  }), view_jsx(DocumentPreview_DocumentPreview, {
    document: document,
    pageCount: pageCount,
    visible: tab === 'search',
    track: track
  }), view_jsx(RawTextLines_RawTextLines, {
    lines: docData.lines,
    pageCount: pageCount,
    currentPageNumber: currentPageNumber,
    onHighlight: setHighlightedLine,
    onSwitchPage: switchPage,
    visible: tab === 'text'
  }), view_jsx(EntitiesCheckbox_EntitiesCheckbox, {
    entities: docData.entities,
    pageCount: pageCount,
    currentPageNumber: currentPageNumber,
    showRedaction: track === 'redaction',
    onHighlight: highlightEntities,
    onSwitchPage: switchPage,
    onRedact: redactEntityMatches,
    onRedactAll: redactAllValues,
    onDownload: downloadKV,
    visible: tab === 'entities',
    comprehendService: COMPREHEND_SERVICE,
    onDownloadPrimary: downloadEntities,
    onDownloadSecondary: null,
    document: document
  }), view_jsx(EntitiesCheckbox_EntitiesCheckbox, {
    entities: docData.medicalEntities,
    pageCount: pageCount,
    currentPageNumber: currentPageNumber,
    showRedaction: track === 'redaction',
    onHighlight: highlightEntities,
    onSwitchPage: switchPage,
    onRedact: redactEntityMatches,
    onRedactAll: redactAllValues,
    onDownloadPrimary: downloadMedicalEntities,
    onDownloadSecondary: downloadMedicalICD10Ontologies,
    visible: tab === 'medical_entities',
    comprehendService: COMPREHEND_MEDICAL_SERVICE,
    document: document
  }), view_jsx(TableResults_TableResults, {
    tables: docData.tables,
    pageCount: pageCount,
    currentPageNumber: currentPageNumber,
    onSwitchPage: switchPage,
    visible: tab === 'tables',
    document: document
  })))));
}

/* harmony default export */ var documents_view = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(function mapStateToProps(state) {
  const {
    id
  } = external_query_string_default.a.parse(location.search);
  return {
    id,
    currentPageNumber: Object(selectors["b" /* getCurrentPageNumber */])(state, id),
    document: Object(documents_selectors["a" /* getDocumentById */])(state, id),
    searchQuery: Object(selectors["c" /* getDocumentSearchQuery */])(state),
    track: Object(ui_selectors["c" /* getSelectedTrackId */])(state)
  };
})(Document));
/**
 * Conditionally fetch documents from the client side.
 *
 * @param {Function} dispatch Redux dispatch function
 * @param {Array} documents An array of documents
 * @param {Boolean} isDocumentFetched True if the document has already been fetched
 */

function useFetchDocument(dispatch, id, isDocumentFetched) {
  const isMounted = Object(external_react_["useRef"])(true);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    if (!isDocumentFetched) {
      isMounted.current && setStatus('pending');
      dispatch(Object(documents_actions["e" /* fetchDocument */])(id)).then(meta => {
        isMounted.current && setStatus('success');
      }).catch(() => {
        isMounted.current && setStatus('error');
      });
    } else {
      isMounted.current && setStatus('success');
    }
  }, [dispatch, id, isDocumentFetched]); // Ensure we don't try to set state after component unmount

  Object(external_react_["useEffect"])(() => () => isMounted.current = false, []);
  return {
    status
  };
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

/***/ "2/h2":
/***/ (function(module, exports) {

module.exports = {
	"button": "button-e2erA"
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/Y/U");


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

/***/ "9URM":
/***/ (function(module, exports) {

module.exports = {
	"viewer": "viewer-3Koq9",
	"pdfViewer": "pdfViewer-3ziJv",
	"document": "document-uuuRu",
	"pager": "pager-2Uwru",
	"imageWrapper": "imageWrapper-tG12Y",
	"canvas": "canvas-1Kbqd",
	"image": "image-rx4ub",
	"canvasWrapper": "canvasWrapper-2i84t",
	"highlight": "highlight-3WBK-",
	"highlighted": "highlighted-2D82Q",
	"redact": "redact-2Lz1i",
	"cellHighlight": "cellHighlight-3xLc4"
};

/***/ }),

/***/ "9bDB":
/***/ (function(module, exports) {

module.exports = {
	"entityList": "entityList-1Xr_W",
	"visible": "visible-1NwyT",
	"ev": "ev-2dSBH",
	"onThisPage": "onThisPage-YSLwj",
	"actions": "actions-7xgGd",
	"noEntity": "noEntity-FJ4Qr",
	"pageSeparator": "pageSeparator-2LUNz",
	"redactSpan": "redactSpan-1OrDW",
	"valueRedact": "valueRedact-23OUc"
};

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

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

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

/***/ "Nykm":
/***/ (function(module, exports) {

module.exports = {
	"kvList": "kvList-2w63W",
	"visible": "visible-2k-Jj",
	"kv": "kv-isYRB",
	"onThisPage": "onThisPage-1XdFh",
	"hasRedact": "hasRedact-j-FtH",
	"actions": "actions-2POXx",
	"noKv": "noKv-36DGM",
	"pageSeparator": "pageSeparator-1CvBv",
	"valueRedact": "valueRedact-2FCax"
};

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

/***/ "Tsw3":
/***/ (function(module, exports) {

module.exports = {
	"searchBar": "searchBar-1QcSo",
	"wrapper": "wrapper-2t6l5",
	"search": "search-1ovcZ",
	"clear": "clear-gONdA"
};

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

/***/ "ZKom":
/***/ (function(module, exports) {

module.exports = require("react-pdf");

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

/***/ "jM89":
/***/ (function(module, exports) {

module.exports = {
	"tableList": "tableList-3r1y8",
	"visible": "visible-2mjkn",
	"ev": "ev-kEJa6",
	"onThisPage": "onThisPage-WNY7R",
	"actions": "actions-My7nE",
	"noTable": "noTable-d4HPO",
	"pageSeparator": "pageSeparator-3uqLF"
};

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

/***/ "ndm7":
/***/ (function(module, exports) {

module.exports = {
	"document": "document-OtNGO",
	"tabs": "tabs-2SJHy",
	"tabWrapper": "tabWrapper-Tkwth",
	"searchBarWrapper": "searchBarWrapper-1q2B-",
	"downloadButtons": "downloadButtons-3cjNs",
	"tabSourceViewer": "tabSourceViewer-3M_xL",
	"downloadRedacted": "downloadRedacted-3bbKq",
	"content": "content-1A5zI",
	"searchBar": "searchBar-22m8K",
	"visible": "visible-1bQ6Y",
	"trackBorder": "trackBorder-2DXLI",
	"sidebar": "sidebar-351ES",
	"wide": "wide-2ZGGR"
};

/***/ }),

/***/ "o4JR":
/***/ (function(module, exports) {

module.exports = {
	"tabs": "tabs-KOXfP",
	"active": "active-VNGch",
	"trackTabs": "trackTabs-3q8_S"
};

/***/ }),

/***/ "pbYL":
/***/ (function(module, exports) {

module.exports = {
	"lineList": "lineList-gVLTW",
	"visible": "visible-lloPn",
	"line": "line-2Mmuu",
	"onThisPage": "onThisPage-OWiq7",
	"actions": "actions-1L_RZ",
	"empty": "empty-36vn9",
	"pageSeparator": "pageSeparator-37yA0",
	"valueRedact": "valueRedact-3upzU"
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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vGDt":
/***/ (function(module, exports) {

module.exports = {
	"entityList": "entityList-3k7sI",
	"visible": "visible-15RFU",
	"ev": "ev-1A5_U",
	"onThisPage": "onThisPage-1a5G0",
	"actions": "actions-2IoKI",
	"noEntity": "noEntity-39VSJ",
	"pageSeparator": "pageSeparator-3frhG",
	"redactSpan": "redactSpan-wg27s",
	"valueRedact": "valueRedact-1pLVz"
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