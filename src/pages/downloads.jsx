import * as React from "react"
import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown";
import { useState } from "react";
import downtown from "../images/downtown.jpg";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import "../styles/style.scss";
import { getPageLink } from "../service/linkservice";
import {useLocation} from "@reach/router";

const Downloads = () => {
    const loc = useLocation();
    const [windowInfo, setWindowLocation] = useState({origin: loc.origin, href: loc.href});

    const getMcVersionList = () => {
        const versions = [];
        downloads.map.forEach(mp => {
            var version = mp.mc_version;
            if (version === undefined) return;
            if (version.includes("-")) {
                var splitVersions = version.split("-");
                var first = splitVersions[0];
                var firstMinor = parseInt(first.slice(first.lastIndexOf(".") + 1));
                var last = splitVersions[1];
                var lastMinor = parseInt(last.slice(last.lastIndexOf(".") + 1));

                if (!versions.includes(first.trim())) versions.push(first.trim());
                for (var i = firstMinor; i < lastMinor; i++) {
                    var vsion = "1." + i;
                    if (!versions.includes(vsion.trim())) versions.push(vsion.trim());
                }
                if (!versions.includes(last.trim())) versions.push(last.trim());
            }
            else {
                if (!versions.includes(version.trim())) versions.push(version.trim());
            }
        });
        var last = versions.pop();
        versions[versions.length] = last + " +";
        return versions;
    }

    const [versions, setMinecraftVersions] = useState(getMcVersionList());
    const [selectedVersion, setSelectedVersion] = useState(versions[versions.length-1])

    const getMapFromVersion = () => {
        return downloads.map.find(download => {
            console.log(download);
            var version = download.mc_version;
            if (version === undefined) return false;
            if (version.includes("-")) {
                var selected = selectedVersion.includes("+") ? selectedVersion.replace("+", "") : selectedVersion;
                var selectedMinor = parseInt(selected.slice(selected.lastIndexOf(".") + 1))
                var splitVersions = version.split("-");
                var first = splitVersions[0];
                var firstMinor = parseInt(first.slice(first.lastIndexOf(".") + 1));
                var last = splitVersions[1];
                var lastMinor = parseInt(last.slice(last.lastIndexOf(".") + 1));
                return firstMinor <= selectedMinor && lastMinor >= selectedMinor;
            } else return version.trim() === selectedVersion;
        });
    }

    const getPackFromVersion = () => {

    }

    const getVersionSpan = () => {
        const map = getMapFromVersion();
        var version = map.map_version;
        
        const [major, minor] = [version.slice(0, version.lastIndexOf('.')), version.slice(version.lastIndexOf('.') + 1)];
        
        return <><span style={{color:map.color ?? 'white'}}>V</span>{major}.<span style={{color:map.color ?? 'white'}}>{minor}</span></>
    }

    return (
        <>
            <Header windowInfo={windowInfo}/>

            <HomeSlide
                src={downtown}
                focus={<span style={{textShadow:"0 0 2px black, 0 0 10px black"}}>Download Greenfield {getVersionSpan()}</span>}
                thirdRowContent={
                    // <div className="animateThird d-flex download-buttons hidden justify-content-center showing flex-column w-100" style={{maxWidth:"80vw"}}>
                    //     <div className="d-flex flex-column flex-lg-row align-items-center">
                    //         <Button text="Download Greenfield" dataType="glass" innerClass={"py-1"} outerClass={"m-3"}></Button>
                    //         <Button text="Download Resourcepack" dataType="glass" innerClass={"py-1"} outerClass={"m-3"}></Button>
                    //     </div>
                    //     <div className="d-flex flex-column flex-lg-row justify-content-center">
                    //         <Dropdown
                    //             options={versions}
                    //             defaultOptionIndex={versions.length-1}
                    //             prefixSelection="MC Version: "
                    //             reverseOptions={true}
                    //             onSelect={setSelectedVersion}
                    //         ></Dropdown>
                            
                    //     </div>
                    //     <div className="d-flex flex-column flex-lg-row align-items center px-5">
                    //         <Button text="Older Map Downloads" dataType="clear glass" innerClass={""} outerClass={"m-3"}></Button>
                    //         <Button text="Older Pack Downloads" dataType="clear glass" innerClass={""} outerClass={"m-3"}></Button>
                    //     </div>
                    // </div>
                    <div className="animateThird d-flex download-buttons hidden align-items-center showing flex-column flex-lg-row w-100" style={{maxWidth:"80vw"}}>
                        <div className="d-flex flex-column align-items-center w-75">
                            <Button text="Download Greenfield" dataType="glass" innerClass={"py-1"} outerClass={"m-3 w-75 px-3"}></Button>
                            <a href={getPageLink(windowInfo, "./project")} className="swift-link fs-5 link" style={{lineHeight:"normal"}}>Download Older Greenfield Versions</a>
                        </div>
                        <div className="d-flex flex-column align-items-center w-75">
                            <Button text="Download Resourcepack" dataType="glass" innerClass={"py-1"} outerClass={"m-3 w-75 px-3"}></Button>
                            <a href={getPageLink(windowInfo, "./resourcepack")} className="swift-link fs-5 link" style={{lineHeight:"normal"}}>Download Older Resourcepack Versions</a>
                        </div>
                        {/* <div className="d-flex flex-column flex-lg-row align-items-center">
                            <Button text="Download Greenfield" dataType="glass" innerClass={"py-1"} outerClass={"m-3"}></Button>
                            <Button text="Download Resourcepack" dataType="glass" innerClass={"py-1"} outerClass={"m-3"}></Button>
                        </div>
                        
                        <div className="d-flex flex-column flex-lg-row align-items center px-5">
                            <Button text="Older Map Downloads" dataType="clear glass" innerClass={""} outerClass={"m-3"}></Button>
                            <Button text="Older Pack Downloads" dataType="clear glass" innerClass={""} outerClass={"m-3"}></Button>
                        </div> */}
                    </div>
                }
            ></HomeSlide>
        </>
    )

}

export default Downloads;