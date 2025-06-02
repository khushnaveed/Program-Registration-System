import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-blue-900 md:text-5xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl leading-relaxed text-gray-500"
        >
          To empower the next generation with knowledge and skills needed to excel in the rapidly evolving global landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Excellence",
              content:
                "We strive for the highest standards in education and research.",
              icon: "🏆",
            },
            {
              title: "Innovation",
              content:
                "We embrace new ideas and approaches to solve global challenges.",
              icon: "💡",
            },
            {
              title: "Inclusion",
              content:
                "We celebrate diversity and provide accessible education for all.",
              icon: "🌍",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionSection;
