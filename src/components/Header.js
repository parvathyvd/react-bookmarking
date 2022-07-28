import React from "react";
import logo from "../images/logo-bookmark.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <button className="btn login-btn">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
