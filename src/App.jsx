
import React from 'react'
import Dashboard from './common_components/Dashboard'
import Footer from './common_components/Footer'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Gallery from './common_components/Gallery'
import Events from './common_components/Events';
import Trainings from './common_components/Trainings'
import Member_Dashboard from './members_component/Member_Dashboard'
import Contacts from './common_components/Contacts'
import Add_Member from './admin_components/Add_Member'
import Signup from './login_components/Signup'
import ForgotPassword from './login_components/ForgotPassword'
import ResetPassword from './login_components/ResetPassword'
import VerifyOtp from './login_components/VerifyOtp'
import Login from './common_components/Login'
import Socialmedia from './common_components/Socialmedia'
import Social from './common_components/Socialmedia'
import Moreinfo from './common_components/Moreinfo'
import UserRoutes from './utils/UserRoutes'
import AdminRoutes from './utils/AdminRoutes'
import UserProtectedRoutes from './utils/UserProtectedRoutes.jsx';
import AdminProtectedRoutes from './utils/AdminProtectedRoutes.jsx'
import Register from './login_components/Register.jsx'
import Logout from './login_components/Logout.jsx'
import HeaderSelector from './common_components/HeaderSelector.jsx'
import Frontpage from './common_components/Frontpage.jsx'

function App() {
  const userRole = sessionStorage.getItem("role")
  console.log(userRole)
  return (
    <div>
     
       <BrowserRouter>
      <HeaderSelector/>
     
 <Routes>
 
 <Route path='/home' element={<Dashboard/>}/>
 <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path= '/forgot-password' element={<ForgotPassword />} />
        <Route path= '/reset-password' element={<ResetPassword />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path='/logout' element={<Logout />} />
 <Route path='/add_member' element={<Add_Member/>}/>
 <Route path='/member' element={<Member_Dashboard/>}/>
 <Route path='/gallery' element={<Gallery/>}/>
 <Route path='/trainings' element={<Trainings/>}/>
 <Route path='/events' element={<Events/>}/>
 <Route path='/contacts' element={<Contacts/>}/>
 <Route path='/socialmedias' element={<Social/>}/>
 <Route path = '/admin/*' element={<AdminProtectedRoutes><AdminRoutes/></AdminProtectedRoutes>}/>
 <Route path = '/user/*' element={<UserProtectedRoutes><UserRoutes/></UserProtectedRoutes>}/>

   

   <Route path='*' element={<Navigate to='/home'/>}/>
 </Routes>
 <Moreinfo/> 
 <Footer/>
</BrowserRouter>
    
     
     
    </div>
  )
}

export default App