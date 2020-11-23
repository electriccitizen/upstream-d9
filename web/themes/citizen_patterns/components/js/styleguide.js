

/* HIDE DEFAULT PATTERN LAB NAV & HEADER
---------------------------- */
$(".sg-colors").once('pl-script').each(function(){  
 	$('#sg-vp-wrap', window.parent.document).css({'top':'0','z-index':'5'});
 	$('#sg-gen-container,#sg-viewport', window.parent.document).css({'width':'100%'});
 	$('header.sg-header', window.parent.document).css({'opacity':'0'});
 	$('#sg-viewport', window.parent.document).css({'margin':'0 auto'});
});

/* CUSTOM STYLEGUIDE NAV
----------------------- */
$(document).ready(function(){
	$('.style-nav-toggle a').click(function(e){
		e.preventDefault();
		//open and shut the nav drawer
		if($('.style-nav-toggle.is-open').length){
		 	$('.style-nav-toggle').removeClass('is-open').closest('#styleguide-nav').animate({'left':'-205'}, 300);
		}else{
			$('.style-nav-toggle').addClass('is-open').closest('#styleguide-nav').animate({'left':'0'}, 300);
		}
	});

	//open sub groups on hover
	$('.parent-group').hover(function() {
    $(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'200px'}, 300);
  }, function(){
  	$(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'0'}, 300);
  });

  //scroll to link target on click and close the nav
  $('#pattern-groups a').each(function(){
  	var target = '#group-' + $(this).attr('data-group-target');
  	var device = $(this).attr('data-device');
  	$(this).click(function(e){
  		e.preventDefault();
  		$('.style-nav-toggle').removeClass('is-open').closest('#styleguide-nav').animate({'left':'-205'}, 300);
	  	$('.sub-group-patterns').animate({'left':'0'}, 300);
  		if($(target).length){
	  		$('html, body').animate({scrollTop: $(target).offset().top - 100});
  		}else{
  			if(device == 'mobile'){
  				$('#sg-viewport', window.parent.document).animate({'width':'520px'}, 300);
		  	}else if(device == 'tablet'){
		  		$('#sg-viewport', window.parent.document).animate({'width':'880px'}, 300);
		  	}else{
		  		$('#sg-viewport', window.parent.document).animate({'width':'100%'}, 300);
		  	}
  		}
  	});
  });
});

/* SF MOBILE FAKE
------------------- */
$('#chunks-superfish #superfish-main-toggle').click(function(){
	if(!$(this).is('.sf-expanded')){
		$(this).addClass('sf-expanded').find('.fas').removeClass('fa-bars').addClass('fa-times-circle');
		$('.sf-accordion').show().addClass('sf-expanded');
	}else{
		$(this).removeClass('sf-expanded').find('.fas').removeClass('fa-times-circle').addClass('fa-bars');
		$('.sf-accordion').hide().removeClass('sf-expanded');
		$('li.sf-expanded').removeClass('sf-expanded').find('> ul').hide().addClass('sf-hidden');
	}
});

$(document).on('click', '.sf-accordion .sf-accordion-button', function(){
	var controller = $(this).closest('li');
	if(!$(controller).is('.sf-expanded')){
		$(controller).siblings().removeClass('sf-expanded').find('> ul').slideUp(300).addClass('sf-hidden');
		$(controller).addClass('sf-expanded').find('> ul.sf-hidden').slideDown(300).removeClass('sf-hidden');
	}else{
		$(controller).removeClass('sf-expanded').find('> ul').slideUp(300).addClass('sf-hidden');
	}
});

$(window).on('resize',  _.debounce( mobileMainMenu, 10 )).trigger('resize');

function mobileMainMenu() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 980) {
    $("ul.sf-horizontal").removeClass('sf-horizontal').addClass('sf-accordion sf-accordion-with-buttons');
  }else{
    $("ul.sf-accordion").removeClass('sf-accordion sf-accordion-with-buttons').addClass('sf-horizontal');
  }
};

