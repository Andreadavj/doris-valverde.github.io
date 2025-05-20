"use client"

import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">DV</div>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
              <a href="#education">Formación</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a href="#skills">Habilidades</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
