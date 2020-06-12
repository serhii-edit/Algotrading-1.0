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
 
 let modal = document.querySelector(".modal__visible");
 let openModal = document.getElementById("open-btn");
 let openModalS = document.querySelector(".open-btn");
 let openModalfooter = document.getElementById("open-btn-footer")
 let openModal30days = document.getElementById("open-btn-30days")
 let modalClose = document.getElementById("close-btn");
 
 openModal.onclick = function () {
   modal.style.visibility="visible";
 };
 
 openModalS.onclick = function () {
   modal.style.visibility="visible";
 };
 
 openModal30days.onclick = function () {
   modal.style.visibility="visible";
 };
 
 openModalfooter.onclick = function () {
   modal.style.visibility="visible";
 };
 
 modalClose.onclick = function () {
   modal.style.visibility="hidden";
 };
 
 window.onclick = function (event) {
   if (event.target == modal)
   modal.style.visibility="hidden";
 };
 
 window.onkeydown = function(event) {
   if (event.which == 27) {
     modal.style.visibility="hidden";
   }
 };
 
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
 
 
   // I miss you plagun 
   jQuery(document).ready(function($){
     $.iMissYou({
         title: "I Miss you!",
         favicon: {
             enabled: true,
             src:'../img/i-miss-you.png'
         }
     });
 });
 
 
 // validations form
 
 $(".modal-form").validate({
   errorClass: "form-error",
   rules: {
     // simple rule, converted to {required:true}
     userName: {
       required: true,
       minlength: 2,
       maxlength: 15
     },
     // compound rule
     userEmail: {
       required: true,
       email: true
     },
     userPhone: {
       required: true,
       maxlength: 17,
       minlength: 17
     },
   },
   messages: {
     userName: {
       required: "Name required",
       minlength: "Name not shorter than 2",
       maxlength: "Name not bigger than 15"
     },
     userPhone: {
       required: "Phone required!",
       minlength: "Please enter a phone number"
     },
     userEmail: {
       required: "Be sure to specify the mail",
       email: "Type in format: name@mail.com"
     },
   },
   submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "../telegram.php",
       data: $(form).serialize(),
       // dataType: "dataType",
       success: function (response) {
         alert("The form has been submitted. We will contact you within 24 hours.");
         $(form)[0].reset();
         modal.style.visibility="hidden";
       },
       error: function (response) {
         alert("Sorry. The form does't work please call to us or try send form later" + response)
       }
     });
   }
 });
 
 
 $(".form-free").validate({
   errorClass: "form-error",
   rules: {
     // simple rule, converted to {required:true}
     userName: {
       required: true,
       minlength: 2,
       maxlength: 15
     },
     // compound rule
     userEmail: {
       required: true,
       email: true
     },
     userPhone: {
       required: true,
       maxlength: 17,
       minlength: 17
     },
   },
   messages: {
     userName: {
       required: "Name required",
       minlength: "Name not shorter than 2",
       maxlength: "Name not bigger than 15"
     },
     userPhone: {
       required: "Phone required!",
       minlength: "Please enter a phone number"
     },
     userEmail: {
       required: "Be sure to specify the mail",
       email: "Type in format: name@mail.com"
     },
   },
   submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "../telegram.php",
       data: $(form).serialize(),
       // dataType: "dataType",
       success: function (response) {
         alert("The form has been submitted. We will contact you within 24 hours.");
         $(form)[0].reset();
         modal.style.visibility="hidden";
       },
       error: function (response) {
         alert("Sorry. The form does't work please call to us or try send form later" + response)
       }
     });
   }
 });
 
 
 $(".footer__form").validate({
   errorClass: "form-error",
   rules: {
     userEmail: {
       required: true,
       email: true
     }
   },
   messages: {
     userEmail: {
       required: "Be sure to specify the mail",
       email: "Type in format: name@mail.com"
     },
   },
   submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "../telegram.php",
       data: $(form).serialize(),
       // dataType: "dataType",
       success: function (response) {
         alert("The form has been submitted. We will contact you within 24 hours.");
         $(form)[0].reset();
         modal.style.visibility="hidden";
       },
       error: function (response) {
         alert("Sorry. The form does't work please call to us or try send form later" + response)
       }
     });
   }
 });
 
 
 
 $(".question-form__form").validate({
   errorClass: "form-error",
   rules: {
     // simple rule, converted to {required:true}
     userName: {
       required: true,
       minlength: 2,
       maxlength: 15
     },
     // compound rule
     userEmail: {
       required: true,
       email: true
     },
     userPhone: {
       required: true,
       maxlength: 17,
       minlength: 17
     },
   },
   messages: {
     userName: {
       required: "Name required",
       minlength: "Name not shorter than 2",
       maxlength: "Name not bigger than 15"
     },
     userPhone: {
       required: "Phone required!",
       minlength: "Please enter a phone number"
     },
     userEmail: {
       required: "Be sure to specify the mail",
       email: "Type in format: name@mail.com"
     },
   },
   submitHandler: function(form) {
     $.ajax({
       type: "POST",
       url: "../telegram.php",
       data: $(form).serialize(),
       // dataType: "dataType",
       success: function (response) {
         alert("The form has been submitted. We will contact you within 24 hours.");
         $(form)[0].reset();
         modal.style.visibility="hidden";
       },
       error: function (response) {
         alert("Sorry. The form does't work please call to us or try send form later" + response)
       }
     });
   }
 });
 
 
  // mask for phone number
 //  $('[type=tel]').mask('+1 (000) 000-0000');
  var inputTels = $("input[type='tel']");
  inputTels.on("focus", function() {
   $("input[type='tel']").mask("+1 (000) 000-0000", {placeholder: "+1 (___) ___-____"});
 });
 
 
 function backToTop() {
   let buttonTop = $(".back-to-top");
 
   $(window).on("scroll", () => {
     if ($(this).scrollTop() >= 1000) {
       buttonTop.fadeIn();
     } else {
       buttonTop.fadeOut();
     }
   });
 
   buttonTop.on("click", (e) => {
     e.preventDefault();
     $("html").animate({scrollTop: 0}, 1000);
   })
 }
 
 backToTop();
 
 
 });
 