(function($, Drupal) {

/* PREVIEW ACTION & FIXED
----------------------- */
Drupal.behaviors.previewAction = {
	attach: function (context, settings) {
    $("#edit-citizen-preview", context).once('has-preview').each(function(){
		  //trigger preview
		  $(document).on('click','#edit-citizen-preview',function(e) {
		    e.preventDefault();
		    $('.responsive-preview-icon-active').trigger('click');
		  });
		});
  }
};

})(jQuery, Drupal, drupalSettings);
