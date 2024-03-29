import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section id="Hservice" className="aboutHome">
        <div className="container heading">
          <Heading
            subtitle="The #1 Sports Science Lab in India"
            title="What are we offering.."
          />
        </div>
        <div className="container flexSB">
          <div className="left row1">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexS">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                      <p>{val.descc}</p>
                      <p>{val.desc2}</p>
                      <p>{val.desc3}</p>
                      <p>{val.desc4}</p>
                      <p>{val.desc5}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default AboutCard;
