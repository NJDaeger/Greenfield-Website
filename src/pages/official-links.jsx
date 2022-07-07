import * as React from "react"
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown"
import Header from "../components/shared/Header";
import resourcepack from "../images/resourcepack.png";
import "../styles/style.scss";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import { useState } from "react";
import {useLocation} from "@reach/router";

const OfficialLinks = () => {
    return (
        <>
          <Header/>
          <ScreenMedia
            src=""
          ></ScreenMedia>
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

export default OfficialLinks;