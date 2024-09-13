import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useNavigate, Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Chatbox from "../common_components/Chatbox";
import Toast from "react-bootstrap/Toast";
import Message from "../common_components/Message";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import Logout from "../login_components/Logout";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Offcanvas } from "react-bootstrap";
  import Social from "../common_components/Social";

function Member_Header() {
  let username=sessionStorage.getItem("name")
  let logout = Logout();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const role = sessionStorage.getItem("role");
  console.log("role is " + role);
  const limitArray = (arr, limit) => {
    return arr.slice(0, limit);
  };

  const limitedMessage = limitArray(messages, 5);
  console.log(limitedMessage);
  const fetchMessages = async () => {
    try {
      const response = await AxiosService.get(`${ApiRoutes.GET_MESSAGE.path}`, {
        authenticate: ApiRoutes.GET_MESSAGE.authenticate,
      });

      //    console.log(response.data.users)
      let n = response.data.users;

      setMessages(response.data.users);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  useEffect(() => {
    fetchMessages();
  }, []);
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     notification
  //     <div className="message">
  //       {limitedMessage.map((msg, index) => (
  //         <Message key={index} msg={msg} />
  //       ))}
  //     </div>
  //   </Tooltip>
  // );

  return (
    <Container fluid>
      <Navbar
        id="myTopnav"
        className="topnav bg-body-tertiary text-center "
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand href="">
          <Image
            style={{ maxHeight: "80px" }}
            src="https://www.divinebharat7.com/assets/images/logo.png"
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="home" active>Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="AboutUs"
              menuVariant="light"
            >
              <NavDropdown.Item href="gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="trainings">Trainings</NavDropdown.Item>
              <NavDropdown.Item href="events">Events</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="member">Members</Nav.Link>
           
           
            <Nav.Link href="socialmedias">SocialMedias</Nav.Link>
            <Nav.Link href="contacts">Contacts</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <div className="mt-2"> <p>Welcome</p></div>
      <div className="mx-3">
       
                  <Image className='text-center rounded-circle'  style={{ maxHeight: '50px' }} src={`../src/assets/members/${username}.jpg`} rounded />
                  </div>
        <Button onClick={toggleShowA} className="">
          <strong>
            <i class="fa-solid fa-bell"></i>
          </strong>
          <ToastContainer />
        </Button>

        <Toast
        show={showA}
       onClose={toggleShowA}
        className=" d-inline-block m-1 fixed-top mt-5"
        bg="light"
        float="right"
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Notification</strong>
          <small>
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}{" "}
          </small>
        </Toast.Header>
        <Toast.Body
          style={{
            overflow: "scroll",
            height: "300px",
            width: "350px",
            float: "left",
          }}
        >
          <div className="messages">
            {messages.map((msg, index) => (
              <Message key={index} msg={msg} />
            ))}
          </div>
        </Toast.Body>
      </Toast>
     

        <Link to="/" className="nav p-3" href="index.html">
          <i onClick={logout} class="fa-solid fa-arrow-right-from-bracket"></i>
          {/* <span className='mx-2 link-danger'>Logout</span> */}
        </Link>
      </Navbar>
     
        {/* <Navbar className=" mytopnav_mobile bg-body-tertiary">
         
            <Navbar.Brand href="">
              <Image
                style={{ maxHeight: "80px" }}
                src="https://www.divinebharat7.com/assets/images/logo.png"
                rounded
              />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-around">
              <Navbar.Text>
                <Button onClick={toggleShowA} className="mb-2">
                  <strong>
                    <i class="fa-solid fa-bell"></i>
                  </strong>
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button onClick={handleShow}>
                  <i class="fa fa-bars"></i>
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
         
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Navbar.Brand href="">
                  <Image
                    style={{ maxHeight: "80px" }}
                    src="https://www.divinebharat7.com/assets/images/logo.png"
                    rounded
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link href="home"><i class="fa-solid fa-house"></i> Home</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="AboutUs"
                  menuVariant="light"
                >
                  <NavDropdown.Item href="gallery">Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="trainings">
                    Trainings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="events">Events</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="socialmedias">SocialMedias</Nav.Link>
                <Nav.Link href="contacts">Contacts</Nav.Link>
                <Link to="/" className="nav p-3" href="index.html">
            <i
              onClick={logout}
              class="fa-solid fa-arrow-right-from-bracket"
            ></i>
          
          </Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar> */}
      
      <div className='fixed-bottom'>
            <Chatbox username={username} />
            
            </div>
    </Container>

  );
}

export default Member_Header;
