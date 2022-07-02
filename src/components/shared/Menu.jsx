import * as React from "react"
import Button from "../button/Button"

const Menu = (props) => {
    return (
        <div id="menu" className={props.show ? "show" : ""}>
            <ul className="justify-content-end">
                <li><Button href={"../downloads"} text={"Downloads"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../project"} text={"Project Home"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"https://wiki.greenfieldmc.net"} text={"Project Wikipedia"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"https://docs.google.com/forms/d/e/1FAIpQLSenockClC1TOL4zEOZo_UMQSXgbiSjlK7F9KLCF_lgqdGT1LQ/viewform"} text={"Apply"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../photography"} text={"Photography"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../staff"} text={"Staff"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../links"} text={"Official Links"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../about"} text={"About"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
                <li><Button href={"../conditions"} text={"Terms of Use"} outerClass="" innerClass="py-1 ps-2" dataType="clear nooutline"/></li>
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