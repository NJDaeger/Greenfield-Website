import * as React from "react"
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown"
import Header from "../components/shared/Header";
import station from "../images/MartyStation.jpg";
import "../styles/style.scss";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import ScreenMedia from "../components/screenmedia/ScreenMedia";
import { useState } from "react";
import {useLocation} from "@reach/router";
import links from "../data/links.json";

const Conditions = () => {
    return (
        <>
          <Header/>
          <ScreenMedia
            src={station}
          ></ScreenMedia>
          <div className="w-100 h-100 position-absolute top-0 d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-white">Terms and Conditions</h1>
            <div className="d-flex flex-row col-10 text-white">
                <div className="d-block w-50 m-5 p-3">
                    <h3 className="text-center">Map Usage Conditions</h3>
                    <hr />
                    <div>
                        <h5>Server Usage</h5>
                        <p className="ms-3">If you are using Greenfield on a public or private server, you must provide a location that is deemed visible and readable that links to this website (<a className="link swift-link" href="https://www.greenfieldmc.net">https://www.greenfieldmc.net</a>).</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Video &amp; Blog Usage</h5>
                        <p className="ms-3">If you are using Greenfield for a video, blog, or any other form of social media, you must provide a link in the description of the post itself linking to (<a className="link swift-link" href="https://www.greenfieldmc.net">https://www.greenfieldmc.net</a>).</p>
                    </div>
                    <hr />
                    <div>
                        <h5>All Other Projects</h5>
                        <p className="ms-3">If you are using Greenfield for a project, public or private, of any type, and wish to distribute that project (with specififc builds or sections of Greenfield), you MUST email us at <i><strong>contact@greenfieldmc.net</strong></i> and receive a reply granting permission of use. If you do not receive a reply within 30 days, your permission request has been denied. You may reapply for permission after the denial.</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Distribution Notice</h5>
                        <p className="ms-3 ">When using Greenfield in a map or project, whether it be individual builds or sections of Greenfield, those portions of the project are the property of The Greenfield Project, and are NOT to be claimed by the third party.</p>
                    </div>
                </div>
                <div className="d-block w-50 m-5 p-3">
                    <h3 className="text-center">Build Member Conditions</h3>
                    <hr />
                    <div>
                        <h5>While on the build server:</h5>
                        <p className="ms-3 mb-0" style={{display:"list-item"}}>You must always use the <a href="https://textures.greenfieldmc.net" className="link swift-link">Greenfield Texture Pack</a> while on our build server.</p>
                        <p className="ms-3">You must treat people with respect on the server. We are all a team working towards a common goal.</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Video &amp; Blog Usage</h5>
                        <p className="ms-3">If you are using Greenfield for a video, blog, or any other form of social media, you must provide a link in the description of the post itself linking to (<a className="link swift-link">https://www.greenfieldmc.net</a>).</p>
                    </div>
                    <hr />
                    <div>
                        <h5>All Other Projects</h5>
                        <p className="ms-3">If you are using Greenfield for a project, public or private, of any type, and wish to distribute that project (with specififc builds or sections of Greenfield), you MUST email us at <i><strong>contact@greenfieldmc.net</strong></i> and receive a reply granting permission of use. If you do not receive a reply within 30 days, your permission request has been denied. You may reapply for permission after the denial.</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Distribution Notice</h5>
                        <p className="ms-3">When using Greenfield in a map or project, whether it be individual builds or sections of Greenfield, those portions of the project are the property of The Greenfield Project, and are NOT to be claimed by the third party.</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Conditions;