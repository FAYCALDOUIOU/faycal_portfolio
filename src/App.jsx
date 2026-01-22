import { useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import Landing from './components/landing/Landing'
import AboutUs from './components/About Us/AboutUs'
import Services from './components/OurService/Services'
import Footer from './components/footer/Footer'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Checkout from "./components/Checkout/Checkout";




function App() {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCheckout = (plan) => {
    setSelectedPlan(plan);
    setCheckoutOpen(true);
  };

  return (
    <>
      <NavBar />
      <Landing />
      <AboutUs />
      <Services />
      <Pricing onCheckout={handleCheckout} />
       {checkoutOpen && selectedPlan && (
        <Checkout
          plan={selectedPlan}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
      <Contact />
      <Footer />

    </>
  )
}

export default App
