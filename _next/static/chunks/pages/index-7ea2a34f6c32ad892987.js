_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(c.default.useContext(a.AmpStateContext))};var r,c=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,c=void 0!==r&&r,a=e.hasQuery,s=void 0!==a&&a;return n||c&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var a=r?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(n,c,a):n[c]=e[c]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),i=n("FYa8"),o=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var j=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(c){var a=!0;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){var s=c.key.slice(c.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(c.type){case"title":case"base":t.has(c.type)?a=!1:t.add(c.type);break;case"meta":for(var i=0,o=j.length;i<o;i++){var l=j[i];if(c.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=c.props[l],d=r[l]||new Set;d.has(u)?a=!1:(d.add(u),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return c.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,c.useContext)(s.AmpStateContext),r=(0,c.useContext)(i.HeadManagerContext);return c.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,o.isInAmpMode)(n)},t)}f.rewind=function(){};var b=f;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=c},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),a=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||c(e)||a(e)||s()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return D})),n.d(t,"default",(function(){return E}));var r=n("nKUr"),c=n("8Kt/"),a=n.n(c),s=n("q1tI"),i=n.n(s),o=n("/MKj");function l(e,t){return e===t}function u(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,c=0;c<r;c++)if(!e(t[c],n[c]))return!1;return!0}function d(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var j=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),c=0;c<t;c++)r[c]=arguments[c];var a=0,s=r.pop(),i=d(r),o=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return o.apply(null,e)}));return l.resultFunc=s,l.dependencies=i,l.recomputations=function(){return a},l.resetRecomputations=function(){return a=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=null,r=null;return function(){return u(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var p=function(e){return e.aSide.lang},f=function(e){return e.aSide.theme},b=j(p,(function(e){return e.page.data}),(function(e,t){return t[e]}));var h=Object(o.b)((function(e){return b(e).aboutMe}),null)((function(e){var t=e.title,n=e.facts;return Object(r.jsxs)("section",{className:"Section","aria-label":t,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t}),n.map((function(e){return Object(r.jsxs)("p",{children:["- ",e]},e)}))]})}));var m=Object(o.b)((function(e){return b(e).aboutApp}),null)((function(e){var t=e.title,n=e.description;return Object(r.jsxs)("section",{className:"Section","aria-label":t,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t}),Object(r.jsxs)("p",{children:[n," ",Object(r.jsx)("a",{href:"https://github.com/miyaokamarina/cv",children:"https://github.com/miyaokamarina/cv"})]}),Object(r.jsx)("p",{children:"Built with\xa0React, Redux and Next.JS"})]})}));var v=Object(o.b)((function(e){return b(e).projectList}),null)((function(e){var t=e.title,n=e.items;return Object(r.jsxs)("section",{className:"Section","aria-label":t,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t}),Object(r.jsx)("section",{className:"Section",children:n.map((function(e){return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)("div",{className:"H H_level_3",children:e.groupName}),Object(r.jsx)("ul",{className:"Ul",children:e.projects.map((function(e){return Object(r.jsxs)("li",{className:"Ul__Item",children:[Object(r.jsx)("a",{href:e.link,children:e.name}),": ",e.description]},e.name)}))})]},e.groupName)}))})]})}));var x=Object(o.b)((function(e){return b(e).workExperience}),null)((function(e){var t=e.title,n=e.list,c=e.responsibilities,a=e.techStack;return Object(r.jsxs)("section",{className:"Section","aria-label":t,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t}),n.map((function(e){return Object(r.jsxs)("section",{className:"Section","aria-label":e.specialization,children:[Object(r.jsxs)("div",{className:"H H_level_3",children:[e.specialization,Object(r.jsxs)("div",{className:"Subtitle",children:[Object(r.jsx)("a",{href:e.link,children:e.name}),", ",e.duration]})]}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{className:"Xps__Strong",children:[c,":"]})}),e.description.map((function(e){return Object(r.jsxs)("p",{children:["- ",e]},e)})),e.stack&&e.stack.length&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:[a,":"]}),e.stack.map((function(e){return Object(r.jsxs)("p",{children:["- ",e]},e)}))]})]},e.name)}))]})}));var O=Object(o.b)((function(e){return b(e).keywords}),null)((function(e){var t=e.title,n=e.buzzWords;return Object(r.jsxs)("section",{className:"Section","aria-label":t,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t}),Object(r.jsx)("ul",{className:"Chips Buzzwords",children:n.map((function(e){return Object(r.jsx)("li",{className:"static Chips__Item ".concat(e.status),children:e.name},e.name)}))})]})}));var _=Object(o.b)((function(e){return b(e).profile}),null)((function(e){var t=e.age,n=e.city,c=e.employment,a=e.english,i=e.level,o=e.location,l=e.name,u=e.salary,d=e.socialMedia,j=e.specialization,p=t.birthDate,f=Object(s.useMemo)((function(){return function(e){var t=new Date(e),n=new Date,r=n.getFullYear()-t.getFullYear(),c=n.getMonth()>t.getMonth()||n.getMonth()===t.getMonth()&&n.getDate()>=t.getDate(),a=c?r:r-1;return JSON.stringify({expr:a,birthDate:e,birthday:t,now:n,age:r,hasBirthdayInCurrentYear:c})}(p)}),[p]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Split__Item",children:Object(r.jsxs)("dl",{className:"Properties",children:[Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[l.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:l.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[t.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:f})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[n.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:n.value})]}),d.map((function(e){return Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[e.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:Object(r.jsx)("a",{href:e.url,children:e.value})})]},e.key)}))]})}),Object(r.jsx)("div",{className:"Split__Item",children:Object(r.jsxs)("dl",{className:"Properties",children:[Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[i.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:i.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[a.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:a.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[j.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:j.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[u.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:u.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[c.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:c.value})]}),Object(r.jsxs)("div",{className:"Properties__Item",children:[Object(r.jsxs)("dt",{className:"Properties__K",children:[o.key,":"]}),Object(r.jsx)("dd",{className:"Properties__V",children:o.value})]})]})})]})}));function y(){return Object(r.jsxs)("div",{className:"Split",children:[Object(r.jsx)("div",{className:"Split__Item",children:Object(r.jsx)("div",{className:"Avatar"})}),Object(r.jsx)(_,{})]})}function g(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Center",children:Object(r.jsx)("div",{className:"Center__Inner",children:Object(r.jsx)("div",{className:"Avatar"})})}),Object(r.jsx)("div",{className:"Center",children:Object(r.jsx)("div",{className:"Center__Inner",children:Object(r.jsx)("div",{className:"Split",children:Object(r.jsx)(_,{})})})})]})}var N=Object(o.b)((function(e){return b(e).profile}),null)((function(e){var t=e.name,n=e.specialization;return Object(r.jsxs)("section",{className:"Section HeadingSection","aria-label":"".concat(t.value," CV (").concat(n.value," Developer)"),children:[Object(r.jsxs)("div",{className:"H H_level_1",children:[t.value," ","CV (",n.value," ","Developer)"]}),Object(r.jsx)("div",{className:"print",children:Object(r.jsx)(y,{})}),Object(r.jsx)("div",{className:"no-print lte-s",children:Object(r.jsx)(g,{})}),Object(r.jsx)("div",{className:"no-print gte-m",children:Object(r.jsx)(g,{})})]})}));function k(){return Object(r.jsx)("div",{className:"Page",children:Object(r.jsxs)("article",{className:"Page__Article",children:[Object(r.jsx)(N,{}),Object(r.jsxs)("div",{className:"no-print",children:[Object(r.jsx)(O,{}),Object(r.jsx)(x,{}),Object(r.jsx)(v,{}),Object(r.jsx)(h,{}),Object(r.jsx)(m,{})]}),Object(r.jsxs)("div",{className:"print",children:[Object(r.jsx)(h,{}),Object(r.jsx)(v,{}),Object(r.jsx)(x,{})]})]})})}var w=n("aOBL"),P=function(e){return{type:w.a,lang:e}},S=function(e){return{type:w.b,theme:e}};var I=Object(o.b)((function(e){return{locale:b(e).aside,lang:p(e)}}),(function(e){return{setEnglish:function(){return e(P("en"))},setRussian:function(){return e(P("ru"))}}}))((function(e){var t=e.lang,n=e.locale,c=e.setRussian,a=e.setEnglish;return Object(r.jsxs)("section",{className:"Section language","aria-label":n.lang,children:[Object(r.jsx)("div",{className:"H H_level_2",children:n.lang}),Object(r.jsxs)("div",{className:"Buttons primary",children:[Object(r.jsx)("span",{role:"button",tabIndex:"0",onClick:c,onKeyDown:c,className:"Buttons__Item LangSwitcher__Item_lang_ru ".concat("ru"===t?"checked":""),children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(r.jsx)("span",{role:"button",tabIndex:"0",onClick:a,onKeyDown:a,className:"Buttons__Item LangSwitcher__Item_lang_en ".concat("en"===t?"checked":""),children:"English"})]})]})}));var M=Object(o.b)((function(e){return{locale:b(e).aside,theme:f(e)}}),(function(e){return{setDarkTheme:function(){return e(S("dark"))},setLightTheme:function(){return e(S("light"))}}}))((function(e){var t=e.locale,n=e.theme,c=e.setDarkTheme,a=e.setLightTheme;return Object(r.jsxs)("section",{className:"Section scheme","aria-label":t.theme.title,children:[Object(r.jsx)("div",{className:"H H_level_2",children:t.theme.title}),Object(r.jsxs)("div",{className:"Buttons primary",children:[Object(r.jsx)("span",{role:"button",tabIndex:"0","data-scheme":n,className:"Buttons__Item ".concat("dark"===n?"checked":""),onClick:c,onKeyDown:c,children:t.theme.dark}),Object(r.jsx)("span",{role:"button",tabIndex:"0","data-scheme":n,className:"Buttons__Item ".concat("light"===n?"checked":""),onClick:a,onKeyDown:a,children:t.theme.light})]})]})}));var C=Object(o.b)((function(e){return{locale:b(e).aside}}))((function(e){var t=e.locale;return Object(r.jsx)("section",{className:"Section","aria-label":t.downloadCv,children:Object(r.jsx)("div",{className:"Center Download",children:Object(r.jsx)("div",{className:"Center__Inner",children:Object(r.jsx)("a",{tabIndex:"0",role:"button",className:"Button secondary",href:"/assets/cv.aleksandr_loktionov.net-developer.pdf",download:"cv.aleksandr_loktionov.net-developer.pdf",children:t.downloadCv})})})})}));function A(){return Object(r.jsxs)("aside",{className:"Aside no-print gte-l1",children:[Object(r.jsx)(I,{}),Object(r.jsx)(M,{}),Object(r.jsx)(C,{})]})}function H(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(A,{})]})}var D=!0;function E(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"Aleksandr Loktionov's CV (.NET Developer)"})}),Object(r.jsx)(H,{})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),c=n("lwsE"),a=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),o=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){s(n,e);var t=l(n);function n(e){var a;return c(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),c=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?c(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=c},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);