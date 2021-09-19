$(function() {
    $.ajax({
        url: "../js/delicacy-1.json",
        dataType: "json", //数据类型
        type: "get",
        success: function(data) {
            // console.log(data);
            var titletext = $("title").text();
            if (titletext == "犇腾美食_牛排") {
                // console.log(data.牛排)
                $.each(data.牛排, function(i, v) {
                    // console.log(v)
					var divArray=$("<div class='wow fadeInUp list-div' data-wow-delay=''><div class='img'><img src='"+v.img+"'></div><h3>"+v.title+"</h3><p>"+v.text+"</p></div>");
					$(".content-list").append(divArray);
					$(".list-div:eq(1)").addClass("padd");
					$(".list-div:eq(5)").addClass("padd");
					$(".list-div:eq(7)").addClass("padd");
					$(".list-div:eq(8)").addClass("padd");
					
                })
				
            } else if (titletext == "犇腾美食_小吃") {
                console.log(data.小吃)
				$.each(data.小吃, function(i, v) {
				    // console.log(v)
					var divArray=$("<div class='wow fadeInUp list-div' data-wow-delay=''><div class='img'><img src='"+v.img+"'></div><h3>"+v.title+"</h3><p>"+v.text+"</p></div>");
					$(".content-list").append(divArray);
					$(".list-div:eq(1)").addClass("padd");
					$(".list-div:eq(0)").addClass("padd");
					$(".list-div:eq(6)").addClass("padd");
					
				})
            }else if(titletext == "犇腾美食_饮料") {
                console.log(data.饮料)
				$.each(data.饮料, function(i, v) {
				    // console.log(v)
					var divArray=$("<div class='wow padd fadeInUp list-div' data-wow-delay=''><div class='img'><img src='"+v.img+"'></div><h3>"+v.title+"</h3><p>"+v.text+"</p></div>");
					$(".content-list").append(divArray);
					$(".list-div:eq(1)").removeClass("padd");
					$(".list-div:eq(0)").removeClass("padd");
					$(".list-div:eq(6)").removeClass("padd");
					$(".list-div:eq(4)").removeClass("padd");
					$(".list-div:eq(5)").removeClass("padd");
					
				})
            } else {
                console.log(data.面饭披萨)
				$.each(data.面饭披萨, function(i, v) {
				    // console.log(v)
					var divArray=$("<div class='wow fadeInUp list-div' data-wow-delay=''><div class='img'><img src='"+v.img+"'></div><h3>"+v.title+"</h3><p>"+v.text+"</p></div>");
					$(".content-list").append(divArray);
				})
            }

			$(".list-div:gt(7)").hide();  //默认显示前8个
			$(".fyp-num").click(function(){
				var index=$(this).index()-1;
				// console.log(index)
				$(".list-div").hide();
				$(this).addClass("active").siblings().removeClass("active");
				if(index==0){
					$(".list-div:lt(8)").show();
				}else{
					$(".list-div:lt(12):gt(7)").show();
				}
			})
			$(".prev").click(function(){
				var index=$(".active").index();
				console.log(index)
				if(index==2){
					$(".list-div").hide();
					$(".list-div:lt(8)").show();
					$(".active").removeClass("active").prev().addClass("active")
				}
			})
			$(".next").click(function(){
				var index=$(".active").index();
				console.log(index)
				if(index==1){
					$(".list-div").hide();
					$(".list-div:lt(12):gt(7)").show();
					$(".active").removeClass("active").next().addClass("active")
				}
			})
        }

    })


})