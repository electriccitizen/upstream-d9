"use strict";(function(a){//end widget anchors
function b(){var b=a(window).outerWidth();760>b?!a(".toc-toggle").attr("aria-controls")&&(a(".toc-toggle").attr({"aria-controls":"toc-anchor-wrapper","aria-expanded":"false",role:"button"}),a("#toc-anchor-wrapper").attr("aria-hidden","true")):(a(".toc-toggle").removeAttr("aria-controls aria-expanded role"),a("#toc-anchor-wrapper").removeAttr("aria-hidden"))}Drupal.behaviors.widgetAnchors={attach:function attach(c){a(".widget-anchors",c).once("smoothscroll").each(function(){//open in this section
//scroll to anchors
a(".toc-toggle").click(function(b){b.preventDefault(),760>a(window).outerWidth()&&(a(this).is(".active-nav")?a(this).attr("aria-expanded","false").removeClass("active-nav").find("i").removeClass("fa-times-circle").addClass("fa-bars").closest("#toc-title").next("#toc-anchor-wrapper").attr("aria-hidden","true").slideUp(500):a(this).attr("aria-expanded","true").addClass("active-nav").find("i").removeClass("fa-bars").addClass("fa-times-circle").closest("#toc-title").next("#toc-anchor-wrapper").attr("aria-hidden","false").slideDown(500))}),a(window).on("resize",_.debounce(b,10)).trigger("resize"),a("a:not(.toc-toggle)",this).click(function(b){b.preventDefault(),a(".toc-toggle.active-nav").attr("aria-expanded","false").removeClass("active-nav").find("i").removeClass("fa-times-circle").addClass("fa-bars").closest("#toc-title").next("#toc-anchor-wrapper").attr("aria-hidden","true").slideUp(10);//scroll to the anchor
var c=a(this).attr("href");setTimeout(function(){a("html, body").animate({scrollTop:a(c).offset().top-100})},20)})})}}})(jQuery);
//# sourceMappingURL=widget-anchors.js.map
