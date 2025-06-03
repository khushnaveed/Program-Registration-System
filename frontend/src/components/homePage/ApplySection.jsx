import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ApplySection = () => {
  return (
    <div className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg"
          alt="University campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white md:text-5xl font-bold mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-white"
          >
            Take the first step towards your future today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/apply"
              className="inline-block bg-[#FFB400] px-5 py-2 rounded-lg font-semibold hover:bg-blue-950 transition"
            >
              Apply Today
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
