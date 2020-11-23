/**
 * Template Scripts
 */

(function( $ ){
	"use strict";

	/**
	 * Is Mobile
	 */
	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

	/**
	 * Carousel
	 */
	$(window).on('load',function(){
		$('.main-carousel .carousel-item:first').addClass('active');
	});

	/**
	 * Open submenu on hover
	 */
	$('.navbar-nav li .dropdown-toggle').on('mouseenter', function(){
		var windowWidth = $(window).width();
		if(windowWidth > 991){
			$(this).parents('li').addClass('show');
			$(this).parents('li').on('mouseleave', function(){
				$(this).removeClass('show');
			});
		};
	});

	$('.dropdown-toggle').on('click', function(e) {
		var parentClasses = this.parentElement.classList;
		console.log(parentClasses);
		var openStatus;
		if(openStatus == false){
			setTimeout(function(){
				openStatus = parentClasses.contains('show');
				alert(parentClasses);
				if(openStatus == false){
					parentClasses.add('show');
				}
			}, 10);
		}
	});

	/**
	 * Open Search Modal
	 */
	$('.nav-link-search').on('click', function(e){
		e.preventDefault();
		$('.modal-search').modal({
			backdrop: false
		});
		// input focus after open search modal
		setTimeout(function(){
			$('.modal-search').find('.form-control').focus();
		}, 300);
	});

	/**
	 * Zoom product image
	 */
	var customModal = $('<div class="modal fade modal-image"><span class="modal-image-close" data-dismiss="modal"></span><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-body d-flex"></div></div></div></div>');
	$(document).on('click', '.js-zoom-image', function(e){
		e.preventDefault();
		var imgUrl = $(this).attr('href');
		var imgTitle = $(this).attr('data-title');
		$('body').append(customModal);
		$('.modal-image .modal-body').html('<img src="' + imgUrl + '" class="modal-image-item align-self-center" alt="' + imgTitle + '">');
		$('.modal-image').modal('show');
	});
	$('.modal-image').on('hidden.bs.modal', function (e) {
		$(this).remove();
	});

	/**
	 * Nav filter
	 */
	$('.nav-filter > li > a').on('click', function (e) {
		e.preventDefault();

		$(this).parent().siblings().find('a').removeClass('active');
		$(this).addClass('active');
		$('.ajax-load').addClass('loading');

		var thisType = e.target.hash.substring(1);
		/* Alax Load */
		$.ajax({
			dataType: 'html',
			url: 'http://bennet.bootwp.com/html/content/html/' +thisType + '.php',
			crossDomain: true,
			success: function (data) {
				//console.log(data);
				setTimeout(function(){
					$('.ajax-load').html(data);
					setTimeout(function(){
						$('.ajax-load').removeClass('loading');
					}, 100);
				}, 1000);
				
			}
		});

	});

})( jQuery );






