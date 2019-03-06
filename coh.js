// Make bouncing arrow bounce and be visible on landing page
$(function() {
	var w = $(window);
	w.scroll(function() {
		if (w.scrollTop() !== 0) {
			$(".d-arrow").removeClass("visible");
			$(".fa-sort-down").removeClass("bounce");
			return;
		}

		$(".d-arrow").addClass("visible");
		$(".fa-sort-down").addClass("bounce");
	});

	$(".d-arrow").addClass("visible");
	$(".fa-sort-down").addClass("bounce");
});

// Shrink Navbar
$(window).scroll(function() {
	if (window.innerWidth >= 576) {
		if ($(document).scrollTop() > 50) {
			$("nav").addClass("shrink");
		} else {
			$("nav").removeClass("shrink");
		}
	}
});

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});
    

// News carousel
$("#news-carousel").carousel({
	interval: 10000
});
$("#quote-carousel").carousel({
	interval: 10000
});
