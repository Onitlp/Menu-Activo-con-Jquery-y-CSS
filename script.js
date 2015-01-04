$(document).ready(function(){

	$("a.mp").click(function(){

		$("a.mp.activo").removeClass("activo");
		$(this).addClass("activo");	
	});



});