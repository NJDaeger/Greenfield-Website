import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Button from "../button/Button"
import ScreenMedia from "../screenmedia/ScreenMedia"

const HomeSlide = (props) => {

    return (
        <div className={"justify-content-center slide align-items-center d-flex " + (props.startHidden ? "hidden" : "hidden showing")} id={props.id} index={props.index}>
            <div className="slide-content">
                <h3 className="justify-content-center d-flex animateFirst">{props.title}</h3>
                <h1 className="justify-content-center d-flex animateSecond">{props.focus}</h1>
                {props.thirdRowContent}
            </div>
            <ScreenMedia src={props.src} alt={props.alt}/>
        </div>
    )
}

HomeSlide.defaultProps = {
    id: "",
    src: "",
    alt: "",
    title: "",
    focus: "",
    index: 0,
    startHidden: false,
    thirdRowContent: <></>
}

export default HomeSlide