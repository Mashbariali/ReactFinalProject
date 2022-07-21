import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';

export default function Navba() {
  return (

    <>
     
      <Navbar bg="light" variant="light" className='Navbar'>
        <Container>
          <Navbar.Brand href="#home">Sea</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Diving">Diving</Nav.Link>
            <Nav.Link href="/AboutUs">About us</Nav.Link>
            <Nav.Link href="/RateUs">Rate us</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

      

      

     
    </>
  );
}

