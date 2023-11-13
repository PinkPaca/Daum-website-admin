import React from 'react';
import { menuItems } from '../../menuItems';
import MenuItem from './MenuItem';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src={require('../../assets/Logo.png')} alt="교회 로고" />
        <p>다음교회</p>
      </a>
      {menuItems.map((item, index) => {
        const depthLevel = 0;
        return (
          <MenuItem
            items={item}
            key={index}
            depthLevel={depthLevel}
            isSubmenu={false}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
