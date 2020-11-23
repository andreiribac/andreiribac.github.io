$(document).ready(function(){
  // Change HEADER color
  if ($('.team_section').length > 0 || $('.color_change_treatments').length > 0 || $('.color_change_treatment').length > 0 || $('.color_change_prices').length > 0 || $('.color_change_faq').length > 0)  {
    $(window).scroll(function(){
      var currentclass
      $('section').each(function(){
        if($(this).offset().top<$(window).scrollTop()){
          currentclass =$(this).attr('id')
        }

      })
      $('header').attr('class',currentclass)
    })
  }
  $(window).on('scroll',() => console.log(2))

  // Hamburger_menu
  $('.hamburger').click(function () {
    $('.nav_box').slideToggle(500);
    $('.hamburger').toggleClass('is-active');
    $('.logo_link').toggleClass('is-active');
  });
  $(window).resize(function () {
    if ($(window).width() > 1050) {
      $('.nav_box').removeAttr('style');
    }
  });
  $('li.dental-down-btn').click(function(){
    $('li.dental-down-btn').toggleClass('open');
    $(".sub_nav_box").slideToggle(500);
  });
  //*****************************************************
  // Sliders
  // Clinic
  $('.clinic_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.nav_clinic'),
    nextArrow: $('#clinic-right'),
    prevArrow: $('#clinic-left'),
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  // if ($('.clinic_slider_box').length > 0)  {
  //
  // }
  // Doctor
  $('.doctor_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: $('.nav_doctor'),
    nextArrow: $('#doctor-right'),
    prevArrow: $('#doctor-left'),
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false
        }
      }
    ]
  });
  // if ($('.doctor_slider_box').length > 0) {
  //
  // }
  // Testimonials
  if ($('.testimonials_slider_box').length > 0) {
    $('.testimonials_box').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      appendDots: $('.nav_testimonial'),
      nextArrow: $('#testimonial-right'),
      prevArrow: $('#testimonial-left'),
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  }
  //*******************************************************
  // Tab
  if ($('.tab-wrapper').length > 0) {
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tab-menu li');

    $allTabs.not(':first-of-type').hide();
    // $tabMenu.filter(':first-of-type').find(':first').width('100%')

    $tabMenu.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });

    $allTabs.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });

    $tabMenu.on('click', function() {

      var dataTab = $(this).data('tab'),
          $getWrapper = $(this).closest($wrapper);

      $getWrapper.find($tabMenu).removeClass('active');
      $(this).addClass('active');


      $getWrapper.find($allTabs).hide();
      $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
      $('.clinic_slider').slick('setPosition');
      $('.doctor_slider').slick('setPosition');
    });

    $('.next_step').on('click', function(){
      var item = $('.tab-menu li.active:last'),
        prevData = item.data('tab'),
        data = item.next().data('tab');
      if(item.next().data('tab')){
        item.next().addClass('active');

        $("div[data-tab="+prevData+"]").hide();
        $("div[data-tab="+data+"]").show();
      }
    });
  }
  //******************************************************
  // FullPageScroll
  if ($(window).width() < 500) {
    if ($('.color_change').length > 0 )  {
      AOS.init({
        easing: 'ease-in-out',
        duration: 1000
      });
      // hljs.initHighlightingOnLoad();
    }
  }
  else {
    if ($('.color_change').length > 0) {
      $('#fullpage').fullpage({
        scrollOverflow: true,
        // lockAnchors: false,
        anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        navigation: true,
        navigationPosition: 'left',
        // navigationTooltips: ['HERO', 'HOW IT WORK', 'PRICES', 'ABOUT US', 'TESTIMONIALS', 'CTA', 'FOOTER'],
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
        scrollingSpeed: 1000,
        verticalCentered: false,
        responsiveWidth: 500,
        afterLoad: function(origin, destination){
          if (destination.index == 0 ) {
            $('#section0 h2').toggleClass('bg');
            $('#section0 h2').toggleClass('fadeInUp');
            $('#section0 h2 + span').toggleClass('fadeInUp');
            $('#section0 .list').toggleClass('fadeInUp');
          }
        },
        onLeave: function (origin, destination, direction) {
          console.log("Прошлая секция" + origin.index, direction,"Текущая секция" + destination.index);
          // Move DOWN
          if (origin.index == 0 && direction == 'down') {
            // connect toggleClass
            $('#section1 h2').toggleClass('fadeInUp');
            $('#section1 h2 + span').toggleClass('fadeInUp');
            $('#section1 .item').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section0 h2').toggleClass('fadeInUp');
            $('#section0 h2 + span').toggleClass('fadeInUp');
            $('#section0 .list').toggleClass('fadeInUp');
          }
          if (origin.index == 1 && direction == 'down') {
            // connect toggleClass
            $('#section2 h2').toggleClass('fadeInUp');
            $('#section2 .tab-wrapper').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section1 h2').toggleClass('fadeInUp');
            $('#section1 h2 + span').toggleClass('fadeInUp');
            $('#section1 .item').toggleClass('fadeInUp');
          }
          if (origin.index == 2 && direction == 'down') {
            // connect toggleClass
            $('#section3 .tab-wrapper').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section2 h2').toggleClass('fadeInUp');
            $('#section2 .tab-wrapper').toggleClass('fadeInUp');
          }
          if (origin.index == 3 && direction == 'down') {
            // connect toggleClass
            $('#section4 h2').toggleClass('fadeInUp');
            $('#section4 .testimonials_box').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section3 .tab-wrapper').toggleClass('fadeInUp');
          }
          if (origin.index == 4 && direction == 'down') {
            // connect toggleClass
            $('#section5 h2').toggleClass('fadeInUp');
            $('#section5 button').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section4 h2').toggleClass('fadeInUp');
            $('#section4 .testimonials_box').toggleClass('fadeInUp');
          }
          if (origin.index == 5 && direction == 'down') {
            // connect toggleClass
            $('#section6 .footer_info_box').toggleClass('fadeInUp');
            $('#section6 .footer_rights_box').toggleClass('fadeInUp');
            // disconnect toggleClass
            $('#section5 h2').toggleClass('fadeInUp');
            $('#section5 button').toggleClass('fadeInUp');
          }
          // // Move UP
          if (origin.index == 6 && direction == 'up') {
            // disconnect toggleClass
            $('#section6 .footer_info_box').toggleClass('fadeInUp');
            $('#section6 .footer_rights_box').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section5 h2').toggleClass('fadeInUp');
            $('#section5 button').toggleClass('fadeInUp');
          }
          if (origin.index == 5 && direction == 'up') {
            // disconnect toggleClass
            $('#section5 h2').toggleClass('fadeInUp');
            $('#section5 button').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section4 h2').toggleClass('fadeInUp');
            $('#section4 .testimonials_box').toggleClass('fadeInUp');
          }
          if (origin.index == 4 && direction == 'up') {
            // disconnect toggleClass
            $('#section4 h2').toggleClass('fadeInUp');
            $('#section4 .testimonials_box').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section3 .tab-wrapper').toggleClass('fadeInUp');
          }
          if (origin.index == 3 && direction == 'up') {
            // disconnect toggleClass
            $('#section3 .tab-wrapper').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section2 h2').toggleClass('fadeInUp');
            $('#section2 .tab-wrapper').toggleClass('fadeInUp');
          }
          if (origin.index == 2 && direction == 'up') {
            // disconnect toggleClass
            $('#section2 h2').toggleClass('fadeInUp');
            $('#section2 .tab-wrapper').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section1 h2').toggleClass('fadeInUp');
            $('#section1 h2 + span').toggleClass('fadeInUp');
            $('#section1 .item').toggleClass('fadeInUp');
          }
          if (origin.index == 1 && direction == 'up') {
            // disconnect toggleClass
            $('#section1 h2').toggleClass('fadeInUp');
            $('#section1 h2 + span').toggleClass('fadeInUp');
            $('#section1 .item').toggleClass('fadeInUp');
            // connect toggleClass
            $('#section0 h2').toggleClass('fadeInUp');
            $('#section0 h2 + span').toggleClass('fadeInUp');
            $('#section0 .list').toggleClass('fadeInUp');
          }
          // Menu Color
          if (destination.index == 2) {
            $('header').attr('class','white');
          } else if (destination.index == 4  || destination.index == 5 || destination.index == 6) {
            $('header').attr('class','bg');
          } else {
            $('header').removeAttr('class','white');
            $('header').removeAttr('class','bg');
          }
        },
        // autoScrolling: true,
        scrollHorizontally: true
      });

      // methods
      // $.fn.fullpage.setAllowScrolling(false);
      //******************************************************
    }
  }
  if ($('.color_change_moldova').length > 0) {
    $('#fullpage').fullpage({
      scrollOverflow: true,
      // lockAnchors: false,
      anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
      navigation: true,
      navigationPosition: 'left',
      // navigationTooltips: ['VISIT MOLDOVA', 'ACCOMODATION', 'CASTEL MIMI', 'CRICOVA', 'OLD ORHEI', 'WINE and FOOD', 'SHOPPING & ENTERTAMENT', 'CTA', 'FOOTER'],
      parallax: true,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
      parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollingSpeed: 1000,
      verticalCentered: false,
      afterLoad: function(origin, destination, window){
        if (destination.index == 0) {
          $('header').removeAttr('class','bg');
          $('header').attr('class','white');
          $('#section0 h1').toggleClass('fadeInUp');
          $('#section0 h1 + span').toggleClass('fadeInUp');
          $('#section0 .title_box + a').toggleClass('fadeInDown');
        } else {
          $('header').removeAttr('class','white');
          $('header').attr('class','bg');
        }
      },
      onLeave: function (origin, destination, direction) {
        console.log("Прошлая секция" + origin.index, direction,"Текущая секция" + destination.index);
        // Move DOWN
        if (origin.index == 0 && direction == 'down') {
          // connect toggleClass
          $('#section1 h2').toggleClass('fadeInUp');
          $('#section1 p').toggleClass('fadeInUp');
          $('#section1 button').toggleClass('fadeInUp');
          $('#section1 .img').toggleClass('zoominout');
          $('#section1 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section0 h1').toggleClass('fadeInUp');
          $('#section0 h1 + span').toggleClass('fadeInUp');
          $('#section0 .title_box + a').toggleClass('fadeInDown');
        }
        if (origin.index == 1 && direction == 'down') {
          // connect toggleClass
          $('#section2 h2').toggleClass('fadeInUp');
          $('#section2 p').toggleClass('fadeInUp');
          $('#section2 button').toggleClass('fadeInUp');
          $('#section2 .img').toggleClass('zoominout');
          $('#section2 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section1 h2').toggleClass('fadeInUp');
          $('#section1 p').toggleClass('fadeInUp');
          $('#section1 button').toggleClass('fadeInUp');
          $('#section1 .img').toggleClass('zoominout');
          $('#section1 a').toggleClass('fadeInDown');
        }
        if (origin.index == 2 && direction == 'down') {
          // connect toggleClass
          $('#section3 h2').toggleClass('fadeInUp');
          $('#section3 p').toggleClass('fadeInUp');
          $('#section3 button').toggleClass('fadeInUp');
          $('#section3 .img').toggleClass('zoominout');
          $('#section3 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section2 h2').toggleClass('fadeInUp');
          $('#section2 p').toggleClass('fadeInUp');
          $('#section2 button').toggleClass('fadeInUp');
          $('#section2 .img').toggleClass('zoominout');
          $('#section2 a').toggleClass('fadeInDown');
        }
        if (origin.index == 3 && direction == 'down') {
          // connect toggleClass
          $('#section4 h2').toggleClass('fadeInUp');
          $('#section4 p').toggleClass('fadeInUp');
          $('#section4 button').toggleClass('fadeInUp');
          $('#section4 .img').toggleClass('zoominout');
          $('#section4 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section3 h2').toggleClass('fadeInUp');
          $('#section3 p').toggleClass('fadeInUp');
          $('#section3 button').toggleClass('fadeInUp');
          $('#section3 .img').toggleClass('zoominout');
          $('#section3 a').toggleClass('fadeInDown');
        }
        if (origin.index == 4 && direction == 'down') {
          // connect toggleClass
          $('#section5 h2').toggleClass('fadeInUp');
          $('#section5 p').toggleClass('fadeInUp');
          $('#section5 button').toggleClass('fadeInUp');
          $('#section5 .img').toggleClass('zoominout');
          $('#section5 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section4 h2').toggleClass('fadeInUp');
          $('#section4 p').toggleClass('fadeInUp');
          $('#section4 button').toggleClass('fadeInUp');
          $('#section4 .img').toggleClass('zoominout');
          $('#section4 a').toggleClass('fadeInDown');
        }
        if (origin.index == 5 && direction == 'down') {
          // connect toggleClass
          $('#section6 h2').toggleClass('fadeInUp');
          $('#section6 p').toggleClass('fadeInUp');
          $('#section6 button').toggleClass('fadeInUp');
          $('#section6 .img').toggleClass('zoominout');
          $('#section6 a').toggleClass('fadeInDown');
          // disconnect toggleClass
          $('#section5 h2').toggleClass('fadeInUp');
          $('#section5 p').toggleClass('fadeInUp');
          $('#section5 button').toggleClass('fadeInUp');
          $('#section5 .img').toggleClass('zoominout');
          $('#section5 a').toggleClass('fadeInDown');
        }
        if (origin.index == 6 && direction == 'down') {
          // connect toggleClass
          $('#section7 h2').toggleClass('fadeInUp');
          $('#section7 button').toggleClass('fadeInUp');
          // disconnect toggleClass
          $('#section6 h2').toggleClass('fadeInUp');
          $('#section6 p').toggleClass('fadeInUp');
          $('#section6 button').toggleClass('fadeInUp');
          $('#section6 .img').toggleClass('zoominout');
          $('#section6 a').toggleClass('fadeInDown');
        }
        if (origin.index == 7 && direction == 'down') {
          // connect toggleClass
          $('#section8 .footer_info_box').toggleClass('fadeInUp');
          $('#section8 .footer_rights_box').toggleClass('fadeInUp');
          // disconnect toggleClass
          $('#section7 h2').toggleClass('fadeInUp');
          $('#section7 button').toggleClass('fadeInUp');
        }
        // // Move UP
        if (origin.index == 8 && direction == 'up') {
          // disconnect toggleClass
          $('#section8 .footer_info_box').toggleClass('fadeInUp');
          $('#section8 .footer_rights_box').toggleClass('fadeInUp');
          // connect toggleClass
          $('#section7 h2').toggleClass('fadeInUp');
          $('#section7 button').toggleClass('fadeInUp');
        }
        if (origin.index == 7 && direction == 'up') {
          // disconnect toggleClass
          $('#section7 h2').toggleClass('fadeInUp');
          $('#section7 button').toggleClass('fadeInUp');
          // connect toggleClass
          $('#section6 h2').toggleClass('fadeInUp');
          $('#section6 p').toggleClass('fadeInUp');
          $('#section6 button').toggleClass('fadeInUp');
          $('#section6 .img').toggleClass('zoominout');
          $('#section6 a').toggleClass('fadeInDown');
        }
        if (origin.index == 6 && direction == 'up') {
          // disconnect toggleClass
          $('#section6 h2').toggleClass('fadeInUp');
          $('#section6 p').toggleClass('fadeInUp');
          $('#section6 button').toggleClass('fadeInUp');
          $('#section6 .img').toggleClass('zoominout');
          $('#section6 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section5 h2').toggleClass('fadeInUp');
          $('#section5 p').toggleClass('fadeInUp');
          $('#section5 button').toggleClass('fadeInUp');
          $('#section5 .img').toggleClass('zoominout');
          $('#section5 a').toggleClass('fadeInDown');
        }
        if (origin.index == 5 && direction == 'up') {
          // disconnect toggleClass
          $('#section5 h2').toggleClass('fadeInUp');
          $('#section5 p').toggleClass('fadeInUp');
          $('#section5 button').toggleClass('fadeInUp');
          $('#section5 .img').toggleClass('zoominout');
          $('#section5 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section4 h2').toggleClass('fadeInUp');
          $('#section4 p').toggleClass('fadeInUp');
          $('#section4 button').toggleClass('fadeInUp');
          $('#section4 .img').toggleClass('zoominout');
          $('#section4 a').toggleClass('fadeInDown');
        }
        if (origin.index == 4 && direction == 'up') {
          // disconnect toggleClass
          $('#section4 h2').toggleClass('fadeInUp');
          $('#section4 p').toggleClass('fadeInUp');
          $('#section4 button').toggleClass('fadeInUp');
          $('#section4 .img').toggleClass('zoominout');
          $('#section4 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section3 h2').toggleClass('fadeInUp');
          $('#section3 p').toggleClass('fadeInUp');
          $('#section3 button').toggleClass('fadeInUp');
          $('#section3 .img').toggleClass('zoominout');
          $('#section3 a').toggleClass('fadeInDown');
        }
        if (origin.index == 3 && direction == 'up') {
          // disconnect toggleClass
          $('#section3 h2').toggleClass('fadeInUp');
          $('#section3 p').toggleClass('fadeInUp');
          $('#section3 button').toggleClass('fadeInUp');
          $('#section3 .img').toggleClass('zoominout');
          $('#section3 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section2 h2').toggleClass('fadeInUp');
          $('#section2 p').toggleClass('fadeInUp');
          $('#section2 button').toggleClass('fadeInUp');
          $('#section2 .img').toggleClass('zoominout');
          $('#section2 a').toggleClass('fadeInDown');
        }
        if (origin.index == 2 && direction == 'up') {
          // disconnect toggleClass
          $('#section2 h2').toggleClass('fadeInUp');
          $('#section2 p').toggleClass('fadeInUp');
          $('#section2 button').toggleClass('fadeInUp');
          $('#section2 .img').toggleClass('zoominout');
          $('#section2 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section1 h2').toggleClass('fadeInUp');
          $('#section1 p').toggleClass('fadeInUp');
          $('#section1 button').toggleClass('fadeInUp');
          $('#section1 .img').toggleClass('zoominout');
          $('#section1 a').toggleClass('fadeInDown');
        }
        if (origin.index == 1 && direction == 'up') {
          // disconnect toggleClass
          $('#section1 h2').toggleClass('fadeInUp');
          $('#section1 p').toggleClass('fadeInUp');
          $('#section1 button').toggleClass('fadeInUp');
          $('#section1 .img').toggleClass('zoominout');
          $('#section1 a').toggleClass('fadeInDown');
          // connect toggleClass
          $('#section0 h1').toggleClass('fadeInUp');
          $('#section0 h1 + span').toggleClass('fadeInUp');
          $('#section0 .title_box + a').toggleClass('fadeInDown');
        }
      },
      // autoScrolling: true,
      scrollHorizontally: true
    });

    // methods
    // $.fn.fullpage.setAllowScrolling(false);
    //******************************************************
  }
  //******************************************************
  $(".dropdown").click(function(){
    $(".tel_menu").toggleClass("active");
    $(".tel_menu > li").click(function(){
      $(".dropdown").html($(this).html());
      $(".tel_menu").removeClass("active");
    });
  });
  // PopUp






  //<!--Тут изменения Женя-->
  if ($('.quote').length > 0) {
    // open PopUp
    $('.quote').click(function() {
      $('.estimate_overlay').fadeIn();
      $('.estimate_overlay').addClass('disabled');
    });

    // close button click
    $('.close-popup').click(function() {
      $('.estimate_overlay').fadeOut();
    });

    // close area click
    $(document).mouseup(function (e) {
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.overlay').fadeOut();
      }
    });
  }
  if ($('.call').length > 0) {
    // open PopUp
    $('.call').click(function() {
      $('.talk_overlay').fadeIn();
      $('.talk_overlay').addClass('disabled');
    });

    // close button click
    $('.close-popup').click(function() {
      $('.talk_overlay').fadeOut();
    });

    // close area click
    $(document).mouseup(function (e) {
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.talk_overlay').fadeOut();
      }
    });

    // Image for call
    $(".select_tel_list").chosen();
  }
  // <!--Тут изменения Женя-->








  // $(".dropdown").click(function(){
  //   $(".tel_menu").toggleClass("active");
  //   $(".tel_menu > li").click(function(){
  //     $(".dropdown").html($(this).html());
  //     $(".menu").removeClass("active");
  //   });
  // });
});