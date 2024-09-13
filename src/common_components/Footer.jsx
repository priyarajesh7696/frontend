import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Container, Navbar, Nav, Button, Image, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      {/* <div className="mt-5" > */}
      <Container fluid className="mt-3 p-2" fixed-bottom position-fixed>
        
      <footer className="footer">
        
        <Row  xs={1} md={2} lg={3}>
       <Col>
         
            <div className="footer__section">
              <Image
                style={{ maxHeight: "50px" }}
                src="../src/assets/logo/logo.jpg"
                rounded
              />

              <h4>About Us</h4>
              <p>Contact us: admin@divinebharat7.com </p>
              <p>
                <Badge bg="success " className="btn btn-success btn-lg">
                  <i class="fa-brands fa-square-whatsapp "></i> Mobile: +91
                  91500 35418
                </Badge>
              </p>
            </div>
            </Col>
            <Col>
            <div className="footer__section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/member">Member</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/trainings">Trainings</a>
                </li>
                <li>
                  <a href="/contacts">Contact Us</a>
                </li>
              </ul>
            </div>
            </Col>
            <Col>
            <div className="footer__section">
              <h4>Follow Us</h4>
              <div className="footer__social-icons">
                <Stack direction="horizontal" gap={4} className="  ">
                  <a
                    href="https://www.facebook.com/DivineBharatChamberfb"
                    target="_blank"
                    className="text-center mx-2"
                  >
                    <Badge bg="primary " className="badge btn btn-primary btn-lg">
                      <i class="fa-brands fa-facebook"></i>
                    </Badge>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                    target="_blank"
                    className="text-center mx-2"
                  >
                    <Badge bg="dark" className="badge btn btn-primary btn-lg">
                      <i class="fa-brands fa-twitter"></i>
                    </Badge>
                  </a>
                  <a
                    href="https://www.instagram.com/dbcc_7/"
                    target="_blank"
                    className="text-center mx-2"
                  >
                    <Badge bg="warning" className="badge btn btn-primary btn-lg">
                      <i class="fa-brands fa-instagram"></i>
                    </Badge>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                    target="_blank"
                    className="text-center mx-2"
                  >
                    <Badge bg="info" className="badge btn btn-primary btn-lg">
                      <i class="fa-brands fa-linkedin"></i>
                    </Badge>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCXB01kyNaZhjCxHVVd0O3rw"
                    target="_blank"
                    className="text-center mx-2"
                  >
                    <Badge bg="danger" className="badge btn btn-danger btn-lg">
                      <i class="fa-brands fa-square-youtube"></i>
                    </Badge>
                  </a>
                </Stack>
              </div>
             
            </div>
            </Col>
            {/* Add more sections as needed */}
         
          </Row>
          <p>&copy; 2024 SRM CONNECTS. All rights reserved.</p>
        </footer>
        {/* <footer className="footer">
          <Stack
              direction="horizontal"
              gap={4}
              className=" d-flex justify-content-center align-items-center h-25 me-2 m-3"
            >
              <a
                href="https://www.facebook.com/DivineBharatChamberfb"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="primary " className="btn btn-primary btn-lg" >
                  <i class="fa-brands fa-facebook"></i>
                </Badge>
              </a>
              <a
                href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="dark"className="btn btn-primary btn-lg" >
                  <i class="fa-brands fa-twitter"></i>
                </Badge>
              </a>
              <a
                href="https://www.instagram.com/dbcc_7/"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="danger"className="btn btn-primary btn-lg" >
                  <i class="fa-brands fa-instagram"></i>
                </Badge>
              </a>
              <a
                href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="info"className="btn btn-primary btn-lg" >
                  <i class="fa-brands fa-linkedin"></i>
                </Badge>
              </a>

              <a
                href="https://www.youtube.com/channel/UCXB01kyNaZhjCxHVVd0O3rw"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="success"className="btn btn-primary btn-lg" >
                  <i class="fa-brands fa-square-youtube"></i>
                </Badge>
              </a>
            </Stack>
         
        </footer>
         */}
       
      </Container>
      {/* </div> */}
    </>
  );
}

export default Footer;
