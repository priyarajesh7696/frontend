import React from 'react'
import { Container,Image } from 'react-bootstrap'
import Chatbox from '../common_components/Chatbox'
import Social from '../common_components/Social'
import Membershipcard from './Membershipcard'

function Member() {
  let username=sessionStorage.getItem("name")
  return (
    <Container>
       <div className='text-center mt-0'>
       
       <h1>welcome to DBCC Family</h1>
       </div>
      
       <div className='d-flex justify-content-center align-content-center mt-2 p-5'>
       <Membershipcard/>
       </div>
      
       <div className='fixed-bottom'>
<Chatbox username={username} />
</div>
    </Container>
   
  )
}

export default Member