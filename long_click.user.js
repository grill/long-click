// ==UserScript==
// @name        long_click
// @namespace   clicking
// @include     *
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @version     1
// ==/UserScript==
$(document).ready(function() {
var longclick = false;
var cancel = false;

$("a").mousedown(function(e) {
   longclick = true;


   setTimeout(function() {
      if(longclick) {
		 longclick = false;
		 $(e.target).unbind('mousemove');
		 GM_openInTab($(e.target).prop("href"));
		 cancel = true;
      }
   }, 800);

   $(e.target).bind('click', function(event) {
      if(cancel) {
	     cancel = false;
		 event.preventDefault();
	  } else {
         longclick = false;
	  }
	  $(e.target).unbind('click');
   });

   $(e.target).bind('mousemove', function() {
      longclick = false;
	  $(e.target).unbind('mousemove');
   });
});

});