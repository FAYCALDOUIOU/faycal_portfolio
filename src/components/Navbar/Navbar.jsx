// import Button from "../button/Button"
import { useState } from "react";
import Logo from "/src/assets/logo.svg";
import "./Navbar.css"

function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#AboutUs ">ABOUT US</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header__cta">
          <button
            className="header__burger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            ☰
          </button>

        </div>

      </header>

    </>
  )
}
export default NavBar