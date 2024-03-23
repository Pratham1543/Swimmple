import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(false); // Close the mobile navigation menu
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"}>
            <li onClick={handleClick}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">BOOK A SESSION</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
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
