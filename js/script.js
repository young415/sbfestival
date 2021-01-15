window.alert("수정 중인 웹사이트입니다😸")
window.alert("1920*1080에 적합한 웹사이트입니다!")


$(function(){
	
	var num = 0;
	var moving = false;
	
	loding();
	
	
	function loding(){
		var top = (-1)*num*(window.innerHeight);
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
		console.log("window width : " + winWidth);
		console.log("window height : " + winHeight);
		
		$("#section .page").css({width: winWidth, height: winHeight});
	}; //loding
	
	
	$("body, html").on("mousewheel DOMMouseScroll", function(e){
		var delta = e.originalEvent.wheelDelta;
		//console.log("delta : " + delta);
		var detail = e.originalEvent.detail;
		//console.log("detail : " + detail);
		
		if(moving == false){
			moving = true;
			var h = window.innerHeight;
			var top = $("#section").offset().top;
			
			if(delta<0 || detail>0){
				if(num<3){
					num++;
					top -= h;
				}
			} else if(delta>0 || detail<0){
				if(num>0){
					num--;
					top += h;
				}
			}; //if문
			
			//스크롤 했을 때 animate 효과
			
			var program = $(".program_inner h1").offset().top;
			
			$(".program_contents").hide();
			if(program>top ){
				$(".program_contents").show().animate({marginTop: "50px", opacity: 1}, 1200);
			}
			
			//console.log("#program : " + program)
			console.log("window.innerHeight : " + h)

			console.log("window scrollTop : " + $(window).scrollTop())
			//console.log("#recommend : " + $("#recommend").offset().top)
			
			var recommend = $(".recommend_inner").offset().top;
			if(top<-h){
				$(".recommend_wrap").animate({top:"50%", opacity: 1}, 1200)
			}
			//console.log("recommend : " + recommend)
			
			var notice = $("#notice").offset().top;
			if(notice == h ){
				$(".notice1").animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice2").delay(100).animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice3").delay(200).animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice4").delay(300).animate({marginTop: "50px", opacity: 1}, 1000)
			}
			console.log("notice : " + notice)
		};
		
		$("#section").animate({top: top}, 500, function(){
			
			moving = false;
			$(".nav ul li").siblings().removeClass("on");
			$(".nav ul li").eq(num).addClass("on");
		}); //$(".section").animate
		
		console.log("top : " + top);
		//console.log("wheelDelta : " + delta);
		//console.log("number : " + num);
		
		
		
	}); //mousewheel
	
	function resize(){
		var top = (-1)*num*(window.innerHeight);
		$("#section").css({top: top});
		$("#section .page").css({width: window.innerWidth, height: window.innerHeight});
	}; //resize
	
	$(window).resize(function(){
		resize();
	}); //$(window).resize
	
	$(".nav ul li").click(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		
		var n = $(this).index();
		console.log("n : " + n);
		var pos = -n*100;
		console.log("pos : " + pos)
		$("#section").animate({top: pos+"vh"}, 500);
		$(".program_contents").hide();
			if(pos==-100){
				$(".program_contents").show().animate({marginTop: "50px", opacity: 1}, 1200);
			}
			
			if(pos==-200){
				$(".recommend_wrap").animate({top:"50%", opacity: 1}, 1200)
			}
			
			var notice = $("#notice").offset().top;
			if(pos==-300){
				$(".notice1").animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice2").delay(100).animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice3").delay(200).animate({marginTop: "50px", opacity: 1}, 1000)
				$(".notice4").delay(300).animate({marginTop: "50px", opacity: 1}, 1000)
			}
			
	});//$(".nav ul li").click;
	
	$(".notice_more").hide(0);
	$(".notice_box").hover(function(){
		$(this).find(".notice_more").stop().slideDown();
	}, function(){
		$(this).find(".notice_more").stop().slideUp();
	});
	
	$(".notice_more a").hover(function(){
		$(this).parent().parent().siblings().find("span").removeClass("on");
		$(this).find("span").addClass("on");
	}, function(){
		$(this).find("span").removeClass("on");
	}); //$(".notice_more a").hover
	
	$(".notice_box").hover(function(){
		$(this).siblings().find("span").removeClass("text_on");
		$(this).find("span").addClass("text_on");
	}, function(){
		$(this).find("span").removeClass("text_on")
	}); //$(".notice_box").hover
	
	//슬라이드 fadeinout
	var n = 0;
	var img = 1;
	$(".slide_wrap>div").eq(0).siblings().hide(0);
	
	setInterval(next,5000)
	var n=0;
	
	$(".next, .pre").click(function(){
		next();
	});
	
	
	function next(){
		if(n==0){
			$(".slide_wrap>div").eq(n).fadeOut(1000);
			$(".slide_wrap>div").eq(n+1).fadeIn(1000);
			n++;
		} else{
			$(".slide_wrap>div").eq(1).fadeOut(1000);
			$(".slide_wrap>div").eq(0).fadeIn(1000);
			n=0;
		}
	};
	
	
}); //전체 function