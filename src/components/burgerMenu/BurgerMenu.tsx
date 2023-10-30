import React from 'react';

import './BurgerMenu.scss';

interface MenuItem {
    name: string;
    link: string;
  }
  
interface BurgerMenuProps {
    menuItems: MenuItem[];
    isOpen:boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems,isOpen }) => {

  
    return (
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        
    
          {menuItems.map((item, index) => (
                <a key={index} href={item.link}>
                {item.name}
                </a>
            ))}
        </div>
                
      
    );
  };
  
  export default BurgerMenu;