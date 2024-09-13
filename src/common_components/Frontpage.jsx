import React from 'react'
import { Button,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Frontpage() {
  return (
    <div className='front '>
        <div> <Image
            style={{ maxHeight: "80px" }}
            src="https://www.divinebharat7.com/assets/images/logo.png"
            rounded
          /></div>
          <div>
          <Button variant="outline-primary"> <Link to="/login">
               Login
            </Link></Button>
            {/* <i class="fa fa-fw fa-user"></i> */}
            <Button variant="outline-primary"> <Link to="/register"> SignUp</Link></Button>
          </div>
        </div>
  )
}

export default Frontpage