import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
  const auth = localStorage.getItem("user")
  return (
    <>
      <Navbar expand="lg" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/" className="text-light">
            Online Shopping
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {auth? <div className='d-flex'>
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>

              <Nav.Link href="/Categories" className="text-light">
                Categories
              </Nav.Link>

              <Nav.Link href="/Products" className="text-light">
                Products
              </Nav.Link>

              <Nav.Link href="/Orders" className="text-light">
                Orders
              </Nav.Link> 

              <Nav.Link href="/signout" className="text-light">
                 SignOut
              </Nav.Link>

              </div> : 
              <div className='d-flex'>

              <Nav.Link href="/signin" className="text-light">
                SignIn
              </Nav.Link>

              <Nav.Link href="/signup" className="text-light">
                SignUp
              </Nav.Link>

              </div> }
              {/* {auth?<Nav.Link href="/signout" className="text-light">
                 SignOut
              </Nav.Link>:
              <Nav.Link href="/signup" className="text-light">
                SignUp
              </Nav.Link>} */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="text-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
