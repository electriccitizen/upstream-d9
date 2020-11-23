"use strict";(function(a,b){//highlight search results
b.behaviors.searchHighlight={attach:function attach(){a(".search-results").once("tSearch").each(function(){//find searched value if not null and highlight each word
if(a("#edit-site-search-api-fulltext",this).val()){var b=a("#edit-site-search-api-fulltext",this).val().split(" ");a.fn.wrapInTag=function(b){var c=b.tag,d=b.words||[],e=RegExp(d.join("|"),"gi")// case insensitive
;return this.html(function(){return a(this).text().replace(e,"<"+c+">$&</"+c+">")})},a(".views-field-body-1").wrapInTag({tag:"mark class=\"search-highlight\"",words:b})}})}}})(jQuery,Drupal);
//# sourceMappingURL=search.js.map