/* PAGE SECTION MENU
------------------- */
$(document).ready(function(){
	$('#section-menu-wrapper a.is-active').parentsUntil('#section-menu-wrapper > ul').addClass('active-trail expanded');
});
$('.section-menu-toggle').click(function(){
  if($(window).outerWidth() < 980){
    if($(this).is('.active-nav')){
      $(this).removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#section-menu-title').next('#section-menu-wrapper').slideUp(500);
    }else{
      $(this).addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').closest('#section-menu-title').next('#section-menu-wrapper').slideDown(500);
    }
  }
});
$('#section-menu-wrapper .expander').click(function(){
	var controller = $(this).closest('li');
  if(!$(controller).is('.expanded')){
		$(controller).siblings().removeClass('expanded').find('> ul').slideUp(300);
		$(controller).addClass('expanded').find('> ul').slideDown(300);
	}else{
		$(controller).removeClass('expanded').find('> ul').slideUp(300);
	}
});

/* ANCHOR NAVIGATION MOBILE TOGGLE
------------------- */
$('.toc-toggle').click(function(){
	var controller = $(this).closest('#toc-title');
  if(!$(controller).is('.active-nav')){
		$(controller).addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').end().next().slideDown(300);
	}else{
		$(controller).removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').end().next().slideUp(300);
	}
});

/* FILTERS
------------------- */
$('input[type="submit"]').click(function(e){
	e.preventDefault();
});

/* PAGER
------------------- */
$('#chunks-pager .count-shim').each(function(){  
	//add pager counter to results
	var count = $('#chunks-pager .count-shim').html();
	$('#chunks-pager .pager__current').append('<span>' + count + '</span>');
	if(count > 7){
		$('#chunks-pager nav.pager').addClass('results-pager');
		$('#chunks-pager .results-count').prependTo('#chunks-pager .pager').wrap('<div class="results-count-wrapper"></div>');
		$('#chunks-pager .pager__number,#chunks-pager .results-count').show();
	}else{
		$('#chunks-pager .pager__current').show();
	}
});
$('#chunks-pager #pager-numbers').change(function(){
	var pCount = $(this).val();
	$('#chunks-pager .count-shim').html(pCount);
	var count = $('#chunks-pager .count-shim').html();
	$('#chunks-pager .pager__current').find('span').remove().end().append('<span>' + count + '</span>');
	var perPage = $('#chunks-pager .per-page').html();
	var total = pCount * perPage;
	$('#chunks-pager .total-items').html(total);
	if(count > 7){
		$('#chunks-pager nav.pager').addClass('results-pager');
		if(!$('#chunks-pager .results-count-wrapper').length){
			$('#chunks-pager .results-count').prependTo('#chunks-pager .pager').wrap('<div class="results-count-wrapper"></div>');
		}
		$('#chunks-pager .pager__number,#chunks-pager .results-count,#chunks-pager .results-count-wrapper').show();
		$('#chunks-pager .pager__current').hide()
	}else{
		$('#chunks-pager nav.pager').removeClass('results-pager');
		$('#chunks-pager .pager__current').show();
		$('#chunks-pager .pager__number,#chunks-pager .results-count,#chunks-pager .results-count-wrapper').hide();
	}
});

/* SEARCH
------------------- */
$('#composites-pl-search-block .t-search').click(function(){
	$('#search-form-wrapper').slideDown(300);
	$('.t-search-close').delay(300).fadeIn(300);
});
$('.t-search-close').click(function(){
	$('.t-search-close').fadeOut(300);
	$('#search-form-wrapper').slideUp(300);
});

/* NEWSLETTER
------------------- */
$('#composites-pl-newsletter .block-newsletter .modal-trigger').click(function(){
	$('#newsletter-modal').show(0).find('.modal-inner').fadeIn(400);
});
$('.block-newsletter .modal-close').click(function(){
	$('#newsletter-modal').find('.modal-inner').fadeOut(400).end().hide(0);
});


