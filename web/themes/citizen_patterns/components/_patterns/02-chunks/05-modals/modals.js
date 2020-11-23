(function($, Drupal) {

/* MODAL WINDOWS
------------------------------------ */
Drupal.behaviors.modal = {
	attach: function (context, settings) {
		$('.modal-trigger', context).once('modal_window').each(function(){
      var modalTrigger = $(this);
      var modalID = modalTrigger.attr('aria-controls');
      var modalItem = $('#' + modalID);
      var modalClose = '#' + modalItem.find('.modal-close').attr('id');

			//open the newsletter modal form on click
      $(this).click(function(e){
        e.preventDefault();
        modalItem.attr('aria-modal','true').addClass('active-modal').show(0).find('.modal-inner').fadeIn(400);
        if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
          modalItem.find('input:first').focus();
        }
        $('body').css('position','fixed');
        return false;
      });
      
      //close the modal form on close click
      $(document).on('click', modalClose, function(e){
        e.preventDefault();
        modalItem.removeAttr('aria-modal').removeClass('active-modal').find('.modal-inner').fadeOut(400).end().hide(0);
        if (!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
          modalTrigger.focus();
        }
        $('body').css('position','static');
        $(document).scrollTop(modalTrigger.offset().top - 200); 
      });

      
      //trap focus
      window.onload = function() {
        setTimeout(function(){
          var firstAnchor = document.getElementById(modalItem.find('.modal-close').attr('id')),
              lastAnchor = document.querySelector('.modal-content *[type="submit"]:last-of-type');

          function keydownHandler(e) {
            var evt = e || window.event;
            var keyCode = evt.which || evt.keyCode;
            if(keyCode === 9) { // TAB pressed
                if(evt.preventDefault) evt.preventDefault();
                else evt.returnValue = false;
                firstAnchor.focus();
            }
          }

          if(lastAnchor.addEventListener) lastAnchor.addEventListener('keydown', keydownHandler, false);
          else if(lastAnchor.attachEvent) lastAnchor.attachEvent('onkeydown', keydownHandler);
        }, 300);
      }
		});
	}
};


})(jQuery, Drupal);
