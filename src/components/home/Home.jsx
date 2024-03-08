import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import HTeam from "./HTeam";

const Home = () => {
  return (
    <>
      <Hero  />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hprice />
      <HTeam />
    </>
  );
};

export default Home;
