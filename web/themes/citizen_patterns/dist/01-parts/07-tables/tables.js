"use strict";(function(a,b){/* RESPONSIVE TABLES WITH BASIC TABLE
------------------------------------ */b.behaviors.basicTable={attach:function attach(b){a(".layout-container table:not(.ui-datepicker-calendar)",b).once("responsive_table").each(function(){a(this).basictable({breakpoint:760}),a("thead",this).length||a(this).addClass("no-header")})}}})(jQuery,Drupal);
//# sourceMappingURL=tables.js.map
