import React from 'react';
import Logo from '../../../assets/Home/logo.png';
import './styles.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar__container">
        <ul className="navbart__left">
          <div className="navbar__left-logo">
            <img src={Logo} alt="logo" />
          </div>
        </ul>
        <ul className="navbar__right">
          {/* TODO: convert this to array of object to support different urls */}
          {['Home', 'About Me', 'Skills', 'Contact Me'].map(link => (
            <li>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
