import * as React from "react"
import "../styles/style.scss";
import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import downloads from "../data/downloads.json";
import HomeSlide from "../components/home/HomeSlide";
import Dropdown from "../components/dropdown/Dropdown";
import { useState } from "react";
import interchange from "../images/interchange.jpg";
import ScreenMedia from "../components/screenmedia/ScreenMedia";

const Downloads = () => {

    return (
        <>
            <Header></Header>
            <ScreenMedia src={interchange} alt="Warehouse"></ScreenMedia>
        </>
    )

}

export default Downloads;