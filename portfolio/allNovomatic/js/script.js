$(document).ready(function () {
    let overlay = $('#overlay');

    // Pop Up
    let popUp = $('.popup'),
        popCloseBtn = $('.popup__close_btn, .btn-close'),
        popSubscribeBtn = $('.account__operation_box .btn.btn__big');
    function popClose() {
        popUp.removeClass('active');
        overlay.removeClass('active');
    }
    if(popUp.hasClass('active') && overlay.hasClass('active')) {
        $(document).keydown(function(eventObject){
            if(eventObject.which === 27 ){
                popClose();
            }
        });
        $(document).mouseup(function (e) {
            if(e.target !== popUp && popUp.has(e.target).length === 0){
                popClose();
            }
        });
    }

    popCloseBtn.on('click', function () {
        popClose()
    });

    popSubscribeBtn.on('click', function () {
        if($('.mobile_nav').hasClass('active')) {
            $('.mobile_nav').removeClass('active');
        }
        overlay.addClass('active');
        $('#subscribe_popup').addClass('active');
        popUp.each(function () {
            if($(this).hasClass('active') && overlay.hasClass('active')) {
                $(document).keydown(function(eventObject){
                    if(eventObject.which === 27 ){
                        popClose();
                    }
                });
                $(document).mouseup(function (e) {
                    if(e.target !== popUp && popUp.has(e.target).length === 0){
                        popClose();
                    }
                });
            }
        });
    });

    // Header menu Hide on scroll
    if($('.header').length > 0) {
        let prevScrollpos = window.pageYOffset,
            hideMenu = $('.header');
        window.onscroll = function() {
            let scrollPage = $(window).scrollTop();
            if(scrollPage > 200) {
                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    hideMenu.removeClass('hide');

                } else {
                    hideMenu.addClass('hide');
                    let subMenuActive = $('.main_nav__sub_menu.active');
                    if(subMenuActive) {
                        subMenuActive.removeClass('active');
                    }

                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    // All Submenu first link prevent default
    let parentLink = $('li[class $="__sub_menu"] > a[class $="nav__link"]');
    parentLink.on('click', function (e) {
        e.preventDefault();
    });
    //Sub Menu
    let subMenu = $('.main_nav__sub_menu');
    subMenu.on('click', function () {
        $(this).toggleClass('active');
    });
    //  Search
    let search = $('.search'),
        searchOpen = $('.search__btn'),
        searchClose = $('.search__close_btn');

    searchOpen.on('click', function () {
        $(this).closest(search).addClass('active');
    });
    searchClose.on('click', function () {
        $(this).closest(search).removeClass('active');
    });

    // Language
    let language = $('.language'),
        languageBtn = $('.language__current_lang');

    languageBtn.on('click', function () {
        $(this).closest(language).toggleClass('active');
        if($(this).closest(language).hasClass('active')) {
            $(document).keydown(function(eventObject){
                if(eventObject.which === 27 ){
                    language.removeClass('active');
                }
            });
        }
    });

    // Mobile Menu
    function closeMenu() {
        hamburger.removeClass('active');
        overlay.removeClass('active');
        mobileMenu.removeClass('active');
    }
    let hamburger = $('.hamburger'),
        mobileMenu = $('.mobile_nav');
    hamburger.on('click', function () {
        hamburger.toggleClass('active');
        overlay.toggleClass('active');
        mobileMenu.toggleClass('active');
        if(mobileMenu.hasClass('active') && overlay.hasClass('active')) {
            $(document).keydown(function(eventObject){
                if(eventObject.which === 27 ){
                    closeMenu();
                }
            });
            $(document).mouseup(function (e) {
                if(e.target !== mobileMenu && mobileMenu.has(e.target).length === 0){
                    closeMenu();
                }
            });
        }
    });
    //Phone Sub Menu
    let mobileSubMenu = $('.mobile_nav__sub_menu');
    mobileSubMenu.on('click',  function () {
        $(this).toggleClass('active');
    });

    //  Main slider
    if($('.main_slider').length > 0) {
        let mainSlider = $('.main_slider');
        mainSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    // News slider
    if($('.news__slider').length > 0) {
        let newsSlider = $('.news__slider');
        newsSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    // Testimonial slider
    if($('.testimonial__slider').length > 0) {
        let testimonialSlider = $('.testimonial__slider');
        testimonialSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    // Casino bonus slider
    if($('.casino__slider').length > 0) {
        let casinoSlider = $('.casino__slider');
        casinoSlider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }


    if ($('.tab').length > 0) {
        let tab = $('.tab'),
            allTabs = tab.find('.tab__content > div'),
            tabMenu = tab.find('.tab__menu li');

        allTabs.not(':first-of-type').hide();

        tabMenu.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });

        allTabs.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });

        tabMenu.on('click', function () {

            let dataTab = $(this).data('tab'),
                thisTab = $(this).closest(tab);

            thisTab.find(tabMenu).removeClass('active');
            $(this).addClass('active');

            thisTab.find(allTabs).hide();
            thisTab.find(allTabs).filter('[data-tab=' + dataTab + ']').show()
                .find('.casino__slider').slick('setPosition');
        });
    }

    // Grid
    let gridChangeBtn = $('.filter__checkbox');
    gridChangeBtn.change(function () {
        // $('.row_cols_transform').toggleClass('active');
        $(this).closest("section").find($('.row')).toggleClass('row_active');
    });

    // Bonus rating position
    if($('.bonus').length > 0) {
        $('.casino__rating').each(function (i) {
            $(this).text(i+1);
        })
    }

    // Casino Page
    if($('.casino__article').length > 0) {
        let casinoPage = $('.casino__article');
        casinoPage.each(function () {
            let navItem = $('.casino__article_nav_list li a'),
                infoItem = $('.casino__article_info_list li');

            navItem.each(function (i) {
                $(this).attr('href','#item-'+[i]);
            });
            infoItem.each(function (i) {
                $(this).attr('id','item-'+[i]);
            });
        });
    }

    // Rules Page
    if($('.rules').length > 0) {
        let rulesNav = $('.rules__nav_link'),
            rulesItem = $('.rules__content_item');

        rulesNav.each(function (i) {
            $(this).attr('href','#rules-'+[i]);
        });
        rulesItem.each(function (i) {
            $(this).attr('id','rules-'+[i]);
        });
    }

    // Rating
    if($('.rating__group').length > 0) {
        let ratingGroup = $('.rating__group');
        ratingGroup.each(function () {
            let ratingStar = $('.rating__star'),
                ratingValue =  $('.form__rating_value'),
                ratingInput =  $('.rating__input');

            function checkChecked() {
                ratingInput.each(function () {
                    if($(this).is(':checked') === true) {
                        ratingValue.text($(this).attr('value'));
                    }
                });
            }
            checkChecked();

            ratingStar.mouseenter(function () {
                ratingValue.text($(this).attr('aria-label'));
            });

            ratingStar.mouseleave(function () {
                checkChecked();
            });

            ratingInput.change(function () {
                checkChecked();
            });

        });
    }

    // Faq
    if($('.faq__item').length > 0) {
        let faq = $('.faq__item');
        faq.on('click', function () {
            faq.removeClass('active');
            $(this).addClass('active');
        });
    }

});