import { useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import Landing from './components/landing/Landing'
import AboutUs from './components/About Us/AboutUs'
import Services from './components/OurService/Services'
import Footer from './components/footer/Footer'
import Pricing from './components/Pricing/Pricing'


function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <AboutUs />
      <Services />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
