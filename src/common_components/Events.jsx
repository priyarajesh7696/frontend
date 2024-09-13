import React from 'react'
import { Container, Navbar, Nav, Button, Col,Row } from 'react-bootstrap';
function Events() {
  return (
    <Container className='d-flex justify-content-between align-content-center gap-4 p-3 mt-2' >
    <Row xs={1} md={2} lg={3}>
     <Col>
   <div class="events mt-3 ">
    <h2>B2B Mobile Launch</h2>
   
    <img class="img-fluid" src={"../src/assets/trainings/b2b.jpg"} alt="New York" width="1100" height="500"/> 
  </div>
  </Col>
  <Col>
  <div class="events mt-3 ">
  <h2>Member Training</h2>
  
  <img class="img-fluid" src={"../src/assets/trainings/training.jpg"} alt="New York" width="1100" height="500"/> 
</div>
</Col>
<Col>
<div class="events mt-3 ">
  <h2>Foundation day </h2>
  
  <img class="img-fluid" src={"../src/assets/trainings/foundation.jpg"} alt="New York" width="1100" height="500"/> 
</div>
</Col>
</Row>
</Container>
  )
}

export default Events