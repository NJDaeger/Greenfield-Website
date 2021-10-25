import * as React from "react"
import '../styles/default.scss'

const style = {
    width: "100%",
    height: "100vh",
    zIndex: 1,
    objectFit: "cover",
    margin: 0
}

const ScreenImage = (props) => {
    return (
        <img src={props.src} alt={props.alt} className="align-content-center inline-block" style={style}></img>
    )
}

export default ScreenImage