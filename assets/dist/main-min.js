"use strict";function AnimationBackground(){this.controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.5}}),this.scenes=[]}!function(){function e(){function e(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(e,t){return"Y"===t?e.clientHeight+f<e.scrollHeight:"X"===t?e.clientWidth+f<e.scrollWidth:void 0}function i(e,o){var l=t.getComputedStyle(e,null)["overflow"+o];return"auto"===l||"scroll"===l}function n(e){var t=r(e,"Y")&&i(e,"Y"),o=r(e,"X")&&i(e,"X");return t||o}function c(e){var o,l,r,i=(v()-e.startTime)/p;o=function(e){return.5*(1-Math.cos(Math.PI*e))}(i=i>1?1:i),l=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,l,r),l===e.x&&r===e.y||t.requestAnimationFrame(c.bind(t,e))}function a(l,r,i){var n,a,s,p,f=v();l===o.body?(n=t,a=t.scrollX||t.pageXOffset,s=t.scrollY||t.pageYOffset,p=u.scroll):(n=l,a=l.scrollLeft,s=l.scrollTop,p=e),c({scrollable:n,method:p,startTime:f,startX:a,startY:s,x:r,y:i})}if(!("scrollBehavior"in o.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var s=t.HTMLElement||t.Element,p=468,f=function(e){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)}(t.navigator.userAgent)?1:0,u={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||e,scrollIntoView:s.prototype.scrollIntoView},v=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?a.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):u.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?u.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):a.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;a.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var e=function(e){var t;do{t=(e=e.parentNode)===o.body}while(!1===t&&!1===n(e));return t=null,e}(this),r=e.getBoundingClientRect(),i=this.getBoundingClientRect();e!==o.body?(a.call(this,e,e.scrollLeft+i.left-r.left,e.scrollTop+i.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else u.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}var t=window,o=document;"object"==typeof exports?module.exports={polyfill:e}:e()}(),AnimationBackground.prototype={controller:null,scenes:null,constructor:AnimationBackground,createAnimation:function(e,t){var o=new ScrollMagic.Scene(t.scene.options);return o.setClassToggle("#site-wrapper",e),o.addTo(this.controller),this.scenes.push(o),this}};var animationBackground=new AnimationBackground;animationBackground.createAnimation("site-wrapper__work",{scene:{options:{triggerElement:".work"}}}).createAnimation("site-wrapper__services",{scene:{options:{triggerElement:".services"}}}).createAnimation("site-wrapper__about",{scene:{options:{triggerElement:".about"}}}).createAnimation("site-wrapper__contact",{scene:{options:{triggerElement:".contact"}}});var smoothScrolling=function(){[].slice.call(document.querySelectorAll(".nav__link")).forEach(function(e){return e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})})},tl=new TimelineMax({repeat:-1}),blockDuration=.3,blockAppearingDelay="+=2",blockMovingDelay="+=0.3",textDelay="-=0.2",textDuration=.2,textEase=Expo.easeOut,blockRevealEase=Power1.easeIn,blockDisappearsEase=Power1.easeIn,subtitle1=".subtitle__1",subtitle2=".subtitle__2",subtitle3=".subtitle__3",revealBlock=".intro__reveal-block";tl.fromTo(subtitle1,textDuration,{opacity:0,yPercent:-200},{opacity:1,yPercent:0,ease:Power1.easeOut},textDelay).to(revealBlock,blockDuration,{ease:blockRevealEase,left:0},blockAppearingDelay).set(subtitle1,{opacity:0}).to(revealBlock,blockDuration,{ease:blockDisappearsEase,xPercent:100},blockMovingDelay).set(revealBlock,{xPercent:-100}).fromTo(subtitle2,textDuration,{opacity:0,yPercent:0},{opacity:1,yPercent:0,ease:Power1.easeOut},textDelay).to(revealBlock,blockDuration,{ease:blockRevealEase,left:0,xPercent:0},blockAppearingDelay).set(subtitle2,{opacity:0}).to(revealBlock,blockDuration,{ease:blockDisappearsEase,xPercent:100},blockMovingDelay).set(revealBlock,{xPercent:-100}).fromTo(subtitle3,textDuration,{opacity:0,yPercent:0},{opacity:1,yPercent:0,ease:Power1.easeOut},textDelay).to(revealBlock,blockDuration,{ease:blockRevealEase,left:0,xPercent:0},blockAppearingDelay).set(subtitle3,{opacity:0}).to(revealBlock,blockDuration,{ease:blockDisappearsEase,xPercent:100},blockMovingDelay),smoothScrolling();