/* PARAGRAPHS
------------------ */
//accordions
$('.accordion-header a').click(function(){
  var activeHeader = $(this).parent('.accordion-header');
  if(activeHeader.closest('.accordion-item.accord-active').length){
    $('.accord-active').removeClass('accord-active');
    activeHeader.next().slideUp(300);
  }else{
    $('.accord-active').find('.field-long-text').slideUp(300).end().removeClass('accord-active');
    activeHeader.parent('.accordion-item').addClass('accord-active').end().next().slideDown(300);
  }
});

//toggle image sizes
$(".image-options select").change(function(){
	var chosen = $(this).find('option:selected').val();
	$('#composites-pl-image .image-wrapper').fadeTo(200,0, function() {
		$(this).delay(400).removeClass('default full large medium small').addClass(chosen);
	});
	$('#composites-pl-image .image-wrapper').fadeTo(800,100);
});


//toggle between galleries
$(".gallery-options select").change(function(){
	var chosen = $(this).find('option:selected').val();
	if(chosen == 'slider'){
		$('#composites-pl-gallery .paragraph--type--gallery.lightbox').fadeOut(500);
		$('#composites-pl-gallery .paragraph--type--gallery.slider').delay(500).removeClass('in-active');
	}else{
		$('#composites-pl-gallery .paragraph--type--gallery.slider').addClass('in-active');
		$('#composites-pl-gallery .paragraph--type--gallery.lightbox').fadeIn(500);
	}
});

//lightbox
$(".gallery-type.lightbox").each(function(){
	$(document).ready(function(){
		$('.featherlight-gal', this).featherlightGallery({
			previousIcon: '<',
			nextIcon: '>',
			galleryFadeIn: 300,
			openSpeed: 300
		});
	});
});

//Slider
$(".gallery-type.slider").each(function(){
	$(document).ready(function(){
		$('.field-image-multi', this).slick({
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000
		});
	});
});

// Links & Files
$(document).ready(function(){  
	//hide any items past the default number displayed
	var count = $('#lf-numbers').val();
	var lastShown = $('#composites-pl-links-files .lf-item[data-item="' + count + '"]');
	lastShown.nextAll().hide();
});
$('#lf-numbers').change(function(){
	//when the current number displayed changes, show it and all previous and hide all the rest
	var count = $('#lf-numbers').val();
	var lastShown = $('#composites-pl-links-files .lf-item[data-item="' + count + '"]');
	lastShown.fadeIn(200).prevAll().fadeIn(200).end().nextAll().fadeOut(200);
	//reset the multi-col class depending on the count
	if(count < 5){
		$('#composites-pl-links-files .links-files').removeClass('multi-col');
	}else{
		$('#composites-pl-links-files .links-files').addClass('multi-col');
	}
});
$('lf-item a').click(function(e){
	e.preventDefault();
});

//section
$('#section-style').change(function(){
	var chosen = $(this).find('option:selected').val();
	$('#composites-pl-sections .field-paragraphs > .section').fadeTo(200,0, function() {
		if(chosen == 'none'){
			$(this).delay(200).removeClass('background grey').addClass('backless');
		}else{
			$(this).delay(200).removeClass('backless').addClass('background ' + chosen);
		}
	});
	$('#composites-pl-sections .field-paragraphs > .section').fadeTo(500,100);
});
$('#section-layout').change(function(){
	var chosen = $(this).find('option:selected').val();
	$('#composites-pl-sections .field-paragraphs > .section').fadeTo(200,0, function() {
		if(chosen == 'two-column'){
			$(this).delay(200).removeClass('full three-column').addClass('two-column');
		}else if(chosen == 'three-column'){
			$(this).delay(200).removeClass('two-column full').addClass('three-column');
		}else{
			$(this).delay(200).removeClass('two-column three-column').addClass('full');
		}
	});
	$('#composites-pl-sections .field-paragraphs > .section').fadeTo(500,100);
});

/* CARDS
------------------- */
//views 
$('#card-type').change(function(){
	var chosen = $(this).find('option:selected').val();
	$('#composites-views .view-content').fadeTo(200,0, function() {
		if(chosen == 'horizontal'){
			$(this).delay(200).removeClass('grid').find('.views-row').removeClass('vertical').addClass('horizontal');
		}else{
			$(this).delay(200).addClass('grid').find('.views-row').removeClass('horizontal').addClass('vertical');
		}
	});
	$('#composites-views .view-content').fadeTo(500,100);
});

