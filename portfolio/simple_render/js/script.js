$(document).ready(function(){
  // Home_page Start ***************************************
  // Slider_on_top
  $('.slider_top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 551,
        settings: {
          dots: false
        }
      }
    ]
  });
  $('.slider_top').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    new WOW({boxClass: 'anim2'}).init();
  });
  // Hamburger_menu
  $('.hamburger').click(function () {
    $('.nav_box').slideToggle(500);
    $('.hamburger').toggleClass('is-active');
  });
  $(window).resize(function () {
    if ($(window).width() > 750) {
      $('.nav_box').removeAttr('style');
    }
  });
  // Home_page End ***************************************
  // Projects Start ****************************************
  if ($('.projects_item_box').length > 0) {
    var containerEl = document.querySelector('.container');
    var mixer = mixitup(containerEl, {
      animation: {
        animateResizeContainer: false // required to prevent column algorithm bug
      }
    });
  }
  // Projects End ****************************************
  // 1_project Start ****************************************
  $('.project_gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }

  });
  // 1_project End ****************************************
});