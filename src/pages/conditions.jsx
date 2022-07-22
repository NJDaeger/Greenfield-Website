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
import { useLocation } from "@reach/router";
import links from "../data/links.json";
import { GetPageLink } from "../service/linkservice";
import { useEffect } from "react";

const Conditions = () => {
    const [showMsg1, setShowMsg1] = useState(undefined);//Map usage conditions
    const [showMsg2, setShowMsg2] = useState(undefined);//Builder Member conditions
    const [showMsg3, setShowMsg3] = useState(undefined);//official media clarification

    useEffect(() => {
        closeCondition("msg1", showMsg1);
    }, [showMsg1]);

    useEffect(() => {
        closeCondition("msg2", showMsg2);
    }, [showMsg2]);

    useEffect(() => {
        closeCondition("msg3", showMsg3);
    }, [showMsg3]);

    const closeCondition = (e, value) => {
        const elem = document.getElementById(e);
        if (value) elem.classList.remove("condition-closing");
        setTimeout(() => {
            if (!value) elem.classList.remove("condition-closing");
        }, 250)
    }

    return (
        <>
            <title>Terms and Conditions</title>
            <Header />
            <ScreenMedia
                src={station}
            ></ScreenMedia>
            <div className="w-100 h-100 position-absolute top-0 d-flex align-items-center flex-column overflow-scroll pt-5">
                {/* <h1 className="text-white">Terms and Conditions</h1> */}
                <div className="d-flex flex-column col-10 text-white justify-content-center flex-xl-row align-items-center">
                    <div className="d-block col-12 col-xl-5 m-5 p-4 condition-section" id="#content-conditions">
                        <h3 className="text-center d-flex flex-row">Map &amp; Resourcepack Usage Conditions<Button text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        } outerClass={"asterisk ml-1_5"} dataType="glass clear" click={() => {setShowMsg1(true)}}></Button></h3>
                        <hr />
                        <div>
                            <h5>Map &amp; Resourcepack Usage on a Server</h5>
                            <span className="ms-3 li">If you are using the Greenfield Map or Resourcepack on a public or private server, you must provide link to <a href={GetPageLink("./")} className="link swift-link">this website</a>
                             at a location that is deemed visible and readable.</span>
                        </div>
                        <hr />
                        <div>
                            <h5>Map &amp; Resourcepack Usage in Videos, Blogs, or Social Media</h5>
                            <span className="ms-3 li">If you are using the Greenfield Map or Resourcepack in a video, blog, or any other form of social media, you must provide a link in
                                the description of the post itself linking to <a href={GetPageLink("./")} className="link swift-link">this website</a>.</span>
                        </div>
                        <hr />
                        <div>
                            <h5>Other Projects using the Greenfield Map</h5>
                            <span className="ms-3 li">If you are using the Greenfield Map for a project, and <span style={{ textDecoration: "underline" }}>intend to distribute</span> that project (with specific builds or sections of Greenfield),
                                you MUST email us at <span style={{ textDecoration: "underline" }}>contact@greenfieldmc.net</span> and receive a reply granting permission of use. You may reapply for permission upon denial.</span>
                        </div>
                        <hr />
                        <div>
                            <h5>Other Projects using the Greenfield Resourcepack</h5>
                            <span className="ms-3 li">Usage and modification of the Greenfield Resourcepack is fully allowed. You can redistribute the <i>modified</i> resourcepack as you wish under
                                the conditions that The Greenfield Project is listed in the credit section of the new resourcepack AND the new resourcepack is not named in a way where it could
                                be considered mimicking or mocking the name of the Greenfield Resourcepack.</span>
                            <span className="ms-3 li">Usage of the <i>unmodified</i> Greenfield Resourcepack is fully allowed, but is NOT allowed to be hosted on an external site. All projects using
                                the unmodified resourcepack MUST link to the <a href={GetPageLink("./resourcepack")} className="link swift-link">resourcepack page</a> on this website.</span>
                        </div>
                    </div>
                    <div className="d-block col-12 col-xl-5 m-5 p-4 condition-section" id="#builder-conditions">
                        <h3 className="text-center d-flex flex-row">Build Member Conditions<Button text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        } outerClass={"asterisk ml-1_5"} dataType="glass clear" click={() => {setShowMsg2(true)}}></Button></h3>
                        <hr />
                        <div>
                            <h5>Build Server Conditions</h5>
                            <span className="ms-3 mb-0 li">You must always use the <a href="https://textures.greenfieldmc.net" className="link swift-link">Greenfield Resourcepack</a> while on
                                our build server.</span>
                            <span className="ms-3 mb-0 li">You must always obey the building codes and rules on the server. The codes and rules are subject to change- when changes occur, it
                                is your job to keep up to date on them.</span>
                            <span className="ms-3 mb-0 li">Performing destructive acts, or assisting in the act of a destructive act on the server (in the form of harassment, harm,
                                destruction of the map contents) will not be tolerated and are to be avoided at all times.</span>
                            <span className="ms-3 mb-0 li">The contents of the map that you produce is a modification of The Greenfield Project world and is owned by The Greenfield Project.
                                You cannot claim ownership of regions of the map.</span>
                        </div>
                        <hr />
                        <div>
                            <h5>General Conditions</h5>
                            <span className="ms-3 mb-0 li">You must treat people with respect both on and off of the server. We are all a team working towards a common goal.</span>
                            <span className="ms-3 mb-0 li">You must always listen to Supervisors and Admins. They lead the project and they know what they're doing.</span>
                            <span className="ms-3 mb-0 li">You must remain in the official Discord server to remain a part of this project.</span>
                            <span className="ms-3 mb-0 li">You must not advertise your own, or someone else's, project. This includes asking someone to join another Minecraft Server, recruiting
                                members, or any other message which may deter build members from the Greenfield Minecraft Project.</span>
                            <span className="ms-3 mb-0 li">Lying in any form or context will not be tolerated.</span>
                            <span className="ms-3 mb-0 li">English is the primary language we communicate with. All staff members are fluent in the English language. It is a requirement that
                                you are able to understand and communicate with us via chat messages.</span>
                            <span className="ms-3 mb-0 li">Any media that is purposefully created to be used as official promotional material for the project is owned by the Greenfield 
                            Minecraft Project. Any other media that is not official is owned by the creator of said media. <Button text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        } outerClass={"asterisk d-inline-flex"} dataType="glass clear" click={() => {setShowMsg3(true)}}></Button></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"condition-info-container condition-closed" + (showMsg1 === undefined ? "" : showMsg1 ? " condition-showing" : " condition-closing")} id="msg1">
                <div className="condition-info col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-10">
                    <div className="condition-info-header d-flex flex-row text-center">
                        <h2 className="col-11 pt-2 m-0">Condition Notice</h2>
                        <Button 
                        text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        }
                        click={() => {setShowMsg1(false)}}
                        outerClass={"float-right"}></Button>
                    </div>
                    <p className="p-3 fs-5 mb-0">The Terms and Conditions listed under the "Map &amp; Resourcepack Usage Conditions" apply to the Greenfield Resource Pack ("Greenfield Resourcepack", 
                    "Resourcepack") and to the Greenfield Map ("Greenfield Map", "Greenfield", "Map"). These entities are owned in whole by The Greenfield Project ("Greenfield"). By
                    downloading our content, you consent to the terms listed in the Map &amp; Resourcepack Usage Conditions section.</p>
                </div>
            </div>

            <div className={"condition-info-container condition-closed" + (showMsg2 === undefined ? "" : showMsg2 ? " condition-showing" : " condition-closing")} id="msg2">
                <div className="condition-info col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-10">
                    <div className="condition-info-header d-flex flex-row text-center">
                        <h2 className="col-11 pt-2 m-0">Condition Notice</h2>
                        <Button 
                        text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        }
                        click={() => {setShowMsg2(false)}}
                        outerClass={"float-right"}></Button>
                    </div>
                    <p className="p-3 fs-5 mb-0">The Terms and Conditions listed under the "Build Member Conditions" ("this section", "conditions") apply to the build members that are currently or were an active member 
                    of The Greenfield Project. By becoming, or having been, a member of Greenfield, you must comply to these conditions listed within this section of Terms and Conditions. Failure to comply 
                    with these conditions may result in a project ban (that potentially includes a Discord guild ban depending on the severity) or a demotion of rank status. If you do not agree with our 
                    conditions, you will not be accepted onto the build team or you will be removed from the build team. If you apply to join The Greenfield Project, you consent to the terms listed in this section.</p>
                </div>
            </div>

            <div className={"condition-info-container condition-closed" + (showMsg3 === undefined ? "" : showMsg3 ? " condition-showing" : " condition-closing")} id="msg3">
                <div className="condition-info col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-10">
                    <div className="condition-info-header d-flex flex-row text-center">
                        <h2 className="col-11 pt-2 m-0">Official Media</h2>
                        <Button 
                        text={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        }
                        click={() => {setShowMsg3(false)}}
                        outerClass={"float-right"}></Button>
                    </div>
                    <p className="p-3 fs-5 mb-0">Official media is media that has consciously been created by a member to be used as promotional material for one of the official media outlets. 
                    This does not include work done by members on their own. To be considered official media, the given piece of media must be approved by an Administrator of The Greenfield Project.</p>
                </div>
            </div>

        </>
    )
}

export default Conditions;