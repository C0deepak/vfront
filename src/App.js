import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import ScanQr from './pages/ScanQr'
import './App.css'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/scanqr' element={<ScanQr />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
