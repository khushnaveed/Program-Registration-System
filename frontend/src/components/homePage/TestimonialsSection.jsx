import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Johnson",
      role: "Computer Science Student",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content:
        "The faculty and course structure are outstanding. I’ve grown not just academically but personally, thanks to the vibrant campus life.",
    },
    {
      id: 2,
      name: "Liam Smith",
      role: "Software Engineering Graduate",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      content:
        "I landed my dream job right after graduation. The hands-on projects and career support really set this university apart.",
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "International Business Student",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      content:
        "The global network and internship opportunities gave me the confidence and experience to excel in the real world.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-4xl text-blue-900 md:text-5xl font-bold text-center mb-12">What Our Students Say</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-gray-50 rounded-lg p-8 relative shadow-md"
          >
            <Quote
              size={40}
              className="text-blue-100 absolute top-6 right-6"
            />
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-blue-900 ">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-500">{testimonial.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
