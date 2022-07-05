import * as React from "react"
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown"
import Header from "../components/shared/Header";
import resourcepack from "../images/resourcepack.png";
import "../styles/style.scss";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import megaGreenfield from "../images/megagreenfield.jpg"
import { useState } from "react";
import thejestr from "../images/thejestr.png";
import "../styles/style.scss";


const About = (location) => {
    const [windowInfo, setWindowLocation] = useState({origin: location.location.origin, href: location.location.href});
    return (
        <>
          <Header windowInfo={windowInfo}/>
          <ScreenMedia
              src={megaGreenfield}
            ></ScreenMedia>
          
          <div className="d-flex flex-column position-absolute top-0" style={{zIndex:"2"}}>
            <h1 className="alert-light position-absolute align-self-center top-50">MEGA IN PROGRESS PAGE</h1>
            <div className="d-flex align-self-center justify-content-center w-75 ps-5 pe-5 pb-5" style={{paddingTop: "8rem"}}>
              <p>Greenfield is a Minecraft city built like no other. We build to the finest detail, but also carefully plan our city on a large scale. We are designed on a 1:1 scale, meaning one block is equivalent to 1 real world meter. By using this scale, we can provide an immersive experience for our end users since the buildings we produce are in similar scale and nature to those you would find in a real life city. While the city is only 20% complete, we are arguably one of the most complete and detailed cities that currently exists within Minecraft. Being comprised of thousands of unique, fully interiored, builds, there is a seemingly endless stream of opportunities of explorations.</p>
            </div>
            <div className="w-75 h-50 d-flex flex-row bg-secondary align-self-center">
              <div className="d-flex align-items-center justify-content-end w-50 p-5">
                <img src={thejestr} alt="THEJESTR"/>
              </div>
              <div className="d-flex align-items-center justify-content-start w-100 p-5">
                <p className="w-75">Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in mid 2011. The map started with a single gas station, built by THEJESTR, that still resides in its original form and location in Hunterspoint. THEJESTR has been the leader of the project since the beginning, and now leads a team of 10 staff members and 170 additional build members. The map has expanded multiple times its original size, and now sits at about 6500x8800 blocks, or about 57 square kilometers.</p>
              </div>
            </div>
            
            {/* <div className="w-100 h-50 d-flex flex-row pt-5">
              <div className="d-flex align-items-center justify-content-end w-50 p-5">
                <img src={thejestr} alt="THEJESTR"/>
              </div>
              <div className="d-flex align-items-center justify-content-start w-75 p-5">
                <p className="w-75">Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in mid 2011. The map started with a single gas station, built by THEJESTR, that still resides in its original form and location in Hunterspoint. THEJESTR has been the leader of the project since the beginning, and now leads a team of 10 staff members and 170 additional build members. The map has expanded multiple times its original size, and now sits at about 6500x8800 blocks, or about 57 square kilometers.</p>
              </div>
            </div>
            <div className="w-100 h-50 d-flex flex-row pt-5">
              <div className="d-flex align-items-center justify-content-end w-50 p-5">
                <img src={thejestr} alt="THEJESTR"/>
              </div>
              <div className="d-flex align-items-center justify-content-start w-75 p-5">
                <p className="w-75">Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in mid 2011. The map started with a single gas station, built by THEJESTR, that still resides in its original form and location in Hunterspoint. THEJESTR has been the leader of the project since the beginning, and now leads a team of 10 staff members and 170 additional build members. The map has expanded multiple times its original size, and now sits at about 6500x8800 blocks, or about 57 square kilometers.</p>
              </div>
            </div>
            <div className="w-100 h-50 d-flex flex-row pt-5">
              <div className="d-flex align-items-center justify-content-end w-50 p-5">
                <img src={thejestr} alt="THEJESTR"/>
              </div>
              <div className="d-flex align-items-center justify-content-start w-75 p-5">
                <p className="w-75">Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in mid 2011. The map started with a single gas station, built by THEJESTR, that still resides in its original form and location in Hunterspoint. THEJESTR has been the leader of the project since the beginning, and now leads a team of 10 staff members and 170 additional build members. The map has expanded multiple times its original size, and now sits at about 6500x8800 blocks, or about 57 square kilometers.</p>
              </div>
            </div>
            <div className="w-100 h-50 d-flex flex-row pt-5">
              <div className="d-flex align-items-center justify-content-end w-50 p-5">
                <img src={thejestr} alt="THEJESTR"/>
              </div>
              <div className="d-flex align-items-center justify-content-start w-75 p-5">
                <p className="w-75">Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in mid 2011. The map started with a single gas station, built by THEJESTR, that still resides in its original form and location in Hunterspoint. THEJESTR has been the leader of the project since the beginning, and now leads a team of 10 staff members and 170 additional build members. The map has expanded multiple times its original size, and now sits at about 6500x8800 blocks, or about 57 square kilometers.</p>
              </div>
            </div> */}
          </div>
          {/* <HomeSlide
            src={resourcepack}
            title="The Official"
            focus="Greenfield Resource Pack"
            startHidden={false}
            thirdRowContent={
              <div className="animateThird col-11 col-lg-8 col-md-10 d-flex download-buttons hidden justify-content-center showing">
                <div className="d-flex w-100 flex-column flex-lg-row">
                  <Button href={getDownload(selectedDownload)} text={isLatest(selectedDownload) ? "Download Latest" : "Download for " + selectedDownload}></Button>
                  <Dropdown 
                    options={downloads.pack.map(pck => pck.mc_version)} 
                    id="packversiondropdown" 
                    onSelect={setSelectedDownload} 
                    defaultOptionIndex={downloads.pack.length - 1}
                    prefixSelection="MC "
                    reverseOptions={true}></Dropdown>
                </div>
              </div>
            }
          ></HomeSlide> */}
          
        </>
    )
}

export default About;