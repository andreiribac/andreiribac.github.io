$(document).ready(function(){
  // Menu Open
  let burger = document.querySelector(".hamburger"),
    header = document.querySelector(".header"),
    navTop = document.querySelector(".nav_top"),
    navBottom = document.querySelector(".bottom_header"),
    navMobile = document.querySelector(".mobile_menu_box"),
    fixBtn = document.querySelectorAll(".fixed-button");

  burger.onclick =  () => {
    burger.classList.toggle('is-active');
    header.classList.toggle('header_fixed');
    navTop.classList.toggle('active');
    navBottom.classList.toggle('active');
    navMobile.classList.toggle('active');
    fixBtn.forEach(el => el.classList.toggle('z_index'));
  };

  // Sub menu Open
  let subMenu = $('.sub_menu_box > a');
  subMenu.on('click' , function () {
    $(this).parent( ".sub_menu_box" ).toggleClass('active');
  });

  // Login menu Open
  let login = document.querySelector('.user_trigger'),
    loginList = document.querySelector('.user_list');

    login.onclick =  () => {
    loginList.classList.toggle('active');
  };

  // Sort list Open

  if($('.show_result_section').length > 0) {
    let sortBtn = document.querySelector('.sort_type_current'),
      sortList = document.querySelector('.sort_option_list'),
      sortLabel = $('.sort_option_item_label');
    sortBtn.onclick =  () => {
      sortList.classList.toggle('active');
    };
    sortLabel.on('click', function () {
      let sortLabelText = $(this).text();
      $('.sort_type_current span').text(sortLabelText);
      sortList.classList.remove('active');
    });
  }


  // search_form_item_box
  let searchForm = $('.search_form_item_box');
  searchForm.on('click', function () {
    if ($(this).hasClass('active')) {
      searchForm.removeClass('active');
    } else {
      searchForm.removeClass('active');
      $(this).addClass('active');
    }

  });


  // Dark Them
  $('.dark_them_trigger').on('change', function () {
    if (($('#dark_them_trigger').is(':checked')) || ($('#dark_them_trigger2').is(':checked'))) {
      $('body').toggleClass('dark_style');
    } else {
      $('body').removeClass('dark_style');
    }
  });


  // Filter Page Slider
  $('.filter_page_slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  // basic_proposition_small_slider
  let smallSlider = $('.basic_proposition_small_slider');
  smallSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    arrows: false,
  });
  smallSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    new WOW({boxClass: 'f_wow'}).init();
  });

  // basic_proposition_big_slider
  let bigSlider = $('.basic_proposition_big_slider');
  bigSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    arrows: false,
  });
  bigSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    new WOW({boxClass: 'f_wow2'}).init();
  });

  // Product Slider
  let productSlider = $('.product_slider'),
      pageCount = $('.product_slider_page_count');

  productSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    pageCount.text(i + '/' + slick.slideCount);
  });
  productSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
  });



  // proposition_category_slider
  $('.proposition_category_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // exp_in_number_section
  // $('.exp_item_count').counterUp({
  //   delay:17,
  //   time:2000,
  // });


  // proposition_category_slider
  $('.news_box_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  //**************************
  //   News Page
  //**************************
  if ($('.news_main').length > 0) {

    let filter = $('.filter_them_btn');
    filter.on('click', function () {

      let btnFilter = $(this).data('filter'),
          filterContent = $('.news_col');

      filter.removeClass('active');
      $(this).addClass('active');
      if (btnFilter === "all") {
        filterContent.addClass('active');
      } else {
        filterContent.removeClass('active');
        filterContent.filter('[data-content='+btnFilter+']').addClass('active');
      }
    });

    $('.current_filter_them').on('click', function () {
      $(this).toggleClass('active');
      $('.filter_them_list').toggleClass('active');
    });

    filter.on('click', function () {
      let filterTetxt = $(this).text();
      $('.current_filter_them').text(filterTetxt).removeClass('active');
      $('.filter_them_list').removeClass('active');
    });
  }


});

