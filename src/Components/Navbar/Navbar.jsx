import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="headerNavbar">
      <div className="divNavbar">
        <a href="#about" className="aNav">
          Sobre mi
        </a>
        <a href="#projects" className="aNav">
          Trabajos anteriores
        </a>
        <a href="#skills" className="aNav">
          Habilidades
        </a>
        <a href="#contact" className='aNav'>
          Contactame
        </a>
        <a href="#projects" className='aNav'>
          Mira mis trabajos
        </a>
      </div>
    </header>
  )
}

export default Navbar