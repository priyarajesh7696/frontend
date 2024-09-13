import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Admin from "../admin_components/Admin_Dashboard"
import Gallery from '../common_components/Gallery'
import Trainings from '../common_components/Trainings'
import Events from '../common_components/Events'
import Socialmedia from '../common_components/Socialmedia'
import Contacts from '../common_components/Contacts'

import Member_Dashboard from '../members_component/Member_Dashboard'
import { Container } from 'react-bootstrap';
import Add_Member from '../admin_components/Add_Member';
import Edit_Member from '../admin_components/Edit_Member'
import Delete_Member from '../admin_components/Delete_Member'
import Member_Approval from '../admin_components/Member_Approval';
import Admin_Header from '../admin_components/Admin_Header'
function AdminRoutes() {
  return <>
 <Admin_Header/>
    <Routes>
    <Route path="home" element={<Admin/>}/>
    <Route path="add_member" element={<Add_Member/>}/>
    <Route path="edit_member" element={<Edit_Member/>}/>
    <Route path="delete_member" element={<Delete_Member/>}/>
    <Route path="approve_member" element={<Member_Approval/>}/>
    <Route path='member' element={<Member_Dashboard/>}/>
 <Route path='gallery' element={<Gallery/>}/>
 <Route path='trainings' element={<Trainings/>}/>
 <Route path='events' element={<Events/>}/>
 <Route path='contacts' element={<Contacts/>}/>
 <Route path='socialmedias' element={<Socialmedia/>}/>

   
            <Route path = " * " element={<Navigate to = "home"/>}/>
    </Routes>
   
  </>
}

export default AdminRoutes