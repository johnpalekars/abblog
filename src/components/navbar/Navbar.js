import React from 'react'
import './Navbar.css';
import { BrowserRouter as Router,Link } from "react-router-dom";



const Navbar = () => {


  return (
    <Router>
      <nav className="uk-navbar-container uk-margin uk-navbar">
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active" >
              <Link to="">
                Home
              </Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Portfolio</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
