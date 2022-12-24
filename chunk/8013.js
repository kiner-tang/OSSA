/*! For license information please see 8013.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[8013],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return x},"xv":function(){return E},"G7":function(){return d}});var a=r(9901),n=r(9641),c=r(3114),o=r(8193),s=r(3341),l=r(5076),i=r(7666),m=r(10),u=r(1195),p=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,m.Z)(this,r)}}a.createElement;var f="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,o=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,o),t===f){if("scrollTop"===r)return void(c.mpScrollTop=o);if("scrollLeft"===r)return void(c.mpScrollLeft=o);if("scrollIntoView"===r)return void(c.mpScrollIntoView=o)}if("function"==typeof o&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=o;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&o.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof o||"number"==typeof o?(c.setAttribute(r,o),void(c[r]=o)):"boolean"==typeof o?o?(c[r]=!0,c.setAttribute(r,o)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=o)}if("string"==typeof o)return void c.setAttribute(r,o);if(!o)return void c.removeAttribute(r);if(a)if("string"==typeof s)c.style.cssText="";else for(var m in s)updateStyle(c,m,"");for(var u in o)updateStyle(c,u,o[u])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),o=[];return a.forEach((function(e){c.indexOf(e)>-1?(o.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&o.push(e)})),(o=[].concat((0,p.Z)(o),(0,p.Z)(c))).join(" ")}(c,a,n):o}var h=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,c.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),(0,a.createElement)(e,c,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},d=(h("taro-cover-image-core"),h("taro-cover-view-core"),h("taro-match-media-core"),h("taro-movable-area-core"),h("taro-movable-view-core"),h("taro-page-container-core"),h("taro-root-portal-core"),h("taro-scroll-view-core"),h("taro-share-element-core"),h("taro-swiper-core"),h("taro-swiper-item-core"),h("taro-view-core")),E=(h("taro-icon-core"),h("taro-progress-core"),h("taro-rich-text-core"),h("taro-text-core")),x=(h("taro-button-core"),h("taro-checkbox-core"),h("taro-checkbox-group-core"),h("taro-editor-core"),h("taro-form-core"),h("taro-keyboard-accessory-core"),h("taro-label-core"),h("taro-picker-core"),h("taro-picker-view-core"),h("taro-picker-view-column-core"),h("taro-radio-core"),h("taro-radio-group-core"),h("taro-slider-core"),h("taro-switch-core"),h("taro-textarea-core"),h("taro-functional-page-navigator-core"),h("taro-navigator-core"),h("taro-audio-core"),h("taro-camera-core"),h("taro-image-core"));h("taro-live-player-core"),h("taro-video-core"),h("taro-voip-room-core"),h("taro-map-core"),h("taro-canvas-core"),h("taro-web-view-core"),h("taro-ad-core"),h("taro-ad-custom-core"),h("taro-official-account-core"),h("taro-open-data-core"),h("taro-navigation-bar-core"),h("taro-page-meta-core"),h("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return c},"t3":function(){return o},"G7":function(){return s},"xv":function(){return l},"zx":function(){return i},"gx":function(){return m},"Ee":function(){return u},"gO":function(){return p},"fV":function(){return f}});var a=r(9901),n=r(7924),c=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),o=(0,n.Z)("taro-swiper-item-core"),s=(0,n.Z)("taro-view-core"),l=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),m=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),u=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),p=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),f=(0,n.Z)("taro-custom-wrapper-core")},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),c=r(8193),o=r(3341),s=r(5076),l=r(7666),i=r(10),m=r(1195),u=r(7629),p=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,m.Z)(e);if(t){var n=(0,m.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}p.createElement;var f="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var c=e.ref.current,o=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,o),t===f){if("scrollTop"===r)return void(c.mpScrollTop=o);if("scrollLeft"===r)return void(c.mpScrollLeft=o);if("scrollIntoView"===r)return void(c.mpScrollIntoView=o)}if("function"==typeof o&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=o;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&o.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),c.addEventListener(l,i)}return"string"==typeof o||"number"==typeof o?(c.setAttribute(r,o),void(c[r]=o)):"boolean"==typeof o?o?(c[r]=!0,c.setAttribute(r,o)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=o)}if("string"==typeof o)return void c.setAttribute(r,o);if(!o)return void c.removeAttribute(r);if(a)if("string"==typeof s)c.style.cssText="";else for(var m in s)updateStyle(c,m,"");for(var p in o)updateStyle(c,p,o[p])}else c.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),o=[];return a.forEach((function(e){c.indexOf(e)>-1?(o.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&o.push(e)})),(o=[].concat((0,u.Z)(o),(0,u.Z)(c))).join(" ")}(c,a,n):o}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,o.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(a,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,p.createElement)(e,n,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2727":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(7882),n=r(7047),c=r(2731);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.title,s=e.success,l=e.fail,i=e.complete,m=new c.N({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":i});return o&&"string"==typeof o?((0,a.Td)(o),m.success()):m.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":o})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"2731":function(e,t,r){"use strict";r.d(t,{"N":function(){return c}});var a=r(3341),n=r(5076),c=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,c=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=c}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"6925":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(9641),n=r(3341),c=r(5076),o=r(7666),s=r(4756),l=r(9901),i=r(9802),m=r(7608),u=r.n(m),p=r(1250),f=function(e){(0,o.Z)(DemoBlock,e);var t=(0,s.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,c.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],c=this.props,o=c.customStyle,s=c.className;return(0,p.jsxs)(i.G7,{"className":u()(r[0],n[0],s),"style":o,"children":[(0,p.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,p.jsx)(i.G7,{"className":u()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,p.jsx)(i.G7,{"className":u()(r[2]),"children":this.props.subTitle})]}),(0,p.jsx)(i.G7,{"className":u()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"3946":function(e,t,r){"use strict";r.d(t,{"Z":function(){return h}});var a=r(2875),n=r(3341),c=r(5076),o=r(7666),s=r(4756),l=r(9901),i=r(3932),m=r(1245),u=r(9802),p=r(7608),f=r.n(p),v=r(1250),h=function(e){(0,o.Z)(DemoHeader,e);var t=(0,s.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,c.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=m.ZPm.getEnv()!==m.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,v.jsxs)(u.G7,{"className":f()(e[0],t),"children":[m.ZPm.getEnv()===m.ZPm.ENV_TYPE.WEB&&(0,v.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),m.ZPm.getEnv()!==m.ZPm.ENV_TYPE.WEB&&r&&(0,v.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":m.ZPm.pxTransform(18)}}),(0,v.jsx)(u.G7,{"className":f()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"2776":function(e,t,r){"use strict";r.d(t,{"Z":function(){return p}});var a=r(3341),n=r(5076),c=r(7666),o=r(4756),s=r(9901),l=r(9802),i=r(7608),m=r.n(i),u=r(1250),p=function(e){(0,c.Z)(DemoTable,e);var t=(0,o.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,c={};r&&r.length&&(c.width=100/r.length+"%");var o={};return a&&a.length&&(o.width=100/a.length+"%"),(0,u.jsxs)(l.G7,{"className":m()(e[0]),"children":[n&&(0,u.jsx)(l.G7,{"className":m()(e[1]),"children":this.props.list.title}),(0,u.jsxs)(l.G7,{"className":m()(e[2]),"children":[r&&r.length?(0,u.jsx)(l.G7,{"className":m()(e[3]),"children":r.map((function(t){return(0,u.jsx)(l.G7,{"style":c,"className":m()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,u.jsx)(l.G7,{"children":a.map((function(e,t){return(0,u.jsx)(l.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,u.jsx)(l.G7,{"className":"table__td","style":o,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(s.Component)},"8013":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return Index}});var a=r(9901),n=r(1245),c=r(4353),o=r(7608),s=r.n(o);function Loading(e){var t=e.className,r=e.customStyle,o=["ossa-loading","ossa-loading__ring"],l={},i=Object.assign(function getStyleObj(e){var t=e.size,r={};return t&&(r.width=n.ZPm.pxTransform(t),r.height=n.ZPm.pxTransform(t)),r}(e),r),m=function getRingStyle(e){var t=e.color,r=e.size;return{"border":t?"1PX solid ".concat(t):"","borderColor":t?"".concat(t," transparent transparent transparent"):"","width":r?"".concat(n.ZPm.pxTransform(r)):"","height":r?"".concat(n.ZPm.pxTransform(r)):""}}(e);return a.createElement(c.G7,{"className":s()(o[0],l,t),"style":i},a.createElement(c.G7,{"className":s()(o[1]),"style":m}),a.createElement(c.G7,{"className":s()(o[1]),"style":m}),a.createElement(c.G7,{"className":s()(o[1]),"style":m}))}Loading.defaultProps={"size":34,"color":"#DD1A21"},Loading.options={"addGlobalClass":!0};var l=r(3114),i=r(9641),m=r(2727),u=r(9802),p=r(6925),f=r(3946),v=r(2776),h=r(1250);var d={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["color","色值，可选","string","#DD1A21"]},{"list":["size","尺寸，可选","number","34"]},{"list":["className","自定义类名，可选","string","-"]},{"list":["customStyle","自定义样式，可选","object","-"]}]},E={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["-","-","-","-"]}]},x="Loading 加载";function Index(e){var t=(0,a.useState)(d),r=(0,l.Z)(t,1)[0],n=(0,a.useState)(E),c=(0,l.Z)(n,1)[0],o=function demo_getClassObject(){return(0,i.Z)({"page":!0},"loading-demo",!0)}();return(0,a.useEffect)((function(){(0,m.ZT)({"title":x})}),[]),(0,h.jsxs)(u.G7,{"className":s()(o),"children":[(0,h.jsx)(f.Z,{"title":x}),(0,h.jsx)(p.Z,{"title":"基础","children":(0,h.jsx)(Loading,{})}),(0,h.jsx)(p.Z,{"title":"自定义尺寸","children":(0,h.jsx)(Loading,{"size":60})}),(0,h.jsx)(p.Z,{"title":"自定义颜色","children":(0,h.jsx)(Loading,{"color":"blue"})}),(0,h.jsx)(p.Z,{"children":(0,h.jsx)(v.Z,{"list":r})}),(0,h.jsx)(p.Z,{"children":(0,h.jsx)(v.Z,{"list":c})})]})}},"2875":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),c=r(1245),o=r(4353),s=r(7608),l=r.n(s);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=c.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),s=e.type,i=e.className;return n.createElement(o.G7,{"className":l()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"delete-input"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"cart"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"cart-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"check-irrevocable"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"check-selected"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"close-h5"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"close-native-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"close-native"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"invisible"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"like-selected"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"sort-high"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"sort-low"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"subject-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"subject"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"voice"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"voice-close"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"upload-delete"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"})),"classify"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"classify-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"})),"share-circle"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"})),"share-circle-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"})),"detail-cart-pressed"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"detail-cart"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"})),"my-group-buying-select"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"})),"shopping-mall-select"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"}),n.createElement(o.xv,{"className":"path7"})),"shopping-mall"===s&&n.createElement(o.G7,null,n.createElement(o.xv,{"className":"path1"}),n.createElement(o.xv,{"className":"path2"}),n.createElement(o.xv,{"className":"path3"}),n.createElement(o.xv,{"className":"path4"}),n.createElement(o.xv,{"className":"path5"}),n.createElement(o.xv,{"className":"path6"}),n.createElement(o.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=classNames.apply(null,r);c&&e.push(c)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,c={},i=null,m=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":m,"props":c,"_owner":o.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);