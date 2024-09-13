import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Member from '../members_component/Member'
import Member_Dashboard from '../members_component/Member_Dashboard'
import Gallery from '../common_components/Gallery'
import Trainings from '../common_components/Trainings'
import Events from '../common_components/Events'
import Socialmedia from '../common_components/Socialmedia'
import Contacts from '../common_components/Contacts'
import Member_Header from '../members_component/Member_Header'


function UserRoutes() {
  return <>
  <Member_Header/>
    <Routes>
    <Route path='home' element={<Member/>}/>
    
 <Route path='member' element={<Member_Dashboard/>}/>
 <Route path='gallery' element={<Gallery/>}/>
 <Route path='trainings' element={<Trainings/>}/>
 <Route path='events' element={<Events/>}/>
 <Route path='contacts' element={<Contacts/>}/>
 <Route path='socialmedias' element={<Socialmedia/>}/>
      
            <Route path = '*' element={<Navigate to = 'home'/>}/>
    </Routes>
  </>
}

export default UserRoutes