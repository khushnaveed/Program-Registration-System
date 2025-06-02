import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/50" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empower Your Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discover new opportunities through learning and innovation.
            </p>
            <div className="flex space-x-4">
              <Link
                to={`/programs`}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Programs
              </Link>
              <Link
                to={`/contact`}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Side Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/30 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Future-Ready Education</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Innovative Curriculum",
                "Industry Partnerships",
                "Global Network",
                "Cutting-edge Research",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="w-2 h-2 rounded-full bg-[#FFB400] mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm mb-3">Enrollment for Fall 2025 is now open</p>
            <a
              href="/apply"
              className="inline-block bg-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-blue-950 transition"
            >
              Apply Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
