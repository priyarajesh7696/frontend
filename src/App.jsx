
import React from 'react'
import Header from './common_components/header'
import Dashboard from './common_components/Dashboard'
import Footer from './common_components/Footer'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Gallery from './common_components/Gallery'
import Events from './common_components/Events'
import Trainings from './common_components/Trainings'
import Member_Dashboard from './members_component/Member_Dashboard'
import Contacts from './common_components/Contacts'
import Add_Member from './admin_components/Add_Member'

function App() {
  return (
    <div>
       <BrowserRouter>
       <Header/>
 <Routes>
 <Route path='/home' element={<Dashboard/>}/>
 <Route path='/add_member' element={<Add_Member/>}/>
 <Route path='/member' element={<Member_Dashboard/>}/>
 <Route path='/gallery' element={<Gallery/>}/>
 <Route path='/trainings' element={<Trainings/>}/>
 <Route path='/events' element={<Events/>}/>
 <Route path='/contacts' element={<Contacts/>}/>
   

   <Route path='*' element={<Navigate to='/'/>}/>
 </Routes>
 <Footer/>
</BrowserRouter>
    
     
     
    </div>
  )
}

export default App