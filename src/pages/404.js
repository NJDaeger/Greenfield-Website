import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/shared/Header"
import ScreenMedia from "../components/screenmedia/ScreenMedia"
import construction from "../images/Construction.jpg"

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header></Header>
      <div className="d-flex position-absolute text-white top-50 w-100 flex-column align-items-center">
        <h1 style={{fontSize:"45pt", fontWeight:"bold", textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}}>404</h1>
        <h2 style={{fontSize:"35pt", fontWeight:"bold", textShadow:"0 0 0.5rem black, 0 0 0.5rem black, 0 0 1rem black, 0 0 2rem black"}}>This is not the shit you are looking for</h2>
      </div>
      <ScreenMedia 
        src={construction}
      ></ScreenMedia>
    </>
  )
}

export default NotFoundPage
