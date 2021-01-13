import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import saStudiooo from './images/SaStudio.png';
import saStudioo1 from './images/SaStudio(1).png';
import './SaStudio.css';


export const About = () => {
  return (
    <Container className="saStudioo justify-content-center">

      <Row as="a" // GitHub
        className="ispace App-link justify-content-center"
        href="https://github.com/TurtleWolfe"
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
        <Image src={saStudiooo} fluid />
      </Row>
      <Row className="justify-content-center">
        <Image src={saStudioo1} fluid />
      </Row>
    </Container>
  );
};

export default About;