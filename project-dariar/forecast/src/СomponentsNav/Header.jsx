import React, { useState } from 'react';
import './header.css';

import logo from './7forest.png';
import userIcon from './usernav.png';
import nav1 from './Whoweare.png';
import nav2 from './Contacts.png';
import nav3 from './Menu.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
           
                <div className="header-left">
                    <img src={logo} alt="7forest" className="logo-img" />
                </div>


                <nav className="header-nav-desktop">
                    <img src={nav1} alt="Who we are" className="nav-icon" />
                    <img src={nav2} alt="Contacts" className="nav-icon" />
                    <img src={nav3} alt="Menu" className="nav-icon" />
                    <button className="signup-btn">Sign up</button>
                    <img src={userIcon} alt="User" className="user-icon" />
                </nav>


                <div className="mobile-trigger" onClick={toggleMenu}>
                    <span className="menu-label">Menu</span>
                    <div className={`custom-arrow ${isMenuOpen ? 'open' : ''}`}></div>
                </div>


                <div className={`mobile-dropdown ${isMenuOpen ? 'show' : ''}`}>
                    <img src={nav1} alt="Who we are" />
                    <img src={nav2} alt="Contacts" />
                    <img src={nav3} alt="Menu" />
                    <hr />
                    <button className="signup-btn">Sign up</button>
                    <img src={userIcon} alt="User" className="user-icon" />
                </div>

            </div>
        </header>
    );
};

export default Header;