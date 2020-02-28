// @codekit-prepend "_cycle.js";
// @codekit-prepend "_nospam.js";


  $("document").ready(function(){

    $('.slider').cycle({
      fx: "scrollHorz",
      timeout: 4000,
      random: false,
      speed: 800,
      slides: "> .slide"
    });

    $('.keinspam').nospam({ replaceText: true });

    $(".mobilestandorte").click(function(){
      $(".standortmenu").toggleClass("offen");
    });

    $(".mobilemenu").click(function(){
      $(this).toggleClass("schliessen")
      $(".mobileclass").toggleClass("menuoffen");
    });

  });
