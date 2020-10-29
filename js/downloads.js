function doStart(hovered, attrib) {
	var map = hovered.attr(attrib);
	var elem = $("[" + attrib + "=" + map + "]");
	elem.stop();
	elem.animate({
		backgroundColor: "rgba(255,255,255,.75)",
		color: "#000000"
	}, 200, "easeInOutExpo");
}

function doFinish(hovered, attrib) {
	var map = hovered.attr(attrib);
	var elem = $("[" + attrib + "=" + map + "]");
	elem.stop();
	elem.animate({
		backgroundColor: "rgba(0,0,0,0)",
		color: "#D3D3D3"
	}, 200, "easeInOutExpo");
}

function slide(hovered, attrib) {
	var map = hovered.attr(attrib);
	var elem = $(".version[" + attrib + "=" + map + "]");
	// hovered.toggleClass("slideFromRight");
	if (hovered.hasClass("slideFromRight")) {
		hovered.toggleClass("slideFromRight", 100);
		elem.toggleClass("slideFromRight");
	} else {
		hovered.toggleClass("slideFromRight");
		elem.toggleClass("slideFromRight", 100);
	}
/*	elem.stop();
	elem.animate({
		backgroundColor: "rgba(0,0,0,0)",
		color: "#D3D3D3"
	}, 200, "easeInOutExpo");*/
}

$(document).ready(function() {
	$(".map-version").hover(function() {slide($(this), "map");},function() {slide($(this), "map");});
	$(".pack-version").hover(function() {doStart($(this), "pack");},function() {doFinish($(this), "pack");});
	$(".version").hover(function() {
		doStart($(this), "pack");
		doStart($(this), "map");
	},function() {
		doFinish($(this), "pack");
		doFinish($(this), "map");
	});
});