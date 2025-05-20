"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode === null ? true : JSON.parse(savedMode)
  })

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])
  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <Hero darkMode={darkMode} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App



