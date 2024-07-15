$(document).ready(function(){
    // Open Left Menu
    if ($('.left_menu_box').length > 0) {
        let hamburger = $('#hamburger'),
            deskNavBox = $('.desk_nav_box'),
            showmore = $('.showmore');
        hamburger.on('click', function(){
            hamburger.toggleClass('is-active');
            deskNavBox.toggleClass('hide_toggle');
            if ($(window).width() < 1700) {
                $('#overlay_header').toggleClass('is-active');
                $('.left_menu_box').toggleClass('index_z');
            }
        });
        $('.left_desk_list li').on('click', function(){
            $('.left_desk_list li').removeClass('is-active');
            $(this).toggleClass('is-active');
        });
        if(showmore.length > 0) {
            showmore.on('click', function () {
                $('.phone_header_nav').toggleClass('hide_toggle');
            });
        }
    }

    // Pop Up
    // Search popup
    let overlayMain = $('#overlay_main');
    if ($('.main_header').length > 0) {
        let search_tigger = $('.search_trigger'),
            search_popup_close = $('.search_popup_close');
        search_tigger.on('click', function(){
            $('.search_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
        search_popup_close.on('click', function(){
            $('.search_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
    }
    // Alert popup
    if ($('.main_header').length > 0) {
        let alert_tigger = $('.alert_button_popup.is-active'),
            alert_popup_close = $('.alert_popup_close');
        alert_tigger.on('click', function(){
            $('.alert_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
        alert_popup_close.on('click', function(){
            $('.alert_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
    }
    // Login popup
    if ($('.main_header').length > 0) {
        let login_trigger = $('#login_trigger, #login_trigger2'),
            log_popup_close = $('#log_popup_close');
        login_trigger.on('click', function(){
            $('.log_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
        log_popup_close.on('click', function(){
            $('.log_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
    }
    // Remember popup
    if ($('.main_header').length > 0) {
        let remember_popup_trigger = $('#remember_popup_trigger'),
            remember_popup_close = $('#remember_popup_close');
        remember_popup_trigger.on('click', function(){
            $('.remember_popup').toggleClass('is-active');
        });
        remember_popup_close.on('click', function(){
            $('.remember_popup').toggleClass('is-active');
        });
    }
    // Confirm popup
    if ($('.main_header').length > 0) {
        let confirmClose = $('.confirm_popup_close'),
            confirmPopup = $('.confirm_popup');

        confirmClose.on('click', function(){
            confirmPopup.removeClass('is-active');
            overlayMain.removeClass('is-active');
        });
    }

    // Registration popup
    if ($('.main_header').length > 0) {
        let join_trigger = $('#join_trigger, #join_trigger2'),
            reg_popup_close = $('#reg_popup_close');
        join_trigger.on('click', function(){
            $('.reg_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
        reg_popup_close.on('click', function(){
            $('.reg_popup').toggleClass('is-active');
            overlayMain.toggleClass('is-active');
        });
    }

   let wrapper = $('.tab-wrapper'),
        allTabs = wrapper.find('.tab-content > div'),
        tabMenu = wrapper.find('.tab-menu li');

    allTabs.not(':first-of-type').hide();

    tabMenu.on('click', function() {

        let dataTab = $(this).data('tab'),
            getWrapper = $(this).closest(wrapper);

        $(this).addClass('active');

        getWrapper.find(allTabs).hide();
        getWrapper.find(allTabs).filter('[data-tab='+dataTab+']').show();
    });


    // $('#datepicker').datepicker();
    // Дата Рождения
    $('#new_login_birthday').datepicker({
        changeYear: true,
        changeMonth: true,
        monthNamesShort: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        dayNames: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
        dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
        dayNamesShort: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
        dateFormat: ('dd MM yy'),
        yearRange: "1939:2011",
    });

    // Open Phone Code
    let codeTrigger = $('.selected_lang_tel_code'),
        codeForm = $('.country_tel_form');
    codeTrigger.on('click', function(){
        codeForm.toggleClass('hide_toggle');
    });
    $(".country_tel_form  label").on('click', function(){
        $(".selected_lang_tel_code").html($(this).html());
        codeForm.removeClass('hide_toggle');
    });



    // Progress Bar
    if($('.user_box').hasClass('is-active')) {
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        // const input = document.querySelector('.percent');
        //
        // input.addEventListener('change', function() {
        //     setProgress(input.value);
        // })

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        }

        setProgress(75);
    }

    //  Open User Menu
    if ($('.user_box').hasClass('is-active')){
        $('.user_menu_box ').on('click', function(){
            $('.user_menu_box').toggleClass('is-active');
            $('.user_info_box').toggleClass('is-active');
            $('.client_box').toggleClass('index_z');
            $('#overlay_header').toggleClass('is-active');
            $('.user_nav_menu_box').toggleClass('hide_toggle');
        });
    }

    //  Phone Language Chose List
    let phone_language_chose = $('.phone_language_chose ');
    if (phone_language_chose.length>0){
        phone_language_chose.on('click', function(){
            phone_language_chose.toggleClass('is-active');
            $('.phone_language_chose_list').toggleClass('toggle_open');
        });
        $('.phone_language_chose_link.active_link').on('click', function(){
            event.preventDefault();
            phone_language_chose.removeClass('is-active');
            $('.phone_language_chose_list').removeClass('toggle_open');
        });

    }


    // Top Slider
    $('.main_top_slider').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '18.5vw',
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 20000,
        responsive: [
            {
                breakpoint: 1225,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // Tournaments Slider
    if ($('.tournaments_box').length > 0) {
        $('.tournament_slider').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 520,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }

    // New Game Slider
    if ($('.new_game_box').length > 0) {
        $('.new_game_slider').slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1701,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1311,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    // Hot Game Slider
    if ($('.hot_game_box').length > 0) {
        $('.hot_game_slider').slick({
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2
                    }
                },
                // {
                //     breakpoint: 630,
                //     settings: {
                //         arrows: false,
                //         slidesToShow: 1
                //     }
                // }
            ]
        });
    }

    // card_game_slider
    if ($('.card_game_box').length > 0) {
        $('.card_game_slider').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1311,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2
                    }
                },
                // {
                //     breakpoint: 520,
                //     settings: {
                //         arrows: false,
                //         slidesToShow: 1
                //     }
                // }
            ]
        });
    }

    // roulette_game_slider
    if ($('.roulette_box').length > 0) {
        $('.roulette_game_slider').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1311,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2
                    }
                },
                // {
                //     breakpoint: 520,
                //     settings: {
                //         arrows: false,
                //         slidesToShow: 1
                //     }
                // }
            ]
        });
    }

    // providers_slider
    if ($('.providers_box').length > 0) {
        $('.providers_slider').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1650,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1
                    }
                }
                // ,
                // {
                //     breakpoint: 480,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //     }
                // }
            ]
        });
    }

    // 3d slider
    if ($(window).width() > 530) {
        $('.slider3d').carousel({
            // the number of images to display
            num: 3,
            // max width of the active image
            maxWidth: 286,
            // min width of the active image
            maxHeight: 190,
            // enable auto play
            // autoPlay: true,
            // autoPlay: false,
            // autoplay interval
            showTime: 3000,
            // animation speed
            animationTime: 300,
            // 0.0 - 1.0
            scale: 0.8,
            // the distance between images
            distance: 104
        });
    } else if ($(window).width() > 359) {
        $('.slider3d').carousel({
            // the number of images to display
            num: 3,
            // max width of the active image
            maxWidth: 230,
            // min width of the active image
            maxHeight: 153,
            // enable auto play
            // autoPlay: true,
            // autoplay interval
            showTime: 3000,
            // animation speed
            animationTime: 300,
            // 0.0 - 1.0
            scale: 0.8,
            // the distance between images
            distance: 50
        });
    } else {
        $('.slider3d').carousel({
            // the number of images to display
            num: 3,
            // max width of the active image
            maxWidth: 230,
            // min width of the active image
            maxHeight: 153,
            // enable auto play
            // autoPlay: true,
            // autoplay interval
            showTime: 3000,
            // animation speed
            animationTime: 300,
            // 0.0 - 1.0
            scale: 0.8,
            // the distance between images
            distance: 24
        });
    }


    //  Language Chose List
    if ($('.social_nav').length>0){
        $('.language_chose ').on('click', function(){
            $('.language_chose_list').toggleClass('toggle_open');
        });
    }

    //  Footer Language Chose List
    if ($('.footer_nav_list').length>0){
        $('.language_current ').on('click', function(event){
            event.preventDefault();
            $('.footer_language_list').addClass('footer_language_list_open');
        });
        $('.language_active ').on('click', function(event){
            event.preventDefault();
            $('.footer_language_list').removeClass('footer_language_list_open');
        });
    }

    // top_players_footer_slider
    if ($('.top_players_footer_slider').length > 0) {
        let hideBtn = $('.top_players_close_btn'),
            topPlayersSlider = $('.top_players_footer_slider');
        topPlayersSlider.slick({
            arrows: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 20000,
            responsive: [
                {
                    breakpoint: 1750,
                    settings: {
                        slidesToShow: 7
                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 650,
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

        hideBtn.on('click', function () {
            hideBtn.toggleClass('hide');
            topPlayersSlider.toggleClass('hide');
        });
    }


    // Account Tab
    if ($('.basic_account_section').length > 0) {
        $('.account_tab_link').on('click', function () {
            let accountTab = $(this).data('tab'),
                accountContent = $('.account_tab_content');
            $('.account_tab_link').removeClass('is-active');
            $(this).addClass('is-active');
            accountContent.removeClass('is-active');
            accountContent.filter('[data-tab='+accountTab+']').addClass('is-active');
        });
    }

    // Play Game options
    if ($('.play_game_box').length > 0) {
        $('.demo_money_label').on('click', function () {
            // $(".fast_deposit_form").addClass('is-active');
            if(!($('#demo_money').is(":checked"))) {
                $(".fast_deposit_form").addClass('is-active');
            } else {
                $(".fast_deposit_form").removeClass('is-active');
            }
        });

        let operationBtn = $('.operation_btn');
        operationBtn.on('click', function () {
            $(this).toggleClass('is-active');
        });

        let fullscreenBtn = $('#fullscreen_btn');
        fullscreenBtn.on('click', function () {
            $('body').toggleClass('fullscreen_mode');
        });

        $('#game_close').on('click', function () {
            $('.game_box').toggleClass('game_box_mini');
        });
    }

    // Bonus item info open
    if ($('.bonus_columns_box').length > 0) {
        $('.bonus_item_open_trigger').on('click', function () {
            $(this).closest('.bonus_item').toggleClass('toggle_open');
        });
    }

    // Games Page
    if ($('.game_filter_box').length > 0) {
        // Them open filter
        $('.game_filter_theme_item').on('click', function () {
            $(this).toggleClass('is-active');
        });
        // Game Provider Filter
        $('.game_filter_provider_item').on('click', function () {
            $('.game_filter_provider_item').removeClass('is-active');
            $(this).addClass('is-active');
        });
        // Filter Show More
        $('.game_filter_box_show_more').on('click', function () {
            $(this).toggleClass('is-active');
            $('.game_filter_theme_list').toggleClass('is-active');
            $('.game_filter_provider_list').toggleClass('is-active');
        });
    }

    // Tournaments Page
    if ($('.tournaments_page_box').length > 0) {
        $('.tournament_games_box').each(function () {
            let count = $(this).find('.game_item').length;
            if (count <= 6) {
                $(this).children(":gt(4)").css('display', 'inline-block');
                $(this).find('.game_item_load_more').hide();
            } else {
                $(this).find('.game_item_load_more').css('display', 'inline-block');
            }
        });
       $('.load_more').on('click', function () {
           $(this).closest('.tournament_item_box').find('.tournament_games_box').toggleClass('active');
       });
    }

    if($('.game_item').length > 0) {
        let gameItem = $('.game_item'),
            gamePopup = $('.game_popup'),
            gameClose = $('#game_popup_close');
            // overlayMain = $('#overlay_main');

        gameItem.on('click', function () {
            let gameTitle = $(this).find($('.game_item_game_title')).text(),
                gameImg = $(this).find($('.game_item_img')).attr('src');
            gamePopup.addClass('is-active');
            gamePopup.find($('.game_popup_title')).text(gameTitle);
            gamePopup.find($('.popup_game_item_game_title')).text(gameTitle);
            gamePopup.find($('.popup_game_item_img')).attr('src', gameImg);
            // overlayMain.addClass('is-active');
        });
        gameClose.on('click', function () {
            gamePopup.removeClass('is-active');
            overlayMain.removeClass('is-active');
        });

    }

    if($('.maybe_bonus_table').length > 0) {
        let accordionHeader = $('.tr_accordion_bonus');

        accordionHeader.on('click', function () {
            accordionHeader.removeClass('active');
            $(this).addClass('active');
        });
    }

    if($('.big_input_box').length > 0) {
        let avatarIcon = $('.selected_avatar'),
            avatarBox = $('.avatar_collection_box'),
            avatarImg = $('.avatar_list li .user_img_avatar');

        avatarIcon.on('click', function () {
            avatarBox.toggleClass('active');
        });
        avatarBox.find('span').on('click', function () {
            avatarBox.toggleClass('active');
        });
        avatarImg.on('click', function () {
            let avatarImgSelect = $(this).attr('src');
            avatarIcon.find($('.user_img_avatar')).attr('src', avatarImgSelect);
            $('.user_menu_box').find($('.user_img_avatar')).attr('src', avatarImgSelect);
            avatarBox.toggleClass('active');
        });
    }

    //  New promo code
    if($('.promo__item').length > 0) {
        let item = $('.promo__item'),
            closeBtn = $('.promo__close_btn'),
            promoPopup = $('.promo__popup');

        closeBtn.on('click', function () {
            promoPopup.toggleClass('is-active');
        });

    }
});


