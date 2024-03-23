import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/Awrapper";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container">
          <div className="grid2 coursesCard">
            <div className="items">
              <div className="content flex">
                <div className="text">
                  <p>
                    "Meet the dedicated individuals behind Swimple, each
                    bringing a unique set of skills and expertise to drive
                    innovation and excellence in sports science. Our team is
                    committed to revolutionizing the way athletes train and
                    perform, leveraging cutting-edge technology and a passion
                    for sports to help athletes reach their full potential. Get
                    to know the faces shaping the future of sports performance
                    at Swimple."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <TeamCard />
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
