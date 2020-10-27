$(document).ready(function() {
	$("#menuButton").click(function() {
		var menu = $("#menu");
		if (menu.hasClass("openMenu")) {
			menu.stop();
			menu.animate({
				right: "-25%",
				opacity: "0"
			}, 750, "easeInOutExpo");
			menu.removeClass("openMenu");
		} 
		else {
			menu.stop();
			menu.animate({
				right: "0%",
				opacity: "1"
			}, 750, "easeInOutExpo");
			menu.addClass("openMenu");
		}
	});
});