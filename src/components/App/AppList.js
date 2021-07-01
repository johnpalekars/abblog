import React, { Fragment, useState } from "react";
import "./AppList.css"
import ToggleMain from "./TogglePerson/ToggleMain";
import BlogChild from "./Blog/Blog";
import BurgerApp from "./burgerApp/BurgerApp";
import AppsCard from "components/App/AppsCard/AppsCard";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";



const AppList = () => {
  let { path, url } = useRouteMatch();
  return (
      <div style={{ padding: "20px" }} className="">
        <Switch>
          <Fragment>
            <Route exact path={path}>
              <AppsCard />
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
          </Fragment>
        </Switch>
      </div>
  );
};

export default AppList;
