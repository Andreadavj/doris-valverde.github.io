"use client"

import { Moon, Sun } from "lucide-react"

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-colors ${
        darkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
