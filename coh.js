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

// News carousel
$("#news-carousel").carousel({
	interval: 10000
});

$(".carousel .carousel-item").each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(":first");
	}
	next
		.children(":first-child")
		.clone()
		.appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(":first");
		}

		next
			.children(":first-child")
			.clone()
			.appendTo($(this));
	}
});
