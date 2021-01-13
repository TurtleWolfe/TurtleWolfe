import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import fccTemp0 from './images/fccTempLate.png';
import fccTemp1 from './images/fccTempLate(1).png';
import fccTemp2 from './images/fccTempLate(2).png';
import fccTemp3 from './images/fccTempLate(3).png';
import fccTemp4 from './images/fccTempLate(4).png';
import fccCert from '../../images/fccCertificate.png';


import './FccFrontEnd.css';


export const About = () => {
  return (
    <Container className="FccFrontEndd justify-content-center">

      <Row as="a" // GitHub
        className="ispace App-link justify-content-center"
        href="https://github.com/TurtleWolfe/fccTempLate"
        target="_blank"
        rel="noopener noreferrer"
        title="Repo for Front Library Projects"
      >
        <i className="ispace fab fa-github"></i> GitHub <i className="ispace fab fa-github"></i>
      </Row>

      <strong>  {/* fccTempLate */}
        <Row as="a"
          className="ispace App-link justify-content-center"
          href="https://turtlewolfe.github.io/fccTempLate/"
          target="_blank"
          rel="noopener noreferrer"
          title="FrontEnd Libraries React Projects per freeCodeCamp"
        >
          <i class="ispace fab fa-twitch"></i> https://turtlewolfe.github.io/fccTempLate/ <i class="ispace fab fa-twitch"></i>
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
        <Image src={fccTemp0} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={fccTemp1} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={fccTemp2} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={fccTemp3} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={fccTemp4} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={fccCert} fluid />
      </Row>
    </Container>
  );
};

export default About;