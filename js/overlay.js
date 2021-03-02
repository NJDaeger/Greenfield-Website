$(document).ready(function() {
	$("#menuButton").click(function() {
		var menu = $("#menu");
		if (menu.hasClass("openMenu")) {
			menu.stop();
			menu.animate({
				right: "-50%",
				opacity: "0"
			}, 950, "easeInOutExpo");
			menu.removeClass("openMenu");
		} 
		else {
			menu.stop();
			menu.animate({
				right: "0%",
				opacity: "1"
			}, 950, "easeInOutExpo");
			menu.addClass("openMenu");
		}
	});
});

function setHeaderAndFooter(rootDir) {
	var imgDir = "../";
	if (rootDir == undefined) {
		rootDir = "";
		imgDir = "";
	}
	document.getElementById("header").innerHTML = 
	"<script type=\"" + rootDir + "text/javascript\">"
	+	"document.body.classList.remove('js-stop-transition')"
	+ "</script>"
	+ "<div class=\"toolbar\" class=\"js-stop-transition\">"
	+ 	"<!-- Home button -->"
	+	"<div id=\"homeButton\">"
	+		"<a href=\"" + imgDir + ".\">" 
	+			"<img src = \"" + imgDir + "images/logo.svg\" >"
	+		"</a>"
	+	"</div>"
	+	"<!-- Main links -->"
	+	"<div id=\"links\">"
	+		"<ul>"
	+			"<li ><a href=\"http://map.greenfieldmc.net\" target=\"_blank\">Dynmap</a></li>"
	+			"<li id=\"large\"><a href=\"http://apply.greenfieldmc.net\" target=\"_blank\">Apply</a></li>"
	+			"<li id=\"large\"><a href=\"" + rootDir + "/downloads\">Downloads</a></li>"
	+			"<li id=\"medium\"><a href=\"http://patreon.greenfieldmc.net\" target=\"_blank\">Patreon</a></li>"
	+			"<li id=\"medium\"><a href=\"" + rootDir + "/about\">About</a></li>"
	+		"</ul>"
	+	"</div>"
	+		"<!-- Menu button -->"
	+	"<div id=\"menuButton\">"
	+		"<div></div>"
	+		"<div></div>"
	+		"<div></div>"
	+	"</div>"
	+	"<div id=\"menu\">"
	+		"<ul>"
	+			"<hr>"
	+			"<li><a href=\"" + rootDir + "/about/\">About</a></li>"
	+			"<hr>"
	+			"<li><a href=\"" + rootDir + "/downloads/\">Downloads</a></li>"
	+			"<hr>"
	+			"<li><a href=\"http://apply.greenfieldmc.net\" target=\"_blank\">Apply</a></li>"
	+			"<hr>"
	+			"<li><a href=\"" + rootDir + "/photography/\">Photography</a></li>"
	+			"<hr>"
	+			"<li><a href=\"" + rootDir + "/staff/\">Staff</a></li>"
	+			"<hr>"
	+			"<li><a href=\"" + rootDir + "/official-links/\">Official Links</a></li>"
	+			"<hr>"
	+		"</ul>"
	+ 	"</div>"
	+ "</div>";

	document.getElementById("footer").innerHTML =
	"<footer>"
	+	"<p>The Greenfield Project &#169; 2021</p>"
	+	"<p>contact@greenfieldmc.net</p>"
	+"</footer>";
}