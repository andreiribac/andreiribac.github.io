$(document).ready(function () {
    if ($('.language').length > 0) {
        let langBox = $('.language'),
            langBtn = $('.language__current'),
            langLink = $('.language__link');

        langBtn.on('click', function (event) {
            langBox.addClass('active');
        });
        langLink.on('click', function (event) {
            if ($(this).hasClass('active')) {
                event.preventDefault();
                langBox.removeClass('active');
            }
        });
    }
    // Advertising Slider
    if ($('.adv__slider').length > 0) {
        let advertisingSlider = $('.adv__slider');
        advertisingSlider.slick({
            // autoplay: true,
            // autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 390,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    // Casino Slider
    if ($('.casino_rating__slider').length > 0) {
        let casinoSlider = $('.casino_rating__slider');
        casinoSlider.slick({
            // autoplay: true,
            // autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            speed: 500,
        });
        // function coolEfect() {
        //     let sliderSlick = $('.slick-slide');
        //     sliderSlick.each(function () {
        //         $(this).find('.item_box').removeClass('active');
        //         if($(this).hasClass('slick-current')) {
        //             $(this).find('.item_box').addClass('active');
        //             let item = $(this).find('.item');
        //             for(let i = 0; i < item.length; i++) {
        //                 $(item[i]).css("animation-delay", (Math.floor(Math.random() * item.length) / 10) + "s");
        //             }
        //         }
        //     });
        // }
        // coolEfect();

        // casinoSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     $('.slick-slide').each(function () {
        //         if($(this).hasClass('slick-current')) {
        //             $(this).find('.item_box').removeClass('active');
        //         }
        //     });
        //
        // });
        // casinoSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        //     coolEfect();
        // });
    }

    // Tab
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
            thisTab.find(allTabs).filter('[data-tab=' + dataTab + ']').show();
            new WOW({boxClass: 'wow2'}).init();
        });
    }

    // Mobile Menu
    let overlay = $('.overlay');
    if ($('.mobile_nav').length > 0) {
        let mobileLink = $('.mobile_nav__item'),
            closeMenu = $('.close_btn'),
            openMenu = $('.hamburger'),
            menu = $('.mobile_nav');

        openMenu.on('click', function () {
            overlay.addClass('active');
            menu.addClass('active');
        });
        closeMenu.on('click', function () {
            overlay.removeClass('active');
            menu.removeClass('active');
        });
        mobileLink.on('click', function () {
            if ($(this).hasClass('active')) {
                mobileLink.removeClass('active');
            } else {
                mobileLink.removeClass('active');
                $(this).addClass('active');
            }

        })
    }

    // Search
    if($('.search').length > 0) {
        let searchBox = $('.search'),
            searchOpen = $('.search__input_label'),
            searchClose = $('.search__close_btn');

        searchOpen.on('click', function () {
            searchBox.addClass('active');
        });
        searchClose.on('click', function () {
            searchBox.removeClass('active');
        });
    }
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
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    // Read More
    let readMore = $('.read_more');
    if(readMore.length > 0) {
        readMore.on('click', function () {
            $(this).parent('div').toggleClass('active');
        })
    }

    // Filter Casino
    if($('.casino_rating__filter_section').length > 0) {
        let filterSection = $('.casino_rating__filter_section'),
            filterBtn = $('.casino_rating__open_option_btn'),
            filterClear = $('.casino_rating__remove_filter_btn');

        filterBtn.on('click', function () {
            filterSection.toggleClass('active');
        });
        filterClear.on('click', function () {
            filterClear.text('');
        });

        let casinoTable = $('.casino_rating__table');
        casinoTable.each(function() {
            let casinoItem = $(this).find('tbody tr td .casino_rating__table_item'),
                casinoItem2n = $(this).find('tbody tr td .casino_rating__table_item:odd');

            casinoItem2n.css('background','#fff');
            casinoItem.each(function (i) {
                $(this).find($('.casino_rating__table_item_casino_position')).html(i + 1);
            });
        });

        let footer = $('footer .wrapper'),
            browserHeight = $(window).height(),
            compareBox = $('.casino_rating__compare_link_box'),
            compareBoxHeight = compareBox.height();
        $(document).on('scroll', function() {
            let footerPos = footer.offset().top - $(window).scrollTop(),
                casinoTablePos = casinoTable.offset().top - $(window).scrollTop();
            if(footerPos <= browserHeight || (casinoTablePos + compareBoxHeight) >= browserHeight) {
                if(compareBox.hasClass('active')) {
                    compareBox.removeClass('active');
                }
            } else {
                if(!(compareBox.hasClass('active'))) {
                    compareBox.addClass('active');
                }
            }
        });

        let compareSection = $('.casino_rating__compare_section'),
            compareOpen = $('.casino_rating__compare_open_btn');

        compareOpen.on('click', function () {
            compareSection.toggleClass('active');
        });
    }

    // Compare Section
    if($('.compare__table_wrapper').length > 0) {
        var scr = $('.compare__table_wrapper');
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

    // Complains
    if($('.complains__testimonial_item_answer').length > 0) {
        let answerBtn = $('.answer_heading_title'),
            answerBox = $('.complains__testimonial_item_answer');

        answerBox.each(function () {
            let answerCount = $(this).find($('.complains__header')).length;
            $(this).find($('.answer_heading_title')).text(answerCount + ' ' + $(this).find($('.answer_heading_title')).text());
        });
        answerBtn.on('click', function () {
            $(this).closest(answerBox).toggleClass('active');
        });
    }

    if($('.rules').length > 0) {
        let rulesLink = $('.rules__nav_link'),
            rulesItem = $('.rules__content_item');

        rulesLink.each(function (i) {
            $(this).attr('href','#rules-' + i);
        });
        rulesItem.each(function (i) {
            $(this).attr('id','rules-' + i);
        });
    }

    // Rating List Casino Box
    if($('.casino_rating__casino_list_box').length > 0) {
        let ListBox = $('.casino_rating__casino_list_box');
        ListBox.each(function () {
           let ListLenght = $(this).find($('.casino_rating__casino_list_item')).length;
            if(ListLenght === 1) {
                $(this).addClass('column_wrap');
            } else if(ListLenght === 2) {
                $(this).addClass('space_around');
            }
        });
    }

    // Complains Article
    if($('.complains__document_box').length > 0) {
        let galleryDoc = $('.complains__document_box');
        galleryDoc.each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                }
            });
        });
    }

    // Anchor Casino Page
    if($('.casino_rating__anchor_list').length > 0) {
        let anchorLink = $('.casino_rating__anchor_link'),
            anchorPoint = $('.news__short_heading');

        anchorLink.each(function (i) {
            $(this).attr('href', '#' + i);
        });
        anchorPoint.each(function (i) {
            $(this).attr('id', i);
        });
    }

    // Rating
    if($('.rating__group').length > 0) {
        let ratingGroup = $('.rating__group');
        ratingGroup.each(function () {
            let ratingStar = $('.rating__star'),
                ratingValue =  $('.rating__value'),
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

    if($('.toggle_list').length > 0) {
        let toggleList =  $('.toggle_list'),
            showMore = $('.show_more_item');
        showMore.on('click', function () {
            $(this).closest(toggleList).toggleClass('active');
        })
    }

    if($('.account__complains__item').length > 0) {
        let accountHeading = $('.account__complains__item_heading'),
            accountItem = $('.account__complains__item');
        accountHeading.on('click', function () {
            accountItem.removeClass('active').removeClass('new');
            $(this).closest('.account__complains__item').addClass('active');
        });
    }

    if($('.account__nav').length > 0) {
        let navTrigger = $('.account__img_box'),
            nav = $('.account__nav');

        navTrigger.on('click', function () {
            nav.toggleClass('active');
        });
    }

    if($('.account__login_form').length > 0) {
        let rememberBtn = $('.account__remember_btn'),
            rememberBody = rememberBtn.closest("form"),
            rememberForm = $('.account__remember_form').html();

        rememberBtn.on('click', function () {
            rememberBody.html(rememberForm);
        });
    }

    // PopUp
    let closePopupBtn = $('.popup__close_btn'),
        popUp = $('.popup');
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

    closePopupBtn.on('click', function () {
        closePopup();
    });


});
