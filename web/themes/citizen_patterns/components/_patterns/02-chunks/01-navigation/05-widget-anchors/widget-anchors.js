(function ($) {

Drupal.behaviors.widgetAnchors = {
	attach: function (context, settings) {
		$(".widget-anchors", context).once('smoothscroll').each(function(){  
    	//open in this section
    	$('.toc-toggle').click(function(e){
    		e.preventDefault();
	      if($(window).outerWidth() < 760){
	        if($(this).is('.active-nav')){
	          $(this).attr('aria-expanded', 'false').removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#toc-title').next('#toc-anchor-wrapper').attr('aria-hidden', 'true').slideUp(500);
	        }else{
	          $(this).attr('aria-expanded', 'true').addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').closest('#toc-title').next('#toc-anchor-wrapper').attr('aria-hidden', 'false').slideDown(500);
	        }
	      }
    	});

    	$(window).on('resize',  _.debounce( mobileAnchorNav, 10 )).trigger('resize');

    	//scroll to anchors
    	$('a:not(.toc-toggle)', this).click(function(e){
    		e.preventDefault();
    		//close the anchor nav and reset arias
    		$('.toc-toggle.active-nav').attr('aria-expanded', 'false').removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#toc-title').next('#toc-anchor-wrapper').attr('aria-hidden', 'true').slideUp(10);
    		//scroll to the anchor
    		var anchor = $(this).attr('href');
    		setTimeout(function(){
    			$('html, body').animate({
            	 scrollTop: $(anchor).offset().top - 100
         	});
    		}, 20);
    	});
   });
  }
};//end widget anchors

function mobileAnchorNav() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 760) {
    //add aria roles to anchors title and wrapper if not already set by click above 
    if(!$('.toc-toggle').attr('aria-controls')){
      $('.toc-toggle').attr({
        'aria-controls': 'toc-anchor-wrapper', 
        'aria-expanded': 'false', 
        'role': 'button'
      });
      $('#toc-anchor-wrapper').attr('aria-hidden', 'true');
    } 
  }else{
    //strip all aria roles & prevent click
    $('.toc-toggle').removeAttr('aria-controls aria-expanded role');
    $('#toc-anchor-wrapper').removeAttr('aria-hidden');
  }
};



})(jQuery);