function burgerMenu(selector) {
 let menu = $(selector) 
 let button = menu.find(".burger-menu__button");
 let links = menu.find(".burger__ul_a");
 let overlay = menu.find(".burger-menu__overlay");

 button.on("click" , (e) => {
  e.preventDefault();
  toggleMenu();
 });

 links.on("click", () => toggleMenu());
 overlay.on("click", () => toggleMenu());

 function toggleMenu() {
  menu.toggleClass("burger-menu__active");

  if(menu.hasClass("burger-menu__active")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "visible");
  }
 }

}

burgerMenu(".burger-menu");

var player;
$(".women-1__play").on("click", function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '387',
    width: '100%',
    videoId: 'OPm_EDTrz7Y',
    events: {
      'onReady': videoPlayer,
      // 'onStateChange': onPlayerStateChange
    }
  });
});

var player2;
$(".women-2__play").on("click", function onYouTubeIframeAPIReady() {
  player2 = new YT.Player('players', {
    height: '387',
    width: '100%',
    videoId: 'OPm_EDTrz7Y',
    events: {
      'onReady': videoPlayer,
      // 'onStateChange': onPlayerStateChange
    }
  });
});

function videoPlayer(event) {
  // player.videoPlayer();
  event.target.playVideo();
}

$(document).ready(function () {
  //initialize swiper when document ready


  // $(document).ready(function () {
  //   //initialize swiper when document ready
  //   var mySwiper = new Swiper ('.swiper-container', {
  //     // Optional parameters
  //     direction: 'vertical',
  //     loop: true
  //   })
  // });



});