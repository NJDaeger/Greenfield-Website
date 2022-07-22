import * as React from "react"
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown"
import Header from "../components/shared/Header";
import resourcepack from "../images/resourcepack.jpg";
import "../styles/style.scss";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import { useState } from "react";

// markup
const Resourcepack = () => {
    const [selectedDownload, setSelectedDownload] = useState(downloads.pack[downloads.pack.length - 1].mc_version);

    const isLatest = (selection) => {
        return downloads.pack[downloads.pack.length - 1].mc_version == selection;
    }

    const getDownload = (selection) => {
        return downloads.pack.find(pack => pack.mc_version == selection).download;
    }

    return (
        <>
          <Header/>
          <HomeSlide
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
          ></HomeSlide>
          <h6 className="text-center w-100 bottom-0 mb-2 text-white position-absolute"><a href={GetPageLink('./conditions')} className="link swift-link" target="_blank">By downloading the Greenfield Resourcepack, you agree to follow our Terms and Conditions</a></h6>
        </>
    )
}

export default Resourcepack;