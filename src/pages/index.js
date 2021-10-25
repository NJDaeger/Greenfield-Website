import * as React from "react"
import Header from "../components/Header";
import ScreenImage from "../components/ScreenImage";
import skyline from "../images/skyline.jpg"
import stadium from "../images/stadium.jpg"

// markup
const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <Header></Header>
      <ScreenImage src={skyline}></ScreenImage>
      <ScreenImage src={stadium}></ScreenImage>
    </>
  )
}

export default IndexPage
