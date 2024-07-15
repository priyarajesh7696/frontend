import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


function header() {
   
  return (
    <Container fluid>
        <Navbar className="bg-body-tertiary text-center" fixed-bottom position-sticky>
         
         
          <Image  style={{ maxHeight: '50px' }} src="https://www.divinebharat7.com/assets/images/logo.png" rounded />
       
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link   href="/home">Home</Nav.Link>
                <Nav.Link href="/member">Members</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/trainings">Trainings</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
               
              </Nav>

             
             
            </Navbar.Collapse>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
            <Nav.Link href="#action2"><i class="fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#action2"> <i class="fa-brands fa-twitter"></i></Nav.Link>
            <Nav.Link href="#action2"> <i class="fa-brands fa-instagram"></i></Nav.Link>
            <Nav.Link href="#action2"> <i class="fa-brands fa-linkedin"></i></Nav.Link>
            <Nav.Link href="#action2">  <i class="fa-solid fa-envelope"></i></Nav.Link>
          
            </Nav>
            </Navbar.Collapse>
           
            <i class="fa-solid fa-bell"></i>

         
        </Navbar>
        </Container>
  )
}

export default header