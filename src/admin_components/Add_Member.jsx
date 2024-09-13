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


function Add_Member() {
  let navigate = useNavigate();

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    organisation: yup.string().required(),
    email: yup.string().required(),
    address: yup.string().required(),
    mobile: yup.string().required(),
    web: yup.string().required(),
    image: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  const handleSubmit = async (values) => {
    
     
      console.log(values)
      
      let res = await AxiosService.post(
        `${ApiRoutes.MEMBER_CREATE.path}`,
        values,
        {
          authenticate: ApiRoutes.MEMBER_CREATE.authenticate,
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
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'>
     <h4 className='text-center link-success text-bg-light my-2'>Join our DBCC Family</h4>
    <Formik
    validationSchema={schema}
    onSubmit={handleSubmit}
    initialValues={{
      name: '',
      organisation: '',
      email: '',
      password: '',
      address: '',
      mobile: '',
      web: '',
      image: null,
      terms: false,
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik101"
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
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Organisation</Form.Label>
            <Form.Control
              type="text"
              name="organisation"
              value={values.organisation}
              onChange={handleChange}
              isValid={touched.organisation && !errors.organisation}
            />

            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Label>Dealing</Form.Label>
            <Form.Control
              type="text"
              name="dealing"
              value={values.dealing}
              onChange={handleChange}
              isValid={touched.dealing && !errors.dealing}
            />

            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormikemail05">
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
            as={Col}
            md="6"
            controlId="validationFormik106"
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
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik107"
            className="position-relative"
          >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik108"
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
          </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik109"
            className="position-relative"
          >
            <Form.Label>Web</Form.Label>
            <Form.Control
              type="text"
              placeholder="Web"
              name="web"
              value={values.web}
              onChange={handleChange}
              isInvalid={!!errors.web}
            />

            <Form.Control.Feedback type="invalid" tooltip>
              {errors.web}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group  as={Col}
            md="6"
            controlId="validationFormik110"
            className="position-relative">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            required
            name="image"
            onChange={handleChange}
            isInvalid={!!errors.image}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.image}
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isInvalid={!!errors.terms}
            feedback={errors.terms}
            feedbackType="invalid"
            id="validationFormik111"
            feedbackTooltip
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    )}
  </Formik>
  </Container>
    // <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'>
    // <h4 className='text-center link-success text-bg-light my-2'>Join our DBCC Family</h4>
    //     <div className="d-flex align-content-center mb-6 mt-3">
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group className="mb-2">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control type="text" placeholder="Enter name" name="name" />
    //         </Form.Group>
    //         <Form.Group className="mb-2">
    //           <Form.Label>Email ID</Form.Label>
    //           <Form.Control
    //             type="email"
    //             placeholder="Enter email"
    //             name="email"
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             placeholder="Password"
    //             name="password"
    //           />
    //           <Form.Text id="passwordHelpBlock" muted>
    //             <p>Your password must be 8-20 characters long, contain letters and
    //             numbers,special characters only.</p>
    //           </Form.Text>
    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Mobile</Form.Label>
    //           <Form.Control type="number" placeholder="mobile" name="mobile" />
    //         </Form.Group>

    //         <Button
    //           className="w-100"
             
    //           variant="primary"
    //           type="submit"
    //         >
    //           Submit
    //         </Button>
    //         <Link to="/login" className="nav-link d-flex justify-content-end align-content-end mt-5" href="index.html">
    //         <span>back</span>
    //       </Link>
    //       </Form>
          
    //     </div>
    // </Container>
  );
}

export default Add_Member;