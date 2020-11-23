(function($, Drupal) {

//highlight search results
Drupal.behaviors.searchHighlight = {
	attach: function (context, settings) {
	 	$(".search-results").once('tSearch').each(function(){  


      //find searched value if not null and highlight each word
      if($('#edit-site-search-api-fulltext', this).val()){
        var searchString = $('#edit-site-search-api-fulltext', this).val().split(' ');
        
        $.fn.wrapInTag = function(opts) {

          var tag = opts.tag
            , words = opts.words || []
            , regex = RegExp(words.join('|'), 'gi') // case insensitive
            , replacement = '<'+ tag +'>$&</'+ tag +'>';

          return this.html(function() {
            return $(this).text().replace(regex, replacement);
          });
        };

        $('.views-field-body-1').wrapInTag({
          tag: 'mark class="search-highlight"',
          words: searchString
        });
      }
      
		});
	}
}



})(jQuery, Drupal);



