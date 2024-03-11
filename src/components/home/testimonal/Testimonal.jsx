import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  return (
    <>
      <section id="Testi" className="testimonal padding">
        <div className="container">
          <Heading title="What Does a Session looks like" />

          <div className="content grid4">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
                <p>{val.desc2}</p>
                <p>{val.desc3}</p>
                <p>{val.desc4}</p>
                <p>{val.desc5}</p>
                <p>{val.desc6}</p>
                <p>{val.desc7}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
