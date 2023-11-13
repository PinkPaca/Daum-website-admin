import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SubMenuItems from './SubMenuItems';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MenuItem = ({ items, isSubmenu, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className={isSubmenu ? 'submenu' : 'menu'}
      ref={ref}
      onClick={closeDropdown}
    >
      {items.submenu ? (
        <span>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <a href={items.url}>{items.title}</a>

            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
          </button>
          <SubMenuItems
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </span>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItem;
