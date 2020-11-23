(function($, Drupal) {
Drupal.behaviors.sectionMenu = {
	attach: function (context, settings) {
		$(".block--system-menu.section-menu", context).once('section-menu').each(function(){  
			//mobile toggle
			$('.section-menu-toggle').click(function(e){
				e.preventDefault();
		      if($(window).outerWidth() < 980){
		        if($(this).is('.active-nav')){
		          $(this).attr('aria-expanded', 'false').removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#section-menu-title').next('#section-menu-wrapper').attr('aria-hidden', 'true').slideUp(500);
		        }else{
		          $(this).attr('aria-expanded', 'true').addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').closest('#section-menu-title').next('#section-menu-wrapper').attr('aria-hidden', 'false').slideDown(500);
		        }
		      }
			});

			$(window).on('resize',  _.debounce( mobileSectionnav, 10 )).trigger('resize');
					
			//need doc ready because active-class script fires after theme scripts
			$(document).ready(function(){
				$('#section-menu-wrapper ul li').each(function(){
					//find nested lists and set their parents and expanders
					if(($('ul', this).length) && (!$('.expander:first', this).length) ){
					  $(this).addClass('parent').prepend('<a href="#" class="expander" aria-expanded="false" role="button" aria-label="Section Submenu Expander"></a>').find(' > a:not(.expander)').next('ul').attr('aria-hidden', 'true');
					}

					//find active links and set the active trail
					$('.is-active', this).removeAttr('href').siblings('ul').slideDown(100).attr('aria-hidden', 'false').end().parentsUntil('#section-menu-wrapper > ul').addClass('active-trail expanded');

					//find active-trail li and add aria expanded role to the expander
					$('li.active-trail > .expander').attr('aria-expanded', "true").siblings('ul').attr('aria-hidden', 'false');
				});

				//set button roles, tab indexes and keypresses on sidebar links
				$(document).on('click','#section-menu-wrapper .expander',function(e){
					e.preventDefault();
          if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', "true").siblings('ul').slideDown(300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
          }else{
            $(this).attr('aria-expanded', "false").siblings('ul').slideUp(300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
          }
				});
			});
		});
	}
}//end section menu function

function mobileSectionnav() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 980) {
  	$('.section-menu-toggle').attr('href','#');
    //add aria roles to menu title and wrapper if not already set by click above 
    if(!$('.section-menu-toggle').attr('aria-controls')){
      $('.section-menu-toggle').attr({
        'aria-controls': 'section-menu-wrapper', 
        'aria-expanded': 'false'
      });
      $('#section-menu-wrapper').attr('aria-hidden', 'true');
    } 
  }else{
    //strip all aria roles & prevent click
    $('.section-menu-toggle').removeAttr('aria-controls aria-expanded role href');
    $('#section-menu-wrapper').removeAttr('aria-hidden');
  }
};


})(jQuery, Drupal);
