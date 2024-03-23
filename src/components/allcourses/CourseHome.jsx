import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import Testimonal from "../home/testimonal/Testimonal"

const CourseHome = () => {
  return (
    <>
       <Back title='Explore Services' />
      <AboutCard />
      <Testimonal/>
      <CoursesCard />
    </>
  );
}

export default CourseHome
