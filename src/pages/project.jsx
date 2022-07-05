import * as React from "react"
import "../styles/style.scss";
import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown";
import { useState } from "react";
import update053 from "../images/updates/0_5_3.jpg";
import update052 from "../images/updates/0_5_2.jpg";
import update051 from "../images/updates/0_5_1.jpg";
import update05 from "../images/updates/0_5.jpg";
import update046 from "../images/updates/0_4_6.jpg";
import update045 from "../images/updates/0_4_5.jpg";
import martyStation from "../images/MartyStation.jpg";

const Project = (location) => {
    const [windowInfo, setWindowLocation] = useState({origin: location.location.origin, href: location.location.href});
    const imageMapping = [
        {
            local: "../images/update/0_5_3.jpg",
            static: update053
        },
        {
            local: "../images/update/0_5_2.jpg",
            static: update052
        },
        {
            local: "../images/update/0_5_1.jpg",
            static: update051
        },
        {
            local: "../images/update/0_5.jpg",
            static: update05
        },
        {
            local: "../images/update/0_4_6.jpg",
            static: update046
        },
        {
            local: "../images/update/0_4_5.jpg",
            static: update045
        }
    ]

    const [selectedDownload, setSelectedDownload] = useState(downloads.map[downloads.map.length - 1]);

    const isLatest = () => {
        return downloads.map[downloads.map.length - 1].map_version === selectedDownload.map_version;
    }

    const setSelectedVersion = (selection) => {
        const found = downloads.map.find(mp => mp.map_version===selection);
        if (found == null) setSelectedDownload(downloads.map[downloads.map.length - 1]);
        else setSelectedDownload(found);
    }

    const getVersionSpan = () => {
        var version = selectedDownload.map_version;
        const [major, minor] = [version.slice(0, version.lastIndexOf('.')), version.slice(version.lastIndexOf('.') + 1)];
        
        return <><span style={{color:selectedDownload.color ?? 'white'}}>V</span>{major}.<span style={{color:selectedDownload.color ?? 'white'}}>{minor}</span></>
    }

    return (
        <>
            <Header windowInfo={windowInfo}/>
            <span className="bottom-0 float-left fs-5 p-3 position-absolute text-white" style={{textShadow: "0 0 3px black, 0 0 5px black, 0 0 10px black", zIndex:100}}>Released {selectedDownload.released}</span>
            <HomeSlide
                src={imageMapping.find(img => img.local === selectedDownload.image)?.static ?? martyStation}
                // title={<span className="d-flex flex-column"><small className="mt-0 fs-3">{selectedDownload.mc_version !== undefined ? "For Minecraft " + selectedDownload.mc_version : ""}</small></span>}
                focus={<>Greenfield&nbsp;{getVersionSpan()}</>}
                thirdRowContent={
                    <div className="animateThird col-11 col-md-10 col-lg-8 d-flex download-buttons hidden justify-content-center showing flex-column">
                        <div className="d-flex w-100 flex-column flex-lg-row">
                            <Button href={selectedDownload.download ?? "#"} text={isLatest() ? "Download Latest" : (selectedDownload.download === undefined ? "Unavailable" : "Download " + selectedDownload.map_version)} dataType={"glass " + (selectedDownload.download === undefined ? "disabled" : "")}></Button>
                            <Dropdown
                                options={downloads.map.map(mp => mp.map_version)}
                                id="mapversiondropdown"
                                onSelect={setSelectedVersion}
                                defaultOptionIndex={downloads.map.length - 1}
                                prefixSelection="V "
                                reverseOptions={true}
                            ></Dropdown>
                        </div>
                        <span className="fs-4 text-center" style={{textShadow: "0 0 3px black, 0 0 5px black"}}>{selectedDownload.mc_version !== undefined ? "For Minecraft " + selectedDownload.mc_version : ""}</span>
                    </div>
                }
                startHidden={false}
            ></HomeSlide>
        </>
    )

}

export default Project;