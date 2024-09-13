import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Socialmedia from "../common_components/Socialmedia"

function ResetPassword() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.RESET_PASSWORD.path}`,
        formProps,
        {
          authenticate: ApiRoutes.RESET_PASSWORD.authenticate,
        }
      );
     
      if (res.status === 200) 
      {
       
        alert("Password Changed successfully");
        navigate('/dashboard')

      }
          
    } catch (error) {
      // toast.error(error.response.data.message || error.message);
      console.log(error);
    }
  };
  return (
    <div className='d-flex'>
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'style={{backgroundColor:"springgreen",border:"20px solid gray", borderImage:"stretch"}}> 
  <h4 className='text-center  my-2'>Reset Password</h4>
  <Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Email</Form.Label> */}
    <Form.Control type="email" placeholder="email"name='email' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>OTP</Form.Label>
    <Form.Control type="number" placeholder="otp" name='otp'/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password'/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formConfrmBasicPassword">
    <Form.Label>Conform Password</Form.Label>
    <Form.Control type="confirmpassword" placeholder="Password"name='confirmPassword' />
  </Form.Group>
 
  <Button variant="primary"className='w-75 mx-4' type="submit">
    Submit
  </Button>
</Form>
<Link to="/signup" className="nav-link" href="index.html">
            <span>back</span>
          </Link>
</Container>
 <Container className="d-grid">
 <Socialmedia/>
</Container>
</div>
     ) 
    }

export default ResetPassword