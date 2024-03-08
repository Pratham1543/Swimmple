import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <a href="#Hteam">Home</a>
            </li>
            <li>
              <a href="#Hservice">Services</a>
            </li>
            <li>
              <a href="#Habout">About</a>
            </li>
            <li>
              <a href="#Hteam">Team</a>
            </li>
            <li>
              <a href="#Hprice">Pricing</a>
            </li>
            <li>
              <a href="#Hcontact">Contact</a>
            </li>
          </ul>
          <div className="start">
            <div className="button">BOOK A SESSION</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
