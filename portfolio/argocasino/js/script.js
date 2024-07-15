const $ = jQuery;
$(document).ready(function () {
	// Animation elements on page
	// AOS.init({
	// 	duration: 800,
	// });
	// Touch or Mouse
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};
	let body = document.querySelector("body");
	if (isMobile.any()) {
		body.classList.add("touch");
	} else {
		body.classList.add("mouse");
	}

	//  Constant
	const Hamburger = $(".mobile-menu-hamburger"),
		menu = $(".mobile-nav"),
		mainLink = $("a.main-nav__link"),
		subMenu = $(".main-nav__item--sub-menu"),
		subToggler = $(".mobile-nav__sub-toggler"),
		mobileSubItem = $(".mobile-nav__item--sub-menu"),
		page = $("html, body"),
		Lang = $(".lang"),
		LangToggler = $(".lang__sub-toggler"),
		// LangCurrent = $('.lang__current'),
		overlay = $(".overlay"),
		mainSlider = $(".main-slider");

	// User
	const UserMenu = $(".user-nav"),
		UserMenuOpen = $(".user__img-area"),
		UserMenuClose = $(".user-menu-hamburger");

	// Mobile Menu
	Hamburger.on("click", function () {
		if (Hamburger.hasClass("active")) {
			Hamburger.removeClass("active");
			menu.removeClass("active");
			overlay.removeClass("active");
			page.removeClass("blur");
		} else {
			Hamburger.addClass("active");
			menu.addClass("active");
			overlay.addClass("active");
			page.addClass("blur");
		}
	});

	if (mobileSubItem.length) {
		subToggler.on("click", function () {
			$(this).closest(mobileSubItem).toggleClass("active");
		});
	}

	// Header menu
	if ($(".header").length > 0) {
		// Hide on scroll
		let prevScrollpos = window.pageYOffset,
			hideMenu = $(".header__fixed");
		window.onscroll = function () {
			let scrollPage = $(window).scrollTop();

			if (scrollPage > 200) {
				let currentScrollPos = window.pageYOffset;
				if (prevScrollpos > currentScrollPos) {
					hideMenu.removeClass("hide");
				} else {
					hideMenu.addClass("hide");
					Lang.removeClass("active");
					subMenu.removeClass("active");
					menu.removeClass("active");
					Hamburger.removeClass("active");
					UserMenu.removeClass("active");
					UserMenuClose.removeClass("active");
					overlay.removeClass("active");
				}
				prevScrollpos = currentScrollPos;
			}
		};
		mainLink.on("click", function () {
			if ($(window).width() < 1200) {
				Hamburger.removeClass("active");
				menu.removeClass("active");
			}
			page.animate(
				{
					scrollTop: $($.attr(this, "href")).offset().top,
				},
				600
			);
			hideMenu.removeClass("hide");
			return false;
		});
		// Sub menu
		if (subMenu.length) {
			subMenu.on("click", function () {
				$(this).toggleClass("active");
			});
		}
	}

	// Lang
	if (Lang.length) {
		LangToggler.on("click", function () {
			Lang.toggleClass("active");
		});
		const langOpen = $(".lang__current");
		const langClose = $(".lang__item--current .lang__link");

		langOpen.on("click", function () {
			Lang.addClass("active");
		});
		langClose.on("click", function (e) {
			e.preventDefault();
			Lang.removeClass("active");
		});
	}

	// User
	UserMenuOpen.on("click", function () {
		UserMenu.toggleClass("active");
		UserMenuClose.toggleClass("active");
		overlay.toggleClass("active");
		page.toggleClass("blur");
	});
	UserMenuClose.on("click", function () {
		UserMenu.toggleClass("active");
		UserMenuClose.toggleClass("active");
		overlay.toggleClass("active");
		page.toggleClass("blur");
	});

	// Main slider
	if (mainSlider.length) {
		mainSlider.slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			swipeToSlide: true,
			fade: true,
			cssEase: "linear",
			pauseOnHover: false,
		});
	}

	// Game Company slider
	let gameCompanySlider = $(".game-company__slider");
	if (gameCompanySlider.length) {
		gameCompanySlider.slick({
			slidesToShow: 17,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1921,
					settings: {
						slidesToShow: 14,
					},
				},
				{
					breakpoint: 1800,
					settings: {
						slidesToShow: 12,
					},
				},
				{
					breakpoint: 1601,
					settings: {
						slidesToShow: 10,
					},
				},
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 9,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 8,
					},
				},
				{
					breakpoint: 1080,
					settings: {
						slidesToShow: 7,
					},
				},
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 6,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 490,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 361,
					settings: {
						centerMode: true,
						centerPadding: "40px",
						slidesToShow: 1,
					},
				},
			],
		});
	}

	// Payment slider
	let paymentSlider = $(".payment-system");
	if (paymentSlider.length) {
		paymentSlider.slick({
			slidesToShow: 25,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 2440,
					settings: {
						slidesToShow: 20,
					},
				},
				{
					breakpoint: 1950,
					settings: {
						slidesToShow: 18,
					},
				},
				{
					breakpoint: 1750,
					settings: {
						slidesToShow: 15,
					},
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 13,
					},
				},
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 10,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 8,
					},
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 6,
					},
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 3,
					},
				},
			],
		});
	}

	// Tournament Basic
	let tournamentBasic = $(".tournament-basic");
	if (tournamentBasic.length) {
		let tournamentHamburger = $(".tournament-basic__hamburger");
		tournamentHamburger.on("click", function () {
			$(this).toggleClass("active");
			$(this).closest(tournamentBasic).toggleClass("active");
		});
	}

	// Tpurnament Slider
	let tournamentSlider = $(".tournament-slider__slider");
	if (tournamentSlider.length) {
		tournamentSlider.slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 6000,
			swipeToSlide: true,
			fade: true,
			cssEase: "linear",
			pauseOnHover: false,
		});
	}

	// Popular Games Slider
	let popularGamesSlider = $(".popular-games__slider");
	if (popularGamesSlider.length) {
		popularGamesSlider.slick({
			centerMode: true,
			centerPadding: "160px",
			slidesToShow: 8,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			arrows: true,
			// autoplay: true,
			// autoplaySpeed: 3000,
			rows: 2,
			responsive: [
				{
					breakpoint: 1700,
					settings: {
						centerPadding: "80px",
						slidesToShow: 6,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						centerPadding: "80px",
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 770,
					settings: {
						centerPadding: "80px",
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 700,
					settings: {
						centerPadding: "80px",
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 590,
					settings: {
						centerPadding: "60px",
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 470,
					settings: {
						centerPadding: "100px",
						slidesToShow: 1,
						rows: 4,
					},
				},
			],
		});
	}

	// Win Now
	let winNow = $(".win-now");
	if (winNow.length) {
		let even = true;
		setInterval(() => {
			let first = document.querySelector(".win-now__item:first-child");
			let element = document.createElement("div");

			// element.outerHTML = first.outerHTML;

			first.remove();

			document.querySelector(".win-now__box").append(element);
			if (even) {
				element.outerHTML = `<div class="win-now__item">
							<a href="#" class="win-now__img-link">
								<div class="game-item">
									<div class="game-item__box">
										<div class="game-item__img-box" data-title="Пылающий Андрей">
											<img src="img/game-item/_Placeholder_1.jpg" alt="Andrei"
												class="game-item__game-img">
										</div><!-- /.game-item__img-box -->
									</div><!-- /.game-item__box -->
								</div><!-- /.game-item -->
							</a>
							<!-- /.win-now__img-link -->
							<div class="win-now__info">
								<div class="win-now__user-login">alex89alex89</div>
								<div class="win-now__win-value">
									<img src="img/icons/ico_money.svg" alt="" class="win-now__icon">
									2000
								</div>
								<a href="#" class="win-now__game-link">Cash of the Beast</a>
							</div>
							<!-- /.win-now__info -->
						</div>`;
			} else {
				element.outerHTML = `<div class="win-now__item">
				<a href="#" class="win-now__img-link">
					<div class="game-item">
						<div class="game-item__box">
							<div class="game-item__img-box" data-title="Пылающий Андрей">
								<img src="img/game-item/_Placeholder_2.jpg" alt="Andrei"
									class="game-item__game-img">
									</div><!-- /.game-item__img-box -->
							</div><!-- /.game-item__box -->
						</div><!-- /.game-item -->
						</a>
					<!-- /.win-now__img-link -->
					<div class="win-now__info">
						<div class="win-now__user-login">alex89alex89</div>
						<div class="win-now__win-value">
							<img src="img/icons/ico_money.svg" alt="" class="win-now__icon">
								2000
							</div>
							<a href="#" class="win-now__game-link">Cash of the Beast</a>
						</div>
						<!-- /.win-now__info -->
					</div>`;
			}

			even = !even;
		}, 5000);

		let winControl = $(".win-now__control");
		winControl.on("click", function () {
			winNow.toggleClass("active");
		});
	}

	// Input select open
	let inputSelect = $(".input-area--select");
	if (inputSelect.length) {
		inputSelect.on("click", function () {
			$(this).toggleClass("active");
		});
		let inputTitle = $(".input-area__select-label > input");
		inputTitle.on("click", function () {
			let inputValue = $(this)
				.closest(".input-area__select-label")
				.find(".input-area__select-title")
				.text();
			$(this)
				.closest(inputSelect)
				.find(".input-area__input")
				.val(inputValue);
		});
	}

	// Phone Select
	const phoneSelect = $(".phone-select");
	if (phoneSelect.length) {
		const inputArea = phoneSelect.closest(".input-area");
		const phoneCurrent = $(".phone-select__current");
		phoneCurrent.on("click", function () {
			$(this).closest(phoneSelect).addClass("active");
			inputArea.addClass("active");
		});

		const phoneInput = $(".phone-select__label");
		phoneInput.on("click", function () {
			let phoneInputValue = $(this).find(".phone-select__title").html();
			$(this)
				.closest(phoneSelect)
				.find(phoneCurrent)
				.html(phoneInputValue);
			$(this).closest(phoneSelect).removeClass("active");
			inputArea.removeClass("active");
		});
	}

	// Bonus
	const bonus = $(".bonus");
	if (bonus.length) {
		const bonusBtn = $(".btn-gray");
		const bonusClose = $(".bonus__hamburger");

		bonusBtn.on("click", function () {
			$(this).toggleClass("active");
			$(this).closest(bonus).toggleClass("active");
			$(this).closest(bonus).find(bonusClose).toggleClass("active");
		});

		bonusClose.on("click", function () {
			$(this).removeClass("active");
			$(this).closest(bonus).removeClass("active");
			$(this).closest(bonus).find(bonusBtn).removeClass("active");
		});
	}

	// Rules
	const rulesNav = $(".rules__nav");
	if (rulesNav.length) {
		const rulesLink = $(".rules__nav li a");
		const rulesInfo = $(".rules__content > li");

		rulesLink.each(function (i) {
			$(this).attr("href", "#rule-" + i);
		});

		rulesInfo.each(function (i) {
			$(this).attr("id", "rule-" + i);
		});
	}

	// Game page
	const playPage = $(".play-game");
	if (playPage.length) {
		$(".livechat-btn").remove();

		let actionBtn = $(".play-game__nav .action-btn");
		actionBtn.on("click", function () {
			$(this).toggleClass("active");
		});

		const fullScreen = $("#fullScreen");
		const headerFixed = $(".header__fixed");
		const bodyPage = $("body");
		fullScreen.on("click", function () {
			headerFixed.toggleClass("hide");
			playPage.toggleClass("full-screen");
			bodyPage.toggleClass("fixed");
		});
	}

	// .slider-status
	const sliderStatus = $(".slider-status");
	if (sliderStatus.length) {
		// sliderStatus.slick({
		// 	asNavFor: '.slider-progress',
		// 	slidesToShow: 5,
		// 	slidesToScroll: 1,
		// 	infinite: false,
		// 	speed: 300,
		// 	arrows: false,
		// 	dots: false,
		// 	centerMode: true,
		// 	focusOnSelect: true,
		// });
	}

	// slider-progress
	const sliderProgress = $(".slider-progress");
	if (sliderProgress.length) {
		const item = $(".slider-status__item");

		sliderProgress.slick({
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			speed: 400,
			arrows: true,
			dots: false,
		});

		$(sliderProgress).on(
			"afterChange",
			function (event, slick, currentSlide, nextSlide) {
				item.removeClass("current");
				$(item[currentSlide]).addClass("current");
			}
		);

		$(item).each(function (index) {
			$(this).on("click", function () {
				$(sliderProgress).slick("slickGoTo", index);
			});
		});
	}

	const avatar = $(".avatar");
	if (avatar.length) {
		const avatarCurrent = $(".avatar__current");
		const currentImg = $(".avatar__current .avatar__img");
		const avatarBox = $(".avatar__box");
		const avatarItem = $(".avatar__list > li");

		avatarCurrent.on("click", function () {
			avatarBox.addClass("active");
		});

		avatarItem.each(function () {
			$(this).on("click", function () {
				let imgSrc = $(this).find(".avatar__img").attr("src");
				currentImg.attr("src", imgSrc);
				avatarBox.removeClass("active");
			});
		});
	}

	const toast = $(".toast");
	if (toast.length) {
		const item = $(".toast__item");
		const itemClose = $(".toast__close");

		itemClose.on("click", function () {
			$(this).closest(item).addClass("close");
			setTimeout(function () {
				$(".close").remove();
				if (toast.find(item).length === 0) {
					toast.remove();
				}
			}, 400);
		});
	}

	const search = $(".search");
	if (search.length) {
		const searchTrigger = $(".action-nav__item--search");
		const searchTriggerMobile = $(".search-trigger");
		const searchClose = $(".search__close");

		function RemoveClass() {
			overlay.removeClass("active");
			toast.removeClass("active");
			UserMenu.removeClass("active");
			menu.removeClass("active");
			page.removeClass("blur");
		}

		searchTrigger.on("click", function () {
			search.addClass("active");
			RemoveClass();
		});

		searchTriggerMobile.on("click", function () {
			search.addClass("active");
			RemoveClass();
		});

		searchClose.on("click", function () {
			search.removeClass("active");
		});
	}

	const moneyForm = $('.account__money-form');
	if(moneyForm.length) {
		let radioInput = $('.account__radio-input');
		const radioBox = $('.account__radio-box');
		const currentPayment = $('.account__current-payment-box');
		const currentImg = $(currentPayment).find('.card__img');

		radioInput.on('click', function () {
			let radioImg = $(this).closest('.account__radio').find('.account__payment-img').attr('src');
			currentImg.attr('src', radioImg);	
			radioBox.addClass('order-last');
		});

		currentPayment.on('click', function() {
			radioBox.removeClass('order-last');
		});

	}
	
	const registration = $('.registration');
	if(registration.length) {
		const tabNav = $('.tab-nav .action-btn');
		const tabContent = $('.tab-content > div');

		tabContent.not(':first-of-type').hide();

		tabNav.each(function (i) {
			$(this).attr('data-tab', 'tab' + i);
		});

		tabContent.each(function (i) {
			$(this).attr('data-tab', 'tab' + i);
		});

		tabNav.on('click', function () {
			if (tabNav.hasClass('current')) {
				$(this).removeClass('current').addClass('active');
			}
			tabNav.removeClass('current');
			$(this).addClass('current');

			let dataTab = $(this).data('tab');
			
			tabContent.hide();
			tabContent.filter('[data-tab=' + dataTab + ']').show();
		});

	}

});		
