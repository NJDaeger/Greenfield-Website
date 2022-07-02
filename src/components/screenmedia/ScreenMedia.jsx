import * as React from "react"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"

const ScreenMedia = (props) => {
    const [changingImage, setChangingImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(props.src);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        if (!loaded) return;
        setChangingImage(true)
        setTimeout(() => {
            setCurrentImage(props.src);
            setChangingImage(false);
            setLoaded(false);
        }, 500);
    }, [loaded]);

    if (props.src.endsWith(".mp4")) {
        return (
            // <video autoPlay loop muted playsInline className="screen-media" style={style} src={props.src} poster={props.poster}/>
            <video autoPlay loop muted playsInline onEnded={e => e.currentTarget.currentTime=1}>
                <source src={props.src} type="video/mp4" poster={props.poster}/>
            </video>
        )
    } else {
        return (
            <div className="screen-media">
                <img className={changingImage ? "fade animateThird" : ""} src={currentImage} alt={props.alt}/>
                <img src={props.src} alt={props.alt} onLoad={() => {
                    if (loaded == false) setLoaded(true);
                }}/>
            </div>
        )
    }
}

ScreenMedia.defaultProps = {
    poster: "",
    src: "",
    alt: ""
}

export default ScreenMedia;