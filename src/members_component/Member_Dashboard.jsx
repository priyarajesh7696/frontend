import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
function Member_Dashboard() {
  return (
    <Container>
    <div className="option">
      <h2 id="members">Members</h2>
      <p>Discover the benefits of membership.</p>
      <Button variant="success">Join Now</Button>
    </div>

    <Row xs={1} md={2} className="g-4">
     
        <Col >
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Member 1</Card.Title>
              <Card.Text>
               <h6>Organisation :</h6>
               <h6>Dealing :</h6>
               <h6>Address :</h6>
               <h6>Mobile :</h6>
               <h6>Email :</h6>
               <h6>Web :</h6>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Member 2</Card.Title>
              <Card.Text>
              <h6>Organisation :</h6>
               <h6>Dealing :</h6>
               <h6>Address :</h6>
               <h6>Mobile :</h6>
               <h6>Email :</h6>
               <h6>Web :</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Member 3</Card.Title>
              <Card.Text>
              <h6>Organisation :</h6>
               <h6>Dealing :</h6>
               <h6>Address :</h6>
               <h6>Mobile :</h6>
               <h6>Email :</h6>
               <h6>Web :</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Member 4</Card.Title>
              <Card.Text>
              <h6>Organaisation :</h6>
               <h6>Dealing :</h6>
               <h6>Address :</h6>
               <h6>Mobile :</h6>
               <h6>Email :</h6>
               <h6>Web :</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
  </Container>
  )
}

export default Member_Dashboard