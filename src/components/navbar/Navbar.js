import React,{ Fragment } from 'react'
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Resume from "../../../src/assets/Abhishek_Palekar_Resume.pdf";


const Navbar = () => {


  return (
    <Fragment>
      <nav className="uk-navbar-container uk-margin uk-navbar">
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
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
              <NavLink activeClassName="uk-active" to="/app">
                Apps
              </NavLink>
            </li>
            <li>
              <a
                href={Resume}
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
