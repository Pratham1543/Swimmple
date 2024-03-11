import React from "react";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section id="Habout" className="aboutHome">
        <div className="container">
          <Heading title="How much improvement can a swimmer expect?" />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="text">
                      <p>{val.coursesName}</p>

                      <p>{val.coursesName2}</p>
                      <p>{val.coursesName3}</p>
                      <p>{val.coursesName4}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
