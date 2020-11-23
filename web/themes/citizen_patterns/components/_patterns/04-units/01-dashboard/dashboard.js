(function($, Drupal) {

//highlight search results
Drupal.behaviors.dashboard = {
  attach: function (context, settings) {
    $(".user-tour").once('tSearch').each(function(){  
      $(function () {
        if (Cookies.get('userTour')) {
          $('.user-tour').remove();
        }
        else { 
          $('body:not(.role-administrator) .user-tour').show();
        }
      });

      //show text about avatar
      if($('img.avatar').length){
        $('.avatar-note').show();
      }

      //position flags
      $('.flag#admin-nav,.flag#support').prependTo('.layout-container');
      $('.flag#your-dash').prependTo('.block-name');

      $(document).on('click','.tour-advance',function(e){
        var flagId = $(this).attr('aria-controls');
        e.preventDefault();

        $('.tour-nav a').attr('aria-expanded','false');
        $(this).attr('aria-expanded','true');
        $('.tour-nav').hide(0);
        $('.flag').hide(0).attr('aria-hidden','true').removeClass('active-flag');
        $('.tour-reel').animate({'left':'-=300'}, 300);
        $('.tour-nav').delay(300).fadeIn(100);
        $('.flag#' + flagId).delay(500).fadeIn(300).attr('aria-hidden','false').addClass('active-flag');
        $('.content-inner').scrollTop(0);
        
        if(flagId == 'support'){
          if(!$('a.toolbar-icon-shortcut.is-active').length){
            $('a.toolbar-icon-shortcut').trigger('click');
          }
        }
      });

      $(document).on('click','.tour-back',function(e){
        var flagId = $(this).attr('aria-controls');
        e.preventDefault();
        $('.tour-nav a').attr('aria-expanded','false');
        $(this).attr('aria-expanded','true');
        $('.tour-nav').hide(0);
        $('.flag').hide(0).attr('aria-hidden','true');
        $('.tour-reel').animate({'left':'+=300'}, 300);
        $('.tour-nav').delay(300).fadeIn(100);
        $('.flag#' + flagId).delay(500).fadeIn(300).attr('aria-hidden','false');
        $('.content-inner').scrollTop(0);
      });

      $(document).on('click','.tour-close',function(e){
        e.preventDefault();
        $('.flag').remove();
        $(this).closest('.user-tour').fadeTo(10,0,function(){
          $(this).remove();
        });
        Cookies.set('userTour', '1', { expires: 10000 });
      });
    });
  }
}


})(jQuery, Drupal);
