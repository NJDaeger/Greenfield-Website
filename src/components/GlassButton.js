import * as React from "react"
import '../styles/glassbutton.scss'
import '../styles/default.scss'

const GlassButton = (props) => {
    return (
        <div className={"button container-fluid justify-content-center " + props.className}>
            <a href={props.href} className="justify-content-center align-items-center">{props.text}</a>
        </div>
    )
}

GlassButton.defaultProps = {
    className: "",
    href: "#",
    text: "button"
}

export default GlassButton