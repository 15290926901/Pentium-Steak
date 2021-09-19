$(function(){
	$("#D-video").click(function(){
		$("#video").removeClass("hide");
	})
	$("#close").click(function(){
		$(this).parent().addClass("hide");
	})
})