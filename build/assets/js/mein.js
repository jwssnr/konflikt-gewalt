/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(e){"use strict";function t(e){return(e||"").toLowerCase()}e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each((function(){var n,s,o,l,r=e(this),c=e.fn.cycle.log;if(!r.data("cycle.opts")){for(var a in(!1===r.data("cycle-log")||i&&!1===i.log||s&&!1===s.log)&&(c=e.noop),c("--c2 init--"),n=r.data())n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(l=n[a],c((o=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t))+":",l,"("+typeof l+")"),n[o]=l);(s=e.extend({},e.fn.cycle.defaults,n,i||{})).timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=c,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}})):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e((function(){e(n.s,n.c).cycle(i)})),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort((function(){return Math.random()-.5})),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(!0!==i.pauseOnHover&&(n=e(i.pauseOnHover)),n.hover((function(){i.API.pause(!0)}),(function(){i.API.resume(!0)}))),i.timeout&&(t=i.API.getSlideOpts(i.currSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(i._remainingTimeout<0||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount;"string"==e.type(t)&&(t=e.trim(t)),e(t).each((function(t){var n,o=e(this);i?s.container.prepend(o):s.container.append(o),s.slideCount++,n=s.API.buildSlideOpts(o),s.slides=i?e(o).add(s.slides):s.slides.add(o),s.API.initSlide(n,o,--s._maxZ),o.data("cycle.opts",n),s.API.trigger("cycle-slide-added",[s,n,o])})),s.API.updateView(!0),s._preInitialized&&o<2&&s.slideCount>=1&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();((e=parseInt(t.startingSlide||0,10))>=t.slides.length||e<0)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,t.nextSlide<0&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=t.nextSlide-1<0,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return s._tempFx?n=e.fn.cycle.transitions[s._tempFx]:i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),s._tempFx=null,this.opts()._tempFx=null,n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,l,r=this.opts();r.slideCount<2?r.timeoutId=0:(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),l=r.API.calcTx(o,e),r._tx=l,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),l.before&&l.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(l.after&&l.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,l.transition?l.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)))},doTransition:function(t,i,n,s,o){var l=t,r=e(i),c=e(n),a=function(){c.animate(l.animIn||{opacity:1},l.speed,l.easeIn||l.easing,o)};c.css(l.cssBefore||{}),r.animate(l.animOut||{},l.speed,l.easeOut||l.easing,(function(){r.css(l.cssAfter||{}),l.sync||a()})),l.sync&&a()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0==--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout((function(){n.API.trigger("cycle-finished",[n])}),s):n.API.trigger("cycle-finished",[n]),void(n.nextSlide=n.currSlide)):void 0!==n.continueAuto&&(!1===n.continueAuto||e.isFunction(n.continueAuto)&&!1===n.continueAuto())?(n.API.log("terminating automatic transitions"),n.timeout=0,void(n.timeoutId&&clearTimeout(n.timeoutId))):void(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout((function(){n.API.prepareTx(!1,!n.reverse)}),s))))},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,t.nextSlide<0?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),l=i.data()||{};for(var r in l)l.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=l[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),l[s]=n);(l=e.extend({},e.fn.cycle.defaults,o,l)).slideNum=o.slideCount;try{delete l.API,delete l.slideCount,delete l.currSlide,delete l.nextSlide,delete l.slides}catch(e){}return l},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e,t,i){var n=this.opts();if(n._initialized){var s=n.API.getSlideOpts(),o=n.slides[n.currSlide];!e&&!0!==t&&(n.API.trigger("cycle-update-view-before",[n,s,o]),n.updateView<0)||(n.slideActiveClass&&n.slides.removeClass(n.slideActiveClass).eq(n.currSlide).addClass(n.slideActiveClass),e&&n.hideNonActive&&n.slides.filter(":not(."+n.slideActiveClass+")").css("visibility","hidden"),0===n.updateView&&setTimeout((function(){n.API.trigger("cycle-update-view",[n,s,o,e])}),s.speed/(n.sync?2:1)),0!==n.updateView&&n.API.trigger("cycle-update-view",[n,s,o,e]),e&&n.API.trigger("cycle-update-view-after",[n,s,o]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s,o=this.opts();t||(t=o.slides[o.currSlide],i=o.slides[o.nextSlide],n=!o.reverse),e(t).css("zIndex",o.maxZ);var l=o.maxZ-2,r=o.slideCount;if(n){for(s=o.currSlide+1;s<r;s++)e(o.slides[s]).css("zIndex",l--);for(s=0;s<o.currSlide;s++)e(o.slides[s]).css("zIndex",l--)}else{for(s=o.currSlide-1;s>=0;s--)e(o.slides[s]).css("zIndex",l--);for(s=r-1;s>o.currSlide;s--)e(o.slides[s]).css("zIndex",l--)}e(i).css("zIndex",o.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: 2.1.6"},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,visibility:"visible",display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,visibility:"visible",display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,visibility:"visible",display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready((function(){e(e.fn.cycle.defaults.autoSelector).cycle()}))}(jQuery),
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(e){"use strict";function t(t,i){var n,s,o,l=i.autoHeight;if("container"==l)s=e(i.slides[i.currSlide]).outerHeight(),i.container.height(s);else if(i._autoHeightRatio)i.container.height(i.container.width()/i._autoHeightRatio);else if("calc"===l||"number"==e.type(l)&&l>=0){if((o="calc"===l?function(t,i){var n=0,s=-1;return i.slides.each((function(t){var i=e(this).height();i>s&&(s=i,n=t)})),n}(0,i):l>=i.slides.length?0:l)==i._sentinelIndex)return;i._sentinelIndex=o,i._sentinel&&i._sentinel.remove(),(n=e(i.slides[o].cloneNode(!0))).removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),n.css({position:"static",visibility:"hidden",display:"block"}).prependTo(i.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),n.find("*").css("visibility","hidden"),i._sentinel=n}}function i(t,i,n,s,o){var l=e(s).outerHeight();i.container.animate({height:l},i.autoHeightSpeed,i.autoHeightEasing)}function n(s,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",n),o.container.off("cycle-before",i),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),e(document).on("cycle-initialized",(function(s,o){var l,r=o.autoHeight,c=e.type(r),a=null;function d(){t(s,o)}"string"!==c&&"number"!==c||(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",n),"container"==r?o.container.on("cycle-before",i):"string"===c&&/\d+\:\d+/.test(r)&&(l=(l=r.match(/(\d+)\:(\d+)/))[1]/l[2],o._autoHeightRatio=l),"number"!==c&&(o._autoHeightOnResize=function(){clearTimeout(a),a=setTimeout(d,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(d,30))}))}(jQuery),
/*! caption plugin for Cycle2;  version: 20130306 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",(function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],(function(){var e=n[this+"Template"],t=i.API.getComponent(this);t.length&&e?(t.html(i.API.tmpl(e,n,i,s)),t.show()):t.hide()}))})),e(document).on("cycle-destroyed",(function(t,i){e.each(["caption","overlay"],(function(){var e=i[this+"Template"];i[this]&&e&&i.API.getComponent("caption").empty()}))}))}(jQuery),
/*! command plugin for Cycle2;  version: 20140415 */
function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,l=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each((function(){var r;if(n=i,void 0!==(o=e(this).data("cycle.opts")))return n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?((r=e.makeArray(l)).shift(),s.apply(o.API,r)):void t.log("unknown command: ",n);t.log('slideshow must be initialized before sending commands; "'+n+'" ignored')})):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;!1===e.allowWrap&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;!1===e.allowWrap&&e.currSlide+t<0||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each((function(){var n=e(this);n.removeData(),n.removeClass(t.slideClass),i(this,"parsedAttrs",!1)}))},jump:function(e,t){var i,n=this.opts();if(!n.busy||n.manualTrump){var s=parseInt(e,10);isNaN(s)||s<0||s>=n.slides.length?n.API.log("goto: invalid slide index: "+s):s!=n.currSlide?(n.nextSlide=s,clearTimeout(n.timeoutId),n.timeoutId=0,n.API.log("goto: ",s," (zero-index)"),i=n.currSlide<n.nextSlide,n._tempFx=t,n.API.prepareTx(!0,i)):n.API.log("goto: skipping, already on slide",s)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(!0!==t.pauseOnHover&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],l=1,r=0;r<s.slides.length;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=l,l++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide?s.API.advanceSlide(1):t<s.currSlide?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",(function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))}))}(jQuery),
/*! hash plugin for Cycle2;  version: 20130905 */
function(e){"use strict";function t(t,i){var n;t._hashFence?t._hashFence=!1:(n=window.location.hash.substring(1),t.slides.each((function(s){if(e(this).data("cycle-hash")==n){if(!0===i)t.startingSlide=s;else{var o=t.currSlide<s;t.nextSlide=s,t.API.prepareTx(!0,o)}return!1}})))}e(document).on("cycle-pre-initialize",(function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)})),e(document).on("cycle-update-view",(function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)})),e(document).on("cycle-destroyed",(function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)}))}(jQuery),
/*! loader plugin for Cycle2;  version: 20131121 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",(function(t,i){var n;i.loader&&(n=i.API.add,i.API.add=function(t,s){var o=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var l=0;l<t.length;l++)t[l]=e(t[l])[0];var r=(t=e(t)).length;if(!r)return;t.css("visibility","hidden").appendTo("body").each((function(t){var l=0,a=e(this),d=a.is("img")?a:a.find("img");if(a.data("index",t),!(d=d.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])')).length)return--r,void o.push(a);function u(){0==--l&&(--r,function(t){var l;"wait"==i.loader?(o.push(t),0===r&&(o.sort(c),n.apply(i.API,[o,s]),i.container.removeClass("cycle-loading"))):(l=e(i.slides[i.currSlide]),n.apply(i.API,[t,s]),l.show(),i.container.removeClass("cycle-loading"))}(a))}l=d.length,d.each((function(){this.complete?u():e(this).load((function(){u()})).on("error",(function(){0==--l&&(i.API.log("slide skipped; img not loaded:",this.src),0==--r&&"wait"==i.loader&&n.apply(i.API,[o,s]))}))}))})),r&&i.container.addClass("cycle-loading");function c(e,t){return e.data("index")-t.data("index")}})}))}(jQuery),
/*! pager plugin for Cycle2;  version: 20140415 */
function(e){"use strict";function t(t,i,n){var s;t.API.getComponent("pager").each((function(){var o=e(this);if(i.pagerTemplate){var l=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(l).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,(function(e){t.pagerEventBubble||e.preventDefault(),t.API.page(o,e.currentTarget)}))}))}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=i.currSlide<n;i.currSlide!=n&&(i.nextSlide=n,i._tempFx=i.pagerFx,i.API.prepareTx(!0,s),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",(function(e,i,n){n.buildPagerLink=t})),e(document).on("cycle-slide-added",(function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)})),e(document).on("cycle-slide-removed",(function(t,i,n,s){i.pager&&i.API.getComponent("pager").each((function(){var t=e(this);e(t.children()[n]).remove()}))})),e(document).on("cycle-update-view",(function(t,i,n){i.pager&&i.API.getComponent("pager").each((function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))})),e(document).on("cycle-destroyed",(function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())}))}(jQuery),
/*! prevnext plugin for Cycle2;  version: 20140408 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",(function(e,t){if(t.API.getComponent("next").on(t.nextEvent,(function(e){e.preventDefault(),t.API.next()})),t.API.getComponent("prev").on(t.prevEvent,(function(e){e.preventDefault(),t.API.prev()})),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,(function(e){t._tempFx=t.swipeFx,t.API.next()})),t.container.on(n,(function(){t._tempFx=t.swipeFx,t.API.prev()}))}})),e(document).on("cycle-update-view",(function(e,t,i,n){if(!t.allowWrap){var s=t.disabledClass,o=t.API.getComponent("next"),l=t.API.getComponent("prev"),r=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?o.addClass(s).prop("disabled",!0):o.removeClass(s).prop("disabled",!1),t.currSlide===r?l.addClass(s).prop("disabled",!0):l.removeClass(s).prop("disabled",!1)}})),e(document).on("cycle-destroyed",(function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")}))}(jQuery),
/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",(function(t,i){if(i.progressive){var n,s,o=i.API,l=o.next,r=o.prev,c=o.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(s=e(i.progressive),!(n=e.trim(s.html())))return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(e){return void o.log("error parsing progressive slides",e)}else(n=n.split(new RegExp(s.data("cycle-split")||"\n")))[n.length-1]||n.pop()}c&&(o.prepareTx=function(e,t){var s,o;e||0===n.length?c.apply(i.API,[e,t]):t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",(function(e,t){setTimeout((function(){t.API.advanceSlide(1)}),50)})),i.API.add(o)):t||0!==i.currSlide?c.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",(function(e,t){setTimeout((function(){t.currSlide=1,t.API.advanceSlide(-1)}),50)})),i.API.add(o,!0))}),l&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",(function(e,t){l.apply(t.API),t.container.removeClass("cycle-loading")})),e.container.addClass("cycle-loading"),e.API.add(t)}else l.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",(function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")})),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}}))}(jQuery),
/*! tmpl plugin for Cycle2;  version: 20121227 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=new RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,(function(t,i){var n,o,l,r,c=i.split(".");for(n=0;n<s.length;n++)if(l=s[n]){if(c.length>1)for(r=l,o=0;o<c.length;o++)l=r,r=r[c[o]]||i;else r=l[i];if(e.isFunction(r))return r.apply(l,s);if(null!=r&&r!=i)return r}return i}))}})}(jQuery),function(t){t.fn.nospam=function(i){return i=t.extend({replaceText:!1,filterLevel:"normal"},i),this.each((function(){e=null,"low"==i.filterLevel?t(this).is("a[rel]")?e=t(this).attr("rel").replace("//","@").replace(/\//g,"."):e=t(this).text().replace("//","@").replace(/\//g,"."):t(this).is("a[rel]")?e=t(this).attr("rel").split("").reverse().join("").replace("//","@").replace(/\//g,"."):e=t(this).text().split("").reverse().join("").replace("//","@").replace(/\//g,"."),e&&(t(this).is("a[rel]")?(t(this).attr("href","mailto:"+e),i.replaceText&&t(this).text(e)):t(this).text(e))}))}}(jQuery),$("document").ready((function(){document.body.innerHTML+='<div class="browserblast"><h2>:-(</h2><p>Ihr Browser stammt aus geraumer Vorzeit und ist zu alt, um unsere Website sauber darzustellen und sicher zu nutzen.</p><p>Wir empfehlen, ein <a href="https://www.microsoft.com/en-us/edge" target="_blank">Upgrade</a> oder einen Wechsel auf <a href="https://www.firefox.com" target="_blank">Firefox</a> oder <a href="https://www.google.com/chrome" target="_blank">Google Chrome</a> vorzunehmen.</p><p class="absender">Ihr Team von KONFLIKT.GEWALT.</p><p class="browserblast__closer">×</p></div>',$(".browserblast__closer").click((function(){$(".browserblast").fadeOut()})),$(".slider").cycle({fx:"scrollHorz",timeout:4e3,startingSlide:Math.floor(18*Math.random()),speed:800,autoHeight:"4:3",slides:"> .slide"}),$(".keinspam").nospam({replaceText:!0}),$(".mobilestandorte").click((function(){$(".standortmenu").toggleClass("offen")})),$(".mobilemenu").click((function(){$(this).toggleClass("schliessen"),$(".mobileclass").toggleClass("menuoffen")}))}));