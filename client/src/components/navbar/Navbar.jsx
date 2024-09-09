import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
      <div className="logo">
      <span className='text' >LaBOUR</span>
      
      <span></span>
      </div>
      
      <div className="links">
        <a href="#about">About</a>
        <a href="#hire">Hire Freelancer</a>
        <a href="#find-work">Find work</a>
        <a href="#signin">SignIn</a>
        <button id='bt1' >Register</button>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar
