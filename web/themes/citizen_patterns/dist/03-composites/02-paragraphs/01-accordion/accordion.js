"use strict";(function(a,b){b.behaviors.accordion={attach:function attach(b){function c(b){setTimeout(function(){a("html, body").animate({scrollTop:b.offset().top-100})},20),d(b.parent(".accordion-header"))}function d(b){a(".accord-active").find(".field-long-text").slideUp(300).attr("aria-hidden","true").end().removeClass("accord-active").find(".accordion-header a").attr("aria-expanded","false"),b.parent(".accordion-item").addClass("accord-active").end().next().slideDown(300).attr("aria-hidden","false").end().find("a").attr("aria-expanded","true")}a(".accordion-item",b).once("accordion").each(function(){a(".accordion-header a",this).click(function(b){b.preventDefault();var c=a(this).parent(".accordion-header");c.closest(".accordion-item.accord-active").length?(a(".accord-active").removeClass("accord-active"),c.next().slideUp(300).attr("aria-hidden","true").end().find("a").attr("aria-expanded","false")):(d(c),setTimeout(function(){var b=a(window).scrollTop(),c=a(".accord-active").offset().top;b>c&&a("html, body").animate({scrollTop:a(".accord-active").offset().top-100})},510))});var b=a(this).find(".accordion-header a").attr("id");b&&a("a[href='#"+b+"']").click(function(b){b.preventDefault(),c(a(a(this).attr("href")))})});var e=window.location.hash.substr(0);e&&a(e).once("accordionscroll").each(function(){$activeHeader=a(this).parent(".accordion-header"),$activeHeader&&d($activeHeader)})}}})(jQuery,Drupal);
//# sourceMappingURL=accordion.js.map
