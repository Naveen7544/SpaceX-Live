import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import logo from '../assets/logo.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  function handleItemClick(index) {
    setActiveItem(index);
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <img className="space-log" src={logo} alt="Logo" />
                {/* <AiIcons.AiOutlineClose /> */}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.cName} ${index === activeItem ? 'menu-active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
