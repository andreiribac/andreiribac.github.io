const $ = jQuery;
$(document).ready(function () {
	// Animation elements on page
	AOS.init({
		duration: 800,
	});
	// Touch or Mouse
	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	let body = document.querySelector('body');
	if (isMobile.any()) {
		body.classList.add('touch');
	} else {
		body.classList.add('mouse');
	}

	//  Constant
	const Hamburger = $('.hamburger'),
		menu = $('.main-nav'),
		mainLink = $('a.main-nav__link'),
		subMenu = $('.main-nav__item--sub-menu'),
		page = $('html, body'),
		Lang = $('.lang'),
		LangCurrent = $('.lang__current'),
		mainSlider = $('.main-slider__slider');
	// Mobile Menu
	Hamburger.on('click', function () {
		if (Hamburger.hasClass('active')) {
			$(this).removeClass('active');
			menu.removeClass('active');
		} else {
			$(this).addClass('active');
			menu.addClass('active');
		}
	});

	// Header menu
	if ($('.header').length > 0) {
		// Hide on scroll
		let prevScrollpos = window.pageYOffset,
			hideMenu = $('.header__fixed');
		window.onscroll = function () {
			let scrollPage = $(window).scrollTop();

			if (scrollPage > 200) {
				let currentScrollPos = window.pageYOffset;
				if (prevScrollpos > currentScrollPos) {
					hideMenu.removeClass('hide');
				} else {
					hideMenu.addClass('hide');
					Lang.removeClass('active');
					subMenu.removeClass('active');
				}
				prevScrollpos = currentScrollPos;
			}
		}
		mainLink.on('click', function () {
			if ($(window).width() < 1200) {
				Hamburger.removeClass('active');
				menu.removeClass('active');
			}
			page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 600);
			hideMenu.removeClass('hide');
			return false;
		});
		// Sub menu
		if (subMenu.length) {
			subMenu.on('click', function () {
				$(this).toggleClass('active');
			});
		}
	}

	// Lang 
	if (Lang.length) {
		LangCurrent.on('click', function () {
			Lang.toggleClass('active');
		});
		let langActive = $('.lang__link.active');
		langActive.on('click', function (e) {
			e.preventDefault();
			Lang.removeClass('active');
		})
	}

	// Main slider
	if (mainSlider.length) {
		mainSlider.slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			swipeToSlide: true,
			fade: true,
			cssEase: 'linear',
			pauseOnHover: false,
		});
	}

});