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



});
