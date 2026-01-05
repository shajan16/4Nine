import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Admin from './Admin.jsx'
import Timer from './Components/Timer.jsx'
import Address from './Components/Address.jsx'
import Payment from './Components/Payment.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/address/:id' element={<Address />} />
          <Route path='/payment/:id' element={<Payment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
