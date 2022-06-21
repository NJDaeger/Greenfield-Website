import * as React from "react"
import { useEffect } from "react"

const style = {
    width: "100%",
    height: "100vh",
    zIndex: 1,
    objectFit: "cover",
    margin: 0,
    overflow: "hidden"
}

const ScreenMedia = (props) => {

    useEffect(() => {
        
    }, [])

    if (props.src.endsWith(".mp4")) {
        return (
            // <video autoPlay loop muted playsInline className="screen-media" style={style} src={props.src} poster={props.poster}/>
            <video autoPlay loop muted playsInline onEnded={e => e.currentTarget.currentTime=1} className="testvideo">
                <source src={props.src} type="video/mp4" poster={props.poster}/>
            </video>
        )
    } else {
        return (
            <img className="screen-media" src={props.src} alt={props.alt} style={style}/>
        )
    }
}

ScreenMedia.defaultProps = {
    poster: "",
    src: "",
    alt: ""
}

export default ScreenMedia;