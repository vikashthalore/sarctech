import { useState } from 'react'

import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

function App() {
 return(
  <>
    <Router className="flex text-center justify-center items-center">
    <Navbar />
    <main className='container mx-auto py-0'>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/contact" element={<ContactUs />} />
       {/* <Route path='*' element={<NOtFound />} /> */}
     </Routes>
    </main>
     <Footer />
    </Router>


  </>
 );
}

export default App