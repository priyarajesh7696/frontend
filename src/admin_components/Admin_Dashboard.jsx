import React from 'react'
import AdminApproval from './Member_Approval'
import Dashboard from '../common_components/Dashboard'
import { Image,Container } from 'react-bootstrap'

function Admin_Dashboard() {
  let username=sessionStorage.getItem("name")
  return (

    <div className='mt-5 p-5'>
    
    <div className="admin-dashboard">
     <h1>Admin Dashboard</h1>
      
    </div>
    <div className='fixed-bottom'>
            <Chatbox username={username} />
            </div>
    </div>
  )
}

export default Admin_Dashboard