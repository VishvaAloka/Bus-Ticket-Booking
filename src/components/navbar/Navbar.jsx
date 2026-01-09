"use client"

import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logo.png"
import { LiaTimesSolid } from "react-icons/lia"
import { FaBars, FaPhone, FaArrowRight } from "react-icons/fa6"
import Theme from "../theme/Theme"

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Bus", label: "Bus" },
    { href: "/services", label: "Services" },
    
  ]

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="w-full h-[8ch] bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 shadow-lg shadow-slate-200 dark:shadow-slate-900/50">
      {/* Logo section */}
      <Link to={"/"} className="mr-16 group hover:scale-105 transition-transform duration-300">
        <img src={Logo || "/placeholder.svg"} alt="logo" className="w-20 h-auto object-contain" />
      </Link>

      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-slate-600 dark:text-slate-300 ease-in-out duration-300 flex items-center justify-end hover:text-emerald-600 dark:hover:text-emerald-400 transform hover:scale-110 outline-none"
      >
        {open ? (
          <LiaTimesSolid className="text-2xl transition-transform duration-300 rotate-90" />
        ) : (
          <FaBars className="text-2xl transition-transform duration-300" />
        )}
      </button>

      {/* Navigation links */}
      <div
        className={`${open ? "flex absolute top-20 left-0 w-full h-auto md:h-auto md:relative" : "hidden"} flex-1 md:flex flex-col md:flex-row gap-x-8 gap-y-3 md:items-center md:p-0 sm:p-6 p-6 justify-between md:bg-transparent bg-white md:shadow-none shadow-lg rounded-xl md:rounded-none transition-all duration-300 outline-none`}
      >
        <ul className="list-none flex md:items-center items-start gap-x-8 gap-y-2 flex-wrap md:flex-row flex-col text-base text-slate-600 dark:text-slate-400 font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="group">
              <Link
                to={link.href}
                onClick={handleClose}
                className="relative inline-block text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 outline-none"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:items-center items-start gap-x-5 gap-y-3 flex-wrap md:flex-row flex-col text-base font-medium text-slate-800 dark:text-slate-200">
          <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl px-6 py-3 w-fit cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group outline-none">
            <div className="absolute top-[50%] -left-5 translate-y-[-50%] w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <FaPhone className="text-emerald-500 text-sm font-bold" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-emerald-50 font-light">Need Help?</p>
              <p className="text-sm font-semibold text-white tracking-wide">+91 1234567890</p>
            </div>
            <FaArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          {/* Theme */}
          <Theme />
        </div>
      </div>
    </div>
  )
}

export default Navbar