$(function(){
	// 点击出现搜索框
	$(".search>i").click(function(){
		$("#search-model").css({"display":"block"})
	})
	// 点击关闭搜索框
	$("#btn-model-up").click(function(){
		$("#search-model").css({"display":"none"})
	})
	// 点击出现导航 下拉
	$("#head-menu").click(function(){
		var $dwidth=$("body,html").width();
		// console.log($dwidth)
		if($dwidth>992){
			/* 大于992出现大屏导航 */
			$("#nav-listD").slideDown(400);
			// 点击关闭导航 上拉
			$("#menu-close").click(function(){
				$("#nav-listD").slideUp(400)
			})
		}else{
			/* 小于992出现小屏导航 */
			var $fwidth=$("#small-nav").width();
			console.log($fwidth);
			$("#message").hide();
			$(".section1-content,.banner-content").css("position","initial");
			$("#small-nav").animate({"right":"-"+0+"px"});
			$("body").animate({"left":"-"+$fwidth+"px"});
			$("#menu").css("position","absolute");
			$("#gbxnav").click(function(){
				
				$("#small-nav").animate({"right":"-100%"});
				$("body").animate({"left":0+"px"});
				$("#message").show(500);
				$("#menu").css("position","fixed");
				$(".section1-content,.banner-content").animate({"position":"fixed"},500);
			})
			// 留言板消失
			
		}
		
	})
	
	// 经过出现二级导航
	
	$("#D-nav li").hover(function(){
		// $(this).next().css({"display":"block"})
		$(this).find('.navigation').stop().fadeIn()
	},function(){
		// $(this).next().css({"display":"none"})
		$(this).find('.navigation').stop().fadeOut()
	})
	
	// xptab
	$("#snav-tab a").click(function(){
		var $index=$(this).index();
		$(this).addClass("xpnactive").siblings().removeClass("xpnactive");
		$("#snav-bottom>div:eq("+$index+")").removeClass("hide").siblings().addClass("hide");
	})
	// 点击小箭头滑动出现二级导航
	
	$("#S-nav li .next-dpnav").click(function(){
		var $xpnText=$(this).prev().text();
		console.log($xpnText);
		$(".snav-wrongl").css("opacity","1");
		if($xpnText=="关于我们"){
			$(".snav-er div:eq(0)").removeClass("hide").siblings("div").addClass("hide")
			$("#snav-main").animate({"left":"-100%"},500)
			$("#xpfht").html("关于我们")
		}else{
			$(".snav-er div:eq(1)").removeClass("hide").siblings("div").addClass("hide")
			$("#snav-main").animate({"left":"-100%"},500)
			$("#xpfht").html("犇腾美食")
		}
		$(".snav-wrongl").click(function(){
			$("#snav-main").animate({"left":"0"},500);
			$(".snav-wrongl").css("opacity","0").next().html("")
		})
	})
	
	// 小屏搜索关键字Search
	$("#xpsearch").keyup(function(){
		$("#S-nav li").show()
		var $text=$(this).val();
		console.log($text)
		console.log($("#S-nav li a").find("a:contains('" + $text + "')").parent())
		$("#S-nav li").find("a:contains('" + $text + "')").parent("li").show().siblings().hide()
	})
	
	// 点击关闭/打开留言板
	$("#message-btn").click(function(){
		if($("#message-content").is(":visible")){
			$("#message-btn i:eq(0)").addClass("hide").next().removeClass("hide");
			$("#message-content").slideUp(300);
		}else{
			$("#message-btn i:eq(1)").addClass("hide").prev().removeClass("hide");
			$("#message-content").slideDown(300);
		}
	})
})