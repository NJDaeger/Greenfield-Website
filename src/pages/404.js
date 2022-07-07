import * as React from "react"
import Header from "../components/shared/Header"
import ScreenMedia from "../components/screenmedia/ScreenMedia"
import construction from "../images/Construction.jpg"
import "../styles/style.scss";
import Button from "../components/button/Button";
import { GetPageLink } from "../service/linkservice";
import { useState } from "react";
import {useLocation} from "@reach/router"

// markup
const NotFoundPage = () => {

  return (
    <>
      <Header></Header>
      <div className="d-flex position-absolute text-white top-50 w-100 flex-column align-items-center" style={{zIndex:1}}>
        <h1 className="text-center" style={{fontSize:"45pt", fontWeight:"bold", textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}}>404</h1>
        <h2 className="text-center" style={{fontSize:"35pt", fontWeight:"bold", textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}}>This is not the shit you are looking for</h2>
        <Button href={GetPageLink("./")} text="Go Home" innerClass={"py-2 px-4"} dataType="glass"></Button>
      </div>
      <ScreenMedia 
        src={construction}
      ></ScreenMedia>
    </>
  )
}

export default NotFoundPage
