_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"+IV6":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("NthX"),o=n.n(r),a=n("eijD");function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=n("mXGw"),d=n.n(p),b=n("o42t"),m=n.n(b),h=n("Vt2/"),y=n.n(h),v=n("9fEB"),g=n.n(v),O=n("bBV7"),j=n.n(O),w=n("ot3a"),k=n("pXna"),P=n("dEWG"),x=n("1sTz"),S=Object(x.a)((function(e,t){var n,r=Number(t),o=0;if(r<0||isNaN(r))throw new RangeError("n must be a non-negative number");for(n=new Array(r);o<r;)n[o]=e(o),o+=1;return n})),_=n("/m4v"),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},I=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{u(r.next(e))}catch(t){a(t)}}function i(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(c,i)}u((r=r.apply(e,t||[])).next())}))},M=function(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},D={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},T=n("cnbf"),N=n("OEqa");function z(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var R=z();R.withExtraArgument=z;var B=R,W=n("Pfd2"),H=n.n(W),F=n("mK0O"),U=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="function"!==typeof t[t.length-1]&&t.pop(),o=t;if("undefined"===typeof r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");return function(e,t){for(var n=arguments.length,a=Array(n>2?n-2:0),c=2;c<n;c++)a[c-2]=arguments[c];var i="undefined"===typeof e,u="undefined"===typeof t;return i&&u&&r?r:o.reduce((function(e,n){return n.apply(void 0,[e,t].concat(a))}),i&&!u&&r?r:e)}},G=n("+Ltg"),X=n.n(G),K=function(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t},Z=function(e){return"undefined"!==typeof Map&&e instanceof Map};function q(e){if(Z(e))return Array.from(e.keys());if("undefined"!==typeof Reflect&&"function"===typeof Reflect.ownKeys)return Reflect.ownKeys(e);var t=Object.getOwnPropertyNames(e);return"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t}function L(e,t){return Z(t)?t.get(e):t[e]}var Y,Q=(Y=function(e){return(K(e)||Z(e))&&!function(e){var t=q(e),n=t.every((function(e){return"next"===e||"throw"===e}));return t.length&&t.length<=2&&n}(e)},function e(t,n,r,o){var a=void 0===n?{}:n,c=a.namespace,i=void 0===c?"/":c,u=a.prefix;return void 0===r&&(r={}),void 0===o&&(o=""),q(t).forEach((function(n){var a=function(e){return o||!u||u&&new RegExp("^"+u+i).test(e)?e:""+u+i+e}(function(e){var t;if(!o)return e;var n=e.toString().split("||"),r=o.split("||");return(t=[]).concat.apply(t,r.map((function(e){return n.map((function(t){return""+e+i+t}))}))).join("||")}(n)),c=L(n,t);Y(c)?e(c,{namespace:i,prefix:u},r,a):r[a]=c})),r}),V=n("isHZ"),J=n("h6i1"),$=function(e){return e.toString()};function ee(e,t,n){void 0===n&&(n={}),X()(K(e)||Z(e),"Expected handlers to be a plain object.");var r=Q(e,n),o=q(r).map((function(e){return function(e,t,n){void 0===t&&(t=J.a);var r=$(e).split("||");X()(!(void 0===n),"defaultState for reducer handling "+r.join(", ")+" should be defined"),X()(Object(V.a)(t)||K(t),"Expected reducer to be a function or object with next and throw reducers");var o=Object(V.a)(t)?[t,t]:[t.next,t.throw].map((function(e){return null===(t=e)||void 0===t?J.a:e;var t})),a=o[0],c=o[1];return function(e,t){void 0===e&&(e=n);var o=t.type;return o&&-1!==r.indexOf($(o))?(!0===t.error?c:a)(e,t):e}}(e,L(e,r),t)})),a=U.apply(void 0,o.concat([t]));return function(e,n){return void 0===e&&(e=t),a(e,n)}}var te,ne=n("4O5K"),re=n("PFYU"),oe=n("L1Fb"),ae=Object(ne.a)((function(e,t,n){var r,o={};for(r in t)Object(oe.a)(r,t)&&(o[r]=Object(oe.a)(r,n)?e(r,t[r],n[r]):t[r]);for(r in n)Object(oe.a)(r,n)&&!Object(oe.a)(r,o)&&(o[r]=n[r]);return o})),ce=Object(ne.a)((function e(t,n,r){return ae((function(n,r,o){return Object(re.a)(r)&&Object(re.a)(o)?e(t,r,o):t(n,r,o)}),n,r)})),ie=Object(x.a)((function(e,t){return ce((function(e,t,n){return n}),e,t)})),ue=n("Ef8z"),se=n("DOZ3"),fe=n("quyw"),le=n("wtyx"),pe=n("Ds/H");function de(e,t){var n=t.payload;return n?ie(e,n):e}var be,me=ee((te={},Object(F.a)(te,ue.e,de),Object(F.a)(te,ue.f,de),Object(F.a)(te,ue.h,de),Object(F.a)(te,ue.g,de),Object(F.a)(te,ue.i,de),Object(F.a)(te,ue.i,de),Object(F.a)(te,ue.c,de),Object(F.a)(te,ue.j,de),Object(F.a)(te,ue.k,de),Object(F.a)(te,ue.o,de),Object(F.a)(te,ue.l,de),Object(F.a)(te,ue.p,de),Object(F.a)(te,ue.n,de),Object(F.a)(te,ue.b,de),Object(F.a)(te,ue.a,de),te),{documents:se.a,tracks:fe.a,meta:le.a,sampleDocuments:pe.a}),he=n("IxHd");function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Object(F.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t){var n=t.payload;return ve(ve({},e),n.ui)}var Oe=ee((be={},Object(F.a)(be,ue.r,ge),Object(F.a)(be,ue.q,ge),Object(F.a)(be,ue.m,ge),Object(F.a)(be,ue.d,ge),be),he.a);function je(){return Object(T.combineReducers)({entities:me,ui:Oe})}var we={};var ke=n("Fcif"),Pe=n("5dyF"),xe=n.n(Pe),Se=n("8Jek"),_e=n.n(Se),Ce=n("8wsC"),Ee=n("v97B"),Ie=n("BCp/"),Me=n("1/UH"),Ae=n.n(Me),De=n("qjZw"),Te=d.a.createElement;function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){Object(F.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=Object(_.b)((function(e,t){var n=Object(ke.a)({},t);return ze(ze({},Object(Ie.a)(e)),n)}))((function(e){var t=e.showNavigation,n=e.backButton,r=e.dispatch,o=Object(p.useState)(!1),a=o[0],c=o[1],i=Object(p.useCallback)((function(){c((function(e){return!e}))}),[]),u=Object(p.useCallback)((function(){r(Object(De.b)()),r(Object(De.f)(void 0)),c(!1)}),[]);return Te("header",{className:Ae.a.header},Te("div",null,Te("a",{className:_e()(Ae.a.mobileMenuLink,a&&Ae.a.open),onClick:i}),Te(xe.a,{href:"/home"},Te("a",{className:Ae.a.logoLink},Te("img",{className:Ae.a.logo,src:"/static/images/DUS_DEMO_logo_WhiteBG.svg",alt:"AWS"}))),t&&Te("div",{className:Ae.a.hideMobile},Te(Ee.a,{href:"/documents",onClick:u},Te("a",{className:Ae.a.backButton},"Document list"))," | ",Te(xe.a,{href:"/select"},Te("a",{className:Ae.a.backButton},"Upload your own documents"))),n&&Te(Ee.a,{href:"/documents",onClick:u},Te("a",{className:Ae.a.backButton},"Start a new search"))),Te("div",{className:Ae.a.logoutlink},Te(Ce.b,{className:Ae.a.borderlessButton,inverted:!0,onClick:Be},"Log Out")),Te("div",{className:_e()(Ae.a.mobileMenu,a&&Ae.a.open)},t&&Te(d.a.Fragment,null,Te(Ee.a,{href:"/documents",onClick:u},Te("a",null,"Document list")),Te(Ee.a,{href:"/select",onClick:i},Te("a",null,"Upload your own documents"))),n&&Te(Ee.a,{href:"/documents",onClick:u},Te("a",null,"Start a new search")),Te(Ce.b,{inverted:!0,onClick:Be},"Log Out")),a&&Te("div",{className:Ae.a.menuOverlay,onClick:i}))}));function Be(e){return We.apply(this,arguments)}function We(){return(We=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w.b.signOut({global:!0});case 3:j.a.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var He=n("kOgf"),Fe=(n("6Fm8"),n("09Of")),Ue=n.n(Fe),Ge=d.a.createElement;function Xe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var Ke=y()().publicRuntimeConfig,Ze=Ke.APIGateway,qe=Ke.bucket,Le=Ke.identityPoolId,Ye=Ke.region,Qe=Ke.userPoolWebClientId,Ve=Ke.userPoolId;w.d.configure({Auth:{identityPoolId:Le,region:Ye,userPoolId:Ve,userPoolWebClientId:Qe},Storage:{AWSS3:{bucket:qe,level:"public",region:Ye}},API:{endpoints:[{name:"TextractDemoTextractAPI",endpoint:"https://".concat(Ze,".execute-api.").concat(Ye,".amazonaws.com/prod/")}]}});var Je=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,n,r,s=Xe(f);function f(){return c(this,f),s.apply(this,arguments)}return t=f,n=[{key:"componentDidMount",value:function(){if(localStorage){var e=this.props.store,t=localStorage.getItem("track");t&&e.dispatch(Object(He.d)(t)),localStorage.getItem("dismissedWalkthrough")&&e.dispatch(Object(He.a)())}}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.pathname,o=e.store,a=n.pageTitle;return Ge(_.a,{store:o},Ge(g.a,null,Ge("title",null,a?"".concat(a," | DUS "):"DUS"),Ge("link",{rel:"icon",type:"image/ico",href:"/static/images/favicon.ico"}),Ge("link",{rel:"shortcut icon",type:"image/ico",href:"/static/images/favicon.ico"}),Ge("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/images/touch-icon-iphone-114-smile.png"}),Ge("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/images/touch-icon-ipad-144-smile.png"}),Ge("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/images/touch-icon-iphone-114-smile.png"}),Ge("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/images/touch-icon-ipad-144-smile.png"})),Ge($e,{pathname:r,pageProps:n},Ge(t,n)))}}],r=[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,r=t.ctx,a={},c=r.pathname,!n.getInitialProps){e.next=7;break}return e.next=6,n.getInitialProps(r);case 6:a=e.sent;case 7:return e.abrupt("return",{pageProps:a,pathname:c});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],n&&i(t.prototype,n),r&&i(t,r),f}(m.a);function $e(e){var t=e.children,n=e.pageProps,r=e.pathname,c=n.showNavigation,i=n.backButton,u=n.pageTitle,s=function(){var e=Object(p.useState)(!1),t=e[0],n=e[1],r=Object(p.useCallback)((function(e){var t=76,r=e.ctrlKey,o=e.keyCode;r&&o===t&&(e.preventDefault(),n((function(e){return!e})))}),[]);return Object(p.useEffect)((function(){return document.addEventListener("keyup",r),function(){document.removeEventListener("keyup",r)}}),[r]),t}(),f=["/styleguide"].indexOf(r)>=0,l="/"===r,d=Object(p.useState)("pending"),b=d[0],m=d[1],h=!0===b||f||l&&!b;return Object(p.useEffect)((function(){f||w.b.currentSession().then(Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=l,!e.t0){e.next=4;break}return e.next=4,j.a.push("/home");case 4:m(!0);case 5:case"end":return e.stop()}}),e)})))).catch((function(){m(!1),!l&&j.a.push("/")}))}),[l,f]),h&&Ge("div",{className:Ue.a.container},Ge(Re,Object(k.a)(P.a,{heading:u,showNavigation:c,backButton:i})),Ge("main",null,t),s&&Ge("div",{className:Ue.a.gridContainer},S((function(e){return Ge("div",{key:e,className:Ue.a.gridCol})}),12)))}t.default=function(e,t){t=E({},D,t);var n="undefined"===typeof window,r=function(r){var o=r.initialState,a=r.ctx,c=t.storeKey,i=function(){return e(t.deserializeState(o),E({},a,t,{isServer:n}))};return n?i():(window.hasOwnProperty(c)||(window[c]=i()),window[c])};return function(e){var o;return(o=function(n){function o(e,o){var a=n.call(this,e,o)||this,c=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",c),a.store=r({initialState:c}),a}return C(o,n),o.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,A(t,["initialProps","initialState"]));return d.a.createElement(e,E({},r,n,{store:this.store}))},o}(p.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",o.getInitialProps=function(o){return I(undefined,void 0,void 0,(function(){var a,c;return M(this,(function(i){switch(i.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return a=r({ctx:o.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),o.ctx.store=a,o.ctx.isServer=n,c={},"getInitialProps"in e?[4,e.getInitialProps.call(e,o)]:[3,2];case 1:c=i.sent(),i.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:n,initialState:t.serializeState(a.getState()),initialProps:c}]}}))}))},o}}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=[B,H.a],n=Object(T.createStore)(je(),e,Object(N.composeWithDevTools)(T.applyMiddleware.apply(void 0,t)));return n}))(Je)},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},5:function(e,t,n){n("3Ckp"),e.exports=n("bBV7")},"5WRv":function(e,t,n){var r=n("iNmH"),o=n("Qatm"),a=n("Zhxd"),c=n("kluZ");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},"6jsY":function(e,t,n){"use strict";var r=n("NthX"),o=n("SDJZ"),a=n("NToG"),c=n("eef+"),i=n("K4DB"),u=n("+IV6"),s=n("fFdx");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("63Ad");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var p=l(n("mXGw")),d=n("z4BS");function b(e){return m.apply(this,arguments)}function m(){return(m=s(r.mark((function e(t){var n,o,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var h=function(e){c(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||a?{}:{url:y(t)}))}}]),n}(p.default.Component);function y(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=b,h.getInitialProps=b},"9fEB":function(e,t,n){"use strict";n("OvAC");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=(r=n("GlZI"))&&r.__esModule?r:{default:r},c=n("9rrO"),i=n("bxxT"),u=n("vI6Y");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,u=p.length;i<u;i++){var s=p[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},"BCp/":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n("3zAI"),o=n("IxHd"),a=(n("Y/kv"),function(e){return Object(r.a)(o.e,e)}),c=function(e){return Object(r.a)(o.d,e)},i=function(e){return Object(r.a)(o.c,e)}},DOZ3:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n("Ug+P"),o=n("k4B4"),a=new r.b.Entity("documents",{},{idAttribute:"documentId"}),c=new r.b.Array(a),i=Object(o.a)(["entities","documents"]),u=function(e){return Object(o.a)(["entities","documents",e])};t.a={}},"Ds/H":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("k4B4"),o=Object(r.a)(["entities","sampleDocuments","single"]),a=Object(r.a)(["entities","sampleDocuments","collections"]);t.a={single:{expense:{id:"expense.png",object:"public/samples/Misc/expense.png",title:"Expense Report",previewImage:"/static/images/sample-previews/expense.png"},employment:{id:"employmentapp.pdf",object:"public/samples/Research/employmentapp.png",title:"Employment App",previewImage:"/static/images/sample-previews/employmentapp.png"},management:{id:"management.png",object:"public/samples/Misc/management.png",title:"Management Report",previewImage:"/static/images/sample-previews/management.png"}},collections:{finance:{id:"finance",title:"Finance",previewImage:"/static/images/sample-previews/Lacey city bonds.png",objects:["public/samples/Finance/Lacey city bonds.png","public/samples/Finance/Spokane accounting.png","public/samples/Finance/USDC balance sheet.png","public/samples/Finance/USDE balance sheet.png"]},medical:{id:"medical",title:"Medical",previewImage:"/static/images/sample-previews/history.png",objects:["public/samples/Medical/HIPAA Release Form.pdf","public/samples/Medical/Medical History Form.png","public/samples/Medical/Medical Insurance Claim Form.pdf","public/samples/Medical/Medical Progress Tracker.png"]}}}},GlZI:function(e,t,n){"use strict";var r=n("5WRv"),o=n("SDJZ"),a=n("NToG"),c=(n("T1e2"),n("eef+")),i=n("K4DB"),u=n("+IV6");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw"),l=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},IxHd:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n("k4B4");t.a={selectedTrack:"search",selectedSearch:"es",headerProps:{}};var o=Object(r.a)(["ui","selectedTrack"]),a=Object(r.a)(["ui","headerProps"]),c=Object(r.a)(["ui","selectedSearch"]),i=Object(r.a)(["ui","dismissedWalkthrough"])},K4DB:function(e,t,n){var r=n("e+GP"),o=n("T1e2");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},L5dB:function(e,t){e.exports=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}},LQ3n:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r=4,o=!1},OEqa:function(e,t,n){"use strict";var r=n("cnbf").compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},PFYU:function(e,t,n){"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}n.d(t,"a",(function(){return r}))},Pfd2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.dispatch;return function(e){return function(n){return(0,a.isFSA)(n)?(0,o.default)(n.payload)?n.payload.then((function(e){return t(c({},n,{payload:e}))})).catch((function(e){return t(c({},n,{payload:e,error:!0})),Promise.reject(e)})):e(n):(0,o.default)(n)?n.then(t):e(n)}}};var r,o=(r=n("L5dB"))&&r.__esModule?r:{default:r},a=n("bts8");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},T1e2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"Vt2/":function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},"Y/kv":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n("uWba"),o=n("3zAI"),a=n("quyw"),c=function(e){return Object(r.a)(Object(o.a)(a.c,e))},i=function(e,t){return Object(o.a)(Object(a.b)(t),e)}},YZBk:function(e,t,n){"use strict";var r=n("1sTz"),o=n("GvBU");var a=n("PFYU"),c=n("hkZP"),i=n("KU38"),u=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=i.a.init,e.prototype["@@transducer/result"]=i.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),s=Object(r.a)((function(e,t){return new u(e,t)})),f=n("zU/u"),l=Object(r.a)(Object(o.a)(["filter"],s,(function(e,t){return Object(a.a)(t)?Object(c.a)((function(n,r){return e(t[r])&&(n[r]=t[r]),n}),{},Object(f.a)(t)):function(e,t){for(var n=0,r=t.length,o=[];n<r;)e(t[n])&&(o[o.length]=t[n]),n+=1;return o}(e,t)})));t.a=l},bts8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFSA=o,t.isError=function(e){return o(e)&&!0===e.error};var r=n("9va6");function o(e){return(0,r.isPlainObject)(e)&&(0,r.isString)(e.type)&&Object.keys(e).every(a)}function a(e){return["type","payload","error","meta"].indexOf(e)>-1}},bxxT:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"eef+":function(e,t,n){var r=n("WI9V");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kOgf:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return m}));var r=n("pmfg"),o=n("4O5K"),a=n("AQd9"),c=Object(a.a)((function(e){return function(){return e}})),i=function(e){return{value:e,map:function(t){return i(t(e))}}},u=Object(o.a)((function(e,t,n){return e((function(e){return i(t(e))}))(n).value})),s=Object(o.a)((function(e,t,n){return u(e,c(t),n)})),f=n("Ef8z"),l=n("IxHd"),p=Object(r.a)(f.r,(function(e){return localStorage.setItem("track",e),s(l.e,e,{})})),d=Object(r.a)(f.m,(function(e){return s(l.c,e,{})})),b=Object(r.a)(f.q,(function(e){return s(l.d,e,{})})),m=Object(r.a)(f.d,(function(){return localStorage.setItem("dismissedWalkthrough",1),s(l.b,!0,{})}))},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},o42t:function(e,t,n){e.exports=n("6jsY")},pXna:function(e,t,n){"use strict";var r=n("1sTz"),o=n("YZBk"),a=Object(r.a)((function(e,t){return Object(o.a)((n=e,function(){return!n.apply(this,arguments)}),t);var n}));t.a=a},qjZw:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return p}));var r=n("pmfg"),o=n("Ef8z"),a=Object(r.a)(o.j,(function(e){return{meta:{currentPageNumber:e}}})),c=Object(r.a)(o.k,(function(e){return{meta:{documentsNextToken:e}}})),i=Object(r.a)(o.o,(function(e){return{meta:{searchQuery:e.replace(/ {2,}/g," ")}}})),u=Object(r.a)(o.b,(function(){return{meta:{searchQuery:""}}})),s=Object(r.a)(o.l,(function(e){return{meta:{documentSearchQuery:e.replace(/ {2,}/g," ")}}})),f=Object(r.a)(o.a,(function(){return{meta:{documentSearchQuery:""}}})),l=Object(r.a)(o.p,(function(e){return{meta:{searchStatus:e}}})),p=Object(r.a)(o.n,(function(e){return{meta:{searchPersona:e}}}))},quyw:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("Ug+P"),o=n("k4B4"),a=n("LQ3n"),c=new r.b.Entity("tracks"),i=(new r.b.Array(c),Object(o.a)(["entities","tracks"])),u=function(e){return Object(o.a)(["entities","tracks",e])},s=a.a?"\nIn this track, you can search through multiple documents and find information faster\nand more efficiently, using  traditional search based technologies such as Amazon \nElasticsearch Service (Amazon ES) as well using state-of-the-art machine learning and natural language enterprise search\nwith Amazon Kendra.\n\nOnce you select a document, you'll be able to interact with Amazon Textract,\nAmazon Comprehend, and Amazon Comprehend Medical to experience the power\nof document digitization and extraction of sensitive information.\n\nFor demo purposes, the solution is pre-loaded with data related to certain medical conditions such as Diabetes and Kidney Disease. Ask a question related to these topics or use the suggested queries in the search bar and explore the different search capabilities.\n":"In this track, you can search through multiple documents and find information faster\nand more efficiently, using Amazon Elasticsearch.\n\nOnce you select a document, you'll be able to interact with Amazon Textract,\nAmazon Comprehend, and Amazon Comprehend Medical to experience the power\nof document digitization and extraction of sensitive information.";t.a={search:{id:"search",title:"Discovery",subtitle:"Search across many documents, or within a single document",longDescription:s,icon:"/static/images/icon_cloud-search.svg",palette:"blue"},redaction:{id:"redaction",title:"Compliance",subtitle:"Redact information from a document",longDescription:"\n      In the compliance track, you can redact information from documents. You have the\n      capability to redact specific key-value pairs detected by Amazon Textract, entities\n      detected by Amazon Comprehend and medical entities detected by Comprehend\n      Medical. You also have the flexibility to redact specific word matches under the\n      Preview Tab.\n\n      These controls help you redact Protected Health Information (PHI) and other\n      sensitive information that may be critical to your use case. You also have the option\n      to download the redacted\xa0document before you would want to share it.\n    ",icon:"/static/images/icon_redact.svg",palette:"teal"},workflow:{id:"workflow",title:"Workflow automation",subtitle:"Edit and transfer data to other tools",longDescription:"\n      This track focusses on how data from different AWS services in DUS can be\n      consumed. The data extracted from DUS is available in the backend storage\n      (Amazon S3) and then it\xa0can be consumed by your downstream dependencies.\n    ",icon:"/static/images/icon_workflow.svg",palette:"purple"}}},uWba:function(e,t,n){"use strict";var r=n("AQd9"),o=n("zU/u"),a=Object(r.a)((function(e){for(var t=Object(o.a)(e),n=t.length,r=[],a=0;a<n;)r[a]=e[t[a]],a+=1;return r}));t.a=a},v97B:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("Fcif"),o=n("mK0O"),a=n("dV/x"),c=n("mXGw"),i=n.n(c),u=n("5dyF"),s=n.n(u),f=i.a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=Object(c.forwardRef)((function(e,t){var n=e.customClick,r=e.onClick,u=e.children,s=Object(a.a)(e,["customClick","onClick","children"]),f=Object(c.useCallback)((function(e){n(e),r(e)}),[n,r]);return i.a.cloneElement(i.a.Children.only(u),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:t,onClick:f},s))}));function d(e){var t=e.onClick,n=e.children,o=Object(a.a)(e,["onClick","children"]);return f(s.a,Object(r.a)({},o,{passHref:!0}),f(p,{customClick:t},n))}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},wtyx:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("k4B4"),o=function(e){return Object(r.a)(["entities","meta",e])};t.a={currentPageNumber:1,documentsNextToken:null,documentsTotal:0,searchQuery:"",searchPersona:void 0,searchStatus:"",searchTotalDocuments:0,searchTotalMatches:0}}},[[5,1,2,8,9,5,10,4,0,7,6,3]]]);