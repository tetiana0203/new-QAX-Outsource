import React from "react";

import logo from "./logo.png";
import phone from "./phone-icon.svg";
import mail from "./mail-icon.svg";
import telegram from "./telegram-icon.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-block container">
        <div>
          <img src={logo} alt="logo" />
          <span>2016-2023 QAX</span>
        </div>
        <ul className="footer-links">
          <li>Our Services</li>
          <li>Cooperation Offer</li>
          <li>About Us</li>
          <li>Privacy policy</li>
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
            <img src={phone} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
