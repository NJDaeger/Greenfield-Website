import * as React from "react"
import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import HomeSlide from "../components/home/HomeSlide";
import downtown from "../images/downtown.jpg";
import "../styles/style.scss";
import { GetPageLink } from "../service/linkservice";

const Downloads = () => {

    const getVersionSpan = () => {
        const map = downloads.map[downloads.map.length - 1];
        var version = map.map_version;
        
        const [major, minor] = [version.slice(0, version.lastIndexOf('.')), version.slice(version.lastIndexOf('.') + 1)];
        
        return <><span style={{color:map.color ?? 'white'}}>V</span>{major}.<span style={{color:map.color ?? 'white'}}>{minor}</span></>
    }

    return (
        <>
            <Header/>
            <HomeSlide
                src={downtown}
                focus={<span style={{textShadow:"0 0 2px black, 0 0 10px black"}}>Download Greenfield {getVersionSpan()}</span>}
                thirdRowContent={
                    <div className="animateThird d-flex download-buttons hidden align-items-center showing flex-column flex-lg-row w-100" style={{maxWidth:"80vw"}}>
                        <div className="d-flex flex-column align-items-center w-75">
                            <Button text="Download Greenfield" dataType="glass" innerClass={"py-1"} outerClass={"m-3 w-75 px-3"} href={downloads.map[downloads.map.length - 1].download ?? "#"}></Button>
                            <a href={GetPageLink("./project")} className="swift-link fs-5 link text-center" style={{lineHeight:"normal"}}>Download Older Greenfield Versions</a>
                        </div>
                        <div className="d-flex flex-column align-items-center w-75">
                            <Button text="Download Resourcepack" dataType="glass" innerClass={"py-1"} outerClass={"m-3 w-75 px-3"} href={downloads.pack[downloads.pack.length - 1].download ?? "#"}></Button>
                            <a href={GetPageLink("./resourcepack")} className="swift-link fs-5 link text-center" style={{lineHeight:"normal"}}>Download Older Resourcepack Versions</a>
                        </div>
                    </div>
                }
            ></HomeSlide>
            <h6 className="text-center w-100 bottom-0 mb-2 text-white position-absolute"><a href={GetPageLink('./conditions')} className="link swift-link" target="_blank">By downloading the Greenfield Map or the Greenfield Resourcepack, you agree to follow our Terms and Conditions</a></h6>
        </>
    )

}

export default Downloads;