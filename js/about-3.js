$(function() {
	$("#province").click(function(){
		$(this).siblings("div").slideDown()
	})
	$("#province-list li").click(function(){
		var text=$(this).children("a").text();
		// console.log(text);
		$("#province").html(text).siblings("div").slideUp()
	})
	
	$("#city").click(function(){
		$(this).siblings("div").slideDown()
	})
	$(".city-list dl dd a").click(function(){
		var text=$(this).text();
		$("#city").html(text).siblings("div").slideUp()
	})
})