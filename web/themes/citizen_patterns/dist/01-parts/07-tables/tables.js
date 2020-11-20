"use strict";(function(a,b){/* RESPONSIVE TABLES WITH STACKTABLE
------------------------------------ */b.behaviors.stackTable={attach:function attach(b){a(".layout-container table:not(.ui-datepicker-calendar)",b).once("responsive_table").each(function(){a(this).cardtable({myClass:"responsive-table"}),a(document).ajaxComplete(function(){a(".layout-container table:not(.ui-datepicker-calendar)").cardtable({myClass:"responsive-table"})})})}}})(jQuery,Drupal);
//# sourceMappingURL=tables.js.map
