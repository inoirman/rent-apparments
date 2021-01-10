import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">
              Rent Appartments
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink activeClassName="active" to="/appartments">
                  Appartments
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/news">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
