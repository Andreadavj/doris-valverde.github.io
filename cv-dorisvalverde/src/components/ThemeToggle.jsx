"use client"

import { Moon, Sun } from "lucide-react"

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button className={`theme-toggle ${darkMode ? "dark" : "light"}`} onClick={toggleTheme} aria-label="Toggle theme">
      {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
    </button>
  )
}

export default ThemeToggle
