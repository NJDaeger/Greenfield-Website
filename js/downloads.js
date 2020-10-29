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

$(document).ready(function() {
	$(".map-version").hover(function() {doStart($(this), "map");},function() {doFinish($(this), "map");});
	$(".pack-version").hover(function() {doStart($(this), "pack");},function() {doFinish($(this), "pack");});
	$(".version").hover(function() {
		doStart($(this), "pack");
		doStart($(this), "map");
	},function() {
		doFinish($(this), "pack");
		doFinish($(this), "map");
	});
});