(function($, Drupal) {

/* LAYOUT 
------------------ */
Drupal.behaviors.removeEmptyRegions = {
  attach: function (context, settings) {
    $(".layout > .layout__region:not(.layout-builder__region)", context).once('removeEmpty').each(function(){  
      if(!$(this).children().length){
        $(this).remove();
      }
    });
  }
}

/* BACK TO TOP
------------------ */
Drupal.behaviors.backToTop = {
  attach: function (context, settings) {
    $("html.js", context).once('backTop').each(function(){
      $(window).scroll(function(){
        var back = $(window).height() * .8;
        if ($(this).scrollTop() > back ) {
          $('.back-anchor').fadeIn(200);
        }else{
          $('.back-anchor').fadeOut(200);
        }
      });
      //scroll to toc
      $('.back-anchor a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $('body').offset().top - 10
        });
      });
    });
  }
}

/* BLOCK LAYOUT PATH CHANGE
----------------------- */
Drupal.behaviors.blockLink = {
  attach: function (context, settings) {
    $('.role-site_manager:not(.role-administrator) a[href="/admin/structure/block"]', context).once('changeBlockUIPath').each(function(){
      $(this).attr('href','/admin/structure/block/block-content').text('Custom Blocks');
    });
  }
};

})(jQuery, Drupal);
