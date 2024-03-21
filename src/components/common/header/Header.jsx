import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(false); // Close the mobile navigation menu if open
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault(); // Prevent the default click behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"}>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Contact</li>
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
