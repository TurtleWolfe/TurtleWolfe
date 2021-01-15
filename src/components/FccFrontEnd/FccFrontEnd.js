import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fccTemp0 from './images/fccTempLate.png';
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
          <i class="ispace fab fa-twitch"></i> https://fccTempLate <i class="ispace fab fa-twitch"></i>
        </Row>
      </strong>

      <br></br>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={fccTemp0} fluid />
        </Col>


      </Row>

      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={fccTemp2} fluid />
        </Col>


      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={fccTemp3} fluid />
        </Col>


      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={fccTemp4} fluid />
        </Col>


      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={fccCert} fluid />
        </Col>


      </Row>
    </Container>
  );
};

export default About;