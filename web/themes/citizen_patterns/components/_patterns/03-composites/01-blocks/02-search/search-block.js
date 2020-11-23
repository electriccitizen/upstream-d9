(function($, Drupal) {
	
//search toggle
Drupal.behaviors.searchToggle = {
	attach: function (context, settings) {
	 	$(".block-site-search").once('tSearch').each(function(){  
	 		$('.t-search', this).click(function(e){
	 			e.preventDefault();
	 			$('#search-form-wrapper').slideDown(400).attr('aria-hidden', 'false');
	 			$('.t-search-close').delay(300).fadeIn(300);
	 			//close main menu if open when search is clicked
	 			$('#superfish-main-accordion.sf-expanded').slideUp(200);
	 			setTimeout(function(){
		 			$('#superfish-main-toggle,#superfish-main-accordion').removeClass('sf-expanded');
		 		}, 200);
	 		});
	 		$('.close-search', this).click(function(e){
	 			e.preventDefault();
	 			$('.t-search-close').fadeOut(300);
	 			$('#search-form-wrapper').delay(200).slideUp(400).attr('aria-hidden', 'true');
	 		});	
		});
	}
}

})(jQuery, Drupal);

