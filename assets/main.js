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


      var tl = new TimelineMax({repeat:-1}),
          blockDuration = 0.6,
          blackBlockDelay = "+=0.4",
          orangeBlockDelay = "+=0.3",
          orangeBlockMovingDelay = "+=0.1",
          textDuration = 0.4
          ;

      tl



         /* Text 1 appears */
        .fromTo(".subtitle__1", textDuration, {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, ease: Power4.easeOut}, "-=0.3")

        /*Black block up to 100% */
        .to(".intro__reveal-block__dark", blockDuration, { ease: Power3.easeIn, left: 0},blackBlockDelay )

        /* Text 1 disappears */
        .set(".subtitle__1", {opacity: 0})

        /*Orange block up to 100% */
        .to(".intro__reveal-block__light", blockDuration, { ease: Power3.easeIn, left: 0}, orangeBlockDelay)
        //
        /*Black block width shrinks down to 0px */
        .set(".intro__reveal-block__dark", { left: '-100%'}, "+=0")
        //
        // /*Orange block moves away Layer text 2 appears*/
        .to(".intro__reveal-block__light", blockDuration, {ease: Power3.easeOut, xPercent: 100}, orangeBlockMovingDelay)

        // /* Text 2 appears */
        .fromTo(".subtitle__2", textDuration, {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, ease: Power4.easeOut}, "-=0.3")
        //
        // /*Black block appears */
        .to(".intro__reveal-block__dark", blockDuration, { ease: Power2.easeIn, left: 0}, blackBlockDelay)
        //
        .set(".subtitle__2", {opacity: 0}, "+=0")
        //
        // /*Orange block goes underneath black box */
        .set(".intro__reveal-block__light", {zIndex: -1, left: '-100%', xPercent: 0})
        //
        //
        // /*Orange block moves left/
        .to(".intro__reveal-block__light", blockDuration, { ease: Power2.easeIn, left: 0, zIndex: 2}, orangeBlockDelay)
        //
        .set(".intro__reveal-block__dark", { left: '-100%'}, "+=0")

        .to(".intro__reveal-block__light", blockDuration, {ease: Power3.easeOut, xPercent: 100}, orangeBlockMovingDelay)
        //
        /* Text 3 appears */
        .fromTo(".subtitle__3", textDuration, {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, ease: Power4.easeOut}, "-=0.3")
        //
        /*Black block appears */
        .to(".intro__reveal-block__dark", blockDuration, { ease: Power2.easeIn, left: 0}, blackBlockDelay)
        //
        .set(".subtitle__3",  {opacity: 0})
        //
        /*Orange block goes underneath black box */
        .set(".intro__reveal-block__light", {zIndex: -1, left: '-100%', xPercent: 0})

        // /*Orange block moves right/
        .to(".intro__reveal-block__light", blockDuration, { ease: Power3.easeOut, left: 0, zIndex: 2}, orangeBlockDelay)

        .set(".intro__reveal-block__dark", { width: 0}, "+=0")

        .to(".intro__reveal-block__light", blockDuration, {xPercent: 100}, orangeBlockMovingDelay);
});
