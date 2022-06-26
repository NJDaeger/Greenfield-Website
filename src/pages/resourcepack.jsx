import * as React from "react"
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown"
import Header from "../components/shared/Header";
import resourcepack from "../images/resourcepack.png";
import "../styles/style.scss";
import Button from "../components/button/Button";


// markup
const Resourcepack = () => {

    return (
        <>
          <Header/>
          <HomeSlide
            src={resourcepack}
            title="The Official"
            focus="Greenfield Resource Pack"
            startHidden={false}
          ></HomeSlide>
          <div className="w-100 d-flex position-absolute download-buttons hidden showing animateThird justify-content-center">
            <div className="d-flex col-8 col-md-6 col-lg-4 flex-column flex-lg-row">
              <Button href="#" text="Download Latest"></Button>
              <Dropdown options={["test1", "test2", "test3"]} id="testdropdown"></Dropdown>
            </div>
          </div>
          {/* <div>
            <Button href="#" text="Download the Latest Resourcepack"></Button>
          </div>
          <ScreenMedia src={resourcepack}></ScreenMedia> */}
        </>
    )
}

export default Resourcepack;