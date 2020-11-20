(function($, Drupal) {

Drupal.behaviors.webformElementToggle = {
	attach: function (context, settings) {
    $(".webform-details-toggle-state", context).once('filterToggle').each(function(){
      $(this).click(function(){
        var state = $(this).text();
        if(state === 'Collapse all'){
          $(this).addClass('expanded');
        }else{
          $(this).removeClass('expanded');
        }
      });
   	});
   }
};



})(jQuery, Drupal);
