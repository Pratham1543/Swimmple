import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import HTeam from "./HTeam";

const Home = () => {
  const testimonialSectionRef = React.useRef(null);
  return (
    <>
      <Hero testimonialSectionRef={testimonialSectionRef} />
      <AboutCard />
      <HAbout />
      <Testimonal ref={testimonialSectionRef} />
      <Hprice />
      <HTeam />
    </>
  );
};

export default Home;
