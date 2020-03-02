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

    var rhabarber = '<div class="browserblast">';
    rhabarber += '<h2>:-(</h2>';
    rhabarber += '<p>Ihr Browser stammt aus geraumer Vorzeit und ist zu alt, um unsere Website sauber darzustellen und sicher zu nutzen.</p>';
    rhabarber += '<p>Wir empfehlen, ein <a href="https://www.microsoft.com/en-us/edge" target="_blank">Upgrade</a> oder einen Wechsel auf <a href="https://www.firefox.com" target="_blank">Firefox</a> oder <a href="https://www.google.com/chrome" target="_blank">Google Chrome</a> vorzunehmen.</p>';
    rhabarber += '<p class="absender">Ihr Team von KONFLIKT.GEWALT.</p>';
    rhabarber += '<p class="browserblast__closer">×</p>';
    rhabarber += '</div>';
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    if ( isIE ) {
      document.body.innerHTML += rhabarber;
    }
    $(".browserblast__closer").click(function(){
      $(".browserblast").fadeOut();
    });

  });
