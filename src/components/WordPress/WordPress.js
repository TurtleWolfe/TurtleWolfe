import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import fccCert from '../../images/fccCertificate.png';
import './WordPress.css';


export const About = () => {
  return (
    <Container className="About justify-content-center">
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

      {/* <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://fontawesome.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Awesome Fonts"
      >
        <i className="ispace fab fa-font-awesome-alt"></i> Font Awesome <i className="ispace fab fa-font-awesome-alt"></i>
      </Row>

      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links"
        target="_blank"
        rel="noopener noreferrer"
        title="Markdown Cheatsheet"
      >
        <i className="ispace fab fa-markdown"></i> Markdown Cheatsheet <i className="ispace fab fa-markdown"></i>
      </Row>

      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://css-tricks.com/essential-meta-tags-social-media/"
        target="_blank"
        rel="noopener noreferrer"
        title="The Essential Meta Tags for Social Media"
      >
        <i className="ispace far fa-file-code"></i> Essential Meta Tags<i className="ispace far fa-file-code"></i>
      </Row> */}

      <br></br>
      <Row className="justify-content-center">
        <Image src={fccCert} fluid />
      </Row>
    </Container>
  );
};

export default About;