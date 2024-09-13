import React from 'react'
import { Container, Navbar, Nav, Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Courosalcomponents() {
  return (
    
    <Carousel className=''>
            <Carousel.Item>
                <img
                    className="w-100  "
                    src={"../src/assets/trainings/b2b.jpg"}
                    alt="First slide"
                />
                
                <Carousel.Caption>
                    <h1>Welcome to Devine Bharat</h1>
                    <p> Your gateway to spiritual growth and community.</p>
                    <Button variant="primary">Join our DBCC Family</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                    className="d-block w-100"
                    src={"../src/assets/trainings/trainings.jpg"}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <img
                    className="d-block w-100"
                    src={"../src/assets/trainings/foundation.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       
  )
}

export default Courosalcomponents