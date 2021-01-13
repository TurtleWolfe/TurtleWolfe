import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
import APIs from "./components/APIs/APIs";
import FccD3 from "./components/FccD3/FccD3";
import FccFrontEnd from "./components/FccFrontEnd/FccFrontEnd";
import SaStudio from "./components/SaStudio/SaStudio";
import WordPress from "./components/WordPress/WordPress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
import { Container, Row, Image } from 'react-bootstrap';
import fccCert from '../src/images/fccCertificate.png';


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
              <Container id="welcome-section">
                <p className="App-Orange">
                  <h1>
                    Custom Apps & Sites for Small Companies
                  </h1>
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

                <div id="projects">
                  <h4>
                    <a
                      className="App-link project-tile"
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
                </div>

                <p className="App-Orange" >
                  Node React Linux Docker
                </p>
                <p className="App-Orange" >
                  Full Stack AWS & Google Cloud
                </p>
                <p className="App-Orange" >
                  Mobile-First Responsive Graphic Design SVG
                </p>
                <p className="App-Orange" >
                  PhotoShop or GIMP & CAD or SketchUp
                </p>
                {/* <p className="App-Orange App-Lorem" id="projects"> */}
                <p className="App-Orange" id="projects">
                  3D Augmented Reality with C# in Unity
                </p>

                <Container className="About justify-content-center">
                  <Row as="a" // GitHub
                    // id="profile-link"
                    className="ispace App-link justify-content-center"
                    href="https://github.com/TurtleWolfe"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <i className="ispace fab fa-github"></i> GitHub <i className="ispace fab fa-github"></i>
                  </Row>

                  <strong>  {/* Twitch */}
                    <Row as="a"
                      className="ispace App-link justify-content-center"
                      href="https://www.twitch.tv/turtlewolfe"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Learn React"
                    >
                      <i class="ispace fab fa-twitch"></i> Twitch <i class="ispace fab fa-twitch"></i>
                    </Row>
                  </strong>

                  <Row as="a" // Twitter
                    className="ispace App-link justify-content-center"
                    // href="https://twitter.com/JonPohlner?lang=en"
                    href="https://twitter.com/ScriptHammer?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Learn React"
                  >
                    <i class="ispace fab fa-twitter"></i> Twitter <i class="ispace fab fa-twitter"></i>
                  </Row>

                  <Row as="a" // YouTube
                    className="ispace App-link justify-content-center"
                    href="https://www.youtube.com/playlist?list=PLETG2T1KvnioI_uRwEx1-efEI6EpoN_ZR"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube/TW"
                  >
                    <i className="ispace fab fa-youtube"></i> YouTube <i className="ispace fab fa-youtube"></i>
                  </Row>

                  <Row as="a" // LinkedIn
                    className="ispace App-link justify-content-center"
                    href="https://www.linkedin.com/in/jonathan-pohlner-87796377/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Learn React"
                  >
                    <i className="ispace fab fa-linkedin"></i> LinkedIn <i className="ispace fab fa-linkedin"></i>
                  </Row>

                  <br></br>
                  <Row className="justify-content-center">
                    <Image src={fccCert} fluid />
                  </Row>
                </Container>

              </Container>
            )} />
            {/* <Route href="#projects" /> */}
            <Route exact path='/APIs' component={APIs} />
            <Route exact path='/FccD3' component={FccD3} />
            <Route exact path='/FccFrontEnd' component={FccFrontEnd} />
            <Route exact path='/SaStudio' component={SaStudio} />
            <Route exact path='/WordPress' component={WordPress} />
            <Route exact path='/about' component={About} />
          </Switch>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
