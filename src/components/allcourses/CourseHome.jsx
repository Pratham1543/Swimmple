import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import Testimonal from "../home/testimonal/Testimonal";
import AboutCard from "../about/AboutCard";
import GoToTopButton from "../home/GoToTopButton";

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Services" />
      <AboutCard />
      <Testimonal />
      <GoToTopButton/>
    </>
  );
};

export default CourseHome;
