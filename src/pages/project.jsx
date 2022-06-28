import * as React from "react"
import "../styles/style.scss";
import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import HomeSlide from "../components/home/HomeSlide";
import { useState } from "react";
import station from "../images/MartyStation.jpg";

const Project = () => {
    const imageMapping = [
        {
            local: "../images/MartyStation.jpg",
            static: station
        }
    ]

    const [selectedDownload, setSelectedDownload] = useState(downloads.map[downloads.map.length - 1]);

    const isLatest = (selection) => {
        return downloads.map[downloads.pack.length - 1].map_version === selection;
    }

    const getDownload = (selection) => {
        return downloads.map.find(map => map.map_version === selection).download;
    }

    const getVersionSpan = () => {
        var version = selectedDownload.map_version;
        const [major, minor] = [version.slice(0, version.lastIndexOf('.')), version.slice(version.lastIndexOf('.') + 1)];
        
        return <><span style={{color:selectedDownload.color ?? 'white'}}>V</span>{major}.<span style={{color:selectedDownload.color ?? 'white'}}>{minor}</span></>
    }

    return (
        <>
            <Header></Header>
            <HomeSlide
                src={imageMapping.find(img => img.local === selectedDownload.image).static}
                title=""
                focus={<>Greenfield&nbsp;{getVersionSpan()}</>}
                startHidden={false}
            ></HomeSlide>
        </>
    )

}

export default Project;