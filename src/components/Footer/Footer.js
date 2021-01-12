// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
const Footer = ({ icon, iconFCC, ftrDefaultz2 }) => {
  return (
    <footer id="main-footer" className="grid footer mt-auto bg-dark fixed-bottom text-muted " variant="dark">
      <HashLink smooth to="#top">Link to Top of Page</HashLink>
      <div>dev.TurtleWolfe@gmail.com</div>
      <div>by:{" "}
        <a href="https://scripthammer.com/" target="_blank" rel="noreferrer">
          ScriptHammer.com &copy; 2012
        {new Date().getFullYear() > 2010 && ("-" + new Date().getFullYear())}
        </a>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  ftrDefaultz2: 'footer',
  icon: 'fab fa-github',
  iconFCC: 'fab fa-free-code-camp'
};

Footer.propTypes = {
  ftrDefaultz2: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconFCC: PropTypes.string.isRequired
};

export default Footer;