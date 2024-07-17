$(document).ready(function () {
    // Header menu Hide on scroll
    if ($('.header').length > 0) {
        let prevScrollpos = window.pageYOffset,
            hideMenu = $('.header');
        window.onscroll = function () {
            let scrollPage = $(window).scrollTop();
            if (scrollPage > 200) {
                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    hideMenu.removeClass('hide');

                } else {
                    hideMenu.addClass('hide');
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    // Log_In / Log_out
    if ($('body').length > 0) {
        let body = $('body'),
            actionBtn = $('.user_box__btn'),
            actionImg = $('.user_box .user_box__img_box'),
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
            widgetDepositBtn = $('.fast_deposit_btn'),
            widgetUserNav = $('#user_nav');

        function showPopup(el) {
            overlay.addClass('active');
            el.addClass('active');
            $(document).keydown(function (eventObject) {
                if (eventObject.which == 27) {
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
            $(document).keydown(function (eventObject) {
                if (eventObject.which == 27) {
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
            if (body.hasClass('on_line')) {
                actionBtn.text('депозит');
                actionImg.find('.user_box__avatar_img').attr('src', 'css/img/avatar.jpg');
            } else {
                actionBtn.text('регистрация');
                actionImg.attr('src', 'css/img/casino_icons/Enter.svg');
            }
        }

        bodyClass();

        loginBtn.on('click', function () {
            showPopup(popupLogin);
        });
        actionImg.on('click', function () {
            if (body.hasClass('on_line')) {
                showWidget(widgetUserNav);
            } else {
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
        rememberBtn.on('click', function () {
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
        widgetDepositBtn.on('click', function () {
            showWidget(widgetDeposit);
        });

        // Game Widget
        if ($('.game_item').length > 0) {
            let game = $('.game_item'),
                gameWidget = $('#game_widget'),
                gameTitle = $('.widget__game_box .game_item__title'),
                gameImg = $('.widget__game_item_box .game_item__game_img');

            game.on('click', function () {
                let thisImg = $(this).find($('.game_item__game_img')).attr('src'),
                    thisTitle = $(this).find($('.game_item__game_img')).attr('alt');
                if ($(window).width() < 1201) {
                    gameImg.attr('src', thisImg);
                    gameTitle.text(thisTitle);
                    showWidget(gameWidget);
                }
            });
        }
    }

    // Lang Box
    if ($('.lang_nav').length > 0) {
        let langBtn = $('.lang_nav__current'),
            langBox = langBtn.closest('.lang_nav'),
            langBtnActive = $('.lang_nav__item.active');

        langBtn.on('click', function () {
            langBox.toggleClass('active');
            $(document).keydown(function (eventObject) {
                if (eventObject.which == 27) {
                    langBox.removeClass('active');
                }
            });
        });
        langBtnActive.on('click', function () {
            langBox.removeClass('active');
        });
    }

    //    Search open
    if ($('.search_game').length > 0) {
        let search = $('.search_game'),
            searchOpen = $('.search_game__btn'),
            searchClose = $('.search_game__close_btn'),
            overlay = $('.overlay');

        searchOpen.on('click', function () {
            search.toggleClass('active');
            overlay.toggleClass('active');
        });
        searchClose.on('click', function () {
            search.removeClass('active');
            overlay.removeClass('active');
        });
    }

    // Mobile Menu Active
    let hamburgerBtn = $('.mobile_menu__btn'),
        mobileMenu = $('.mobile_menu'),
        overlay = $('.overlay'),
        mobileMenuCloseBtn = $('.mobile_menu__close_btn'),
        subMenuBtn = $('.mobile_menu__sub_menu > *:first-child'),
        subMenuCloseBtn = $('.sub_menu__close_btn'),
        subMenu = $('.sub_menu');

    hamburgerBtn.on('click', function () {
        overlay.addClass('active');
        mobileMenu.addClass('active');
        $(document).keydown(function (eventObject) {
            if (eventObject.which == 27) {
                overlay.removeClass('active');
                mobileMenu.removeClass('active');
                subMenu.removeClass('active');
            }
        });
    });
    mobileMenuCloseBtn.on('click', function () {
        overlay.removeClass('active');
        mobileMenu.removeClass('active');
        subMenu.removeClass('active');
        subMenu.removeClass('move_left');
    });
    subMenuBtn.on('click', function () {
        $('.mobile_menu__sub_menu').find('.sub_menu').removeClass('active');
        $(this).closest('.mobile_menu__sub_menu').find('.sub_menu').addClass('active');
        mobileMenu.addClass('move_left');
    });
    subMenuCloseBtn.on('click', function () {
        $(this).closest('.sub_menu').removeClass('active');
        mobileMenu.removeClass('move_left');
    });

    // Main Slider
    if ($('.main_slider').length > 0) {
        if ($(window).width() < 1026) {
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
    if ($('.game_company').length > 0) {
        let providerItem = $('.game_company__item');

        providerItem.on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('active')) {
                providerItem.removeClass('active');
            } else {
                providerItem.removeClass('active');
                $(this).addClass('active');
            }
            // providerItem.preventDefault();
        });
    }

    // Payment slider
    let paymentSlider = $('.payment-system');
    if(paymentSlider.length) {
        paymentSlider.slick({
            slidesToShow: 15,
            slidesToScroll: 1,
            infinite: true,
            speed: 300,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 12,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 9,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        });
    }

    // Add game to Favorite
    if ($('.game_item').length > 0) {
        let favoriteBtn = $('.game_item__favorite_btn');
        favoriteBtn.on('click', function () {
            $(this).toggleClass('active');
        })
    }

    // Tournament
    if ($('.tournament_section__players_list_box').length > 0) {
        let btnHide = $('.btn.btn_green'),
            playersList = $('.tournament_section__players_list_box');
        btnHide.on('click', function () {
            $(this).parent(playersList).toggleClass('hide');
            // playersList.toggleClass('hide');
        });
    }
    if ($('.bonus_section__page_item').length > 0) {
        let bonusShow = $('.bonus_btn'),
            bonusItem = $('.bonus_section__page_item');

        bonusShow.on('click', function () {
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
    if ($('.win_now__slider').length > 0) {
        let winSlider = $('.win_now__slider');
        winSlider.slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
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
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                }
                ,
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                }
                ,
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                }
                ,
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
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
    if ($('.footer_section').length > 0) {
        let footer = $('.footer_section'),
            footerBtn = $('.footer_section__footer_btn');

        footerBtn.on('click', function () {
            footer.toggleClass('active');
        });
    }

    // Phone code
    if ($('.phone_code__box').length > 0) {
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
    if ($('.play_game').length > 0) {
        let fullscreenBtn = $('#fullscreen_btn'),
            operationBtn = $('.operation_btn');

        operationBtn.on('click', function () {
            $(this).toggleClass('active');
        });

        fullscreenBtn.on('click', function () {
            $('body').toggleClass('fullscreen_mode');
            $(this).closest($('.play_game__nav_item')).toggleClass('active');
        });
    }

    // Deposit / Withdrawal
    if ($('.payment_company_box').length > 0) {
        let paymentItem = $('.payment_company_item_inner');

        paymentItem.on('click', function () {
            paymentItem.removeClass('active');
            $(this).addClass('active');
        });
    }

    // Bonus Open / Hide
    if ($('.bonus__title').length > 0) {
        let bonus = $('.bonus__title');

        bonus.on('click', function () {
            bonus.removeClass('active');
            $(this).addClass('active');
        })
    }


    let gradientStyle = $('<style type="text/css"></style>');
    gradientStyle.appendTo('head');
    $('.deposit_range').change(function () {
        let thumbVal = $(this).val(),
            maxDeposit = $(this).attr("max"),
            gradientPoint = ((thumbVal/maxDeposit)*100).toFixed();

        gradientStyle
            .text('input[type=range]::-webkit-slider-runnable-track { background: linear-gradient(to right, #3cca3f 0%, #3cca3f ' + gradientPoint + '%, #8c8b93 ' + gradientPoint +'%, #8c8b93 100%); ' +
                'input[type=range]::-moz-range-track { background: linear-gradient(to right, #3cca3f 0%, #3cca3f ' + gradientPoint + '%, #8c8b93 ' + gradientPoint +'%, #8c8b93 100%) !import;}');
    });

    // Select text center
    $('.input_item_select').change(function () {
        $(this).closest('.input_item_select_box').find('.input_item_select__center-text').text($(this).find('option:selected').text());
    });

    // Tab
    if($('.tab__wrapper').length > 0) {
        let wrapper = $('.tab__wrapper');
        wrapper.each(function () {
            let tabMenu = $(this).find('.tab__menu li'),
                allTabs = $(this).find('.tab__content > div');

            tabMenu.each(function(i) {
                $(this).attr('data-tab', 'tab'+i);
            });
            allTabs.each(function(i) {
                $(this).attr('data-tab', 'tab'+i);
            });
            tabMenu.on('click', function() {

                let dataTab = $(this).data('tab'),
                    getWrapper = $(this).closest(wrapper);

                getWrapper.find(tabMenu).removeClass('active');
                $(this).addClass('active');

                getWrapper.find(allTabs).hide();
                getWrapper.find(allTabs).filter('[data-tab='+dataTab+']').show();
            });
        });
    }

    //  Demo / Money Switch
    if($('.switch').length > 0) {
        let switchBtn = $('#switch__input'),
            moneyForm = $('#fast_deposit_form');

        function switchForm() {
            if(switchBtn.is(':checked')) {
                moneyForm.addClass('active');
            } else {
                moneyForm.removeClass('active');
            }
        }
        switchForm();
        switchBtn.change(function () {
            switchForm();
        });
    }

    // Avatar Change img
    if($('.account__change_avatar').length > 0) {
        let avatarBox = $('.account__change_avatar');

        avatarBox.on('click', function () {
            $(this).toggleClass('active');
        });
    }

    // Payment Money
    let paymentSelect = $('.payment-choice__box');
    if(paymentSelect.length) {
        let paymentTrigger = $('.input_item_select__center-text');
        paymentTrigger.on('click', function () {
            $(this).closest(paymentSelect).toggleClass('active');
        });
        let paymentItem = $('.payment-choice__select-item');
        paymentItem.on('click', function () {
            let parentBox = $(this).closest(paymentSelect);
            let img = $(this).find($('.payment-choice__img')).clone();
            parentBox.removeClass('active');
            parentBox.find(paymentTrigger).html(img);
        });
    }

});
