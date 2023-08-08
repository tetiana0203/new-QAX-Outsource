import React from "react";

import "./Header.scss"

import logo from "./logo.jpg"

 const Header = () => {
  return (
    <div className="header container">

      <div><img src={logo} alt="logo"/></div>

      <nav className="header-menu">
          <a href="#our-services">Our Services</a>
          <a href="#cooperation-offer">Cooperation Offer</a>
          <a href="#about-us">About Us</a>
      </nav>
      
      <a className="contact-us-header" href="#contact-us">Contact Us</a>
      
    </div>
  );
};

export default Header;