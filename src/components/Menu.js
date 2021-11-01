import * as React from "react"
import '../styles/default.scss'
import '../styles/menu.scss'

const Menu = () => {
    return (
        <div id="menu" className="no-anim">
            <ul className="justify-content-end">
                <li><a href="http://www.youtube.com"><span className="swift-link">Resource Pack Home</span></a></li>
                <li><a href="#"><span className="swift-link">Downloads</span></a></li>
                <li><a href="#"><span className="swift-link">Project Home</span></a></li>
                <li><a href="#"><span className="swift-link">Apply</span></a></li>
                <li><a href="#"><span className="swift-link">Photography</span></a></li>
                <li><a href="#"><span className="swift-link">Staff</span></a></li>
                <li><a href="#"><span className="swift-link">Official Links</span></a></li>
                <li><a href="#"><span className="swift-link">About</span></a></li>
            </ul>
            <div className="container-fluid justify-content-center">
                <p>The Greenfield Project © 2021</p>
                <p>contact@greenfieldmc.net</p>
            </div>  
        </div>
    )
}

export default Menu