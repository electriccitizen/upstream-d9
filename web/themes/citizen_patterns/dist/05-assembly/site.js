"use strict";(function(a,b){/* LAYOUT 
------------------ */b.behaviors.removeEmptyRegions={attach:function attach(b){a(".layout > .layout__region:not(.ui-sortable)",b).once("removeEmpty").each(function(){a(this).children().length||a(this).remove()})}/* BACK TO TOP
------------------ */},b.behaviors.backToTop={attach:function attach(b){a("html.js",b).once("backTop").each(function(){//scroll to toc
a(window).scroll(function(){var b=.8*a(window).height();a(this).scrollTop()>b?a(".back-anchor").fadeIn(200):a(".back-anchor").fadeOut(200)}),a(".back-anchor a").click(function(b){b.preventDefault(),a("html, body").animate({scrollTop:a("body").offset().top-10})})})}/* BLOCK LAYOUT PATH CHANGE
----------------------- */},b.behaviors.blockLink={attach:function attach(b){a(".role-site_manager:not(.role-administrator) a[href=\"/admin/structure/block\"]",b).once("changeBlockUIPath").each(function(){a(this).attr("href","/admin/structure/block/block-content").text("Custom Blocks")})}}})(jQuery,Drupal);
//# sourceMappingURL=site.js.map
