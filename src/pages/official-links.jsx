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

import wikipedia from "../images/socials/wikipedia.png";
import patreon from "../images/socials/patreon-white.png";
import discord from "../images/socials/discord-white.png";
import dynmap from "../images/socials/dynmap.png";
import youtube from "../images/socials/youtube-white.png";
import twitter from "../images/socials/twitter-white.png";
import reddit from "../images/socials/reddit-white.png";
import instagram from "../images/socials/instagram-white.png"
import facebook from "../images/socials/facebook-white.png";
import pmc from "../images/socials/pmc.png";
import icon from "../images/icon.png"

const OfficialLinks = () => {

  const iconMap = [
    {
      linkId: "projectwiki",
      icon: wikipedia
    },
    {
      linkId: "wikipedia",
      icon: wikipedia
    },
    {
      linkId: "patreon",
      icon: patreon
    },
    {
      linkId: "discord",
      icon: discord
    },
    {
      linkId: "dynmap",
      icon: dynmap
    },
    {
      linkId: "youtube",
      icon: youtube
    },
    {
      linkId: "twitter",
      icon: twitter
    },
    {
      linkId: "subreddit",
      icon: reddit
    },
    {
      linkId: "instagram",
      icon: instagram
    },
    {
      linkId: "facebook",
      icon: facebook
    },
    {
      linkId: "mappmc",
      icon: pmc
    },
    {
      linkId: "packpmc",
      icon: pmc
    }
  ];

  const getIconById = (linkId) => {
    return iconMap.find(mapping => mapping.linkId === linkId).icon ?? icon;
  }

    return (
        <>
          <title>Link Portal</title>
          <Header/>
          <ScreenMedia
            src={station}
          ></ScreenMedia>
          <div className="d-flex flex-column w-100 position-absolute h-100 top-0 overflow-scroll pt-5 justify-content-xxl-center">
            <div className="d-flex flex-row justify-content-center align-content-center align-self-center overflow-scroll flex-wrap col-12 col-xl-8 overflow-hidden">
              {links.map((link, index) => {
                if (!link.social) return <></>
                else return <Button
                  dataType="frosted"
                  href={link.link}
                  outerClass={"button-official-link"}
                  text={
                    <>
                      <div className="logo-container">
                        <img src={getIconById(link.id)} alt={link.name}/>
                      </div>
                      <span className="text-wrap text-center" style={{lineHeight:"normal"}}>{link.name}</span>
                    </>
                  }
                  key={index + "-" + link.name}
                />
              })}
            </div>
          </div>
        </>
    )
}

export default OfficialLinks;