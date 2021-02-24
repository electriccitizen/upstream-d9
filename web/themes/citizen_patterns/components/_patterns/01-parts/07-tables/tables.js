(function($, Drupal) {

/* RESPONSIVE TABLES WITH BASIC TABLE
------------------------------------ */
Drupal.behaviors.basicTable = {
	attach: function (context, settings) {
		$('.layout-container table:not(.ui-datepicker-calendar)', context).once('responsive_table').each(function(){
			$(this).basictable({breakpoint: 760,});
			//check for no table headers
			if(!$('thead',this).length){
				$(this).addClass('no-header');
			}
		});
	}
};

})(jQuery, Drupal);
