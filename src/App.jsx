import { useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import Landing from './components/landing/Landing'
import AboutUs from './components/About Us/AboutUs'
import Services from './components/OurService/Services'


function App() {
  return (
    <>
      <NavBar />
      < Landing />
      <AboutUs />
      <Services/>
    </>
  )
}

export default App
