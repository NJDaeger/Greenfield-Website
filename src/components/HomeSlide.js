import * as React from "react"
import '../styles/default.scss'
import '../styles/homeslide.scss'
import GlassButton from "./GlassButton"
import ScreenImage from "./ScreenImage"

const HomeSlide = (props) => {
    let button = <></>;
    if (props.btnLink !== "" && props.btnText !== "") {
        button = <GlassButton href={props.btnLink} text={props.btnText} className="fadeAway col-6 col-sm-4 col-xl-2 animateThird"/>;
    }

    return (
        <div className="container-fluid slide align-items-center d-flex" id={props.id}>
            <div className="row mx-auto slide-content">
                <h3 className="fadeAway text-center align-content-center animateFirst">{props.title}</h3>
                <h1 className="fadeAway text-center align-content-center animateSecond">{props.focus}</h1>
                {button}
            </div>
            <ScreenImage src={props.src}/>
        </div>
    )
}

HomeSlide.defaultProps = {
    id: "",
    src: "",
    btnLink: "",
    btnText: "",
    title: "",
    focus: ""
}

export default HomeSlide