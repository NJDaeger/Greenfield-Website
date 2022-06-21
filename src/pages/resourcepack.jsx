import * as React from "react"
import Button from "../components/button/Button";
import HomeSlide from "../components/home/HomeSlide";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import Header from "../components/shared/Header";

import resourcepack from "../images/resourcepack.png";



// markup
const Resourcepack = () => {

    return (
        <>
          <Header/>
          <HomeSlide
            src={resourcepack}
            title="The Official"
            focus="Greenfield Resource Pack"
            btnLink="#"
            btnText="Download Latest"
            startHidden={true}
          ></HomeSlide>
          {/* <div>
            <Button href="#" text="Download the Latest Resourcepack"></Button>
          </div>
          <ScreenMedia src={resourcepack}></ScreenMedia> */}
        </>
    )
}

export default Resourcepack;