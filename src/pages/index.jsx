import * as React from "react"
import Header from "../components/shared/Header";
import HomeSlide from "../components/home/HomeSlide";
import rockwell from "../images/rockwell.jpg"
import skyliners from "../images/skyliners.jpg"
import tower from "../images/tower.jpg"
import main from "../images/updates/0_5_4.jpg"
import SlideNav from "../components/home/SlideNavigation";
import "../styles/style.scss";
import {useEffect, useState} from "react";
import Button from "../components/button/Button";
import { getLink, GetPageLink } from "../service/linkservice";

const parentStyle = {
  overflow: "scroll",
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth",
  height: "100vh",
  scrollSnapAlign: "start"
}

// markup
const IndexPage = () => {

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
      <title>Home Page</title>
      <Header/>
      <SlideNav links={[
        { goto: "#welcome", text: "Welcome"},
        { goto: "#project", text: "Project" },
        { goto: "#pack", text: "Resource Pack" },
        { goto: "#apply", text: "Apply" }
      ]}/>
      <div id="home" style={parentStyle}>
        <HomeSlide
          src={main}
          title="Welcome To"
          focus="Greenfield"
          startHidden={true}
          id="welcome">
        </HomeSlide>
        <HomeSlide
          src={tower}
          title="Current Map Release"
          focus={
            <>
              <span style={{color: "#ffd800"}}>v </span>
              0.5.
              <span style={{color: "#ffd800"}}>4</span>
            </>
          }
          startHidden={true}
          id="project"
          thirdRowContent={<Button href={GetPageLink("./project")} text="Project Page" outerClass={"animateThird"} innerClass="p-3" dataType="glass"></Button>}
          index={1}>
        </HomeSlide>
        <HomeSlide
          src={skyliners}
          title="Current Resourcepack Release"
          focus="1.17+"
          startHidden={true}
          id="pack"
          thirdRowContent={<Button href={GetPageLink("./resourcepack")} text="Resourcepack Page" outerClass={"animateThird"} innerClass="p-3" dataType="glass"></Button>}
          index={2}>
        </HomeSlide>
        <HomeSlide
          src={rockwell}
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