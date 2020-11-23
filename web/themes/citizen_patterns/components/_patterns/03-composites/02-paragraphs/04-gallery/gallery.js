
(function($, Drupal) {

	//Swipebox script for lightbox images.
	Drupal.behaviors.gallery = {
		attach: function (context, settings) {
			//Featherlight
			$(".gallery-type.lightbox", context).once('lightboxes').each(function(){
				$(document).ready(function(){
					$('.featherlight-gal', this).featherlightGallery({
						previousIcon: '<',
						nextIcon: '>',
						galleryFadeIn: 300,
						openSpeed: 300
					});
				});
			});
			//Slider
			$(".gallery-type.slider", context).once('slider').each(function(){
				$(document).ready(function(){
					$('.field-image-multi', this).slick({
						adaptiveHeight: true,
						autoplay: true,
						autoplaySpeed: 5000
					});
				});
			});
		}
	}

})(jQuery, Drupal);
