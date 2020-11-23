/**
 * Demo Scripts
 */

(function( $ ){
	"use strict";

	/**
	 * Add to cart button
	 */
	$(document).on('click', '.js-add-to-cart', function(e){
		e.preventDefault();
		alert('Added to cart');
	});

	/**
	 * Product like icon toggle heart icon
	 */
	$(document).on('click', '.js-like', function(e){
		e.preventDefault();
		$(this).find('.fa-heart').toggleClass('fal fas');
	});


})( jQuery );