import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import "./Header.scss"

import logo from "./logo.jpg"


const Header: React.FC = () => {

  const menuItems = [
    { name: 'Our Services', link: '#our-services' },
    { name: 'Сooperation offer', link: '#cooperation-offer' },
    { name: 'About Us', link: '#about-us' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  }


  return (
    <header className="header container">

      <div className="header__block--desktop">

        <div className="header__logo">
          <img className="header__logo__image"src={logo} alt="logo" />
        </div>

        <nav className="header__menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          ))}
        </nav>

        <a className="header__button header__button--hover" href="#contact-us">Contact Us</a>



      </div>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Menu className="header__block--mobile" right isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} width={'100%'}>

        {menuItems.map((item, index) => (
          <a key={index} href={item.link} onClick={toggleMenu}>
            {item.name}
          </a>
        ))}

        <a className="header-contact-us" href="#contact-us">Contact Us</a>

      </Menu>

    </header>
  );
};

export default Header;