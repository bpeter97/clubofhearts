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

// var t, s;
// (s = document.querySelector(".parallax")),
// 	window.addEventListener(
// 		"DOMContentLoaded",
// 		function a() {
// 			var e, n;
// 			window.scrollX,
// 				(t = window.scrollY),
// 				(e = 0),
// 				(n = 0.02 * t),
// 				(s.style.transform = "translate3d(" + e + ", " + n + "px, 0)"),
// 				// (s.style.transform = "translateY(" + n + "px"),
// 				requestAnimationFrame(a);
// 		},
// 		!1
// 	);

// News carousel
$("#news-carousel").carousel({
	interval: 10000
});
$("#quote-carousel").carousel({
	interval: 10000
});

$("#news-carousel .carousel-item").each(function() {
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
