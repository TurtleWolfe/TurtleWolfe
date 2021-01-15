// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <Navbar id="navbar" collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="https://github.com/TurtleWolfe/TurtleWolfe"
        id="profile-link"
        // className='lob'
        target="_blank"
        rel="noopener noreferrer"
        title="Custom Apps and Sites for Small Companies"
      >
        <h5>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav collapseOnSelect className="mr-auto">
          <Nav.Link
            as={Link}
            to="/"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Custom Apps and Sites for Small Companies"
            href="/"
            className='slab'
          >
            Home
          </Nav.Link>

          {/* <Nav.Link
            smooth
            to="/#projects"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
        title="Custom Apps and Sites for Small Companies"
          // etc...
          >
          Link to Hash Fragment
          </Nav.Link> */}

          {/* APIs */}
          <Nav.Link
            as={Link}
            to="/APIs"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Application Programming Interface"
            href="/APIs"
            className='slab'
          >
            API
          </Nav.Link>

          {/* FccD3 */}
          <Nav.Link
            as={Link}
            to="/FccD3"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Data Driven Documents"
            href="/FccD3"
            className='slab'
          >
            D3
          </Nav.Link>

          {/* FccFrontEnd */}
          <Nav.Link
            as={Link}
            to="/FccFrontEnd"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="freeCodeCamp Front End Library Projects"
            href="/FccFrontEnd"
            className='slab'
          >
            React
          </Nav.Link>

          {/* SaStudio */}
          <Nav.Link
            as={Link}
            to="/SaStudio"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Landing Page for a local Client"
            href="/SaStudio"
            className='slab'
          >
            SaStudio
          </Nav.Link>

          {/* WordPress */}
          <Nav.Link
            as={Link}
            to="/WordPress"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Tech Blog @ ScriptHammer.com"
            href="/WordPress"
            className='slab'
          >
            WordPress
          </Nav.Link>

          {/* About */}
          <Nav.Link
            as={Link}
            to="/about"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            title="Custom Apps and Sites for Small Companies"
            href="/about"
            className='slab'
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.defaultProps = {
  title: 'TurtleWolfe.com',
  icon: 'fab fa-github',
  iconFCC: 'fab fa-free-code-camp'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconFCC: PropTypes.string.isRequired
};

export default NavBar;