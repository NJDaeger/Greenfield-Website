import * as React from "react"
import Button from "../button/Button"
import {getLink, getPageLink} from "../../service/linkservice"
import { useState } from "react"

/**
 * 
 * @param {boolean|undefined} show undefined to not show this by default, true to show this, false to hide it
 * @param {object} windowInfo information about the current window location
 * @returns 
 */
const Menu = (props) => {
    const [info, setInfo] = useState(props.windowInfo);
    console.log(info);
    console.log("menu ^:")
    return (
        <div id="menu" className={props.show ? "show" : ""}>
            <ul className="justify-content-end">
                <li><Button href={getPageLink(info, "./downloads")} text={"Downloads"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./project")} text={"Project Home"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./resourcepack")} text={"Resourcepack Home"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getLink("projectwiki")} text={"Project Wikipedia"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getLink("application")} text={"Apply"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./photography")} text={"Photography"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./staff")} text={"Staff"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./links")} text={"Official Links"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./about")} text={"About"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={getPageLink(info, "./conditions")} text={"Terms of Use"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
            </ul>
            <div className="container-fluid justify-content-center" id="footer">
                <p>The Greenfield Project © 2022</p>
                <p>contact@greenfieldmc.net</p>
            </div>  
        </div>
    )
}

export default Menu
