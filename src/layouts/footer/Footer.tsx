import React from "react";

import "./Footer.scss";

import logo from "./logo.png"
import mail from "./mail-icon.svg"
import telegram from "./telegram-icon.svg"
import phone from "./phone-icon.svg"

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-block container">
        <div>
          <img src={logo} alt="logo" />
          <span>2016-2023 QAX</span>
        </div>
        <ul className="footer-links">
          <li><a href="#our-services">Our Services</a></li>
          <li><a href="#cooperation-offer">Cooperation Offer</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a>Privacy policy</a></li>
        </ul>
        <ul className="footer-contacts">
          <li>+380993890957</li>
          <li>Info@qax-camp.com.ua</li>
          <li>Kyiv, Ukraine</li>
        </ul>
        <div>
          <button>Contact Us</button>
          <div className="footer-icons">
            <img src={mail} alt="icon" />
            <img src={telegram} alt="icon" />
            <img src={phone}alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
