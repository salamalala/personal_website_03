function AnimationBackground() {
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {triggerHook: 0.5}
    });
    this.scenes = [];
}

AnimationBackground.prototype = {
  controller: null,

  scenes: null,

  constructor: AnimationBackground,

  createAnimation: function(classes, args) {

    var scene = new ScrollMagic.Scene(args.scene.options);

    scene.setClassToggle("#site-wrapper", classes)
    scene.addTo(this.controller);
    // scene.addIndicators();

    this.scenes.push(scene);

    return this;
  }
};

var animationBackground = new AnimationBackground();

var tl = new TimelineMax({repeat:-1}),
    blockDuration = 0.3,
    blackBlockDelay = "+=2",
    orangeBlockDelay = "+=0.1",
    orangeBlockMovingDelay = "+=0.3",
    textDelay = "-=0.3",
    textDuration = 0.8,
    textEase = Expo.easeOut,
    blockRevealEase = Power1.easeInOut,
    blockDisappearsEase = Power1.easeOut
    ;

tl

  /*First set*/
   /* Text 1 appears */
  .fromTo(".subtitle__1", textDuration, {opacity: 0, scale: 0.6, transformOrigin: "100% 0%"}, {opacity: 1, scale: 1, ease: textEase}, textDelay)

  /*Black block appears */
  .to(".intro__reveal-block__dark", blockDuration, { ease: blockRevealEase, left: 0}, blackBlockDelay)

  /* Text 1 disappears */
  .set(".subtitle__1", {opacity: 0})

  /* Orange block appears */
  .to(".intro__reveal-block__light", blockDuration, { ease: blockRevealEase, left: 0}, orangeBlockDelay)
  //
  /*Black block width shrinks down to 0px */
  .set(".intro__reveal-block__dark", { left: '-100%'}, "+=0")
  //
  // /*Orange block disappears */
  .to(".intro__reveal-block__light", blockDuration, {ease: blockDisappearsEase, xPercent: 110}, orangeBlockMovingDelay)

  // /* Text 2 appears */
  .fromTo(".subtitle__2", textDuration, {opacity: 0, scale: 0.6, transformOrigin: "100% 0%"}, {opacity: 1, scale: 1, ease: textEase}, textDelay)
  //
  // /*Black block appears */
  .to(".intro__reveal-block__dark", blockDuration, { ease: blockRevealEase, left: 0}, blackBlockDelay)
  //
  .set(".subtitle__2", {opacity: 0})
  //
  // /*Orange block goes underneath black box */
  .set(".intro__reveal-block__light", {zIndex: -1, left: '-100%', xPercent: 0})
  //
  // /*Orange block appears/
  .to(".intro__reveal-block__light", blockDuration, { ease: blockRevealEase, left: 0, zIndex: 2}, orangeBlockDelay)
  //
  .set(".intro__reveal-block__dark", { left: '-100%'})

  // /*Orange block disappears */
  .to(".intro__reveal-block__light", blockDuration, {ease: blockDisappearsEase, xPercent: 110}, orangeBlockMovingDelay)
  //
  /* Text 3 appears */
  .fromTo(".subtitle__3", textDuration, {opacity: 0,scale: 0.6, transformOrigin: "100% 0%"}, {opacity: 1, scale: 1, ease: textEase}, textDelay)
  //
  /*Black block appears */
  .to(".intro__reveal-block__dark", blockDuration, { ease: blockRevealEase, left: 0}, blackBlockDelay)
  //
  .set(".subtitle__3",  {opacity: 0})
  //
  /*Orange block goes underneath black box */
  .set(".intro__reveal-block__light", {zIndex: -1, left: '-100%', xPercent: 0})

  // /*Orange block appears/
  .to(".intro__reveal-block__light", blockDuration, { ease: blockRevealEase, left: 0, zIndex: 2}, orangeBlockDelay)

  .set(".intro__reveal-block__dark", { width: 0})

    // /*Orange block disappears */
  .to(".intro__reveal-block__light", blockDuration, {ease: blockDisappearsEase, xPercent: 100}, orangeBlockMovingDelay);






//js $(document).ready function in js
document.addEventListener("DOMContentLoaded", function(event) {

  //call instance of AnimationBackground;
    animationBackground
      .createAnimation("site-wrapper__work", {
        scene: {
          options: {
            triggerElement: ".work"
          }
        }
      })
      .createAnimation("site-wrapper__services", {
        scene: {
          options: {
            triggerElement: ".services"
          }
        }
      })
      .createAnimation("site-wrapper__about", {
        scene: {
          options: {
            triggerElement: ".about"
          }
        }
      })

      .createAnimation("site-wrapper__contact", {
        scene: {
          options: {
            triggerElement: ".contact"
          }
        }
      });



});
