"use strict";(function(a,b){b.behaviors.pager={attach:function attach(b){a(".count-shim",b).once("page-menu").each(function(){//add pager counter to results
var b=a(".count-shim").html();a(".pager__current").append(b),7<b?(a("nav.pager").addClass("results-pager"),a(".results-count").prependTo(".pager").wrap("<div class=\"results-count-wrapper\"></div>"),a(".pager__number,.results-count").show()):a(".pager__current").show()})}}})(jQuery,Drupal);
//# sourceMappingURL=pager.js.map
