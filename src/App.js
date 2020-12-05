import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './routes';
import { Nav } from "react-bootstrap";

function App() {
  return (
      <>
      <Router>
      <div className="container pt-5">
              <Nav variant="tabs">
                  <Nav.Item>
                      <Nav.Link href='/customer-profile'>
                          <Link to='/customer-profile' data-title="My Profile"> 
                              My Profile
                              </Link>
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href='/order-summary'>
                          <Link to='/order-summary' data-title="Order Summary">
                              Order Summary
                              </Link>
                      </Nav.Link>
                  </Nav.Item>
              </Nav>
          
              <Routes />
      </div>
      </Router>
      </>
  );
}

export default App;
