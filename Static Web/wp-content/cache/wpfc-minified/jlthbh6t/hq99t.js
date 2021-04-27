(function(modules){
var installedModules={};
function __webpack_require__(moduleId){
if(installedModules[moduleId]){
return installedModules[moduleId].exports;
}
var module=installedModules[moduleId]={
i: moduleId,
l: false,
exports: {}
};
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
module.l=true;
return module.exports;
}
__webpack_require__.m=modules;
__webpack_require__.c=installedModules;
__webpack_require__.d=function(exports, name, getter){
if(!__webpack_require__.o(exports, name)){
Object.defineProperty(exports, name, { enumerable: true, get: getter });
}
};
__webpack_require__.r=function(exports){
if(typeof Symbol!=='undefined'&&Symbol.toStringTag){
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
}
Object.defineProperty(exports, '__esModule', { value: true });
};
__webpack_require__.t=function(value, mode){
if(mode & 1) value=__webpack_require__(value);
if(mode & 8) return value;
if((mode & 4)&&typeof value==='object'&&value&&value.__esModule) return value;
var ns=Object.create(null);
__webpack_require__.r(ns);
Object.defineProperty(ns, 'default', { enumerable: true, value: value });
if(mode & 2&&typeof value!='string') for(var key in value) __webpack_require__.d(ns, key, function(key){ return value[key]; }.bind(null, key));
return ns;
};
__webpack_require__.n=function(module){
var getter=module&&module.__esModule ?
function getDefault(){ return module['default']; } :
function getModuleExports(){ return module; };
__webpack_require__.d(getter, 'a', getter);
return getter;
};
__webpack_require__.o=function(object, property){ return Object.prototype.hasOwnProperty.call(object, property); };
__webpack_require__.p="";
return __webpack_require__(__webpack_require__.s=10);
})
([
,
,
(function(module, exports){
module.exports=function (callback){
if(document.readyState==='complete'||document.readyState==='interactive'){
callback.call();
}else if(document.attachEvent){
document.attachEvent('onreadystatechange', function (){
if(document.readyState==='interactive') callback.call();
});
}else if(document.addEventListener){
document.addEventListener('DOMContentLoaded', callback);
}};
}),
(function(module, exports, __webpack_require__){
(function(global){var win;
if(typeof window!=="undefined"){
win=window;
}else if(typeof global!=="undefined"){
win=global;
}else if(typeof self!=="undefined"){
win=self;
}else{
win={};}
module.exports=win;
}.call(this, __webpack_require__(4)))
}),
(function(module, exports){
function _typeof(obj){ "@babel/helpers - typeof"; if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ _typeof=function _typeof(obj){ return typeof obj; };}else{ _typeof=function _typeof(obj){ return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype ? "symbol":typeof obj; };} return _typeof(obj); }
var g;
g=function (){
return this;
}();
try {
g=g||new Function("return this")();
} catch (e){
if((typeof window==="undefined" ? "undefined":_typeof(window))==="object") g=window;
}
module.exports=g;
}),
,
,
,
,
,
(function(module, exports, __webpack_require__){
module.exports=__webpack_require__(11);
}),
(function(module, __webpack_exports__, __webpack_require__){
"use strict";
__webpack_require__.r(__webpack_exports__);
var lite_ready__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);
var lite_ready__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
var global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);
var global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
var _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12);
function _typeof(obj){ "@babel/helpers - typeof"; if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ _typeof=function _typeof(obj){ return typeof obj; };}else{ _typeof=function _typeof(obj){ return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype ? "symbol":typeof obj; };} return _typeof(obj); }
var oldPlugin=global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax;
global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax=_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"];
global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax.noConflict=function (){
global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax=oldPlugin;
return this;
};
if('undefined'!==typeof global__WEBPACK_IMPORTED_MODULE_1__["jQuery"]){
var jQueryPlugin=function jQueryPlugin(){
for (var _len=arguments.length, args=new Array(_len), _key=0; _key < _len; _key++){
args[_key]=arguments[_key];
}
Array.prototype.unshift.call(args, this);
var res=_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].apply(global__WEBPACK_IMPORTED_MODULE_1__["window"], args);
return 'object'!==_typeof(res) ? res:this;
};
jQueryPlugin.constructor=_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].constructor;
var oldJqPlugin=global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax;
global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax=jQueryPlugin;
global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax.noConflict=function (){
global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax=oldJqPlugin;
return this;
};}
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function (){
Object(_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelectorAll('[data-jarallax]'));
});
}),
(function(module, __webpack_exports__, __webpack_require__){
"use strict";
__webpack_require__.r(__webpack_exports__);
var lite_ready__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);
var lite_ready__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
var global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);
var global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i){ return _arrayWithHoles(arr)||_iterableToArrayLimit(arr, i)||_unsupportedIterableToArray(arr, i)||_nonIterableRest(); }
function _nonIterableRest(){ throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen){ if(!o) return; if(typeof o==="string") return _arrayLikeToArray(o, minLen); var n=Object.prototype.toString.call(o).slice(8, -1); if(n==="Object"&&o.constructor) n=o.constructor.name; if(n==="Map"||n==="Set") return Array.from(o); if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len){ if(len==null||len > arr.length) len=arr.length; for (var i=0, arr2=new Array(len); i < len; i++){ arr2[i]=arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i){ if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr))) return; var _arr=[]; var _n=true; var _d=false; var _e=undefined; try { for (var _i=arr[Symbol.iterator](), _s; !(_n=(_s=_i.next()).done); _n=true){ _arr.push(_s.value); if(i&&_arr.length===i) break; }} catch (err){ _d=true; _e=err; } finally { try { if(!_n&&_i["return"]!=null) _i["return"](); } finally { if(_d) throw _e; }} return _arr; }
function _arrayWithHoles(arr){ if(Array.isArray(arr)) return arr; }
function _typeof(obj){ "@babel/helpers - typeof"; if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ _typeof=function _typeof(obj){ return typeof obj; };}else{ _typeof=function _typeof(obj){ return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype ? "symbol":typeof obj; };} return _typeof(obj); }
function _classCallCheck(instance, Constructor){ if(!(instance instanceof Constructor)){ throw new TypeError("Cannot call a class as a function"); }}
function _defineProperties(target, props){ for (var i=0; i < props.length; i++){ var descriptor=props[i]; descriptor.enumerable=descriptor.enumerable||false; descriptor.configurable=true; if("value" in descriptor) descriptor.writable=true; Object.defineProperty(target, descriptor.key, descriptor); }}
function _createClass(Constructor, protoProps, staticProps){ if(protoProps) _defineProperties(Constructor.prototype, protoProps); if(staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
var navigator=global__WEBPACK_IMPORTED_MODULE_1__["window"].navigator;
var isIE=-1 < navigator.userAgent.indexOf('MSIE ')||-1 < navigator.userAgent.indexOf('Trident/')||-1 < navigator.userAgent.indexOf('Edge/');
var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var supportTransform=function (){
var prefixes='transform WebkitTransform MozTransform'.split(' ');
var div=document.createElement('div');
for (var i=0; i < prefixes.length; i +=1){
if(div&&div.style[prefixes[i]]!==undefined){
return prefixes[i];
}}
return false;
}();
var $deviceHelper;
function getDeviceHeight(){
if(!$deviceHelper&&document.body){
$deviceHelper=document.createElement('div');
$deviceHelper.style.cssText='position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
document.body.appendChild($deviceHelper);
}
return ($deviceHelper ? $deviceHelper.clientHeight:0)||global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight||document.documentElement.clientHeight;
}
var wndH;
function updateWndVars(){
if(isMobile){
wndH=getDeviceHeight();
}else{
wndH=global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight||document.documentElement.clientHeight;
}}
updateWndVars();
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', updateWndVars);
global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('load', updateWndVars);
lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function (){
updateWndVars({
type: 'dom-loaded'
});
});
var jarallaxList=[];
function getParents(elem){
var parents=[];
while (null!==elem.parentElement){
elem=elem.parentElement;
if(1===elem.nodeType){
parents.push(elem);
}}
return parents;
}
function updateParallax(){
if(!jarallaxList.length){
return;
}
jarallaxList.forEach(function (data, k){
var instance=data.instance,
oldData=data.oldData;
var clientRect=instance.$item.getBoundingClientRect();
var newData={
width: clientRect.width,
height: clientRect.height,
top: clientRect.top,
bottom: clientRect.bottom,
wndW: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth,
wndH: wndH
};
var isResized = !oldData||oldData.wndW!==newData.wndW||oldData.wndH!==newData.wndH||oldData.width!==newData.width||oldData.height!==newData.height;
var isScrolled=isResized||!oldData||oldData.top!==newData.top||oldData.bottom!==newData.bottom;
jarallaxList[k].oldData=newData;
if(isResized){
instance.onResize();
}
if(isScrolled){
instance.onScroll();
}});
global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
}
var instanceID=0;
var Jarallax=function (){
function Jarallax(item, userOptions){
_classCallCheck(this, Jarallax);
var self=this;
self.instanceID=instanceID;
instanceID +=1;
self.$item=item;
self.defaults={
type: 'scroll',
speed: 0.5,
imgSrc: null,
imgElement: '.jarallax-img',
imgSize: 'cover',
imgPosition: '50% 50%',
imgRepeat: 'no-repeat',
keepImg: false,
elementInViewport: null,
zIndex: -100,
disableParallax: false,
disableVideo: false,
videoSrc: null,
videoStartTime: 0,
videoEndTime: 0,
videoVolume: 0,
videoLoop: true,
videoPlayOnlyVisible: true,
videoLazyLoading: true,
onScroll: null,
onInit: null,
onDestroy: null,
onCoverImage: null
};
var dataOptions=self.$item.dataset||{};
var pureDataOptions={};
Object.keys(dataOptions).forEach(function (key){
var loweCaseOption=key.substr(0, 1).toLowerCase() + key.substr(1);
if(loweCaseOption&&'undefined'!==typeof self.defaults[loweCaseOption]){
pureDataOptions[loweCaseOption]=dataOptions[key];
}});
self.options=self.extend({}, self.defaults, pureDataOptions, userOptions);
self.pureOptions=self.extend({}, self.options);
Object.keys(self.options).forEach(function (key){
if('true'===self.options[key]){
self.options[key]=true;
}else if('false'===self.options[key]){
self.options[key]=false;
}});
self.options.speed=Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
if('string'===typeof self.options.disableParallax){
self.options.disableParallax=new RegExp(self.options.disableParallax);
}
if(self.options.disableParallax instanceof RegExp){
var disableParallaxRegexp=self.options.disableParallax;
self.options.disableParallax=function (){
return disableParallaxRegexp.test(navigator.userAgent);
};}
if('function'!==typeof self.options.disableParallax){
self.options.disableParallax=function (){
return false;
};}
if('string'===typeof self.options.disableVideo){
self.options.disableVideo=new RegExp(self.options.disableVideo);
}
if(self.options.disableVideo instanceof RegExp){
var disableVideoRegexp=self.options.disableVideo;
self.options.disableVideo=function (){
return disableVideoRegexp.test(navigator.userAgent);
};}
if('function'!==typeof self.options.disableVideo){
self.options.disableVideo=function (){
return false;
};}
var elementInVP=self.options.elementInViewport;
if(elementInVP&&'object'===_typeof(elementInVP)&&'undefined'!==typeof elementInVP.length){
var _elementInVP=elementInVP;
var _elementInVP2=_slicedToArray(_elementInVP, 1);
elementInVP=_elementInVP2[0];
}
if(!(elementInVP instanceof Element)){
elementInVP=null;
}
self.options.elementInViewport=elementInVP;
self.image={
src: self.options.imgSrc||null,
$container: null,
useImgTag: false,
position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute':'fixed'
};
if(self.initImg()&&self.canInitParallax()){
self.init();
}}
_createClass(Jarallax, [{
key: "css",
value: function css(el, styles){
if('string'===typeof styles){
return global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el).getPropertyValue(styles);
}
if(styles.transform&&supportTransform){
styles[supportTransform]=styles.transform;
}
Object.keys(styles).forEach(function (key){
el.style[key]=styles[key];
});
return el;
}}, {
key: "extend",
value: function extend(out){
for (var _len=arguments.length, args=new Array(_len > 1 ? _len - 1:0), _key=1; _key < _len; _key++){
args[_key - 1]=arguments[_key];
}
out=out||{};
Object.keys(args).forEach(function (i){
if(!args[i]){
return;
}
Object.keys(args[i]).forEach(function (key){
out[key]=args[i][key];
});
});
return out;
}}, {
key: "getWindowData",
value: function getWindowData(){
return {
width: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth||document.documentElement.clientWidth,
height: wndH,
y: document.documentElement.scrollTop
};}}, {
key: "initImg",
value: function initImg(){
var self=this;
var $imgElement=self.options.imgElement;
if($imgElement&&'string'===typeof $imgElement){
$imgElement=self.$item.querySelector($imgElement);
}
if(!($imgElement instanceof Element)){
if(self.options.imgSrc){
$imgElement=new Image();
$imgElement.src=self.options.imgSrc;
}else{
$imgElement=null;
}}
if($imgElement){
if(self.options.keepImg){
self.image.$item=$imgElement.cloneNode(true);
}else{
self.image.$item=$imgElement;
self.image.$itemParent=$imgElement.parentNode;
}
self.image.useImgTag=true;
}
if(self.image.$item){
return true;
}
if(null===self.image.src){
self.image.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
self.image.bgImage=self.css(self.$item, 'background-image');
}
return !(!self.image.bgImage||'none'===self.image.bgImage);
}}, {
key: "canInitParallax",
value: function canInitParallax(){
return supportTransform&&!this.options.disableParallax();
}}, {
key: "init",
value: function init(){
var self=this;
var containerStyles={
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
overflow: 'hidden'
};
var imageStyles={
pointerEvents: 'none',
transformStyle: 'preserve-3d',
backfaceVisibility: 'hidden',
willChange: 'transform,opacity'
};
if(!self.options.keepImg){
var curStyle=self.$item.getAttribute('style');
if(curStyle){
self.$item.setAttribute('data-jarallax-original-styles', curStyle);
}
if(self.image.useImgTag){
var curImgStyle=self.image.$item.getAttribute('style');
if(curImgStyle){
self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
}}
}
if('static'===self.css(self.$item, 'position')){
self.css(self.$item, {
position: 'relative'
});
}
if('auto'===self.css(self.$item, 'z-index')){
self.css(self.$item, {
zIndex: 0
});
}
self.image.$container=document.createElement('div');
self.css(self.image.$container, containerStyles);
self.css(self.image.$container, {
'z-index': self.options.zIndex
});
if(isIE){
self.css(self.image.$container, {
opacity: 0.9999
});
}
self.image.$container.setAttribute('id', "jarallax-container-".concat(self.instanceID));
self.$item.appendChild(self.image.$container);
if(self.image.useImgTag){
imageStyles=self.extend({
'object-fit': self.options.imgSize,
'object-position': self.options.imgPosition,
'font-family': "object-fit: ".concat(self.options.imgSize, "; object-position: ").concat(self.options.imgPosition, ";"),
'max-width': 'none'
}, containerStyles, imageStyles);
}else{
self.image.$item=document.createElement('div');
if(self.image.src){
imageStyles=self.extend({
'background-position': self.options.imgPosition,
'background-size': self.options.imgSize,
'background-repeat': self.options.imgRepeat,
'background-image': self.image.bgImage||"url(\"".concat(self.image.src, "\")")
}, containerStyles, imageStyles);
}}
if('opacity'===self.options.type||'scale'===self.options.type||'scale-opacity'===self.options.type||1===self.options.speed){
self.image.position='absolute';
}
if('fixed'===self.image.position){
var $parents=getParents(self.$item).filter(function (el){
var styles=global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el);
var parentTransform=styles['-webkit-transform']||styles['-moz-transform']||styles.transform;
var overflowRegex=/(auto|scroll)/;
return parentTransform&&'none'!==parentTransform||overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
});
self.image.position=$parents.length ? 'absolute':'fixed';
}
imageStyles.position=self.image.position;
self.css(self.image.$item, imageStyles);
self.image.$container.appendChild(self.image.$item);
self.onResize();
self.onScroll(true);
if(self.options.onInit){
self.options.onInit.call(self);
}
if('none'!==self.css(self.$item, 'background-image')){
self.css(self.$item, {
'background-image': 'none'
});
}
self.addToParallaxList();
}}, {
key: "addToParallaxList",
value: function addToParallaxList(){
jarallaxList.push({
instance: this
});
if(1===jarallaxList.length){
global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
}}
}, {
key: "removeFromParallaxList",
value: function removeFromParallaxList(){
var self=this;
jarallaxList.forEach(function (data, key){
if(data.instance.instanceID===self.instanceID){
jarallaxList.splice(key, 1);
}});
}}, {
key: "destroy",
value: function destroy(){
var self=this;
self.removeFromParallaxList();
var originalStylesTag=self.$item.getAttribute('data-jarallax-original-styles');
self.$item.removeAttribute('data-jarallax-original-styles');
if(!originalStylesTag){
self.$item.removeAttribute('style');
}else{
self.$item.setAttribute('style', originalStylesTag);
}
if(self.image.useImgTag){
var originalStylesImgTag=self.image.$item.getAttribute('data-jarallax-original-styles');
self.image.$item.removeAttribute('data-jarallax-original-styles');
if(!originalStylesImgTag){
self.image.$item.removeAttribute('style');
}else{
self.image.$item.setAttribute('style', originalStylesTag);
}
if(self.image.$itemParent){
self.image.$itemParent.appendChild(self.image.$item);
}}
if(self.$clipStyles){
self.$clipStyles.parentNode.removeChild(self.$clipStyles);
}
if(self.image.$container){
self.image.$container.parentNode.removeChild(self.image.$container);
}
if(self.options.onDestroy){
self.options.onDestroy.call(self);
}
delete self.$item.jarallax;
}}, {
key: "clipContainer",
value: function clipContainer(){
if('fixed'!==this.image.position){
return;
}
var self=this;
var rect=self.image.$container.getBoundingClientRect();
var width=rect.width,
height=rect.height;
if(!self.$clipStyles){
self.$clipStyles=document.createElement('style');
self.$clipStyles.setAttribute('type', 'text/css');
self.$clipStyles.setAttribute('id', "jarallax-clip-".concat(self.instanceID));
var head=document.head||document.getElementsByTagName('head')[0];
head.appendChild(self.$clipStyles);
}
var styles="#jarallax-container-".concat(self.instanceID, " {\n            clip: rect(0 ").concat(width, "px ").concat(height, "px 0);\n            clip: rect(0, ").concat(width, "px, ").concat(height, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");
if(self.$clipStyles.styleSheet){
self.$clipStyles.styleSheet.cssText=styles;
}else{
self.$clipStyles.innerHTML=styles;
}}
}, {
key: "coverImage",
value: function coverImage(){
var self=this;
var rect=self.image.$container.getBoundingClientRect();
var contH=rect.height;
var speed=self.options.speed;
var isScroll='scroll'===self.options.type||'scroll-opacity'===self.options.type;
var scrollDist=0;
var resultH=contH;
var resultMT=0;
if(isScroll){
if(0 > speed){
scrollDist=speed * Math.max(contH, wndH);
if(wndH < contH){
scrollDist -=speed * (contH - wndH);
}}else{
scrollDist=speed * (contH + wndH);
}
if(1 < speed){
resultH=Math.abs(scrollDist - wndH);
}else if(0 > speed){
resultH=scrollDist / speed + Math.abs(scrollDist);
}else{
resultH +=(wndH - contH) * (1 - speed);
}
scrollDist /=2;
}
self.parallaxScrollDistance=scrollDist;
if(isScroll){
resultMT=(wndH - resultH) / 2;
}else{
resultMT=(contH - resultH) / 2;
}
self.css(self.image.$item, {
height: "".concat(resultH, "px"),
marginTop: "".concat(resultMT, "px"),
left: 'fixed'===self.image.position ? "".concat(rect.left, "px"):'0',
width: "".concat(rect.width, "px")
});
if(self.options.onCoverImage){
self.options.onCoverImage.call(self);
}
return {
image: {
height: resultH,
marginTop: resultMT
},
container: rect
};}}, {
key: "isVisible",
value: function isVisible(){
return this.isElementInViewport||false;
}}, {
key: "onScroll",
value: function onScroll(force){
var self=this;
var rect=self.$item.getBoundingClientRect();
var contT=rect.top;
var contH=rect.height;
var styles={};
var viewportRect=rect;
if(self.options.elementInViewport){
viewportRect=self.options.elementInViewport.getBoundingClientRect();
}
self.isElementInViewport=0 <=viewportRect.bottom&&0 <=viewportRect.right&&viewportRect.top <=wndH&&viewportRect.left <=global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
if(force ? false:!self.isElementInViewport){
return;
}
var beforeTop=Math.max(0, contT);
var beforeTopEnd=Math.max(0, contH + contT);
var afterTop=Math.max(0, -contT);
var beforeBottom=Math.max(0, contT + contH - wndH);
var beforeBottomEnd=Math.max(0, contH - (contT + contH - wndH));
var afterBottom=Math.max(0, -contT + wndH - contH);
var fromViewportCenter=1 - 2 * ((wndH - contT) / (wndH + contH));
var visiblePercent=1;
if(contH < wndH){
visiblePercent=1 - (afterTop||beforeBottom) / contH;
}else if(beforeTopEnd <=wndH){
visiblePercent=beforeTopEnd / wndH;
}else if(beforeBottomEnd <=wndH){
visiblePercent=beforeBottomEnd / wndH;
}
if('opacity'===self.options.type||'scale-opacity'===self.options.type||'scroll-opacity'===self.options.type){
styles.transform='translate3d(0,0,0)';
styles.opacity=visiblePercent;
}
if('scale'===self.options.type||'scale-opacity'===self.options.type){
var scale=1;
if(0 > self.options.speed){
scale -=self.options.speed * visiblePercent;
}else{
scale +=self.options.speed * (1 - visiblePercent);
}
styles.transform="scale(".concat(scale, ") translate3d(0,0,0)");
}
if('scroll'===self.options.type||'scroll-opacity'===self.options.type){
var positionY=self.parallaxScrollDistance * fromViewportCenter;
if('absolute'===self.image.position){
positionY -=contT;
}
styles.transform="translate3d(0,".concat(positionY, "px,0)");
}
self.css(self.image.$item, styles);
if(self.options.onScroll){
self.options.onScroll.call(self, {
section: rect,
beforeTop: beforeTop,
beforeTopEnd: beforeTopEnd,
afterTop: afterTop,
beforeBottom: beforeBottom,
beforeBottomEnd: beforeBottomEnd,
afterBottom: afterBottom,
visiblePercent: visiblePercent,
fromViewportCenter: fromViewportCenter
});
}}
}, {
key: "onResize",
value: function onResize(){
this.coverImage();
this.clipContainer();
}}]);
return Jarallax;
}();
var plugin=function plugin(items, options){
if('object'===(typeof HTMLElement==="undefined" ? "undefined":_typeof(HTMLElement)) ? items instanceof HTMLElement:items&&'object'===_typeof(items)&&null!==items&&1===items.nodeType&&'string'===typeof items.nodeName){
items=[items];
}
var len=items.length;
var k=0;
var ret;
for (var _len2=arguments.length, args=new Array(_len2 > 2 ? _len2 - 2:0), _key2=2; _key2 < _len2; _key2++){
args[_key2 - 2]=arguments[_key2];
}
for (k; k < len; k +=1){
if('object'===_typeof(options)||'undefined'===typeof options){
if(!items[k].jarallax){
items[k].jarallax=new Jarallax(items[k], options);
}}else if(items[k].jarallax){
ret=items[k].jarallax[options].apply(items[k].jarallax, args);
}
if('undefined'!==typeof ret){
return ret;
}}
return items;
};
plugin.constructor=Jarallax;
__webpack_exports__["default"]=(plugin);
})
]);
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery?a.jQuery:a.Zepto)}(this,function(a,b){a.fn.jPlayer=function(c){var d="jPlayer",e="string"==typeof c,f=Array.prototype.slice.call(arguments,1),g=this;return c=!e&&f.length?a.extend.apply(null,[!0,c].concat(f)):c,e&&"_"===c.charAt(0)?g:(this.each(e?function(){var e=a(this).data(d),h=e&&a.isFunction(e[c])?e[c].apply(e,f):e;return h!==e&&h!==b?(g=h,!1):void 0}:function(){var b=a(this).data(d);b?b.option(c||{}):a(this).data(d,new a.jPlayer(c,this))}),g)},a.jPlayer=function(b,c){if(arguments.length){this.element=a(c),this.options=a.extend(!0,{},this.options,b);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()}),this._init()}},"function"!=typeof a.fn.stop&&(a.fn.stop=function(){}),a.jPlayer.emulateMethods="load play pause",a.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate",a.jPlayer.emulateOptions="muted volume",a.jPlayer.reservedEvent="ready flashreset resize repeat error warning",a.jPlayer.event={},a.each(["ready","setmedia","flashreset","resize","repeat","click","error","warning","loadstart","progress","suspend","abort","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","timeupdate","ended","ratechange","durationchange","volumechange"],function(){a.jPlayer.event[this]="jPlayer_"+this}),a.jPlayer.htmlEvent=["loadstart","abort","emptied","stalled","loadedmetadata","canplay","canplaythrough"],a.jPlayer.pause=function(){a.jPlayer.prototype.destroyRemoved(),a.each(a.jPlayer.prototype.instances,function(a,b){b.data("jPlayer").status.srcSet&&b.jPlayer("pause")})},a.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};var c=function(){this.init()};c.prototype={init:function(){this.options={timeFormat:a.jPlayer.timeFormat}},time:function(a){a=a&&"number"==typeof a?a:0;var b=new Date(1e3*a),c=b.getUTCHours(),d=this.options.timeFormat.showHour?b.getUTCMinutes():b.getUTCMinutes()+60*c,e=this.options.timeFormat.showMin?b.getUTCSeconds():b.getUTCSeconds()+60*d,f=this.options.timeFormat.padHour&&10>c?"0"+c:c,g=this.options.timeFormat.padMin&&10>d?"0"+d:d,h=this.options.timeFormat.padSec&&10>e?"0"+e:e,i="";return i+=this.options.timeFormat.showHour?f+this.options.timeFormat.sepHour:"",i+=this.options.timeFormat.showMin?g+this.options.timeFormat.sepMin:"",i+=this.options.timeFormat.showSec?h+this.options.timeFormat.sepSec:""}};var d=new c;a.jPlayer.convertTime=function(a){return d.time(a)},a.jPlayer.uaBrowser=function(a){var b=a.toLowerCase(),c=/(webkit)[ \/]([\w.]+)/,d=/(opera)(?:.*version)?[ \/]([\w.]+)/,e=/(msie) ([\w.]+)/,f=/(mozilla)(?:.*? rv:([\w.]+))?/,g=c.exec(b)||d.exec(b)||e.exec(b)||b.indexOf("compatible")<0&&f.exec(b)||[];return{browser:g[1]||"",version:g[2]||"0"}},a.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),c=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,d=/(ipad|playbook)/,e=/(android)/,f=/(mobile)/,g=c.exec(b)||[],h=d.exec(b)||!f.exec(b)&&e.exec(b)||[];return g[1]&&(g[1]=g[1].replace(/\s/g,"_")),{platform:g[1]||"",tablet:h[1]||""}},a.jPlayer.browser={},a.jPlayer.platform={};var e=a.jPlayer.uaBrowser(navigator.userAgent);e.browser&&(a.jPlayer.browser[e.browser]=!0,a.jPlayer.browser.version=e.version);var f=a.jPlayer.uaPlatform(navigator.userAgent);f.platform&&(a.jPlayer.platform[f.platform]=!0,a.jPlayer.platform.mobile=!f.tablet,a.jPlayer.platform.tablet=!!f.tablet),a.jPlayer.getDocMode=function(){var b;return a.jPlayer.browser.msie&&(document.documentMode?b=document.documentMode:(b=5,document.compatMode&&"CSS1Compat"===document.compatMode&&(b=7))),b},a.jPlayer.browser.documentMode=a.jPlayer.getDocMode(),a.jPlayer.nativeFeatures={init:function(){var a,b,c,d=document,e=d.createElement("video"),f={w3c:["fullscreenEnabled","fullscreenElement","requestFullscreen","exitFullscreen","fullscreenchange","fullscreenerror"],moz:["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror"],webkit:["","webkitCurrentFullScreenElement","webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange",""],webkitVideo:["webkitSupportsFullscreen","webkitDisplayingFullscreen","webkitEnterFullscreen","webkitExitFullscreen","",""],ms:["","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError"]},g=["w3c","moz","webkit","webkitVideo","ms"];for(this.fullscreen=a={support:{w3c:!!d[f.w3c[0]],moz:!!d[f.moz[0]],webkit:"function"==typeof d[f.webkit[3]],webkitVideo:"function"==typeof e[f.webkitVideo[2]],ms:"function"==typeof e[f.ms[2]]},used:{}},b=0,c=g.length;c>b;b++){var h=g[b];if(a.support[h]){a.spec=h,a.used[h]=!0;break}}if(a.spec){var i=f[a.spec];a.api={fullscreenEnabled:!0,fullscreenElement:function(a){return a=a?a:d,a[i[1]]},requestFullscreen:function(a){return a[i[2]]()},exitFullscreen:function(a){return a=a?a:d,a[i[3]]()}},a.event={fullscreenchange:i[4],fullscreenerror:i[5]}}else a.api={fullscreenEnabled:!1,fullscreenElement:function(){return null},requestFullscreen:function(){},exitFullscreen:function(){}},a.event={}}},a.jPlayer.nativeFeatures.init(),a.jPlayer.focus=null,a.jPlayer.keyIgnoreElementNames="A INPUT TEXTAREA SELECT BUTTON";var g=function(b){var c,d=a.jPlayer.focus;d&&(a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g),function(a,d){return b.target.nodeName.toUpperCase()===d.toUpperCase()?(c=!0,!1):void 0}),c||a.each(d.options.keyBindings,function(c,e){return e&&a.isFunction(e.fn)&&("number"==typeof e.key&&b.which===e.key||"string"==typeof e.key&&b.key===e.key)?(b.preventDefault(),e.fn(d),!1):void 0}))};a.jPlayer.keys=function(b){var c="keydown.jPlayer";a(document.documentElement).unbind(c),b&&a(document.documentElement).bind(c,g)},a.jPlayer.keys(!0),a.jPlayer.prototype={count:0,version:{script:"2.9.2",needFlash:"2.9.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",auroraFormats:"wav",preload:"metadata",volume:.8,muted:!1,remainingDuration:!1,toggleDuration:!1,captureDuration:!0,playbackRate:1,defaultPlaybackRate:1,minPlaybackRate:.5,maxPlaybackRate:4,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",playbackRateBar:".jp-playback-rate-bar",playbackRateBarValue:".jp-playback-rate-bar-value",currentTime:".jp-current-time",duration:".jp-duration",title:".jp-title",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},stateClass:{playing:"jp-state-playing",seeking:"jp-state-seeking",muted:"jp-state-muted",looped:"jp-state-looped",fullScreen:"jp-state-full-screen",noVolume:"jp-state-no-volume"},useStateClassSkin:!1,autoBlur:!0,smoothPlayBar:!1,fullScreen:!1,fullWindow:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1e3},loop:!1,repeat:function(b){b.jPlayer.options.loop?a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){a(this).jPlayer("play")}):a(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullWindow:{msie:/msie [0-6]\./,ipad:/ipad.*?os [0-4]\./,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3]\.(?!.*?mobile)/,android_phone:/(?=.*android)(?!.*chrome)(?=.*mobile)/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/,playbook:/playbook/},timeFormat:{},keyEnabled:!1,audioFullScreen:!1,keyBindings:{play:{key:80,fn:function(a){a.status.paused?a.play():a.pause()}},fullScreen:{key:70,fn:function(a){(a.status.video||a.options.audioFullScreen)&&a._setOption("fullScreen",!a.options.fullScreen)}},muted:{key:77,fn:function(a){a._muted(!a.options.muted)}},volumeUp:{key:190,fn:function(a){a.volume(a.options.volume+.1)}},volumeDown:{key:188,fn:function(a){a.volume(a.options.volume-.1)}},loop:{key:76,fn:function(a){a._loop(!a.options.loop)}}},verticalVolume:!1,verticalPlaybackRate:!1,globalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,consoleAlerts:!0,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,remaining:0,videoWidth:0,videoHeight:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,aurora:!0,flash:!0},format:{mp3:{codec:"audio/mpeg",flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},m3u8a:{codec:'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',flashCanPlay:!1,media:"audio"},m3ua:{codec:"audio/mpegurl",flashCanPlay:!1,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis, opus"',flashCanPlay:!1,media:"audio"},flac:{codec:"audio/x-flac",flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},m3u8v:{codec:'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!1,media:"video"},m3uv:{codec:"audio/mpegurl",flashCanPlay:!1,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var c=this;if(this.element.empty(),this.status=a.extend({},this.status),this.internal=a.extend({},this.internal),this.options.timeFormat=a.extend({},a.jPlayer.timeFormat,this.options.timeFormat),this.internal.cmdsIgnored=a.jPlayer.platform.ipad||a.jPlayer.platform.iphone||a.jPlayer.platform.ipod,this.internal.domNode=this.element.get(0),this.options.keyEnabled&&!a.jPlayer.focus&&(a.jPlayer.focus=this),this.androidFix={setMedia:!1,play:!1,pause:!1,time:0/0},a.jPlayer.platform.android&&(this.options.preload="auto"!==this.options.preload?"metadata":"auto"),this.formats=[],this.solutions=[],this.require={},this.htmlElement={},this.html={},this.html.audio={},this.html.video={},this.aurora={},this.aurora.formats=[],this.aurora.properties=[],this.flash={},this.css={},this.css.cs={},this.css.jq={},this.ancestorJq=[],this.options.volume=this._limitValue(this.options.volume,0,1),a.each(this.options.supplied.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.formats.push(e)}}),a.each(this.options.solution.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.solution[e]){var f=!1;a.each(c.solutions,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.solutions.push(e)}}),a.each(this.options.auroraFormats.toLowerCase().split(","),function(b,d){var e=d.replace(/^\s+|\s+$/g,"");if(c.format[e]){var f=!1;a.each(c.aurora.formats,function(a,b){return e===b?(f=!0,!1):void 0}),f||c.aurora.formats.push(e)}}),this.internal.instance="jp_"+this.count,this.instances[this.internal.instance]=this.element,this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count),this.internal.self=a.extend({},{id:this.element.attr("id"),jq:this.element}),this.internal.audio=a.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:b}),this.internal.video=a.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:b}),this.internal.flash=a.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:b,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"jquery.jplayer.swf":"")}),this.internal.poster=a.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:b}),a.each(a.jPlayer.event,function(a,d){c.options[a]!==b&&(c.element.bind(d+".jPlayer",c.options[a]),c.options[a]=b)}),this.require.audio=!1,this.require.video=!1,a.each(this.formats,function(a,b){c.require[c.format[b].media]=!0}),this.options=this.require.video?a.extend(!0,{},this.optionsVideo,this.options):a.extend(!0,{},this.optionsAudio,this.options),this._setSize(),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this.status.noVolume=this._uaBlocklist(this.options.noVolume),a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled&&this._fullscreenAddEventListeners(),this._restrictNativeVideoControls(),this.htmlElement.poster=document.createElement("img"),this.htmlElement.poster.id=this.internal.poster.id,this.htmlElement.poster.onload=function(){(!c.status.video||c.status.waitForPlay)&&c.internal.poster.jq.show()},this.element.append(this.htmlElement.poster),this.internal.poster.jq=a("#"+this.internal.poster.id),this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),this.internal.poster.jq.hide(),this.internal.poster.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}),this.html.audio.available=!1,this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio)),this.html.video.available=!1,this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video)),this.flash.available=this._checkForFlash(10.1),this.html.canPlay={},this.aurora.canPlay={},this.flash.canPlay={},a.each(this.formats,function(b,d){c.html.canPlay[d]=c.html[c.format[d].media].available&&""!==c.htmlElement[c.format[d].media].canPlayType(c.format[d].codec),c.aurora.canPlay[d]=a.inArray(d,c.aurora.formats)>-1,c.flash.canPlay[d]=c.format[d].flashCanPlay&&c.flash.available}),this.html.desired=!1,this.aurora.desired=!1,this.flash.desired=!1,a.each(this.solutions,function(b,d){if(0===b)c[d].desired=!0;else{var e=!1,f=!1;a.each(c.formats,function(a,b){c[c.solutions[0]].canPlay[b]&&("video"===c.format[b].media?f=!0:e=!0)}),c[d].desired=c.require.audio&&!e||c.require.video&&!f}}),this.html.support={},this.aurora.support={},this.flash.support={},a.each(this.formats,function(a,b){c.html.support[b]=c.html.canPlay[b]&&c.html.desired,c.aurora.support[b]=c.aurora.canPlay[b]&&c.aurora.desired,c.flash.support[b]=c.flash.canPlay[b]&&c.flash.desired}),this.html.used=!1,this.aurora.used=!1,this.flash.used=!1,a.each(this.solutions,function(b,d){a.each(c.formats,function(a,b){return c[d].support[b]?(c[d].used=!0,!1):void 0})}),this._resetActive(),this._resetGate(),this._cssSelectorAncestor(this.options.cssSelectorAncestor),this.html.used||this.aurora.used||this.flash.used?this.css.jq.noSolution.length&&this.css.jq.noSolution.hide():(this._error({type:a.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SOLUTION,hint:a.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show()),this.flash.used){var d,e="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+"&muted="+this.options.muted;if(a.jPlayer.browser.msie&&(Number(a.jPlayer.browser.version)<9||a.jPlayer.browser.documentMode<9)){var f='<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',g=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+e+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];d=document.createElement(f);for(var h=0;h<g.length;h++)d.appendChild(document.createElement(g[h]))}else{var i=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)};d=document.createElement("object"),d.setAttribute("id",this.internal.flash.id),d.setAttribute("name",this.internal.flash.id),d.setAttribute("data",this.internal.flash.swf),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("width","1"),d.setAttribute("height","1"),d.setAttribute("tabindex","-1"),i(d,"flashvars",e),i(d,"allowscriptaccess","always"),i(d,"bgcolor",this.options.backgroundColor),i(d,"wmode",this.options.wmode)}this.element.append(d),this.internal.flash.jq=a(d)}this.status.playbackRateEnabled=this.html.used&&!this.flash.used?this._testPlaybackRate("audio"):!1,this._updatePlaybackRate(),this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=a("#"+this.internal.audio.id)),this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=a("#"+this.internal.video.id),this.internal.video.jq.css(this.status.nativeVideoControls?{width:this.status.width,height:this.status.height}:{width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){c._trigger(a.jPlayer.event.click)}))),this.aurora.used,this.options.emulateHtml&&this._emulateHtmlBridge(),!this.html.used&&!this.aurora.used||this.flash.used||setTimeout(function(){c.internal.ready=!0,c.version.flash="n/a",c._trigger(a.jPlayer.event.repeat),c._trigger(a.jPlayer.event.ready)},100),this._updateNativeVideoControls(),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),a.jPlayer.prototype.count++},destroy:function(){this.clearMedia(),this._removeUiClass(),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(""),this.css.jq.duration.length&&this.css.jq.duration.text(""),a.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")}),this.internal.poster.jq.unbind(".jPlayer"),this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer"),this._fullscreenRemoveEventListeners(),this===a.jPlayer.focus&&(a.jPlayer.focus=null),this.options.emulateHtml&&this._destroyHtmlBridge(),this.element.removeData("jPlayer"),this.element.unbind(".jPlayer"),this.element.empty(),delete this.instances[this.internal.instance]},destroyRemoved:function(){var b=this;a.each(this.instances,function(a,c){b.element!==c&&(c.data("jPlayer")||(c.jPlayer("destroy"),delete b.instances[a]))})},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),!0}catch(b){return!1}},_testPlaybackRate:function(a){var b,c=.5;a="string"==typeof a?a:"audio",b=document.createElement(a);try{return"playbackRate"in b?(b.playbackRate=c,b.playbackRate===c):!1}catch(d){return!1}},_uaBlocklist:function(b){var c=navigator.userAgent.toLowerCase(),d=!1;return a.each(b,function(a,b){return b&&b.test(c)?(d=!0,!1):void 0}),d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullWindow=!0)},_updateNativeVideoControls:function(){this.html.video.available&&this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(b,c){var d=this;b.preload=this.options.preload,b.muted=this.options.muted,b.volume=this.options.volume,this.status.playbackRateEnabled&&(b.defaultPlaybackRate=this.options.defaultPlaybackRate,b.playbackRate=this.options.playbackRate),b.addEventListener("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress))},!1),b.addEventListener("loadeddata",function(){c.gate&&(d.androidFix.setMedia=!1,d.androidFix.play&&(d.androidFix.play=!1,d.play(d.androidFix.time)),d.androidFix.pause&&(d.androidFix.pause=!1,d.pause(d.androidFix.time)),d._trigger(a.jPlayer.event.loadeddata))},!1),b.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.timeupdate))},!1),b.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(a.jPlayer.event.play))},!1),b.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),d._trigger(a.jPlayer.event.playing))},!1),b.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(a.jPlayer.event.pause))},!1),b.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.waiting))},!1),b.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(a.jPlayer.event.seeking))},!1),b.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.seeked))},!1),b.addEventListener("volumechange",function(){c.gate&&(d.options.volume=b.volume,d.options.muted=b.muted,d._updateMute(),d._updateVolume(),d._trigger(a.jPlayer.event.volumechange))},!1),b.addEventListener("ratechange",function(){c.gate&&(d.options.defaultPlaybackRate=b.defaultPlaybackRate,d.options.playbackRate=b.playbackRate,d._updatePlaybackRate(),d._trigger(a.jPlayer.event.ratechange))},!1),b.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(a.jPlayer.event.suspend))},!1),b.addEventListener("ended",function(){c.gate&&(a.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.addEventListener("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1),a.each(a.jPlayer.htmlEvent,function(e,f){b.addEventListener(this,function(){c.gate&&d._trigger(a.jPlayer.event[f])},!1)})},_addAuroraEventListeners:function(b,c){var d=this;b.volume=100*this.options.volume,b.on("progress",function(){c.gate&&(d.internal.cmdsIgnored&&this.readyState>0&&(d.internal.cmdsIgnored=!1),d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.progress),b.duration>0&&d._trigger(a.jPlayer.event.timeupdate))},!1),b.on("ready",function(){c.gate&&d._trigger(a.jPlayer.event.loadeddata)},!1),b.on("duration",function(){c.gate&&(d._getAuroraStatus(b),d._updateInterface(),d._trigger(a.jPlayer.event.durationchange))},!1),b.on("end",function(){c.gate&&(d._updateButtons(!1),d._getAuroraStatus(b,!0),d._updateInterface(),d._trigger(a.jPlayer.event.ended))},!1),b.on("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:a.jPlayer.error.URL,context:d.status.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL})))},!1)},_getHtmlStatus:function(a,b){var c=0,d=0,e=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration),c=a.currentTime,d=this.status.duration>0?100*c/this.status.duration:0,"object"==typeof a.seekable&&a.seekable.length>0?(e=this.status.duration>0?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=this.status.duration>0?100*a.currentTime/a.seekable.end(a.seekable.length-1):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=a.readyState,this.status.networkState=a.networkState,this.status.playbackRate=a.playbackRate,this.status.ended=a.ended},_getAuroraStatus:function(a,b){var c=0,d=0,e=0,f=0;this.status.duration=a.duration/1e3,c=a.currentTime/1e3,d=this.status.duration>0?100*c/this.status.duration:0,a.buffered>0?(e=this.status.duration>0?a.buffered*this.status.duration/this.status.duration:100,f=this.status.duration>0?c/(a.buffered*this.status.duration):0):(e=100,f=d),b&&(c=0,f=0,d=0),this.status.seekPercent=e,this.status.currentPercentRelative=f,this.status.currentPercentAbsolute=d,this.status.currentTime=c,this.status.remaining=this.status.duration-this.status.currentTime,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_resetStatus:function(){this.status=a.extend({},this.status,a.jPlayer.prototype.status)},_trigger:function(b,c,d){var e=a.Event(b);e.jPlayer={},e.jPlayer.version=a.extend({},this.version),e.jPlayer.options=a.extend(!0,{},this.options),e.jPlayer.status=a.extend(!0,{},this.status),e.jPlayer.html=a.extend(!0,{},this.html),e.jPlayer.aurora=a.extend(!0,{},this.aurora),e.jPlayer.flash=a.extend(!0,{},this.flash),c&&(e.jPlayer.error=a.extend({},c)),d&&(e.jPlayer.warning=a.extend({},d)),this.element.trigger(e)},jPlayerFlashEvent:function(b,c){if(b===a.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media),this.volumeWorker(this.options.volume),d>0&&(e?this.pause(d):this.play(d))}this._trigger(a.jPlayer.event.flashreset)}}else this.internal.ready=!0,this.internal.flash.jq.css({width:"0px",height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:a.jPlayer.error.VERSION,context:this.version.flash,message:a.jPlayer.errorMsg.VERSION+this.version.flash,hint:a.jPlayer.errorHint.VERSION}),this._trigger(a.jPlayer.event.repeat),this._trigger(b);if(this.flash.gate)switch(b){case a.jPlayer.event.progress:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.timeupdate:this._getFlashStatus(c),this._updateInterface(),this._trigger(b);break;case a.jPlayer.event.play:this._seeked(),this._updateButtons(!0),this._trigger(b);break;case a.jPlayer.event.pause:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.ended:this._updateButtons(!1),this._trigger(b);break;case a.jPlayer.event.click:this._trigger(b);break;case a.jPlayer.event.error:this.status.waitForLoad=!0,this.status.waitForPlay=!0,this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._validString(this.status.media.poster)&&this.internal.poster.jq.show(),this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show(),this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media),this._updateButtons(!1),this._error({type:a.jPlayer.error.URL,context:c.src,message:a.jPlayer.errorMsg.URL,hint:a.jPlayer.errorHint.URL});break;case a.jPlayer.event.seeking:this._seeking(),this._trigger(b);break;case a.jPlayer.event.seeked:this._seeked(),this._trigger(b);break;case a.jPlayer.event.ready:break;default:this._trigger(b)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent,this.status.currentPercentRelative=a.currentPercentRelative,this.status.currentPercentAbsolute=a.currentPercentAbsolute,this.status.currentTime=a.currentTime,this.status.duration=a.duration,this.status.remaining=a.duration-a.currentTime,this.status.videoWidth=a.videoWidth,this.status.videoHeight=a.videoHeight,this.status.readyState=4,this.status.networkState=0,this.status.playbackRate=1,this.status.ended=!1},_updateButtons:function(a){a===b?a=!this.status.paused:this.status.paused=!a,a?this.addStateClass("playing"):this.removeStateClass("playing"),!this.status.noFullWindow&&this.options.fullWindow?this.addStateClass("fullScreen"):this.removeStateClass("fullScreen"),this.options.loop?this.addStateClass("looped"):this.removeStateClass("looped"),this.css.jq.play.length&&this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide())),this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide())),this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%"),this.css.jq.playBar.length&&(this.options.smoothPlayBar?this.css.jq.playBar.stop().animate({width:this.status.currentPercentAbsolute+"%"},250,"linear"):this.css.jq.playBar.width(this.status.currentPercentRelative+"%"));var a="";this.css.jq.currentTime.length&&(a=this._convertTime(this.status.currentTime),a!==this.css.jq.currentTime.text()&&this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));var b="",c=this.status.duration,d=this.status.remaining;this.css.jq.duration.length&&("string"==typeof this.status.media.duration?b=this.status.media.duration:("number"==typeof this.status.media.duration&&(c=this.status.media.duration,d=c-this.status.currentTime),b=this.options.remainingDuration?(d>0?"-":"")+this._convertTime(d):this._convertTime(c)),b!==this.css.jq.duration.text()&&this.css.jq.duration.text(b))},_convertTime:c.prototype.time,_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg"),this.addStateClass("seeking")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg"),this.removeStateClass("seeking")},_resetGate:function(){this.html.audio.gate=!1,this.html.video.gate=!1,this.aurora.gate=!1,this.flash.gate=!1},_resetActive:function(){this.html.active=!1,this.aurora.active=!1,this.flash.active=!1},_escapeHtml:function(a){return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")},_qualifyURL:function(a){var b=document.createElement("div");
return b.innerHTML='<a href="'+this._escapeHtml(a)+'">x</a>',b.firstChild.href},_absoluteMediaUrls:function(b){var c=this;return a.each(b,function(a,d){d&&c.format[a]&&"data:"!==d.substr(0,5)&&(b[a]=c._qualifyURL(d))}),b},addStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.addClass(this.options.stateClass[a])},removeStateClass:function(a){this.ancestorJq.length&&this.ancestorJq.removeClass(this.options.stateClass[a])},setMedia:function(b){var c=this,d=!1,e=this.status.media.poster!==b.poster;this._resetMedia(),this._resetGate(),this._resetActive(),this.androidFix.setMedia=!1,this.androidFix.play=!1,this.androidFix.pause=!1,b=this._absoluteMediaUrls(b),a.each(this.formats,function(e,f){var g="video"===c.format[f].media;return a.each(c.solutions,function(e,h){if(c[h].support[f]&&c._validString(b[f])){var i="html"===h,j="aurora"===h;return g?(i?(c.html.video.gate=!0,c._html_setVideo(b),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show(),c.status.video=!0):(i?(c.html.audio.gate=!0,c._html_setAudio(b),c.html.active=!0,a.jPlayer.platform.android&&(c.androidFix.setMedia=!0)):j?(c.aurora.gate=!0,c._aurora_setAudio(b),c.aurora.active=!0):(c.flash.gate=!0,c._flash_setAudio(b),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=!1),d=!0,!1}}),d?!1:void 0}),d?(this.status.nativeVideoControls&&this.html.video.gate||this._validString(b.poster)&&(e?this.htmlElement.poster.src=b.poster:this.internal.poster.jq.show()),"string"==typeof b.title&&(this.css.jq.title.length&&this.css.jq.title.html(b.title),this.htmlElement.audio&&this.htmlElement.audio.setAttribute("title",b.title),this.htmlElement.video&&this.htmlElement.video.setAttribute("title",b.title)),this.status.srcSet=!0,this.status.media=a.extend({},b),this._updateButtons(!1),this._updateInterface(),this._trigger(a.jPlayer.event.setmedia)):this._error({type:a.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:a.jPlayer.errorMsg.NO_SUPPORT,hint:a.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus(),this._updateButtons(!1),this._updateInterface(),this._seeked(),this.internal.poster.jq.hide(),clearTimeout(this.internal.htmlDlyCmdId),this.html.active?this._html_resetMedia():this.aurora.active?this._aurora_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia(),this.html.active?this._html_clearMedia():this.aurora.active?this._aurora_clearMedia():this.flash.active&&this._flash_clearMedia(),this._resetGate(),this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.aurora.active?this._aurora_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},focus:function(){this.options.keyEnabled&&(a.jPlayer.focus=this)},play:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&!this.status.paused?this.pause(a):(a="number"==typeof a?a:0/0,this.status.srcSet?(this.focus(),this.html.active?this._html_play(a):this.aurora.active?this._aurora_play(a):this.flash.active&&this._flash_play(a)):this._urlNotSetError("play"))},videoPlay:function(){this.play()},pause:function(a){a="number"==typeof a?a:0/0,this.status.srcSet?this.html.active?this._html_pause(a):this.aurora.active?this._aurora_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},tellOthers:function(b,c){var d=this,e="function"==typeof c,f=Array.prototype.slice.call(arguments);"string"==typeof b&&(e&&f.splice(1,1),a.jPlayer.prototype.destroyRemoved(),a.each(this.instances,function(){d.element!==this&&(!e||c.call(this.data("jPlayer"),d))&&this.jPlayer.apply(this,f)}))},pauseOthers:function(a){this.tellOthers("pause",function(){return this.status.srcSet},a)},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.aurora.active?this._aurora_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100),this.status.srcSet?this.html.active?this._html_playHead(a):this.aurora.active?this._aurora_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.mutedWorker(a),this.options.globalVolume&&this.tellOthers("mutedWorker",function(){return this.options.globalVolume},a)},mutedWorker:function(b){this.options.muted=b,this.html.used&&this._html_setProperty("muted",b),this.aurora.used&&this._aurora_mute(b),this.flash.used&&this._flash_mute(b),this.html.video.gate||this.html.audio.gate||(this._updateMute(b),this._updateVolume(this.options.volume),this._trigger(a.jPlayer.event.volumechange))},mute:function(a){var c="object"==typeof a;c&&this.options.useStateClassSkin&&this.options.muted?this._muted(!1):(a=a===b?!0:!!a,this._muted(a))},unmute:function(a){a=a===b?!0:!!a,this._muted(!a)},_updateMute:function(a){a===b&&(a=this.options.muted),a?this.addStateClass("muted"):this.removeStateClass("muted"),this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){this.volumeWorker(a),this.options.globalVolume&&this.tellOthers("volumeWorker",function(){return this.options.globalVolume},a)},volumeWorker:function(b){b=this._limitValue(b,0,1),this.options.volume=b,this.html.used&&this._html_setProperty("volume",b),this.aurora.used&&this._aurora_volume(b),this.flash.used&&this._flash_volume(b),this.html.video.gate||this.html.audio.gate||(this._updateVolume(b),this._trigger(a.jPlayer.event.volumechange))},volumeBar:function(b){if(this.css.jq.volumeBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=c.height()-b.pageY+d.top,h=c.height();this.volume(this.options.verticalVolume?g/h:e/f)}this.options.muted&&this._muted(!1)},_updateVolume:function(a){a===b&&(a=this.options.volume),a=this.options.muted?0:a,this.status.noVolume?(this.addStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.removeStateClass("noVolume"),this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1),this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(b){var c=this;this.options.cssSelectorAncestor=b,this._removeUiClass(),this.ancestorJq=b?a(b):[],b&&1!==this.ancestorJq.length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT}),this._addUiClass(),a.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)}),this._updateInterface(),this._updateButtons(),this._updateAutohide(),this._updateVolume(),this._updateMute()},_cssSelector:function(b,c){var d=this;if("string"==typeof c)if(a.jPlayer.prototype.options.cssSelector[b]){if(this.css.jq[b]&&this.css.jq[b].length&&this.css.jq[b].unbind(".jPlayer"),this.options.cssSelector[b]=c,this.css.cs[b]=this.options.cssSelectorAncestor+" "+c,this.css.jq[b]=c?a(this.css.cs[b]):[],this.css.jq[b].length&&this[b]){var e=function(c){c.preventDefault(),d[b](c),d.options.autoBlur?a(this).blur():a(this).focus()};this.css.jq[b].bind("click.jPlayer",e)}c&&1!==this.css.jq[b].length&&this._warning({type:a.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[b],message:a.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[b].length+" found for "+b+" method.",hint:a.jPlayer.warningHint.CSS_SELECTOR_COUNT})}else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_METHOD,context:b,message:a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:a.jPlayer.warningHint.CSS_SELECTOR_METHOD});else this._warning({type:a.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:a.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:a.jPlayer.warningHint.CSS_SELECTOR_STRING})},duration:function(a){this.options.toggleDuration&&(this.options.captureDuration&&a.stopPropagation(),this._setOption("remainingDuration",!this.options.remainingDuration))},seekBar:function(b){if(this.css.jq.seekBar.length){var c=a(b.currentTarget),d=c.offset(),e=b.pageX-d.left,f=c.width(),g=100*e/f;this.playHead(g)}},playbackRate:function(a){this._setOption("playbackRate",a)},playbackRateBar:function(b){if(this.css.jq.playbackRateBar.length){var c,d,e=a(b.currentTarget),f=e.offset(),g=b.pageX-f.left,h=e.width(),i=e.height()-b.pageY+f.top,j=e.height();c=this.options.verticalPlaybackRate?i/j:g/h,d=c*(this.options.maxPlaybackRate-this.options.minPlaybackRate)+this.options.minPlaybackRate,this.playbackRate(d)}},_updatePlaybackRate:function(){var a=this.options.playbackRate,b=(a-this.options.minPlaybackRate)/(this.options.maxPlaybackRate-this.options.minPlaybackRate);this.status.playbackRateEnabled?(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.show(),this.css.jq.playbackRateBarValue.length&&(this.css.jq.playbackRateBarValue.show(),this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate?"height":"width"](100*b+"%"))):(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.hide(),this.css.jq.playbackRateBarValue.length&&this.css.jq.playbackRateBarValue.hide())},repeat:function(a){var b="object"==typeof a;this._loop(b&&this.options.useStateClassSkin&&this.options.loop?!1:!0)},repeatOff:function(){this._loop(!1)},_loop:function(b){this.options.loop!==b&&(this.options.loop=b,this._updateButtons(),this._trigger(a.jPlayer.event.repeat))},option:function(c,d){var e=c;if(0===arguments.length)return a.extend(!0,{},this.options);if("string"==typeof c){var f=c.split(".");if(d===b){for(var g=a.extend(!0,{},this.options),h=0;h<f.length;h++){if(g[f[h]]===b)return this._warning({type:a.jPlayer.warning.OPTION_KEY,context:c,message:a.jPlayer.warningMsg.OPTION_KEY,hint:a.jPlayer.warningHint.OPTION_KEY}),b;g=g[f[h]]}return g}e={};for(var i=e,j=0;j<f.length;j++)j<f.length-1?(i[f[j]]={},i=i[f[j]]):i[f[j]]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(b,c){var d=this;switch(b){case"volume":this.volume(c);break;case"muted":this._muted(c);break;case"globalVolume":this.options[b]=c;break;case"cssSelectorAncestor":this._cssSelectorAncestor(c);break;case"cssSelector":a.each(c,function(a,b){d._cssSelector(a,b)});break;case"playbackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("playbackRate",c),this._updatePlaybackRate();break;case"defaultPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate),this.html.used&&this._html_setProperty("defaultPlaybackRate",c),this._updatePlaybackRate();break;case"minPlaybackRate":this.options[b]=c=this._limitValue(c,.1,this.options.maxPlaybackRate-.1),this._updatePlaybackRate();break;case"maxPlaybackRate":this.options[b]=c=this._limitValue(c,this.options.minPlaybackRate+.1,16),this._updatePlaybackRate();break;case"fullScreen":if(this.options[b]!==c){var e=a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;(!e||e&&!this.status.waitForPlay)&&(e||(this.options[b]=c),c?this._requestFullscreen():this._exitFullscreen(),e||this._setOption("fullWindow",c))}break;case"fullWindow":this.options[b]!==c&&(this._removeUiClass(),this.options[b]=c,this._refreshSize());break;case"size":this.options.fullWindow||this.options[b].cssClass===c.cssClass||this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"sizeFull":this.options.fullWindow&&this.options[b].cssClass!==c.cssClass&&this._removeUiClass(),this.options[b]=a.extend({},this.options[b],c),this._refreshSize();break;case"autohide":this.options[b]=a.extend({},this.options[b],c),this._updateAutohide();break;case"loop":this._loop(c);break;case"remainingDuration":this.options[b]=c,this._updateInterface();break;case"toggleDuration":this.options[b]=c;break;case"nativeVideoControls":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this._restrictNativeVideoControls(),this._updateNativeVideoControls();break;case"noFullWindow":this.options[b]=a.extend({},this.options[b],c),this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls),this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow),this._restrictNativeVideoControls(),this._updateButtons();break;case"noVolume":this.options[b]=a.extend({},this.options[b],c),this.status.noVolume=this._uaBlocklist(this.options.noVolume),this._updateVolume(),this._updateMute();break;case"emulateHtml":this.options[b]!==c&&(this.options[b]=c,c?this._emulateHtmlBridge():this._destroyHtmlBridge());break;case"timeFormat":this.options[b]=a.extend({},this.options[b],c);break;case"keyEnabled":this.options[b]=c,c||this!==a.jPlayer.focus||(a.jPlayer.focus=null);break;case"keyBindings":this.options[b]=a.extend(!0,{},this.options[b],c);break;case"audioFullScreen":this.options[b]=c;break;case"autoBlur":this.options[b]=c}return this},_refreshSize:function(){this._setSize(),this._addUiClass(),this._updateSize(),this._updateButtons(),this._updateAutohide(),this._trigger(a.jPlayer.event.resize)},_setSize:function(){this.options.fullWindow?(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass),this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&this.flash.active&&this.status.video&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,b="mousemove.jPlayer",c=".jPlayerAutohide",d=b+c,e=function(b){var c,d,e=!1;"undefined"!=typeof a.internal.mouse?(c=a.internal.mouse.x-b.pageX,d=a.internal.mouse.y-b.pageY,e=Math.floor(c)>0||Math.floor(d)>0):e=!0,a.internal.mouse={x:b.pageX,y:b.pageY},e&&a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId),a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),delete this.internal.mouse,this.element.unbind(c),this.css.jq.gui.unbind(c),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullWindow&&this.options.autohide.full||!this.options.fullWindow&&this.options.autohide.restored?(this.element.bind(d,e),this.css.jq.gui.bind(d,e),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(a){var b="object"==typeof a;b&&this.options.useStateClassSkin&&this.options.fullScreen?this._setOption("fullScreen",!1):this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_fullscreenAddEventListeners:function(){var b=this,c=a.jPlayer.nativeFeatures.fullscreen;c.api.fullscreenEnabled&&c.event.fullscreenchange&&("function"!=typeof this.internal.fullscreenchangeHandler&&(this.internal.fullscreenchangeHandler=function(){b._fullscreenchange()}),document.addEventListener(c.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1))},_fullscreenRemoveEventListeners:function(){var b=a.jPlayer.nativeFeatures.fullscreen;this.internal.fullscreenchangeHandler&&document.removeEventListener(b.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1)},_fullscreenchange:function(){this.options.fullScreen&&!a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()&&this._setOption("fullScreen",!1)},_requestFullscreen:function(){var b=this.ancestorJq.length?this.ancestorJq[0]:this.element[0],c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.requestFullscreen(b)},_exitFullscreen:function(){var b,c=a.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(b=this.htmlElement.video),c.api.fullscreenEnabled&&c.api.exitFullscreen(b)},_html_initMedia:function(b){var c=a(this.htmlElement.media).empty();a.each(b.track||[],function(a,b){var d=document.createElement("track");d.setAttribute("kind",b.kind?b.kind:""),d.setAttribute("src",b.src?b.src:""),d.setAttribute("srclang",b.srclang?b.srclang:""),d.setAttribute("label",b.label?b.label:""),b.def&&d.setAttribute("default",b.def),c.append(d)}),this.htmlElement.media.src=this.status.src,"none"!==this.options.preload&&this._html_load(),this._trigger(a.jPlayer.event.timeupdate)},_html_setFormat:function(b){var c=this;a.each(this.formats,function(a,d){return c.html.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0})},_html_setAudio:function(a){this._html_setFormat(a),this.htmlElement.media=this.htmlElement.audio,this._html_initMedia(a)},_html_setVideo:function(a){this._html_setFormat(a),this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:""),this.htmlElement.media=this.htmlElement.video,this._html_initMedia(a)},_html_resetMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id!==this.internal.video.id||this.status.nativeVideoControls||this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="about:blank",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load()),clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.pause=!1,this._html_load(),this.androidFix.setMedia)this.androidFix.play=!0,this.androidFix.time=a;else if(isNaN(a))c.play();else{this.internal.cmdsIgnored&&c.play();try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a,c.play()}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},250))}}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this,c=this.htmlElement.media;if(this.androidFix.play=!1,a>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId),c.pause(),this.androidFix.setMedia)this.androidFix.pause=!0,this.androidFix.time=a;else if(!isNaN(a))try{if(c.seekable&&!("object"==typeof c.seekable&&c.seekable.length>0))throw 1;c.currentTime=a}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},250))}a>0&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this,c=this.htmlElement.media;this._html_load();try{if("object"==typeof c.seekable&&c.seekable.length>0)c.currentTime=a*c.seekable.end(c.seekable.length-1)/100;else{if(!(c.duration>0)||isNaN(c.duration))throw"e";c.currentTime=a*c.duration/100}}catch(d){return void(this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},250))}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_setProperty:function(a,b){this.html.audio.available&&(this.htmlElement.audio[a]=b),this.html.video.available&&(this.htmlElement.video[a]=b)},_aurora_setAudio:function(b){var c=this;a.each(this.formats,function(a,d){return c.aurora.support[d]&&b[d]?(c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1):void 0}),this.aurora.player=new AV.Player.fromURL(this.status.src),this._addAuroraEventListeners(this.aurora.player,this.aurora),"auto"===this.options.preload&&(this._aurora_load(),this.status.waitForLoad=!1)},_aurora_resetMedia:function(){this.aurora.player&&this.aurora.player.stop()},_aurora_clearMedia:function(){},_aurora_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.aurora.player.preload())},_aurora_play:function(b){this.status.waitForLoad||isNaN(b)||this.aurora.player.seek(b),this.aurora.player.playing||this.aurora.player.play(),this.status.waitForLoad=!1,this._aurora_checkWaitForPlay(),this._updateButtons(!0),this._trigger(a.jPlayer.event.play)},_aurora_pause:function(b){isNaN(b)||this.aurora.player.seek(1e3*b),this.aurora.player.pause(),b>0&&this._aurora_checkWaitForPlay(),this._updateButtons(!1),this._trigger(a.jPlayer.event.pause)},_aurora_playHead:function(a){this.aurora.player.duration>0&&this.aurora.player.seek(a*this.aurora.player.duration/100),this.status.waitForLoad||this._aurora_checkWaitForPlay()},_aurora_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1)},_aurora_volume:function(a){this.aurora.player.volume=100*a},_aurora_mute:function(a){a?(this.aurora.properties.lastvolume=this.aurora.player.volume,this.aurora.player.volume=0):this.aurora.player.volume=this.aurora.properties.lastvolume,this.aurora.properties.muted=a},_flash_setAudio:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4a":case"fla":c._getMovie().fl_setAudio_m4a(b[d]);break;case"mp3":c._getMovie().fl_setAudio_mp3(b[d]);break;case"rtmpa":c._getMovie().fl_setAudio_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(b){var c=this;try{a.each(this.formats,function(a,d){if(c.flash.support[d]&&b[d]){switch(d){case"m4v":case"flv":c._getMovie().fl_setVideo_m4v(b[d]);break;case"rtmpv":c._getMovie().fl_setVideo_rtmp(b[d])}return c.status.src=b[d],c.status.format[d]=!0,c.status.formatType=d,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"}),this._flash_pause(0/0)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1,this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}a>0&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_getFlashPluginVersion:function(){var a,b=0;if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var c=a.GetVariable("$version");c&&(c=c.split(" ")[1].split(","),b=parseInt(c[0],10)+"."+parseInt(c[1],10))}}catch(d){}else navigator.plugins&&navigator.mimeTypes.length>0&&(a=navigator.plugins["Shockwave Flash"],a&&(b=navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")));return 1*b},_checkForFlash:function(a){var b=!1;return this._getFlashPluginVersion()>=a&&(b=!0),b},_validString:function(a){return a&&"string"==typeof a},_limitValue:function(a,b,c){return b>a?b:a>c?c:a},_urlNotSetError:function(b){this._error({type:a.jPlayer.error.URL_NOT_SET,context:b,message:a.jPlayer.errorMsg.URL_NOT_SET,hint:a.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(b){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH",this._error({type:a.jPlayer.error[c],context:this.internal.flash.swf,message:a.jPlayer.errorMsg[c]+b.message,hint:a.jPlayer.errorHint[c]}),this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(b){this._trigger(a.jPlayer.event.error,b),this.options.errorAlerts&&this._alert("Error!"+(b.message?"\n"+b.message:"")+(b.hint?"\n"+b.hint:"")+"\nContext: "+b.context)},_warning:function(c){this._trigger(a.jPlayer.event.warning,b,c),this.options.warningAlerts&&this._alert("Warning!"+(c.message?"\n"+c.message:"")+(c.hint?"\n"+c.hint:"")+"\nContext: "+c.context)},_alert:function(a){var b="jPlayer "+this.version.script+":id='"+this.internal.self.id+"':"+a;this.options.consoleAlerts?window.console&&window.console.log&&window.console.log(b):alert(b)},_emulateHtmlBridge:function(){var b=this;a.each(a.jPlayer.emulateMethods.split(/\s+/g),function(a,c){b.internal.domNode[c]=function(a){b[c](a)}}),a.each(a.jPlayer.event,function(c,d){var e=!0;a.each(a.jPlayer.reservedEvent.split(/\s+/g),function(a,b){return b===c?(e=!1,!1):void 0}),e&&b.element.bind(d+".jPlayer.jPlayerHtml",function(){b._emulateHtmlUpdate();var a=document.createEvent("Event");a.initEvent(c,!1,!0),b.internal.domNode.dispatchEvent(a)})})},_emulateHtmlUpdate:function(){var b=this;a.each(a.jPlayer.emulateStatus.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.status[c]}),a.each(a.jPlayer.emulateOptions.split(/\s+/g),function(a,c){b.internal.domNode[c]=b.options[c]})},_destroyHtmlBridge:function(){var b=this;this.element.unbind(".jPlayerHtml");var c=a.jPlayer.emulateMethods+" "+a.jPlayer.emulateStatus+" "+a.jPlayer.emulateOptions;a.each(c.split(/\s+/g),function(a,c){delete b.internal.domNode[c]})}},a.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"},a.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+a.jPlayer.prototype.version.script+" needs Jplayer.swf version "+a.jPlayer.prototype.version.needFlash+" but found "},a.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."},a.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"},a.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."},a.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}});
jQuery(document).ready(function($){
"use strict";
var deviceAgent=navigator.userAgent.toLowerCase();
var isIOS=deviceAgent.match(/(iphone|ipod|ipad)/);
var ua=navigator.userAgent.toLowerCase();
var isAndroid=ua.indexOf("android") > -1;
var $isotopeContainer=$('.detect-isotope #gridblock-container,.post-type-archive-portfolio #gridblock-container,.post-type-archive-events #gridblock-container,.tax-types #gridblock-container');
var mtheme_vars=[];
var lightgalleryTransition=lightbox_transition;
var lightgalleryThumbnails=lightbox_thumbnails;
if(lightgalleryThumbnails=='false'){
lightgalleryThumbnails=false;
}else{
lightgalleryThumbnails=true;
}
var stickyNavTop=550;
var stickyOutofSight=300;
var menuHeight=$('.stickymenu-zone').outerHeight();
var stickyNav=function(){
var scrollTop=$(window).scrollTop();
if(scrollTop > stickyNavTop){
$('body').addClass('stickymenu-active');
if(! $('body').hasClass('header-type-overlay')&&! $('body').hasClass('header-type-inverse-overlay')){
$('#home').css('margin-top',menuHeight);
}}
if(scrollTop > stickyOutofSight){
$('body').addClass('menu-outofsight');
}else{
$('body').removeClass('menu-outofsight');
$('body').removeClass('stickymenu-active');
$('#home').css('margin-top','0');
}};
if(! $('.responsive-menu-wrap').is(':visible')){
if($('body').hasClass('stickymenu-enabled-sitewide')){
stickyNav();
$(window).scroll(function(){
stickyNav();
});
}}
$(document).on('lazybeforeunveil lazyloaded', function(e){
if(e.type==='lazyloaded'){
$(e.target).parents().closest('.gridblock-element').removeClass('grid-element-lazy-processing').addClass('grid-element-lazy-complete');
}else{
$(e.target).parents().closest('.gridblock-element').addClass('grid-element-lazy-processing');
}});
function onepageNavigation(){
var lastId,
topMenu=$('.homemenu .sf-menu'),
topMenuHeight=topMenu.outerHeight()+1,
menuItems=topMenu.find('a'),
scrollItems=menuItems.map(function(){
var indexItm=$(this).attr('href').indexOf('#');
if(indexItm > 0){
var str=$(this).attr('href').substring(indexItm);
var item=$(str);
if(item.length){ return item; }}
});
var thebody=$('html, body');
$('.responsive-mobile-menu .menu-item a[href*=\\#]').click(function(){
var onepage_url=$(this).attr('href');
var onepage_hash='#' + onepage_url.substring(onepage_url.indexOf("#")+1);
console.log(onepage_hash);
thebody.animate({
scrollTop: $(onepage_hash).offset().top
},{
duration: 1700,
easing: "easeInOutExpo"
});
if($('body').hasClass('menu-is-onscreen')){
MobileMenuAction('resized');
}
return false;
});
$(window).scroll(function(){
var fromTop=$(this).scrollTop()+topMenuHeight;
var cur=scrollItems.map(function(){
if($(this).offset().top < fromTop)
return this;
});
cur=cur[cur.length-1];
var id=cur&&cur.length ? cur[0].id:'';
if(lastId!==id){
lastId=id;
menuItems
.parent().removeClass('active')
.end().filter('[href="#'+id+'"]').parent().addClass('active');
}});
}
onepageNavigation();
function centerLogo(){
var countMenuParents=$(".homemenu ul.sf-menu > li").length;
if(countMenuParents!=0){
if(countMenuParents>1){
var centerChild=Math.floor(countMenuParents / 2);
}else{
centerChild=1;
}
var center_logo=$('body');
if(center_logo.length){
$(".header-site-title-section").detach().insertAfter('.homemenu ul.sf-menu > li:nth-child('+centerChild+')');
$(".header-site-title-section").wrap('<li id="header-logo"></li>');
$(".header-logo-section").detach().insertAfter('.homemenu ul.sf-menu > li:nth-child('+centerChild+')');
$(".header-logo-section").wrap('<li id="header-logo"></li>');
}}
}
if($('body').hasClass('split-menu')){
centerLogo();
}
if($('body').hasClass('page-is-fullscreen')){
$('body').addClass('spinning-done');
if($('body').hasClass('page-is-fullscreen')){
$('body').addClass('secondary-spinning');
}}else{
$('.loading-spinner-detect').velocity('fadeOut', {
duration: 350,
complete: function(){
$('body').addClass('spinning-done');
}});
}
function stickymenu(){
var didScroll;
var lastScrollTop=0;
var delta=100;
var stickymenuzone=$('.stickymenu-zone');
var stickymenuHide=600;
var navbarHeight=0;
$(window).scroll(function(event){
didScroll=true;
});
setInterval(function(){
if(didScroll){
hasScrolled();
didScroll=false;
}}, 250);
function hasScrolled(){
var st=$('html').scrollTop();
if(Math.abs(lastScrollTop - st) <=delta)
return;
console.log(st);
if(st > lastScrollTop&&st > navbarHeight){
stickymenuzone.removeClass('stickymenu-active-show').addClass('stickymenu-active-hide');
}else{
if(st > stickymenuHide){
if(st + $(window).height() < $(document).height()){
stickymenuzone.removeClass('stickymenu-active-hide').addClass('stickymenu-active-show');
}}else{
stickymenuzone.removeClass('stickymenu-active-show').addClass('stickymenu-active-hide');
}}
lastScrollTop=st;
}}
function lightgallery_detect_activate(thumbnailSelector){
var gridblock_lightbox=$('.lightgallery-detect-container,.post-format-media,.sidebar-widget,.swiper-wrapper');
if($.fn.lightGallery){
gridblock_lightbox.lightGallery({
mode: lightgalleryTransition,
selector: thumbnailSelector,
addClass: 'mtheme-lightbox',
preload: 3,
hash: false,
backdropDuration: 400,
speed: 1000,
startClass: 'lg-start-fade',
thumbMargin: 1,
thumbWidth: 50,
thumbContHeight: 65,
share: false,
thumbnail: lightgalleryThumbnails,
exThumbImage: 'data-exthumbimage'
});
gridblock_lightbox.on('onBeforeSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gridblock_lightbox.on('onBeforeNextSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gridblock_lightbox.on('onAfterSlide.lg',function(){
$('body .lg-sub-html').stop().fadeIn();
});
if($('body').hasClass('gutenberg-lightbox-enabled')){
var gutenberg_lightbox=$('.wp-block-image');
gutenberg_lightbox.find('a[href*=".png"]').addClass('gutenberg-media-lightbox');
gutenberg_lightbox.find('a[href*=".jpg"]').addClass('gutenberg-media-lightbox');
gutenberg_lightbox.find('a[href*=".gif"]').addClass('gutenberg-media-lightbox');
gutenberg_lightbox.lightGallery({
mode: lightgalleryTransition,
selector: '.gutenberg-media-lightbox',
addClass: 'mtheme-lightbox',
preload: 3,
hash: false,
backdropDuration: 400,
speed: 1000,
startClass: 'lg-start-fade',
thumbMargin: 1,
thumbWidth: 50,
thumbContHeight: 65,
share: false,
thumbnail: false
});
gutenberg_lightbox.on('onBeforeSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gutenberg_lightbox.on('onBeforeNextSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gutenberg_lightbox.on('onAfterSlide.lg',function(){
$('body .lg-sub-html').stop().fadeIn();
});
var gutenberg_gallery_lightbox=$('.wp-block-gallery');
gutenberg_gallery_lightbox.find('a[href*=".png"]').addClass('gutenberg-gallery-lightbox');
gutenberg_gallery_lightbox.find('a[href*=".jpg"]').addClass('gutenberg-gallery-lightbox');
gutenberg_gallery_lightbox.find('a[href*=".gif"]').addClass('gutenberg-gallery-lightbox');
gutenberg_gallery_lightbox.lightGallery({
mode: lightgalleryTransition,
selector: '.gutenberg-gallery-lightbox',
addClass: 'mtheme-lightbox',
preload: 3,
hash: false,
backdropDuration: 400,
speed: 1000,
startClass: 'lg-start-fade',
thumbMargin: 1,
thumbWidth: 50,
thumbContHeight: 65,
share: false,
thumbnail: lightgalleryThumbnails
});
gutenberg_gallery_lightbox.on('onBeforeSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gutenberg_gallery_lightbox.on('onBeforeNextSlide.lg',function(){
$('body .lg-sub-html').stop().fadeOut();
});
gutenberg_gallery_lightbox.on('onAfterSlide.lg',function(){
$('body .lg-sub-html').stop().fadeIn();
});
}}
}
lightgallery_detect_activate('.lightbox-active');
function isMobileMenuActive(){
if($('.responsive-menu-wrap').is(':visible')){
$('body').addClass('mobile-mode-active');
}else{
$('body').removeClass('mobile-mode-active');
if($('body').hasClass('menu-is-onscreen')){
MobileMenuAction('resized');
SimpleMenuAction('resized');
}}
}
isMobileMenuActive();
$('.preloader-cover-logo').velocity('transition.slideUpOut', {
duration: 1500
});
$('body').addClass('pace-done');
if($('body').hasClass('rightclick-block')){
$(window).on('contextmenu', function(b){
if(3===b.which){
showCopyright();
return false;
}});
}
if($.fn.tilt){
$('.has-effect-tilt .gridblock-grid-element').tilt({
maxTilt: 20,
perspective: 550,
easing: 'cubic-bezier(.03,.98,.52,.99)',
speed: 800,
glare: false,
scale: 1.01
});
}
function pageOwlcarouselsInit(){
if($('.post-format-media .owl-carousel-detect').length){
$('.post-format-media .owl-carousel-detect').each(function(){
var thisID=$(this).data('id');
var thisAutoplay=$(this).data('autoplay');
var thisLazyload=$(this).data('lazyload');
var thisSmartspeed=$(this).data('smartspeed');
var thisType=$(this).data('type');
var thisAutoplayTimeout=$(this).data('autoplaytimeout');
thisAutoplay=typeof thisAutoplay!=='undefined' ? thisAutoplay:'false';
thisLazyload=typeof thisLazyload!=='undefined' ? thisLazyload:'false';
thisSmartspeed=typeof thisSmartspeed!=='undefined' ? thisSmartspeed:'1000';
thisAutoplayTimeout=typeof thisAutoplayTimeout!=='undefined' ? thisAutoplayTimeout:'5000';
thisType=typeof thisType!=='undefined' ? thisType:'slideshow';
thisID=typeof thisID!=='undefined' ? thisID:'false';
if(thisType=="testimony"){
$('#'+thisID).owlCarousel({
items: 1,
singleItem:true,
scrollPerPage:false,
pagination: true,
autoplay: thisAutoplay,
autoplayTimeout: thisAutoplayTimeout,
autoplayHoverPause:true,
autoHeight:true,
animateOut: "animation-action fadeOut",
animateIn: "animation-action fadeIn",
nav:false,
loop: true
});
}
if(thisType=="centercarousel"){
$('#'+thisID).owlCarousel({
responsiveClass:true,
responsive:{
0:{
items:1,
nav:true
},
600:{
items:1,
nav:true
},
1000:{
items:1,
nav:true
},
1350:{
items:2,
nav:true
}},
center: true,
items:2,
loop:true,
margin:10,
stagePadding: 10,
autoplay: thisAutoplay,
autoplayTimeout: thisAutoplayTimeout,
lazyLoad: thisLazyload,
nav: true,
autoHeight:true,
navText:["",""],
singleItem:true
});
}
if(thisType=="flatcarousel"){
$('#'+thisID).owlCarousel({
responsiveClass:true,
responsive:{
0:{
items:1,
nav:true
},
600:{
items:1,
nav:true
},
1000:{
items:1,
nav:true
},
1350:{
items:2,
nav:true
}},
center: true,
items:2,
loop:true,
margin:10,
stagePadding: 10,
smartSpeed: thisSmartspeed,
autoplay: thisAutoplay,
autoplayTimeout: thisAutoplayTimeout,
lazyLoad: thisLazyload,
nav: true,
autoHeight:true,
navText:["",""],
singleItem:true
});
}
if(thisType!=="centercarousel"||thisType!=="flatcarousel"||thisType!=="testimony"){
$('#'+thisID).owlCarousel({
items:1,
loop:true,
autoplay: thisAutoplay,
smartSpeed: thisSmartspeed,
autoplayTimeout: thisAutoplayTimeout,
lazyLoad: thisLazyload,
nav: true,
autoHeight: true,
navText:["",""],
singleItem:true
});
}});
}}
if($.fn.imagesLoaded){
$('.post-format-media .owl-carousel-detect').imagesLoaded(function(){
pageOwlcarouselsInit();
});
$('.recently-owl-works-detect').imagesLoaded(function(){
if($('.recently-owl-works-detect').length){
$('.recently-owl-works-detect').each(function(){
var thisID=$(this).data('id');
var thisAutoplay=$(this).data('autoplay');
var thisLazyload=$(this).data('lazyload');
var thisPagination=$(this).data('pagination');
var thisColumns=$(this).data('columns');
var thisType=$(this).data('type');
var thisAutoplayTimeout=$(this).data('autoplaytimeout');
thisAutoplay=typeof thisAutoplay!=='undefined' ? thisAutoplay:'false';
thisAutoplayTimeout=typeof thisAutoplayTimeout!=='undefined' ? thisAutoplayTimeout:'10000';
thisLazyload=typeof thisLazyload!=='undefined' ? thisLazyload:'false';
thisPagination=typeof thisPagination!=='undefined' ? thisPagination:'false';
thisColumns=typeof thisColumns!=='undefined' ? thisColumns:'4';
thisID=typeof thisID!=='undefined' ? thisID:'false';
$('#'+thisID).owlCarousel({
responsiveClass:true,
responsive:{
0:{
items:1,
nav:true
},
480:{
items:2,
nav:true
},
800:{
items: thisColumns,
nav:true
}},
autoplay: thisAutoplay,
autoplayTimeout: thisAutoplayTimeout,
autoplayHoverPause:true,
lazyLoad: thisLazyload,
dots: thisPagination,
items: thisColumns,
nav:true,
navText:["",""],
loop: false
});
});
}});
}
function html5videoautoplay(){
if($('#videocontainer').length){
$('#videocontainer')[0].onplay=function (){
$('.fullscreen-video-play').hide();
};
$(document).on('click', '.fullscreen-video-play', function (e){
var video=$('#videocontainer').get(0);
if(video.paused===false){
video.pause();
video.muted=false;
}else{
video.play();
video.muted=false;
}
return false;
});
$(document).on('click', '.fullscreen-video-audio', function (e){
var video=$('#videocontainer').get(0);
if(video.muted===false){
video.muted=true;
}else{
video.muted=false;
}
return false;
});
$(document).on('click', '#videocontainer', function (e){
var video=$(this).get(0);
if(video.paused===false){
video.pause();
}else{
video.play();
}
return false;
});
}}
html5videoautoplay();
displayspecificBackgrounds();
function displayspecificBackgrounds(){
$.fn.bgLoaded=function(custom){
var self=this;
var defaults={
afterLoaded:function(){
this.addClass('bg-loaded');
}};
var settings=$.extend({}, defaults, custom);
self.each(function(){
var $this=$(this),
bgImgs=$this.css('background-image').split(', ');
$this.data('loaded-count',0);
$.each(bgImgs, function(key, value){
var img=value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
if(img!=='none'){
$('<img/>').attr('src', img).on('load', function(){
$(this).remove();
$this.data('loaded-count', $this.data('loaded-count') +1);
if($this.data('loaded-count') >=bgImgs.length){
settings.afterLoaded.call($this);
}});
}});
});
};
$('.vertical-parallax-image').bgLoaded();
$('.column-has-backround-image').bgLoaded();
$('.site-back-cover').bgLoaded();
$('#heroimage-background').bgLoaded({
afterLoaded:function(){
this.parent('#heroimage').addClass('bg-loaded');
}});
$('.photocard-image-container').bgLoaded();
$('.photocard-image-container').bgLoaded({
afterLoaded:function(){
this.parent('.photocard-image-wrap').addClass('bg-loaded');
}});
$('.photocard-wrap-type-two').bgLoaded({
afterLoaded:function(){
this.parent('.photocard-image-two-wrap').addClass('bg-loaded');
}});
}
function fullscreenswiperSlides(){
if(typeof Swiper!='undefined'){
if($('.fullscreen-swiper-container').length){
var autoplaydata=[];
var widescreenswiper_columns=3;
var mediumscreenswiper_columns=2;
var swiperID='#' + $('.fullscreen-swiper-container').data('id');
var columns=$('.fullscreen-swiper-container').data('columns');
var getautoplay=$('.fullscreen-swiper-container').data('autoplay');
console.log(columns);
columns=typeof columns!=='undefined' ? columns:'4';
getautoplay=typeof getautoplay!=='undefined' ? getautoplay:'5000';
if(getautoplay=='0'){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
}
if(columns=='1'){
widescreenswiper_columns=1;
mediumscreenswiper_columns=1;
}
if(columns=='2'){
widescreenswiper_columns=2;
mediumscreenswiper_columns=2;
}
if(columns=='3'){
widescreenswiper_columns=3;
mediumscreenswiper_columns=2;
}
if(columns=='4'){
widescreenswiper_columns=3;
mediumscreenswiper_columns=2;
}
var swiper=new Swiper(swiperID, {
pagination: {
el: '.swiper-pagination',
type: 'bullets',
clickable: true,
},
paginationClickable: true,
disableOnInteraction: true,
loop: false,
autoplay: autoplaydata,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
slidesPerView: columns,
spaceBetween: 0,
breakpoints: {
1300: {
slidesPerView: widescreenswiper_columns,
spaceBetween: 0
},
1024: {
slidesPerView: mediumscreenswiper_columns,
spaceBetween: 0
},
768: {
slidesPerView: mediumscreenswiper_columns,
spaceBetween: 0
},
640: {
slidesPerView: 1,
spaceBetween: 0
},
320: {
slidesPerView: 1,
spaceBetween: 0
}}
});
}}
}
fullscreenswiperSlides();
function mtheme_findaccordions(){
if($('.mtheme-accordion-detect').length){
$('.mtheme-accordion-detect').each(function(){
var accordionID=$(this).data('accordionid');
var accordionActive=$(this).data('activetab');
accordionActive=typeof accordionActive!=='undefined' ? accordionActive:'-1';
if(accordionActive=='-1'){
accordionActive='false';
}
$('#' + accordionID).accordion({
active: accordionActive,
heightStyle: 'content',
animate: {
duration: 300,
easing: 'easeInExpo'
}});
});
}}
mtheme_findaccordions();
if($('body').hasClass('fullscreen-particles')){
(function(){
var lastTime=0;
var vendors=['ms', 'moz', 'webkit', 'o'];
for(var x=0; x < vendors.length&&!window.requestAnimationFrame; ++x){
window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];
window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];
}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback, element){
var currTime=new Date().getTime();
var timeToCall=Math.max(0, 16 -(currTime - lastTime));
var id=window.setTimeout(function(){ callback(currTime + timeToCall); },
timeToCall);
lastTime=currTime + timeToCall;
return id;
};
if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){
clearTimeout(id);
};}());
var update;
update=function(){
requestAnimationFrame(update);
};
requestAnimationFrame(update);
}
function animatedsvgs(){
var svgiconsToAnimate=[];
if($('.has-svg-animated-icon').length){
$('.has-svg-animated-icon:not(.icon-animation-done)').each(function(){
var thatsvg=$(this);
var animatedsvgID=thatsvg.data('id');
var animatedsvgICON=thatsvg.data('icon');
if(animatedsvgICON!==''){
svgiconsToAnimate[animatedsvgID]=new Vivus(
animatedsvgID, {
type: 'delayed',
duration: 200,
file: animatedsvgICON,
onReady: function (vivusObj){
var animatedsvgColor=thatsvg.data('iconcolor');
$('#'+animatedsvgID).addClass('icon-animation-ready');
$(thatsvg).find('svg path').css('stroke',animatedsvgColor);
if(isIOS||isAndroid){
svgiconsToAnimate[animatedsvgID].reset().finish();
}}
});
svgiconsToAnimate[animatedsvgID].play(function(){
$('#'+animatedsvgID).removeClass('icon-animation-ready').addClass('icon-animation-done');
});
}});
}}
animatedsvgs();
$('.single-image-block').each(function(){
var singleImage=$(this);
singleImage.imagesLoaded(function(){
singleImage.addClass('single-image-loaded');
});
});
$('.social-sharing-toggle,.mobile-sharing-toggle').on('click', function(){
$('body').addClass('social-sharing-on');
});
$("#social-modal").on('click', function(){
$('body').removeClass('social-sharing-on');
});
function fullscreenYoutube(){
if($.fn.tubular){
if($('.youtube-fullscreen-player').length){
var youtubeID=$('#backgroundvideo').data('id');
var options={ videoId: youtubeID, wrapperZIndex: -1, start: 0, mute: false, repeat: true, ratio: 16/9 };
$('#backgroundvideo').tubular(options);
}}
}
fullscreenYoutube();
function displayWooProducts(){
$.Velocity.RegisterEffect('woofadeinsteps', {
calls: [
[ { opacity: [ 1, 0 ] } ]
]
});
$('.woocommerce .products li').velocity('woofadeinsteps', { stagger: 100 });
}
displayWooProducts();
function showCopyright(){
$('#dimmer').fadeIn('normal' , function(){
$('body').addClass('dimmer-displayed');
});
$('#dimmer').on('click' , function(){
$(this).fadeOut('normal' , function(){
$('body').removeClass('dimmer-displayed');
});
});
}
$('body #static_slidecaption').addClass('display-content');
if(isIOS||isAndroid){
}else{
if($.fn.flatpickr){
$('.datepicker').flatpickr({
dateFormat: 'm/d/Y',
});
$('.contact-datepicker').flatpickr({
dateFormat: 'Y-m-d',
});
}}
if($.fn.chosen){
$('.chosen-select').chosen();
}
if($('#toggle-menu').length){
$('#toggle-menu').on('click', function(){
$('#toggle-menu').toggleClass('toggle-menu-open');
$('body').toggleClass('minimal-menu-fadein sticky-menu-off');
});
}
function MobileMenuReverse(){
$('.mtree .display-menu-item-image').stop(true,true).velocity('reverse');
$('ul.mtree > li').stop(true,true).velocity('reverse');
}
if($('#mobile-toggle-menu').length){
$('#mobile-toggle-menu').on('click', function(){
$('body').removeClass('cart-on');
if($('body').hasClass('menu-is-onscreen')){
if(! $('body').hasClass('menu-is-closing')){
MobileMenuAction('close');
}}else{
if(!$('body').hasClass('menu-is-opening')){
MobileMenuAction('open');
}}
});
$(".responsive-menu-overlay").on('click', function(){
MobileMenuAction('close');
MobileMenuReverse();
});
}
function MobileMenuAction(action){
if(action=="resized"){
$('#mobile-toggle-menu').removeClass('mobile-toggle-menu-open');
$('body').removeClass('body-dashboard-push-left');
$('.responsive-mobile-menu').removeClass('menu-push-onscreen');
$('body').removeClass('menu-is-onscreen');
MobileMenuReverse();
}else{
$('#mobile-toggle-menu').toggleClass('mobile-toggle-menu-open');
$('body').toggleClass('body-dashboard-push-left');
}
if(action=='close'){
$('body').addClass('menu-is-closing');
$('.dashboard-columns').stop(true,true).velocity('transition.slideUpOut', {
stagger: 120,
duration: 800,
complete: function(){
$('.responsive-mobile-menu').toggleClass('menu-push-onscreen');
$('body').toggleClass('menu-is-onscreen');
MobileMenuReverse();
$('body').removeClass('menu-is-closing');
}});
}
if(action=='open'){
$('body').addClass('menu-is-opening');
$('.responsive-mobile-menu').stop(true,true).velocity('fadeIn', {
complete: function(){
$('.responsive-mobile-menu').toggleClass('menu-push-onscreen');
$('body').toggleClass('menu-is-onscreen');
$('.dashboard-columns').stop(true,true).velocity('transition.slideUpIn', {
stagger: 120,
duration: 800,
complete: function(){
$('.dashboard-columns').find('.lazyload-after').addClass('lazyload');
}});
animateDisplayMenuItems();
$('body').removeClass('menu-is-opening');
}});
}}
function animateDisplayMenuItems(){
$.Velocity.RegisterEffect('menuParentItems', {
calls: [
[ { opacity: [ 1, 0 ] , bottom: [ 0, -5 ] } ]
]
});
$('.responsive-mobile-menu ul.mtree > li').css({'opacity':0 , 'bottom': -5}).stop(true,true).velocity('menuParentItems', {
stagger: 100,
complete: function(){
$(this).addClass('menu-item-is-visible');
}});
}
function SimpleMenuAction(action){
if(action=='resized'){
$('#minimal-toggle-menu').removeClass('mobile-toggle-menu-open');
$('body').removeClass('body-dashboard-push-left');
$('.simple-menu').removeClass('menu-push-onscreen');
$('body').removeClass('menu-is-onscreen');
}else{
$('#minimal-toggle-menu').toggleClass('mobile-toggle-menu-open');
$('body').toggleClass('body-dashboard-push-left');
}
if(action=='open'){
$('.simple-menu').fadeOut('normal', function(){
$('.minimal-menu-overlay').fadeOut();
$('.simple-menu').toggleClass('menu-push-onscreen');
$('body').toggleClass('menu-is-onscreen');
});
}
if(action=='close'){
$('.simple-menu').fadeIn('normal', function(){
$('.minimal-menu-overlay').fadeIn();
$('.simple-menu').toggleClass('menu-push-onscreen');
$('body').toggleClass('menu-is-onscreen');
});
}}
function SidebarMenuAction(action){
$('#sidebarinfo-toggle-menu').toggleClass('sidebar-toggle-menu-open');
$('body').toggleClass('body-dashboard-push-left');
if(action=='close'){
$('.dashboard-columns').velocity('transition.slideUpOut', {
stagger: 120,
display: "flex",
duration: 800
});
$('.sidebarinfo-menu').velocity('fadeOut', {
duration: 800,
complete: function(){
$('.sidebarinfo-menu').toggleClass('sidebar-push-onscreen');
$('body').toggleClass('sidebar-is-onscreen');
}});
}
if(action=='open'){
$('.sidebarinfo-menu').toggleClass('sidebar-push-onscreen');
$('body').toggleClass('sidebar-is-onscreen');
$('.dashboard-columns').find('.lazyload-after').addClass('lazyload');
$('.sidebarinfo-menu').velocity('fadeIn', {
complete: function(){
$('.dashboard-columns').velocity('transition.fadeIn', {
stagger: 120,
display: "flex",
duration: 800,
complete: function(){}});
}});
}}
if($('#minimal-toggle-menu').length){
$('#minimal-toggle-menu').on('click', function(){
if($('body').hasClass('menu-push-onscreen')){
SimpleMenuAction('open');
}else{
SimpleMenuAction('close');
}});
$('.minimal-menu-overlay').on('click', function(){
SimpleMenuAction('close');
});
}
if($('#sidebarinfo-toggle-menu').length){
$('#sidebarinfo-toggle-menu').on('click', function(){
if($('body').hasClass('sidebar-is-onscreen')){
SidebarMenuAction('close');
}else{
SidebarMenuAction('open');
}});
$('.sidebar-menu-overlay').on('click', function(){
SidebarMenuAction('close');
});
}
$(window).resize(function(){
$('body').removeClass('cart-on');
isMobileMenuActive();
});
function fotoramaResizer(){
if($.fn.fotorama){
var fotorama_window_width=$(window).width();
if($('body').hasClass('menu-is-vertical')){
if(fotorama_window_width < 1025){
$('#fotorama-container-wrap').addClass('fotorama-fullwidth');
}else{
$('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
}}
var fotorama_width=fotorama_window_width;
var fotorama_header_height=0;
fotorama_header_height=$('.outer-wrap').outerHeight();
if($('body').hasClass('top-header-present')){
fotorama_header_height=fotorama_header_height + 35;
}
if($('body').hasClass('admin-bar')){
fotorama_header_height=fotorama_header_height + 32;
}
if($('body').hasClass('compact-menu')){
fotorama_header_height=$('.outer-wrap').outerHeight();
}
var fotorama_footer_height=$('.fullscreen-footer-wrap').outerHeight();
var fotorama_outer=fotorama_header_height + fotorama_footer_height;
var fotorama_height=$(window).height() - fotorama_outer;
if($('body').hasClass('fotorama-style-contain')){
if($('body').hasClass('boxed-site-layout')){
fotorama_width=fotorama_window_width - 100;
$('#fotorama-container-wrap').css('left', '50px');
}
if(fotorama_window_width < 1025){
fotorama_header_height=$('.mobile-menu-toggle').outerHeight();
fotorama_outer=fotorama_header_height + fotorama_footer_height;
fotorama_height=$(window).height() - fotorama_outer;
$('#fotorama-container-wrap').css('left', '0');
fotorama_width='100%';
}}else{
fotorama_height='100%';
fotorama_header_height=0;
fotorama_width='100%';
}
if($('body').hasClass('fullscreen-mode-on')){
fotorama_height='100%';
fotorama_header_height=0;
fotorama_width='100%';
$('#fotorama-container-wrap').css('left', '0');
}
var adminbar_adjuster=0;
if($('body').hasClass('admin-bar')){
adminbar_adjuster=32;
}
fotorama_height=$(window).height();
if($('body').hasClass('menu-is-horizontal')){
fotorama_height=$(window).height() - adminbar_adjuster;
}
if($('body').hasClass('fotorama-style-contain')){
fotorama_height=$(window).height() - 200;
if($('body').hasClass('fotorama-thumbnails-disable')){
fotorama_height=$(window).height() - 120;
}
if($('body').hasClass('centered-logo')){
fotorama_height=$(window).height() - 280;
if($('body').hasClass('fotorama-thumbnails-disable')){
fotorama_height=$(window).height() - 220;
}}
}
if(fotorama_window_width < 1051){
fotorama_height=$(window).height() - 65;
}
if($('body').hasClass('menu-is-vertical')){
fotorama_height=$(window).height() - adminbar_adjuster;
}
if($('body').hasClass('fotorama-style-cover')){
fotorama_height=$(window).height();
}
if($('body').hasClass('admin-bar')){
fotorama_height=fotorama_height - 32;
if(fotorama_window_width < 1051){
fotorama_height=$(window).height() - 100;
}}
$('.fotorama').fotorama({
height: fotorama_height,
width: fotorama_width
});
}}
function fotoramaToggleHeader(){
if($.fn.fotorama){
var slide_color=$('#slideshow-data .slide-0').data('color');
var slide_header=$('#slideshow-data .slide-0').data('header');
$('body').removeClass('fullscreen-slide-bright').removeClass('fullscreen-slide-dark');
$('body').removeClass('fullscreen-header-bright').removeClass('fullscreen-header-dark');
if(slide_color!=undefined){
$('body').addClass('fullscreen-slide-'+ slide_color);
$('body').addClass('fullscreen-header-'+ slide_header);
}else{
$('body').addClass('fullscreen-slide-bright');
$('body').addClass('fullscreen-header-bright');
}
var proceed_change_ui=true;
$('.fotorama')
.on('fotorama:show', function(e, fotorama){
var slide_color=$('#slideshow-data .slide-' + fotorama.activeIndex).data('color');
var slide_header=$('#slideshow-data .slide-' + fotorama.activeIndex).data('header');
if(slide_color!=undefined){
if(proceed_change_ui){
$('body').removeClass('fullscreen-slide-bright').removeClass('fullscreen-slide-dark');
$('body').removeClass('fullscreen-header-bright').removeClass('fullscreen-header-dark');
$('body').addClass('fullscreen-slide-'+ slide_color).addClass('fullscreen-header-'+ slide_header);
$('body').addClass('fullscreen-slide-'+ slide_color).addClass('fullscreen-header-'+ slide_header);
}
$('#slideshow-data li').removeClass('data-active-slide');
$('#slideshow-data .slide-' + fotorama.activeIndex).addClass('data-active-slide');
}});
}}
$(window).resize(function(){
fotoramaResizer();
});
$(window).on("debouncedresize", function(event){
if($.fn.isotope){
isotopeReady();
}});
fotoramaResizer();
fotoramaToggleHeader();
function isotopeReady(){
if($.fn.isotope){
$isotopeContainer.imagesLoaded(function(){
$isotopeContainer.parent().addClass('isotope-container-displayed');
var itemReveal=Isotope.Item.prototype.reveal;
Isotope.Item.prototype.reveal=function(){
itemReveal.apply(this, arguments);
$(this.element).removeClass('isotope-hidden');
$(this.element).addClass('isotope-displayed');
};
var itemHide=Isotope.Item.prototype.hide;
Isotope.Item.prototype.hide=function(){
itemHide.apply(this, arguments);
$(this.element).addClass('isotope-hidden');
$(this.element).removeClass('isotope-displayed');
};
if($($isotopeContainer).hasClass('gridblock-masonary')){
var photow_window_width=$('.container').width();
if(photow_window_width===null){
photow_window_width=$('.container-edge-to-edge').width();
}
var wallContainer_w=$($isotopeContainer).width() - 0.5;
var number_of_columns=$($isotopeContainer).attr('data-columns');
var fourcolumn='25%',
threecolumn='33.3333%',
twocolumn='50%',
onecolumn='100%';
if($($isotopeContainer).hasClass('thumnails-gutter-active')){
fourcolumn='25%';
threecolumn='33.3333%';
twocolumn='50%';
onecolumn='100%';
wallContainer_w=$($isotopeContainer).width() - 0.5;
}
if(number_of_columns==4){
$($isotopeContainer).find('.gridblock-element').css('width', fourcolumn);
}
if(number_of_columns==3){
$($isotopeContainer).find('.gridblock-element').css('width', threecolumn);
}
if(number_of_columns==2){
$($isotopeContainer).find('.gridblock-element').css('width', twocolumn);
}
if(number_of_columns==1){
$($isotopeContainer).find('.gridblock-element').css('width', onecolumn);
}
if(photow_window_width < 1035){
number_of_columns=3;
$($isotopeContainer).find('.gridblock-element').css('width', threecolumn);
}
if(photow_window_width < 800){
number_of_columns=2;
$($isotopeContainer).find('.gridblock-element').css('width', twocolumn);
}
if(photow_window_width < 500){
number_of_columns=2;
$($isotopeContainer).find('.gridblock-element').css('width', onecolumn);
}
if($('body.rtl').length==1){
$isotopeContainer.isotope({
isOriginLeft: false,
resizable: false,
masonry: {
gutterWidth: 0,
columnWidth: wallContainer_w / number_of_columns
}});
}else{
$isotopeContainer.isotope({
resizable: false,
masonry: {
gutterWidth: 0,
columnWidth: wallContainer_w / number_of_columns
}});
}}else{
if($('body.rtl').length==1){
$isotopeContainer.isotope({
isOriginLeft: false,
layoutMode: 'fitRows',
transitionDuration: '0.8s',
masonry: {
gutterWidth: 0
}});
}else{
$isotopeContainer.isotope({
layoutMode: 'fitRows',
transitionDuration: '0.8s',
stagger: 20,
hiddenStyle: {
opacity: 0,
transform: 'scale(0.9)'
},
visibleStyle: {
opacity: 1,
transform: 'scale(1)'
},
masonry: {
gutterWidth: 0
}});
}}
if($($isotopeContainer).hasClass('relayout-on-image-load')){
$isotopeContainer.each(function(){
var $curr_module=$(this);
var layoutupdate=(function(){
$curr_module.isotope('layout');
});
this.addEventListener('load', layoutupdate, true);
});
}});
}}
isotopeReady();
if($.fn.hoverIntent){
$('.outer-wrap').hoverIntent({
over: mainMenuOn,
out: mainMenuOff
});
}else{
$('.outer-wrap').mouseenter(function(){
mainMenuOn();
})
.mouseleave(function(){
mainMenuOff();
});
}
var hoverOutMenu;
function mainMenuOn(){
clearTimeout(hoverOutMenu);
$('body').addClass('main-menu-on');
}
function mainMenuOff(){
hoverOutMenu=setTimeout(function(){
$('body').removeClass('main-menu-on');
}, 600);
}
$('#sidebar').find('.lazyload-after').addClass('lazyload');
$('.side-dashboard-toggle').on('click', function(){
$('body').toggleClass('body-dashboard-push-right');
$('.side-dashboard-wrap').toggleClass('dashboard-push-onscreen');
});
if($.fn.tooltip){
$('.ntips').tooltip({
position: {
my: 'center bottom+40',
at: 'center bottom'
},
show: {
effect: 'fade',
delay: 5
}});
$('.stips').tooltip({
position: {
my: 'center top',
at: 'center top'
},
show: {
effect: 'fade',
delay: 5
}});
}
if($.fn.fitVids){
$('.fitVids').fitVids();
}
function superfish_menu(){
if($.fn.superfish){
$('.homemenu ul.sf-menu').superfish({
speed: 'normal',
speedOut: 'fast',
animation: {opacity: 'show'},
animationOut: {opacity: 'hide'},
disableHI: false,
delay: 600,
autoArrows: true,
dropShadows: true,
onInit: function(){
setTimeout(function(){
$('body').addClass('superfish-ready');
}, 600);
},
onHide: function(){
},
onShow: function(){
},
onBeforeShow: function(){
},
onBeforeHide: function(){}});
}}
setTimeout(function(){ superfish_menu(); }, 200);
function displayMenuItems(){
var duration=400;
var easing='easeInOutQuad';
$.Velocity.Redirects.menuitemlist=function(element, options, index, size){
$.Velocity.animate(element, {
opacity: [ 1,0 ]
}, {
delay: index *(duration/size/2),
duration: duration,
easing: easing,
complete: function(){
$('body').addClass('display-menu-done');
}});
};
$('.sf-menu > li > a').velocity('menuitemlist');
}
$('.toggle-shortcode').on('click', function(){
$(this).toggleClass('active').next().slideToggle('fast');
return false;
});
$('#popularposts_list li:even,#recentposts_list li:even').addClass('even');
$('#popularposts_list li:odd,#recentposts_list li:odd').addClass('odd');
$('.service-column .service-item:even').addClass('service-order-even');
$('.service-column .service-item:odd').addClass('service-order-odd');
$(function(){
$(window).scroll(function(){
if($(this).scrollTop() > 500){
$('body').addClass('goto-top-active');
}else{
$('body').removeClass('goto-top-active');
}
if($(this).scrollTop() > 158){
$('body').addClass('sticky-nav-active');
}else{
$('body').removeClass('sticky-nav-active');
}});
});
$('#goto-top').on('click', function(){
$('body').velocity('scroll', 1000);
return false;
});
$('.pricing-column ul').each(function(e){
$(this).find('li:even').addClass('even');
$(this).find('li:odd').addClass('odd');
});
var manualmode=false;
if($.fn.multiscroll){
function fullscreenMultiscroll(){
$('#multiscroll').multiscroll({
verticalCentered:true,
scrollingSpeed: 700,
easing: 'easeInQuart',
menu: false,
sectionsColor: [],
navigation: true,
navigationPosition: 'right',
navigationColor: '#000',
navigationTooltips: [],
loopBottom: true,
loopTop: true,
css3: true,
paddingTop: 0,
paddingBottom: 0,
normalScrollElements: null,
keyboardScrolling: true,
touchSensitivity: 5,
responsiveWidth: 1000,
responsiveHeight: 0,
responsiveExpand: false,
sectionSelector: '.ms-section',
leftSelector: '.ms-left',
rightSelector: '.ms-right',
onLeave: function(index, nextIndex, direction){},
afterLoad: function(anchorLink, index){},
afterRender: function(){},
afterResize: function(){},
});
}
if($('#multiscroll').length){
fullscreenMultiscroll();
$('html').addClass('multislider-active');
if($(window).width() < 768){
$.fn.multiscroll.destroy();
}else{
$.fn.multiscroll.destroy();
$.fn.multiscroll.build();
$(window).resize(function(){
$('body,html').scrollTop(0);
});
}}
function scrollMultiscroll(){
if(!manualmode){
$.fn.multiscroll.moveSectionDown();
}}
if($('#fullscreen-multiscroll').is(':visible')){
setInterval(scrollMultiscroll, 5000);
}}
window.addEventListener('mousewheel', mouseWheelEvent, {passive: true});
window.addEventListener('DOMMouseScroll', mouseWheelEvent, {passive: true});
function mouseWheelEvent(e){
manualmode=true;
}
$("body").mousedown(function(){
manualmode=true;
});
var header_cart_toggle=$('.header-cart-toggle');
$('body').on('click', '.header-cart-toggle', function(){
$('body').toggleClass('cart-on');
if($('body').hasClass('menu-is-onscreen')){
MobileMenuAction('resized');
}});
$('body').on('click', '.header-cart-close', function(){
$('body').removeClass('cart-on');
});
$('.container-wrapper').on('click', function(){
$('body').removeClass('cart-on');
});
var woocommerce_active=$('body.woocommerce');
if(woocommerce_active.length){
$('ul.products li.mtheme-hover-thumbnail').mouseenter(function(){
var woo_secondary_thumnail=$(this).find('.mtheme-secondary-thumbnail-image').attr('src');
if(woo_secondary_thumnail!==undefined){
$(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
$(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
}})
.mouseleave(function(){
var woo_secondary_thumnail=$(this).find('.mtheme-secondary-thumbnail-image').attr('src');
if(woo_secondary_thumnail!==undefined){
$(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
$(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
}});
var woocommerce_ordering=$('.woocommerce-page .woocommerce-ordering select');
if((woocommerce_ordering).length){
var woocommerce_ordering_curr=$('.woocommerce-ordering select option:selected').text();
var woocommerce_ordering_to_ul=woocommerce_ordering
.clone()
.wrap('<div></div>')
.parent().html()
.replace(/select/g, "ul")
.replace(/option/g, "li")
.replace(/value/g, "data-value");
$('.woocommerce-ordering')
.prepend('<div class="mtheme-woo-order-selection-wrap"><div class="mtheme-woo-order-selected-wrap"><span class="mtheme-woo-order-selected">' + woocommerce_ordering_curr + '</span><i class="woo-sorter-dropdown ion-ios-settings"></i></div><div class="mtheme-woo-order-list">' + woocommerce_ordering_to_ul + '</div></div>');
}
$(function(){
$('.mtheme-woo-order-selected-wrap').on('click', function(){
$('.mtheme-woo-order-list ul').slideToggle('fast');
$('.woo-sorter-dropdown').toggleClass('ion-ios-settings-strong').toggleClass('ion-ios-close-empty');
});
$('.mtheme-woo-order-list ul li').on('click', function(){
var selected_option=$(this).data('value');
$('.woocommerce-page .woocommerce-ordering select').val(selected_option).trigger('change');
$('.mtheme-woo-order-selected').text($(this).text());
$('.mtheme-woo-order-list').slideUp('fast');
$(this).addClass('current');
e.preventDefault();
});
});
}});
(function($){
"use strict";
$(window).on('load',function (){
$('body').addClass('page-has-loaded');
if(! $('body').hasClass('mobile-detected')){
setTimeout(function(){
$('body').addClass('preloader-done');
$('.loading-spinner-detect').velocity('fadeOut', {
duration: 350
});
}, 700);
}
setTimeout(function(){
$('body').addClass('reveal-specific-bg');
}, 800);
setTimeout(function(){ rareHeaderElements(); }, 825);
setTimeout(function(){
$('body').addClass('reveal-single-image');
}, 850);
setTimeout(function(){ revealspecificElements(); }, 1000);
function rareHeaderElements(){
if($.fn.waypoint){
$('.proofing-header-is-animated').waypoint(function(){
$(this).removeClass('proofing-header-is-animated').addClass('animation-action');
}, {
offset: '90%'
});
}}
function revealspecificElements(){
$('#gridblock-container').addClass('is-showing-items');
var i=0;
$('#gridblock-container,.thumbnails-grid-container,.gridblock-metro').each(function(){
$(this).find('.grid-animate-display-all').each(function(counter){
$(this)
.velocity({ opacity:1 }, 500);
});
});
$('.fotorama__nav__shaft').each(function(){
$(this).find('.fotorama__thumb').each(function(counter){
$(this)
.delay(++i * 20 + Math.random() * 1000)
.velocity({ opacity:1 }, 500);
}).promise().done(function(){ $('.fotorama__nav__shaft .fotorama__thumb-border').velocity({ opacity:1 }, 500); });
});
}
function jPlayerSeek(){
if($.fn.jPlayer){
$('.single-jplay-video-postformat').each(function(){
var jplay_video_m4v=$(this).data('m4v');
var jplay_video_ogv=$(this).data('ogv');
var jplay_video_poster=$(this).data('poster');
var jplay_video_swfpath=$(this).data('swfpath');
var jplay_video_id=$(this).data('id');
var jplay_video_videofiles=$(this).data('videofiles');
$('#jquery_jplayer_'+jplay_video_id).jPlayer({
ready: function (){
$(this).jPlayer('setMedia', {
m4v: jplay_video_m4v,
ogv: jplay_video_ogv,
poster: jplay_video_poster
}).jPlayer('stop');
},
play: function(){
$(this).jPlayer('pauseOthers');
},
swfPath: jplay_video_swfpath,
supplied: jplay_video_videofiles,
size: {
width: '100%',
height: 'auto',
cssClass: 'jp-video-360p'
},
cssSelectorAncestor: '#jp_container_' + jplay_video_id
});
});
$('.single-jplay-audio-postformat').each(function(){
var jplay_audio_mp3=$(this).data('mp3');
var jplay_audio_m4a=$(this).data('m4a');
var jplay_audio_oga=$(this).data('ogv');
var jplay_audio_swfpath=$(this).data('swfpath');
var jplay_audio_id=$(this).data('id');
var jplay_audio_audiofiles=$(this).data('audiofiles');
$('#jquery_jplayer_'+jplay_audio_id).jPlayer({
ready: function (){
$(this).jPlayer('setMedia', {
mp3: jplay_audio_mp3,
m4a: jplay_audio_m4a,
oga: jplay_audio_oga,
end: ''
}).jPlayer('stop');
},
play: function(){
$(this).jPlayer('pauseOthers');
},
swfPath: jplay_audio_swfpath,
supplied: jplay_audio_audiofiles,
cssSelectorAncestor: '#jp_interface_' + jplay_audio_id
});
});
if($('.fullscreenslideshow-audio-player').length){
var jplay_audio_mp3=$('.fullscreenslideshow-audio-player').data('mp3');
var jplay_audio_m4a=$('.fullscreenslideshow-audio-player').data('m4a');
var jplay_audio_oga=$('.fullscreenslideshow-audio-player').data('ogv');
var jplay_audio_swfpath=$('.fullscreenslideshow-audio-player').data('swfpath');
var jplay_audio_id=$('.fullscreenslideshow-audio-player').data('id');
var jplay_audio_audiofiles=$('.fullscreenslideshow-audio-player').data('audiofiles');
var jplay_audio_volume=$('.fullscreenslideshow-audio-player').data('volume');
$('#jquery_jplayer_' + jplay_audio_id).jPlayer({
ready: function (){
$(this).jPlayer('setMedia', {
mp3: jplay_audio_mp3,
m4a: jplay_audio_m4a,
oga: jplay_audio_oga,
end: ''
}).jPlayer('volume', jplay_audio_volume);
},
play: function(){
$(this).jPlayer('pauseOthers');
},
ended: function(){
$(this).jPlayer('play');
},
swfPath: jplay_audio_swfpath,
supplied: jplay_audio_audiofiles,
cssSelectorAncestor: '#jp_interface_' + jplay_audio_id
});
}}
}
jPlayerSeek();
function gridRotatorUnit(){
if($.fn.gridrotator){
if($('.ri-grid').length){
var gridSelect=('.ri-grid');
var gridID='#' + $(gridSelect).data('id');
var gridTransition=$(gridSelect).data('transition');
var slideshowstatus=$(gridSelect).data('slideshow');
var gridColumns=$(gridSelect).data('columns');
var gridRows=$(gridSelect).data('rows');
var responsivegridColumns=$(gridSelect).data('responsivecolumns');
gridColumns=typeof gridColumns!=='undefined' ? gridColumns:'8';
gridRows=typeof gridRows!=='undefined' ? gridRows:'2';
responsivegridColumns=typeof gridColumns!=='undefined' ? gridColumns:'8';
gridTransition=typeof gridTransition!=='undefined' ? gridTransition:'random';
slideshowstatus=typeof slideshowstatus!=='undefined' ? slideshowstatus:false;
$(gridID).gridrotator({
rows:gridRows,
columns:gridColumns,
maxStep:4,
animType:gridTransition,
preventClick:false,
slideshow:slideshowstatus,
interval:4000,
onhover:false,
w1024:{
rows:gridRows,
columns:gridColumns
},
w768:{
rows:gridRows,
columns:responsivegridColumns
},
w480:{
rows:gridRows,
columns:responsivegridColumns
},
w320:{
rows:gridRows,
columns:responsivegridColumns
},
w240:{
rows:gridRows,
columns:responsivegridColumns
},
});
}}
}
if(! $("body").hasClass("elementor-editor-active")){
if($('#instagram-grid-gen').length){
var populateimages=function(){
var r=$.Deferred();
var imageset_arr=new Array();
var linkset_arr=new Array();
$('#insta-grid-id-detect #sbi_images img').each(function(){
if(!$(this).hasClass('emoji')){
var instaimage=$(this).attr('src');
imageset_arr.push(instaimage);
}});
$('#insta-grid-id-detect #sbi_images a.sbi_photo').each(function(){
var instalink=$(this).attr('href');
linkset_arr.push(instalink);
});
var totalimages=imageset_arr.length;
var imagecount=0;
var linkcount=0;
$('.insta-grid-wrap ul img').each(function(){
if(imagecount <=totalimages){
$(this).attr('data-src', imageset_arr[ imagecount ]);
}
imagecount++;
});
$('.insta-grid-wrap ul .instagram-photos-link').each(function(){
if(linkcount < totalimages){
$(this).attr('href', linkset_arr[ linkcount ]);
$(this).parent('.gridblock-grid-element').addClass('insta-image-present').removeClass('insta-image-absent');
}
linkcount++;
});
$('.insta-grid-wrap ul li.insta-image-absent').remove();
$('#instagram-grid-gen').remove();
return r;
};
window.sbi_custom_js=function(){
populateimages().done(gridRotatorUnit());
}}else{
gridRotatorUnit();
}}
});
})(jQuery);
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c=g(b.parentIdFieldId),s=g(b.postIdFieldId),y=g(b.commentReplyTitleId),p=y&&y.firstChild,u=p&&p.nextSibling;if(i&&h&&c){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),y=(y=g(b.commentReplyTitleId))?y.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=y,m.parentNode.insertBefore(n,m)),d&&s&&(s.value=d),c.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);