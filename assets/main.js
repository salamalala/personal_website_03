// Site Wrapper Background Animation

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




// Smooth navigation scrolling

var smoothScrolling = function (){

  //make an array
  const navLinks = [].slice.call(document.querySelectorAll('.nav__link'));

  //loop through array on each element when clicked

  navLinks.forEach(navLink => navLink.addEventListener('click', function(e){
    e.preventDefault();

    var target = this.getAttribute('href');

    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });

  }));
}











// Intro block revealer effect


var tl = new TimelineMax({repeat: -1}),
    blockDuration = 0.3,
    blockAppearingDelay = "+=2",
    blockMovingDelay = "+=0.3",
    textDelay = "-=0.2",
    textDuration = 0.2,
    textEase = Expo.easeOut,
    blockRevealEase = Power1.easeIn,
    blockDisappearsEase = Power1.easeIn
    subtitle1 = ".subtitle__1",
    subtitle2 = ".subtitle__2",
    subtitle3 = ".subtitle__3",
    revealBlock = ".intro__reveal-block"
    ;

tl
   /* Text 1 appears */
  .fromTo(subtitle1, textDuration, {opacity: 0, yPercent: -200 }, {opacity: 1, yPercent: 0, ease: Power1.easeOut}, textDelay)
  //
  /*Black block appears */
  .to(revealBlock, blockDuration, { ease: blockRevealEase, left: 0}, blockAppearingDelay)

  /* Text 1 disappears */
  .set(subtitle1, {opacity: 0})

  /*Black block disappears */
  .to(revealBlock, blockDuration, {ease: blockDisappearsEase, xPercent: 100}, blockMovingDelay)

  /*Black block goes left */
  .set(revealBlock, { xPercent: -100})

  // /* Text 2 appears */
  .fromTo(subtitle2, textDuration, {opacity: 0, yPercent: 0 }, {opacity: 1, yPercent: 0, ease: Power1.easeOut}, textDelay)

  /*Black block appears */
  .to(revealBlock, blockDuration, { ease: blockRevealEase, left: 0, xPercent: 0}, blockAppearingDelay)

  /* Text 2 disappears */
  .set(subtitle2, {opacity: 0})

  /*Black block disappears */
  .to(revealBlock, blockDuration, {ease: blockDisappearsEase, xPercent: 100}, blockMovingDelay)

  /*Black block width shrinks down to 0px */
  .set(revealBlock, { xPercent: -100})

  // /* Text 3 appears */
  .fromTo(subtitle3, textDuration, {opacity: 0, yPercent: 0 }, {opacity: 1, yPercent: 0, ease: Power1.easeOut}, textDelay)

  /*Black block appears */
  .to(revealBlock, blockDuration, { ease: blockRevealEase, left: 0, xPercent: 0}, blockAppearingDelay)

  /* Text 3 disappears */
  .set(subtitle3, {opacity: 0})

  /*Black block disappears */
  .to(revealBlock, blockDuration, {ease: blockDisappearsEase, xPercent: 100}, blockMovingDelay)





// calling all the functions:

smoothScrolling();
