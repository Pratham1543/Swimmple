import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Get in touch - Stay tune and get the latest update</h1>
            <span>
              To facilitate and expedite athletes' path to performance
              excellence in sports by harnessing innovation and technology for
              enhanced learning experiences
            </span>
          </div>

          <div className="right ">
            <div>
              <input className="name" type="text" placeholder="Name" />
              <input
                className="name"
                type="text"
                placeholder="Enter email address"
              />
              <i className="fa fa-paper-plane"></i>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>SWIMPLE</h1>
            <span>SPORTS SCIENCE LAB</span>
            <p>We are engineers with a deep passion for sports</p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img"></div>
                <div className="text">
                  <span>
                    <i className=""></i>
                    <label htmlFor="">{}</label>
                  </span>
                  <span>
                    <i className=""></i>
                    <label htmlFor="">{}</label>
                  </span>
                  <h4>{}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Swimple
        </p>
      </div>
    </>
  );
};

export default Footer;
