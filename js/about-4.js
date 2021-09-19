$(function(){
	$("#ulclick li h3").click(function(){
		if(!$(this).siblings("div.li-content").is(":visible")){
			$(this).siblings("div.li-content").slideDown();
			$(this).addClass("active")
		}else{
			$(this).siblings("div.li-content").slideUp();
			$(this).removeClass("active")
		}
	})
})