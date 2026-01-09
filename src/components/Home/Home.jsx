"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBus, FaShieldHalved, FaClock, FaUsers, FaArrowRight, FaStar } from "react-icons/fa6"
import { BsSearch } from "react-icons/bs"


const Home = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  })

  const services = [
    { icon: FaShieldHalved, title: "Safety First", desc: "24/7 GPS tracking & trained drivers" },
    { icon: FaClock, title: "On Time", desc: "Punctual arrivals guaranteed always" },
    { icon: FaUsers, title: "Best Comfort", desc: "Spacious seats & premium amenities" },
    { icon: FaBus, title: "Wide Routes", desc: "Coverage across all major cities" },
  ]

  const testimonials = [
    { name: "Sarah Johnson", rating: 5, text: "Best bus service I've ever used. Highly recommended!" },
    { name: "Mike Chen", rating: 5, text: "Comfortable journey, friendly staff, perfect timing." },
    { name: "Emma Davis", rating: 5, text: "Amazing experience. Will definitely book again!" },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative lg:px-28 md:px-16 sm:px-7 px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 animate-pulse">
            ✨ Premium Bus Services
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6 leading-tight">
            Journey in Comfort & Style
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your next trip with India's most trusted bus service. Experience premium comfort, safety, and
            reliability on every journey.
          </p>

          {/* Booking Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 transform hover:shadow-3xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">From</label>
                <input
                  type="text"
                  placeholder="Departure city"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors duration-300 dark:bg-slate-700 dark:text-white"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                />
              </div>

              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">To</label>
                <input
                  type="text"
                  placeholder="Arrival city"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors duration-300 dark:bg-slate-700 dark:text-white"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                />
              </div>

              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors duration-300 dark:bg-slate-700 dark:text-white"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="relative group">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Passengers
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none transition-colors duration-300 dark:bg-slate-700 dark:text-white"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <BsSearch className="text-lg" />
              Search Buses
              <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Why Choose Us?</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          We're committed to providing the best travel experience with our world-class service and facilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">What Our Customers Say</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          Join thousands of happy travelers who trust us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-lg" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Your Next Journey?</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Book your tickets now and enjoy exclusive discounts on your first booking.
          </p>
          <Link
            to="/bus"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            Book Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
