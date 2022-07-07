import * as React from "react"
import Header from "../components/shared/Header";
import "../styles/style.scss";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import megaGreenfield from "../images/megagreenfield.jpg";
import "../styles/style.scss";


const About = () => {
    return (
        <>
          <Header/>
          <ScreenMedia
              src={megaGreenfield}
            ></ScreenMedia>
          <div className="position-absolute w-100 h-100 top-0 d-flex">
            <div className="about-container align-items-center d-xl-flex h-100 justify-content-center overflow-scroll position-absolute w-100">
              <div className="about-card-container d-flex flex-column flex-xl-row justify-content-center overflow-scroll position-absolute w-100 pt-5">
                <div className="about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5">
                  <span className="fs-1 bebas">Founder</span>
                  <hr />
                  <p>Greenfield was founded by <a href="https://namemc.com/profile/THEJESTR11.1" className="link swift-link">THEJESTR</a> back in 
                  August 2011. The map started with a single gas station, built by him, that still resides in its original form and location in 
                  Hunterspoint. In the last 11 years, he has led over 20 different staff members and 400+ builders to make the map what it is today.</p>
                </div>

                <div className="about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5">
                  <span className="fs-1 bebas">The City</span>
                  <hr />
                  <p>Greenfield is a fictional city designed to resemble the West Coast of America, laboriously inspired by Los Angeles. Built to 
                    a one-to-one scale, every single building in Greenfield has substantial detail with carefully detailed elaborate surroundings. 
                    With a substantially sizable airport to lavish homes and businesses, Greenfield is one of the most largely complex and 
                    intricate cities in Minecraft. As of July 2022, the in-progress map is now about 6500x8800 blocks, or about 57 square kilometers.</p>
                </div>

                <div className="about-card d-flex flex-column col-sm-8 col-lg-6 col-xl-3 m-5 mx-auto mx-xl-5">
                  <span className="fs-1 bebas">Our Builders</span>
                  <hr />
                  <p>Our builders are an essential part to the production of our map. Over the past 11 years, we have seen hundreds of builders 
                    come and go, helping us reach our current project state. They range from high school students to retirees and come from a 
                    wide variety of backgrounds and education. Some of us are software engineers, others are architect students- our builders'
                    backgrounds all combine together to create an interesting atmosphere on the server and create a product everyone enjoys.</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default About;