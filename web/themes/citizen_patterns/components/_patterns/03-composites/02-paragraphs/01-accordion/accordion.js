(function($, Drupal) {

Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      $(".accordion-item", context).once('accordion').each(function(){
        //open and shut accordions on click
        $('.accordion-header a', this).click(function(e){
          e.preventDefault();
          var activeHeader = $(this).parent('.accordion-header');
          if(activeHeader.closest('.accordion-item.accord-active').length){
            $('.accord-active').removeClass('accord-active');
            activeHeader.next().slideUp(300).attr('aria-hidden', 'true').end().find('a').attr('aria-expanded', "false");
          }else{
            $('.accord-active').find('.field-long-text').slideUp(300).attr('aria-hidden', 'true').end().removeClass('accord-active').find('.accordion-header a').attr('aria-expanded', 'false');
            activeHeader.parent('.accordion-item').addClass('accord-active').end().next().slideDown(300).attr('aria-hidden', 'false').end().find('a').attr('aria-expanded', "true");
            //detect if accordion top is offscreen and scroll to it if it is
            setTimeout(function() {
              var windowTop = $(window).scrollTop();
              var currentAccordion = $('.accord-active').offset().top;
              if(windowTop > currentAccordion){
                $('html, body').animate({
                        scrollTop: $('.accord-active').offset().top - 100
                    });
              }
            }, 510);
          }
        });
      });
    }
}

})(jQuery, Drupal);
