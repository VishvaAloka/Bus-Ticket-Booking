"use client"

import { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative group w-11 h-11 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-slate-600 dark:to-slate-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div
        className={`transition-all duration-500 transform ${theme === "dark" ? "rotate-180 opacity-100 scale-100" : "rotate-0 opacity-50 scale-75"}`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-slate-300 text-lg drop-shadow-md" />
        ) : (
          <FaSun className="text-amber-500 text-lg drop-shadow-md" />
        )}
      </div>
    </button>
  )
}

export default Theme
