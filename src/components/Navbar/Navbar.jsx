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
      <li><a href="#home">Home</a></li>
      <li><a href="#learn">ABOUT US</a></li>
      <li><a href="#tech">Our Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  
</header>

        </>
    )
}
export default NavBar