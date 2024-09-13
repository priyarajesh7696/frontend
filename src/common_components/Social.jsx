import React from 'react'
import { Stack,Badge } from 'react-bootstrap'

function Social() {
  return (
    <div className='float-end me-0 mb-0'>
       <Stack
    direction=""
    gap={4}
    className=" badge "
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
      <Badge bg="warning"className="btn btn-primary btn-lg" >
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
      <Badge bg="danger"className="btn btn-danger btn-lg" >
        <i class="fa-brands fa-square-youtube"></i>
      </Badge>
    </a>
  </Stack></div>
  )
}

export default Social