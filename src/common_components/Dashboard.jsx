
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Courosalcomponents from './Courosalcomponents';
import Card from 'react-bootstrap/Card'
import image4 from '../assets/img4.jpg';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App" >
        <Container >
        <h1 className='text-success'>Welcome to Divine Bharat</h1>
          {/* <p>
            Your gateway to spiritual growth and community.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p> */}
          <Courosalcomponents/>
          </Container>
          <Container >
          <Card>
        <Card.Body>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
  Mission AND Vission
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p>Divine Bharat Chamber of Commerce and Industry, International endeavours to be a catalyst and an instrument for making International Region prosperous and thereby making it a great place to live and work.</p>
         
        </div>
      </Collapse>
        
        </Card.Body>
        <Card.Img variant="bottom" src={image4} />
      </Card>
        </Container>
    

      <Container>
        <div className="option">
          <h2 id="members">Members</h2>
          <p>Discover the benefits of membership.</p>
          <Button variant="dark">Join Now</Button>
        </div>

        <div className="option">
          <h2 id="events">Training Events</h2>
          <p>Explore our upcoming events.</p>
          <Button variant="dark">View Events</Button>
        </div>

        <div className="option">
          <h2 id="gallery">Gallery</h2>
          <p>View moments from our past events.</p>
          <Button variant="dark">View Gallery</Button>
        </div>
      </Container>

    
    </div>
  );
}

export default Dashboard;