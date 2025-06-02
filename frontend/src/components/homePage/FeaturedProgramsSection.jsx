import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturedProgramsSection = () => {
  const programs = [
    {
      id: "cs101",
      title: "Computer Science Fundamentals",
      field: "Computer Science",
      shortDescription:
        "Learn the basics of algorithms, data structures, and programming.",
      duration: "6 months",
      price: 0,
      isFree: true,
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      id: "bus202",
      title: "International Business Strategy",
      field: "Business",
      shortDescription:
        "Develop skills for managing business operations globally.",
      duration: "4 months",
      price: 1200,
      isFree: false,
      image:
        "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
    },
    {
      id: "eng303",
      title: "Creative Writing Workshop",
      field: "Arts & Humanities",
      shortDescription:
        "Explore techniques to enhance your writing and storytelling.",
      duration: "3 months",
      price: 800,
      isFree: false,
      image: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
    },
  ];

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
        {featuredPrograms.map((program) => (
          <motion.div
            key={program.id}
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
                  {program.field}
                </span>
                {program.isFree && (
                  <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                    Free
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {program.shortDescription}
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>Duration: {program.duration}</span>
                <span>
                  {program.isFree
                    ? "Free"
                    : `$${program.price.toLocaleString()}`}
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
        <a
          href="/programs"
          className="inline-block text-white bg-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-blue-950 transition"
        >
          View All Programs
        </a>
      </div>
    </div>
  );
};

export default FeaturedProgramsSection;
