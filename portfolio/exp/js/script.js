$(document).ready(function () {
    // Header menu Hide on scroll
    // if($('.header_bottom_section').length > 0) {
    //     let prevScrollpos = window.pageYOffset,
    //         search = $('.search_game'),
    //         hideMenu = $('.header_bottom_section');
    //     window.onscroll = function() {
    //         let currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             hideMenu.removeClass('hide');
    //
    //         } else {
    //             hideMenu.addClass('hide');
    //             search.removeClass('active');
    //         }
    //         prevScrollpos = currentScrollPos;
    //     }
    // }

    // Log_In / Log_out
    if($('body').length > 0) {
        let body = $('body'),
            actionBtn = $('.user_box__btn'),
            actionImg = $('.client_box_bottom .user_box__avatar_img'),
            loginBtn = $('.registration_box__login_btn'),
            userBtn = $('.user_box__login_line'),
            overlay = $('.overlay'),
            popUp = $('.popup'),
            closePopupBtn = $('.popup__close_btn'),
            popupLogin = $('#popup_login'),
            enterBtn = $('#enter_btn'),
            rememberBtn = $('#remember_btn'),
            popupRemember = $('#popup_remember'),
            popupExit = $('#popup_exit'),
            exitBtn = $('.exit_link'),
            exitBtnNo = $('#exit_btn_no'),
            exitBtnYes = $('#exit_btn_yes'),
            widget = $('.widget'),
            closeWidgetBtn = $('.widget__close_btn'),
            widgetDeposit = $('#fast_deposit'),
            widgetUserNav = $('#user_nav');

        function showPopup(el) {
            overlay.addClass('active');
            el.addClass('active');
            $(document).keydown(function(eventObject){
                if( eventObject.which == 27 ){
                    overlay.removeClass('active');
                    popUp.removeClass('active');
                }
            });
        }
        function closePopup() {
            overlay.removeClass('active');
            popUp.removeClass('active');
        }
        function showWidget(el) {
            overlay.addClass('active');
            el.addClass('active');
            $(document).keydown(function(eventObject){
                if( eventObject.which == 27 ){
                    overlay.removeClass('active');
                    widget.removeClass('active');
                }
            });
        }
        function closeWidget() {
            overlay.removeClass('active');
            widget.removeClass('active');
        }
        function bodyClass() {
            if(body.hasClass('on_line')) {
                actionBtn.text('депозит');
                actionImg.attr('src','css/img/avatar.jpg');
            }
            else {
                actionBtn.text('регистрация');
                actionImg.attr('src','css/img/casino_icons/Enter.svg');
            }
        }
        bodyClass();

        loginBtn.on('click', function () {
            showPopup(popupLogin);
        });
        actionBtn.on('click', function (event) {
            if(body.hasClass('on_line')) {
                event.preventDefault();
                overlay.addClass('active');
                showWidget(widgetDeposit);
            }
            else {

            }
        });
        actionImg.on('click', function () {
            if(body.hasClass('on_line')) {
                showWidget(widgetUserNav);
            }
            else {
                showPopup(popupLogin);
            }
        });
        userBtn.on('click', function () {
            showWidget(widgetUserNav);
        });
        enterBtn.on('click', function () {
            body.addClass('on_line');
            bodyClass();
            closePopup();
        });
        rememberBtn.on('click',function () {
            popupLogin.removeClass('active');
            popupRemember.addClass('active');
        });
        closePopupBtn.on('click', function () {
            closePopup();
        });
        exitBtn.on('click', function () {
            showPopup(popupExit);
        });
        exitBtnNo.on('click', function () {
            closePopup();
            closeWidget();
        });
        exitBtnYes.on('click', function () {
            body.removeClass('on_line');
            bodyClass();
            closePopup();
            closeWidget();
        });
        closeWidgetBtn.on('click', function () {
            closeWidget();
        });

        // Game Widget
        if($('.game_item').length > 0) {
            let game = $('.game_item'),
            gameWidget = $('#game_widget'),
            gameTitle = $('.widget__game_box .game_item__title'),
            gameImg = $('.widget__game_item_box .game_item__game_img');

            game.on('click', function () {
                let thisImg = $(this).find($('.game_item__game_img')).attr('src'),
                    thisTitle = $(this).find($('.game_item__game_img')).attr('alt');
                if($(window).width() < 1201) {
                    gameImg.attr('src',thisImg);
                    gameTitle.text(thisTitle);
                    showWidget(gameWidget);
                }
            });
        }
    }

    // Fast Deposit
    if($('.widget').length > 0) {
        let paymentSistem = $('.widget__step_first .radio__item_label'),
            paymentActive = $('.payment_method_btn')
            paymentActiveImg = $('.payment_method_btn img')
            depositContent = $('.widget__content');

        paymentActive.on('click', function () {
            depositContent.toggleClass('active');
        });
        paymentSistem.on('click', function () {
            let paymentImg = $(this).find($('.btn_img')).attr('src');
            paymentActiveImg.attr('src', paymentImg);
            paymentSistem.removeClass('active');
            $(this).addClass('active');
            depositContent.addClass('active');
        })
    }

    // Lang Box
    if($('.lang_nav').length > 0) {
        let langBox = $('.lang_nav'),
            langBtn = $('.lang_nav__current'),
            langBtnActive = $('.lang_nav__item.active');

        langBtn.on('click', function () {
            langBox.addClass('active');
            $(document).keydown(function(eventObject){
                if( eventObject.which == 27 ){
                    langBox.removeClass('active');
                }
            });
        });
        langBtnActive.on('click', function () {
            langBox.removeClass('active');
        });
    }

    //    Search open
    if($('.search_game').length > 0 ) {
        let search = $('.search_game'),
            searchOpen = $('.search_game__btn'),
            searchClose = $('.search_game__close_btn');

        searchOpen.on('click', function () {
            search.toggleClass('active');
        });
        searchClose.on('click', function () {
            search.removeClass('active');
        });
    }

    // Mobile Menu Active
    let hamburgerBtn = $('.mobile_menu__btn'),
        mobileMenu = $('.mobile_menu'),
        overlay = $('.overlay'),
        mobileMenuCloseBtn = $('.mobile_menu__close_btn');

    hamburgerBtn.on('click', function () {
        overlay.addClass('active');
        mobileMenu.addClass('active');
        $(document).keydown(function(eventObject){
            if( eventObject.which == 27 ){
                overlay.removeClass('active');
                mobileMenu.removeClass('active');
            }
        });
    });
    mobileMenuCloseBtn.on('click', function () {
        overlay.removeClass('active');
        mobileMenu.removeClass('active');
    });

    // Main Slider
    if ($('.main_slider').length > 0) {
        if($(window).width() < 1026) {
            console.log('work');
            let slideImg = $('.main_slider__main_img');
            slideImg.remove();
        }
        let mainSlider = $('.main_slider__list')
        mainSlider.slick({
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
        mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            new WOW({boxClass: 'anim'}).init();
        });
    }

    // Provider slider
    if ($('.game_company').length > 0) {
        $('.game_company__list').slick({
            infinite: true,
            slidesToShow: 11,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
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
                    breakpoint: 1201,
                    settings: "unslick",
                }
            ]
        });

        let filterBtn = $('.game_filter');
        filterBtn.on('click', function () {
            filterBtn.removeClass('active');
            $(this).addClass('active');
        });
    }

    // Provider Filter
    if($('.game_company').length > 0) {
        let providerItem = $('.game_company__item');

        providerItem.on('click', function (event) {
            event.preventDefault();
            if($(this).hasClass('active')) {
                providerItem.removeClass('active');
            } else {
                providerItem.removeClass('active');
                $(this).addClass('active');
            }
            providerItem.preventDefault();
        });
    }

    // Add game to Favorite
    if($('.game_item').length > 0) {
        let favoriteBtn = $('.game_item__favorite_btn');
        favoriteBtn.on('click', function () {
            $(this).toggleClass('active');
        })
    }

    // Tournament
    if($('.tournament_section__players_list_box').length > 0) {
        let btnHide = $('.btn.btn_green'),
            playersList = $('.tournament_section__players_list_box');
        btnHide.on('click', function () {
            $(this).parent(playersList).toggleClass('hide');
            // playersList.toggleClass('hide');
        });
    }
    if($('.bonus_section__page_item').length > 0) {
        let bonusShow = $('.bonus_btn'),
            bonusItem = $('.bonus_section__page_item');

        bonusShow.on('click',function () {
            $(this).closest(bonusItem).toggleClass('active');
        });
    }

    // Tournament Slider
    if ($('.tournament_section__slider').length > 0) {
        let tournamentSlider = $('.tournament_section__slider');
        tournamentSlider.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // arrows: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 390,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
        tournamentSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            new WOW({boxClass: 'anim2'}).init();
        });
    }

    // Winner Player Slider
    if($('.win_now__slider').length > 0) {
        let winSlider = $('.win_now__slider');
        winSlider.slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: false,
            speed: 200,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 5
                    }
                }
                ,
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 4
                    }
                }
                ,
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3
                    }
                }
                ,
                {
                    breakpoint: 915,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        let winHideBtn = $('.win_now__close_btn'),
            winSection = $('.win_now_fixed');

        winHideBtn.on('click', function () {
            winSection.toggleClass('hide');
        });
    }

    // Avatar IMG slider
    if ($('.user_box__avatar_slider').length > 0) {
        $('.user_box__avatar_slider').slick({
            centerMode: true,
            centerPadding: '0px',
            infinite: true,
            slidesToShow: 9,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
            dots: false,
            speed: 200,
            responsive: [
                {
                    breakpoint: 930,
                    settings: {
                        slidesToShow: 7
                    }
                }
                ,
                {
                    breakpoint: 790,
                    settings: {
                        slidesToShow: 5
                    }
                }
                ,
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }
                ,
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        let filterBtn = $('.game_filter');
        filterBtn.on('click', function () {
            filterBtn.removeClass('active');
            $(this).addClass('active');
        });
    }

    // Footer Section UP/Down
    if($('.footer_section').length > 0) {
        let footer = $('.footer_section'),
            footerBtn = $('.footer_section__footer_btn');

        footerBtn.on('click', function () {
            footer.toggleClass('active');
        });
    }

    // Phone code
    if($('.phone_code__box').length > 0) {
        let codeBox = $('.phone_code__box'),
            codeCurrent = $('.phone_code__current'),
            codeItem = $('.phone_code__item');

        codeCurrent.on('click', function () {
            codeBox.addClass('active');
        });
        codeItem.on('click', function () {
            codeCurrent.html($(this).html());
            codeBox.removeClass('active');
        });
    }

    // Full Screen Game
    if($('.play_game').length > 0) {
        fullscreenBtn = $('.play_game__fullscreen_btn');

        fullscreenBtn.on('click', function () {
            $('body').toggleClass('fullscreen_mode');
            $(this).closest($('.play_game__nav_item')).toggleClass('active');
        });
    }

    // Deposit / Withdrawal
    if($('.payment_company_box').length > 0) {
        let paymentItem = $('.payment_company_item_inner');

        paymentItem.on('click', function () {
            paymentItem.removeClass('active');
            $(this).addClass('active');
        });
    }

    // Bonus Open / Hide
    if($('.bonus__title').length > 0) {
        let bonus = $('.bonus__title');

        bonus.on('click', function () {
            bonus.removeClass('active');
            $(this).addClass('active');
        })
    }

    //  Live Chat
    if($('.live_chat_btn').length > 0) {
        $('.live_chat_btn').on('click', function () {
            alert('btn work');
        });
    }
});
