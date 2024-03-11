import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const scrollToTestimonial = () => {
    var element = window.document.getElementById("Testi");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToTestimoniall = () => {
    var element = window.document.getElementById("Hprice");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading title="Making swimming simple through sport science and data" />

            <p>
              "We are a sports science lab in India specializing in swimming
              performance consulting and swim analytics systems."
            </p>
            <div className="button">
              <button className="primary-btn" onClick={scrollToTestimonial}>
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>

              <button onClick={scrollToTestimoniall}>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
