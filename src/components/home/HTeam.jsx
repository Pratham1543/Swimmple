import React from "react";
import TeamCard from "../team/TeamCard";
import "../team/team.css";
import "../about/about.css";
import Heading from "../common/heading/Heading";
import { team } from "../../dummydata";

const Team = () => {
  return (
    <>
      <section id="Hteam" className="team padding">
        <Heading title="Swimple Team" />
        <div className="container grid">
          
          {team.map((val) => (
            <div className="items shadow">
              <div className="img">
                <img src={val.cover} alt="" />
                <div className="overlay">
                  <i className="fab fa-facebook-f icon"></i>
                  <i className="fab fa-twitter icon"></i>
                  <i className="fab fa-instagram icon"></i>
                  <i className="fab fa-tiktok icon"></i>
                </div>
              </div>
              <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work2}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
