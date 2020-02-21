// @codekit-prepend "_cycle.js";
// @codekit-prepend "_nospam.js";


  $("document").ready(function(){

    $('.slider').cycle({
      fx: "scrollHorz",
      timeout: 4000,
      random: true,
      speed: 800,
      slides: "> .slide"
    });

    $('.keinspam').nospam({ replaceText: true });

  });
