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

    scene.setClassToggle("#body-wrapper", classes)
    scene.addTo(this.controller)
    scene.addIndicators();

    this.scenes.push(scene);

    return this;
  }
};

var animationBackground = new AnimationBackground();


//js $(document).ready function in js
document.addEventListener("DOMContentLoaded", function(event) {

  //call instance of AnimationBackground;
    animationBackground
      .createAnimation("body-wrapper__work", {
        scene: {
          options: {
            triggerElement: ".work"
          }
        }
      })
      .createAnimation("body-wrapper__services", {
        scene: {
          options: {
            triggerElement: ".services"
          }
        }
      })
      .createAnimation("body-wrapper__about", {
        scene: {
          options: {
            triggerElement: ".about"
          }
        }
      })
      .createAnimation("body-wrapper__contact", {
        scene: {
          options: {
            triggerElement: ".contact"
          }
        }
      });



});
