/*eslint-disable*/
import React from "react";
import Logo from "../../../assets/Home/logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbart__left">
            <div className="navbar__left-logo">
              <img src={Logo} alt="logo" />
            </div>
          </ul>
          <ul className="navbar__right">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
