$(document).ready(function () {

    // document.querySelector('.sidebar').onmousewheel = () => {
    //     $('.win_now').addClass('hide');
    //     $('.social_box').addClass('hide');
    //     $('.position_box').addClass('hide');
    //     // setTimeout(() => {
    //     //     $('.win_now').removeClass('hide');
    //     //     $('.social_box').removeClass('hide');
    //     //     $('.position_box').removeClass('hide');
    //     //     }, 2000);
    // };
    // document.querySelector('.sidebar').onmouseleave = ()=> {
    //     $('.win_now').removeClass('hide');
    //     $('.social_box').removeClass('hide');
    //     $('.position_box').removeClass('hide');
    // };

    // Logo Color Change
    if ($('.img_logo').length > 0) {
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        $('.img_logo').on('mouseenter', function () {
            $(".desctop .img_logo").get(0).style.setProperty("--color1", getRandomColor());
        });
    }

    // Main Slider
    if ($('.main_slider_box').length > 0) {
        $('.main_slider_box').slick({
            // autoplay: true,
            // autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        $('.main_slider_box').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            new WOW({boxClass: 'anim'}).init();
        });
    }

    // Provider slider
    if ($('.game_company_list').length > 0) {
        $('.game_company_list').slick({
            infinite: true,
            slidesToShow: 12,
            slidesToScroll: 3,
            // autoplay: true,
            // autoplaySpeed: 3000,
            dots: false,
            speed: 200,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 8,
                        slidesToScroll: 1
                    }
                }
                ,
                // Unslic version
                {
                    breakpoint: 1199,
                    settings: "unslick",
                }
                // Slider version
                // {
                //     breakpoint: 1081,
                //     settings: {
                //         speed: 200,
                //         slidesToShow: 5,
                //         slidesToScroll: 1
                //     }
                // },
                // {
                //     breakpoint: 861,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 1
                //     }
                // }
                //not use
                // ,
                // {
                //     breakpoint: 409,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1
                //     }
                // }
            ]
        });

        let filterBtn = $('.game_filter');
        filterBtn.on('click', function () {
            filterBtn.removeClass('active');
            $(this).addClass('active');
        });
    }


    // Tournament slider
    if ($('.tournament_slider_box').length > 0) {
        $('.tournament_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.tournament_arrow_left'),
            nextArrow: $('.tournament_arrow_right'),
            appendDots: $('.event_list_box'),
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    // Status Slider
    let statusSlider = $('.user_status_slider');
    statusSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //  CountDown
    if ($('.countdown_box').length > 0) {
        $('#magic').countdown("2019/04/30", function (event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="timer_item"><span>%d</span> дней </div>'
                + '<div class="timer_item"><span>%H</span> час </div>'
                + '<div class="timer_item"><span>%M</span> мин </div>'
                + '<div class="timer_item"><span>%S</span> сек</div>'));
        });
        $('#magic_2').countdown("2020/12/30", function (event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="timer_item"><span>%d</span> дней </div>'
                + '<div class="timer_item"><span>%H</span> час </div>'
                + '<div class="timer_item"><span>%M</span> мин </div>'
                + '<div class="timer_item"><span>%S</span> сек</div>'));
        });
    }

    // Sticky menu
    if ($('.game_nav_box_container').length > 0) {
        var navPos, winPos, navHeight;

        function refreshVar() {
            navPos = $('.game_nav_box_container').offset().top;
            navHeight = $('.game_nav_box_container').outerHeight(true);
        }

        refreshVar();
        $(window).resize(refreshVar);

        $(window).scroll(function () {
            winPos = $(window).scrollTop();

            if (winPos >= navPos) {
                $('.game_nav_box_container').addClass('game_nav_box_container_fixed');
            } else {
                $('.game_nav_box_container').removeClass('game_nav_box_container_fixed');
            }
        });
    }

    // Mobile Menu
    if ($('.sidebar').length > 0) {
        $(".mobile_menu_button_box").click(function () {
            $(".nav_sidebar").addClass('active');
        });
        $(".menu_btn_close").click(function () {
            $(".nav_sidebar").removeClass('active');
        });

        $(".sub_menu_box").click(function () {
            $(".sub_menu_box").toggleClass('is-active');
            $(".them_list_mobile").toggleClass('is-active');
        });
        $(".them_link").click(function () {
            $(".them_link").removeClass('is-active');
            $(this).addClass('is-active');
        });
    }


    // Click-Open btn
    // Them games
    if ($('.them_box_wrap').length > 0) {
        $(".them_list > li").click(function () {
            // $(".selected_them").html($(this).html());
            $(".selected_them").addClass('active');
            $(".selected_them span").text($(this).text());
            $('.them_box_wrap').removeClass("active");
            $('.popup_them_list').removeClass("active");
            $('.basic_box').removeClass('overflow_hidden');
        });
        $('.open_them').click(function () {
            $('.them_box_wrap').toggleClass('active');
            if ($(window).width() < 1221) {
                $('.basic_box').addClass('overflow_hidden');
                $('.popup_them_list').addClass("active");
            }
        });
        // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.them_list');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.them_box_wrap').removeClass("active");
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }
    // lang games
    if ($('.lang_box').length > 0) {
        // $('.position_box').on('click', function () {
        //     if ( $('.lang_box').hasClass('active')){
        //         $('.lang_box').removeClass('active');
        //     }else{
        //         $('.lang_box').addClass('active');
        //     }
        // });
        $(".lang_list > li").click(function () {
            $(".selected_lang > li").html($(this).html());
            $('.lang_box').removeClass("active");
        });
        $('.position_box').click(function () {
            // $('.nav_box').slideToggle(300);
            $('.lang_box').toggleClass('active');
        });
    }
    // Gender Open
    if ($('.gender_box').length > 0) {
        $(".gender_list > li").click(function () {
            $(".selected_gender").html($(this).html());
            $('.gender_box_wrap').removeClass("active");
        });
        $('.selected_gender').click(function () {
            $('.gender_box_wrap').toggleClass('active');
        });
    }
    // Сountry Open
    if ($('.country_box').length > 0) {
        $(".country_list > li").click(function () {
            $(".selected_country").html($(this).html());
            $('.country_box_wrap').removeClass("active");
        });
        $('.selected_country').click(function () {
            $('.country_box_wrap').toggleClass('active');
        });
    }
    // Сity Open
    if ($('.city_box').length > 0) {
        $(".city_list > li").click(function () {
            $(".selected_city").html($(this).html());
            $('.city_box_wrap').removeClass("active");
        });
        $('.selected_city').click(function () {
            $('.city_box_wrap').toggleClass('active');
        });
    }
    // Money Open
    if ($('.money_box').length > 0) {
        $(".money_list > li").click(function () {
            $(".selected_money").html($(this).html());
            $('.money_box_wrap').removeClass("active");
        });
        $('.selected_money').click(function () {
            $('.money_box_wrap').toggleClass('active');
        });
    }
    // Avatar Open
    if ($('.avatar_box').length > 0) {
        $(".avatar_list > li").click(function () {
            $(".selected_avatar").html($(this).html());
            $('.avatar_box_wrap').removeClass("active");
        });
        $('.selected_avatar').click(function () {
            $('.avatar_box_wrap').toggleClass('active');
        });
    }
    //  Search open
    if ($('.game_nav_search').length > 0) {
        $('.search_open_icon').click(function () {
            $('.game_nav_search').addClass('active');
            $('.game_nav_search input').focus();
        });
        $('.search_close_icon').click(function () {
            $('.game_nav_search').removeClass('active');
        });
    }
    // Registration Tel Coontry
    if ($('.tel_country_box').length > 0) {
        $(".tel_country_list > li").click(function () {
            $(".selected_tel_country").html($(this).html());
            $('.tel_country_box_wrap').removeClass("active");
        });
        $('.selected_tel_country').click(function () {
            $('.tel_country_box_wrap').toggleClass('active');
        });
    }

    // Tournament page show game
    if ($('.tournaments_box').length > 0) {
        $('.tournament_games_box').each(function () {
            let count = $(this).find('.game_item').length;
            if (count <= 7) {
                $(this).children(":gt(4)").show();
                $(this).find('.game_item_show_more').hide();
            } else {
                $(this).find('.game_item_show_more').show();
            }
            $(this).find($('.game_item_show_more_btn')).text(count - 1);
        });
        // $('.game_item_show_more_btn').on('click', function () {
        //     let tournament_games_box = $(this).closest('.tournament_games_box'),
        //         length = tournament_games_box.find('.game_item').length;
        //     tournament_games_box.toggleClass('active');
        //     $(this).toggleClass('active');
        //     if (!tournament_games_box.hasClass('active')) {
        //         tournament_games_box.children(":gt(4)").hide();
        //     } else {
        //         tournament_games_box.children(":gt(4)").show();
        //     }
        //     if (length <= 7 ) {
        //         tournament_games_box.find('.game_item_show_more').hide();
        //     } else {
        //         tournament_games_box.find('.game_item_show_more').show();
        //     }
        // });
        $('.game_item_show_more_btn').on('click', function () {
            $(this).toggleClass('active');
            $(this).closest('.tournament_games_box').toggleClass('active');
        });
    }


    // Change Value for Game
    if ($('.game_nav_list').length > 0) {
        $('.game_nav').click(function () {
            $(".game_nav").removeClass('active');
            $(this).addClass('active');
        });
    }

    // Change Value
    if ($('.value_list').length > 0) {
        $('.value_item').click(function () {
            $(".value_item").removeClass('active');
            $(this).addClass('active');
        });
    }

    // Bonus PopUp
    if ($('.bonus_items_box').length > 0) {
        // открыть по кнопке
        $('.bonus_popup_btn_open').click(function () {

            $('.overlay').fadeIn();
            $(this).parents('.bonus_item').addClass('active_popup');
            $(".basic_box").addClass('overflow_hidden');
        });

        // закрыть на крестик
        $('.bonus_popup_btn_close').click(function () {
            $('.overlay').fadeOut();
            $('.bonus_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');

        });

        // // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.bonus_item');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.overlay').fadeOut();
        //         $('.bonus_item').removeClass('active_popup');
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }

    // Exit PopUp
    if ($('.game_nav_exit').length > 0) {
        // открыть по кнопке
        $('.game_nav_exit').click(function () {

            $('.overlay').fadeIn();
            $('.exit_item').addClass('active_popup');
            $(".basic_box").addClass('overflow_hidden');
        });

        // закрыть на крестик
        $('.exit_popup_btn_close').click(function () {
            $('.overlay').fadeOut();
            $('.exit_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');

        });

        // закрыть на отмену
        $('.exit_cancel').click(function () {
            $('.overlay').fadeOut();
            $('.exit_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');

        });

        // // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.exit_item');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.overlay').fadeOut();
        //         $('.exit_item').removeClass('active_popup');
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }

    // MSG PopUp
    if ($('.basic_box').length > 0) {
        // // открыть по кнопке
        // $('.game_nav_exit').click(function() {
        //
        //     $('.overlay').fadeIn();
        //     $('.exit_item').addClass('active_popup');
        //     $(".basic_box").addClass('overflow_hidden');
        // });

        // закрыть на крестик
        $('.msg_popup_btn_close').click(function () {
            $('.overlay').fadeOut();
            $('.msg_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');

        });


        // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.msg_item');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.overlay').fadeOut();
        //         $('.msg_item').removeClass('active_popup');
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }

    // Login PopUp
    if ($('.enter_nav').length > 0) {
        // открыть по кнопке
        $('.btn_login').click(function () {

            $('.overlay').fadeIn();
            $('.login_item').addClass('active_popup');
            $(".basic_box").addClass('overflow_hidden');
        });

        // закрыть на крестик
        $('.login_popup_btn_close').click(function () {
            $('.overlay').fadeOut();
            $('.login_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');
        });

        // // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.login_item');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.overlay').fadeOut();
        //         $('.login_item').removeClass('active_popup');
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }

    // Forgot PopUp
    if ($('.enter_nav').length > 0) {
        // открыть по кнопке
        $('.forgot_password').click(function () {

            $('.overlay').fadeIn();
            $('.forgot_item').addClass('active_popup');
            $(".basic_box").addClass('overflow_hidden');
        });

        // закрыть на крестик
        $('.forgot_popup_btn_close').click(function () {
            $('.overlay').fadeOut();
            $('.forgot_item').removeClass('active_popup');
            $('.basic_box').removeClass('overflow_hidden');
        });

        // // // закрыть по клику вне окна
        // $(document).mouseup(function (e) {
        //     var popup = $('.forgot_item');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.overlay').fadeOut();
        //         $('.forgot_item').removeClass('active_popup');
        //         $('.basic_box').removeClass('overflow_hidden');
        //     }
        // });
    }

    // Game PopUp
    $('.mobile_game_popup_trigger').click(function () {
        let gameBody = $(this).closest('.game_item').find('.game_box').html(),
            mobileGame = $('.popup_mobile_game');
        mobileGame.addClass('is-active');
        $('.popup_item_game').find('.game_box').html(gameBody);
    });
    $('.operation_icon_close').click(function () {
        $('.popup_mobile_game').removeClass('is-active');
    });

    // Full Screen Game
    if($('.play_game_box').length > 0) {
        let fullScreenBtn = $('#fullScreenBtn'),
            basic_box = $('.basic_box');

        fullScreenBtn.on('click', function () {
            fullScreenBtn.toggleClass('active');
            basic_box.toggleClass('full_screen');
        })
    }

    // Accordion
    // if ($('.accordion_box').length > 0) {
    //     $('.accordion_box>.answer_text').not(':first-of-type').hide();
    //
    //
    //     $('.accordion_box>.question_text').click(function () {
    //
    //         var findAnswer = $(this).next();
    //         var findWrapper = $(this).closest('.accordion_box');
    //         $('.question_text').removeClass('active');
    //         if (findAnswer.is(':visible')) {
    //             findAnswer.slideUp('slow');
    //         } else {
    //             findWrapper.find('>.answer_text').slideUp('slow');
    //             $(this).addClass('active');
    //             findAnswer.slideDown('slow');
    //         }
    //     });
    // }

    // Tournament leader tab list
    if($('.leader_table_box').length > 0) {
        let tabBox = $('.leader_table_box'),
            tabLink = tabBox.find('.tournament_info_watch_link'),
            tabHeading = tabBox.find('.table_heading_info > div'),
            tabContent = tabBox.find('.table_leader_list');

        tabHeading.not(':first-of-type').hide();
        tabContent.not(':first-of-type').hide();

        tabLink.each(function (i) {
           $(this).attr('data-tab', i);
        });
        tabHeading.each(function (i) {
            $(this).attr('data-tab', i);
        });
        tabContent.each(function (i) {
            $(this).attr('data-tab', i);
        });

        tabLink.on('click', function (event) {
            event.preventDefault();
            tabLink.removeClass('active');
            $(this).addClass('active');

            let dataTab = $(this).data('tab');

            tabHeading.hide(0);
            tabHeading.filter('[data-tab=' + dataTab + ']').show(0);

            tabContent.hide(0);
            tabContent.filter('[data-tab=' + dataTab + ']').show(0);
        });
    }

    // Registration Tab
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tab-menu li');


    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%');

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function () {

        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');

        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show()
            .find('.user_status_slider').slick('setPosition');
    });

    $('.next_step').on('click', function () {
        var item = $('.tab-menu li.active:last'),
            prevData = item.data('tab'),
            data = item.next().data('tab');
        if (item.next().data('tab')) {
            item.removeClass('active');
            item.next().addClass('active');

            $("div[data-tab=" + prevData + "]").hide();
            $("div[data-tab=" + data + "]").show();
        }
    });

    let maybeTable = $('.maybe_bonus_table'),
        trAccordion = $('.tr_accordion_bonus');
    if ((maybeTable.length) > 0) {
        trAccordion.on('click', function () {
            trAccordion.removeClass('active');
            $(this).addClass('active');
        });
    }


    // $('#datepicker').datepicker();
    // Дата Рождения
    $('#datepicker').datepicker({
        changeYear: true,
        changeMonth: true,
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dateFormat: ('dd MM yy'),
        yearRange: "1939:2011",
    });

    // History tab datapicker
    $('#first_filter_datepicker').datepicker({
        // changeYear: true,
        changeMonth: true,
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dateFormat: ('dd MM yy'),
        // yearRange: "1939:2011",
    });
    $('#last_filter_datepicker').datepicker({
        // changeYear: true,
        changeMonth: true,
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dateFormat: ('dd MM yy'),
        // yearRange: "1939:2011",
    });

    $('#first_history_filter_datepicker').datepicker({
        // changeYear: true,
        changeMonth: true,
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dateFormat: ('dd MM yy'),
        // yearRange: "1939:2011",
    });
    $('#last_history_filter_datepicker').datepicker({
        // changeYear: true,
        changeMonth: true,
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        dateFormat: ('dd MM yy'),
        // yearRange: "1939:2011",
    });


});
