import React from 'react'
import './Navbar.css';
import { NavLink } from "react-router-dom";



const Navbar = () => {


  return (
    <nav className="uk-navbar-container uk-margin uk-navbar">
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li >
            <NavLink exact activeClassName="uk-active" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="uk-active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
