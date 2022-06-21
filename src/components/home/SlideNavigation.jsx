import * as React from "react"
import Button from "../button/Button"

const SlideNav = (props) => {

    return (
        <div className="fixed-top h-100 justify-content-center" id="slidenav">
            {props.links.map((slide, index) => {
                return (
                    <div key={index} id={"nav-button-" + index}>
                        <span/>
                    <Button href={slide.goto} text={slide.text} innerClass=" px-4" dataType="glass"/>
                    </div>
                )
            })}
        </div>
    )
}

SlideNav.defaultProps = {
    links: [{
        goto: "",
        text: ""
    }]
}

export default SlideNav