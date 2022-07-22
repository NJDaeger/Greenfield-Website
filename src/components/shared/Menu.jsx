import * as React from "react"
import Button from "../button/Button"
import {getLink, GetPageLink} from "../../service/linkservice"
import { useState } from "react"

/**
 * 
 * @param {boolean|undefined} show undefined to not show this by default, true to show this, false to hide it
 * @returns 
 */
const Menu = (props) => {

    return (
        <div id="menu" className={props.show ? "show" : ""}>
            <ul className="justify-content-end overflow-scroll">
                <li><Button href={GetPageLink("./downloads")} text={"Downloads"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={GetPageLink("./project")} text={"Project Home"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={GetPageLink("./resourcepack")} text={"Resourcepack Home"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getLink("projectwiki")} text={"Project Wiki"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getLink("application")} text={"Apply"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                {/* <li><Button href={GetPageLink("./photography")} text={"Photography"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li> */}
                {/* <li><Button href={GetPageLink("./staff")} text={"Staff"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li> */}
                <li><Button href={GetPageLink("./official-links")} text={"Official Links"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={GetPageLink("./about")} text={"About"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={GetPageLink("./conditions")} text={"Terms of Use"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
            </ul>
            <div className="container-fluid justify-content-center" id="footer">
                <p>The Greenfield Project © 2022</p>
                <p>contact@greenfieldmc.net</p>
            </div>  
        </div>
    )
}

export default Menu
