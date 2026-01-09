"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaAward, FaUsers, FaGlobe, FaHeartPulse, FaArrowRight, FaLeaf, FaShield, FaLightbulb } from "react-icons/fa6"

const About = () => {
  const [expandedMember, setExpandedMember] = useState(null)

  const stats = [
    { icon: FaUsers, number: "500K+", label: "Happy Customers" },
    { icon: FaGlobe, number: "50+", label: "Cities Covered" },
    { icon: () => "🚌", number: "1000+", label: "Buses Fleet" },
    { icon: FaAward, number: "15+", label: "Years Experience" },
  ]

  const values = [
    { icon: FaHeartPulse, title: "Customer First", desc: "Your comfort and safety are our top priorities" },
    { icon: FaLeaf, title: "Eco-Friendly", desc: "Committed to sustainable and green transportation" },
    { icon: FaShield, title: "Reliability", desc: "Trustworthy service with 99.8% on-time record" },
    { icon: FaLightbulb, title: "Innovation", desc: "Latest technology for better travel experience" },
  ]

  const team = [
    { name: "Rajesh Kumar", role: "Founder & CEO", emoji: "👨‍💼", bio: "20 years in transportation industry" },
    { name: "Priya Sharma", role: "Chief Operations", emoji: "👩‍💼", bio: "Fleet management expert" },
    { name: "Amit Patel", role: "Technology Lead", emoji: "👨‍💻", bio: "Innovative travel solutions specialist" },
    { name: "Sarah Johnson", role: "Customer Care", emoji: "👩‍🔬", bio: "Customer satisfaction champion" },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative lg:px-28 md:px-16 sm:px-7 px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 animate-pulse">
            ✨ Our Story
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6 leading-tight">
            About Our Journey
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            From humble beginnings to becoming India's most trusted bus service provider. Our commitment to excellence
            drives everything we do.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-slate-900 dark:to-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              style={{
                animation: `fadeInScale 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <style>{`
                @keyframes fadeInScale {
                  from {
                    opacity: 0;
                    transform: scale(0.8);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }
              `}</style>

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform duration-300">
                <stat.icon className="text-white text-xl" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-white dark:bg-slate-800 rounded-xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-emerald-500">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              Our Mission
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              To provide safe, comfortable, and affordable bus travel to millions of passengers across India. We believe
              every journey should be a pleasant experience filled with reliability and care.
            </p>
          </div>

          <div className="group bg-white dark:bg-slate-800 rounded-xl p-10 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-teal-500">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🌟</span>
              Our Vision
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              To revolutionize inter-city transportation in India through innovation, sustainability, and
              customer-centric solutions. We aim to be the most loved and trusted transport brand globally.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Our Core Values</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          These principles guide everything we do and every decision we make
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                <value.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">Meet Our Leadership</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Passionate professionals dedicated to your journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => setExpandedMember(expandedMember === idx ? null : idx)}
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

              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-emerald-400">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-center">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-emerald-100 font-semibold mt-2">{member.role}</p>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 text-center font-medium">{member.bio}</p>
                </div>

                {expandedMember === idx && (
                  <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700 animate-in">
                    <p className="text-slate-600 dark:text-slate-400 mt-4">
                      With years of experience in the industry, {member.name.split()[0]} brings expertise and innovation
                      to our organization.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Highlight */}
      <section className="lg:px-28 md:px-16 sm:px-7 px-4 py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Millions of Happy Travelers</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Experience the difference that trust, comfort, and reliability can make in your travels.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            Book Your Journey
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
