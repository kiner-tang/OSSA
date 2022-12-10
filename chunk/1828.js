/*! For license information please see 1828.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[1828],{"9802":function(e,t,r){"use strict";r.d(t,{"Ee":function(){return y},"xv":function(){return E},"G7":function(){return d}});var a=r(9901),n=r(9641),o=r(3114),c=r(8193),s=r(3341),l=r(5076),i=r(7666),u=r(10),p=r(1195),m=r(7629);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,p.Z)(e);if(t){var n=(0,p.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,u.Z)(this,r)}}a.createElement;var f="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),o.addEventListener(l,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof s)o.style.cssText="";else for(var u in s)updateStyle(o,u,"");for(var p in c)updateStyle(o,p,c[p])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,m.Z)(c),(0,m.Z)(o))).join(" ")}(o,a,n):c}var v=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,a.createRef)(),t}return(0,l.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),a=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(a,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,a.createElement)(e,o,r)}}]),Index}(a.Component);return a.forwardRef((function(e,r){return a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},d=(v("taro-cover-image-core"),v("taro-cover-view-core"),v("taro-match-media-core"),v("taro-movable-area-core"),v("taro-movable-view-core"),v("taro-page-container-core"),v("taro-root-portal-core"),v("taro-scroll-view-core"),v("taro-share-element-core"),v("taro-swiper-core"),v("taro-swiper-item-core"),v("taro-view-core")),E=(v("taro-icon-core"),v("taro-progress-core"),v("taro-rich-text-core"),v("taro-text-core")),y=(v("taro-button-core"),v("taro-checkbox-core"),v("taro-checkbox-group-core"),v("taro-editor-core"),v("taro-form-core"),v("taro-keyboard-accessory-core"),v("taro-label-core"),v("taro-picker-core"),v("taro-picker-view-core"),v("taro-picker-view-column-core"),v("taro-radio-core"),v("taro-radio-group-core"),v("taro-slider-core"),v("taro-switch-core"),v("taro-textarea-core"),v("taro-functional-page-navigator-core"),v("taro-navigator-core"),v("taro-audio-core"),v("taro-camera-core"),v("taro-image-core"));v("taro-live-player-core"),v("taro-video-core"),v("taro-voip-room-core"),v("taro-map-core"),v("taro-canvas-core"),v("taro-web-view-core"),v("taro-ad-core"),v("taro-ad-custom-core"),v("taro-official-account-core"),v("taro-open-data-core"),v("taro-navigation-bar-core"),v("taro-page-meta-core"),v("taro-custom-wrapper-core")},"4353":function(e,t,r){"use strict";r.d(t,{"tq":function(){return o},"t3":function(){return c},"G7":function(){return s},"xv":function(){return l},"zx":function(){return i},"gx":function(){return u},"Ee":function(){return p},"gO":function(){return m},"fV":function(){return f}});var a=r(9901),n=r(7924),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core"),(0,n.Z)("taro-movable-view-core"),(0,n.Z)("taro-page-container-core"),(0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core"),(0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),c=(0,n.Z)("taro-swiper-item-core"),s=(0,n.Z)("taro-view-core"),l=((0,n.Z)("taro-icon-core"),(0,n.Z)("taro-progress-core"),(0,n.Z)("taro-rich-text-core"),(0,n.Z)("taro-text-core")),i=(0,n.Z)("taro-button-core"),u=((0,n.Z)("taro-checkbox-core"),(0,n.Z)("taro-checkbox-group-core"),(0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core"),(0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core"),(0,n.Z)("taro-picker-core"),(0,n.Z)("taro-picker-view-core"),(0,n.Z)("taro-picker-view-column-core"),(0,n.Z)("taro-radio-core"),(0,n.Z)("taro-radio-group-core"),(0,n.Z)("taro-slider-core"),(0,n.Z)("taro-switch-core"),(0,n.Z)("taro-textarea-core")),p=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core"),(0,n.Z)("taro-image-core")),m=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core"),(0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"),(0,n.Z)("taro-page-meta-core"),a.Fragment),f=(0,n.Z)("taro-custom-wrapper-core")},"7924":function(e,t,r){"use strict";var a=r(9641),n=r(3114),o=r(8193),c=r(3341),s=r(5076),l=r(7666),i=r(10),u=r(1195),p=r(7629),m=r(9901);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,a=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}m.createElement;var f="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,a,n){var o=e.ref.current,c=n[r],s=a?a[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,c),t===f){if("scrollTop"===r)return void(o.mpScrollTop=c);if("scrollLeft"===r)return void(o.mpScrollLeft=c);if("scrollIntoView"===r)return void(o.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),i=c;return t===f&&"scroll"===l&&(i=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,i]),o.addEventListener(l,i)}return"string"==typeof c||"number"==typeof c?(o.setAttribute(r,c),void(o[r]=c)):"boolean"==typeof c?c?(o[r]=!0,o.setAttribute(r,c)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=c)}if("string"==typeof c)return void o.setAttribute(r,c);if(!c)return void o.removeAttribute(r);if(a)if("string"==typeof s)o.style.cssText="";else for(var u in s)updateStyle(o,u,"");for(var m in c)updateStyle(o,m,c[m])}else o.className=a?function getClassName(e,t,r){var a=Array.from(e.classList),n=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),c=[];return a.forEach((function(e){o.indexOf(e)>-1?(c.push(e),o=o.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(o))).join(" ")}(o,a,n):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,m.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(a){"children"===a||"key"===a||a in r.props||updateProp(r,e,a,t,r.props)})),Object.keys(this.props).forEach((function(a){updateProp(r,e,a,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),a=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(a,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,a=t.dangerouslySetInnerHTML,n={"ref":this.ref};return a&&(n.dangerouslySetInnerHTML=a),(0,m.createElement)(e,n,r)}}]),Index}(m.Component);return m.forwardRef((function(e,r){return m.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"2727":function(e,t,r){"use strict";r.d(t,{"ZT":function(){return setNavigationBarTitle}});var a=r(7882),n=r(7047),o=r(2731);(0,n.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,n.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.title,s=e.success,l=e.fail,i=e.complete,u=new o.N({"name":"setNavigationBarTitle","success":s,"fail":l,"complete":i});return c&&"string"==typeof c?((0,a.Td)(c),u.success()):u.fail({"errMsg":(0,n.Hl)({"para":"title","correct":"String","wrong":c})})}(0,n.tA)("hideNavigationBarLoading"),(0,n.tA)("hideHomeButton")},"2731":function(e,t,r){"use strict";r.d(t,{"N":function(){return o}});var a=r(3341),n=r(5076),o=function(){function MethodHandler(e){var t=e.name,r=e.success,n=e.fail,o=e.complete;(0,a.Z)(this,MethodHandler),this.methodName=t,this.__success=r,this.__fail=n,this.__complete=o}return(0,n.Z)(MethodHandler,[{"key":"success","value":function success(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.resolve.bind(Promise);return e.errMsg||(e.errMsg="".concat(this.methodName,":ok")),"function"==typeof this.__success&&this.__success(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}},{"key":"fail","value":function fail(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Promise.reject.bind(Promise);return e.errMsg?e.errMsg="".concat(this.methodName,":fail ").concat(e.errMsg):e.errMsg="".concat(this.methodName,":fail"),console.error(e.errMsg),"function"==typeof this.__fail&&this.__fail(e),"function"==typeof this.__complete&&this.__complete(e),t(e)}}]),MethodHandler}()},"6925":function(e,t,r){"use strict";r.d(t,{"Z":function(){return f}});var a=r(9641),n=r(3341),o=r(5076),c=r(7666),s=r(4756),l=r(9901),i=r(9802),u=r(7608),p=r.n(u),m=r(1250),f=function(e){(0,c.Z)(DemoBlock,e);var t=(0,s.Z)(DemoBlock);function DemoBlock(){return(0,n.Z)(this,DemoBlock),t.apply(this,arguments)}return(0,o.Z)(DemoBlock,[{"key":"render","value":function render(){var e,t,r=["block","block__title","block__subTitle"],n=[(e={},(0,a.Z)(e,"block--hide-padding",this.props.hidePd),(0,a.Z)(e,"block--hide-mb",this.props.hideMb),e),(0,a.Z)({},"block__title--hide-padding",this.props.hidePd)],o=this.props,c=o.customStyle,s=o.className;return(0,m.jsxs)(i.G7,{"className":p()(r[0],n[0],s),"style":c,"children":[(0,m.jsxs)(i.G7,{"className":"block__header","children":[this.props.title&&(0,m.jsx)(i.G7,{"className":p()(r[1],n[1]),"children":this.props.title}),this.props.subTitle&&(0,m.jsx)(i.G7,{"className":p()(r[2]),"children":this.props.subTitle})]}),(0,m.jsx)(i.G7,{"className":p()((t={},(0,a.Z)(t,"block__body",!0),(0,a.Z)(t,"block__body--fullscreen",this.props.fullScreen),t)),"children":this.props.children})]})}}]),DemoBlock}(l.Component)},"3946":function(e,t,r){"use strict";r.d(t,{"Z":function(){return v}});var a=r(2875),n=r(3341),o=r(5076),c=r(7666),s=r(4756),l=r(9901),i=r(3932),u=r(1245),p=r(9802),m=r(7608),f=r.n(m),h=r(1250),v=function(e){(0,c.Z)(DemoHeader,e);var t=(0,s.Z)(DemoHeader);function DemoHeader(){return(0,n.Z)(this,DemoHeader),t.apply(this,arguments)}return(0,o.Z)(DemoHeader,[{"key":"onClick","value":function onClick(){this.props.onClick?this.props.onClick():(0,i.T8)({"url":"/pages/index/index"})}},{"key":"render","value":function render(){var e=["header","header__title"],t=u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB?"hide-split-line":"",r=this.props.icon;return(0,h.jsxs)(p.G7,{"className":f()(e[0],t),"children":[u.ZPm.getEnv()===u.ZPm.ENV_TYPE.WEB&&(0,h.jsx)(a.Z,{"type":"detail-home","onClick":this.onClick.bind(this)}),u.ZPm.getEnv()!==u.ZPm.ENV_TYPE.WEB&&r&&(0,h.jsx)(a.Z,{"type":r,"size":44,"customStyle":{"marginRight":u.ZPm.pxTransform(18)}}),(0,h.jsx)(p.G7,{"className":f()(e[1]),"children":this.props.title})]})}}]),DemoHeader}(l.Component)},"2776":function(e,t,r){"use strict";r.d(t,{"Z":function(){return m}});var a=r(3341),n=r(5076),o=r(7666),c=r(4756),s=r(9901),l=r(9802),i=r(7608),u=r.n(i),p=r(1250),m=function(e){(0,o.Z)(DemoTable,e);var t=(0,c.Z)(DemoTable);function DemoTable(){return(0,a.Z)(this,DemoTable),t.apply(this,arguments)}return(0,n.Z)(DemoTable,[{"key":"render","value":function render(){var e=["table","table__title","table__content","table__head","table__head__item"],t=this.props.list||{};if(!t)return null;var r=t.head,a=t.data,n=t.title,o={};r&&r.length&&(o.width=100/r.length+"%");var c={};return a&&a.length&&(c.width=100/a.length+"%"),(0,p.jsxs)(l.G7,{"className":u()(e[0]),"children":[n&&(0,p.jsx)(l.G7,{"className":u()(e[1]),"children":this.props.list.title}),(0,p.jsxs)(l.G7,{"className":u()(e[2]),"children":[r&&r.length?(0,p.jsx)(l.G7,{"className":u()(e[3]),"children":r.map((function(t){return(0,p.jsx)(l.G7,{"style":o,"className":u()(e[4]),"children":t},t)}))}):null,a&&a.length?(0,p.jsx)(l.G7,{"children":a.map((function(e,t){return(0,p.jsx)(l.G7,{"className":"table__tr","children":e.list.map((function(e){return(0,p.jsx)(l.G7,{"className":"table__td","style":c,"children":e},e)}))},t)}))}):null]})]})}}]),DemoTable}(s.Component)},"1828":function(e,t,r){"use strict";r.r(t),r.d(t,{"default":function(){return demo_Index}});var a=r(9641),n=r(3114),o=r(9901),c=r(4353),s=r(7608),l=r.n(s),i=r(6632),u=r(4869);function Index(e){var t,r={},s={},p=(0,o.useState)(!1),m=(0,n.Z)(p,2),f=m[0],h=m[1],v=(0,o.useState)(2*u.j-u.j*e.value),d=(0,n.Z)(v,2),E=d[0],y=d[1],x=function onClose(){h(!1)},N=function onCancel(){var t;null===(t=e.onCancel)||void 0===t||t.call(e),x()};return o.createElement(c.G7,{"className":l()("ossa-picker",r,e.className),"style":s},o.createElement(c.G7,{"className":"ossa-picker__trigger","onClick":function showPopup(){y(2*u.j-u.j*e.value),h(!0)}},e.children),o.createElement(c.G7,{"className":l()((t={},(0,a.Z)(t,"ossa-picker-popup",!0),(0,a.Z)(t,"ossa-picker-popup--show",f),t))},o.createElement(c.G7,{"className":"ossa-picker-popup__mask","onClick":function onClick(){return N()}}),o.createElement(c.G7,{"className":"ossa-picker-popup__container"},o.createElement(c.G7,{"className":"ossa-picker-popup__header"},o.createElement(c.G7,{"className":l()("ossa-picker-popup__btn","ossa-picker-popup__btn-cancel"),"onClick":function onClick(){return N()}},"取消"),o.createElement(c.G7,{"className":l()("ossa-picker-popup__btn","ossa-picker-popup__btn-confirm"),"onClick":function onClick(){return function onConfirm(){var t,r=Math.round((2*u.j-E)/u.j);null===(t=e.onConfirm)||void 0===t||t.call(e,r),x()}()}},"确定")),o.createElement(c.G7,{"className":"ossa-picker-popup__body"},o.createElement(i.Z,{"range":e.range,"height":E,"onUpdateHeight":function onGroupOffsetChange(e){y(e)}})))))}Index.options={"addGlobalClass":!0};var p=r(3006),m=r(2727),f=r(9802),h=r(6925),v=r(3946),d=r(2776),E=r(1250);var y={"title":"API","head":["参数","说明","类型","默认值"],"data":[{"list":["range","取值范围，必选","Array<number|string>","-"]},{"list":["value","取值索引，必选","number","0"]}]},x={"title":"Event","head":["函数名","说明","参数"],"data":[{"list":["onConfirm","点击确认按钮时触发，可选","-"]},{"list":["onCancel","点击取消按钮时触发，可选","-"]}]},N=["中国","美国","日本","泰国","印度"];function demo_Index(e){var t=(0,o.useState)(y),r=(0,n.Z)(t,1)[0],c=(0,o.useState)(x),s=(0,n.Z)(c,1)[0],i=function demo_getClassObject(){return(0,a.Z)({"page":!0},"demo",!0)}(),u=(0,o.useState)(2),g=(0,n.Z)(u,2),b=g[0],Z=g[1];return(0,o.useEffect)((function(){(0,m.ZT)({"title":"Picker 选择器"})}),[]),(0,E.jsxs)(f.G7,{"className":l()(i),"children":[(0,E.jsx)(v.Z,{"title":"Picker 选择器"}),(0,E.jsx)(h.Z,{"title":"普通","children":(0,E.jsx)(f.G7,{"className":"block-section","children":(0,E.jsx)(Index,{"range":N,"value":b,"onCancel":function onCancel(){console.log("cancel")},"onConfirm":function onConfirmNormal(e){Z(Number(e))},"children":(0,E.jsx)(p.Z,{"title":"国籍","desc":N[b]})})})}),(0,E.jsx)(h.Z,{"children":(0,E.jsx)(d.Z,{"list":r})}),(0,E.jsx)(h.Z,{"children":(0,E.jsx)(d.Z,{"list":s})})]})}},"4869":function(e,t,r){"use strict";r.d(t,{"j":function(){return a}});var a=43},"6632":function(e,t,r){"use strict";var a=r(9641),n=r(3341),o=r(5076),c=r(7666),s=r(4756),l=r(9901),i=r(4353),u=r(7608),p=r.n(u),m=43,f=86;var h=function(e){(0,c.Z)(PickerGroup,e);var t=(0,s.Z)(PickerGroup);function PickerGroup(e){var r;return(0,n.Z)(this,PickerGroup),(r=t.call(this,e)).touchEnd=!1,r}return(0,o.Z)(PickerGroup,[{"key":"getPosition","value":function getPosition(){var e=this.touchEnd?.3:0,t=(this.props.height||0)+"px";return"transform: translate3d(0, ".concat(t,", 0);transition: transform ").concat(e,"s;")}},{"key":"formulaUnlimitedScroll","value":function formulaUnlimitedScroll(e,t,r){var a=this,n=this.props,o=n.height,c=void 0===o?0:o,s=n.onUpdateHeight,l=n.columnId,i=void 0===l?"0":l,u="up"===r?1:-1;this.touchEnd=!1,null==s||s(-e*u*m+c,i),setTimeout((function(){a.touchEnd=!0;var r=Math.round(t/-43)+e*u;null==s||s(f-m*r,i,!0)}),0)}},{"key":"render","value":function render(){var e=this,t=(this.props,{}),r=function getStyleObj(e){return Object.assign({},{},e.customStyle)}(this.props),n=this.props.range||[];return l.createElement(i.G7,{"className":p()("picker-group",t,this.props.className),"style":r,"onTouchStart":function onTouchStart(t){var r,a;e.startY=t.changedTouches[0].clientY,e.preY=t.changedTouches[0].clientY,e.hadMove=!1,null===(a=(r=e.props).onTouchStart)||void 0===a||a.call(r,t)},"onTouchMove":function onTouchMove(t){var r,a,n,o,c=e.props,s=c.columnId,l=void 0===s?"0":s,i=c.height,u=void 0===i?0:i,p=t.changedTouches[0].clientY,m=p-e.preY;e.preY=p,e.touchEnd=!1,Math.abs(p-e.startY)>10&&(e.hadMove=!0);var f=u+m,h="time"===e.props.type&&"0"===e.props.columnId||"complete"===e.props.type&&"3"===e.props.columnId,v="time"===e.props.type&&"1"===e.props.columnId||"complete"===e.props.type&&"4"===e.props.columnId;h?(f>0&&(f=-1032+m),f<-1075&&(f=-43+m)):v&&(f>0&&(f=-2580+m),f<-2623&&(f=-43+m)),null===(a=(r=e.props).onUpdateHeight)||void 0===a||a.call(r,f,l),null===(o=(n=e.props).onTouchMove)||void 0===o||o.call(n,t),t.preventDefault(),t.stopPropagation()},"onTouchEnd":function onTouchEnd(t){var r,a,n,o,c,s,l,i,u,p=e.props,h=p.type,v=p.range,d=void 0===v?[]:v,E=p.height,y=void 0===E?0:E,x=p.onUpdateHeight,N=p.onColumnChange,g=p.columnId,b=void 0===g?"0":g,Z=-43*(d.length-1);if(e.touchEnd=!0,e.hadMove){(u=y-f)>0&&(u=0),u<Z&&(u=Z);var _=Math.round(u/-43),k=f-m*_;"date"!==e.props.type&&"complete"!==e.props.type||("0"===e.props.columnId&&(null===(a=(r=e.props).onUpdateDay)||void 0===a||a.call(r,+e.props.range[_].replace(/[^0-9]/gi,""),0)),"1"===e.props.columnId&&(null===(o=(n=e.props).onUpdateDay)||void 0===o||o.call(n,+e.props.range[_].replace(/[^0-9]/gi,""),1)),"2"===e.props.columnId&&(null===(s=(c=e.props).onUpdateDay)||void 0===s||s.call(c,+e.props.range[_].replace(/[^0-9]/gi,""),2))),null==x||x(k,b,"time"===h||"date"===h),null==N||N(k,b,t),null===(i=(l=e.props).onTouchEnd)||void 0===i||i.call(l,t)}},"catchMove":!0},l.createElement(i.G7,{"className":"picker-group__items","style":this.getPosition()},n.map((function(t,r){var n,o=e.props.height||0,c=[m*r+o,m*(r+1)+o],s=[86,129],u=!(c[0]>=s[1]||c[1]<=s[0]);return l.createElement(i.G7,{"className":p()((n={},(0,a.Z)(n,"picker-group__item",!0),(0,a.Z)(n,"picker-group__item--highlight",u),n)),"key":r+t},t)}))),l.createElement(i.G7,{"className":p()("picker-group__mask","picker-group__mask--top")}),l.createElement(i.G7,{"className":p()("picker-group__mask","picker-group__mask--bottom")}),l.createElement(i.G7,{"className":p()("picker-group__indicator")}))}}]),PickerGroup}(l.Component);h.defaultProps={"columnId":"0"};t.Z=function OsPickerGroup(e){return l.createElement(i.fV,null,l.createElement(h,e))}},"2875":function(e,t,r){"use strict";r.d(t,{"Z":function(){return Icon}});var a=r(9641),n=r(9901),o=r(1245),c=r(4353),s=r(7608),l=r.n(s);function Icon(e){var t=function getClassObject(e){var t=e.type;return(0,a.Z)({},"ossa-icon--".concat(t),t)}(e),r=Object.assign(function getStyleObj(e){var t={},r=e.color,a=e.size,n=e.type;return r&&(t.color=r),a&&(t.fontSize=o.ZPm.pxTransform(a)),"home"===n||"subject"===n||"classify"===n||"cart"===n||"user"===n?t.color="#666":"grade"===n||"add-photo"===n||"check"===n?t.color="#ccc":"collect-selected"===n?t.color="#f48f18":"grade-selected"===n?t.color="#fab646":"record"===n&&(t.color="#ff8462"),t}(e),e.customStyle),s=e.type,i=e.className;return n.createElement(c.G7,{"className":l()("ossa-icon",t,i),"style":r,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)}},"avatar"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"delete-input"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"cart"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"cart-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"check-irrevocable"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"check-selected"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"close-h5"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"close-native-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"close-native"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"invisible"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"like-selected"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-high"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"sort-low"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"subject-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"subject"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"voice-close"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"upload-delete"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"})),"classify"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"classify-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"})),"share-circle"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"share-circle-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"})),"detail-cart-pressed"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"detail-cart"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"})),"my-group-buying-select"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"})),"shopping-mall-select"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})),"shopping-mall"===s&&n.createElement(c.G7,null,n.createElement(c.xv,{"className":"path1"}),n.createElement(c.xv,{"className":"path2"}),n.createElement(c.xv,{"className":"path3"}),n.createElement(c.xv,{"className":"path4"}),n.createElement(c.xv,{"className":"path5"}),n.createElement(c.xv,{"className":"path6"}),n.createElement(c.xv,{"className":"path7"})))}Icon.defaultProps={"type":"","size":40},Icon.options={"addGlobalClass":!0}},"3006":function(e,t,r){"use strict";r.d(t,{"Z":function(){return List}});var a=r(3114),n=r(9641),o=r(9901),c=r(4353),s=r(7608),l=r.n(s),i=r(2875);function List(e){var t=(0,o.useState)(false),r=(0,a.Z)(t,2),s=r[0],u=r[1],p=function getClassObject(e,t){var r,a=e.type,o=e.subTitle,c=e.rightIcon,s=e.leftIcon,l=e.desc,i=e.showSplitLine;return r={},(0,n.Z)(r,"ossa-list--".concat(a),a),(0,n.Z)(r,"ossa-list--is-hasSubTitle",o),(0,n.Z)(r,"ossa-list--is-hasIcon",c),(0,n.Z)(r,"ossa-list--is-hasLeftIcon",s),(0,n.Z)(r,"ossa-list--is-hasDesc",l),(0,n.Z)(r,"ossa-list--is-active",t),(0,n.Z)(r,"ossa-list--is-show-split-line",i),r}(e,s),m=Object.assign(function getStyleObj(e,t){var r={},a=e.color,n=e.activeBgColor,o=e.bgColor;return a&&(r.color=a),r.background=t?n:o,r}(e,s),e.customStyle),f=function getColorStyleObject(e){var t=e.descColor,r={};return t&&(r.color=t),r}(e),h=e.leftIcon,v=e.leftIconSize,d=e.title,E=e.subTitle,y=e.desc,x=e.rightIcon,N=e.className;return o.createElement(c.G7,{"className":l()("ossa-list",p,N),"style":m,"onClick":function onClick(t){return function _onClick(e,t){var r;null===(r=t.onClick)||void 0===r||r.call(t,e)}(t,e)},"onTouchStart":function onTouchStart(){return function onTouchstart(e,t,r){t(!0)}(0,u)},"onTouchEnd":function onTouchEnd(){return function _onTouchEnd(e,t,r){t(!1)}(0,u)}},h&&o.createElement(c.G7,{"className":"ossa-list__leftIcon"},o.createElement(i.Z,{"type":h,"size":v,"customStyle":{"verticalAlign":"top"}})),(d||E)&&o.createElement(c.G7,{"className":"ossa-list__box"},d&&o.createElement(c.G7,{"className":l()("ossa-list__title","ossa-title-class")},d),E&&o.createElement(c.G7,{"className":l()("ossa-list__subTitle","ossa-subtitle-class"),"style":f},E)),e.children,y&&o.createElement(c.G7,{"className":"ossa-list__desc","style":f},y),x&&o.createElement(c.G7,{"className":"ossa-list__rightIcon"},o.createElement(i.Z,{"size":28,"type":x,"customStyle":{"verticalAlign":"top"}})))}List.defaultProps={"showSplitLine":!0,"color":"","activeBgColor":"","bgColor":"","leftIconSize":36},List.options={"addGlobalClass":!0},List.externalClasses=["title-class","subtitle-class"]},"7608":function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=classNames.apply(null,r);o&&e.push(o)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0===(r=function(){return classNames}.apply(t,[]))||(e.exports=r)}()},"5472":function(e,t,r){"use strict";r(2458);var a=r(9901),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),o("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var a,o={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{"$$typeof":n,"type":e,"key":i,"ref":u,"props":o,"_owner":c.current}}t.jsx=q,t.jsxs=q},"1250":function(e,t,r){"use strict";e.exports=r(5472)}}]);