import React from 'react'
import { Container, Navbar, Nav, Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';

function Courosalcomponents() {
  return (
    <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                />
                
                <Carousel.Caption>
                    <h3>Welcome to Devine Bharat</h3>
                    <p> Your gateway to spiritual growth and community.</p>
                    <Button variant="primary">Join our DBCC Family</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
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