import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Helper to format ISO date string to readable format
const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const FeaturedProgramsSection = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/programs")
      .then((response) => {
        setPrograms(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load programs.");
        setLoading(false);
      });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-500">Loading programs...</div>
    );
  }

  if (error) {
    return <div className="py-16 text-center text-red-500">{error}</div>;
  }

  const featuredPrograms = programs.slice(0, 3);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl text-blue-900 md:text-5xl font-bold mb-4">
          Featured Programs
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Explore our top programs designed to kickstart your career.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {featuredPrograms.map((program, index) => (
          <motion.div
            key={program.id || index}
            variants={item}
            className="bg-white rounded-lg shadow hover:shadow-lg flex flex-col h-full"
          >
            <img
              src={program.image}
              alt={program.title}
              className="h-48 md:h-56 w-full object-cover rounded-t-lg"
            />

            <div className="flex-grow p-6 flex flex-col">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                  {program.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
                {program.description}
              </p>

              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Start: {formatDate(program.details.startDate)}</span>
                <span>Duration: {program.details.duration}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>Languages: {program.details.languages.join(", ")}</span>
                <span>
                  Tuition: ${program.details.tuitionFee.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-4">
              <a
                href={`/programs/${program.id}`}
                className="w-full flex justify-between items-center text-blue-900 hover:text-blue-900 font-semibold transition"
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <Link
          to={`/programs`}
          className="inline-block text-white bg-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-blue-950 transition"
        >
          View All Programs
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProgramsSection;
