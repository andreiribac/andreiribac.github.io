const $ = jQuery;
$(document).ready(function () {
    // Language
    const Lang = $('.lang'),
        LangBtn = $('.lang__current');
    LangBtn.on('click', function () {
        $(this).closest(Lang).toggleClass('active');
    });

    // Mobile Menu
    const Hamburger = $('.hamburger'),
        mobileMenu = $('.mobile_nav');
    Hamburger.on('click', function () {
        if (Hamburger.hasClass('active')) {
            $(this).removeClass('active');
            mobileMenu.removeClass('active');
        } else {
            $(this).addClass('active');
            mobileMenu.addClass('active');
        }
    });

    // Sub Menu
    let subMenu = $('.sub-menu');
    $('.sub-menu > a').on('click', function (e) {
        e.preventDefault();
    });
    subMenu.on('click', function () {
        if ($(this).hasClass('active')) {
            subMenu.removeClass('active');
        } else {
            subMenu.removeClass('active');
            $(this).addClass('active');
        }

    });


    // Header menu Hide on scroll
    if ($('.header').length > 0) {
        let prevScrollpos = window.pageYOffset,
            hideMenu = $('.header');
        window.onscroll = function () {
            let scrollPage = $(window).scrollTop();

            if (scrollPage > 50) {
                hideMenu.css("background-color", "rgba(247, 252, 247, 0.9)");
            } else {
                hideMenu.removeAttr('style');
            }
            if (scrollPage > 200) {
                let currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    hideMenu.removeClass('hide');
                } else {
                    hideMenu.addClass('hide');
                    let subMenuActive = $('.main_nav .sub-menu.active');
                    if (subMenuActive) {
                        subMenuActive.removeClass('active');
                    }
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }


    if ($('.main_slider').length > 0) {
        let mainSlider = $('.main_slider');
        mainSlider.slick({
            infinite: true,
            arrows: false,
            dots: false,
            fade: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 1,
        });
    }

    // Tab
    if ($('.tab').length > 0) {
        let tab = $('.tab');
        tab.each(function () {
            let tabNav = $(this).find('.tab__nav li'),
                tabContent = $(this).find('.tab__content > *');

            tabNav.each(function (el) {
                $(this).attr('data-tab', 'tab-' + el);
            });
            tabContent.each(function (el) {
                $(this).attr('data-tab', 'tab-' + el);
            });
            tabNav.on('click', function () {
                tabNav.removeClass('active');
                $(this).addClass('active');
                tabContent.removeClass('active')
                    .filter('[data-tab=' + $(this).data('tab') + ']')
                    .addClass('active');
            });
        });
    }

    if ($('.testimonials__slider').length > 0) {
        let testimonialSlider = $('.testimonials__slider');
        testimonialSlider.slick({
            infinite: true,
            arrows: true,
            dots: false,
            speed: 300,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 5199,
                    settings: {
                        rows: 2,
                    }
                }
                ,
                {
                    breakpoint: 770,
                    settings: {
                        rows: 1,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if ($('.rules').length > 0) {
        $('.rules').each(function () {
            let nav = $('.rules__nav'),
                list = $('.rules__list');
            nav.each(function () {
                let navItem = $(this).find('li > a');
                navItem.each(function (i) {
                    $(this).attr('href', '#rules-' + i);
                });
            });
            list.each(function () {
                let listItem = $(this).find(' > li');
                listItem.each(function (i) {
                    $(this).attr('id', 'rules-' + i);
                });
            });
        });


    }

    // Functions Change Elements BG

    // function AddImg(width, elementClass, imgClass) {
    //     if(window.innerWidth > width) {
    //         $('.'+ elementClass).removeClass().addClass(elementClass +' '+ imgClass);
    //     } else {
    //         $('.'+ elementClass).removeClass().addClass(elementClass);
    //     }
    // }
    function AddImg(elementClass, imgClass) {
        $('.' + elementClass).removeClass().addClass(elementClass + ' ' + imgClass);
    }
    function ChangeElements() {
        if (window.innerWidth > 760) {
            AddImg('main', 'img_760');
            AddImg('intro_screen', 'img_760');
            AddImg('bg_element', 'img_760');
        }
        if (window.innerWidth > 1199) {
            AddImg('footer__bottom', 'img_1200');
            AddImg('casino__commission', 'img_1200');
            AddImg('sport__commission_main', 'img_1200');
        }
        if (window.innerWidth > 1400) {
            AddImg('main', 'animate_bg');
            // GSAP
            const CasinoComission = gsap.timeline({
                scrollTrigger: {
                    trigger: ".casino__commission",
                    start: "center 80%",
                    end: "bottom 50%",
                    // markers: true,
                    scrub: 2,
                    pin: true,
                }
            });
            CasinoComission.to('.casino__commission', { yPercent: -15, duration: 1 })
            CasinoComission.from('.casino__commission .section__header_title', { yPercent: 50, duration: 1 }, '-=1')
            CasinoComission.from('.section__header_img', { xPercent: -230, yPercent: 130, duration: 4 }, '-=0.3')
            CasinoComission.from('.casino__card', { yPercent: 150, stagger: 0.5, duration: 2 })
            CasinoComission.to('.casino__commission', { yPercent: -30, duration: 1 })
            CasinoComission.from('.casino__commission .section__btn_box', { yPercent: -50, autoAlpha: 0, duration: 1 },)
            CasinoComission.to('.section__header_img', { xPercent: 220, yPercent: -100, duration: 6 })
            CasinoComission.to('.casino__commission .section__btn_box', { y: 40 })
                ;
            const SportCommision = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sport__commission",
                    start: "center 80%",
                    end: "bottom 50%",
                    // markers: true,
                    scrub: 2,
                    pin: true,
                }
            });
            SportCommision.from('.sport__header', { yPercent: 50, xPercent: 100, })
            SportCommision.fromTo('.sport__header_img', { xPercent: -180, }, { xPercent: 30, })
            SportCommision.from('.sport__commission_main', { rotate: -90, xPercent: -10,yPercent: -10,})
            SportCommision.fromTo('.sport__commission_main .section__btn_box', { yPercent: -250, rotate: 90, xPercent: -20 }, { yPercent: 0, rotate: 0, xPercent: 0 }, '-=0.2')
            SportCommision.from('.sport__commission_main > img', { opacity: 0 })
            SportCommision.from('.sport__card', { autoAlpha: 0, yPercent: 50, stagger: 0.2, })
            SportCommision.to('.sport__commission_main .section__btn_box', { y: 50 })
                ;
            const Casino = gsap.timeline({
                scrollTrigger: {
                    trigger: ".casino",
                    start: "center 80%",
                    end: "bottom 50%",
                    // markers: true,
                    scrub: 2,
                    pin: true,
                }
            });
            Casino.from('.bg_element', { rotate: -90, xPercent: -15, yPercent: 15 })
            Casino.from('.casino .tab__nav', { yPercent: 10 }, '-=0.4')
            Casino.from('.casino .tab__nav', { xPercent: 50, yPercent: 30 }, '-=0.4')
            Casino.to('.bg_element', { yPercent: -30, })
            Casino.to('.bg_element', { yPercent: 0, })
            Casino.from('.casino__section .tab__content', { autoAlpha: 0, yPercent: 100 }, '-=0.5')
                ;
        }
    }

    ChangeElements();
    let resizeTimeout;
    $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            ChangeElements();
        }, 400);
    });
});