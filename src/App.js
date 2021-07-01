import './App.css';
import Home from './Containers/home/Home'
// import ReactDOM from "react-dom";
import {React, Fragment} from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from 'components/navbar/Navbar';
import About from 'components/about/About';
import AppList from './components/App/AppList'
import Footer from 'components/footer/Footer';

const App= () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/app">
              <AppList/>
            </Route>
            <Redirect to="/home" />
            <Redirect from="/" to="/home" />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
