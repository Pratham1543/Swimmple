import React, { useState, useEffect } from "react";
import "./GoToTopButton.css"; // Import CSS file for styling

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scroll events
  const handleScroll = () => {
    // Show the button when the user has scrolled down 200px
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <button
      className={`goToTopButton ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-long-arrow-alt-up"></i>
    </button>
  );
};

export default GoToTopButton;
