
import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import Courosalcomponents from './Courosalcomponents';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Socialmedia from './Socialmedia';
import Chatbox from './Chatbox';
import Moreinfo from './Moreinfo';
import Events from './Events';

function Dashboard() {
  let username=sessionStorage.getItem("name")
  let role=sessionStorage.getItem("role")
 let total=100;
  let [mem,setMem] = useState(0)
  const [open, setOpen] = useState(false);
  useEffect(()=>{
   
    // const num = setInterval(() => {
    //   (mem!=total)?setMem(mem++): setMem(total)
    
    // },2000);
      },[])

  return (
    <Container className="App" >
       
          <Courosalcomponents/>
         
          <hr></hr>
         
          <Card>
            <Card.Header><div className='text-center'><h1>Your Vision Our Passion</h1></div></Card.Header>
        <Card.Body>
        {/* <Button
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
      </Collapse> */}
      <div>
        <h4>Divine Bharat Chamber of Commerce and Industry, International endeavours to be a catalyst and an instrument for making International Region prosperous and thereby making it a great place to live and work.</h4>
         
        </div>
        </Card.Body>
        <Card.Img variant="top" src={"../src/assets/trainings/mission.jpg"} />

      </Card>
      
    <hr></hr>

    <div className='member_total'>
        <h2>Membership</h2>
        <p>Total Members:{100}</p>
      </div>
      <hr></hr>
      <h1>Our Board  Directers</h1>
       
         <div className='bod' >
          <Row sm={1} md={1} xl={3}>
            <Col> <Card style={{ width: '18rem' }} className='border-3'>
      <Card.Img variant="top" src="./src/assets/cod/MR.S.SIVAKUMAR.jpg" style={{backgroundImage:"url('./src/assets/gallery/b1.jpg')"}} />
      <Card.Body>
        <Card.Title>MR.S.SIVAKUMAR</Card.Title>
        <Card.Text>M/s. SRM Connects</Card.Text>
      
      </Card.Body>
    </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/cod/B.KUMARESON.jpg" />
      <Card.Body>
        <Card.Title>MR.B.KUMARESON</Card.Title>
        <Card.Text>M/s.Ganesh Electricals</Card.Text>
      
      </Card.Body>
    </Card></Col>
            <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/assets/cod/Mr.A.Shanmuga Velayuthan.jpg" />
      <Card.Body>
        <Card.Title>Mr.A.Shanmuga Velayuthan</Card.Title>
        <Card.Text>M/s. IPL Products</Card.Text>
      
      </Card.Body>
    </Card></Col>
          </Row>
          
        </div>

       
<hr></hr>
        <div className="option m-0 p-0">
          <h2 id="gallery">Gallery</h2>
          <p>View moments from our past events.</p>
          <Socialmedia/>

        </div>
        {/* <div className=''>
          <Moreinfo/>
        </div> */}
        {
          (role=="admin" || role=="user")?( <div className='fixed-bottom'>
            <Chatbox username={username} />
            </div>):""
        }
    
    </Container>
  );
}

export default Dashboard;