/* LAYOUT
--------------- */
//footer
$('.site-footer a').click(function(e){
	e.preventDefault();
});

//tabs layout section
$('.layout__region--tabs .region-content').each(function(){
  var tabItems = $(this).children();
  if(tabItems.length > 1){
    $(this).wrapInner('<div class="tabs-wrapper"></div>');
    $('.tabs-wrapper', this).prepend('<ul class="tabs-header"></ul>');
    tabItems.each(function(){
      var tabTitle = $('.block-title', this).text();
      var tabId = 'tab' + Math.floor((Math.random() * 100) + 1);
      var tabControl = '<li><a href="#" class="tab-control" aria-expanded="false" aria-controls="' + tabId + '">' + tabTitle + '</a></li>';
      $('.tabs-header').append(tabControl);
      $(this).wrapAll('<div id="' + tabId + '" class="tab-item" aria-hidden="true"></div>');
    });
    $('.tab-item:first').attr('aria-hidden', 'false').addClass('open-tab');
    $('.tab-control:first').attr('aria-expanded', 'true').addClass('active-tab');
  }
  $('.tab-control').click(function(e){
    e.preventDefault();
    if(!$(this).is('.tab-control.active-tab')){
      var tabTrigger = $(this).attr('aria-controls');
      $('.active-tab').removeClass('active-tab').attr('aria-expanded', 'false');
      $('.open-tab').removeClass('open-tab').attr('aria-hidden', 'true').hide();
      $(this).addClass('active-tab').attr('aria-expanded', 'true');
      $('.tab-item#' + tabTrigger).addClass('open-tab').attr('aria-hidden', 'false').fadeIn(500);
    }
  });
});

/* CONTENT TYPES
------------------ */
// LANDING PAGE
//scroll to anchors
$('#toc-anchor-wrapper a:not(.toc-toggle)').click(function(e){
	e.preventDefault();
	//close the anchor nav and reset arias
	$('.toc-toggle.active-nav').attr('aria-expanded', 'false').removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#toc-title').next('#toc-anchor-wrapper').attr('aria-hidden', 'true').slideUp(10);
	//scroll to the anchor
	var anchor = $(this).attr('href');
	$('html, body').animate({
    	 scrollTop: $(anchor).offset().top - 100
 	});
});

//EVENT
$('.map-open').click(function(){
	$('.map-overlay').fadeIn(300);
});
$('.map-close').click(function(){
	$('.map-overlay').fadeOut(300);
});

/* SITE SEARCH
------------------ */
//find searched value if not null and highlight each word
if($('.search-page-block .js-form-item-site-search-api-fulltext input').val()){
  var searchString = $('.search-page-block .js-form-item-site-search-api-fulltext input').val().split(' ');
  
  $.fn.wrapInTag = function(opts) {

    var tag = opts.tag
      , words = opts.words || []
      , regex = RegExp(words.join('|'), 'gi') // case insensitive
      , replacement = '<'+ tag +'>$&</'+ tag +'>';

    return this.html(function() {
      return $(this).text().replace(regex, replacement);
    });
  };

  $('.site-search .views-field-body-1').wrapInTag({
    tag: 'mark class="search-highlight"',
    words: searchString
  });
}

//copy pager setup from chunks pager
$('#units-site-search .count-shim').each(function(){  
	//add pager counter to results
	var count = $('#units-site-search .count-shim').html();
	$('#units-site-search .pager__current').append('<span>' + count + '</span>');
	if(count > 7){
		$('#units-site-search nav.pager').addClass('results-pager');
		$('#units-site-search .results-count').prependTo('#units-site-search .pager').wrap('<div class="results-count-wrapper"></div>');
		$('#units-site-search .pager__number,#units-site-search .results-count').show();
	}else{
		$('#units-site-search .pager__current').show();
	}
});
