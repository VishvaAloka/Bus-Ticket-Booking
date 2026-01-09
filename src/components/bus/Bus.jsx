"use client"

import { useState } from "react"
import {
  FaMapLocationDot,
  FaUsers,
  FaClock,
  FaPhone,
  FaStar,
  FaArrowRight,
  FaWifi,
  FaPlug,
  FaSnowflake,
  FaArmchair,
} from "react-icons/fa6"

const Bus = () => {
  const [selectedBus, setSelectedBus] = useState(null)

  const buses = [
    {
      id: 1,
      name: "Premium Express",
      route: "Mumbai → Delhi",
      departure: "10:00 PM",
      arrival: "06:00 AM",
      price: "₹1,299",
      seats: 45,
      rating: 4.8,
      features: ["WiFi", "Charging", "AC", "Recliner"],
      image: "🚌",
    },
    {
      id: 2,
      name: "Comfort Deluxe",
      route: "Delhi → Bangalore",
      departure: "08:30 PM",
      arrival: "05:00 AM",
      price: "₹1,599",
      seats: 32,
      rating: 4.9,
      features: ["WiFi", "Charging", "AC", "Recliner"],
      image: "🚐",
    },
    {
      id: 3,
      name: "Budget Ride",
      route: "Bangalore → Hyderabad",
      departure: "09:00 PM",
      arrival: "04:30 AM",
      price: "₹799",
      seats: 60,
      rating: 4.5,
      features: ["Charging", "AC"],
      image: "🚌",
    },
    {
      id: 4,
      name: "Royal Sleeper",
      route: "Chennai → Pune",
      departure: "11:00 PM",
      arrival: "07:00 AM",
      price: "₹1,899",
      seats: 20,
      rating: 5.0,
      features: ["WiFi", "Charging", "AC", "Recliner", "Refreshments"],
      image: "🚐",
    },
  ]

  const amenities = [
    { icon: FaWifi, title: "High-Speed WiFi", desc: "Stay connected throughout your journey" },
    { icon: FaPlug, title: "USB Charging", desc: "Charge your devices on the go" },
    { icon: FaSnowflake, title: "Climate Control", desc: "Perfect temperature all year round" },
    { icon: FaArmchair, title: "Reclining Seats", desc: "Comfortable seating with extra legroom" },
  ]

  const featureIcons = {
    WiFi: FaWifi,
    Charging: FaPlug,
    AC: FaSnowflake,
    Recliner: FaArmchair,
  }

  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative lg:px-28 md:px-16 sm:px-7 px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 animate-pulse">
            🚌 Available Buses
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6 leading-tight">
            Explore Our Fleet
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose from our wide range of premium buses with world-class amenities and affordable pricing.
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Our Amenities</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          Travel in style and comfort with our premium services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                <amenity.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{amenity.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buses Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Available Buses</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Select your preferred bus and book your seats now
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {buses.map((bus, idx) => (
            <div
              key={bus.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-400"
              style={{
                animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <style>{`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{bus.image}</div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-amber-300 text-lg" />
                    <span className="font-bold">{bus.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{bus.name}</h3>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <FaMapLocationDot className="text-blue-500 text-lg" />
                    <span className="font-semibold">{bus.route}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <FaClock className="text-blue-500 text-lg" />
                    <span className="font-semibold">
                      {bus.departure} → {bus.arrival}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <FaUsers className="text-blue-500 text-lg" />
                    <span className="font-semibold">{bus.seats} Seats Available</span>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-semibold">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {bus.features.map((feature, i) => {
                      const Icon = featureIcons[feature]
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium"
                        >
                          {Icon && <Icon className="text-lg" />}
                          {feature}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{bus.price}</span>
                  <button
                    onClick={() => setSelectedBus(bus.id)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group/btn"
                  >
                    Book Now
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help Booking?</h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Call our customer support team available 24/7 for any assistance with your bookings.
          </p>
          <div className="flex items-center justify-center gap-2 text-white text-lg font-bold">
            <FaPhone className="text-2xl" />
            <span>1-800-BUS-RIDE (287-7433)</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bus
