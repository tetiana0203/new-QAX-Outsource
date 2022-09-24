import React from "react";
import "./index.css";
import logo from './logo.svg'

export default function Footer(props) {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt=""/>
        <p>
            2016-2022
        </p>
      </div>
      <nav id="navigation-footer">
        <ul className="navigation-footer">
            <li>
                <a href="#our_services">
                    Our Services
                </a>
            </li>
			<li>
                <a  href="#cooperation_offer">
                    Cooperation Offer
                </a>
            </li>
			<li>
                <a   href="#about_us">
                    About US
                </a>    
            </li>
            <li>Privacy policy</li>
        </ul>
      </nav>
      <div className="contacts">
        <ul>
            <li>
                <a>
                    <img src={require("./call.svg").default} alt="" />
                    +380993890957
                </a>
            </li>
            <li>
                <a >
                    <img src={require("./mail2.svg").default} alt="" />
                    Info@qax-camp.com.ua
                </a>
            </li>
            <li>
                <img src={require("./location.svg").default} alt="" />
                Kyiv, Ukraine
            </li>
        </ul>
      </div>
      <div>
        <div className="contact-button-footer">
            <a href="#write_to_us">
				Contact Us
			</a>
        </div>
        <div>
            <img src={require("./mail.svg").default} alt="" />
            <img src={require("./telegram.svg").default} alt="" />
            <img src={require("./phone.svg").default} alt="" />
        </div>
      </div>
      
    </div>
  );
}
