import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Singnin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Headers'
import  PriveteRoute  from './components/PriveteRoute'
export default function App() {
  return (

    <div>
      
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="sign-in" element={<Singnin />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route element={<PriveteRoute />} >
            <Route path="profile" element={<Profile />} />
          </Route>  
      </Routes>
    </BrowserRouter>

    </div>
  )
}

