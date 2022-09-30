import React from "react";
import "./index.css";
import logo from './logo.svg'; 

export default function Header(props) {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <nav id="navigation">
            <ul className="navigation-menu">
                <li>
                    <a href="#our-services">
                        Our Services
                    </a>
                </li>
				<li>
                    <a  href="#cooperation-offer">
                        Cooperation Offer
                    </a>
                </li>
				<li>
                    <a   href="#about-us">
                        About US
                    </a>
                </li>
            </ul>
        </nav>
        <div className="contact-button">
            <a href="#write_to_us">
				Contact Us
			</a>
        </div>
        
    </div>
  );
}
