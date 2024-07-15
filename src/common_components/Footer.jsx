import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
    
      <div className="mt-5" fixed-bottom position-fixed>
      <Container>
        <footer className="footer">
         
            <p>
              Contact us: admin@divinebharat7.com |{" "}
              <i class="fa-brands fa-square-whatsapp"></i> Mobile: +91 91500
              35418
            </p>

            <Stack
              direction="horizontal"
              gap={4}
              className=" d-flex justify-content-center align-items-center h-25 me-5 m-4"
            >
              <a
                href="https://www.facebook.com/DivineBharatChamberfb"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="primary">
                  <i class="fa-brands fa-facebook"></i>
                </Badge>
              </a>
              <a
                href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="dark">
                  <i class="fa-brands fa-twitter"></i>
                </Badge>
              </a>
              <a
                href="https://www.instagram.com/dbcc_7/"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="danger">
                  <i class="fa-brands fa-instagram"></i>
                </Badge>
              </a>
              <a
                href="https://in.linkedin.com/company/divine-bharat-chamber-of-commerce"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="info">
                  <i class="fa-brands fa-linkedin"></i>
                </Badge>
              </a>

              <a
                href="https://www.youtube.com/channel/UCXB01kyNaZhjCxHVVd0O3rw"
                target="_blank"
                className="text-center mx-2"
              >
                <Badge bg="success">
                  <i class="fa-brands fa-square-youtube"></i>
                </Badge>
              </a>
            </Stack>
            <p>&copy; 2024 SRM CONNECTS. All rights reserved.</p>
          
        </footer>

        </Container> 
      </div>
     
    </>
  );
}

export default Footer;
