$(document).ready(function(){
    // variables
    var overlay = $(".overlay"),
        catalogNav = $('.catalog_nav');


    // Search open
    if ($('.search_box').length > 0) {
        // open by click
        $('.search_input').click(function() {
            $(".search_box").addClass('active');
            $(".page_nav_link").css('z-index','0');

        });

        // закрыть по клику вне окна
        $(document).mouseup(function (e) {
            var popup = $('.search_results_box');
            if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                $(".search_box").removeClass('active');
                $(".page_nav_link").removeAttr("style");
            }
        });

        $('.search_btn').click(function() {
            $(".search_form_box").toggleClass('hide_toggle');
        });
    }


    function showOverlay() {
        if ($(window).width() < 1156) {
            if ( !($('.mobile_main_nav').hasClass('hide_toggle')) || !(catalogNav.hasClass('hide_toggle')) || !($('.second_filter_box').hasClass('hide_toggle_class')) ) {
                $('.catalog_right_menu_trigger').removeClass('active_right_menu');
            }
        }
        if ($(window).width() < 945) {
            if ( ($('.mobile_main_nav').hasClass('hide_toggle')) || (catalogNav.hasClass('hide_toggle')) || ($('.second_filter_box').hasClass('hide_toggle_class')) ) {
                overlay.addClass('overlay_on');
                $('body').addClass('overflow_hidden');
            } else  {
                overlay.removeClass('overlay_on');
                $('.catalog_right_menu_trigger').removeClass('active_right_menu');
                $('body').removeClass('overflow_hidden');
            }
        }
    }

    // preventDefault for link
    $( ".catalog_dropdown_link" ).click(function( event ) {
        event.preventDefault();
    });
    $( ".catalog_type_title" ).click(function( event ) {
        event.preventDefault();
    });

    // Hide Toggle Menu(Left)
    if ($('.hide_toggle_trigger_box').length > 0) {
        // open by click
        $('.hide_toggle_trigger').click(function() {
            catalogNav.toggleClass('hide_toggle');
            $('.hide_toggle_trigger_box').toggleClass('hide_toggle');
            showOverlay();
            if(!($('.hide_toggle_trigger_box').hasClass('hide_toggle'))) {
                catalogNav.removeClass('nav_move_right');
                $('.right_menu_close_trigger ').removeClass('hide_toggle');
            }
        });
    }

    // Hide Toggle Mobile Main(Right) Menu
    if ($('.mobile_main_nav_box').length > 0) {
        // open by click
        $('.mobile_main_nav_box_trigger').click(function() {
            $(".mobile_main_nav").toggleClass('hide_toggle');
            $(".mobile_main_nav_box_trigger").toggleClass('hide_toggle');
            showOverlay();
        });
    }


    // Dropdown Menu open
    if ($('.basic_box').length > 0) {
        // open by click
        $('.catalog_dropdown_trigger').click(function() {
            $(this).closest('.catalog_type_list li').find('>.catalog_dropdown_menu_box').slideToggle(500);
            $(this).toggleClass('toggle_down');
        });

        $('.catalog_dropdown_second_trigger').click(function() {
          $(this).closest('.catalog_dropdown_menu_box_second').toggleClass('open_second_dropdown');
          $(this).closest('.catalog_dropdown_menu_box_second').find('>.catalog_dropdown_menu').slideToggle(500);
        });
    }

    // Right Menu open
    if ($('.basic_box').length > 0) {
        // open by click
        $('.catalog_right_menu_trigger').click(function() {
            $('.catalog_right_menu_trigger').removeClass('active_right_menu');
            $(this).toggleClass('active_right_menu');
            if ($(window).width() < 945) {
                $('.catalog_right_menu_trigger').closest('.catalog_dropdown_menu li').find('>.right_menu_box').removeClass('move_right');
                $(this).closest('.catalog_dropdown_menu li').find('>.right_menu_box').addClass('move_right');
            }
            if ( $('.right_menu_box').hasClass('move_right') ) {
                catalogNav.addClass('nav_move_right');
                $('.right_menu_close_trigger').addClass('hide_toggle');
            } else {
                catalogNav.removeClass('nav_move_right');
                $('.right_menu_close_trigger').removeClass('hide_toggle');
            }
        });
        $('.catalog_right_menu_trigger').mouseenter(function() {
            $('.catalog_right_menu_trigger').removeClass('active_right_menu');
            $(this).parents('.catalog_right_menu_trigger').addClass('active_right_menu');
        });
        $('.right_menu_close_trigger').click(function() {
            $('.catalog_right_menu_trigger').removeClass('active_right_menu');
            catalogNav.removeClass('nav_move_right');
            $('.right_menu_close_trigger').removeClass('hide_toggle');
        });
    }

    // Right menu hover
    if ($('.basic_box').length > 0) {
        $('.right_menu_box')
            .mouseenter(function() {
                $('.catalog_right_menu_trigger').removeClass('active_right_menu');
                $(this).parents('.catalog_right_menu_trigger').addClass('active_right_menu');
            })
            .mouseleave(function() {
                $(this).parents('.catalog_right_menu_trigger').removeClass('active_right_menu');
            });
    }

    // CallBack PopUp
    if ($('.callback_trigger').length > 0) {
        $('.callback_trigger').on('click', function() {
            $('.callback_popup').addClass('open_popup');
            overlay.css('z-index','12');
            overlay.addClass('overlay_on');
            $('body').addClass('overflow_hidden');
        });
        $('.close_box').click(function () {
            $('.callback_popup').removeClass('open_popup');
            overlay.removeAttr('style');
            overlay.removeClass('overlay_on');
            $('body').removeClass('overflow_hidden');
        });
    }

    // Season slider
    if ($('.season_slider').length > 0) {
        $('.season_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('#season_left'),
            nextArrow: $('#season_right'),
            speed: 500,
            responsive: [
                {
                    breakpoint: 1712,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1443,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 861,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }


    // Hit slider
    if ($('.hit_slider').length > 0) {
        $('.hit_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('#hit_left'),
            nextArrow: $('#hit_right'),
            speed: 500,
            responsive: [
                {
                    breakpoint: 1712,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1443,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 861,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //**************************
    //    Catalog Page
    //**************************
    if ($('.filter_item_form').length > 0) {
        $('#filter_btn_trigger').on('click', function() {
            $('.second_filter_box').toggleClass('hide_toggle_class');
            showOverlay();
        });
        $('#btn_filter_on').on('click', function() {
            $('.second_filter_box').removeClass('hide_toggle_class');
            showOverlay();
        });
    }


    //**************************
    //    News Page
    //**************************
    if ($('.news_item_box').length > 0) {
        $('.img_news, .news_heading').on('click', function() {
            $(this).parents('.news_item').css('z-index','12');
            $(this).parents('.news_item').addClass('news_item_open');
            $(".page_nav_link").css('z-index','0');
            overlay.css('z-index','12');
            overlay.addClass('overlay_on');
        });
        $('.btn_news_trigger').on('click', function() {
            $('.news_item').change();
            if ($('.news_item').hasClass('news_item_open')) {
                $(this).parents('.news_item').removeAttr('style');
                $(this).parents('.news_item').removeClass('news_item_open');
                $(".page_nav_link").removeAttr('style');
                overlay.removeAttr('style');
                overlay.removeClass('overlay_on');
            } else {
                $(this).parents('.news_item').css('z-index','12');
                $(this).parents('.news_item').addClass('news_item_open');
                $(".page_nav_link").css('z-index','0');
                overlay.css('z-index','12');
                overlay.addClass('overlay_on');
            }
        });
        $('.close_news').on('click', function() {
            $('.news_item').removeAttr('style');
            $('.news_item').removeClass('news_item_open');
            $(".page_nav_link").removeAttr('style');
            overlay.removeAttr('style');
            overlay.removeClass('overlay_on');
        });
    }



    //**************************
    //    Articles Page
    //**************************
    if ($('.news_item_box').length > 0) {
        $('.filter_nav_btn').on('click', function () {
            let btnFilter = $(this).data('filter'),
                filterContent = $('.news_item_place');
            $('.filter_nav_btn').removeClass('active');
            $(this).addClass('active');
            if (btnFilter === "all") {
                filterContent.show();
            } else {
                filterContent.hide();
                filterContent.filter('[data-content='+btnFilter+']').show();
            }
        });
    }



    //**************************
    //   Item Page
    //**************************
    if($('.top_item_line').length > 0) {
        // Tab for Item
        var $wrapper = $('.tab-wrapper'),
            $allTabs = $wrapper.find('.tab-content > div'),
            $tabMenu = $wrapper.find('.tab-menu li');

        $allTabs.not(':first-of-type').hide();
        // $tabMenu.filter(':first-of-type').find(':first').width('100%');

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
        });

        //Magnific PopUp
        $('.tab-content').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 400, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

        });


        // Option Slider
        $('.item_option_slider').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('#item_option_slider_arrow_prev'),
            nextArrow: $('#item_option_slider_arrow_next'),
            speed: 500,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 1596,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                  breakpoint: 1415,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 1195,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                    breakpoint: 801,
                    settings: {
                      autoplay: true,
                      autoplaySpeed: 1500,
                      arrows: false,
                      slidesToShow: 3
                    }
                },
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                  breakpoint: 430,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        });

        // Speed Pay PopUp
        var speedPopup = $('.speed_bay_popup');
        $('#speed_bay_trigger').on('click', function() {
            speedPopup.addClass('open_popup');
            overlay.css('z-index','12');
            overlay.addClass('overlay_on');
            // $('body').addClass('overflow_hidden');
        });
        $('.close_speed_bay_popup').click(function () {
            speedPopup.removeClass('open_popup');
            overlay.removeAttr('style');
            overlay.removeClass('overlay_on');
            // $('body').removeClass('overflow_hidden');
        });


      // Calculator Item Option PopUp
      var calculatorPopup = $('.calculator_item_option_popup'),
      itemOption = $('.item_option_item');

      itemOption.on('click', function() {
        calculatorPopup.addClass('open_popup');
      });
      $('.calculator_item_option_close_box').click(function () {
        calculatorPopup.removeClass('open_popup');
      });

    }


});
