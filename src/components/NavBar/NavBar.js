// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import './NavBar.css';
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <Navbar id="navbar" collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="https://github.com/TurtleWolfe/TurtleWolfe"
        id="profile-link"
        // className='lob'
        target="_blank"
        rel="noopener noreferrer"
        title="TempLate Scaffolding for Free Code Camp Projects, with FontAwesome, React-Router & Analytics">
        <h5>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav collapseOnSelect className="mr-auto">
          <NavHashLink
            as={Link}
            to="/"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/"
            className='slab'
          >
            Home
          </NavHashLink>

          {/* <NavHashLink
            smooth
            to="/#projects"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
          // etc...
          >
          Link to Hash Fragment
          </NavHashLink> */}

          {/* APIs */}
          <NavHashLink
            as={Link}
            to="/APIs"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/APIs"
            className='slab'
          >
            APIs
          </NavHashLink>

          {/* FccD3 */}
          <NavHashLink
            as={Link}
            to="/FccD3"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/FccD3"
            className='slab'
          >
            FccD3
          </NavHashLink>

          {/* FccFrontEnd */}
          <NavHashLink
            as={Link}
            to="/FccFrontEnd"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/FccFrontEnd"
            className='slab'
          >
            FccFrontEnd
          </NavHashLink>

          {/* SaStudio */}
          <NavHashLink
            as={Link}
            to="/SaStudio"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/SaStudio"
            className='slab'
          >
            SaStudio
          </NavHashLink>

          {/* WordPress */}
          <NavHashLink
            as={Link}
            to="/WordPress"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/WordPress"
            className='slab'
          >
            WordPress
          </NavHashLink>

          {/* About */}
          <NavHashLink
            as={Link}
            to="/about"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            href="/about"
            className='slab'
          >
            About
          </NavHashLink>
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