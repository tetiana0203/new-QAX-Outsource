import React from "react";

import "./Footer.scss";

import logo from "./logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info container">
        <div className="footer__logo">
          <img className="footer__logo--img" src={logo} alt="logo" />
          <span  className="footer__logo--text">2016-2023 QAX</span>
        </div>
        <ul className="footer__links">
          <li><a href="#our-services">Our Services</a></li>
          <li><a href="#cooperation-offer">Cooperation Offer</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a>Privacy policy</a></li>
        </ul>
        <ul className="footer__contacts">
          <li className="footer__contacts--item">+380993890957</li>
          <li className="footer__contacts--item">Info@qax-camp.com.ua</li>
          <li className="footer__contacts--item">Kyiv, Ukraine</li>
        </ul>
       
      </div>
    </div>
  );
};

export default Footer;
