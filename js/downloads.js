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

function slide(hovered, attrib, cls) {
	var map = hovered.attr(attrib);
	var elem = $(".version[" + attrib + "=" + map + "]");

	if (!hovered.hasClass(cls)) {
		hovered.toggleClass(cls);
		setTimeout(function() {
			elem.toggleClass(cls);
		}, 80);
	} else {
		elem.toggleClass(cls);
		setTimeout(function() {
			hovered.toggleClass(cls);
		}, 80);
	}
}

$(document).ready(function() {
	$(".map-version").hover(function() {slide($(this), "map", "slideFromRight");},function() {slide($(this), "map", "slideFromRight");});
	$(".pack-version").hover(function() {slide($(this), "pack", "slideFromLeft");},function() {slide($(this), "pack", "slideFromLeft");});
});