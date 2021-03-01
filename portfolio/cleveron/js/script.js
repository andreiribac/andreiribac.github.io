AOS.init({
	duration: 1500,
	offset: 200,
});

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

function AddToggleClassActive(toggleTrigger) {
	for (let index = 0; index < toggleTrigger.length; index++) {
		const element = toggleTrigger[index];
		element.addEventListener('click', function () {
			this.classList.toggle('active');
			this.parentElement.classList.toggle('active');
		});
	}
}

// Open Mobile Menu
const mobileMenu = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

// Open Mobile Sub Menu
const menuItem = document.querySelectorAll('.mobile-nav__item');
const subMenuBtn = document.querySelectorAll('.mobile-nav__open-btn');

AddToggleClassActive(subMenuBtn);

// Open Language list 
const lang = document.querySelectorAll('.language');
const langCurrent = document.querySelectorAll('.language__current');
const langLink = document.querySelectorAll('.language__link');

AddToggleClassActive(langCurrent);

for (let index = 0; index < langLink.length; index++) {
	const element = langLink[index];
	element.addEventListener('click', function () {
		this.classList.toggle('active');
		this.closest('.language').classList.toggle('active');
	});
}

//  FAQ
const faq = document.querySelectorAll('.faq__item');
const faqTitle = document.querySelectorAll('.faq__quastion');
const faqOpenBtn = document.querySelectorAll('.faq__open-btn');

for (let index = 0; index < faq.length; index++) {
	const element = faq[index];
	element.addEventListener('click', function () {
		this.classList.toggle('active');
	});
}


// Video Section Video
function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i1\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

//  Video section end

// Animation


const $ = jQuery;
// Slider IMG
const bigImgSlider = $('.section-slider__slider');

bigImgSlider.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 800,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,

});
// Slider Media
const mediaSlider = $('.media__slider');
mediaSlider.slick({
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 800,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.arrows__item--prev'),
	nextArrow: $('.arrows__item--next'),
	responsive: [
		{
			breakpoint: 1370,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 770,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});