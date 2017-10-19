function AnimationBackground(){this.controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.5}}),this.scenes=[]}AnimationBackground.prototype={controller:null,scenes:null,constructor:AnimationBackground,createAnimation:function(e,t){var o=new ScrollMagic.Scene(t.scene.options);return o.setClassToggle("#site-wrapper",e),o.addTo(this.controller),this.scenes.push(o),this}};var animationBackground=new AnimationBackground,tl=new TimelineMax({repeat:-1}),blockDuration=.4,blackBlockDelay="+=2",orangeBlockDelay="+=0.4",orangeBlockMovingDelay="+=0.3",textDelay="-=0.3",textDuration=.8,textEase=Expo.easeOut,blockRevealEase=Power1.easeInOut,blockDisappearsEase=Power1.easeOut;tl.fromTo(".subtitle__1",textDuration,{opacity:0,scale:.6,transformOrigin:"100% 0%"},{opacity:1,scale:1,ease:textEase},textDelay).to(".intro__reveal-block__dark",blockDuration,{ease:blockRevealEase,left:0},blackBlockDelay).set(".subtitle__1",{opacity:0}).to(".intro__reveal-block__light",blockDuration,{ease:blockRevealEase,left:0},orangeBlockDelay).set(".intro__reveal-block__dark",{left:"-100%"},"+=0").to(".intro__reveal-block__light",blockDuration,{ease:blockDisappearsEase,xPercent:110},orangeBlockMovingDelay).fromTo(".subtitle__2",textDuration,{opacity:0,scale:.6,transformOrigin:"100% 0%"},{opacity:1,scale:1,ease:textEase},textDelay).to(".intro__reveal-block__dark",blockDuration,{ease:blockRevealEase,left:0},blackBlockDelay).set(".subtitle__2",{opacity:0}).set(".intro__reveal-block__light",{zIndex:-1,left:"-100%",xPercent:0}).to(".intro__reveal-block__light",blockDuration,{ease:blockRevealEase,left:0,zIndex:2},orangeBlockDelay).set(".intro__reveal-block__dark",{left:"-100%"}).to(".intro__reveal-block__light",blockDuration,{ease:blockDisappearsEase,xPercent:110},orangeBlockMovingDelay).fromTo(".subtitle__3",textDuration,{opacity:0,scale:.6,transformOrigin:"100% 0%"},{opacity:1,scale:1,ease:textEase},textDelay).to(".intro__reveal-block__dark",blockDuration,{ease:blockRevealEase,left:0},blackBlockDelay).set(".subtitle__3",{opacity:0}).set(".intro__reveal-block__light",{zIndex:-1,left:"-100%",xPercent:0}).to(".intro__reveal-block__light",blockDuration,{ease:blockRevealEase,left:0,zIndex:2},orangeBlockDelay).set(".intro__reveal-block__dark",{width:0}).to(".intro__reveal-block__light",blockDuration,{ease:blockDisappearsEase,xPercent:100},orangeBlockMovingDelay),document.addEventListener("DOMContentLoaded",function(e){animationBackground.createAnimation("site-wrapper__work",{scene:{options:{triggerElement:".work"}}}).createAnimation("site-wrapper__services",{scene:{options:{triggerElement:".services"}}}).createAnimation("site-wrapper__about",{scene:{options:{triggerElement:".about"}}}).createAnimation("site-wrapper__contact",{scene:{options:{triggerElement:".contact"}}})});