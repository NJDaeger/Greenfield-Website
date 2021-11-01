import * as React from "react"
import Header from "../components/Header";
import HomeSlide from "../components/HomeSlide";
import skyline from "../images/skyline.jpg"
import stadium from "../images/stadium.jpg"
import railyard from "../images/railyard.jpg"
import station from "../images/MartyStation.jpg"

const parentStyle = {
  overflow: "scroll",
  scrollSnapType: "y mandatory",
  height: "100vh"
}

// markup
const IndexPage = () => {

  return (
    <div style={parentStyle}>
      <title>Home Page</title>
      <Header></Header>
      <HomeSlide 
        src={skyline} 
        title="Welcome To" 
        focus="Greenfield" 
        id="welcome">
      </HomeSlide>
      <HomeSlide 
        src={stadium} 
        title="Current Map Release" 
        focus={
          <>
            <span style={{color: "slateblue"}}>v </span>
            0.5.
            <span style={{color: "slateblue"}}>3</span>
          </>
        } 
        id="project"
        btnLink="#"
        btnText="Project Page">
      </HomeSlide>
      <HomeSlide 
        src={railyard} 
        title="Current Resourcepack Release" 
        focus="1.17+" 
        id="pack"
        btnLink="#"
        btnText="Resourcepack Page">
      </HomeSlide>
      <HomeSlide 
        src={station} 
        title="Help Us Build!" 
        focus="Apply Now" 
        id="apply"
        btnLink="#"
        btnText="Application Form">
      </HomeSlide>
    </div>
  )
}

export default IndexPage;