"use strict";(function(a,b){/* MODAL WINDOWS
------------------------------------ */b.behaviors.modal={attach:function attach(b){a(".modal-trigger",b).once("modal_window").each(function(){var b=a(this),c=b.attr("aria-controls"),d=a("#"+c),e="#"+d.find(".modal-close").attr("id");//open the newsletter modal form on click
//close the modal form on close click
//trap focus
a(this).click(function(b){return b.preventDefault(),d.attr("aria-modal","true").addClass("active-modal").show(0).find(".modal-inner").fadeIn(400),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||d.find("input:first").focus(),a("body").css("position","fixed"),!1}),a(document).on("click",e,function(c){c.preventDefault(),d.removeAttr("aria-modal").removeClass("active-modal").find(".modal-inner").fadeOut(400).end().hide(0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||b.focus(),a("body").css("position","static"),a(document).scrollTop(b.offset().top-200)}),window.onload=function(){setTimeout(function(){function a(a){var c=a||window.event,d=c.which||c.keyCode;9===d&&(c.preventDefault?c.preventDefault():c.returnValue=!1,b.focus())}var b=document.getElementById(d.find(".modal-close").attr("id")),c=document.querySelector(".modal-content *[type=\"submit\"]:last-of-type");c.addEventListener?c.addEventListener("keydown",a,!1):c.attachEvent&&c.attachEvent("onkeydown",a)},300)}})}}})(jQuery,Drupal);
//# sourceMappingURL=modals.js.map
