(function($, Drupal) {

/* USER LOGIN PASSWORD SHOW
------------------------------------ */
Drupal.behaviors.userLogin = {
	attach: function (context, settings) {
		$('#user-login-form', context).once('showPass').each(function(){
      $('.show-password').click(function(e){
        e.preventDefault();
        if($(this).is('.show')){
          $(this).removeClass('show').text('Show');
          $('#edit-pass').attr('type', 'password');
        }else{
          $(this).addClass('show').text('Hide');
          $('#edit-pass').attr('type', 'text');
        }
      });
		});
	}
};

/* SELECT 2
------------------------------------ */
Drupal.behaviors.select2 = {
  attach: function (context, settings) {
    $("select", context).once('selects').each(function(){
      $( 'form.views-exposed-form select,form.webform-submission-form select' ).select2({
        placeholder: "Select an option"
      });
      $(".js-form-type-select", context).once('selectAccessiblity').each(function(){
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

})(jQuery, Drupal);
