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
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=0,n=i[o];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];n;){var r=s&&s[n];r&&(this.off(t,n),delete s[n]),n.apply(this,e),o+=r?0:1,n=i[o]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){
var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});