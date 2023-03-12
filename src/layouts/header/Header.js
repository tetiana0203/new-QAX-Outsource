import React from "react";

import "./Header.scss"

import logo from "./logo.jpg"

 const Header = () => {
  return (
    <div className="header container">

      <div><img src={logo} alt="logo"/></div>

      <nav className="header-menu">
          <a href="#">Our Services</a>
          <a href="#">Cooperation Offer</a>
          <a href="#">About Us</a>
      </nav>
      
      <button>Contact Us</button>
      
    </div>
  );
};

export default Header;