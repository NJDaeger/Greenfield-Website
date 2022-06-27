import * as React from "react"
import logo from "../../images/logo.svg"
import Menu from "./Menu";
import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(undefined);
    return (
        <>
            <nav className="navbar fixed-top">
                <div className="container-fluid justify-content-start column col-3" id="brand">
                    <a href="../" className="navbar-brand">
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
                    <div id="hamburger" className={"col-12 " + menuOpen === undefined ? "" : menuOpen ? "active" : "" } onClick={(e) => setMenuOpen(menuOpen === undefined ? true : !menuOpen)}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </nav>
            {menuOpen === undefined ? <></> : <Menu show={menuOpen}/>}
        </>
    )
}

export default Header