$(function() {
	$.ajax({
		url: "../js/about-2.json",
		dataType: "json", //数据类型
		type: "get",
		success: function(data) {
			// console.log(data);
			$.each(data, function(i, v) {
				// console.log(v)
				var $li = $(
					"<li class='fl about2-li'><a href='new-img.html' target='_blank'><div class='img'><img src='" +
					v.img + "'><div class='bg'></div></div><h3>" + v.title +
					"</h3><p>" + v.time + "</p></a></li>");
				$("#content-json").append($li);
				
			})

			$(".about2-li:gt(5)").hide();  //默认显示前6个
			// 点击数字
			$(".pager-cl").click(function(){
				var index=$(this).index()-1;
				// console.log(index)
				var a=index*6;
				var c=a-1;
				var b=a+6;
				$(".about2-li").hide();
				$(this).addClass("li-active").siblings().removeClass("li-active");
				if(index==0){
					$(".about2-li:lt(6)").show();
				}else if(index<5){
					$(".about2-li:lt("+b+"):gt("+c+")").show();
				}
			})
			function dp(){
				return false;
			}
			
			$("#pager-prev").click(function(){
				var index=$(".li-active").index()-1;
				console.log(index)
				var a=(index-1)*6;
				var c=a-1;
				var b=a+6;
				if(index>0){
					$(".li-active").removeClass("li-active").prev().addClass("li-active")
					$(".about2-li").hide();
					if(index==1){
						$(".about2-li:lt(6)").show();
					}else if(index<5){
						$(".about2-li:lt("+b+"):gt("+c+")").show();
					}
				}
				
			})
			$("#pager-next").click(function(){
				var index=$(".li-active").index();
				var a=index*6;
				var c=a-1;
				var b=a+6;
				if(index<5){
					$(".li-active").removeClass("li-active").next().addClass("li-active")
					$(".about2-li").hide();
					if(index==0){
						$(".about2-li:lt(6)").show();
					}else if(index<5){
						$(".about2-li:lt("+b+"):gt("+c+")").show();
					}
				}
			})
			
			
		}

	})


})
