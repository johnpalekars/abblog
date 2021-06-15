import './App.css';
import Home from './home/Home'
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from 'components/navbar/Navbar';
import About from 'components/about/About';
import Blog from 'components/blog/Blog';
import Portfolio from 'components/Portfolio/Portfolio';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            <Redirect to="/home" />
            <Redirect from="/" to="/home" />
          </Switch>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
