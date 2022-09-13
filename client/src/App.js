//Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import Routes from "./Routes";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App">
        <Navbar fixed='top' collapseOnSelect expand='lg' className="mb-3">
          <Navbar.Brand href="/">JS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={window.location.pathname}>
              <Nav.Link className="nav-link" href='/#home-container' >Web Dev</Nav.Link>
              <Nav.Link className='nav-link' href="/#features-container">Features</Nav.Link>
              <Nav.Link className='nav-link' href="/#projects-container">My Projects</Nav.Link>
              <Nav.Link className='nav-link' href="/#contact-container">Contact</Nav.Link>
              <Nav.Link className='nav-link' href="/#footer-container">Find Me</Nav.Link>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link className='nav-link' href='/signup'>Signup</Nav.Link>
                  <Nav.Link className='nav-link' href='/login'>Login</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div >
    )
  );
}

export default App;