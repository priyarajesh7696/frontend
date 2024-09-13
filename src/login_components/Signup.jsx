import React from "react";
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
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import Image from 'react-bootstrap/Image';

function Signup() {
  let navigate = useNavigate();

  // const { Formik } = formik;

  // const userSchema = yup.object().shape({
  //   name: yup.string().required(),
    
  //   email: yup.string().required(),
   
  //   mobile: yup.string().required(),
  //   possword: yup.string().required(),
   
  //   terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  // });
  // console.log("hi")
  const handleSubmit = async () => {
    console.log("hi")
     
      console.log()
      
      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_UP.path}`,
        values,
        {
          authenticate: ApiRoutes.SIGN_UP.authenticate,
        }
      );
      alert(`Account created successfully
            login to continue`);
      navigate("/login");
    // } catch (error) {
    //   toast.error(error.response.data.message || error.message);
    //   console.log(error);
    // }
  };

  return (
    <div className="d-flex mt-3 p-3" >
       <Container className="d-grid visible " >
    <Image className='text-center mt-5 p-5'style={{ maxHeight: '500px' }}  src={"../src/assets/logo/c1.jpg"} rounded />
    </Container>
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 shadow-lg mt-5 '>
     <h4 className='text-center link-success text-bg-light my-2'>Join our DBCC Family</h4>
    {/* <Formik
    validationSchema={userSchema}
    onSubmit={handleSubmit}
    initialValues={{
      name: '',     
      email: '',
      password: '',      
      mobile: '',     
      terms: false,
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit} className="p-3 gap-4">
       
          <Form.Group
            controlId="validationFormik10"
            className="position-relative"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isValid={touched.name && !errors.name}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group controlId="validationFormikemail11">
            <Form.Label>Email</Form.Label>
            
              <Form.Control
                type="email"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            
          </Form.Group>
         
          <Form.Group
            controlId="validationFormik13"
            className="position-relative"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
     
          <Form.Group
           
            controlId="validationFormik14"
            className="position-relative"
          >
          <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              placeholder="mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              isInvalid={!!errors.mobile}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.mobile}
            </Form.Control.Feedback>
          </Form.Group>
        
 
       <Button type="button" >submit</Button>
        
      </Form>
    )}
  </Formik> */}
   <Form onSubmit={handleSubmit} className="p-3 gap-4">
       
       <Form.Group
         
         className="position-relative"
       >
         <Form.Label>Name</Form.Label>
         <Form.Control
           type="text"
           name="name"
           
         />
        
       </Form.Group>
     
       <Form.Group>
         <Form.Label>Email</Form.Label>
         
           <Form.Control
             type="email"
             placeholder="email"
             aria-describedby="inputGroupPrepend"
             name="email"
            
           />
         
         
       </Form.Group>
      
       <Form.Group
        
         className="position-relative"
       >
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           placeholder="password"
           name="password"
          
         />
         
       </Form.Group>
  
       <Form.Group
        
        
         className="position-relative"
       >
       <Form.Label>Mobile</Form.Label>
         <Form.Control
           type="number"
           placeholder="mobile"
           name="mobile"
          
         />
        
       </Form.Group>
     

    <Button type="button" onClick={handleSubmit} >submit</Button>
     
   </Form>
  </Container>
  </div>
   
  );
}

export default Signup;