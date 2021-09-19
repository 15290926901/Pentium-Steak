$(function() {
    // 点击播放视频1
    $("#loopvideo1").click(function() {
        $("#vedio-loop").show()
    })
    var i = 0;
    $("#sloop").click(function() {
        i++;
        if (i == 1) {
            play()
            $(this).hide()
        } else {
            $(this).show()
        }

    })
    var djloop = document.getElementById("djloop");

    function play() {
        djloop.play()
    }

    // 点击关闭视频1
    $("#video-up").click(function() {
        $("#vedio-loop").hide()
    })

    // 新品上市
    // 上一个
    $("#xpssprev").click(function() {
            var index = $(".posiRela").index();
            var width = $("html").width() + 17;
            if (width > 640) {
                if (index == 3) {
                    $(".ldlbcontent>div:eq(1)").animate({
                        "left": "33.5%"
                    }, 500)
                    $(".ldlbcontent>div:eq(2)").animate({
                        "left": "67%"
                    }, 500)
                    $(".ldlbcontent>div:eq(3)").animate({
                        "left": "100.5%"
                    }, 500)
                    $(".ldlbcontent .posiRela").removeClass("posiRela").prev().addClass("posiRela");
                } else if (index > 0) {
                    $(".ldlbcontent .posiRela").removeClass("posiRela").prev().addClass("posiRela");
                }
               
            }else{
				if (index == 3) {
				    $(".ldlbcontent>div:eq(1)").animate({
				        "left": "0%"
				    }, 500)
				    $(".ldlbcontent>div:eq(2)").animate({
				        "left": "50%"
				    }, 500)
				    $(".ldlbcontent>div:eq(3)").animate({
				        "left": "100%"
				    }, 500)
				    $(".ldlbcontent .posiRela").removeClass("posiRela").prev().addClass("posiRela");
				} else if(index==2){
					$(".ldlbcontent>div:eq(1)").animate({
					    "left": "50%"
					}, 500)
					$(".ldlbcontent>div:eq(2)").animate({
					    "left": "100%"
					}, 500)
					$(".ldlbcontent>div:eq(3)").animate({
					    "left": "150%"
					}, 500)
					$(".ldlbcontent .posiRela").removeClass("posiRela").prev().addClass("posiRela");
				}
				else if (index > 0) {
				    $(".ldlbcontent .posiRela").removeClass("posiRela").prev().addClass("posiRela");
				}
			}
				$("#rdimg>div:eq(" + (index-1) + ")").removeClass("hide").siblings().addClass("hide");
				 $("#lrld>div:eq(" + (index-1) + ")").removeClass("hide").siblings().addClass("hide");
        })
        // 下一个
    $("#xpshnext").click(function() {
        console.log($("html").width() + 17)
        var index = $(".posiRela").index();
        var width = $("html").width() + 17;
        if (width > 640) {
            if (index > 2) {
                $(".ldlbcontent>div:eq(3)").addClass("posiRela");
            } else if (index == 2) {
                $(".ldlbcontent>div:eq(1)").animate({
                    "left": "0%"
                }, 500)
                $(".ldlbcontent>div:eq(2)").animate({
                    "left": "33.5%"
                }, 500)
                $(".ldlbcontent>div:eq(3)").animate({
                    "left": "67%"
                }, 500)
                $(".ldlbcontent .posiRela").removeClass("posiRela").next().addClass("posiRela");

            } else {
                $(".ldlbcontent .posiRela").removeClass("posiRela").next().addClass("posiRela");
            }
           
        }else{
			if (index > 2) {
			    $(".ldlbcontent>div:eq(3)").addClass("posiRela");
			} else if (index == 1) {
			    $(".ldlbcontent>div:eq(1)").animate({
			        "left": "0%"
			    }, 500)
			    $(".ldlbcontent>div:eq(2)").animate({
			        "left": "50%"
			    }, 500)
			    $(".ldlbcontent>div:eq(3)").animate({
			        "left": "100%"
			    }, 500)
			    $(".ldlbcontent .posiRela").removeClass("posiRela").next().addClass("posiRela");
			
			}else if(index==2){
				$(".ldlbcontent>div:eq(1)").animate({
				    "left": "-50%"
				}, 500)
				$(".ldlbcontent>div:eq(2)").animate({
				    "left": "0%"
				}, 500)
				$(".ldlbcontent>div:eq(3)").animate({
				    "left": "50%"
				}, 500)
				$(".ldlbcontent .posiRela").removeClass("posiRela").next().addClass("posiRela");
			}
			 else {
			    $(".ldlbcontent .posiRela").removeClass("posiRela").next().addClass("posiRela");
			}
		}
			$("#rdimg>div:eq(" + (index+1) + ")").removeClass("hide").siblings().addClass("hide");
			$("#lrld>div:eq(" + (index+1) + ")").removeClass("hide").siblings().addClass("hide");
        console.log(index);
    })
	
	
})