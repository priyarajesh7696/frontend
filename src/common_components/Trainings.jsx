import React from 'react'
import { Container, Navbar, Nav, Button, Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
function Trainings() {
  return (
    <div  className="d-flex mt-3 p-3">
<Row sm={1} md={2} lg={2}>
  <Col>
      <Container fluid className='link-dark'>
<h1>We provide a wide range of business services
</h1>
<Image className='mt-2 p-2'style={{ maxHeight: '300px' }}  src={"../src/assets/logo/c1.jpg"} rounded />
      </Container>
      </Col>
      <Col>
      <Container fluid>
<p className='training '>The Chamber will train, motivate, encourage and innovate modern techniques for the benefit of our members in order to achieve our Mission. The obstacles and difficulties being faced by the members will be cleared by our expert team now and then to ease their business activities. Our ultimate goal is to pave way for smooth sailing of businesses of our member companies so as to maximise their production and profits. We will play a vital role as a catalyst to support in all levels of management of our member companies. ’Outlook & Outreach' will be our Vision.</p>
      </Container>
      </Col>
      </Row>
    </div>
  )
}

export default Trainings