var lastScroll = 0;
var page = 0;
var pages = {
	0: "#welcome",
	1: "#project",
	2: "#resource",
	3: "#team"
};

function nextSlide(nextIndex, currentIndex) {
	if (Date.now() - lastScroll < 600) return;
	else lastScroll = Date.now();
	page = parseInt(nextIndex);

	var next = $("[index=" + nextIndex + "]");
	//Getting the currently selected page
	var current = $("[index=" + currentIndex + "]");

	//Getting the ID names of the current page and the next page
	var currentId = pages[currentIndex];
	var nextId = pages[nextIndex];

	//The current page and next page objects
	var currentPage = $(currentId);
	var nextPage = $(nextId);

	//Determine the direction of the image animation and determine the where the next slide needs to come from
	var animateDirection = currentIndex > nextIndex ? "100%" : "-100%";
	var prevDirection = currentIndex > nextIndex ? "-100%" : "100%";

	current.removeClass("checked")
	next.addClass("checked");

	currentPage.stop();
	currentPage.animate({
		top: animateDirection
	}, 750, "easeInOutExpo", function() {
		$(currentId + " .title h3").removeClass("animateFirst");
		$(currentId + " .title h1").removeClass("animateSecond");
		$(currentId + " .title div").removeClass("animateThird");
	});

	nextPage.css({"top":prevDirection});
	nextPage.stop();
	nextPage.animate({
		top: "0%"
	}, 725, "easeInOutExpo");
	$(nextId + " .title h3").addClass("animateFirst");
	$(nextId + " .title h1").addClass("animateSecond");
	$(nextId + " .title div").addClass("animateThird");
}

$(document).keydown(function(e) {
	var dir = e.which == 38 ? -100 : (e.which == 40 ? 100 : 0);
	if (dir != 0) {
		if (page > 0 && page < 3) {
			nextSlide(dir < 0 ? page - 1 : page + 1, page);
		} else if (page == 0 && dir > 0) {
			nextSlide(page + 1, page);
		} else if (page == 3 && dir < 0) {
			nextSlide(page - 1, page);
		}
	}
});

$(document).ready(function() {
	$(window).on('wheel', function(event) {
		var dir = event.originalEvent.deltaY;
		if (page > 0 && page < 3) {
			nextSlide(dir < 0 ? page - 1 : page + 1, page);
		} else if (page == 0 && dir > 0) {
			nextSlide(page + 1, page);
		} else if (page == 3 && dir < 0) {
			nextSlide(page - 1, page);
		}
	});
	
	$(".sidebar div div").click(function() {
		var next = $(this);
		var current = $('div[class="checked"]');
		var currentIndex = current.attr('index');
		var nextIndex = next.attr('index');
		if (currentIndex != nextIndex) nextSlide(nextIndex, currentIndex);
	});
});
