(function($, Drupal) {

/* SELECT2
----------------------- */
Drupal.behaviors.advancedSelect = {
	attach: function (context, settings) {
    $("select", context).once('selects').each(function(){
    	$( 'form:not(.entity-embed-dialog):not(.entity-form-display-form):not(.entity-view-display-form):not(.layout-builder-add-block):not(.layout-builder-update-block) select' ).select2({
    		placeholder: "Select an option"
    	});
      $(".path-node .js-form-type-select", context).once('selectAccessiblity').each(function(){
        $(document).ready(function(){
          $('.select2-search__field').each(function(){
            var label = $(this).closest('.select2-container').siblings('label').text();
            $(this).attr('aria-label',label).removeAttr('role');
          });
        });
      });
   	});
   }
};

/* BLOCK LAYOUT PATH CHANGE
----------------------- */
Drupal.behaviors.blockLink = {
  attach: function (context, settings) {
    $('.role-site_manager:not(.role-administrator) a[href="/admin/structure/block"]', context).once('changeBlockUIPath').each(function(){
      $(this).attr('href','/admin/structure/block/block-content').text('Custom Blocks');
      if($(this).closest('li.tabs__tab').length){
        $(this).closest('li.tabs__tab').remove();
      }
      $('a[href="/admin/structure/block/block-content/types"]').closest('li.tabs__tab').remove();
      $('.admin-list a[href="/admin/structure/block/block-content"]').wrapInner('<span class="label">').append('<div class="description">Manage blocks in the custom block library.</div>');
    });
  }
};

})(jQuery, Drupal);
