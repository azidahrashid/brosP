$(function() {
	"use strict";
	
	$(window).on("load", function(){
		$("#preloader").fadeOut(1400);
		$("#prealoder-status").delay(300).fadeOut("slow");
		
		setTimeout(function(){
			$(".fadeIn-element").delay(600).css({display:"none"}).fadeIn(2000);
		});
		
		setTimeout(function(){
			
			$(".bottom-credits, .social-icons-wrapper-share, .navigation-bottom").delay(600).css({display:"none"}).fadeIn(2000);
		},0);
		
		
		setTimeout(function(){
			$(".navigation-left").removeClass("left-position");
			
		},600);
		
		setTimeout(function(){
			
			$(".navigation-right").removeClass("right-position");
			
		},600);
		
		
		$(".hero-bg").addClass("hero-bg-show");
		
		$(initAnimation);
		$(initElements);
	});
	
	
	$(window).on("resize", function() {
		
			$(resizeBorders);
			
		});
	
function resizeBorders() {
    $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
    var widthFramework = $(".border-top-1").width();
    var widthTop = $(".center-space-top span").width();
    var widthBottom = $(".center-space-bottom span").width();
    var calculateTop = widthFramework - (widthTop / 2) - 8;
    var calculateBottom = widthFramework - (widthBottom / 2) - 8;
    $(".border-top-1, .border-top-2").width(calculateTop);
    $(".border-bottom-1, .border-bottom-2").width(calculateBottom);
}


var swiper = new Swiper("")

var swiper = new Swiper(".swiper-container-wrapper .swiper-container" , {
	preloadImages:false,
	autoplay:{
		delay:4000,
		disableOnInteraction:false
		},
		
	Init:true,
	loop:flase,
	speed:1200,
	grabCursor:true,
	mousewheel: true,
	keyboard:true,
	simulateTouch: true,
	parallax:true,
	effect:"slide",
	grid:
	pagination: {
		el: ".swiper-slide-pagination",
		clickable: true
	},
	
	navigation: {
		nextEl:".slide-next",
		prevEl:".slide-prev"
			
	}
	
	
	 navigation:
	 pagination:
	 scrollbar:
	 autoplay:
	 free mode:
	 grid:
	 manipulation:
	 parallax:
	 lazy loading:
	 fade effect:
	 coverflow effect:
	 flip effect:
	 cube effect:
	 cards effect:
	 cube effect:true,
	 
	
});





