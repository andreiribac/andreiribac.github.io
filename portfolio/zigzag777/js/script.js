const $ = jQuery;
$(document).ready(function () {
	// Const Variable
	const winNow = $('.win_now'),
		overlay = $('.overlay'),
		popUp = $('.popup'),
		body = $('body'),
		logRegPopup = $('.log-reg-popup'),
		gameCompany = $('.game_company');

	$('.arrow-up').on('click', function (e) {
		e.preventDefault();
		$('.header__fixed').removeClass('hide');
		$(window).scrollTop(0);
	});

	// Header menu Hide on scroll
	if ($('.header__fixed').length) {
		let prevScrollpos = window.pageYOffset,
			hideMenu = $('.header__fixed');
		window.onscroll = function () {
			let scrollPage = $(window).scrollTop();

			// if (scrollPage > 100) {
			// 	hideMenu.css("background-color", "rgba(247, 252, 247, 0.9)");
			// } else {
			// 	hideMenu.removeAttr('style');
			// }
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


	// Add to favorite
	const gameItem = $('.game_item');
	if(gameItem.length > 0) {
	let favoriteBtn = $('.game_item__favorite_box');
		favoriteBtn.on('click', function () {
			$(this).toggleClass('active');
		});
	}

	// Main Grid
	let grid = $('.main__grid');
	if(grid.length) {
		let gridBtn = $('.btn-main'),
			showElement = 0,
			winClone = winNow.clone();
		gridBtn.on('click', function () {
			grid.addClass('main__grid_active');
			// $(this).closest('.main__btn-box').after(winClone);
			// let windowWidth = window.innerWidth,
			// 	gridColumns = grid.css('grid-template-columns').split(' ').length,
			// 	visibleElement,
			// 	hideElement;
			// if(windowWidth < 480) {
			// 	visibleElement = 4 * gridColumns + 1;
			// } else {
			// 	visibleElement = 3 * gridColumns + 1;
			// }
			// showElement += gridColumns*2;
			// hideElement = showElement + visibleElement;
			// $(".main__grid > *:gt("+ visibleElement +")").css({
			// 	'display': 'initial',
			// 	'visibility': 'visible',
			// });
			// $(".main__grid > *:gt(" + hideElement +")").css({
			// 	'display': 'none',
			// 	'visibility': 'hidden',
			// });

		});
	}

	// Mobile Land open
	let mobileLang = $('.mobile-lang__list');
	if(mobileLang.length) {
		let currentLang = $('.mobile-lang__item_current');
		currentLang.on('click', function (e) {
			e.preventDefault();
			mobileLang.toggleClass('mobile-lang__list_open');
		})
	}

	// Mobile menu
	let mobileMenu = $('.mobile-nav');
	if(mobileMenu.length) {
		let hamburger = $('.hamburger'),
			mobileMenuClose = $('.mobile-nav__close-btn');
		hamburger.on('click', function () {
			mobileMenu.addClass('mobile-nav_open');
			// overlay.addClass('active');
		});
		mobileMenuClose.on('click', function () {
			mobileMenu.removeClass('mobile-nav_open');
			// overlay.removeClass('active');
		});
	}
	// Mobile Sub menu
	let subMenu = $('.mobile-nav__sub-menu');
	if(subMenu.length) {
		let parentLink = $('.mobile-nav__sub-menu > .mobile-nav__link');
		parentLink.on('click',function (e) {
			e.preventDefault();
			subMenu.toggleClass('mobile-nav__sub-menu_open');
		});
	}

	// User menu
	let userNav = $('.user-nav');
	if(userNav.length) {
		let userNavTrigger = $('.log .user__img-area'),
			userNavClose = $('.user-nav__close-btn');
		userNavTrigger.on('click', function () {
			userNav.addClass('user-nav_open');
			overlay.addClass('active');
		});
		userNavClose.on('click', function () {
			userNav.removeClass('user-nav_open');
			overlay.removeClass('active');
		});
	}

	// Search Filter
	let filterItem = $('.search-filter__item');
	if(filterItem.length) {
		let filterCurrent = $('.search-filter__current'),
			defaultValue = filterCurrent.html(),
			removeFilter = $('.search-filter__list-fixed'),
			addFilter = $('.search-filter__value');
		filterCurrent.on('click', function () {
			$(this).closest(filterItem).addClass('search-filter__item_open');
		});
		removeFilter.on('click', function (e) {
			e.preventDefault();
			$(this).closest(filterItem).removeClass('search-filter__item_open search-filter__item_active');
		});
		addFilter.on('click', function () {
			$(this).closest(filterItem).find(filterCurrent).html($(this).html());
			$(this).closest(filterItem).removeClass('search-filter__item_open').addClass('search-filter__item_active');
		});
	}

	// Game_company
	let gameCompanyItem = $('.game_company__link');
	gameCompanyItem.on('click', function (e) {
		e.preventDefault();
		gameCompanyItem.removeClass('game_company__link_active');
		$(this).addClass('game_company__link_active');
	});

	let country = $('.country-list');
	if(country.length) {
		let countryCurrent = $('.country-list__current'),
			countryList = $('.country-list__list'),
			countryItem = $('.country-list__item');
		countryCurrent.on('click', function () {
			countryList.addClass('country-list__list_open');
		});
		countryItem.on('click', function () {
			countryCurrent.html($(this).html());
			countryList.removeClass('country-list__list_open');
		});
	}

	// Pop Up
	let searchPopUpContent = $('.search').clone(),
		searchTrigger = $('.search-trigger'),
		rememberPopUpContent = $('.remember-pass').clone(),
		rememberTrigger = $('.remember-pass-trigger'),
		rememberSuccesPopUpContent = $('.remember-succes').clone(),
		rememberSuccesTrigger = $('.remember-pass__form'),
		bonusInfoPopUpContent = $('.bonus__popup_info').clone(),
		bonusInfoSuccesTrigger = $('.bonus__pop_btn'),
		depositPopUpContent = $('.deposit-form').clone(),
		depositTrigger = $('.deposit .account__item-btn-box .btn'),
		withdrawalPopUpContent = $('.withdrawal-form').clone(),
		withdrawalTrigger = $('.withdrawal .account__item-btn-box .btn'),
		popUpContent = $('.popup__content'),
		popUpClose = $('.popup__close');
	searchTrigger.on('click', function () {
		popUpContent.html(searchPopUpContent);
		body.addClass('overflow');
		overlay.addClass('active');
		popUp.addClass('active');

		// Search PopUp Filter
		let searchFilter = $('.search__filter');
		if(searchFilter.length) {
			let searchCurrent = $('.search__filter-current'),
				removeSearchFilter = $('.search__filter-item.search__list-item-fixed'),
				addSearchFilter = $('.search__filter-item');
			const searchCurrentTxt = searchCurrent.html();
			searchCurrent.on('click', function () {
				$(this).closest(searchFilter).addClass('search__filter_open');
			});
			addSearchFilter.on('click', function () {
				searchCurrent.html($(this).html());
				$(this).closest(searchFilter).removeClass('search__filter_open');
				$(this).closest(searchFilter).addClass('search__filter_active');
			});
			removeSearchFilter.on('click', function () {
				searchCurrent.html(searchCurrentTxt);
				$(this).closest(searchFilter).removeClass('search__filter_open');
				$(this).closest(searchFilter).removeClass('search__filter_active');
			});
		}
	});
	rememberTrigger.on('click', function () {
		popUpContent.html(rememberPopUpContent);
		// body.addClass('overflow');
		overlay.addClass('active');
		logRegPopup.removeClass('active');
		popUp.addClass('active');
	});
	bonusInfoSuccesTrigger.on('click', function () {
		popUpContent.html(bonusInfoPopUpContent);
		// body.addClass('overflow');
		overlay.addClass('active');
		logRegPopup.removeClass('active');
		popUp.addClass('active');
	});
	depositTrigger.on('click', function () {
		popUpContent.html(depositPopUpContent);
		overlay.addClass('active');
		logRegPopup.removeClass('active');
		popUp.addClass('active');
	});
	withdrawalTrigger.on('click', function () {
		popUpContent.html(withdrawalPopUpContent);
		overlay.addClass('active');
		logRegPopup.removeClass('active');
		popUp.addClass('active');
	});

	$(document).on('submit', rememberSuccesTrigger, function(e) {
		popUpContent.html(rememberSuccesPopUpContent);
	});

	$(document).on('submit', $('.login-form__form'), function(e) {
		body.addClass('on-line');
		overlay.removeClass('active');
		logRegPopup.removeClass('active');
	});



	const exitTrigger = $('.exit-btn'),
		exitPopupContent = $('.exit-content').clone();
	exitTrigger.on('click', function (e) {
		e.preventDefault();
		popUpContent.html(exitPopupContent);
		$('.user-nav').removeClass('user-nav_open');
		overlay.addClass('active');
		popUp.addClass('active');
	});


	popUpClose.on('click', function () {
		body.removeClass('overflow');
		overlay.removeClass('active');
		popUp.removeClass('active');
	});

	// Bonus Info PopUp
	let bonusPopBtn = $('.bonus-info__trigger'),
		bonusPop = $('.bonus-info-popup'),
		bonusPopClose = $('.bonus-info-popup__btn-close');

	bonusPopBtn.on('click', function () {
		bonusPop.addClass('bonus-info-popup_open');
	});
	bonusPopClose.on('click', function () {
		bonusPop.removeClass('bonus-info-popup_open');
	});

	// Select Show More
	let selectBox = $('.select_box');
	if(selectBox.length) {
		selectBox.each(function () {
			let grid = $(this).find('.select_box__grid'),
				showMore = $(this).find('.select_box__btn_box .btn'),
				winClone = winNow.clone();

			showMore.on('click', function (e) {
				e.preventDefault();
				grid.addClass('show_more');
					// .closest('.select_box').after(winClone);
			});
		});
	}

	// Widget
	const widgetClose = $('.widget__close_btn'),
		widget = $('.widget');

	widgetClose.on('click', function () {
		overlay.removeClass('active');
		widget.removeClass('active');
	});

	// Main slider
	let mainSlider = $('.main-slider');
	if(mainSlider.length) {
		mainSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			speed: 300,
			fade: true,
			cssEase: 'linear',
			// autoplay: true,
			// autoplaySpeed: 6000,

		});
	}

	// Tournament Slider
	let tournamentTab = $('.tournament__tab');
	if(tournamentTab.length) {
		let tabItem = $('.tournament__tab_item'),
			tabSwap = $('.tab__swap');
		tabSwap.on('click', function () {
			$(this)
				.closest(tournamentTab)
				.find(tabItem)
				.toggleClass('tournament__tab_item_transform');
		});
	}
	let tournamentSlider = $('.tournament__slider');
	if(tournamentSlider.length) {
		tournamentSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			// fade: true,
			// cssEase: 'linear',
			// autoplay: true,
			// autoplaySpeed: 2000,

		});
		// tournamentSlider.init(function () {
		// 	$('.slick-current').find('.tournament__item').addClass('tournament__item_animate');
		// });
		// tournamentSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		// 	$(".slick-slide").find('.tournament__item').removeClass('tournament__item_animate');
		// 	$('.slick-current').find('.tournament__item').addClass('tournament__item_animate');
		// });
	}

	// Bonus slider
	let bonusSlider = $('.bonus__slider');
	if(bonusSlider.length) {
		bonusSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
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
			autoplay: true,
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

	// Partner slider
	let partnersSlider = $('.partners');
	if(partnersSlider.length) {
		partnersSlider.slick({
			slidesToShow: 11,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1350,
					settings: {
						slidesToShow: 9,
					}
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 7,
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 6,
					}
				},
				{
					breakpoint: 750,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		});
	}

	// Variables for function
	 let themFilter = $('.them-filter'),
		contact = $('.contact');

	// Them Filter
	if(themFilter.length) {
		let themFilterObject = $('.them-filter__link');
		themFilterObject.on('click', function (e) {
			e.preventDefault();
			themFilterObject.removeClass('them-filter__link_active');
			$(this).addClass('them-filter__link_active');
		});
	}

	// Action Area
	const actionArea = $('.action-area');
	const actionTrigger = $('.btn-action');
	if(actionArea.length) {
		if(body.hasClass('on-line')) {
			actionTrigger.text('депозит');
			actionTrigger.on('click', function () {
				fastDeposit.addClass('fast-deposit_open');
				overlay.addClass('active');
				actionTrigger.addClass('btn-action-hide');
			});
		} else {
			actionTrigger.text('регистрация');
			actionTrigger.on('click', function () {
				overlay.addClass('active');
				logRegPopup.addClass('active');
			});
		}
	}
	// Login Registration PopUp
	const logRegClose = $('.log-reg-popup__btn-close');
	const LogRegTrigger = $('.reg .btn');
	LogRegTrigger.on('click', function () {
		overlay.addClass('active');
		logRegPopup.addClass('active');
	});
	logRegClose.on('click', function () {
		overlay.removeClass('active');
		logRegPopup.removeClass('active');
	});

	// Fast deposit
	const fastDeposit = $('.fast-deposit');
	if(fastDeposit.length) {
		let fastDepositClose = $('.fast-deposit__btn-close'),
			fastDepositTrigger = $('.user__balance-box.user__balance-box_empty .btn');
		if(window.innerWidth > 766) {
			fastDeposit.addClass('fast-deposit_open');
		}
		fastDepositClose.on('click', function () {
			fastDeposit.removeClass('fast-deposit_open');
			overlay.removeClass('active');
			actionTrigger.removeClass('btn-action-hide');

		});
		fastDepositTrigger.on('click', function () {
			fastDeposit.addClass('fast-deposit_open');
			overlay.addClass('active');
			actionTrigger.addClass('btn-action-hide');
		})
	}

	// Tab
	if ($('.tab').length) {
		let tab = $('.tab');

		tab.each(function () {
			let tabNav = $(this).find('> .tab__nav > li'),
				tabContent = $(this).find('> .tab__content > div');

			tabNav.each(function (i) {
				$(this).attr('data-tab', 'tab-' + i);
			});
			tabContent.each(function (i) {
				$(this).attr('data-tab', 'tab-' + i);
			});

			tabNav.on('click', function (i) {
				let tabNavData = $(this).data('tab'),
					thisTab = $(this).closest(tab);

				$(this).closest(tab).find(tabNav).removeClass('active');
				$(this).addClass('active');

				thisTab.find(tabContent).removeClass('active');
				thisTab.find(tabContent).filter('[data-tab=' + tabNavData + ']').addClass('active');
			});
		});
	}

	// Custom select
	const customSelect = $('.custom-select');
	if(customSelect.length) {
		let customSelectCurrent = $('.custom-select__current'),
			customSelectItem = $('.custom-select__item');

		customSelectCurrent.on('click', function () {
			customSelect.addClass('custom-select_open');
		});
		customSelectItem.on('click', function () {
			customSelectCurrent.html($(this).html());
			customSelect.removeClass('custom-select_open');
		});
	}

	const lang = $('.lang');
	if(lang.length) {
		let langCurrent = $('.lang__current'),
			langCurrentImg = $('.lang__current .lang__img'),
			langList = $('.lang__list'),
			langItem = $('.lang__item'),
			langLink = $('.lang__link');

		langCurrent.on('click', function () {
			langList.addClass('lang__list_open');
		});
		langLink.on('click', function (e) {
			e.preventDefault();
			langItem.removeClass('lang__item_current');
			$(this).closest('.lang__item').addClass('lang__item_current');
			let thisImgValue = $(this).find('.lang__img').attr('src');
			langCurrentImg.attr('src', thisImgValue);
			langList.removeClass('lang__list_open');
		});
	}

	// Toast
	const toast = $('.toast'),
		toastItem = $('.toast__item'),
		toastClose = $('.toast__close');
	toastClose.on('click', function () {
		if(!(toast.find('.toast__item').length > 1)) {
			toast.remove();
		}
		$(this).parent(toastItem).remove();
	});

	// Change Elements
	function AddImg(elementClass, imgClass) {
		$('.'+ elementClass).removeClass().addClass(elementClass +' '+ imgClass);
	}
	function ChangeElements() {
		let windowWidth = window.innerWidth;
		if(windowWidth > 760) {
			AddImg('main_bg', 'img760');
		}
		if(windowWidth > 479) {
			themFilter.after(winNow);
			// gameCompany.before(winNow);
		} else {
			contact.before(winNow);
		}
		if(windowWidth < 1200) {
			let gameItem = $('.game_item');
			gameItem.on('click', function () {
				overlay.addClass("active");
				widget.addClass("active");
			});
		}
	}
	ChangeElements();
	let resizeTimeout;
	$(window).resize(function () {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			ChangeElements();
		}, 400);
	});

function getElements(query){
	let arr = document.querySelectorAll(query);

	return Array.from(arr);
}

	// *******************************************************************************************
// JS SHIT CODE
	const fullScreen = $('.play-game__nav-item--fullscreen'),
		gameBox = $('.play-game__box');

	fullScreen.on('click', function(){
		console.log('work');
		$(this).toggleClass('active');
		gameBox.toggleClass('full-screen');
	});

	const avatarList = $('.avatar__list'),
		avatarCurrent = $('.avatar__current');
	avatarCurrent.on('click', function () {
		avatarList.toggleClass('active');
	})
});


