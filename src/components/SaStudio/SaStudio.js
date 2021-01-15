import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import saStudiooo from './images/SaStudio.png';
import saStudioo1 from './images/SaStudio(1).png';
import './SaStudio.css';


export const saStudio = () => {
  return (
    <Container className="saStudioo justify-content-center">

      <Row as="a" // GitHub
        className="ispace App-link justify-content-center"
        href="https://github.com/TurtleWolfe/SaStudio"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <i className="ispace fab fa-github"></i> GitHub <i className="ispace fab fa-github"></i>
      </Row>

      <strong>  {/* https://sastudio.org/ */}
        <Row as="a"
          className="ispace App-link justify-content-center"
          href="https://sastudio.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Rent a private room in this beautiful 100+ year old church that is now a community of artists, educators, healing ministries and locally sourced grocery store."
        >
          <i class="ispace fab fa-twitch"></i> https://sastudio.org/ <i class="ispace fab fa-twitch"></i>
        </Row>
      </strong>

      <br></br>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={saStudiooo} fluid />
        </Col>

      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={9}>
          <Image src={saStudioo1} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default saStudio;