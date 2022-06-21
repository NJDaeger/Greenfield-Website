import * as React from "react"
import Button from "../button/Button"

const Menu = (props) => {
    return (
        <div id="menu" className={props.show ? "show" : ""}>
            <ul className="justify-content-end">
                <li><Button href={"#"} text={"Downloads"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Project Home"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Apply"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Photography"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Staff"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Official Links"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"About"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
                <li><Button href={"#"} text={"Terms of Use"} outerClass="" innerClass="py-1 ps-2" dataType="light nooutline"/></li>
            </ul>
            <div className="container-fluid justify-content-center" id="footer">
                <p>The Greenfield Project © 2022</p>
                <p>contact@greenfieldmc.net</p>
            </div>  
        </div>
    )
}

Menu.defaultProps = {
    show: false
}

export default Menu