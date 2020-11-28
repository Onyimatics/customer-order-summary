import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Nav } from "react-bootstrap";

function App() {
  return (
      <div className="container pt-5">
              <Nav variant="tabs">
                  <Nav.Item>
                      <Nav.Link href='/customer-profile'>
                              My Profile
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href='/order-summary'>
                              Order Summary
                      </Nav.Link>
                  </Nav.Item>
              </Nav>
          <Router>
              <Routes />
          </Router>
      </div>
  );
}

export default App;
