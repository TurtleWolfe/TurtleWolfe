import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
// import Quote from "./components/pages/quote/quote";
// import MarkDown from "./components/pages/markdown/markdown";
// import Calculator from "./components/pages/calculator/Calculator";
// import Drum from "./components/pages/drum/Drum";
// import Pomodoro from "./components/pages/pomodoro/Pomodoro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import React, { Fragment } from 'react';

import './App.css';
// import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header bg-image">
          <Switch>
            <Route exact path='/' render={props => (
              <Container>
                <p className="App-Orange" >
                  Custome Apps & Sites for Small Companies
                </p>

                <a
                  className="App-link"
                  href="https://github.com/TurtleWolfe/TurtleWolfe"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="fccTempLate"
                >
                  {/* fccTempLate */}
                  <span className="App-hammer">
                    <img src={logo} className="App-logo" alt="logo" />
                  </span>
                </a>
                <h4>
                  <a
                    className="App-link"
                    href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="FreeCodeCamp.com Front End Projects"
                  >
                    <i className="fab fa-free-code-camp"></i>Front End Projects <i className="fab fa-free-code-camp"></i>
                  </a>
                </h4>
                <h5>
                  <a
                    className="App-link"
                    href="https://www.twitch.tv/collections/mgPReDzBVBbReg"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="These Episodes on Twitch I build a template for my freeCodeCamp projects, with FontAwesome, React-BootStrap & Analytics"
                  >
                    <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
                  </a>
                </h5>
                <p className="App-Orange" >
                  Node React Linux Docker
                </p>
                <p className="App-Orange" >
                  Mobile-First Responsive Graphic Design SVG
                </p>
                <p className="App-Orange App-Lorem" >
                  AWS & Google Cloud
                </p>

              </Container>
            )} />
            {/* <Route exact path='/quote' component={Quote} /> */}
            {/* <Route exact path='/markdown' component={MarkDown} /> */}
            {/* <Route exact path='/calculator' component={Calculator} /> */}
            {/* <Route exact path='/drum' component={Drum} /> */}
            {/* <Route exact path='/pomodoro' component={Pomodoro} /> */}
            <Route exact path='/about' component={About} />
          </Switch>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;