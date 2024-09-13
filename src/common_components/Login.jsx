import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import Socialmedia from "./Socialmedia";

function Login() {
    const smileEmoji = '\u{1F60A}';
    const partyEmoji = '\u{1F389}';
    const isSmallScreen = window.innerWidth <= 768;
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
   
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
console.log(formProps)
      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_IN.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SIGN_IN.authenticate,
        }
      );
     
      if (res.status === 200) 
      {
       
        toast.success("login successfully");

        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
        sessionStorage.setItem("id", res.data.id);
        sessionStorage.setItem("name", res.data.name);

        if (res.data.role === "admin")
        {
          navigate("/admin");
        }
       
        else if (res.data.role === "user") 
        {
          navigate("/user")
         
        }
       
      }
  };

  return (

    <div className="login d-flex p-2 link-light" >
       <Container className="login_image">
    <Image className='text-center mt-2'style={{ maxHeight: '600px',width:"500px" }}  src={"../src/assets/logo/c1.jpg"} rounded />
    </Container>

    <Container fluid className='d-flex flex-column  justify-content-center align-items-center shadow-lg mt-2 p-3'>
    
     <h2 className='text-center'> {partyEmoji}  Welcome To DBCC Family  {partyEmoji}</h2>
    {/* <h4 className='text-center text-decoration-underline text-bg-light my-2'>Login</h4> */}
      <div className="d-flex align-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Enter Username" name="mobile" />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button><br></br><br></br>
          <Link to="/signup" className="nav-link" href="index.html">
            <span>Don't have any Account ? Signup</span>
          </Link>
          
          <br></br>
          <Link to="/forgot-password" className="nav-link text-center" href="index.html">
            <span>Forgot password</span>
          </Link>
          {/* <a href='/forgot-password' className='text-center mx-5'>Forgot password</a> */}
        </Form>
       
        <ToastContainer/>
      </div>
      <Link to="/home" className="nav-link d-flex justify-content-end align-content-end m3-5 link-info" href="index.html">
            <span>back</span>
          </Link>
    </Container>
    {/* <Container className="d-grid visible " >
    <Image className='text-center mt-5 p-5'  style={{ maxHeight: '500px' }} src={"../src/assets/gallery/12.jpg"} rounded />
    </Container> */}
    </div>
  );
}

export default Login;