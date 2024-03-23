import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import GoToTopButton from "../home/GoToTopButton"

const About = () => {
  return (
    <>
      <Back title="About Us" />
      <AboutCard />
      <GoToTopButton />
    </>
  );
}

export default About
