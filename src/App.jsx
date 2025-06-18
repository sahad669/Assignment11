import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user' element={<User/>} />
         <Route path='/userdetails/:id' element={<UserDetails/>} />
        <Route path='*' element={<NotFound/>} />
       
      </Routes>
    </div>
  )
}

export default App