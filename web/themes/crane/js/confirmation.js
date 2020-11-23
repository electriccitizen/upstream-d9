(function($, Drupal) {

Drupal.behaviors.saveConfirm = {
	attach: function (context, settings) {
    $(".confirm-link", context).once('loseChanges').each(function(){
      $(this).click(function(e){
        if($(this).hasClass('block-confirm')){
          cont = confirm('This block must be edited in the custom block library. Continuing will lose all unsaved content.');
        }else if($(this).hasClass('form-confirm')){
          cont = confirm('This form must be edited in the Webform UI. Make your changes in the new tab that will open.');
        }else{
          cont = confirm('Continuing will lose all unsaved content.');
        }
        if (!cont) {
          e.preventDefault();
        }
      });
   	});
   }
};



})(jQuery, Drupal);
