$(document).ready(function() {
	addNavigation();
	$("#burger svg").click(function() {
		var menu = $("#menu");
		if (menu.hasClass("show")) {
			menu.removeClass("show");
		} else {
			menu.addClass("show");
		}
	});
});

function addNavigation() {
	content = `
		<nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid justify-content-start col-3" id="brand">
                <a href="#" class="navbar-brand">
                    <img src="../images/logo.svg" alt="GFMC" width="70px" height="70px" class="navbar-brand">
                </a>
            </div>
            <div class="container-fluid justify-content-center col-6" id="links">
                <ul class="navbar-nav flex-fill">
                    <li class="navbar-item">
                        <a href="#" class="nav-link d-none d-md-block swift-link">Apply</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link d-none d-sm-block swift-link">Downloads</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link swift-link">Dynmap</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link d-none d-sm-block swift-link">Patreon</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#" class="nav-link d-none d-md-block swift-link">About</a>
                    </li>
                </ul>
            </div>
            <div class="container-fluid justify-content-end col-3" id="burger">
                <svg viewBox="-5 -5 80 75" width="70px" height="70px">
                    <rect width="68" height="9"></rect>
                    <rect y="22" width="68" height="9"></rect>
                    <rect y="44" width="68" height="9"></rect>
                </svg>
            </div>
        </nav>

        <div id="menu">
            <ul class="justify-content-end">
                <li><a href="http://www.youtube.com"><span class="swift-link">Resource Pack Home</span></a></li>
                <li><a href="#"><span class="swift-link">Downloads</span></a></li>
                <li><a href="#"><span class="swift-link">Project Home</span></a></li>
                <li><a href="#"><span class="swift-link">Apply</span></a></li>
                <li><a href="#"><span class="swift-link">Photography</span></a></li>
                <li><a href="#"><span class="swift-link">Staff</span></a></li>
                <li><a href="#"><span class="swift-link">Official Links</span></a></li>
                <li><a href="#"><span class="swift-link">About</span></a></li>
            </ul>
            <div class="container-fluid justify-content-center">
                <p>The Greenfield Project © 2021</p>
                <p>contact@greenfieldmc.net</p>
            </div>  
        </div>
	`
	$("body").prepend(content);
}