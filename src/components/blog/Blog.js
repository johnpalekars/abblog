import React, { Fragment, useState } from "react";
import "./Blog.css"
import ToggleMain from "./react-learn/TogglePerson/ToggleMain";
import BlogChild from "./BlogChild";
import BurgerApp from "./react-learn/burgerApp/BurgerApp";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";



const Blog = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="uk-text-center" data-uk-grid>
      <div className="uk-width-1-5">
        <ul className="ul">
          <li className="sideLink">
            <NavLink activeClassName="active" to={`${url}/blog`}>
              Blog
            </NavLink>
          </li>
          <li className="sideLink">
            <NavLink activeClassName="active" to={`${url}/toggle`}>
              Toggle Person
            </NavLink>
          </li>
          <li className="sideLink">
            <NavLink activeClassName="active"  to={`${url}/burger`}>
              Burger App
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <div style={{paddingRight:"20px"}} className="uk-width-4-5">
          <Route exact path={path}>
            <BlogChild />
          </Route>
          <Route path={`${path}/blog`}>
            <BlogChild />
          </Route>
          <Route path={`${path}/toggle`}>
            <ToggleMain />
          </Route>
          <Route path={`${path}/burger`}>
            <BurgerApp />
          </Route>
        </div>
      </Switch>
    </div>
  );
};

export default Blog;
