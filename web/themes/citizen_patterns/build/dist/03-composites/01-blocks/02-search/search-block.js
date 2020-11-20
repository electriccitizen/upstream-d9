"use strict";(function(a,b){//search toggle
b.behaviors.searchToggle={attach:function attach(){a(".block-site-search").once("tSearch").each(function(){a(".t-search",this).click(function(b){//close main menu if open when search is clicked
b.preventDefault(),a("#search-form-wrapper").slideDown(400).attr("aria-hidden","false"),a(".t-search-close").delay(300).fadeIn(300),a("#superfish-main-accordion.sf-expanded").slideUp(200),setTimeout(function(){a("#superfish-main-toggle,#superfish-main-accordion").removeClass("sf-expanded")},200)}),a(".close-search",this).click(function(b){b.preventDefault(),a(".t-search-close").fadeOut(300),a("#search-form-wrapper").delay(200).slideUp(400).attr("aria-hidden","true")})})}}})(jQuery,Drupal);
//# sourceMappingURL=search-block.js.map
