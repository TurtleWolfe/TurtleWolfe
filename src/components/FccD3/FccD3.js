import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fccCert from '../../images/fccCertificate.png';
import './FccD3.css';


export const About = () => {
  return (
    <Container className="FccD3 justify-content-center">

      <Row as="a" // GitHub
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
        <Col xs={10} md={9}>
          <Image src={fccCert} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;