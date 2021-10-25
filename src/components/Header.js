import * as React from "react"
import '../styles/header.scss'
import '../styles/default.scss'
import logo from "../images/logo.svg"
import Menu from "./Menu";

const burgerClick = () => {
    var menu = document.getElementById("menu").classList;
    var burger = document.getElementById("hamburger").classList;
    if (burger.contains("active")) burger.remove("active");
    else burger.add("active");
    if (menu.contains("no-anim")) menu.remove("no-anim");
    if (menu.contains("show")) menu.remove("show");
    else menu.add("show");
};

const Header = () => {

    return (
        <>
            <nav className="navbar fixed-top">
                <div className="container-fluid justify-content-start column col-3" id="brand">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="GFMC" />
                    </a>
                </div>
                <div className="container-fluid justify-content-center col-6" id="links">
                    <ul className="navbar-nav flex-fill">
                        <li className="navbar-item">
                            <a href="#" className="nav-link d-none d-md-block swift-link">Apply</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link d-none d-sm-block swift-link">Downloads</a>
                        </li>
                        <li className="navbar-item">
                            <a href="https://map.greenfieldmc.net" className="nav-link swift-link">Dynmap</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link d-none d-sm-block swift-link">Patreon</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link d-none d-md-block swift-link">About</a>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid justify-content-end col-3">
                    <div id="hamburger" className="col-12" onClick={burgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <Menu/>
        </>
    )
}

export default Header