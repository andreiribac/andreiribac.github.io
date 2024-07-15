$(document).ready(function() {
    // Search Open
    let searchLabel = $('.search_label'),
        searchBox = $('.search_box'),
        searchClose = $('.close_search');
    if((searchBox.length) > 0) {
        searchLabel.on('click', function () {
            searchBox.addClass('active');
        });
        searchClose.on('click', function () {
            searchBox.removeClass('active');
            searchBox.removeClass('active_result');
        });
    }

    // Menu
    let dropdownBox = $('.header_nav_list'),
        dropdownTrigger = $('.dropdown_box'),
        menuTrigger = $('.hamburger'),
        menuBox = $('.header_row');
    if((dropdownBox.length) > 0) {
        dropdownTrigger.on('click', function () {
            dropdownTrigger.toggleClass('active');
            dropdownBox.toggleClass('active');
        });
        menuTrigger.on('click', function () {
            menuTrigger.toggleClass('is-active');
            menuBox.toggleClass('active');
        })
    }

    // Language
    let languageBox = $('.language'),
        languageBtn = $('.language__current');

    languageBtn.on('click', function () {
        languageBox.toggleClass('active');
    });

    // popup
    if($('.popup_box').length > 0) {
        let popup = $('.popup_box'),
            closePopup = $('.close_popup');

        closePopup.on('click', function () {
            popup.removeClass('active');
        });
    }

    // Advertising Slider
    if($('.adv_slider_box').length > 0) {
        $('.adv_slider_box').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }

    // Game Item Chose casino
    let gameItem = $('.game_item');
    if(gameItem.length > 0) {
        let btnCasino = $('.chose_casino_box'),
            listCasino = $('.chose_casino_list_box'),
            closeList = $('.close_casino_list'),
            choseCasino = $('.chose_casino_list li');

        btnCasino.on('click', function () {
            $(this).closest(gameItem).find(listCasino).addClass('active');
        });
        closeList.on('click', function () {
            $(this).closest(listCasino).toggleClass('active');
        });
        choseCasino.on('click', function () {
            let choseText = $(this).text();
            $(this).closest(gameItem).find($('.btn_second')).text(choseText);
            $(this).closest(listCasino).toggleClass('active');
        })
    }

    if($('.demo_game_slider').length > 0) {
        $('.demo_game_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 901,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    if($('.news_slider').length > 0) {
        $('.news_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    if($('.casino_bonus_slider').length > 0) {
        $('.casino_bonus_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // Mem gallery
    let memGal = $('.mem_row');
    if(memGal.length > 0) {
        memGal.magnificPopup({
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
    }

    // Testimonial rating
    if($('.testimonial_section').length > 0) {
        let range = $('.testimonials_rating_range'),
            box = $('.testimonial_item_rating_box'),
            rating = $('.testimonial_item_rating_value');
        range.change(function () {
            $(this).closest(box).find(rating).css('width', $(this).val() + '%');
        });

        let feedbackOpen = $('#feedback_trigger_open'),
            feedbackClose = $('#feedback_trigger_close'),
            feedbackBox = $('.leave_feedback_box');

        feedbackOpen.on('click', function () {

            feedbackBox.addClass('active');
        });
        feedbackClose.on('click', function () {
            feedbackBox.removeClass('active');
        });
    }

    //   Bonus Filter GAme page
    if($(".casino_bonus_filter_list").length > 0) {
        let filterItem = $(".casino_bonus_filter_item");

        filterItem.on("click", function () {
            filterItem.removeClass('active');
            $(this).addClass('active');
        })
    }

    // filter_casino_box
    if($(".filter_casino_box").length > 0) {
        let filterBox = $('.filter_casino_box'),
            filterTrigger = $('.filter_trigger_box');

        filterTrigger.on('click', function () {
            filterBox.toggleClass('active');
        });

        let filterItem = $('.filter_casino_option_item'),
            filterHeading = $('.filter_casino_option_item_heading'),
            filterChoseItem = $('.filter_chose_item');

        filterHeading.on('click', function () {
            $(this).closest(filterItem).toggleClass('active');
        });
        filterChoseItem.on('click', function () {
            $(this).toggleClass('active');
        });

        let casinoCheck = $('.casino_info_side .square'),
            casinoItem = $('.casino_rating_item');

        casinoCheck.on('click', function () {
            $(this).closest(casinoItem).toggleClass('active');
        });

        let compareOpen = $('.compare_link_heading'),
            compareLinkBox = $('.compare_link_box'),
            compareClose = $('.hide_compare_link_list_box');

        compareOpen.on('click', function () {
            compareLinkBox.addClass('active');
        });

        compareClose.on('click', function () {
            compareLinkBox.removeClass('active');
        });
    }

    // FAQ
    if($('.faq_box').length > 0 ) {
        let faqItem = $('.faq_item'),
            faqHeading = $('.faq_item h4');

        faqHeading.on('click', function () {
            faqItem.removeClass('active');
            $(this).closest(faqItem).addClass('active');
        });
    }

    // Description Game
    if($('.description_game_item').length > 0 ) {
        let descriptionInfo = $('.description_game_item');

        descriptionInfo.on('click', function () {
            descriptionInfo.toggleClass('active');
        });
    }

    // Compare Section
    if($('.table-responsive').length > 0) {
        var scr = $('.table-responsive');
        scr.mousedown(function () {
            let startX = this.scrollLeft + event.pageX,
                startY = this.scrollTop + event.pageY;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                this.scrollTop = startY - event.pageY;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove");
        });

    }
});