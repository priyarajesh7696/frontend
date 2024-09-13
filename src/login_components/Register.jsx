import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
    let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
console.log(formProps)
      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_UP.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SIGN_UP.authenticate,
        }
      );
      alert(`Account created successfully
            login to continue`);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      console.log(error);
    }
  };

  return (
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'>
    <h4 className='text-center text-decoration-underline text-bg-light my-2'>Register to your Account</h4>
        <div className="d-flex align-content-center mb-6 mt-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers,special characters only.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="number" placeholder="mobile" name="mobile" />
            </Form.Group>

            <Button
              className="w-100"
             
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <Link to="/login" className="nav-link d-flex justify-content-end align-content-end mt-5" href="index.html">
            <span>back</span>
          </Link>
          </Form>
          
        </div>
    </Container>
  )
}

export default Register