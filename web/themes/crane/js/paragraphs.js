(function($, Drupal) {

/* VIEW PLACER SELECT LIST FUNCTIONALITY
----------------------- */
Drupal.behaviors.viewPlacer = {
  attach: function (context, settings) {
    $('.field--name-field-view.field--widget-options-select', context).once('isViewPLacer').each(function(){
      $(document).ajaxComplete(function() {
        $('.field--name-field-view.field--widget-options-select').each(function(){
          var view = $(this);
          var chosen = $('select', this).find("option:selected").val().replace(/_/g, '-');
          view.nextAll('.field--widget-options-select').hide();
          view.siblings('.field--name-field-' + chosen + '-displays').show();
          $(this).find('select').change(function(){
          	$('.field--name-field-view.field--widget-options-select .description').show();
            var choice = $(this).find("option:selected").val().replace(/_/g, '-');
            console.log(choice);
            view.nextAll('.field--widget-options-select').hide();
          	view.siblings('.field--name-field-' + choice + '-displays').show();
          });
        });
      });
    });
  }
};

})(jQuery, Drupal);