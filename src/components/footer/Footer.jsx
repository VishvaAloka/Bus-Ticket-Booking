import { FaMapPin, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-12 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="space-y-5 lg:col-span-2 group">
          <Link
            to="/"
            className="text-xl text-white font-bold hover:scale-105 transition-transform duration-300 inline-block"
          >
            <img
              src={Logo || "../../assets/logo.png"}
              alt="logo"
              className="w-44 h-auto object-contain"
            />
          </Link>
          <p className="text-slate-400 text-base font-normal pr-10 leading-relaxed">
            Experience the journey of a lifetime with our premium bus services. Safe, comfortable, and reliable
            transportation across the country.
          </p>
          <div className="flex gap-4 pt-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:shadow-lg"
              >
                <Icon className="text-emerald-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div className="space-y-7 group">
          <h1 className="text-lg font-bold text-white relative pb-2">
            About Us
            <span className="absolute left-0 bottom-0 w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-12 transition-all duration-300"></span>
          </h1>
          <ul className="space-y-3 text-slate-400 text-base font-normal">
            {["About Us", "Contact Us", "Privacy Policy", "Terms and Conditions"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="about"
                  className="hover:text-emerald-400 ease-in-out duration-300 flex items-center gap-2 group/link"
                >
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">→</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-7 group">
          <h1 className="text-lg font-bold text-white relative pb-2">
            Services
            <span className="absolute left-0 bottom-0 w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-12 transition-all duration-300"></span>
          </h1>
          <ul className="space-y-3 text-slate-400 text-base font-normal">
            {["Safety Guarantee", "FAQ & Support", "Luxury Buses", "Enough Facilities"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="#"
                  className="hover:text-emerald-400 ease-in-out duration-300 flex items-center gap-2 group/link"
                >
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">→</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="space-y-7 lg:col-span-1">
          <h1 className="text-lg font-bold text-white relative pb-2">
            Get In Touch
            <span className="absolute left-0 bottom-0 w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></span>
          </h1>
          <div className="space-y-5">
            {[
              { Icon: FaMapPin, title: "Location", desc: "Galle Road, Colombo" },
              { Icon: FaPhone, title: "Phone", desc: "+94 70-511-33-40" },
              { Icon: FaEnvelope, title: "Email", desc: "citytours@gmail.com" },
            ].map((contact, idx) => (
              <div key={idx} className="flex gap-4 group/contact">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover/contact:bg-emerald-500 transition-all duration-300 transform group-hover/contact:scale-110">
                  <contact.Icon className="text-emerald-400 group-hover/contact:text-white text-lg" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-slate-500 font-semibold">{contact.title}</p>
                  <p className="text-sm text-slate-300 group-hover/contact:text-white transition-colors duration-300">
                    {contact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">© 2026 Bus Lines. All rights reserved.</p>
        <p className="text-slate-500 text-sm">Designed with ❤️ for comfortable journeys</p>
      </div>
    </footer>
  )
}

export default Footer
