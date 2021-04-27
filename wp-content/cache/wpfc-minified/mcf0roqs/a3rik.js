(function($){
var WidgetImaginemBlocksHandler=function($scope, $){
var $filterContainer=$('#gridblock-container,#gridblock-container-blog,.thumbnails-grid-container');
var AjaxPortfolio;
var portfolio_height;
var portfolio_width;
var half_width;
var image_height;
var slideshow_active;
var AutoStart;
var ajax_image_height;
var ajax_window_height;
var $data;
if(elementorFrontend.isEditMode()){
elementor.channels.editor.on('change', function(newValue){
clearTimeout(resizeOnChange);
var resizeOnChange=setTimeout(function(){
if($scope.find('.elementor-widget-portfolio-grid').length){
$(window).trigger('resize');
}
if($scope.find('.elementor-widget-events-grid').length){
$(window).trigger('resize');
}
if($scope.find('.elementor-widget-thumbnails-grid').length){
$(window).trigger('resize');
}
if($scope.find('.elementor-widget-proofing-grid').length){
$(window).trigger('resize');
}
if($scope.find('.elementor-widget-worktype-albums').length){
$(window).trigger('resize');
}}, 1000);
});
}
elementorFrontend.waypoint($scope.find('.elementor-widget-split-headlines'), function(){
var headlineContainer=$(this).find('.multi-headlines');
headlineContainer.find('.split-header-wrap').each(function(index){
var headline=$(this);
setTimeout(function(){
headline.addClass('reveal-split');
}, 200 * index);
});
});
elementorFrontend.waypoint($scope.find('.elementor-widget-blog-parallax .vertical-parallax-image'), function(){
var headline=$(this);
headline.addClass('bg-loaded');
},
{
offset: '60%',
triggerOnce: true
});
elementorFrontend.waypoint($scope.find('.elementor-widget-progress-bar'), function(){
var progressbar=$(this);
var skill_indicate=progressbar.find('.skillbar-bar');
skill_indicate.css('width', skill_indicate.data('percentage') + '%');
});
elementorFrontend.waypoint($scope.find('.elementor-widget-service-box'), function(){
var counterbox=$(this).find('.time-count-data');
var countTo=counterbox.data('to');
counterbox.numerator({ duration: 2000 , toValue: countTo});
});
if($('.owl-works-detect').length){
$('.owl-works-detect').each(function(){
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
loop: false,
onResize:reAdjustJarallax
});
});
}
$('.is-animation-group').each(function(){
var self=$(this);
elementorFrontend.waypoint($scope.find('.animated-group-element'), function(){
var animGroupElement=$(this);
var animGroupElementDelay=animGroupElement.data('animationdelay');
animGroupElementDelay=typeof animGroupElementDelay!=='undefined' ? animGroupElementDelay:'0';
setTimeout(function(){
animGroupElement.removeClass('animation-standby-group-item').addClass('animation-action');
}, animGroupElementDelay);
});
});
elementorFrontend.waypoint($scope.find('.elementor-widget-service-box'), function(){
var counterbox=$(this).find('.time-count-data');
var countTo=counterbox.data('to');
counterbox.numerator({ duration: 2000 , toValue: countTo});
});
if(elementorFrontend.isEditMode()){
$('.elementor-widget-progress-bar').each(function(){
var progressbar=$(this);
var skill_indicate=progressbar.find('.skillbar-bar');
skill_indicate.css('width', skill_indicate.data('percentage') + '%');
});
$('.elementor-widget-service-box').each(function(){
var counterbox=$(this).find('.time-count-data');
var countTo=counterbox.data('to');
counterbox.numerator({ duration: 2000 , toValue: countTo});
});
}
if($.fn.tilt){
$(".has-effect-tilt .gridblock-grid-element").tilt({
maxTilt: 20,
perspective: 550,
easing: "cubic-bezier(.03,.98,.52,.99)",
speed: 800,
glare: false,
scale: 1.01
});
}
function reAdjustJarallax (){
if($.fn.jarallax){
setTimeout(function(){
$('.jarallax-parent').jarallax('clipContainer');
$('.jarallax-parent').jarallax('coverImage');
}, 600);
}}
function editorChoice(){
jQuery(".editor-mode-on .mtheme-editor-choice.mtheme-editor-active").click(function(){
var proofing_item=jQuery(this);
var image_id=proofing_item.data("image_id");
var editor_choice=$('#mtheme-proofing-item-' + image_id + '').data('editor_choice');
jQuery.ajax({
type: "post",
url: ajax_var_url,
data: "action=blacksilver_editor_recommended_checker&nonce=" + ajax_var_nonce + "&mtheme_editor_choice=" + editor_choice + "&image_id=" + image_id,
beforeSend: function(){
$('#mtheme-proofing-item-' + image_id + '').addClass("proofing-item-inprogress");
$("#proofing-status-count").removeClass('pulse');
},
success: function(data){
var substr=data.split(':');
var checked=substr[0];
var image_id=substr[1];
if(checked=="checked"){
$('#mtheme-proofing-item-' + image_id + '').removeClass("proofing-item-inprogress").removeClass("editor-item-unchecked").addClass("editor-item-selected");
$('#mtheme-proofing-item-' + image_id + '').find('.editor-icon-status').removeClass("ion-android-radio-button-off").addClass("ion-android-radio-button-on");
$('#mtheme-proofing-item-' + image_id + '').data('editor_choice', 'editorselected');
$('#mtheme-proofing-item-' + image_id + '').removeClass("filter-editorunchecked").addClass('filter-editorselected');
}else{
$('#mtheme-proofing-item-' + image_id + '').removeClass("proofing-item-inprogress").addClass("editor-item-unchecked").removeClass("editor-item-selected");
$('#mtheme-proofing-item-' + image_id + '').find('.editor-icon-status').addClass("ion-android-radio-button-off").removeClass("ion-android-radio-button-on");
$('#mtheme-proofing-item-' + image_id + '').data('editor_choice', 'editorunchecked');
$('#mtheme-proofing-item-' + image_id + '').removeClass("filter-editorselected").addClass('filter-editorunchecked');
}},
error: function(jqXHR, textStatus, errorThrown){
alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
}});
return false;
});
}
editorChoice();
function AjaxProofing(){
var proofing_count_total=$(".proofing-item-wrap > .mtheme-proofing-item").length;
var proofing_count_selected=$(".proofing-item-wrap > .proofing-item-selected").length;
$(".proofing-count-total").html(proofing_count_total);
$(".proofing-count-selected").html(proofing_count_selected);
jQuery(".mtheme-proofing-choice.mtheme-proofing-active").click(function(){
var proofing_item=jQuery(this);
var image_id=proofing_item.data("image_id");
var proofing_status=$('#mtheme-proofing-item-' + image_id + '').data('proofing_status');
jQuery.ajax({
type: "post",
url: ajax_var_url,
data: "action=blacksilver_proofing_checker&nonce=" + ajax_var_nonce + "&proofing_status=" + proofing_status + "&image_id=" + image_id,
beforeSend: function(){
$('#mtheme-proofing-item-' + image_id + '').addClass("proofing-item-inprogress");
$("#proofing-status-count").removeClass('pulse');
},
success: function(data){
var substr=data.split(':');
var checked=substr[0];
var image_id=substr[1];
if(checked=="checked"){
$('#mtheme-proofing-item-' + image_id + '').removeClass("proofing-item-inprogress").removeClass("proofing-item-unchecked").addClass("proofing-item-selected");
$('#mtheme-proofing-item-' + image_id + '').find('.proofing-icon-status').removeClass("ion-ios-heart-outline").addClass("ion-ios-heart");
$('#mtheme-proofing-item-' + image_id + '').data('proofing_status', 'selected');
$('#mtheme-proofing-item-' + image_id + '').removeClass("filter-unchecked").addClass('filter-selected');
}else{
$('#mtheme-proofing-item-' + image_id + '').removeClass("proofing-item-inprogress").addClass("proofing-item-unchecked").removeClass("proofing-item-selected");
$('#mtheme-proofing-item-' + image_id + '').find('.proofing-icon-status').addClass("ion-ios-heart-outline").removeClass("ion-ios-heart");
$('#mtheme-proofing-item-' + image_id + '').data('proofing_status', 'unchecked');
$('#mtheme-proofing-item-' + image_id + '').removeClass("filter-selected").addClass('filter-unchecked');
}
var proofing_count_total=$(".proofing-item-wrap > .mtheme-proofing-item").length;
var proofing_count_selected=$(".proofing-item-wrap > .proofing-item-selected").length;
$(".proofing-count-total").html(proofing_count_total);
$(".proofing-count-selected").html(proofing_count_selected);
$("#proofing-status-count").addClass('pulse');
},
error: function(jqXHR, textStatus, errorThrown){
alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
}});
return false;
});
}
AjaxProofing();
function swiperSlides(){
if(typeof Swiper!="undefined"){
if($('.shortcode-swiper-container').length){
$('.shortcode-swiper-container').each(function(){
var swipercontainer=$(this);
var autoplaydata=[];
var swiperID='#' + swipercontainer.data('id');
var columns=swipercontainer.data('columns');
var swiperpagination=swipercontainer.data('swiperpagination');
var getautoplay=swipercontainer.data('autoplay');
columns=typeof columns!=='undefined' ? columns:'4';
getautoplay=typeof getautoplay!=='undefined' ? getautoplay:'5000';
if(getautoplay=="0"){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
}
var swiper=new Swiper(swiperID, {
pagination: false,
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
1024: {
slidesPerView: 2,
spaceBetween: 0
},
768: {
slidesPerView: 2,
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
});
}}
}
swiperSlides();
function owlcarouselsInit(){
if($('.owl-carousel-detect').length){
$('.owl-carousel-detect').each(function(){
var thisID=$(this).data('id');
var thisAutoplay=$(this).data('autoplay');
var thisLazyload=$(this).data('lazyload');
var thisSmartspeed=$(this).data('smartspeed');
var thisType=$(this).data('type');
var ranCarousel=false;
var thisAutoplayTimeout=$(this).data('autoplaytimeout');
thisAutoplay=typeof thisAutoplay!=='undefined' ? thisAutoplay:'false';
thisLazyload=typeof thisLazyload!=='undefined' ? thisLazyload:'false';
thisSmartspeed=typeof thisSmartspeed!=='undefined' ? thisSmartspeed:'1000';
thisAutoplayTimeout=typeof thisAutoplayTimeout!=='undefined' ? thisAutoplayTimeout:'5000';
thisType=typeof thisType!=='undefined' ? thisType:'slideshow';
thisID=typeof thisID!=='undefined' ? thisID:'false';
if(thisType=="testimony"){
ranCarousel=true;
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
loop: true,
onResize:reAdjustJarallax
});
}
if(thisType=="centercarousel"){
ranCarousel=true;
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
loop: true,
navText:["",""],
singleItem:true,
onResize:reAdjustJarallax
});
}
if(thisType=="flatcarousel"){
ranCarousel=true;
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
margin:20,
stagePadding: 10,
smartSpeed: thisSmartspeed,
autoplay: thisAutoplay,
autoplayTimeout: thisAutoplayTimeout,
lazyLoad: thisLazyload,
nav: true,
autoHeight:true,
loop: true,
navText:["",""],
singleItem:true,
onResize:reAdjustJarallax
});
}
if(! ranCarousel){
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
loop: true,
navText:["",""],
singleItem:true,
onResize:reAdjustJarallax
});
}}
});
}}
if($.fn.imagesLoaded){
$('.owl-carousel-detect').imagesLoaded(function(){
owlcarouselsInit();
});
}
var lightgalleryTransition=lightbox_transition;
var lightgalleryThumbnails=lightbox_thumbnails;
if(lightgalleryThumbnails=="false"){
lightgalleryThumbnails=false;
}else{
lightgalleryThumbnails=true;
}
var ajaxLoading=0;
var SlideStarted=false;
var lastWindowHeight=$(window).height();
var lastWindowWidth=$(window).width();
$(window).resize(function(){
$('.thumbnails-grid-container').each(function(){
$(this).find('.gridblock-element').removeClass('animation-action animated flipInX');
$(this).find('.gridblock-element').removeClass('grid-animate-display-all');
});
$('.animation-standby-portfolio').removeClass('animation-standby-portfolio').addClass('animation-action');
$('.gridblock-element').removeClass('animated animation-standby-portfolio animation-action');
if($(window).height()!=lastWindowHeight||$(window).width()!=lastWindowWidth){
lastWindowHeight=$(window).height();
lastWindowWidth=$(window).width();
ajax_image_height=jQuery('.displayed-image').height();
$('.ajax-image-selector').css({
"height": ajax_image_height + "px"
});
}});
$(window).on("debouncedresize", function(event){
if($.fn.isotope){
isotopeInit();
}});
function isotopeInit(){
if($.fn.isotope){
$filterContainer.each(function(){
var currContainer=$(this);
currContainer.imagesLoaded(function(){
currContainer.parent().addClass('isotope-container-displayed');
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
if($(currContainer).hasClass('gridblock-masonary')){
var photow_window_width=$('.container').width();
if(photow_window_width===null){
photow_window_width=$('.container-edge-to-edge').width();
}
var wallContainer_w=$(currContainer).width() - 0.5;
number_of_columns=$(currContainer).attr('data-columns');
var fivecolumn='20%',fourcolumn='25%',threecolumn='33.3333%',twocolumn='50%',onecolumn='100%';
if($(currContainer).hasClass('thumnails-gutter-active')){
fivecolumn='20%';
fourcolumn='25%';
threecolumn='33.3333%';
twocolumn='50%';
onecolumn='100%';
wallContainer_w=$(currContainer).width() - 0.5;
}
if(number_of_columns==5){
$(currContainer).find('.gridblock-element').css('width', fivecolumn);
}
if(number_of_columns==4){
$(currContainer).find('.gridblock-element').css('width', fourcolumn);
}
if(number_of_columns==3){
$(currContainer).find('.gridblock-element').css('width', threecolumn);
}
if(number_of_columns==2){
$(currContainer).find('.gridblock-element').css('width', twocolumn);
}
if(number_of_columns==1){
$(currContainer).find('.gridblock-element').css('width', onecolumn);
}
if(photow_window_width < 1035){
if(number_of_columns > 3){
number_of_columns=3;
$(currContainer).find('.gridblock-element').css('width', threecolumn);
}}
if(photow_window_width < 800){
if(number_of_columns > 2){
number_of_columns=2;
$(currContainer).find('.gridblock-element').css('width', twocolumn);
}}
if(photow_window_width < 500){
number_of_columns=1;
$(currContainer).find('.gridblock-element').css('width', onecolumn);
}
if($('body.rtl').length==1){
currContainer.isotope({
isOriginLeft: false,
resizable: false,
masonry: {
gutterWidth: 0,
columnWidth: wallContainer_w / number_of_columns
}});
}else{
currContainer.isotope({
resizable: false,
masonry: {
gutterWidth: 0,
columnWidth: wallContainer_w / number_of_columns
}});
}}else{
if($('body.rtl').length==1){
currContainer.isotope({
isOriginLeft: false,
layoutMode: 'fitRows',
transitionDuration: '0.8s',
masonry: {
gutterWidth: 0
}});
}else{
currContainer.isotope({
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
if($(currContainer).hasClass('relayout-on-image-load')){
currContainer.each(function(){
var $curr_module=$(this);
var layoutupdate=(function(){
$curr_module.isotope('layout');
});
this.addEventListener('load', layoutupdate, true);
});
}});
});
}}
var isotopeIsFiltering=false;
$('#gridblock-filters a').first().addClass('is-active');
function isotopeFilter(selector){
$filterContainer.isotope({
filter: selector
});
if($.fn.isotope){
$filterContainer.imagesLoaded(function(){
$filterContainer.isotope('on', 'layoutComplete', function(isoInstance, laidOutItems){
if($(".lightgallery-container")[0]){
if(! $("body").hasClass("elementor-editor-active")){
if($.fn.lightGallery){
if(isotopeIsFiltering===true){
$(".lightgallery-container").data('lightGallery').destroy(true);
lightgallery_activate('.isotope-displayed .lightbox-active');
}}
}
isotopeIsFiltering=false;
}});
});
}
$('#gridblock-filters a').removeClass('is-active');
if(selector!=='*'){
$('#gridblock-filters '+selector+ ' a').addClass('is-active');
}
$('.ajax-gallery-navigation').attr('id', '-1');
$('.ajax-prev').css('cursor', 'default');
}
function isotopeClicks(){
$('#gridblock-filters a').click(function(){
isotopeIsFiltering=true;
$('.gridblock-element').removeClass('animated animation-standby-portfolio animation-action');
$('.gridblock-element').removeClass('grid-animate-display-all');
var selector=$(this).attr('data-filter');
isotopeFilter(selector);
return false;
});
}
function lightgallery_activate(thumbnailSelector){
if(! $("body").hasClass("elementor-editor-active")){
var gridblock_lightbox=$(".lightgallery-container");
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
}}
}
lightgallery_activate('.lightbox-active');
isotopeInit();
isotopeClicks();
if($('#owl-fullscreen-pagemeta').length){
$("#owl-fullscreen-pagemeta").owlCarousel({
responsive:{
0:{
items:1,
nav:true
},
500:{
items:1,
nav:true
},
600:{
items:2,
nav:true
},
1024:{
items:3,
nav:true
}},
items: 3,
autoplay: false,
dots: true,
nav: true,
autoHeight:true,
navText:["",""],
animateOut: "fadeOut"
});
}};
function ThumbnailLikes(){
$(document).on('click', ".mtheme-post-like .vote-ready", function(){
var heart=jQuery(this);
var post_id=heart.data("post_id");
jQuery.ajax({
type: "post",
url: ajax_var_url,
data: "action=blacksilver_post_like_vote&nonce=" + ajax_var_nonce + "&post_id=" + post_id,
beforeSend: function(){
if(!heart.hasClass('voted')){
heart.children("span.mtheme-like").removeClass("bounceIn");
heart.children("span.mtheme-like").addClass("voteprogress");
}},
success: function(data){
var substr=data.split(':');
var count=substr[0];
var post_id=substr[1];
if(count!="already"){
jQuery('.mtheme-post-like span[data-post_id="' + post_id + '"]').removeClass("vote-ready").addClass("vote-disabled");
jQuery('.mtheme-post-like span[data-post_id="' + post_id + '"]').find(".mtheme-like").removeClass("like-notvoted").addClass("voted").removeClass("voteprogress");
jQuery('.mtheme-post-like span[data-post_id="' + post_id + '"]').find(".vote-like-icon").removeClass("ion-ios-heart-outline").addClass("ion-ios-heart");
jQuery('.post-link-count-wrap[data-count_id="' + post_id + '"]').find("span.post-like-count").text(count);
}},
complete: function(){
heart.children("span.mtheme-like").addClass("bounceIn");
},
error: function(jqXHR, textStatus, errorThrown){
alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
}});
return false;
});
}
ThumbnailLikes();
$(window).on('elementor/frontend/init', function(){
$('.elementor-widget-split-headlines').each(function(){
var headlineContainer=$(this).find('.multi-headlines');
headlineContainer.find(':header').each(function(){
$(this).wrap("<div class='split-header-wrap'><div class='split-header-inner'></div></div>");
});
});
elementorFrontend.hooks.addAction('frontend/element_ready/global', WidgetImaginemBlocksHandler);
elementorFrontend.hooks.addAction('frontend/element_ready/before-after.default', function($scope){
var beforeafterContainer=$scope.find('.before-after-detect');
var thisID=$(beforeafterContainer).data('id');
$(beforeafterContainer).imagesLoaded(function(){
if($(beforeafterContainer).length){
$(beforeafterContainer).twentytwenty({default_offset_pct: 0.5});
}});
});
elementorFrontend.hooks.addAction('frontend/element_ready/em-image-carousel.default', function($scope){
var lightboxcarousel=$scope.find('.owl-works-detect-elementor');
var thisID=lightboxcarousel.data('id');
var thisAutoplay=lightboxcarousel.data('autoplay');
var thisLazyload=lightboxcarousel.data('lazyload');
var thisPagination=lightboxcarousel.data('pagination');
var thisColumns=lightboxcarousel.data('columns');
var thisType=lightboxcarousel.data('type');
var thisAutoplayTimeout=lightboxcarousel.data('autoplaytimeout');
thisAutoplay=typeof thisAutoplay!=='undefined' ? thisAutoplay:'false';
thisAutoplayTimeout=typeof thisAutoplayTimeout!=='undefined' ? thisAutoplayTimeout:'10000';
thisLazyload=typeof thisLazyload!=='undefined' ? thisLazyload:'false';
thisPagination=typeof thisPagination!=='undefined' ? thisPagination:'false';
thisColumns=typeof thisColumns!=='undefined' ? thisColumns:'4';
thisID=typeof thisID!=='undefined' ? thisID:'false';
if($.fn.imagesLoaded){
$(lightboxcarousel).imagesLoaded(function(){
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
loop: true
});
});
}});
elementorFrontend.hooks.addAction('frontend/element_ready/image-reel.default', function($scope){
if(typeof Swiper!="undefined"){
var swipercontainer=$scope.find('.shortcode-multislider-container');
var autoplaydata=[];
var lesscolumns=1;
var paginaitonType='bullets';
var midlesscolumns=1;
var geteffect=[];
var effectslide=[];
var fadeslide=[];
var slidepagination=[];
var setloop=false;
var swiperID='#' + swipercontainer.data('id');
var columns=swipercontainer.data('columns');
var slidetotal=swipercontainer.data('slidetotal');
var getpagination=swipercontainer.data('swiperpagination');
var getautoplay=swipercontainer.data('autoplay');
var geteffect=swipercontainer.data('slidestyle');
columns=typeof columns!=='undefined' ? columns:'4';
getautoplay=typeof getautoplay!=='undefined' ? getautoplay:'5000';
geteffect=typeof geteffect!=='undefined' ? geteffect:'slide';
getpagination=typeof getpagination!=='undefined' ? getpagination:'yes';
if(getautoplay=='0'){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
}
effectslide='slide';
setloop=true;
if($("body").hasClass("elementor-editor-active")){
autoplaydata=false;
}
if(getpagination=='yes'){
paginaitonType='bullets';
}
if(getpagination=='fraction'){
paginaitonType='fraction';
}
if(getautoplay=='0'){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
autoplaydata.disableOnInteraction=true;
}
effectslide='slide';
if(columns!==1){
geteffect='slide';
setloop=false;
}
if(geteffect=='fade'){
effectslide='fade';
fadeslide.crossFade=false;
setloop=true;
}
if(columns==2){
lesscolumns=2;
midlesscolumns=2;
}
if(columns==3){
lesscolumns=2;
midlesscolumns=3;
}
if(columns > 3){
lesscolumns=2;
midlesscolumns=4;
}
var heroswiper=new Swiper(swipercontainer, {
pagination: {
el: '.swiper-pagination',
type: paginaitonType,
clickable: true,
},
loop: true,
effect: effectslide,
fadeEffect: fadeslide,
autoplay: autoplaydata,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
slidesPerView: 'auto',
spaceBetween: 12,
loopedSlides: slidetotal,
centeredSlides: true,
speed: 1000,
on: {
transitionStart: function (){
swipercontainer.removeClass('transition-done');
swipercontainer.addClass('transition-progress');
},
transitionEnd: function (){
swipercontainer.removeClass('transition-progress');
swipercontainer.addClass('transition-done');
},
}});
}});
elementorFrontend.hooks.addAction('frontend/element_ready/multi-slider.default', function($scope){
if(typeof Swiper!="undefined"){
var swipercontainer=$scope.find('.shortcode-multislider-container');
var autoplaydata=[];
var lesscolumns=1;
var paginaitonType='bullets';
var midlesscolumns=1;
var geteffect=[];
var effectslide=[];
var fadeslide=[];
var slidepagination=[];
var setloop=false;
var swiperID='#' + swipercontainer.data('id');
var columns=swipercontainer.data('columns');
var getpagination=swipercontainer.data('swiperpagination');
var getautoplay=swipercontainer.data('autoplay');
var geteffect=swipercontainer.data('slidestyle');
columns=typeof columns!=='undefined' ? columns:'4';
getautoplay=typeof getautoplay!=='undefined' ? getautoplay:'5000';
geteffect=typeof geteffect!=='undefined' ? geteffect:'slide';
getpagination=typeof getpagination!=='undefined' ? getpagination:'yes';
if(getautoplay=='0'){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
}
effectslide='slide';
setloop=true;
if($("body").hasClass("elementor-editor-active")){
autoplaydata=false;
}
if(getpagination=='yes'){
paginaitonType='bullets';
}
if(getpagination=='fraction'){
paginaitonType='fraction';
}
if(getautoplay=='0'){
autoplaydata=false;
}else{
autoplaydata.delay=getautoplay;
autoplaydata.disableOnInteraction=true;
}
effectslide='slide';
if(columns!==1){
geteffect='slide';
setloop=false;
}
if(geteffect=='fade'){
effectslide='fade';
fadeslide.crossFade=false;
setloop=true;
}
if(columns==2){
lesscolumns=2;
midlesscolumns=2;
}
if(columns==3){
lesscolumns=2;
midlesscolumns=3;
}
if(columns > 3){
lesscolumns=2;
midlesscolumns=4;
}
var heroswiper=new Swiper(swipercontainer, {
pagination: {
el: '.swiper-pagination',
type: paginaitonType,
clickable: true,
},
loop: setloop,
effect: effectslide,
fadeEffect: fadeslide,
autoplay: autoplaydata,
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
slidesPerView: columns,
spaceBetween: 0,
speed: 1000,
breakpoints: {
320: {
slidesPerView: 1,
spaceBetween: 0
},
640: {
slidesPerView: 1,
spaceBetween: 0
},
1000: {
slidesPerView: lesscolumns,
spaceBetween: 0
},
1300: {
slidesPerView: midlesscolumns,
spaceBetween: 0
}},
on: {
transitionStart: function (){
swipercontainer.removeClass('transition-done');
swipercontainer.addClass('transition-progress');
},
transitionEnd: function (){
swipercontainer.removeClass('transition-progress');
swipercontainer.addClass('transition-done');
},
}});
}});
});
})(jQuery);
(function($){
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
if(img!=="none"){
$('<img/>').attr('src', img).on('load', function(){
$(this).remove();
$this.data('loaded-count',$this.data('loaded-count')+1);
if($this.data('loaded-count') >=bgImgs.length){
settings.afterLoaded.call($this);
}});
}});
});
};})(jQuery);
jQuery(document).ready(function($){
"use strict";
$('.jarallax').bgLoaded();
if(typeof Rellax!="undefined"){
if($('.elementor-element').hasClass('rellax')){
var rellax=new Rellax('.rellax');
}}
$('.site-back-cover').bgLoaded();
$('.photocard-image-container').bgLoaded();
$('.photocard-image-container').bgLoaded({
afterLoaded:function(){
this.parent('.photocard-image-wrap').addClass('bg-loaded');
}});
$('.lazyload-container').each(function(){
var lazyloadContainer=$(this);
$(lazyloadContainer).find('img').each(function(){
$(this).attr("data-src",$(this).attr("src"));
$(this).attr("data-srcset",$(this).attr("srcset"));
$(this).removeAttr("src").removeAttr("srcset").addClass('lazyload');
});
});
$(document).on('lazybeforeunveil', function(e){
if($(e.target).hasClass('lazyload-after')){
$('.dashboard-inner').addClass('dashboardimage-loaded');
}});
$(document).on('lazybeforeunveil lazyloaded', function(e){
if($(e.target).hasClass('lazyload-after')){
$(e.target).closest('.vertical-image-list').addClass('container-lazyimage-loaded');
}});
if($('.progress-wrap').length){
$('body').addClass('goto-top-enabled');
var progressPath=document.querySelector('.progress-wrap path');
var pathLength=progressPath.getTotalLength();
progressPath.style.transition=progressPath.style.WebkitTransition='none';
progressPath.style.strokeDasharray=pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset=pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition=progressPath.style.WebkitTransition='stroke-dashoffset 10ms linear';
var updateProgress=function (){
var scroll=$(window).scrollTop();
var height=$(document).height() - $(window).height();
var progress=pathLength - (scroll * pathLength / height);
progressPath.style.strokeDashoffset=progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset=50;
var duration=550;
jQuery(window).on('scroll', function(){
if(jQuery(this).scrollTop() > offset){
jQuery('.progress-wrap').addClass('active-progress');
}else{
jQuery('.progress-wrap').removeClass('active-progress');
}});
jQuery('.progress-wrap').on('click', function(event){
event.preventDefault();
$('#home').css('margin-top','0');
$('html, body').velocity('scroll', 1000);
return false;
});
}
if($("body").hasClass("animated-cursor-active")){
var lerp=function lerp(a, b, n){
return (1 - n) * a + n * b;
};
var body=document.body;
var getMousePos=function getMousePos(e){
var posx=0;
var posy=0;
if(!e) e=window.event;
if(e.pageX||e.pageY){
posx=e.pageX;
posy=e.pageY;
}else if(e.clientX||e.clientY){
posx=e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
posy=e.clientY + body.scrollTop + document.documentElement.scrollTop;
}
return {
x: posx,
y: posy
};};
var Cursor =
function (){
function Cursor(el){
var _this=this;
this.DOM={
el: el
};
this.DOM.dot=this.DOM.el.querySelector('.cursor__inner--dot');
this.DOM.circle=this.DOM.el.querySelector('.cursor__inner--circle');
this.bounds={
dot: this.DOM.dot.getBoundingClientRect(),
circle: this.DOM.circle.getBoundingClientRect()
};
this.scale=1;
this.opacity=1;
this.mousePos={
x: 0,
y: 0
};
this.lastMousePos={
dot: {
x: 0,
y: 0
},
circle: {
x: 0,
y: 0
}};
this.lastScale=1;
this.initEvents();
requestAnimationFrame(function (){
return _this.render();
});
}
var _proto=Cursor.prototype;
_proto.initEvents=function initEvents(){
var _this2=this;
window.addEventListener('mousemove', function (ev){
return _this2.mousePos=getMousePos(ev);
});
};
_proto.render=function render(){
var _this3=this;
this.lastMousePos.dot.x=lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
this.lastMousePos.dot.y=lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
this.lastMousePos.circle.x=lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
this.lastMousePos.circle.y=lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
this.lastScale=lerp(this.lastScale, this.scale, 0.15);
this.DOM.dot.style.transform="translateX(" + this.lastMousePos.dot.x + "px) translateY(" + this.lastMousePos.dot.y + "px)";
this.DOM.circle.style.transform="translateX(" + this.lastMousePos.circle.x + "px) translateY(" + this.lastMousePos.circle.y + "px) scale(" + this.lastScale + ")";
requestAnimationFrame(function (){
return _this3.render();
});
};
_proto.enter=function enter(){
this.scale=1.5;
this.DOM.dot.style.display='none';
};
_proto.leave=function leave(){
this.scale=1;
this.DOM.dot.style.display='';
};
return Cursor;
}();
var cursor=new Cursor(document.querySelector('.cursor'));
var mouse_over_element=false;
window.addEventListener("mousemove", function (ev){
mouse_over_element=false;
if($('.elementor-custom-embed-image-overlay:hover,.progress-wrap:hover,#mobile-toggle-menu:hover,a:hover,.owl-nav div:hover,#goto-top:hover,.owl-dot span:hover,.vote-ready:hover,.prev-hcarousel:hover,.next-hcarousel:hover,.fotorama__nav__shaft:hover,.fotorama__arr:hover,.swiper-button-prev:hover,.swiper-button-next:hover').length!=0){
mouse_over_element=true;
}
if($('#supersized a:hover').length!=0){
mouse_over_element=false;
}
if($('form input:hover, form select:hover').length!=0){
mouse_over_element=true;
}
if(mouse_over_element){
$('body').addClass('cursor-on-element');
}else{
$('body').removeClass('cursor-on-element');
}});
}});
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&!1!==c.apply(a[e],d);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.apply(a[e],d))break}else if(g)for(;e<f&&!1!==c.call(a[e],e,a[e]);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.call(a[e],e,a[e]))break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position.toLowerCase();)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),!1===c&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&!0!==a?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(!0!==s.resume)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(!0!==f.loop&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&!0!==f.loop&&h(e),m&&!0===f.loop&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),!1!==f.queue&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(!1!==y.State.calls[p]){i=!0;break}!1===i&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),isAndroid:/Android/i.test(b.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(b.navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:2},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+([0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b||"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&!0===k.isAnimating&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||!1!==A.Names.prefixCheck(l)[1]||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),!1===y.State.isTicking&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&!1!==i.queue&&o.queue(a,i.queue,function(b,c){if(!0===c)return!0;y.velocityQueueEntryFlag=!0;var d=y.State.delayedElements.count++;y.State.delayedElements[d]=a;var e=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(d);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:e}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(!1!==y.mock&&(!0===y.mock?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,!1===i.queue)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(!0===b)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&!1===v.promiseRejectEmpty?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||!0!==v&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue))return!0;o.each(r,function(c,d){if(d===e)if((!0===v||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&(!0===f||""===f)&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return!0===j.backwards&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
!function(a){"use strict";"function"==typeof require&&"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(["velocity"],a):a()}(function(){"use strict";return function(a,b,c,d){var e=a.Velocity;if(!e||!e.Utilities)return void(b.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var f=e.Utilities,g=e.version,h={major:1,minor:1,patch:0};if(function(a,b){var c=[];return!(!a||!b)&&(f.each([a,b],function(a,b){var d=[];f.each(b,function(a,b){for(;b.toString().length<5;)b="0"+b;d.push(b)}),c.push(d.join(""))}),parseFloat(c[0])>parseFloat(c[1]))}(h,g)){var i="Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(i),new Error(i)}e.RegisterEffect=e.RegisterUI=function(a,b){function c(a,b,c,d){var g,h=0;f.each(a.nodeType?[a]:a,function(a,b){d&&(c+=a*d),g=b.parentNode;var i=["height","paddingTop","paddingBottom","marginTop","marginBottom"];"border-box"===e.CSS.getPropertyValue(b,"boxSizing").toString().toLowerCase()&&(i=["height"]),f.each(i,function(a,c){h+=parseFloat(e.CSS.getPropertyValue(b,c))})}),e.animate(g,{height:("In"===b?"+":"-")+"="+h},{queue:!1,easing:"ease-in-out",duration:c*("In"===b?.6:1)})}return e.Redirects[a]=function(d,g,h,i,j,k,l){var m=h===i-1,n=0;l=l||b.loop,"function"==typeof b.defaultDuration?b.defaultDuration=b.defaultDuration.call(j,j):b.defaultDuration=parseFloat(b.defaultDuration);for(var o=0;o<b.calls.length;o++)"number"==typeof(t=b.calls[o][1])&&(n+=t);var p=n>=1?0:b.calls.length?(1-n)/b.calls.length:1;for(o=0;o<b.calls.length;o++){var q=b.calls[o],r=q[0],s=1e3,t=q[1],u=q[2]||{},v={};if(void 0!==g.duration?s=g.duration:void 0!==b.defaultDuration&&(s=b.defaultDuration),v.duration=s*("number"==typeof t?t:p),v.queue=g.queue||"",v.easing=u.easing||"ease",v.delay=parseFloat(u.delay)||0,v.loop=!b.loop&&u.loop,v._cacheValues=u._cacheValues||!0,0===o){if(v.delay+=parseFloat(g.delay)||0,0===h&&(v.begin=function(){g.begin&&g.begin.call(j,j);var b=a.match(/(In|Out)$/);b&&"In"===b[0]&&void 0!==r.opacity&&f.each(j.nodeType?[j]:j,function(a,b){e.CSS.setPropertyValue(b,"opacity",0)}),g.animateParentHeight&&b&&c(j,b[0],s+v.delay,g.stagger)}),null!==g.display)if(void 0!==g.display&&"none"!==g.display)v.display=g.display;else if(/In$/.test(a)){var w=e.CSS.Values.getDisplayType(d);v.display="inline"===w?"inline-block":w}g.visibility&&"hidden"!==g.visibility&&(v.visibility=g.visibility)}if(o===b.calls.length-1){var x=function(){void 0!==g.display&&"none"!==g.display||!/Out$/.test(a)||f.each(j.nodeType?[j]:j,function(a,b){e.CSS.setPropertyValue(b,"display","none")}),g.complete&&g.complete.call(j,j),k&&k.resolver(j||d)};v.complete=function(){if(l&&e.Redirects[a](d,g,h,i,j,k,!0===l||Math.max(0,l-1)),b.reset){for(var c in b.reset)if(b.reset.hasOwnProperty(c)){var f=b.reset[c];void 0!==e.CSS.Hooks.registered[c]||"string"!=typeof f&&"number"!=typeof f||(b.reset[c]=[b.reset[c],b.reset[c]])}var n={duration:0,queue:!1};m&&(n.complete=x),e.animate(d,b.reset,n)}else m&&x()},"hidden"===g.visibility&&(v.visibility=g.visibility)}e.animate(d,r,v)}},e},e.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:11}],[{translateX:-11}],[{translateX:0}]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]}],[{opacity:[1,"easeInOutQuad"]}],[{opacity:[0,"easeInOutQuad"]}],[{opacity:[1,"easeInOutQuad"]}]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15}],[{rotateZ:-10}],[{rotateZ:5}],[{rotateZ:-5}],[{rotateZ:0}]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10}],[{opacity:0,rotateY:90}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15}],[{opacity:0,rotateX:90}]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.35],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.45]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var j in e.RegisterEffect.packagedEffects)e.RegisterEffect.packagedEffects.hasOwnProperty(j)&&e.RegisterEffect(j,e.RegisterEffect.packagedEffects[j]);e.RunSequence=function(a){var b=f.extend(!0,[],a);b.length>1&&(f.each(b.reverse(),function(a,c){var d=b[a+1];if(d){var g=c.o||c.options,h=d.o||d.options,i=g&&!1===g.sequenceQueue?"begin":"complete",j=h&&h[i],k={};k[i]=function(){var a=d.e||d.elements,b=a.nodeType?[a]:a;j&&j.call(b,b),e(c)},d.o?d.o=f.extend({},h,k):d.options=f.extend({},h,k)}}),b.reverse()),e(b[0])}}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,d=125,e=666,g=e,h=function(){b=!1,c=f.now(),a()},i=m?function(){m(h,{timeout:g}),g!==e&&(g=e)}:A(function(){k(h)},!0);return function(a){var e;(a=a===!0)&&(g=44),b||(b=!0,e=d-(f.now()-c),0>e&&(e=0),a||9>e&&m?i():k(i,e))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}(),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){if(!g[a]){var d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e)}}var e,f,g={};b.addEventListener&&(f=/\(|\)|\s|'/,e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==c){var b,g,h,i;a.defaultPrevented||("none"==a.target.preload&&(a.target.preload="auto"),b=a.target.getAttribute("data-link"),b&&d(b,!0),b=a.target.getAttribute("data-script"),b&&d(b),b=a.target.getAttribute("data-require"),b&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),h=a.target.getAttribute("data-bg"),h&&(a.detail.firesLoad=!0,g=function(){a.target.style.backgroundImage="url("+(f.test(h)?JSON.stringify(h):h)+")",a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(h,g)),i=a.target.getAttribute("data-poster"),i&&(a.detail.firesLoad=!0,g=function(){a.target.poster=i,a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(i,g)))}},!1))});
;(function ($, window, document, undefined){
"use strict";
if($('ul.mtree').length){
var collapsed=true;
var close_same_level=true;
var duration=400;
var listAnim=true;
var easing='easeInOutQuad';
if($('.vertical-menu-outer').hasClass('show-current-menu-open')||$('.responsive-menu-wrap').hasClass('show-current-menu-open')){
close_same_level=false;
}
$('.mtree ul').css({'overflow':'hidden', 'height': (collapsed) ? 0:'auto', 'display': (collapsed) ? 'none':'block' });
var node=$('.mtree li:has(ul)');
node.each(function(index, val){
$(this).children(':first-child').css('cursor', 'pointer')
$(this).addClass('mtree-node mtree-' + ((collapsed) ? 'closed':'open'));
$(this).children('ul').addClass('mtree-level-' + ($(this).parentsUntil($('ul.mtree'), 'ul').length + 1));
});
$('.mtree li > *:first-child').on('click.mtree-active', function(e){
if($(this).parent().hasClass('mtree-closed')){
$('.mtree-active').not($(this).parent()).removeClass('mtree-active');
$(this).parent().addClass('mtree-active');
}else if($(this).parent().hasClass('mtree-open')){
$(this).parent().removeClass('mtree-active');
}else{
$('.mtree-active').not($(this).parent()).removeClass('mtree-active');
$(this).parent().toggleClass('mtree-active');
}});
if($('.vertical-menu-outer').hasClass('show-current-menu-open')||$('.responsive-menu-wrap').hasClass('show-current-menu-open')){
$('.mtree li').find('.current-menu-item').parents('.sub-menu').css({'overflow':'hidden', 'height': 'auto', 'display': 'block' });
$('.mtree li').parents('.current-menu-ancestor').removeClass('mtree-closed').addClass('mtree-open').addClass('mtree-active');
}
node.children(':first-child').on('click.mtree', function(e){
var el=$(this).parent().children('ul').first();
var isOpen=$(this).parent().hasClass('mtree-open');
if((close_same_level||$('.csl').hasClass('active'))&&!isOpen){
var close_items=$(this).closest('ul').children('.mtree-open').not($(this).parent()).children('ul');
if($.Velocity){
close_items.velocity({
height: 0
}, {
duration: duration,
easing: easing,
display: 'none',
delay: 100,
complete: function(){
setNodeClass($(this).parent(), true)
}});
}else{
close_items.delay(100).slideToggle(duration, function(){
setNodeClass($(this).parent(), true);
});
}}
el.css({'height': 'auto'});
if(!isOpen&&$.Velocity&&listAnim) el.find(' > li, li.mtree-open > ul > li').css({'opacity':0}).velocity('stop').velocity('list');
if($.Velocity){
el.velocity('stop').velocity({
height: isOpen ? [0, el.outerHeight()]:[el.outerHeight(), 0]
},{
queue: false,
duration: duration,
easing: easing,
display: isOpen ? 'none':'block',
begin: setNodeClass($(this).parent(), isOpen),
complete: function(){
if(!isOpen) $(this).css('height', 'auto');
}});
}else{
setNodeClass($(this).parent(), isOpen);
el.slideToggle(duration);
}
e.preventDefault();
});
function setNodeClass(el, isOpen){
if(isOpen){
el.removeClass('mtree-open').addClass('mtree-closed');
}else{
el.removeClass('mtree-closed').addClass('mtree-open');
}}
if($.Velocity&&listAnim){
$.Velocity.Redirects.list=function (element, options, index, size){
$.Velocity.animate(element, {
opacity: [1,0],
translateY: [0, -(index+12)]
}, {
delay: index*(duration/size/1.2),
duration: duration,
easing: easing
});
};}
if($('.mtree').css('opacity')==0){
if($.Velocity){
$('.mtree').css('opacity', 1).children().css('opacity', 0).velocity('list');
}else{
$('.mtree').show(200);
}}
$('body').addClass('menu-loaded');
}}(jQuery, this, this.document));
;(function ($, w){
"use strict";
var methods=(function (){
var c={
bcClass: 'sf-breadcrumb',
menuClass: 'sf-js-enabled',
anchorClass: 'sf-with-ul',
menuArrowClass: 'sf-arrows'
},
ios=(function (){
var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);
if(ios){
$(w).on('load', function(){
$('body').children().on('click', $.noop);
});
}
return ios;
})(),
wp7=(function (){
var style=document.documentElement.style;
return ('behavior' in style&&'fill' in style&&/iemobile/i.test(navigator.userAgent));
})(),
unprefixedPointerEvents=(function (){
return (!!w.PointerEvent);
})(),
toggleMenuClasses=function ($menu, o){
var classes=c.menuClass;
if(o.cssArrows){
classes +=' ' + c.menuArrowClass;
}
$menu.toggleClass(classes);
},
setPathToCurrent=function ($menu, o){
return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
.addClass(o.hoverClass + ' ' + c.bcClass)
.filter(function (){
return ($(this).children(o.popUpSelector).hide().show().length);
}).removeClass(o.pathClass);
},
toggleAnchorClass=function ($li){
$li.children('a').toggleClass(c.anchorClass);
},
toggleTouchAction=function ($menu){
var msTouchAction=$menu.css('ms-touch-action');
var touchAction=$menu.css('touch-action');
touchAction=touchAction||msTouchAction;
touchAction=(touchAction==='pan-y') ? 'auto':'pan-y';
$menu.css({
'ms-touch-action': touchAction,
'touch-action': touchAction
});
},
applyHandlers=function ($menu, o){
var targets='li:has(' + o.popUpSelector + ')';
if($.fn.hoverIntent&&!o.disableHI){
$menu.hoverIntent(over, out, targets);
}else{
$menu
.on('mouseenter.superfish', targets, over)
.on('mouseleave.superfish', targets, out);
}
var touchevent='MSPointerDown.superfish';
if(unprefixedPointerEvents){
touchevent='pointerdown.superfish';
}
if(!ios){
touchevent +=' touchend.superfish';
}
if(wp7){
touchevent +=' mousedown.superfish';
}
$menu
.on('focusout.superfish', 'li', out)
.on(touchevent, 'a', o, touchHandler);
},
touchHandler=function (e){
var $this=$(this),
$ul=$this.siblings(e.data.popUpSelector);
if($ul.length > 0&&$ul.is(':hidden')){
$this.one('click.superfish', false);
if(e.type==='MSPointerDown'||e.type==='pointerdown'){
$this.trigger('focus');
}else{
$.proxy(over, $this.parent('li'))();
}}
},
over=function (){
var $this=$(this),
o=getOptions($this);
clearTimeout(o.sfTimer);
$this.siblings().superfish('hide').end().superfish('show');
},
out=function (){
var $this=$(this),
o=getOptions($this);
if(ios){
$.proxy(close, $this, o)();
}else{
clearTimeout(o.sfTimer);
o.sfTimer=setTimeout($.proxy(close, $this, o), o.delay);
}},
close=function (o){
o.retainPath=($.inArray(this[0], o.$path) > -1);
this.superfish('hide');
if(!this.parents('.' + o.hoverClass).length){
o.onIdle.call(getMenu(this));
if(o.$path.length){
$.proxy(over, o.$path)();
}}
},
getMenu=function ($el){
return $el.closest('.' + c.menuClass);
},
getOptions=function ($el){
return getMenu($el).data('sf-options');
};
return {
hide: function (instant){
if(this.length){
var $this=this,
o=getOptions($this);
if(!o){
return this;
}
var not=(o.retainPath===true) ? o.$path:'',
$ul=$this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
speed=o.speedOut;
if(instant){
$ul.show();
speed=0;
}
o.retainPath=false;
o.onBeforeHide.call($ul);
$ul.stop(true, true).hide();
var $this=$(this);
o.onHide.call($this);
}
return this;
},
show: function (){
var o=getOptions(this);
if(!o){
return this;
}
var $this=this.addClass(o.hoverClass),
$ul=$this.children(o.popUpSelector);
o.onBeforeShow.call($ul);
$ul.stop(true, true).show();
o.onShow.call($ul);
var subUL=this.children('ul').first();
if(subUL.length){
var winWidth=$(window).width(),
locUL=subUL.offset().left + subUL.width();
if(( locUL > winWidth||subUL.parent().parent().hasClass('on-viewport'))){
var parent=subUL.parent().parent();
if(parent.hasClass('sf-menu')){
subUL.css('left', '-' +(locUL - winWidth) + 'px');
}else{
subUL.addClass('on-viewport');
subUL.css('left', '-' +(subUL.width()) + 'px');
}}
}
return this;
},
destroy: function (){
return this.each(function (){
var $this=$(this),
o=$this.data('sf-options'),
$hasPopUp;
if(!o){
return false;
}
$hasPopUp=$this.find(o.popUpSelector).parent('li');
clearTimeout(o.sfTimer);
toggleMenuClasses($this, o);
toggleAnchorClass($hasPopUp);
toggleTouchAction($this);
$this.off('.superfish').off('.hoverIntent');
$hasPopUp.children(o.popUpSelector).attr('style', function (i, style){
return style.replace(/display[^;]+;?/g, '');
});
o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
o.onDestroy.call($this);
$this.removeData('sf-options');
});
},
init: function (op){
return this.each(function (){
var $this=$(this);
if($this.data('sf-options')){
return false;
}
var o=$.extend({}, $.fn.superfish.defaults, op),
$hasPopUp=$this.find(o.popUpSelector).parent('li');
o.$path=setPathToCurrent($this, o);
$this.data('sf-options', o);
toggleMenuClasses($this, o);
toggleAnchorClass($hasPopUp);
toggleTouchAction($this);
applyHandlers($this, o);
$hasPopUp.not('.' + c.bcClass).superfish('hide', true);
o.onInit.call(this);
});
}};})();
$.fn.superfish=function (method, args){
if(methods[method]){
return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
}
else if(typeof method==='object'||! method){
return methods.init.apply(this, arguments);
}else{
return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
}};
$.fn.superfish.defaults={
popUpSelector: 'ul,.sf-mega',
hoverClass: 'sfHover',
pathClass: 'overrideThisToUse',
pathLevels: 1,
delay: 800,
animation: {opacity: 'show'},
animationOut: {opacity: 'hide'},
speed: 'normal',
speedOut: 'fast',
cssArrows: true,
disableHI: false,
onInit: $.noop,
onBeforeShow: $.noop,
onShow: $.noop,
onBeforeHide: $.noop,
onHide: $.noop,
onIdle: $.noop,
onDestroy: $.noop
};})(jQuery, window);
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
!function(I){I.fn.hoverIntent=function(e,t,n){function r(e){o=e.pageX,v=e.pageY}var o,v,i,u,s={interval:100,sensitivity:6,timeout:0},s="object"==typeof e?I.extend(s,e):I.isFunction(t)?I.extend(s,{over:e,out:t,selector:n}):I.extend(s,{over:e,out:e,selector:t}),h=function(e,t){if(t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((i-o)*(i-o)+(u-v)*(u-v))<s.sensitivity)return I(t).off("mousemove.hoverIntent",r),t.hoverIntent_s=!0,s.over.apply(t,[e]);i=o,u=v,t.hoverIntent_t=setTimeout(function(){h(e,t)},s.interval)},t=function(e){var n=I.extend({},e),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===e.type?(i=n.pageX,u=n.pageY,I(o).on("mousemove.hoverIntent",r),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){h(n,o)},s.interval))):(I(o).off("mousemove.hoverIntent",r),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){var e,t;e=n,(t=o).hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,s.out.apply(t,[e])},s.timeout)))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},s.selector)}}(jQuery);
(function($){
var $event=$.event,
$special,
resizeTimeout;
$special=$event.special.debouncedresize={
setup: function(){
$(this).on("resize", $special.handler);
},
teardown: function(){
$(this).off("resize", $special.handler);
},
handler: function(event, execAsap){
var context=this,
args=arguments,
dispatch=function(){
event.type="debouncedresize";
$event.dispatch.apply(context, args);
};
if(resizeTimeout){
clearTimeout(resizeTimeout);
}
execAsap ?
dispatch() :
resizeTimeout=setTimeout(dispatch, $special.threshold);
},
threshold: 150
};})(jQuery);
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
(function(n,h){"function"===typeof define&&define.amd?define([],h):"object"===typeof module&&module.exports?module.exports=h():n.Rellax=h()})("undefined"!==typeof window?window:global,function(){var n=function(h,p){var a=Object.create(n.prototype),l=0,r=0,k=0,t=0,c=[],u=!0,B=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},q=null,C=window.cancelAnimationFrame||
window.mozCancelAnimationFrame||clearTimeout,D=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var b=["Webkit","Moz","ms"],e;for(e in b)if(void 0!==a.style[b[e]+"Transform"])return b[e]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}};p&&Object.keys(p).forEach(function(d){a.options[d]=p[d]});h||(h=".rellax");var m="string"===typeof h?document.querySelectorAll(h):
[h];if(0<m.length){a.elems=m;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(m=document.querySelector(a.options.wrapper))a.options.wrapper=m;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var w=function(){for(var d=0;d<c.length;d++)a.elems[d].style.cssText=c[d].style;c=[];r=window.innerHeight;t=window.innerWidth;x();for(d=0;d<a.elems.length;d++){var b=a.elems[d],e=b.getAttribute("data-rellax-percentage"),g=b.getAttribute("data-rellax-speed"),h=b.getAttribute("data-rellax-zindex")||
0,l=b.getAttribute("data-rellax-min"),n=b.getAttribute("data-rellax-max"),v=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&(v=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var f=a.options.vertical?e||a.options.center?v:0:0,k=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||
document.documentElement.scrollLeft||document.body.scrollLeft:0:0;v=f+b.getBoundingClientRect().top;var m=b.clientHeight||b.offsetHeight||b.scrollHeight,p=k+b.getBoundingClientRect().left,q=b.clientWidth||b.offsetWidth||b.scrollWidth;f=e?e:(f-v+r)/(m+r);e=e?e:(k-p+t)/(q+t);a.options.center&&(f=e=.5);g=g?g:a.options.speed;e=y(e,f,g);b=b.style.cssText;f="";0<=b.indexOf("transform")&&(f=b.indexOf("transform"),f=b.slice(f),f=(k=f.indexOf(";"))?" "+f.slice(11,k).replace(/\s/g,""):" "+f.slice(11).replace(/\s/g,
""));c.push({baseX:e.x,baseY:e.y,top:v,left:p,height:m,width:q,speed:g,style:b,transform:f,zindex:h,min:l,max:n})}u&&(window.addEventListener("resize",w),u=!1);z()},x=function(){var d=l,b=k;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;k=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;a.options.relativeToWrapper&&
(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||b!=k&&a.options.horizontal?!0:!1},y=function(d,b,e){var c={};d=100*e*(1-d);b=100*e*(1-b);c.x=a.options.round?Math.round(d):Math.round(100*d)/100;c.y=a.options.round?Math.round(b):Math.round(100*b)/100;return c},A=function(){x()&&!1===u&&z();q=B(A)},z=function(){for(var d,b=0;b<a.elems.length;b++){d=y((k-c[b].left+t)/(c[b].width+t),(l-
c[b].top+r)/(c[b].height+r),c[b].speed);var e=d.y-c[b].baseY,g=d.x-c[b].baseX;null!==c[b].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=c[b].min?c[b].min:e),a.options.horizontal&&!a.options.vertical&&(g=g<=c[b].min?c[b].min:g));null!==c[b].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=c[b].max?c[b].max:e),a.options.horizontal&&!a.options.vertical&&(g=g>=c[b].max?c[b].max:g));a.elems[b].style[D]="translate3d("+(a.options.horizontal?g:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+c[b].zindex+
"px) "+c[b].transform}a.options.callback(d)};a.destroy=function(){for(var d=0;d<a.elems.length;d++)a.elems[d].style.cssText=c[d].style;u||(window.removeEventListener("resize",w),u=!0);C(q);q=null};w();A();a.refresh=w;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return n});
(function($){
"use strict";
$.fn.fitVids=function(options){
var settings={
customSelector: null
};
if(!document.getElementById('fit-vids-style')){
var div=document.createElement('div'),
ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];
div.className='fit-vids-style';
div.id='fit-vids-style';
div.style.display='none';
div.innerHTML='&shy;<style>         \
.fluid-width-video-wrapper {        \
width: 100%;                     \
position: relative;              \
padding: 0;                      \
}                                   \
\
.fluid-width-video-wrapper iframe,  \
.fluid-width-video-wrapper object,  \
.fluid-width-video-wrapper embed {  \
position: absolute;              \
top: 0;                          \
left: 0;                         \
width: 100%;                     \
height: 100%;                    \
}                                   \
</style>';
ref.parentNode.insertBefore(div,ref);
}
if(options){
$.extend(settings, options);
}
return this.each(function(){
var selectors=[
"iframe[src*='player.vimeo.com']",
"iframe[src*='youtube.com']",
"iframe[src*='youtube-nocookie.com']",
"iframe[src*='kickstarter.com'][src*='video.html']",
"object",
"embed"
];
if(settings.customSelector){
selectors.push(settings.customSelector);
}
var $allVideos=$(this).find(selectors.join(','));
$allVideos=$allVideos.not("object object");
$allVideos.each(function(){
var $this=$(this);
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){ return; }
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10):$this.height(),
width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10):$this.width(),
aspectRatio=height / width;
if(!$this.attr('id')){
var videoID='fitvid' + Math.floor(Math.random()*999999);
$this.attr('id', videoID);
}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
$this.removeAttr('height').removeAttr('width');
});
});
};})(jQuery);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){var t,e,n,W,C,o,s,r,l,a,i,h;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function H(t,e){return parseInt(x.css(t,e),10)||0}x.ui=x.ui||{},x.ui.version="1.12.1",
x.extend(x.expr[":"],{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),x.ui.escapeSelector=(e=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(e,"\\$1")}),
x.ui.focusable=function(t,e){var i,n,o,s,r=t.nodeName.toLowerCase();return"area"===r?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(0<(n=x("img[usemap='#"+n+"']")).length&&n.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(r)?(o=!t.disabled)&&(s=x(t).closest("fieldset")[0])&&(o=!s.disabled):o="a"===r&&t.href||e,o&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}(x(t)))},x.extend(x.expr[":"],{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element.form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
"1.7"===x.fn.jquery.substring(0,3)&&(x.each(["Width","Height"],function(t,i){var o="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),s={innerWidth:x.fn.innerWidth,innerHeight:x.fn.innerHeight,outerWidth:x.fn.outerWidth,outerHeight:x.fn.outerHeight};function r(t,e,i,n){return x.each(o,function(){e-=parseFloat(x.css(t,"padding"+this))||0,i&&(e-=parseFloat(x.css(t,"border"+this+"Width"))||0),n&&(e-=parseFloat(x.css(t,"margin"+this))||0)}),e}x.fn["inner"+i]=function(t){return void 0===t?s["inner"+i].call(this):this.each(function(){x(this).css(n,r(this,t)+"px")})},x.fn["outer"+i]=function(t,e){return"number"!=typeof t?s["outer"+i].call(this,t):this.each(function(){x(this).css(n,r(this,t,!0,e)+"px")})}}),x.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
x.fn.labels=function(){var t,e,i;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.ui.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e))},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,i=x.fn.position,x.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,e=x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),i=e.children()[0];return x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=x.isWindow(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){if(!f||!f.of)return i.apply(this,arguments);f=x.extend({},f);var u,d,p,g,m,t,v=x(f.of),b=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(b),y=(f.collision||"flip").split(" "),_={},e=9===(t=(e=v)[0]).nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:x.isWindow(t)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:t.preventDefault?{width:0,height:0,offset:{top:t.pageY,left:t.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()};return v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),u=E(_.at,d,p),m.left+=u[0],m.top+=u[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=H(this,"marginLeft"),n=H(this,"marginTop"),o=l+e+H(this,"marginRight")+w.width,s=a+n+H(this,"marginBottom")+w.height,h=x.extend({},m),c=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=c[0],h.top+=c[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[y[t]]&&x.ui.position[y[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[u[0]+c[0],u[1]+c[1]],my:f.my,at:f.at,within:b,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i=e.within,n=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,s=t.left-e.collisionPosition.marginLeft,r=n-s,l=s+e.collisionWidth-o-n;e.collisionWidth>o?0<r&&l<=0?(i=t.left+r+e.collisionWidth-o-n,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?n+o-e.collisionWidth:n:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i=e.within,n=i.isWindow?i.scrollTop:i.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,s=i.isWindow?i.scrollLeft:i.offset.left,r=t.left-e.collisionPosition.marginLeft,l=r-s,a=r+e.collisionWidth-o-s,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,i="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,r=-2*e.offset[0];l<0?((n=t.left+h+i+r+e.collisionWidth-o-n)<0||n<C(l))&&(t.left+=h+i+r):0<a&&(0<(s=t.left-e.collisionPosition.marginLeft+h+i+r-s)||C(s)<a)&&(t.left+=h+i+r)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,s=i.isWindow?i.scrollTop:i.offset.top,r=t.top-e.collisionPosition.marginTop,l=r-s,a=r+e.collisionHeight-o-s,h="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,i="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,r=-2*e.offset[1];l<0?((n=t.top+h+i+r+e.collisionHeight-o-n)<0||n<C(l))&&(t.top+=h+i+r):0<a&&(0<(s=t.top-e.collisionPosition.marginTop+h+i+r-s)||C(s)<a)&&(t.top+=h+i+r)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=!(i=i||e.body).nodeName?e.body:i},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
x.extend(x.expr[":"],{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
x.fn.extend({uniqueId:(h=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++h)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
var c,f=0,u=Array.prototype.slice;x.cleanData=(c=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)try{(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove")}catch(t){}c(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),x.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr[":"][a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}x.isFunction(n)?r[e]=function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}:r[e]=n}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=u.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],n[o].hasOwnProperty(e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=u.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?x.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("no such method '"+i+"' for "+s+" widget instance"):x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=f++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?x(x.unique(i.get().concat(o.element.get()))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return o=x.extend({element:this.element,classes:this.options.classes||{}},o),this._on(o.element,{remove:"_untrackClassesElement"}),o.keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,i={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return i.element.toggleClass(this._classes(i),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),t=n[1]+l.eventNamespace,n=n[2];n?r.on(t,n,i):s.on(t,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e).off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!(x.isFunction(s)&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s,o=!x.isEmptyObject(t="number"==typeof(t=t||{})?{duration:t}:t);t.complete=i,t.delay&&e.delay(t.delay),o&&x.effects&&x.effects.effect[n]?e[s](t):n!==s&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery)}(function(r){return r.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var t=r(this).attr("title")||"";return r("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var e=(t.attr("aria-describedby")||"").split(/\s+/);e.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",r.trim(e.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),e=(t.attr("aria-describedby")||"").split(/\s+/),i=r.inArray(i,e);-1!==i&&e.splice(i,1),t.removeData("ui-tooltip-id"),(e=r.trim(e.join(" ")))?t.attr("aria-describedby",e):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=r("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=r([])},_setOption:function(t,i){var e=this;this._super(t,i),"content"===t&&r.each(this.tooltips,function(t,i){e._updateContent(i.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var o=this;r.each(this.tooltips,function(t,i){var e=r.Event("blur");e.target=e.currentTarget=i.element[0],o.close(e,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var t=r(this);if(t.is("[title]"))return t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var t=r(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))}),this.disabledTitles=r([])},open:function(t){var e=this,i=r(t?t.target:this.element).closest(this.options.items);i.length&&!i.data("ui-tooltip-id")&&(i.attr("title")&&i.data("ui-tooltip-title",i.attr("title")),i.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&i.parents().each(function(){var t,i=r(this);i.data("ui-tooltip-open")&&((t=r.Event("blur")).target=t.currentTarget=this,e.close(t,!0)),i.attr("title")&&(i.uniqueId(),e.parents[this.id]={element:this,title:i.attr("title")},i.attr("title",""))}),this._registerCloseHandlers(t,i),this._updateContent(i,t))},_updateContent:function(i,e){var t=this.options.content,o=this,n=e?e.type:null;if("string"==typeof t||t.nodeType||t.jquery)return this._open(e,i,t);(t=t.call(i[0],function(t){o._delay(function(){i.data("ui-tooltip-open")&&(e&&(e.type=n),this._open(e,i,t))})}))&&this._open(e,i,t)},_open:function(t,i,e){var o,n,s,l=r.extend({},this.options.position);function a(t){l.of=t,n.is(":hidden")||n.position(l)}e&&((o=this._find(i))?o.tooltip.find(".ui-tooltip-content").html(e):(i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),n=o.tooltip,this._addDescribedBy(i,n.attr("id")),n.find(".ui-tooltip-content").html(e),this.liveRegion.children().hide(),(e=r("<div>").html(n.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),e.removeAttr("id").find("[id]").removeAttr("id"),e.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:a}),a(t)):n.position(r.extend({of:i},this.options.position)),n.hide(),this._show(n,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(s=this.delayedShow=setInterval(function(){n.is(":visible")&&(a(l.of),clearInterval(s))},r.fx.interval)),this._trigger("open",t,{tooltip:n})))},_registerCloseHandlers:function(t,i){var e={keyup:function(t){t.keyCode===r.ui.keyCode.ESCAPE&&((t=r.Event(t)).currentTarget=i[0],this.close(t,!0))}};i[0]!==this.element[0]&&(e.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(e.mouseleave="close"),t&&"focusin"!==t.type||(e.focusout="close"),this._on(!0,i,e)},close:function(t){var i,e=this,o=r(t?t.currentTarget:this.element),n=this._find(o);n?(i=n.tooltip,n.closing||(clearInterval(this.delayedShow),o.data("ui-tooltip-title")&&!o.attr("title")&&o.attr("title",o.data("ui-tooltip-title")),this._removeDescribedBy(o),n.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){e._removeTooltip(r(this))}),o.removeData("ui-tooltip-open"),this._off(o,"mouseleave focusout keyup"),o[0]!==this.element[0]&&this._off(o,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&r.each(this.parents,function(t,i){r(i.element).attr("title",i.title),delete e.parents[t]}),n.closing=!0,this._trigger("close",t,{tooltip:i}),n.hiding||(n.closing=!1))):o.removeData("ui-tooltip-open")},_tooltip:function(t){var i=r("<div>").attr("role","tooltip"),e=r("<div>").appendTo(i),o=i.uniqueId().attr("id");return this._addClass(e,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(t)),this.tooltips[o]={element:t,tooltip:i}},_find:function(t){t=t.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){t=t.closest(".ui-front, dialog");return t=!t.length?this.document[0].body:t},_destroy:function(){var o=this;r.each(this.tooltips,function(t,i){var e=r.Event("blur"),i=i.element;e.target=e.currentTarget=i[0],o.close(e,!0),r("#"+t).remove(),i.data("ui-tooltip-title")&&(i.attr("title")||i.attr("title",i.data("ui-tooltip-title")),i.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==r.uiBackCompat&&r.widget("ui.tooltip",r.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),r.ui.tooltip});
(function(){
var $, AbstractChosen, Chosen, SelectParser, _ref,
__bind=function(fn, me){ return function(){ return fn.apply(me, arguments); };},
__hasProp={}.hasOwnProperty,
__extends=function(child, parent){ for (var key in parent){ if(__hasProp.call(parent, key)) child[key]=parent[key]; } function ctor(){ this.constructor=child; } ctor.prototype=parent.prototype; child.prototype=new ctor(); child.__super__=parent.prototype; return child; };
SelectParser=(function(){
function SelectParser(){
this.options_index=0;
this.parsed=[];
}
SelectParser.prototype.add_node=function(child){
if(child.nodeName.toUpperCase()==="OPTGROUP"){
return this.add_group(child);
}else{
return this.add_option(child);
}};
SelectParser.prototype.add_group=function(group){
var group_position, option, _i, _len, _ref, _results;
group_position=this.parsed.length;
this.parsed.push({
array_index: group_position,
group: true,
label: this.escapeExpression(group.label),
title: group.title ? group.title:void 0,
children: 0,
disabled: group.disabled,
classes: group.className
});
_ref=group.childNodes;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
option=_ref[_i];
_results.push(this.add_option(option, group_position, group.disabled));
}
return _results;
};
SelectParser.prototype.add_option=function(option, group_position, group_disabled){
if(option.nodeName.toUpperCase()==="OPTION"){
if(option.text!==""){
if(group_position!=null){
this.parsed[group_position].children +=1;
}
this.parsed.push({
array_index: this.parsed.length,
options_index: this.options_index,
value: option.value,
text: option.text,
html: option.innerHTML,
title: option.title ? option.title:void 0,
selected: option.selected,
disabled: group_disabled===true ? group_disabled:option.disabled,
group_array_index: group_position,
group_label: group_position!=null ? this.parsed[group_position].label:null,
classes: option.className,
style: option.style.cssText
});
}else{
this.parsed.push({
array_index: this.parsed.length,
options_index: this.options_index,
empty: true
});
}
return this.options_index +=1;
}};
SelectParser.prototype.escapeExpression=function(text){
var map, unsafe_chars;
if((text==null)||text===false){
return "";
}
if(!/[\&\<\>\"\'\`]/.test(text)){
return text;
}
map={
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#x27;",
"`": "&#x60;"
};
unsafe_chars=/&(?!\w+;)|[\<\>\"\'\`]/g;
return text.replace(unsafe_chars, function(chr){
return map[chr]||"&amp;";
});
};
return SelectParser;
})();
SelectParser.select_to_array=function(select){
var child, parser, _i, _len, _ref;
parser=new SelectParser();
_ref=select.childNodes;
for (_i=0, _len=_ref.length; _i < _len; _i++){
child=_ref[_i];
parser.add_node(child);
}
return parser.parsed;
};
AbstractChosen=(function(){
function AbstractChosen(form_field, options){
this.form_field=form_field;
this.options=options!=null ? options:{};
this.label_click_handler=__bind(this.label_click_handler, this);
if(!AbstractChosen.browser_is_supported()){
return;
}
this.is_multiple=this.form_field.multiple;
this.set_default_text();
this.set_default_values();
this.setup();
this.set_up_html();
this.register_observers();
this.on_ready();
}
AbstractChosen.prototype.set_default_values=function(){
var _this=this;
this.click_test_action=function(evt){
return _this.test_active_click(evt);
};
this.activate_action=function(evt){
return _this.activate_field(evt);
};
this.active_field=false;
this.mouse_on_container=false;
this.results_showing=false;
this.result_highlighted=null;
this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className);
this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text==="" ? this.options.allow_single_deselect:false;
this.disable_search_threshold=this.options.disable_search_threshold||0;
this.disable_search=this.options.disable_search||false;
this.enable_split_word_search=this.options.enable_split_word_search!=null ? this.options.enable_split_word_search:true;
this.group_search=this.options.group_search!=null ? this.options.group_search:true;
this.search_contains=this.options.search_contains||false;
this.single_backstroke_delete=this.options.single_backstroke_delete!=null ? this.options.single_backstroke_delete:true;
this.max_selected_options=this.options.max_selected_options||Infinity;
this.inherit_select_classes=this.options.inherit_select_classes||false;
this.display_selected_options=this.options.display_selected_options!=null ? this.options.display_selected_options:true;
this.display_disabled_options=this.options.display_disabled_options!=null ? this.options.display_disabled_options:true;
this.include_group_label_in_selected=this.options.include_group_label_in_selected||false;
this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY;
this.case_sensitive_search=this.options.case_sensitive_search||false;
return this.hide_results_on_select=this.options.hide_results_on_select!=null ? this.options.hide_results_on_select:true;
};
AbstractChosen.prototype.set_default_text=function(){
if(this.form_field.getAttribute("data-placeholder")){
this.default_text=this.form_field.getAttribute("data-placeholder");
}else if(this.is_multiple){
this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text;
}else{
this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text;
}
this.default_text=this.escape_html(this.default_text);
return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text;
};
AbstractChosen.prototype.choice_label=function(item){
if(this.include_group_label_in_selected&&(item.group_label!=null)){
return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
}else{
return item.html;
}};
AbstractChosen.prototype.mouse_enter=function(){
return this.mouse_on_container=true;
};
AbstractChosen.prototype.mouse_leave=function(){
return this.mouse_on_container=false;
};
AbstractChosen.prototype.input_focus=function(evt){
var _this=this;
if(this.is_multiple){
if(!this.active_field){
return setTimeout((function(){
return _this.container_mousedown();
}), 50);
}}else{
if(!this.active_field){
return this.activate_field();
}}
};
AbstractChosen.prototype.input_blur=function(evt){
var _this=this;
if(!this.mouse_on_container){
this.active_field=false;
return setTimeout((function(){
return _this.blur_test();
}), 100);
}};
AbstractChosen.prototype.label_click_handler=function(evt){
if(this.is_multiple){
return this.container_mousedown(evt);
}else{
return this.activate_field();
}};
AbstractChosen.prototype.results_option_build=function(options){
var content, data, data_content, shown_results, _i, _len, _ref;
content='';
shown_results=0;
_ref=this.results_data;
for (_i=0, _len=_ref.length; _i < _len; _i++){
data=_ref[_i];
data_content='';
if(data.group){
data_content=this.result_add_group(data);
}else{
data_content=this.result_add_option(data);
}
if(data_content!==''){
shown_results++;
content +=data_content;
}
if(options!=null ? options.first:void 0){
if(data.selected&&this.is_multiple){
this.choice_build(data);
}else if(data.selected&&!this.is_multiple){
this.single_set_selected_text(this.choice_label(data));
}}
if(shown_results >=this.max_shown_results){
break;
}}
return content;
};
AbstractChosen.prototype.result_add_option=function(option){
var classes, option_el;
if(!option.search_match){
return '';
}
if(!this.include_option_in_results(option)){
return '';
}
classes=[];
if(!option.disabled&&!(option.selected&&this.is_multiple)){
classes.push("active-result");
}
if(option.disabled&&!(option.selected&&this.is_multiple)){
classes.push("disabled-result");
}
if(option.selected){
classes.push("result-selected");
}
if(option.group_array_index!=null){
classes.push("group-option");
}
if(option.classes!==""){
classes.push(option.classes);
}
option_el=document.createElement("li");
option_el.className=classes.join(" ");
option_el.style.cssText=option.style;
option_el.setAttribute("data-option-array-index", option.array_index);
option_el.innerHTML=option.search_text;
if(option.title){
option_el.title=option.title;
}
return this.outerHTML(option_el);
};
AbstractChosen.prototype.result_add_group=function(group){
var classes, group_el;
if(!(group.search_match||group.group_match)){
return '';
}
if(!(group.active_options > 0)){
return '';
}
classes=[];
classes.push("group-result");
if(group.classes){
classes.push(group.classes);
}
group_el=document.createElement("li");
group_el.className=classes.join(" ");
group_el.innerHTML=group.search_text;
if(group.title){
group_el.title=group.title;
}
return this.outerHTML(group_el);
};
AbstractChosen.prototype.results_update_field=function(){
this.set_default_text();
if(!this.is_multiple){
this.results_reset_cleanup();
}
this.result_clear_highlight();
this.results_build();
if(this.results_showing){
return this.winnow_results();
}};
AbstractChosen.prototype.reset_single_select_options=function(){
var result, _i, _len, _ref, _results;
_ref=this.results_data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
result=_ref[_i];
if(result.selected){
_results.push(result.selected=false);
}else{
_results.push(void 0);
}}
return _results;
};
AbstractChosen.prototype.results_toggle=function(){
if(this.results_showing){
return this.results_hide();
}else{
return this.results_show();
}};
AbstractChosen.prototype.results_search=function(evt){
if(this.results_showing){
return this.winnow_results();
}else{
return this.results_show();
}};
AbstractChosen.prototype.winnow_results=function(){
var escapedSearchText, highlightRegex, option, regex, results, results_group, searchText, startpos, text, _i, _len, _ref;
this.no_results_clear();
results=0;
searchText=this.get_search_text();
escapedSearchText=searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
regex=this.get_search_regex(escapedSearchText);
highlightRegex=this.get_highlight_regex(escapedSearchText);
_ref=this.results_data;
for (_i=0, _len=_ref.length; _i < _len; _i++){
option=_ref[_i];
option.search_match=false;
results_group=null;
if(this.include_option_in_results(option)){
if(option.group){
option.group_match=false;
option.active_options=0;
}
if((option.group_array_index!=null)&&this.results_data[option.group_array_index]){
results_group=this.results_data[option.group_array_index];
if(results_group.active_options===0&&results_group.search_match){
results +=1;
}
results_group.active_options +=1;
}
option.search_text=option.group ? option.label:option.html;
if(!(option.group&&!this.group_search)){
option.search_match=this.search_string_match(option.search_text, regex);
if(option.search_match&&!option.group){
results +=1;
}
if(option.search_match){
if(searchText.length){
startpos=option.search_text.search(highlightRegex);
text=option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
option.search_text=text.substr(0, startpos) + '<em>' + text.substr(startpos);
}
if(results_group!=null){
results_group.group_match=true;
}}else if((option.group_array_index!=null)&&this.results_data[option.group_array_index].search_match){
option.search_match=true;
}}
}}
this.result_clear_highlight();
if(results < 1&&searchText.length){
this.update_results_content("");
return this.no_results(searchText);
}else{
this.update_results_content(this.results_option_build());
return this.winnow_results_set_highlight();
}};
AbstractChosen.prototype.get_search_regex=function(escaped_search_string){
var regex_anchor, regex_flag;
regex_anchor=this.search_contains ? "":"^";
regex_flag=this.case_sensitive_search ? "":"i";
return new RegExp(regex_anchor + escaped_search_string, regex_flag);
};
AbstractChosen.prototype.get_highlight_regex=function(escaped_search_string){
var regex_anchor, regex_flag;
regex_anchor=this.search_contains ? "":"\\b";
regex_flag=this.case_sensitive_search ? "":"i";
return new RegExp(regex_anchor + escaped_search_string, regex_flag);
};
AbstractChosen.prototype.search_string_match=function(search_string, regex){
var part, parts, _i, _len;
if(regex.test(search_string)){
return true;
}else if(this.enable_split_word_search&&(search_string.indexOf(" ") >=0||search_string.indexOf("[")===0)){
parts=search_string.replace(/\[|\]/g, "").split(" ");
if(parts.length){
for (_i=0, _len=parts.length; _i < _len; _i++){
part=parts[_i];
if(regex.test(part)){
return true;
}}
}}
};
AbstractChosen.prototype.choices_count=function(){
var option, _i, _len, _ref;
if(this.selected_option_count!=null){
return this.selected_option_count;
}
this.selected_option_count=0;
_ref=this.form_field.options;
for (_i=0, _len=_ref.length; _i < _len; _i++){
option=_ref[_i];
if(option.selected){
this.selected_option_count +=1;
}}
return this.selected_option_count;
};
AbstractChosen.prototype.choices_click=function(evt){
evt.preventDefault();
this.activate_field();
if(!(this.results_showing||this.is_disabled)){
return this.results_show();
}};
AbstractChosen.prototype.keydown_checker=function(evt){
var stroke, _ref;
stroke=(_ref=evt.which)!=null ? _ref:evt.keyCode;
this.search_field_scale();
if(stroke!==8&&this.pending_backstroke){
this.clear_backstroke();
}
switch (stroke){
case 8:
this.backstroke_length=this.get_search_field_value().length;
break;
case 9:
if(this.results_showing&&!this.is_multiple){
this.result_select(evt);
}
this.mouse_on_container=false;
break;
case 13:
if(this.results_showing){
evt.preventDefault();
}
break;
case 27:
if(this.results_showing){
evt.preventDefault();
}
break;
case 32:
if(this.disable_search){
evt.preventDefault();
}
break;
case 38:
evt.preventDefault();
this.keyup_arrow();
break;
case 40:
evt.preventDefault();
this.keydown_arrow();
break;
}};
AbstractChosen.prototype.keyup_checker=function(evt){
var stroke, _ref;
stroke=(_ref=evt.which)!=null ? _ref:evt.keyCode;
this.search_field_scale();
switch (stroke){
case 8:
if(this.is_multiple&&this.backstroke_length < 1&&this.choices_count() > 0){
this.keydown_backstroke();
}else if(!this.pending_backstroke){
this.result_clear_highlight();
this.results_search();
}
break;
case 13:
evt.preventDefault();
if(this.results_showing){
this.result_select(evt);
}
break;
case 27:
if(this.results_showing){
this.results_hide();
}
break;
case 9:
case 16:
case 17:
case 18:
case 38:
case 40:
case 91:
break;
default:
this.results_search();
break;
}};
AbstractChosen.prototype.clipboard_event_checker=function(evt){
var _this=this;
if(this.is_disabled){
return;
}
return setTimeout((function(){
return _this.results_search();
}), 50);
};
AbstractChosen.prototype.container_width=function(){
if(this.options.width!=null){
return this.options.width;
}else{
return "" + this.form_field.offsetWidth + "px";
}};
AbstractChosen.prototype.include_option_in_results=function(option){
if(this.is_multiple&&(!this.display_selected_options&&option.selected)){
return false;
}
if(!this.display_disabled_options&&option.disabled){
return false;
}
if(option.empty){
return false;
}
return true;
};
AbstractChosen.prototype.search_results_touchstart=function(evt){
this.touch_started=true;
return this.search_results_mouseover(evt);
};
AbstractChosen.prototype.search_results_touchmove=function(evt){
this.touch_started=false;
return this.search_results_mouseout(evt);
};
AbstractChosen.prototype.search_results_touchend=function(evt){
if(this.touch_started){
return this.search_results_mouseup(evt);
}};
AbstractChosen.prototype.outerHTML=function(element){
var tmp;
if(element.outerHTML){
return element.outerHTML;
}
tmp=document.createElement("div");
tmp.appendChild(element);
return tmp.innerHTML;
};
AbstractChosen.prototype.get_single_html=function(){
return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
};
AbstractChosen.prototype.get_multi_html=function(){
return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
};
AbstractChosen.prototype.get_no_results_html=function(terms){
return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + terms + "</span>\n</li>";
};
AbstractChosen.browser_is_supported=function(){
if("Microsoft Internet Explorer"===window.navigator.appName){
return document.documentMode >=8;
}
if(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent)){
return false;
}
return true;
};
AbstractChosen.default_multiple_text="Select Some Options";
AbstractChosen.default_single_text="Select an Option";
AbstractChosen.default_no_result_text="No results match";
return AbstractChosen;
})();
$=jQuery;
$.fn.extend({
chosen: function(options){
if(!AbstractChosen.browser_is_supported()){
return this;
}
return this.each(function(input_field){
var $this, chosen;
$this=$(this);
chosen=$this.data('chosen');
if(options==='destroy'){
if(chosen instanceof Chosen){
chosen.destroy();
}
return;
}
if(!(chosen instanceof Chosen)){
$this.data('chosen', new Chosen(this, options));
}});
}});
Chosen=(function(_super){
__extends(Chosen, _super);
function Chosen(){
_ref=Chosen.__super__.constructor.apply(this, arguments);
return _ref;
}
Chosen.prototype.setup=function(){
this.form_field_jq=$(this.form_field);
return this.current_selectedIndex=this.form_field.selectedIndex;
};
Chosen.prototype.set_up_html=function(){
var container_classes, container_props;
container_classes=["chosen-container"];
container_classes.push("chosen-container-" + (this.is_multiple ? "multi":"single"));
if(this.inherit_select_classes&&this.form_field.className){
container_classes.push(this.form_field.className);
}
if(this.is_rtl){
container_classes.push("chosen-rtl");
}
container_props={
'class': container_classes.join(' '),
'title': this.form_field.title
};
if(this.form_field.id.length){
container_props.id=this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
}
this.container=$("<div />", container_props);
this.container.width(this.container_width());
if(this.is_multiple){
this.container.html(this.get_multi_html());
}else{
this.container.html(this.get_single_html());
}
this.form_field_jq.hide().after(this.container);
this.dropdown=this.container.find('div.chosen-drop').first();
this.search_field=this.container.find('input').first();
this.search_results=this.container.find('ul.chosen-results').first();
this.search_field_scale();
this.search_no_results=this.container.find('li.no-results').first();
if(this.is_multiple){
this.search_choices=this.container.find('ul.chosen-choices').first();
this.search_container=this.container.find('li.search-field').first();
}else{
this.search_container=this.container.find('div.chosen-search').first();
this.selected_item=this.container.find('.chosen-single').first();
}
this.results_build();
this.set_tab_index();
return this.set_label_behavior();
};
Chosen.prototype.on_ready=function(){
return this.form_field_jq.trigger("chosen:ready", {
chosen: this
});
};
Chosen.prototype.register_observers=function(){
var _this=this;
this.container.bind('touchstart.chosen', function(evt){
_this.container_mousedown(evt);
});
this.container.bind('touchend.chosen', function(evt){
_this.container_mouseup(evt);
});
this.container.bind('mousedown.chosen', function(evt){
_this.container_mousedown(evt);
});
this.container.bind('mouseup.chosen', function(evt){
_this.container_mouseup(evt);
});
this.container.bind('mouseenter.chosen', function(evt){
_this.mouse_enter(evt);
});
this.container.bind('mouseleave.chosen', function(evt){
_this.mouse_leave(evt);
});
this.search_results.bind('mouseup.chosen', function(evt){
_this.search_results_mouseup(evt);
});
this.search_results.bind('mouseover.chosen', function(evt){
_this.search_results_mouseover(evt);
});
this.search_results.bind('mouseout.chosen', function(evt){
_this.search_results_mouseout(evt);
});
this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt){
_this.search_results_mousewheel(evt);
});
this.search_results.bind('touchstart.chosen', function(evt){
_this.search_results_touchstart(evt);
});
this.search_results.bind('touchmove.chosen', function(evt){
_this.search_results_touchmove(evt);
});
this.search_results.bind('touchend.chosen', function(evt){
_this.search_results_touchend(evt);
});
this.form_field_jq.bind("chosen:updated.chosen", function(evt){
_this.results_update_field(evt);
});
this.form_field_jq.bind("chosen:activate.chosen", function(evt){
_this.activate_field(evt);
});
this.form_field_jq.bind("chosen:open.chosen", function(evt){
_this.container_mousedown(evt);
});
this.form_field_jq.bind("chosen:close.chosen", function(evt){
_this.close_field(evt);
});
this.search_field.bind('blur.chosen', function(evt){
_this.input_blur(evt);
});
this.search_field.bind('keyup.chosen', function(evt){
_this.keyup_checker(evt);
});
this.search_field.bind('keydown.chosen', function(evt){
_this.keydown_checker(evt);
});
this.search_field.bind('focus.chosen', function(evt){
_this.input_focus(evt);
});
this.search_field.bind('cut.chosen', function(evt){
_this.clipboard_event_checker(evt);
});
this.search_field.bind('paste.chosen', function(evt){
_this.clipboard_event_checker(evt);
});
if(this.is_multiple){
return this.search_choices.bind('click.chosen', function(evt){
_this.choices_click(evt);
});
}else{
return this.container.bind('click.chosen', function(evt){
evt.preventDefault();
});
}};
Chosen.prototype.destroy=function(){
$(this.container[0].ownerDocument).unbind('click.chosen', this.click_test_action);
if(this.form_field_label.length > 0){
this.form_field_label.unbind('click.chosen');
}
if(this.search_field[0].tabIndex){
this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex;
}
this.container.remove();
this.form_field_jq.removeData('chosen');
return this.form_field_jq.show();
};
Chosen.prototype.search_field_disabled=function(){
this.is_disabled=this.form_field.disabled||this.form_field_jq.parents('fieldset').is(':disabled');
this.container.toggleClass('chosen-disabled', this.is_disabled);
this.search_field[0].disabled=this.is_disabled;
if(!this.is_multiple){
this.selected_item.unbind('focus.chosen', this.activate_field);
}
if(this.is_disabled){
return this.close_field();
}else if(!this.is_multiple){
return this.selected_item.bind('focus.chosen', this.activate_field);
}};
Chosen.prototype.container_mousedown=function(evt){
var _ref1;
if(this.is_disabled){
return;
}
if(evt&&((_ref1=evt.type)==='mousedown'||_ref1==='touchstart')&&!this.results_showing){
evt.preventDefault();
}
if(!((evt!=null)&&($(evt.target)).hasClass("search-choice-close"))){
if(!this.active_field){
if(this.is_multiple){
this.search_field.val("");
}
$(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
this.results_show();
}else if(!this.is_multiple&&evt&&(($(evt.target)[0]===this.selected_item[0])||$(evt.target).parents("a.chosen-single").length)){
evt.preventDefault();
this.results_toggle();
}
return this.activate_field();
}};
Chosen.prototype.container_mouseup=function(evt){
if(evt.target.nodeName==="ABBR"&&!this.is_disabled){
return this.results_reset(evt);
}};
Chosen.prototype.search_results_mousewheel=function(evt){
var delta;
if(evt.originalEvent){
delta=evt.originalEvent.deltaY||-evt.originalEvent.wheelDelta||evt.originalEvent.detail;
}
if(delta!=null){
evt.preventDefault();
if(evt.type==='DOMMouseScroll'){
delta=delta * 40;
}
return this.search_results.scrollTop(delta + this.search_results.scrollTop());
}};
Chosen.prototype.blur_test=function(evt){
if(!this.active_field&&this.container.hasClass("chosen-container-active")){
return this.close_field();
}};
Chosen.prototype.close_field=function(){
$(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
this.active_field=false;
this.results_hide();
this.container.removeClass("chosen-container-active");
this.clear_backstroke();
this.show_search_field_default();
this.search_field_scale();
return this.search_field.blur();
};
Chosen.prototype.activate_field=function(){
if(this.is_disabled){
return;
}
this.container.addClass("chosen-container-active");
this.active_field=true;
this.search_field.val(this.search_field.val());
return this.search_field.focus();
};
Chosen.prototype.test_active_click=function(evt){
var active_container;
active_container=$(evt.target).closest('.chosen-container');
if(active_container.length&&this.container[0]===active_container[0]){
return this.active_field=true;
}else{
return this.close_field();
}};
Chosen.prototype.results_build=function(){
this.parsing=true;
this.selected_option_count=null;
this.results_data=SelectParser.select_to_array(this.form_field);
if(this.is_multiple){
this.search_choices.find("li.search-choice").remove();
}else if(!this.is_multiple){
this.single_set_selected_text();
if(this.disable_search||this.form_field.options.length <=this.disable_search_threshold){
this.search_field[0].readOnly=true;
this.container.addClass("chosen-container-single-nosearch");
}else{
this.search_field[0].readOnly=false;
this.container.removeClass("chosen-container-single-nosearch");
}}
this.update_results_content(this.results_option_build({
first: true
}));
this.search_field_disabled();
this.show_search_field_default();
this.search_field_scale();
return this.parsing=false;
};
Chosen.prototype.result_do_highlight=function(el){
var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
if(el.length){
this.result_clear_highlight();
this.result_highlight=el;
this.result_highlight.addClass("highlighted");
maxHeight=parseInt(this.search_results.css("maxHeight"), 10);
visible_top=this.search_results.scrollTop();
visible_bottom=maxHeight + visible_top;
high_top=this.result_highlight.position().top + this.search_results.scrollTop();
high_bottom=high_top + this.result_highlight.outerHeight();
if(high_bottom >=visible_bottom){
return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight:0);
}else if(high_top < visible_top){
return this.search_results.scrollTop(high_top);
}}
};
Chosen.prototype.result_clear_highlight=function(){
if(this.result_highlight){
this.result_highlight.removeClass("highlighted");
}
return this.result_highlight=null;
};
Chosen.prototype.results_show=function(){
if(this.is_multiple&&this.max_selected_options <=this.choices_count()){
this.form_field_jq.trigger("chosen:maxselected", {
chosen: this
});
return false;
}
this.container.addClass("chosen-with-drop");
this.results_showing=true;
this.search_field.focus();
this.search_field.val(this.get_search_field_value());
this.winnow_results();
return this.form_field_jq.trigger("chosen:showing_dropdown", {
chosen: this
});
};
Chosen.prototype.update_results_content=function(content){
return this.search_results.html(content);
};
Chosen.prototype.results_hide=function(){
if(this.results_showing){
this.result_clear_highlight();
this.container.removeClass("chosen-with-drop");
this.form_field_jq.trigger("chosen:hiding_dropdown", {
chosen: this
});
}
return this.results_showing=false;
};
Chosen.prototype.set_tab_index=function(el){
var ti;
if(this.form_field.tabIndex){
ti=this.form_field.tabIndex;
this.form_field.tabIndex=-1;
return this.search_field[0].tabIndex=ti;
}};
Chosen.prototype.set_label_behavior=function(){
this.form_field_label=this.form_field_jq.parents("label");
if(!this.form_field_label.length&&this.form_field.id.length){
this.form_field_label=$("label[for='" + this.form_field.id + "']");
}
if(this.form_field_label.length > 0){
return this.form_field_label.bind('click.chosen', this.label_click_handler);
}};
Chosen.prototype.show_search_field_default=function(){
if(this.is_multiple&&this.choices_count() < 1&&!this.active_field){
this.search_field.val(this.default_text);
return this.search_field.addClass("default");
}else{
this.search_field.val("");
return this.search_field.removeClass("default");
}};
Chosen.prototype.search_results_mouseup=function(evt){
var target;
target=$(evt.target).hasClass("active-result") ? $(evt.target):$(evt.target).parents(".active-result").first();
if(target.length){
this.result_highlight=target;
this.result_select(evt);
return this.search_field.focus();
}};
Chosen.prototype.search_results_mouseover=function(evt){
var target;
target=$(evt.target).hasClass("active-result") ? $(evt.target):$(evt.target).parents(".active-result").first();
if(target){
return this.result_do_highlight(target);
}};
Chosen.prototype.search_results_mouseout=function(evt){
if($(evt.target).hasClass("active-result"||$(evt.target).parents('.active-result').first())){
return this.result_clear_highlight();
}};
Chosen.prototype.choice_build=function(item){
var choice, close_link,
_this=this;
choice=$('<li />', {
"class": "search-choice"
}).html("<span>" + (this.choice_label(item)) + "</span>");
if(item.disabled){
choice.addClass('search-choice-disabled');
}else{
close_link=$('<a />', {
"class": 'search-choice-close',
'data-option-array-index': item.array_index
});
close_link.bind('click.chosen', function(evt){
return _this.choice_destroy_link_click(evt);
});
choice.append(close_link);
}
return this.search_container.before(choice);
};
Chosen.prototype.choice_destroy_link_click=function(evt){
evt.preventDefault();
evt.stopPropagation();
if(!this.is_disabled){
return this.choice_destroy($(evt.target));
}};
Chosen.prototype.choice_destroy=function(link){
if(this.result_deselect(link[0].getAttribute("data-option-array-index"))){
if(this.active_field){
this.search_field.focus();
}else{
this.show_search_field_default();
}
if(this.is_multiple&&this.choices_count() > 0&&this.get_search_field_value().length < 1){
this.results_hide();
}
link.parents('li').first().remove();
return this.search_field_scale();
}};
Chosen.prototype.results_reset=function(){
this.reset_single_select_options();
this.form_field.options[0].selected=true;
this.single_set_selected_text();
this.show_search_field_default();
this.results_reset_cleanup();
this.trigger_form_field_change();
if(this.active_field){
return this.results_hide();
}};
Chosen.prototype.results_reset_cleanup=function(){
this.current_selectedIndex=this.form_field.selectedIndex;
return this.selected_item.find("abbr").remove();
};
Chosen.prototype.result_select=function(evt){
var high, item;
if(this.result_highlight){
high=this.result_highlight;
this.result_clear_highlight();
if(this.is_multiple&&this.max_selected_options <=this.choices_count()){
this.form_field_jq.trigger("chosen:maxselected", {
chosen: this
});
return false;
}
if(this.is_multiple){
high.removeClass("active-result");
}else{
this.reset_single_select_options();
}
high.addClass("result-selected");
item=this.results_data[high[0].getAttribute("data-option-array-index")];
item.selected=true;
this.form_field.options[item.options_index].selected=true;
this.selected_option_count=null;
if(this.is_multiple){
this.choice_build(item);
}else{
this.single_set_selected_text(this.choice_label(item));
}
if(!(this.is_multiple&&(!this.hide_results_on_select||(evt.metaKey||evt.ctrlKey)))){
this.results_hide();
this.show_search_field_default();
}
if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){
this.trigger_form_field_change({
selected: this.form_field.options[item.options_index].value
});
}
this.current_selectedIndex=this.form_field.selectedIndex;
evt.preventDefault();
return this.search_field_scale();
}};
Chosen.prototype.single_set_selected_text=function(text){
if(text==null){
text=this.default_text;
}
if(text===this.default_text){
this.selected_item.addClass("chosen-default");
}else{
this.single_deselect_control_build();
this.selected_item.removeClass("chosen-default");
}
return this.selected_item.find("span").html(text);
};
Chosen.prototype.result_deselect=function(pos){
var result_data;
result_data=this.results_data[pos];
if(!this.form_field.options[result_data.options_index].disabled){
result_data.selected=false;
this.form_field.options[result_data.options_index].selected=false;
this.selected_option_count=null;
this.result_clear_highlight();
if(this.results_showing){
this.winnow_results();
}
this.trigger_form_field_change({
deselected: this.form_field.options[result_data.options_index].value
});
this.search_field_scale();
return true;
}else{
return false;
}};
Chosen.prototype.single_deselect_control_build=function(){
if(!this.allow_single_deselect){
return;
}
if(!this.selected_item.find("abbr").length){
this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
}
return this.selected_item.addClass("chosen-single-with-deselect");
};
Chosen.prototype.get_search_field_value=function(){
return this.search_field.val();
};
Chosen.prototype.get_search_text=function(){
return this.escape_html($.trim(this.get_search_field_value()));
};
Chosen.prototype.escape_html=function(text){
return $('<div/>').text(text).html();
};
Chosen.prototype.winnow_results_set_highlight=function(){
var do_high, selected_results;
selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result"):[];
do_high=selected_results.length ? selected_results.first():this.search_results.find(".active-result").first();
if(do_high!=null){
return this.result_do_highlight(do_high);
}};
Chosen.prototype.no_results=function(terms){
var no_results_html;
no_results_html=this.get_no_results_html(terms);
this.search_results.append(no_results_html);
return this.form_field_jq.trigger("chosen:no_results", {
chosen: this
});
};
Chosen.prototype.no_results_clear=function(){
return this.search_results.find(".no-results").remove();
};
Chosen.prototype.keydown_arrow=function(){
var next_sib;
if(this.results_showing&&this.result_highlight){
next_sib=this.result_highlight.nextAll("li.active-result").first();
if(next_sib){
return this.result_do_highlight(next_sib);
}}else{
return this.results_show();
}};
Chosen.prototype.keyup_arrow=function(){
var prev_sibs;
if(!this.results_showing&&!this.is_multiple){
return this.results_show();
}else if(this.result_highlight){
prev_sibs=this.result_highlight.prevAll("li.active-result");
if(prev_sibs.length){
return this.result_do_highlight(prev_sibs.first());
}else{
if(this.choices_count() > 0){
this.results_hide();
}
return this.result_clear_highlight();
}}
};
Chosen.prototype.keydown_backstroke=function(){
var next_available_destroy;
if(this.pending_backstroke){
this.choice_destroy(this.pending_backstroke.find("a").first());
return this.clear_backstroke();
}else{
next_available_destroy=this.search_container.siblings("li.search-choice").last();
if(next_available_destroy.length&&!next_available_destroy.hasClass("search-choice-disabled")){
this.pending_backstroke=next_available_destroy;
if(this.single_backstroke_delete){
return this.keydown_backstroke();
}else{
return this.pending_backstroke.addClass("search-choice-focus");
}}
}};
Chosen.prototype.clear_backstroke=function(){
if(this.pending_backstroke){
this.pending_backstroke.removeClass("search-choice-focus");
}
return this.pending_backstroke=null;
};
Chosen.prototype.search_field_scale=function(){
var container_width, div, style, style_block, styles, width, _i, _len;
if(!this.is_multiple){
return;
}
style_block={
position: 'absolute',
left: '-1000px',
top: '-1000px',
display: 'none',
whiteSpace: 'pre'
};
styles=['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];
for (_i=0, _len=styles.length; _i < _len; _i++){
style=styles[_i];
style_block[style]=this.search_field.css(style);
}
div=$('<div />').css(style_block);
div.text(this.get_search_field_value());
$('body').append(div);
width=div.width() + 25;
div.remove();
container_width=this.container.outerWidth();
width=Math.min(container_width - 10, width);
return this.search_field.width(width);
};
Chosen.prototype.trigger_form_field_change=function(extra){
this.form_field_jq.trigger("input", extra);
return this.form_field_jq.trigger("change", extra);
};
return Chosen;
})(AbstractChosen);
}).call(this);
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),y.push((a?"":"no-")+s.join("-"))}}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return!!~(""+e).indexOf(t)}function d(){var e=t.body;return e||(e=i(E?"svg":"body"),e.fake=!0),e}function l(e,n,r,a){var o,s,c,l,u="modernizr",f=i("div"),p=d();if(parseInt(r,10))for(;r--;)c=i("div"),c.id=a?a[r]:u+(r+1),f.appendChild(c);return o=i("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=l,C.offsetHeight):f.parentNode.removeChild(f),!!s}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?u(a,n||t):a);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(p(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+p(t[a])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+"){ #modernizr { position: absolute; }}",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,a,o){function d(){u&&(delete V.style,delete V.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var l=m(e,a);if(!r(l,"undefined"))return l}for(var u,f,p,g,h,v=["modernizr","tspan","samp"];!V.style&&v.length;)u=!0,V.modElem=i(v.shift()),V.style=V.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],h=V.style[g],c(g,"-")&&(g=s(g)),V.style[g]!==n){if(o||r(a,"undefined"))return d(),"pfx"==t?g:!0;try{V.style[g]=a}catch(y){}if(V.style[g]!=h)return d(),"pfx"==t?g:!0}return d(),!1}function h(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+D.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,a,o):(s=(e+" "+P.join(i+" ")+i).split(" "),f(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T=!1;try{T="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(w){}Modernizr.addTest("websockets",T),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S;var C=t.documentElement,E="svg"===C.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,d(t)}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function d(e){e||(e=t);var r=o(e);return!b.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:d,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,d(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var k="Moz O ms Webkit",P=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=P;var _=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=_,Modernizr.addTest("hashchange",function(){return _("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=i("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=i("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,o=S.length-1;o>a;a++)e=0===a?"to ":"",r+=t+S[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=i("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var N=i("input"),z="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),R={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)R[t[n]]=!!(t[n]in N);return R.list&&(R.list=!(!i("datalist")||!e.HTMLDataListElement)),R}(z);var $="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};Modernizr.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)N.setAttribute("type",r=e[c]),o="text"!==N.type&&"style"in N,o&&(N.value=s,N.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&N.style.WebkitAppearance!==n?(C.appendChild(N),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(N,null).WebkitAppearance&&0!==N.offsetHeight,C.removeChild(N)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?N.checkValidity&&N.checkValidity()===!1:N.value!=s)),A[e[c]]=!!o;return A}($),Modernizr.addTest("hsla",function(){var e=i("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",c(e.backgroundColor,"rgba")||c(e.backgroundColor,"hsla")});var M="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;Modernizr.addTest("supports",M||L);var O={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(O.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(O.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var B=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; }}",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=B;var F=x.testStyles=l,j=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();j?Modernizr.addTest("fontface",!1):F('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)});var D=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=D;var I=function(t){var r,a=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=S[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=I;var W={elem:i("modernizr")};Modernizr._q.push(function(){delete W.elem});var V={style:W.elem.style};Modernizr._q.unshift(function(){delete V.style});var q=x.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",q("textShadow","1px 1px")),x.testAllProps=h;var H,U=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?I(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};try{H=U("indexedDB",e)}catch(w){}Modernizr.addTest("indexeddb",!!H),H&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in H),x.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",v("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=v("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("cssreflections",v("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0)),a(),o(y),delete x.addTest,delete x.addAsyncTest;for(var G=0;G<Modernizr._q.length;G++)Modernizr._q[G]();e.Modernizr=Modernizr}(window,document);
;(function($, window, undefined){
'use strict';
var $event=$.event,
$special,
resizeTimeout;
$special=$event.special.debouncedresize={
setup: function(){
$(this).on("resize", $special.handler);
},
teardown: function(){
$(this).off("resize", $special.handler);
},
handler: function(event, execAsap){
var context=this,
args=arguments,
dispatch=function(){
event.type="debouncedresize";
$event.dispatch.apply(context, args);
};
if(resizeTimeout){
clearTimeout(resizeTimeout);
}
execAsap ?
dispatch() :
resizeTimeout=setTimeout(dispatch, $special.threshold);
},
threshold: 100
};
function shuffle(a){
var i=a.length,p,t;
while (i--){
p=Math.floor(Math.random()*i);
t=a[i];
a[i]=a[p];
a[p]=t;
}
return a;
};
function getHiddenProp(){
var prefixes=['webkit','moz','ms','o'];
if('hidden' in document) return 'hidden';
for (var i=0; i < prefixes.length; i++){
if((prefixes[i] + 'Hidden') in document)
return prefixes[i] + 'Hidden';
}
return null;
}
function isHidden(){
var prop=getHiddenProp();
if(!prop) return false;
return document[prop];
}
function isEmpty(obj){
return Object.keys(obj).length===0;
}
var $window=$(window),
Modernizr=window.Modernizr;
$.GridRotator=function(options, element){
this.$el=$(element);
if(Modernizr.backgroundsize){
var self=this;
this.$el.addClass('ri-grid-loading');
this._init(options);
}};
$.GridRotator.defaults={
rows:4,
columns:10,
w1024:{ rows:3, columns:8 },
w768:{rows:3,columns:7 },
w480:{rows:3,columns:5 },
w320:{rows:2,columns:4 },
w240:{rows:2,columns:3 },
step:'random',
maxStep:3,
preventClick:true,
animType:'random',
animSpeed:1200,
animEasingOut:'linear',
animEasingIn: 'linear',
interval:3000,
slideshow:true,
onhover:false,
nochange:[]
};
$.GridRotator.prototype={
_init:function(options){
this.options=$.extend(true, {}, $.GridRotator.defaults, options);
this._config();
},
_config:function(){
var self=this,
transEndEventNames={
'WebkitTransition':'webkitTransitionEnd',
'MozTransition':'transitionend',
'OTransition':'oTransitionEnd',
'msTransition':'MSTransitionEnd',
'transition':'transitionend'
};
this.supportTransitions=Modernizr.csstransitions;
this.supportTransforms3D=Modernizr.csstransforms3d;
this.transEndEventName=transEndEventNames[ Modernizr.prefixed('transition') ] + '.gridrotator';
this.animTypes=this.supportTransforms3D ? [
'fadeInOut',
'slideLeft',
'slideRight',
'slideTop',
'slideBottom',
'rotateLeft',
'rotateRight',
'rotateTop',
'rotateBottom',
'scale',
'rotate3d',
'rotateLeftScale',
'rotateRightScale',
'rotateTopScale',
'rotateBottomScale' ] :
[ 'fadeInOut', 'slideLeft', 'slideRight', 'slideTop', 'slideBottom' ];
this.animType=this.options.animType;
if(this.animType!=='random'&&!this.supportTransforms3D&&$.inArray(this.animType, this.animTypes)===-1&&this.animType!=='showHide'){
this.animType='fadeInOut';
}
this.animTypesTotal=this.animTypes.length;
this.$list=this.$el.children('ul');
var loaded=0,
$imgs=this.$list.find('img'),
count=$imgs.length;
$imgs.each(function(){
var $img=$(this), src=$img.attr('data-src');
$('<img/>').on('load',function (){
++loaded;
$img.parent().css('background-image', 'url(' + src + ')');
if(loaded===count){
$imgs.remove();
self.$el.removeClass('ri-grid-loading');
self.$items=self.$list.children('li');
self.$itemsCache=self.$items.clone();
self.itemsTotal=self.$items.length;
self.outItems=[];
self._layout(function(){
self._initEvents();
});
self._start();
}}).attr('src', src)
});
},
_layout:function(callback){
var self=this;
this._setGridDim();
this.$list.empty();
this.$items=this.$itemsCache.clone().appendTo(this.$list);
var $outItems=this.$items.filter(':gt(' +(this.showTotal - 1) + ')'),
$outAItems=$outItems.children('a');
this.outItems.length=0;
$outAItems.each(function(i){
self.outItems.push($(this));
});
$outItems.remove();
var containerWidth=(document.defaultView) ? parseInt(document.defaultView.getComputedStyle(this.$el.get(0), null).width):this.$el.width(),
itemWidth=Math.floor(containerWidth / this.columns),
gapWidth=containerWidth -(this.columns * Math.floor(itemWidth));
for(var i=0; i < this.rows; ++i){
for(var j=0; j < this.columns; ++j){
var idx=this.columns * i + j,
$item=this.$items.eq(idx);
$item.css({
width:j < Math.floor(gapWidth) ? itemWidth + 1:itemWidth,
height:itemWidth
});
if($.inArray(idx, this.options.nochange)!==-1){
$item.addClass('ri-nochange').data('nochange', true);
}}
}
if(this.options.preventClick){
this.$items.children().css('cursor', 'default').on('click.gridrotator', false);
}
if(callback){
callback.call();
}},
_setGridDim:function(){
var c_w=this.$el.width();
switch(true){
case(c_w < 240):this.rows=this.options.w240.rows; this.columns=this.options.w240.columns; break;
case(c_w < 320):this.rows=this.options.w320.rows; this.columns=this.options.w320.columns; break;
case(c_w < 480):this.rows=this.options.w480.rows; this.columns=this.options.w480.columns; break;
case(c_w < 768):this.rows=this.options.w768.rows; this.columns=this.options.w768.columns; break;
case(c_w < 1024):this.rows=this.options.w1024.rows; this.columns=this.options.w1024.columns; break;
default:this.rows=this.options.rows; this.columns=this.options.columns; break;
}
this.showTotal=this.rows * this.columns;
},
_initEvents:function(){
var self=this;
$window.on('debouncedresize.gridrotator', function(){
self._layout();
});
var visProp=getHiddenProp();
if(visProp){
var evtname=visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
document.addEventListener(evtname, function(){ self._visChange(); });
}
if(!Modernizr.touch&&this.options.onhover){
self.$items.on('mouseenter.gridrotator', function(){
var $item=$(this);
if(!$item.data('active')&&!$item.data('hovered')&&!$item.data('nochange')){
$item.data('hovered', true);
self._replace($item);
}}).on('mouseleave.gridrotator', function(){
$(this).data('hovered', false);
});
}},
_visChange:function(){
isHidden() ? clearTimeout(this.playtimeout):this._start();
},
_start:function(){
if(this.showTotal < this.itemsTotal&&this.options.slideshow){
this._showNext();
}},
_getAnimType:function(){
return this.animType==='random' ? this.animTypes[ Math.floor(Math.random() * this.animTypesTotal) ]:this.animType;
},
_getAnimProperties:function($out){
var startInProp={}, startOutProp={}, endInProp={}, endOutProp={},
animType=this._getAnimType(), speed, delay=0;
switch(animType){
case 'showHide' :
speed=0;
endOutProp.opacity=0;
break;
case 'fadeInOut' :
endOutProp.opacity=0;
break;
case 'slideLeft' :
startInProp.left=$out.width();
endInProp.left=0;
endOutProp.left=-$out.width();
break;
case 'slideRight' :
startInProp.left=-$out.width();
endInProp.left=0;
endOutProp.left=$out.width();
break;
case 'slideTop' :
startInProp.top=$out.height();
endInProp.top=0;
endOutProp.top=-$out.height();
break;
case 'slideBottom' :
startInProp.top=-$out.height();
endInProp.top=0;
endOutProp.top=$out.height();
break;
case 'rotateLeft' :
speed=this.options.animSpeed / 2;
startInProp.transform='rotateY(90deg)';
endInProp.transform='rotateY(0deg)';
delay=speed;
endOutProp.transform='rotateY(-90deg)';
break;
case 'rotateRight' :
speed=this.options.animSpeed / 2;
startInProp.transform='rotateY(-90deg)';
endInProp.transform='rotateY(0deg)';
delay=speed;
endOutProp.transform='rotateY(90deg)';
break;
case 'rotateTop' :
speed=this.options.animSpeed / 2;
startInProp.transform='rotateX(90deg)';
endInProp.transform='rotateX(0deg)';
delay=speed;
endOutProp.transform='rotateX(-90deg)';
break;
case 'rotateBottom' :
speed=this.options.animSpeed / 2;
startInProp.transform='rotateX(-90deg)';
endInProp.transform='rotateX(0deg)';
delay=speed;
endOutProp.transform='rotateX(90deg)';
break;
case 'scale' :
speed=this.options.animSpeed / 2;
startInProp.transform='scale(0)';
startOutProp.transform='scale(1)';
endInProp.transform='scale(1)';
delay=speed;
endOutProp.transform='scale(0)';
break;
case 'rotateLeftScale' :
startOutProp.transform='scale(1)';
speed=this.options.animSpeed / 2;
startInProp.transform='scale(0.3) rotateY(90deg)';
endInProp.transform='scale(1) rotateY(0deg)';
delay=speed;
endOutProp.transform='scale(0.3) rotateY(-90deg)';
break;
case 'rotateRightScale' :
startOutProp.transform='scale(1)';
speed=this.options.animSpeed / 2;
startInProp.transform='scale(0.3) rotateY(-90deg)';
endInProp.transform='scale(1) rotateY(0deg)';
delay=speed;
endOutProp.transform='scale(0.3) rotateY(90deg)';
break;
case 'rotateTopScale' :
startOutProp.transform='scale(1)';
speed=this.options.animSpeed / 2;
startInProp.transform='scale(0.3) rotateX(90deg)';
endInProp.transform='scale(1) rotateX(0deg)';
delay=speed;
endOutProp.transform='scale(0.3) rotateX(-90deg)';
break;
case 'rotateBottomScale' :
startOutProp.transform='scale(1)';
speed=this.options.animSpeed / 2;
startInProp.transform='scale(0.3) rotateX(-90deg)';
endInProp.transform='scale(1) rotateX(0deg)';
delay=speed;
endOutProp.transform='scale(0.3) rotateX(90deg)';
break;
case 'rotate3d' :
speed=this.options.animSpeed / 2;
startInProp.transform='rotate3d(1, 1, 0, 90deg)';
endInProp.transform='rotate3d(1, 1, 0, 0deg)';
delay=speed;
endOutProp.transform='rotate3d(1, 1, 0, -90deg)';
break;
}
return {
startInProp:startInProp,
startOutProp:startOutProp,
endInProp:endInProp,
endOutProp:endOutProp,
delay:delay,
animSpeed:speed!=undefined ? speed:this.options.animSpeed
};},
_showNext:function(time){
var self=this;
clearTimeout(this.playtimeout);
this.playtimeout=setTimeout(function(){
var step=self.options.step, max=self.options.maxStep, min=1;
if(max > self.showTotal){
max=self.showTotal;
}
var nmbOut=step==='random' ? Math.floor(Math.random() * max + min):Math.min(Math.abs(step) , max) ,
randArr=self._getRandom(nmbOut, self.showTotal);
for(var i=0; i < nmbOut; ++i){
var $out=self.$items.eq(randArr[ i ]);
if($out.data('active')||$out.data('nochange')){
self._showNext(1);
return false;
}
self._replace($out);
}
self._showNext();
}, time||Math.max(Math.abs(this.options.interval) , 300));
},
_replace:function($out){
$out.data('active', true);
var self=this,
$outA=$out.children('a:last'),
newElProp={
width:$outA.width(),
height:$outA.height()
};
$out.data('active', true);
var $inA=this.outItems.shift();
this.outItems.push($outA.clone().css('transition', 'none'));
$inA.css(newElProp).prependTo($out);
var animProp=this._getAnimProperties($outA);
$inA.css(animProp.startInProp);
$outA.css(animProp.startOutProp);
this._setTransition($inA, 'all', animProp.animSpeed, animProp.delay, this.options.animEasingIn);
this._setTransition($outA, 'all', animProp.animSpeed, 0, this.options.animEasingOut);
this._applyTransition($inA, animProp.endInProp, animProp.animSpeed, function(){
var $el=$(this),
t=animProp.animSpeed===self.options.animSpeed&&isEmpty(animProp.endInProp) ? animProp.animSpeed:0;
setTimeout(function(){
if(self.supportTransitions){
$el.off(self.transEndEventName);
}
$el.next().remove();
$el.parent().data('active', false);
}, t);
}, animProp.animSpeed===0||isEmpty(animProp.endInProp));
this._applyTransition($outA, animProp.endOutProp, animProp.animSpeed);
},
_getRandom:function(cnt, limit){
var randArray=[];
for(var i=0; i < limit; ++i){
randArray.push(i)
}
shuffle(randArray);
return randArray.slice(0, cnt);
},
_setTransition:function(el, prop, speed, delay, easing){
setTimeout(function(){
el.css('transition', prop + ' ' + speed + 'ms ' + delay + 'ms ' + easing);
}, 25);
},
_applyTransition:function(el, styleCSS, speed, fncomplete, force){
var self=this;
setTimeout(function(){
$.fn.applyStyle=self.supportTransitions ? $.fn.css:$.fn.animate;
if(fncomplete&&self.supportTransitions){
el.on(self.transEndEventName, fncomplete);
if(force){
fncomplete.call(el);
}}
fncomplete=fncomplete||function(){ return false; };
el.stop().applyStyle(styleCSS, $.extend(true, [], { duration:speed + 'ms', complete:fncomplete }));
}, 25);
}};
var logError=function(message){
if(window.console){
window.console.error(message);
}};
$.fn.gridrotator=function(options){
var instance=$.data(this, 'gridrotator');
if(typeof options==='string'){
var args=Array.prototype.slice.call(arguments, 1);
this.each(function(){
if(!instance){
logError("cannot call methods on gridrotator prior to initialization; " +
"attempted to call method '" + options + "'");
return;
}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){
logError("no such method '" + options + "' for gridrotator instance");
return;
}
instance[ options ].apply(instance, args);
});
}else{
this.each(function(){
if(instance){
instance._init();
}else{
instance=$.data(this, 'gridrotator', new $.GridRotator(options, this));
}});
}
return instance;
};})(jQuery, window);
(function(window){
'use strict';
function classReg(className){
return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
var hasClass, addClass, removeClass;
if('classList' in document.documentElement){
hasClass=function(elem, c){
return elem.classList.contains(c);
};
addClass=function(elem, c){
elem.classList.add(c);
};
removeClass=function(elem, c){
elem.classList.remove(c);
};}else{
hasClass=function(elem, c){
return classReg(c).test(elem.className);
};
addClass=function(elem, c){
if(!hasClass(elem, c)){
elem.className=elem.className + ' ' + c;
}};
removeClass=function(elem, c){
elem.className=elem.className.replace(classReg(c), ' ');
};}
function toggleClass(elem, c){
var fn=hasClass(elem, c) ? removeClass:addClass;
fn(elem, c);
}
var classie={
hasClass: hasClass,
addClass: addClass,
removeClass: removeClass,
toggleClass: toggleClass,
has: hasClass,
add: addClass,
remove: removeClass,
toggle: toggleClass
};
if(typeof define==='function'&&define.amd){
define(classie);
}else{
window.classie=classie;
}})(window);
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof module==='object'&&module.exports){
module.exports=factory(require('jquery'));
}else{
factory(root["jQuery"]);
}}(this, function ($){
(function(){
'use strict';
var defaults={
mode: 'lg-slide',
cssEasing: 'ease',
easing: 'linear',
speed: 600,
height: '100%',
width: '100%',
addClass: '',
startClass: 'lg-start-zoom',
backdropDuration: 150,
hideBarsDelay: 6000,
useLeft: false,
closable: true,
loop: true,
escKey: true,
keyPress: true,
controls: true,
slideEndAnimatoin: true,
hideControlOnEnd: false,
mousewheel: true,
getCaptionFromTitleOrAlt: true,
appendSubHtmlTo: '.lg-sub-html',
subHtmlSelectorRelative: false,
preload: 1,
showAfterLoad: true,
selector: '',
selectWithin: '',
nextHtml: '',
prevHtml: '',
index: false,
iframeMaxWidth: '100%',
download: true,
counter: true,
appendCounterTo: '.lg-toolbar',
swipeThreshold: 50,
enableSwipe: true,
enableDrag: true,
dynamic: false,
dynamicEl: [],
galleryId: 1
};
function Plugin(element, options){
this.el=element;
this.$el=$(element);
this.s=$.extend({}, defaults, options);
if(this.s.dynamic&&this.s.dynamicEl!=='undefined'&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length){
throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
}
this.modules={};
this.lGalleryOn=false;
this.lgBusy=false;
this.hideBartimeout=false;
this.isTouch=('ontouchstart' in document.documentElement);
if(this.s.slideEndAnimatoin){
this.s.hideControlOnEnd=false;
}
if(this.s.dynamic){
this.$items=this.s.dynamicEl;
}else{
if(this.s.selector==='this'){
this.$items=this.$el;
}else if(this.s.selector!==''){
if(this.s.selectWithin){
this.$items=$(this.s.selectWithin).find(this.s.selector);
}else{
this.$items=this.$el.find($(this.s.selector));
}}else{
this.$items=this.$el.children();
}}
this.$slide='';
this.$outer='';
this.init();
return this;
}
Plugin.prototype.init=function(){
var _this=this;
if(_this.s.preload > _this.$items.length){
_this.s.preload=_this.$items.length;
}
var _hash=window.location.hash;
if(_hash.indexOf('lg=' + this.s.galleryId) > 0){
_this.index=parseInt(_hash.split('&slide=')[1], 10);
$('body').addClass('lg-from-hash');
if(!$('body').hasClass('lg-on')){
setTimeout(function(){
_this.build(_this.index);
});
$('body').addClass('lg-on');
}}
if(_this.s.dynamic){
_this.$el.trigger('onBeforeOpen.lg');
_this.index=_this.s.index||0;
if(!$('body').hasClass('lg-on')){
setTimeout(function(){
_this.build(_this.index);
$('body').addClass('lg-on');
});
}}else{
_this.$items.on('click.lgcustom', function(event){
try {
event.preventDefault();
event.preventDefault();
} catch (er){
event.returnValue=false;
}
_this.$el.trigger('onBeforeOpen.lg');
_this.index=_this.s.index||_this.$items.index(this);
if(!$('body').hasClass('lg-on')){
_this.build(_this.index);
$('body').addClass('lg-on');
}});
}};
Plugin.prototype.build=function(index){
var _this=this;
_this.structure();
$.each($.fn.lightGallery.modules, function(key){
_this.modules[key]=new $.fn.lightGallery.modules[key](_this.el);
});
_this.slide(index, false, false, false);
if(_this.s.keyPress){
_this.keyPress();
}
if(_this.$items.length > 1){
_this.arrow();
setTimeout(function(){
_this.enableDrag();
_this.enableSwipe();
}, 50);
if(_this.s.mousewheel){
_this.mousewheel();
}}else{
_this.$slide.on('click.lg', function(){
_this.$el.trigger('onSlideClick.lg');
});
}
_this.counter();
setTimeout(function(){
_this.closeGallery();
}, 700);
_this.$el.trigger('onAfterOpen.lg');
_this.$outer.on('mousemove.lg click.lg touchstart.lg', function(){
_this.$outer.removeClass('lg-hide-items');
clearTimeout(_this.hideBartimeout);
_this.hideBartimeout=setTimeout(function(){
_this.$outer.addClass('lg-hide-items');
}, _this.s.hideBarsDelay);
});
_this.$outer.trigger('mousemove.lg');
};
Plugin.prototype.structure=function(){
var list='';
var controls='';
var i=0;
var subHtmlCont='';
var template;
var _this=this;
$('body').append('<div class="lg-backdrop"></div>');
$('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');
for (i=0; i < this.$items.length; i++){
list +='<div class="lg-item"></div>';
}
if(this.s.controls&&this.$items.length > 1){
controls='<div class="lg-actions">' +
'<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
'<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
'</div>';
}
if(this.s.appendSubHtmlTo==='.lg-sub-html'){
subHtmlCont='<div class="lg-sub-html"></div>';
}
template='<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
'<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
'<div class="lg-inner">' + list + '</div>' +
'<div class="lg-toolbar lg-group">' +
'<span class="lg-close lg-icon"></span>' +
'</div>' +
controls +
subHtmlCont +
'</div>' +
'</div>';
$('body').append(template);
this.$outer=$('.lg-outer');
this.$slide=this.$outer.find('.lg-item');
if(this.s.useLeft){
this.$outer.addClass('lg-use-left');
this.s.mode='lg-slide';
}else{
this.$outer.addClass('lg-use-css3');
}
_this.setTop();
$(window).on('resize.lg orientationchange.lg', function(){
setTimeout(function(){
_this.setTop();
}, 100);
});
this.$slide.eq(this.index).addClass('lg-current');
if(this.doCss()){
this.$outer.addClass('lg-css3');
}else{
this.$outer.addClass('lg-css');
this.s.speed=0;
}
this.$outer.addClass(this.s.mode);
if(this.s.enableDrag&&this.$items.length > 1){
this.$outer.addClass('lg-grab');
}
if(this.s.showAfterLoad){
this.$outer.addClass('lg-show-after-load');
}
if(this.doCss()){
var $inner=this.$outer.find('.lg-inner');
$inner.css('transition-timing-function', this.s.cssEasing);
$inner.css('transition-duration', this.s.speed + 'ms');
}
setTimeout(function(){
$('.lg-backdrop').addClass('in');
});
setTimeout(function(){
_this.$outer.addClass('lg-visible');
}, this.s.backdropDuration);
if(this.s.download){
this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
}
this.prevScrollTop=$(window).scrollTop();
};
Plugin.prototype.setTop=function(){
if(this.s.height!=='100%'){
var wH=$(window).height();
var top=(wH - parseInt(this.s.height, 10)) / 2;
var $lGallery=this.$outer.find('.lg');
if(wH >=parseInt(this.s.height, 10)){
$lGallery.css('top', top + 'px');
}else{
$lGallery.css('top', '0px');
}}
};
Plugin.prototype.doCss=function(){
var support=function(){
var transition=['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
var root=document.documentElement;
var i=0;
for (i=0; i < transition.length; i++){
if(transition[i] in root.style){
return true;
}}
};
if(support()){
return true;
}
return false;
};
Plugin.prototype.isVideo=function(src, index){
var html;
if(this.s.dynamic){
html=this.s.dynamicEl[index].html;
}else{
html=this.$items.eq(index).attr('data-html');
}
if(!src){
if(html){
return {
html5: true
};}else{
console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
return false;
}}
var youtube=src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
var vimeo=src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
var dailymotion=src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
var vk=src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
if(youtube){
return {
youtube: youtube
};}else if(vimeo){
return {
vimeo: vimeo
};}else if(dailymotion){
return {
dailymotion: dailymotion
};}else if(vk){
return {
vk: vk
};}};
Plugin.prototype.counter=function(){
if(this.s.counter){
$(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
}};
Plugin.prototype.addHtml=function(index){
var subHtml=null;
var subHtmlUrl;
var $currentEle;
if(this.s.dynamic){
if(this.s.dynamicEl[index].subHtmlUrl){
subHtmlUrl=this.s.dynamicEl[index].subHtmlUrl;
}else{
subHtml=this.s.dynamicEl[index].subHtml;
}}else{
$currentEle=this.$items.eq(index);
if($currentEle.attr('data-sub-html-url')){
subHtmlUrl=$currentEle.attr('data-sub-html-url');
}else{
subHtml=$currentEle.attr('data-sub-html');
if(this.s.getCaptionFromTitleOrAlt&&!subHtml){
subHtml=$currentEle.attr('title')||$currentEle.find('img').first().attr('alt');
}}
}
if(!subHtmlUrl){
if(typeof subHtml!=='undefined'&&subHtml!==null){
var fL=subHtml.substring(0, 1);
if(fL==='.'||fL==='#'){
if(this.s.subHtmlSelectorRelative&&!this.s.dynamic){
subHtml=$currentEle.find(subHtml).html();
}else{
subHtml=$(subHtml).html();
}}
}else{
subHtml='';
}}
if(this.s.appendSubHtmlTo==='.lg-sub-html'){
if(subHtmlUrl){
this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
}else{
this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
}}else{
if(subHtmlUrl){
this.$slide.eq(index).load(subHtmlUrl);
}else{
this.$slide.eq(index).append(subHtml);
}}
if(typeof subHtml!=='undefined'&&subHtml!==null){
if(subHtml===''){
this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
}else{
this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
}}
this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
};
Plugin.prototype.preload=function(index){
var i=1;
var j=1;
for (i=1; i <=this.s.preload; i++){
if(i >=this.$items.length - index){
break;
}
this.loadContent(index + i, false, 0);
}
for (j=1; j <=this.s.preload; j++){
if(index - j < 0){
break;
}
this.loadContent(index - j, false, 0);
}};
Plugin.prototype.loadContent=function(index, rec, delay){
var _this=this;
var _hasPoster=false;
var _$img;
var _src;
var _poster;
var _srcset;
var _sizes;
var _html;
var getResponsiveSrc=function(srcItms){
var rsWidth=[];
var rsSrc=[];
for (var i=0; i < srcItms.length; i++){
var __src=srcItms[i].split(' ');
if(__src[0]===''){
__src.splice(0, 1);
}
rsSrc.push(__src[0]);
rsWidth.push(__src[1]);
}
var wWidth=$(window).width();
for (var j=0; j < rsWidth.length; j++){
if(parseInt(rsWidth[j], 10) > wWidth){
_src=rsSrc[j];
break;
}}
};
if(_this.s.dynamic){
if(_this.s.dynamicEl[index].poster){
_hasPoster=true;
_poster=_this.s.dynamicEl[index].poster;
}
_html=_this.s.dynamicEl[index].html;
_src=_this.s.dynamicEl[index].src;
if(_this.s.dynamicEl[index].responsive){
var srcDyItms=_this.s.dynamicEl[index].responsive.split(',');
getResponsiveSrc(srcDyItms);
}
_srcset=_this.s.dynamicEl[index].srcset;
_sizes=_this.s.dynamicEl[index].sizes;
}else{
if(_this.$items.eq(index).attr('data-poster')){
_hasPoster=true;
_poster=_this.$items.eq(index).attr('data-poster');
}
_html=_this.$items.eq(index).attr('data-html');
_src=_this.$items.eq(index).attr('href')||_this.$items.eq(index).attr('data-src');
if(_this.$items.eq(index).attr('data-responsive')){
var srcItms=_this.$items.eq(index).attr('data-responsive').split(',');
getResponsiveSrc(srcItms);
}
_srcset=_this.$items.eq(index).attr('data-srcset');
_sizes=_this.$items.eq(index).attr('data-sizes');
}
var iframe=false;
if(_this.s.dynamic){
if(_this.s.dynamicEl[index].iframe){
iframe=true;
}}else{
if(_this.$items.eq(index).attr('data-iframe')==='true'){
iframe=true;
}}
var _isVideo=_this.isVideo(_src, index);
if(!_this.$slide.eq(index).hasClass('lg-loaded')){
if(iframe){
_this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
}else if(_hasPoster){
var videoClass='';
if(_isVideo&&_isVideo.youtube){
videoClass='lg-has-youtube';
}else if(_isVideo&&_isVideo.vimeo){
videoClass='lg-has-vimeo';
}else{
videoClass='lg-has-html5';
}
_this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
}else if(_isVideo){
_this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
_this.$el.trigger('hasVideo.lg', [index, _src, _html]);
}else{
_this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
}
_this.$el.trigger('onAferAppendSlide.lg', [index]);
_$img=_this.$slide.eq(index).find('.lg-object');
if(_sizes){
_$img.attr('sizes', _sizes);
}
if(_srcset){
_$img.attr('srcset', _srcset);
try {
picturefill({
elements: [_$img[0]]
});
} catch (e){
console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
}}
if(this.s.appendSubHtmlTo!=='.lg-sub-html'){
_this.addHtml(index);
}
_this.$slide.eq(index).addClass('lg-loaded');
}
_this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function(){
var _speed=0;
if(delay&&!$('body').hasClass('lg-from-hash')){
_speed=delay;
}
setTimeout(function(){
_this.$slide.eq(index).addClass('lg-complete');
_this.$el.trigger('onSlideItemLoad.lg', [index, delay||0]);
}, _speed);
});
if(_isVideo&&_isVideo.html5&&!_hasPoster){
_this.$slide.eq(index).addClass('lg-complete');
}
if(rec===true){
if(!_this.$slide.eq(index).hasClass('lg-complete')){
_this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function(){
_this.preload(index);
});
}else{
_this.preload(index);
}}
};
Plugin.prototype.slide=function(index, fromTouch, fromThumb, direction){
var _prevIndex=this.$outer.find('.lg-current').index();
var _this=this;
if(_this.lGalleryOn&&(_prevIndex===index)){
return;
}
var _length=this.$slide.length;
var _time=_this.lGalleryOn ? this.s.speed:0;
if(!_this.lgBusy){
if(this.s.download){
var _src;
if(_this.s.dynamic){
_src=_this.s.dynamicEl[index].downloadUrl!==false&&(_this.s.dynamicEl[index].downloadUrl||_this.s.dynamicEl[index].src);
}else{
_src=_this.$items.eq(index).attr('data-download-url')!=='false'&&(_this.$items.eq(index).attr('data-download-url')||_this.$items.eq(index).attr('href')||_this.$items.eq(index).attr('data-src'));
}
if(_src){
$('#lg-download').attr('href', _src);
_this.$outer.removeClass('lg-hide-download');
}else{
_this.$outer.addClass('lg-hide-download');
}}
this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
_this.lgBusy=true;
clearTimeout(_this.hideBartimeout);
if(this.s.appendSubHtmlTo==='.lg-sub-html'){
setTimeout(function(){
_this.addHtml(index);
}, _time);
}
this.arrowDisable(index);
if(!direction){
if(index < _prevIndex){
direction='prev';
}else if(index > _prevIndex){
direction='next';
}}
if(!fromTouch){
_this.$outer.addClass('lg-no-trans');
this.$slide.removeClass('lg-prev-slide lg-next-slide');
if(direction==='prev'){
this.$slide.eq(index).addClass('lg-prev-slide');
this.$slide.eq(_prevIndex).addClass('lg-next-slide');
}else{
this.$slide.eq(index).addClass('lg-next-slide');
this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
}
setTimeout(function(){
_this.$slide.removeClass('lg-current');
_this.$slide.eq(index).addClass('lg-current');
_this.$outer.removeClass('lg-no-trans');
}, 50);
}else{
this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
var touchPrev;
var touchNext;
if(_length > 2){
touchPrev=index - 1;
touchNext=index + 1;
if((index===0)&&(_prevIndex===_length - 1)){
touchNext=0;
touchPrev=_length - 1;
}else if((index===_length - 1)&&(_prevIndex===0)){
touchNext=0;
touchPrev=_length - 1;
}}else{
touchPrev=0;
touchNext=1;
}
if(direction==='prev'){
_this.$slide.eq(touchNext).addClass('lg-next-slide');
}else{
_this.$slide.eq(touchPrev).addClass('lg-prev-slide');
}
_this.$slide.eq(index).addClass('lg-current');
}
if(_this.lGalleryOn){
setTimeout(function(){
_this.loadContent(index, true, 0);
}, this.s.speed + 50);
setTimeout(function(){
_this.lgBusy=false;
_this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
}, this.s.speed);
}else{
_this.loadContent(index, true, _this.s.backdropDuration);
_this.lgBusy=false;
_this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
}
_this.lGalleryOn=true;
if(this.s.counter){
$('#lg-counter-current').text(index + 1);
}}
_this.index=index;
};
Plugin.prototype.goToNextSlide=function(fromTouch){
var _this=this;
var _loop=_this.s.loop;
if(fromTouch&&_this.$slide.length < 3){
_loop=false;
}
if(!_this.lgBusy){
if((_this.index + 1) < _this.$slide.length){
_this.index++;
_this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
_this.slide(_this.index, fromTouch, false, 'next');
}else{
if(_loop){
_this.index=0;
_this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
_this.slide(_this.index, fromTouch, false, 'next');
}else if(_this.s.slideEndAnimatoin&&!fromTouch){
_this.$outer.addClass('lg-right-end');
setTimeout(function(){
_this.$outer.removeClass('lg-right-end');
}, 400);
}}
}};
Plugin.prototype.goToPrevSlide=function(fromTouch){
var _this=this;
var _loop=_this.s.loop;
if(fromTouch&&_this.$slide.length < 3){
_loop=false;
}
if(!_this.lgBusy){
if(_this.index > 0){
_this.index--;
_this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
_this.slide(_this.index, fromTouch, false, 'prev');
}else{
if(_loop){
_this.index=_this.$items.length - 1;
_this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
_this.slide(_this.index, fromTouch, false, 'prev');
}else if(_this.s.slideEndAnimatoin&&!fromTouch){
_this.$outer.addClass('lg-left-end');
setTimeout(function(){
_this.$outer.removeClass('lg-left-end');
}, 400);
}}
}};
Plugin.prototype.keyPress=function(){
var _this=this;
if(this.$items.length > 1){
$(window).on('keyup.lg', function(e){
if(_this.$items.length > 1){
if(e.keyCode===37){
e.preventDefault();
_this.goToPrevSlide();
}
if(e.keyCode===39){
e.preventDefault();
_this.goToNextSlide();
}}
});
}
$(window).on('keydown.lg', function(e){
if(_this.s.escKey===true&&e.keyCode===27){
e.preventDefault();
if(!_this.$outer.hasClass('lg-thumb-open')){
_this.destroy();
}else{
_this.$outer.removeClass('lg-thumb-open');
}}
});
};
Plugin.prototype.arrow=function(){
var _this=this;
this.$outer.find('.lg-prev').on('click.lg', function(){
_this.goToPrevSlide();
});
this.$outer.find('.lg-next').on('click.lg', function(){
_this.goToNextSlide();
});
};
Plugin.prototype.arrowDisable=function(index){
if(!this.s.loop&&this.s.hideControlOnEnd){
if((index + 1) < this.$slide.length){
this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
}else{
this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
}
if(index > 0){
this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
}else{
this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
}}
};
Plugin.prototype.setTranslate=function($el, xValue, yValue){
if(this.s.useLeft){
$el.css('left', xValue);
}else{
$el.css({
transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
});
}};
Plugin.prototype.touchMove=function(startCoords, endCoords){
var distance=endCoords - startCoords;
if(Math.abs(distance) > 15){
this.$outer.addClass('lg-dragging');
this.setTranslate(this.$slide.eq(this.index), distance, 0);
this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
}};
Plugin.prototype.touchEnd=function(distance){
var _this=this;
if(_this.s.mode!=='lg-slide'){
_this.$outer.addClass('lg-slide');
}
this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');
setTimeout(function(){
_this.$outer.removeClass('lg-dragging');
if((distance < 0)&&(Math.abs(distance) > _this.s.swipeThreshold)){
_this.goToNextSlide(true);
}else if((distance > 0)&&(Math.abs(distance) > _this.s.swipeThreshold)){
_this.goToPrevSlide(true);
}else if(Math.abs(distance) < 5){
_this.$el.trigger('onSlideClick.lg');
}
_this.$slide.removeAttr('style');
});
setTimeout(function(){
if(!_this.$outer.hasClass('lg-dragging')&&_this.s.mode!=='lg-slide'){
_this.$outer.removeClass('lg-slide');
}}, _this.s.speed + 100);
};
Plugin.prototype.enableSwipe=function(){
var _this=this;
var startCoords=0;
var endCoords=0;
var isMoved=false;
if(_this.s.enableSwipe&&_this.doCss()){
_this.$slide.on('touchstart.lg', function(e){
if(!_this.$outer.hasClass('lg-zoomed')&&!_this.lgBusy){
e.preventDefault();
_this.manageSwipeClass();
startCoords=e.originalEvent.targetTouches[0].pageX;
}});
_this.$slide.on('touchmove.lg', function(e){
if(!_this.$outer.hasClass('lg-zoomed')){
e.preventDefault();
endCoords=e.originalEvent.targetTouches[0].pageX;
_this.touchMove(startCoords, endCoords);
isMoved=true;
}});
_this.$slide.on('touchend.lg', function(){
if(!_this.$outer.hasClass('lg-zoomed')){
if(isMoved){
isMoved=false;
_this.touchEnd(endCoords - startCoords);
}else{
_this.$el.trigger('onSlideClick.lg');
}}
});
}};
Plugin.prototype.enableDrag=function(){
var _this=this;
var startCoords=0;
var endCoords=0;
var isDraging=false;
var isMoved=false;
if(_this.s.enableDrag&&_this.doCss()){
_this.$slide.on('mousedown.lg', function(e){
if(!_this.$outer.hasClass('lg-zoomed')&&!_this.lgBusy&&!$(e.target).text().trim()){
e.preventDefault();
_this.manageSwipeClass();
startCoords=e.pageX;
isDraging=true;
_this.$outer.scrollLeft +=1;
_this.$outer.scrollLeft -=1;
_this.$outer.removeClass('lg-grab').addClass('lg-grabbing');
_this.$el.trigger('onDragstart.lg');
}});
$(window).on('mousemove.lg', function(e){
if(isDraging){
isMoved=true;
endCoords=e.pageX;
_this.touchMove(startCoords, endCoords);
_this.$el.trigger('onDragmove.lg');
}});
$(window).on('mouseup.lg', function(e){
if(isMoved){
isMoved=false;
_this.touchEnd(endCoords - startCoords);
_this.$el.trigger('onDragend.lg');
}else if($(e.target).hasClass('lg-object')||$(e.target).hasClass('lg-video-play')){
_this.$el.trigger('onSlideClick.lg');
}
if(isDraging){
isDraging=false;
_this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
}});
}};
Plugin.prototype.manageSwipeClass=function(){
var _touchNext=this.index + 1;
var _touchPrev=this.index - 1;
if(this.s.loop&&this.$slide.length > 2){
if(this.index===0){
_touchPrev=this.$slide.length - 1;
}else if(this.index===this.$slide.length - 1){
_touchNext=0;
}}
this.$slide.removeClass('lg-next-slide lg-prev-slide');
if(_touchPrev > -1){
this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
}
this.$slide.eq(_touchNext).addClass('lg-next-slide');
};
Plugin.prototype.mousewheel=function(){
var _this=this;
_this.$outer.on('mousewheel.lg', function(e){
if(!e.deltaY){
return;
}
if(e.deltaY > 0){
_this.goToPrevSlide();
}else{
_this.goToNextSlide();
}
e.preventDefault();
});
};
Plugin.prototype.closeGallery=function(){
var _this=this;
var mousedown=false;
this.$outer.find('.lg-close').on('click.lg', function(){
_this.destroy();
});
if(_this.s.closable){
_this.$outer.on('mousedown.lg', function(e){
if($(e.target).is('.lg-outer')||$(e.target).is('.lg-item ')||$(e.target).is('.lg-img-wrap')){
mousedown=true;
}else{
mousedown=false;
}});
_this.$outer.on('mousemove.lg', function(){
mousedown=false;
});
_this.$outer.on('mouseup.lg', function(e){
if($(e.target).is('.lg-outer')||$(e.target).is('.lg-item ')||$(e.target).is('.lg-img-wrap')&&mousedown){
if(!_this.$outer.hasClass('lg-dragging')){
if(_this.$outer.hasClass('lg-visible')){
_this.destroy();
}}
}});
}};
Plugin.prototype.destroy=function(d){
var _this=this;
if(!d){
_this.$el.trigger('onBeforeClose.lg');
$(window).scrollTop(_this.prevScrollTop);
}
if(d){
if(!_this.s.dynamic){
this.$items.off('click.lg click.lgcustom');
}
$.removeData(_this.el, 'lightGallery');
}
this.$el.off('.lg.tm');
$.each($.fn.lightGallery.modules, function(key){
if(_this.modules[key]){
_this.modules[key].destroy();
}});
this.lGalleryOn=false;
clearTimeout(_this.hideBartimeout);
this.hideBartimeout=false;
$(window).off('.lg');
$('body').removeClass('lg-on lg-from-hash');
if(_this.$outer){
_this.$outer.removeClass('lg-visible');
}
$('.lg-backdrop').removeClass('in');
setTimeout(function(){
if(_this.$outer){
_this.$outer.remove();
}
$('.lg-backdrop').remove();
if(!d){
_this.$el.trigger('onCloseAfter.lg');
}}, _this.s.backdropDuration + 50);
};
$.fn.lightGallery=function(options){
return this.each(function(){
if(!$.data(this, 'lightGallery')){
$.data(this, 'lightGallery', new Plugin(this, options));
}else{
try {
$(this).data('lightGallery').init();
} catch (err){
console.error('lightGallery has not initiated properly');
}}
});
};
$.fn.lightGallery.modules={};})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var defaults={
autoplay: false,
pause: 5000,
progressBar: true,
fourceAutoplay: false,
autoplayControls: true,
appendAutoplayControlsTo: '.lg-toolbar'
};
var Autoplay=function(element){
this.core=$(element).data('lightGallery');
this.$el=$(element);
if(this.core.$items.length < 2){
return false;
}
this.core.s=$.extend({}, defaults, this.core.s);
this.interval=false;
this.fromAuto=true;
this.canceledOnTouch=false;
this.fourceAutoplayTemp=this.core.s.fourceAutoplay;
if(!this.core.doCss()){
this.core.s.progressBar=false;
}
this.init();
return this;
};
Autoplay.prototype.init=function(){
var _this=this;
if(_this.core.s.autoplayControls){
_this.controls();
}
if(_this.core.s.progressBar){
_this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
}
_this.progress();
if(_this.core.s.autoplay){
_this.$el.one('onSlideItemLoad.lg.tm', function(){
_this.startlAuto();
});
}
_this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function(){
if(_this.interval){
_this.cancelAuto();
_this.canceledOnTouch=true;
}});
_this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function(){
if(!_this.interval&&_this.canceledOnTouch){
_this.startlAuto();
_this.canceledOnTouch=false;
}});
};
Autoplay.prototype.progress=function(){
var _this=this;
var _$progressBar;
var _$progress;
_this.$el.on('onBeforeSlide.lg.tm', function(){
if(_this.core.s.progressBar&&_this.fromAuto){
_$progressBar=_this.core.$outer.find('.lg-progress-bar');
_$progress=_this.core.$outer.find('.lg-progress');
if(_this.interval){
_$progress.removeAttr('style');
_$progressBar.removeClass('lg-start');
setTimeout(function(){
_$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
_$progressBar.addClass('lg-start');
}, 20);
}}
if(!_this.fromAuto&&!_this.core.s.fourceAutoplay){
_this.cancelAuto();
}
_this.fromAuto=false;
});
};
Autoplay.prototype.controls=function(){
var _this=this;
var _html='<span class="lg-autoplay-button lg-icon"></span>';
$(this.core.s.appendAutoplayControlsTo).append(_html);
_this.core.$outer.find('.lg-autoplay-button').on('click.lg', function(){
if($(_this.core.$outer).hasClass('lg-show-autoplay')){
_this.cancelAuto();
_this.core.s.fourceAutoplay=false;
}else{
if(!_this.interval){
_this.startlAuto();
_this.core.s.fourceAutoplay=_this.fourceAutoplayTemp;
}}
});
};
Autoplay.prototype.startlAuto=function(){
var _this=this;
_this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
_this.core.$outer.addClass('lg-show-autoplay');
_this.core.$outer.find('.lg-progress-bar').addClass('lg-start');
_this.interval=setInterval(function(){
if(_this.core.index + 1 < _this.core.$items.length){
_this.core.index++;
}else{
_this.core.index=0;
}
_this.fromAuto=true;
_this.core.slide(_this.core.index, false, false, 'next');
}, _this.core.s.speed + _this.core.s.pause);
};
Autoplay.prototype.cancelAuto=function(){
clearInterval(this.interval);
this.interval=false;
this.core.$outer.find('.lg-progress').removeAttr('style');
this.core.$outer.removeClass('lg-show-autoplay');
this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
};
Autoplay.prototype.destroy=function(){
this.cancelAuto();
this.core.$outer.find('.lg-progress-bar').remove();
};
$.fn.lightGallery.modules.autoplay=Autoplay;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof module==='object'&&module.exports){
module.exports=factory(require('jquery'));
}else{
factory(root["jQuery"]);
}}(this, function ($){
(function(){
'use strict';
var defaults={
fullScreen: true
};
function isFullScreen(){
return (
document.fullscreenElement ||
document.mozFullScreenElement ||
document.webkitFullscreenElement ||
document.msFullscreenElement
);
}
var Fullscreen=function(element){
this.core=$(element).data('lightGallery');
this.$el=$(element);
this.core.s=$.extend({}, defaults, this.core.s);
this.init();
return this;
};
Fullscreen.prototype.init=function(){
var fullScreen='';
if(this.core.s.fullScreen){
if(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled &&
!document.mozFullScreenEnabled&&!document.msFullscreenEnabled){
return;
}else{
fullScreen='<span class="lg-fullscreen lg-icon"></span>';
this.core.$outer.find('.lg-toolbar').append(fullScreen);
this.fullScreen();
}}
};
Fullscreen.prototype.requestFullscreen=function(){
var el=document.documentElement;
if(el.requestFullscreen){
el.requestFullscreen();
}else if(el.msRequestFullscreen){
el.msRequestFullscreen();
}else if(el.mozRequestFullScreen){
el.mozRequestFullScreen();
}else if(el.webkitRequestFullscreen){
el.webkitRequestFullscreen();
}};
Fullscreen.prototype.exitFullscreen=function(){
if(document.exitFullscreen){
document.exitFullscreen();
}else if(document.msExitFullscreen){
document.msExitFullscreen();
}else if(document.mozCancelFullScreen){
document.mozCancelFullScreen();
}else if(document.webkitExitFullscreen){
document.webkitExitFullscreen();
}};
Fullscreen.prototype.fullScreen=function(){
var _this=this;
$(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function(){
_this.core.$outer.toggleClass('lg-fullscreen-on');
});
this.core.$outer.find('.lg-fullscreen').on('click.lg', function(){
if(isFullScreen()){
_this.exitFullscreen();
}else{
_this.requestFullscreen();
}});
};
Fullscreen.prototype.destroy=function(){
if(isFullScreen()){
this.exitFullscreen();
}
$(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
};
$.fn.lightGallery.modules.fullscreen=Fullscreen;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var defaults={
pager: false
};
var Pager=function(element){
this.core=$(element).data('lightGallery');
this.$el=$(element);
this.core.s=$.extend({}, defaults, this.core.s);
if(this.core.s.pager&&this.core.$items.length > 1){
this.init();
}
return this;
};
Pager.prototype.init=function(){
var _this=this;
var pagerList='';
var $pagerCont;
var $pagerOuter;
var timeout;
_this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');
if(_this.core.s.dynamic){
for (var i=0; i < _this.core.s.dynamicEl.length; i++){
pagerList +='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[i].thumb + '" /></div></span>';
}}else{
_this.core.$items.each(function(){
if(!_this.core.s.exThumbImage){
pagerList +='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).find('img').attr('src') + '" /></div></span>';
}else{
pagerList +='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).attr(_this.core.s.exThumbImage) + '" /></div></span>';
}});
}
$pagerOuter=_this.core.$outer.find('.lg-pager-outer');
$pagerOuter.html(pagerList);
$pagerCont=_this.core.$outer.find('.lg-pager-cont');
$pagerCont.on('click.lg touchend.lg', function(){
var _$this=$(this);
_this.core.index=_$this.index();
_this.core.slide(_this.core.index, false, true, false);
});
$pagerOuter.on('mouseover.lg', function(){
clearTimeout(timeout);
$pagerOuter.addClass('lg-pager-hover');
});
$pagerOuter.on('mouseout.lg', function(){
timeout=setTimeout(function(){
$pagerOuter.removeClass('lg-pager-hover');
});
});
_this.core.$el.on('onBeforeSlide.lg.tm', function(e, prevIndex, index){
$pagerCont.removeClass('lg-pager-active');
$pagerCont.eq(index).addClass('lg-pager-active');
});
};
Pager.prototype.destroy=function(){
};
$.fn.lightGallery.modules.pager=Pager;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var defaults={
thumbnail: true,
animateThumb: true,
currentPagerPosition: 'middle',
thumbWidth: 100,
thumbHeight: '80px',
thumbContHeight: 100,
thumbMargin: 5,
exThumbImage: false,
showThumbByDefault: true,
toogleThumb: true,
pullCaptionUp: true,
enableThumbDrag: true,
enableThumbSwipe: true,
swipeThreshold: 50,
loadYoutubeThumbnail: true,
youtubeThumbSize: 1,
loadVimeoThumbnail: true,
vimeoThumbSize: 'thumbnail_small',
loadDailymotionThumbnail: true
};
var Thumbnail=function(element){
this.core=$(element).data('lightGallery');
this.core.s=$.extend({}, defaults, this.core.s);
this.$el=$(element);
this.$thumbOuter=null;
this.thumbOuterWidth=0;
this.thumbTotalWidth=(this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
this.thumbIndex=this.core.index;
if(this.core.s.animateThumb){
this.core.s.thumbHeight='100%';
}
this.left=0;
this.init();
return this;
};
Thumbnail.prototype.init=function(){
var _this=this;
if(this.core.s.thumbnail&&this.core.$items.length > 1){
if(this.core.s.showThumbByDefault){
setTimeout(function(){
_this.core.$outer.addClass('lg-thumb-open');
}, 700);
}
if(this.core.s.pullCaptionUp){
this.core.$outer.addClass('lg-pull-caption-up');
}
this.build();
if(this.core.s.animateThumb&&this.core.doCss()){
if(this.core.s.enableThumbDrag){
this.enableThumbDrag();
}
if(this.core.s.enableThumbSwipe){
this.enableThumbSwipe();
}
this.thumbClickable=false;
}else{
this.thumbClickable=true;
}
this.toogle();
this.thumbkeyPress();
}};
Thumbnail.prototype.build=function(){
var _this=this;
var thumbList='';
var vimeoErrorThumbSize='';
var $thumb;
var html='<div class="lg-thumb-outer">' +
'<div class="lg-thumb lg-group">' +
'</div>' +
'</div>';
switch (this.core.s.vimeoThumbSize){
case 'thumbnail_large':
vimeoErrorThumbSize='640';
break;
case 'thumbnail_medium':
vimeoErrorThumbSize='200x150';
break;
case 'thumbnail_small':
vimeoErrorThumbSize='100x75';
}
_this.core.$outer.addClass('lg-has-thumb');
_this.core.$outer.find('.lg').append(html);
_this.$thumbOuter=_this.core.$outer.find('.lg-thumb-outer');
_this.thumbOuterWidth=_this.$thumbOuter.width();
if(_this.core.s.animateThumb){
_this.core.$outer.find('.lg-thumb').css({
width: _this.thumbTotalWidth + 'px',
position: 'relative'
});
}
if(this.core.s.animateThumb){
_this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
}
function getThumb(src, thumb, index){
var isVideo=_this.core.isVideo(src, index)||{};
var thumbImg;
var vimeoId='';
if(isVideo.youtube||isVideo.vimeo||isVideo.dailymotion){
if(isVideo.youtube){
if(_this.core.s.loadYoutubeThumbnail){
thumbImg='//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
}else{
thumbImg=thumb;
}}else if(isVideo.vimeo){
if(_this.core.s.loadVimeoThumbnail){
thumbImg='//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
vimeoId=isVideo.vimeo[1];
}else{
thumbImg=thumb;
}}else if(isVideo.dailymotion){
if(_this.core.s.loadDailymotionThumbnail){
thumbImg='//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
}else{
thumbImg=thumb;
}}
}else{
thumbImg=thumb;
}
thumbList +='<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
vimeoId='';
}
if(_this.core.s.dynamic){
for (var i=0; i < _this.core.s.dynamicEl.length; i++){
getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
}}else{
_this.core.$items.each(function(i){
if(!_this.core.s.exThumbImage){
getThumb($(this).attr('href')||$(this).attr('data-src'), $(this).find('img').attr('src'), i);
}else{
getThumb($(this).attr('href')||$(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
}});
}
_this.core.$outer.find('.lg-thumb').html(thumbList);
$thumb=_this.core.$outer.find('.lg-thumb-item');
$thumb.each(function(){
var $this=$(this);
var vimeoVideoId=$this.attr('data-vimeo-id');
if(vimeoVideoId){
$.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
format: 'json'
}, function(data){
$this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
});
}});
$thumb.eq(_this.core.index).addClass('active');
_this.core.$el.on('onBeforeSlide.lg.tm', function(){
$thumb.removeClass('active');
$thumb.eq(_this.core.index).addClass('active');
});
$thumb.on('click.lg touchend.lg', function(){
var _$this=$(this);
setTimeout(function(){
if((_this.thumbClickable&&!_this.core.lgBusy)||!_this.core.doCss()){
_this.core.index=_$this.index();
_this.core.slide(_this.core.index, false, true, false);
}}, 50);
});
_this.core.$el.on('onBeforeSlide.lg.tm', function(){
_this.animateThumb(_this.core.index);
});
$(window).on('resize.lg.thumb orientationchange.lg.thumb', function(){
setTimeout(function(){
_this.animateThumb(_this.core.index);
_this.thumbOuterWidth=_this.$thumbOuter.width();
}, 200);
});
};
Thumbnail.prototype.setTranslate=function(value){
this.core.$outer.find('.lg-thumb').css({
transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
});
};
Thumbnail.prototype.animateThumb=function(index){
var $thumb=this.core.$outer.find('.lg-thumb');
if(this.core.s.animateThumb){
var position;
switch (this.core.s.currentPagerPosition){
case 'left':
position=0;
break;
case 'middle':
position=(this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
break;
case 'right':
position=this.thumbOuterWidth - this.core.s.thumbWidth;
}
this.left=((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
if(this.left > (this.thumbTotalWidth - this.thumbOuterWidth)){
this.left=this.thumbTotalWidth - this.thumbOuterWidth;
}
if(this.left < 0){
this.left=0;
}
if(this.core.lGalleryOn){
if(!$thumb.hasClass('on')){
this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
}
if(!this.core.doCss()){
$thumb.animate({
left: -this.left + 'px'
}, this.core.s.speed);
}}else{
if(!this.core.doCss()){
$thumb.css('left', -this.left + 'px');
}}
this.setTranslate(this.left);
}};
Thumbnail.prototype.enableThumbDrag=function(){
var _this=this;
var startCoords=0;
var endCoords=0;
var isDraging=false;
var isMoved=false;
var tempLeft=0;
_this.$thumbOuter.addClass('lg-grab');
_this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e){
if(_this.thumbTotalWidth > _this.thumbOuterWidth){
e.preventDefault();
startCoords=e.pageX;
isDraging=true;
_this.core.$outer.scrollLeft +=1;
_this.core.$outer.scrollLeft -=1;
_this.thumbClickable=false;
_this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
}});
$(window).on('mousemove.lg.thumb', function(e){
if(isDraging){
tempLeft=_this.left;
isMoved=true;
endCoords=e.pageX;
_this.$thumbOuter.addClass('lg-dragging');
tempLeft=tempLeft - (endCoords - startCoords);
if(tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)){
tempLeft=_this.thumbTotalWidth - _this.thumbOuterWidth;
}
if(tempLeft < 0){
tempLeft=0;
}
_this.setTranslate(tempLeft);
}});
$(window).on('mouseup.lg.thumb', function(){
if(isMoved){
isMoved=false;
_this.$thumbOuter.removeClass('lg-dragging');
_this.left=tempLeft;
if(Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold){
_this.thumbClickable=true;
}}else{
_this.thumbClickable=true;
}
if(isDraging){
isDraging=false;
_this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
}});
};
Thumbnail.prototype.enableThumbSwipe=function(){
var _this=this;
var startCoords=0;
var endCoords=0;
var isMoved=false;
var tempLeft=0;
_this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e){
if(_this.thumbTotalWidth > _this.thumbOuterWidth){
e.preventDefault();
startCoords=e.originalEvent.targetTouches[0].pageX;
_this.thumbClickable=false;
}});
_this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e){
if(_this.thumbTotalWidth > _this.thumbOuterWidth){
e.preventDefault();
endCoords=e.originalEvent.targetTouches[0].pageX;
isMoved=true;
_this.$thumbOuter.addClass('lg-dragging');
tempLeft=_this.left;
tempLeft=tempLeft - (endCoords - startCoords);
if(tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)){
tempLeft=_this.thumbTotalWidth - _this.thumbOuterWidth;
}
if(tempLeft < 0){
tempLeft=0;
}
_this.setTranslate(tempLeft);
}});
_this.core.$outer.find('.lg-thumb').on('touchend.lg', function(){
if(_this.thumbTotalWidth > _this.thumbOuterWidth){
if(isMoved){
isMoved=false;
_this.$thumbOuter.removeClass('lg-dragging');
if(Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold){
_this.thumbClickable=true;
}
_this.left=tempLeft;
}else{
_this.thumbClickable=true;
}}else{
_this.thumbClickable=true;
}});
};
Thumbnail.prototype.toogle=function(){
var _this=this;
if(_this.core.s.toogleThumb){
_this.core.$outer.addClass('lg-can-toggle');
_this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
_this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function(){
_this.core.$outer.toggleClass('lg-thumb-open');
});
}};
Thumbnail.prototype.thumbkeyPress=function(){
var _this=this;
$(window).on('keydown.lg.thumb', function(e){
if(e.keyCode===38){
e.preventDefault();
_this.core.$outer.addClass('lg-thumb-open');
}else if(e.keyCode===40){
e.preventDefault();
_this.core.$outer.removeClass('lg-thumb-open');
}});
};
Thumbnail.prototype.destroy=function(){
if(this.core.s.thumbnail&&this.core.$items.length > 1){
$(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
this.$thumbOuter.remove();
this.core.$outer.removeClass('lg-has-thumb');
}};
$.fn.lightGallery.modules.Thumbnail=Thumbnail;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof module==='object'&&module.exports){
module.exports=factory(require('jquery'));
}else{
factory(root["jQuery"]);
}}(this, function ($){
(function(){
'use strict';
var defaults={
videoMaxWidth: '855px',
autoplayFirstVideo: true,
youtubePlayerParams: false,
vimeoPlayerParams: false,
dailymotionPlayerParams: false,
vkPlayerParams: false,
videojs: false,
videojsOptions: {}};
var Video=function(element){
this.core=$(element).data('lightGallery');
this.$el=$(element);
this.core.s=$.extend({}, defaults, this.core.s);
this.videoLoaded=false;
this.init();
return this;
};
Video.prototype.init=function(){
var _this=this;
_this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
_this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
if(_this.core.doCss()&&(_this.core.$items.length > 1)&&(_this.core.s.enableSwipe||_this.core.s.enableDrag)){
_this.core.$el.on('onSlideClick.lg.tm', function(){
var $el=_this.core.$slide.eq(_this.core.index);
_this.loadVideoOnclick($el);
});
}else{
_this.core.$slide.on('click.lg', function(){
_this.loadVideoOnclick($(this));
});
}
_this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
_this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex){
_this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
});
if(_this.core.s.autoplayFirstVideo){
_this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index){
if(!_this.core.lGalleryOn){
var $el=_this.core.$slide.eq(index);
setTimeout(function (){
_this.loadVideoOnclick($el);
}, 100);
}});
}};
Video.prototype.loadVideo=function(src, addClass, noPoster, index, html){
var video='';
var autoplay=1;
var a='';
var isVideo=this.core.isVideo(src, index)||{};
if(noPoster){
if(this.videoLoaded){
autoplay=0;
}else{
autoplay=this.core.s.autoplayFirstVideo ? 1:0;
}}
if(isVideo.youtube){
a='?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
if(this.core.s.youtubePlayerParams){
a=a + '&' + $.param(this.core.s.youtubePlayerParams);
}
video='<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
}else if(isVideo.vimeo){
a='?autoplay=' + autoplay + '&api=1';
if(this.core.s.vimeoPlayerParams){
a=a + '&' + $.param(this.core.s.vimeoPlayerParams);
}
video='<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
}else if(isVideo.dailymotion){
a='?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
if(this.core.s.dailymotionPlayerParams){
a=a + '&' + $.param(this.core.s.dailymotionPlayerParams);
}
video='<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
}else if(isVideo.html5){
var fL=html.substring(0, 1);
if(fL==='.'||fL==='#'){
html=$(html).html();
}
video=html;
}else if(isVideo.vk){
a='&autoplay=' + autoplay;
if(this.core.s.vkPlayerParams){
a=a + '&' + $.param(this.core.s.vkPlayerParams);
}
video='<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="//vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
}
return video;
};
Video.prototype.loadVideoOnclick=function($el){
var _this=this;
if($el.find('.lg-object').hasClass('lg-has-poster')&&$el.find('.lg-object').is(':visible')){
if(!$el.hasClass('lg-has-video')){
$el.addClass('lg-video-playing lg-has-video');
var _src;
var _html;
var _loadVideo=function(_src, _html){
$el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));
if(_html){
if(_this.core.s.videojs){
try {
videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function(){
this.play();
});
} catch (e){
console.error('Make sure you have included videojs');
}}else{
_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
}}
};
if(_this.core.s.dynamic){
_src=_this.core.s.dynamicEl[_this.core.index].src;
_html=_this.core.s.dynamicEl[_this.core.index].html;
_loadVideo(_src, _html);
}else{
_src=_this.core.$items.eq(_this.core.index).attr('href')||_this.core.$items.eq(_this.core.index).attr('data-src');
_html=_this.core.$items.eq(_this.core.index).attr('data-html');
_loadVideo(_src, _html);
}
var $tempImg=$el.find('.lg-object');
$el.find('.lg-video').append($tempImg);
if(!$el.find('.lg-video-object').hasClass('lg-html5')){
$el.removeClass('lg-complete');
$el.find('.lg-video-object').on('load.lg error.lg', function(){
$el.addClass('lg-complete');
});
}}else{
var youtubePlayer=$el.find('.lg-youtube').get(0);
var vimeoPlayer=$el.find('.lg-vimeo').get(0);
var dailymotionPlayer=$el.find('.lg-dailymotion').get(0);
var html5Player=$el.find('.lg-html5').get(0);
if(youtubePlayer){
youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}else if(vimeoPlayer){
try {
$f(vimeoPlayer).api('play');
} catch (e){
console.error('Make sure you have included froogaloop2 js');
}}else if(dailymotionPlayer){
dailymotionPlayer.contentWindow.postMessage('play', '*');
}else if(html5Player){
if(_this.core.s.videojs){
try {
videojs(html5Player).play();
} catch (e){
console.error('Make sure you have included videojs');
}}else{
html5Player.play();
}}
$el.addClass('lg-video-playing');
}}
};
Video.prototype.destroy=function(){
this.videoLoaded=false;
};
function onHasVideo(event, index, src, html){
var _this=this;
_this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
if(html){
if(_this.core.s.videojs){
try {
videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function(){
if(!_this.videoLoaded&&_this.core.s.autoplayFirstVideo){
this.play();
}});
} catch (e){
console.error('Make sure you have included videojs');
}}else{
if(!_this.videoLoaded&&_this.core.s.autoplayFirstVideo){
_this.core.$slide.eq(index).find('.lg-html5').get(0).play();
}}
}}
function onAferAppendSlide(event, index){
var $videoCont=this.core.$slide.eq(index).find('.lg-video-cont');
if(!$videoCont.hasClass('lg-has-iframe')){
$videoCont.css('max-width', this.core.s.videoMaxWidth);
this.videoLoaded=true;
}}
function onBeforeSlide(event, prevIndex, index){
var _this=this;
var $videoSlide=_this.core.$slide.eq(prevIndex);
var youtubePlayer=$videoSlide.find('.lg-youtube').get(0);
var vimeoPlayer=$videoSlide.find('.lg-vimeo').get(0);
var dailymotionPlayer=$videoSlide.find('.lg-dailymotion').get(0);
var vkPlayer=$videoSlide.find('.lg-vk').get(0);
var html5Player=$videoSlide.find('.lg-html5').get(0);
if(youtubePlayer){
youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}else if(vimeoPlayer){
try {
$f(vimeoPlayer).api('pause');
} catch (e){
console.error('Make sure you have included froogaloop2 js');
}}else if(dailymotionPlayer){
dailymotionPlayer.contentWindow.postMessage('pause', '*');
}else if(html5Player){
if(_this.core.s.videojs){
try {
videojs(html5Player).pause();
} catch (e){
console.error('Make sure you have included videojs');
}}else{
html5Player.pause();
}} if(vkPlayer){
$(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
}
var _src;
if(_this.core.s.dynamic){
_src=_this.core.s.dynamicEl[index].src;
}else{
_src=_this.core.$items.eq(index).attr('href')||_this.core.$items.eq(index).attr('data-src');
}
var _isVideo=_this.core.isVideo(_src, index)||{};
if(_isVideo.youtube||_isVideo.vimeo||_isVideo.dailymotion||_isVideo.vk){
_this.core.$outer.addClass('lg-hide-download');
}}
$.fn.lightGallery.modules.video=Video;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var getUseLeft=function(){
var useLeft=false;
var isChrome=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
if(isChrome&&parseInt(isChrome[2], 10) < 54){
useLeft=true;
}
return useLeft;
};
var defaults={
scale: 1,
zoom: true,
actualSize: true,
enableZoomAfter: 300,
useLeftForZoom: getUseLeft()
};
var Zoom=function(element){
this.core=$(element).data('lightGallery');
this.core.s=$.extend({}, defaults, this.core.s);
if(this.core.s.zoom&&this.core.doCss()){
this.init();
this.zoomabletimeout=false;
this.pageX=$(window).width() / 2;
this.pageY=($(window).height() / 2) + $(window).scrollTop();
}
return this;
};
Zoom.prototype.init=function(){
var _this=this;
var zoomIcons='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
if(_this.core.s.actualSize){
zoomIcons +='<span id="lg-actual-size" class="lg-icon"></span>';
}
if(_this.core.s.useLeftForZoom){
_this.core.$outer.addClass('lg-use-left-for-zoom');
}else{
_this.core.$outer.addClass('lg-use-transition-for-zoom');
}
this.core.$outer.find('.lg-toolbar').append(zoomIcons);
_this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function(event, index, delay){
var _speed=_this.core.s.enableZoomAfter + delay;
if($('body').hasClass('lg-from-hash')&&delay){
_speed=0;
}else{
$('body').removeClass('lg-from-hash');
}
_this.zoomabletimeout=setTimeout(function(){
_this.core.$slide.eq(index).addClass('lg-zoomable');
}, _speed + 30);
});
var scale=1;
var zoom=function(scaleVal){
var $image=_this.core.$outer.find('.lg-current .lg-image');
var _x;
var _y;
var offsetX=($(window).width() - $image.prop('offsetWidth')) / 2;
var offsetY=(($(window).height() - $image.prop('offsetHeight')) / 2) + $(window).scrollTop();
_x=_this.pageX - offsetX;
_y=_this.pageY - offsetY;
var x=(scaleVal - 1) * (_x);
var y=(scaleVal - 1) * (_y);
$image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);
if(_this.core.s.useLeftForZoom){
$image.parent().css({
left: -x + 'px',
top: -y + 'px'
}).attr('data-x', x).attr('data-y', y);
}else{
$image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
}};
var callScale=function(){
if(scale > 1){
_this.core.$outer.addClass('lg-zoomed');
}else{
_this.resetZoom();
}
if(scale < 1){
scale=1;
}
zoom(scale);
};
var actualSize=function(event, $image, index, fromIcon){
var w=$image.prop('offsetWidth');
var nw;
if(_this.core.s.dynamic){
nw=_this.core.s.dynamicEl[index].width||$image[0].naturalWidth||w;
}else{
nw=_this.core.$items.eq(index).attr('data-width')||$image[0].naturalWidth||w;
}
var _scale;
if(_this.core.$outer.hasClass('lg-zoomed')){
scale=1;
}else{
if(nw > w){
_scale=nw / w;
scale=_scale||2;
}}
if(fromIcon){
_this.pageX=$(window).width() / 2;
_this.pageY=($(window).height() / 2) + $(window).scrollTop();
}else{
_this.pageX=event.pageX||event.originalEvent.targetTouches[0].pageX;
_this.pageY=event.pageY||event.originalEvent.targetTouches[0].pageY;
}
callScale();
setTimeout(function(){
_this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
}, 10);
};
var tapped=false;
_this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function(event, index){
var $image=_this.core.$slide.eq(index).find('.lg-image');
$image.on('dblclick', function(event){
actualSize(event, $image, index);
});
$image.on('touchstart', function(event){
if(!tapped){
tapped=setTimeout(function(){
tapped=null;
}, 300);
}else{
clearTimeout(tapped);
tapped=null;
actualSize(event, $image, index);
}
event.preventDefault();
});
});
$(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function(){
_this.pageX=$(window).width() / 2;
_this.pageY=($(window).height() / 2) + $(window).scrollTop();
zoom(scale);
});
$('#lg-zoom-out').on('click.lg', function(){
if(_this.core.$outer.find('.lg-current .lg-image').length){
scale -=_this.core.s.scale;
callScale();
}});
$('#lg-zoom-in').on('click.lg', function(){
if(_this.core.$outer.find('.lg-current .lg-image').length){
scale +=_this.core.s.scale;
callScale();
}});
$('#lg-actual-size').on('click.lg', function(event){
actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
});
_this.core.$el.on('onBeforeSlide.lg.tm', function(){
scale=1;
_this.resetZoom();
});
_this.zoomDrag();
_this.zoomSwipe();
};
Zoom.prototype.resetZoom=function(){
this.core.$outer.removeClass('lg-zoomed');
this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
this.core.$slide.find('.lg-image').removeAttr('style data-scale');
this.pageX=$(window).width() / 2;
this.pageY=($(window).height() / 2) + $(window).scrollTop();
};
Zoom.prototype.zoomSwipe=function(){
var _this=this;
var startCoords={};
var endCoords={};
var isMoved=false;
var allowX=false;
var allowY=false;
_this.core.$slide.on('touchstart.lg', function(e){
if(_this.core.$outer.hasClass('lg-zoomed')){
var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');
allowY=$image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
allowX=$image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
if((allowX||allowY)){
e.preventDefault();
startCoords={
x: e.originalEvent.targetTouches[0].pageX,
y: e.originalEvent.targetTouches[0].pageY
};}}
});
_this.core.$slide.on('touchmove.lg', function(e){
if(_this.core.$outer.hasClass('lg-zoomed')){
var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
var distanceX;
var distanceY;
e.preventDefault();
isMoved=true;
endCoords={
x: e.originalEvent.targetTouches[0].pageX,
y: e.originalEvent.targetTouches[0].pageY
};
_this.core.$outer.addClass('lg-zoom-dragging');
if(allowY){
distanceY=(-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
}else{
distanceY=-Math.abs(_$el.attr('data-y'));
}
if(allowX){
distanceX=(-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
}else{
distanceX=-Math.abs(_$el.attr('data-x'));
}
if((Math.abs(endCoords.x - startCoords.x) > 15)||(Math.abs(endCoords.y - startCoords.y) > 15)){
if(_this.core.s.useLeftForZoom){
_$el.css({
left: distanceX + 'px',
top: distanceY + 'px'
});
}else{
_$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
}}
}});
_this.core.$slide.on('touchend.lg', function(){
if(_this.core.$outer.hasClass('lg-zoomed')){
if(isMoved){
isMoved=false;
_this.core.$outer.removeClass('lg-zoom-dragging');
_this.touchendZoom(startCoords, endCoords, allowX, allowY);
}}
});
};
Zoom.prototype.zoomDrag=function(){
var _this=this;
var startCoords={};
var endCoords={};
var isDraging=false;
var isMoved=false;
var allowX=false;
var allowY=false;
_this.core.$slide.on('mousedown.lg.zoom', function(e){
var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');
allowY=$image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
allowX=$image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
if(_this.core.$outer.hasClass('lg-zoomed')){
if($(e.target).hasClass('lg-object')&&(allowX||allowY)){
e.preventDefault();
startCoords={
x: e.pageX,
y: e.pageY
};
isDraging=true;
_this.core.$outer.scrollLeft +=1;
_this.core.$outer.scrollLeft -=1;
_this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
}}
});
$(window).on('mousemove.lg.zoom', function(e){
if(isDraging){
var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
var distanceX;
var distanceY;
isMoved=true;
endCoords={
x: e.pageX,
y: e.pageY
};
_this.core.$outer.addClass('lg-zoom-dragging');
if(allowY){
distanceY=(-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
}else{
distanceY=-Math.abs(_$el.attr('data-y'));
}
if(allowX){
distanceX=(-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
}else{
distanceX=-Math.abs(_$el.attr('data-x'));
}
if(_this.core.s.useLeftForZoom){
_$el.css({
left: distanceX + 'px',
top: distanceY + 'px'
});
}else{
_$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
}}
});
$(window).on('mouseup.lg.zoom', function(e){
if(isDraging){
isDraging=false;
_this.core.$outer.removeClass('lg-zoom-dragging');
if(isMoved&&((startCoords.x!==endCoords.x)||(startCoords.y!==endCoords.y))){
endCoords={
x: e.pageX,
y: e.pageY
};
_this.touchendZoom(startCoords, endCoords, allowX, allowY);
}
isMoved=false;
}
_this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
});
};
Zoom.prototype.touchendZoom=function(startCoords, endCoords, allowX, allowY){
var _this=this;
var _$el=_this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
var $image=_this.core.$slide.eq(_this.core.index).find('.lg-object');
var distanceX=(-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
var distanceY=(-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
var minY=(_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
var maxY=Math.abs(($image.prop('offsetHeight') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').height() + minY);
var minX=(_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
var maxX=Math.abs(($image.prop('offsetWidth') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').width() + minX);
if((Math.abs(endCoords.x - startCoords.x) > 15)||(Math.abs(endCoords.y - startCoords.y) > 15)){
if(allowY){
if(distanceY <=-maxY){
distanceY=-maxY;
}else if(distanceY >=-minY){
distanceY=-minY;
}}
if(allowX){
if(distanceX <=-maxX){
distanceX=-maxX;
}else if(distanceX >=-minX){
distanceX=-minX;
}}
if(allowY){
_$el.attr('data-y', Math.abs(distanceY));
}else{
distanceY=-Math.abs(_$el.attr('data-y'));
}
if(allowX){
_$el.attr('data-x', Math.abs(distanceX));
}else{
distanceX=-Math.abs(_$el.attr('data-x'));
}
if(_this.core.s.useLeftForZoom){
_$el.css({
left: distanceX + 'px',
top: distanceY + 'px'
});
}else{
_$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
}}
};
Zoom.prototype.destroy=function(){
var _this=this;
_this.core.$el.off('.lg.zoom');
$(window).off('.lg.zoom');
_this.core.$slide.off('.lg.zoom');
_this.core.$el.off('.lg.tm.zoom');
_this.resetZoom();
clearTimeout(_this.zoomabletimeout);
_this.zoomabletimeout=false;
};
$.fn.lightGallery.modules.zoom=Zoom;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var defaults={
hash: true
};
var Hash=function(element){
this.core=$(element).data('lightGallery');
this.core.s=$.extend({}, defaults, this.core.s);
if(this.core.s.hash){
this.oldHash=window.location.hash;
this.init();
}
return this;
};
Hash.prototype.init=function(){
var _this=this;
var _hash;
_this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index){
if(history.replaceState){
history.replaceState(null, null, window.location.pathname + window.location.search + '#lg=' + _this.core.s.galleryId + '&slide=' + index);
}else{
window.location.hash='lg=' + _this.core.s.galleryId + '&slide=' + index;
}});
$(window).on('hashchange.lg.hash', function(){
_hash=window.location.hash;
var _idx=parseInt(_hash.split('&slide=')[1], 10);
if((_hash.indexOf('lg=' + _this.core.s.galleryId) > -1)){
_this.core.slide(_idx, false, false);
}else if(_this.core.lGalleryOn){
_this.core.destroy();
}});
};
Hash.prototype.destroy=function(){
if(!this.core.s.hash){
return;
}
if(this.oldHash&&this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0){
if(history.replaceState){
history.replaceState(null, null, this.oldHash);
}else{
window.location.hash=this.oldHash;
}}else{
if(history.replaceState){
history.replaceState(null, document.title, window.location.pathname + window.location.search);
}else{
window.location.hash='';
}}
this.core.$el.off('.lg.hash');
};
$.fn.lightGallery.modules.hash=Hash;
})();
}));
(function (root, factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], function (a0){
return (factory(a0));
});
}else if(typeof exports==='object'){
module.exports=factory(require('jquery'));
}else{
factory(jQuery);
}}(this, function ($){
(function(){
'use strict';
var defaults={
share: true,
facebook: true,
facebookDropdownText: 'Facebook',
twitter: true,
twitterDropdownText: 'Twitter',
googlePlus: true,
googlePlusDropdownText: 'GooglePlus',
pinterest: true,
pinterestDropdownText: 'Pinterest'
};
var Share=function(element){
this.core=$(element).data('lightGallery');
this.core.s=$.extend({}, defaults, this.core.s);
if(this.core.s.share){
this.init();
}
return this;
};
Share.prototype.init=function(){
var _this=this;
var shareHtml='<span id="lg-share" class="lg-icon">' +
'<ul class="lg-dropdown" style="position: absolute;">';
shareHtml +=_this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>':'';
shareHtml +=_this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>':'';
shareHtml +=_this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>':'';
shareHtml +=_this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>':'';
shareHtml +='</ul></span>';
this.core.$outer.find('.lg-toolbar').append(shareHtml);
this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
$('#lg-share').on('click.lg', function(){
_this.core.$outer.toggleClass('lg-dropdown-active');
});
$('#lg-dropdown-overlay').on('click.lg', function(){
_this.core.$outer.removeClass('lg-dropdown-active');
});
_this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index){
setTimeout(function(){
$('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.getSahreProps(index, 'facebookShareUrl')||window.location.href)));
$('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.getSahreProps(index, 'tweetText') + '&url=' + (encodeURIComponent(_this.getSahreProps(index, 'twitterShareUrl')||window.location.href)));
$('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.getSahreProps(index, 'googleplusShareUrl')||window.location.href)));
$('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.getSahreProps(index, 'pinterestShareUrl')||window.location.href)) + '&media=' + encodeURIComponent(_this.getSahreProps(index, 'src')) + '&description=' + _this.getSahreProps(index, 'pinterestText'));
}, 100);
});
};
Share.prototype.getSahreProps=function(index, prop){
var shareProp='';
if(this.core.s.dynamic){
shareProp=this.core.s.dynamicEl[index][prop];
}else{
var _href=this.core.$items.eq(index).attr('href');
var _prop=this.core.$items.eq(index).data(prop);
shareProp=prop==='src' ? _href||_prop:_prop;
}
return shareProp;
};
Share.prototype.destroy=function(){
};
$.fn.lightGallery.modules.share=Share;
})();
}));