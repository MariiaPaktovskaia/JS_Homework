jQuery(document).ready(function($){
	$(".fa-navicon").on("click", function(){
		$(".Burger").slideToggle();
		
	});
});


var mouseHandled = false;
$( document ).mouseup( function() {
	mouseHandled = false;
});