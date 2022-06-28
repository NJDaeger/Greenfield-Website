import * as React from "react"
import Button from "../button/Button"
import ScreenMedia from "../screenmedia/ScreenMedia"

const HomeSlide = (props) => {
    // let button = <></>;
    // if (props.btnLink !== "" && props.btnText !== "") {
    //     button = <Button href={props.btnLink} text={props.btnText} click={props.click()} outerClass="animateThird" innerClass="p-3" dataType="glass"/>;
    // }

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
    // btnLink: "",
    // btnText: "",
    title: "",
    focus: "",
    index: 0,
    startHidden: false,
    thirdRowContent: <></>
    // click: () => {}
}

export default HomeSlide