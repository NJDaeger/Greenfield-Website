import * as React from "react"
import Header from "../components/shared/Header";
import HomeSlide from "../components/home/HomeSlide";
import skyline from "../images/skyline.jpg"
import stadium from "../images/stadium.jpg"
import railyard from "../images/railyard.jpg"
import station from "../images/MartyStation.jpg"
import SlideNav from "../components/home/SlideNavigation";
import "../styles/style.scss";
import {useEffect, useState} from "react";
import Button from "../components/button/Button";
import { getLink, getPageLink } from "../service/linkservice";

const parentStyle = {
  overflow: "scroll",
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth",
  height: "100vh",
  scrollSnapAlign: "start"
}

// markup
const IndexPage = (location) => {
  const [windowInfo, setWindowLocation] = useState({origin: location.location.origin, href: location.location.href});

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let observer = new IntersectionObserver((entries) => {
      let currentVisible = document.querySelector(".showing");
      if (currentVisible !== null) {
        currentVisible.classList.remove("showing");
        currentVisible.classList.add("hiding");
        document.getElementById("nav-button-" + currentVisible.attributes.getNamedItem("index").value).classList.remove("active");
      }
      let entry = entries[0];
      const index = entry.target.attributes.getNamedItem("index").value

      entry.target.classList.add("showing");
      entry.target.classList.remove("hiding");
      document.getElementById("nav-button-" + index ?? 0).classList.add("active");
    }, {threshold: .75});

    slides.forEach(slide => {
        observer.observe(slide);
    });
  }, [])

  return (
    <>
      <Header windowInfo={windowInfo}/>
      <SlideNav links={[
        { goto: "#welcome", text: "Welcome"},
        { goto: "#project", text: "Project" },
        { goto: "#pack", text: "Resource Pack" },
        { goto: "#apply", text: "Apply" }
      ]}/>
      <div id="home" style={parentStyle}>
        <title>Home Page</title>
        <HomeSlide
          src={skyline}
          title="Welcome To"
          focus="Greenfield"
          startHidden={true}
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
          startHidden={true}
          id="project"
          thirdRowContent={<Button href={getPageLink(windowInfo, "./project")} text="Project Page" outerClass={"animateThird"} innerClass="p-3" dataType="glass"></Button>}
          index={1}>
        </HomeSlide>
        <HomeSlide
          src={railyard}
          title="Current Resourcepack Release"
          focus="1.17+"
          startHidden={true}
          id="pack"
          thirdRowContent={<Button href={getPageLink(windowInfo, "./resourcepack")} text="Resourcepack Page" outerClass={"animateThird"} innerClass="p-3" dataType="glass"></Button>}
          index={2}>
        </HomeSlide>
        <HomeSlide
          src={station}
          title="Help Us Build!"
          focus="Apply Now"
          startHidden={true}
          id="apply"
          thirdRowContent={<Button href={getLink("application")} text="Application Form" outerClass={"animateThird"} innerClass="p-3" dataType="glass"></Button>}
          index={3}>
        </HomeSlide>
      </div>

    </>
  )
}

export default IndexPage;