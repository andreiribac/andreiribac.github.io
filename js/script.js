const $ = jQuery;
$(document).ready(function () {
    let portfolioSlider = $('.portfolio__slider');
    if(portfolioSlider.length > 0) {
        portfolioSlider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            rows: 1,
            responsive: [
                // {
                //     breakpoint: 1024,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 3,
                //         infinite: true,
                //         dots: true
                //     }
                // },
                {
                    breakpoint: 749,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 549,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

});