import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import UdemyAPI from '../../images/UdemyAPI.jpeg';
import './APIs.css';


export const About = () => {
  return (
    <Container className="API justify-content-center">
      {/* <ul>
          <li>
            <a href="https://codepen.io/TurtleWolf/">
              <i className="fa fa-codepen" aria-hidden="true" /> CodePen
                </a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/266866570176327/">
              <i className="fa fa-facebook-official" aria-hidden="true" />{" "}
                  DangerousMinds
                </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/turtlewolf">
              <i className="fa fa-free-code-camp" aria-hidden="true" />{" "}
                  FreeCodeCamp
                </a>
          </li>
        </ul> */}

      <Row as="a" // GitHub
        className="ispace App-link justify-content-center"
        href="https://github.com/TurtleWolfe/DevCamperAPIv001"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <i className="ispace fab fa-github"></i> GitHub <i className="ispace fab fa-github"></i>
      </Row>

      <strong>  {/* Udemy */}
        <Row as="a"
          className="ispace App-link justify-content-center"
          href="https://www.udemy.com/certificate/UC-8033cc47-612f-4a7b-afc3-c7a8c9273686/"
          target="_blank"
          rel="noopener noreferrer"
          title="Create a real world backend for a bootcamp directory app"
        >
          <i class="ispace fab fa-twitch"></i> Udemy API Master Class <i class="ispace fab fa-twitch"></i>
        </Row>
      </strong>

      {/* <Row as="a" // Twitter
        className="ispace App-link justify-content-center"
        // href="https://twitter.com/JonPohlner?lang=en"
        href="https://twitter.com/ScriptHammer?lang=en"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i class="ispace fab fa-twitter"></i> Twitter <i class="ispace fab fa-twitter"></i>
      </Row> */}

      {/* <Row as="a" // YouTube
        className="ispace App-link justify-content-center"
        href="https://www.youtube.com/playlist?list=PLETG2T1KvnioI_uRwEx1-efEI6EpoN_ZR"
        target="_blank"
        rel="noopener noreferrer"
        title="YouTube/TW"
      >
        <i className="ispace fab fa-youtube"></i> YouTube <i className="ispace fab fa-youtube"></i>
      </Row> */}

      {/* <Row as="a" // LinkedIn
        className="ispace App-link justify-content-center"
        href="https://www.linkedin.com/in/jonathan-pohlner-87796377/"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i className="ispace fab fa-linkedin"></i> LinkedIn <i className="ispace fab fa-linkedin"></i>
      </Row> */}

      <br></br>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={UdemyAPI} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;