import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import HTeam from "./HTeam";
import GoToTopButton from "./GoToTopButton";
import Awrapper from "../about/Awrapper";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Awrapper/>
      <HAbout />
      <Testimonal />
      <Hprice />
      <HTeam />
      <GoToTopButton />
    </>
  );
};

export default Home;
