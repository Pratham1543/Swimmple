import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import GoToTopButton from "../home/GoToTopButton"

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <GoToTopButton />
    </>
  );
}

export default CourseHome
