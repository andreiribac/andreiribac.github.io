$( document ).ready(function() {
    const TargetSection = $('#bay_section');
    const BtnContainer = $('.btn__container');
    let hideBtnContainer = function() {
        if(!TargetSection.hasClass('hide')) {
            if($(this).offset().top >= TargetSection.offset().top) {
                BtnContainer.addClass('hide');
            } else {
                BtnContainer.removeClass('hide');
            }
        } else {

        }

    };
    let initializeScrollify = function() {
        $(function() {
            $.scrollify({
                section:".scrollify_section",
                easing:"easeOutQuad",
                scrollSpeed:500,
                scrollbars:false,
                sectionName:false,
                setHeights:false,
                overflowScroll:false,
                after:function() {
                    toggleActiveClass();
                },
                afterRender() {
                    $.scrollify.update();
                    toggleActiveClass()
                },
                afterResize:function() {
                    $.scrollify.update();
                    toggleActiveClass()
                },
            });
        });
    };
    let toggleActiveClass = function () {
        $(".scrollify_section").each(function() {
            // console.log($(this).offset().top);
            // console.log('Прокрутка' + $(document).scrollTop());
            $(this).removeClass('active');
            if($(this).offset().top === $(document).scrollTop()) {
                $(this).addClass('active');
                hideBtnContainer();
            }
        });

    };


    if($('.countdown').length > 0) {
        // Set the date we're counting down to
        let finalDate = $('#countDate').text();
        let countDownDate = new Date(finalDate.slice(3,6) + finalDate.slice(0,2) + finalDate.slice(5)).getTime();

        // Update the count down every 1 second
        let countDownFunction = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with class="countdown__box"
            $('#days').text(days);
            $('#hours').text(hours);
            $('#minutes').text(minutes);
            $('#seconds').text(seconds);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(countDownFunction);
            }
        }, 1000);
    }
    if($('.cvv_help').length > 0) {
        let btnCVV = $('.cvv_help__text'),
            cvvPopup = $('.cvv_help__pop'),
            cvvPopupClose = $('.cvv_help__close');

        btnCVV.on('click', function () {
            cvvPopup.addClass('active');
        });
        cvvPopupClose.on('click', function () {
            cvvPopup.removeClass('active');
        });
    }


    let bayBtn = $('#moveToBay');
    bayBtn.on('click', function (e) {
        if(!TargetSection.hasClass('hide')) {
            $('html,body').stop().animate({ scrollTop: TargetSection.offset().top}, 500);
            TargetSection.addClass('active');
            BtnContainer.addClass('hide');
            e.preventDefault();
            return false;
        }
    });
    //  Slider Review
    if($('.reviews_slider').length > 0) {
        $('.reviews_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
        });
    }

    // Variable Functional
    let deliverySubmit = $('#form_delivery .btn'),
        paymentSection = $('.payment_section_bay'),
        thxSection = $('.payment_section_thx'),
        paymentSucces = $('.payment_section_bay .btn'),
        thxBtn = $('.payment_section_thx .btn');

    deliverySubmit.on('click', function (e) {
        e.preventDefault();
        paymentSection.addClass('active');
    });
    paymentSucces.on('click', function (e) {
        e.preventDefault();
        thxSection.addClass('active');
    });
    thxBtn.on('click', function (e) {
        e.preventDefault();
        paymentSection.removeClass('active');
        thxSection.removeClass('active');
        // $.scrollify.move("#1");
    });

    if(!$('body').hasClass('hide')) {
        if($(window).width() >= 768) {
            initializeScrollify();
            $( window ).on('resize',function() {
                if($(window).width() >= 768) {
                    $.scrollify.enable();
                }
                else {
                    $.scrollify.disable();
                }
            });
        } else {
            $( window ).on('scroll',function() {
                if(!TargetSection.hasClass('hide')) {
                    if( $( window ).scrollTop() >= TargetSection.offset().top - 10) {
                        BtnContainer.addClass('hide');
                    } else {
                        BtnContainer.removeClass('hide');
                    }
                }
                if($(window).width() >= 768) {
                    $('.countdown').css('transform','translateY(0)');
                }
                else {
                    $('.countdown').css('transform','translateY(-'+ $( window ).scrollTop() + 'px)');
                }
            });
            $( window ).on('resize',function() {
                if($(window).width() >= 768) {
                    initializeScrollify();
                    $.scrollify.enable();
                    $('.countdown').css('transform','translateY(0)');
                }
                else {
                    $.scrollify.disable();
                    $('.countdown').css('transform','translateY(-'+ $( window ).scrollTop() + 'px)');
                }
            });
        }
    } else {
        let btnVerify = $('.form_verify .btn');
        btnVerify.on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('hide');
            if($(window).width() >= 768) {
                initializeScrollify();
                $( window ).on('resize',function() {
                    if($(window).width() >= 768) {
                        $.scrollify.enable();
                    }
                    else {
                        $.scrollify.disable();
                        $('.countdown').css('transform','translateY(-'+ $( window ).scrollTop() + 'px)');
                    }
                });
            } else {
                $( window ).on('scroll',function() {
                    if(!TargetSection.hasClass('hide')) {
                        if( $( window ).scrollTop() >= TargetSection.offset().top - 10) {
                            BtnContainer.addClass('hide');
                        } else {
                            BtnContainer.removeClass('hide');
                        }
                    }
                    if($(window).width() >= 768) {
                        $('.countdown').css('transform','translateY(0)');
                    }
                    else {
                        $('.countdown').css('transform','translateY(-'+ $( window ).scrollTop() + 'px)');
                    }
                });
                $( window ).on('resize',function() {
                    if($(window).width() >= 768) {
                        initializeScrollify();
                        $.scrollify.enable();
                        $('.countdown').css('transform','translateY(0)');
                    }
                    else {
                        $.scrollify.disable();
                        $('.countdown').css('transform','translateY(-'+ $( window ).scrollTop() + 'px)');
                    }
                });
            }
        });
    }
});
