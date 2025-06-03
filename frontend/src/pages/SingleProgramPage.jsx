import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Globe,
  DollarSign,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";

export default function SingleProgramPage() {
  const { id } = useParams();

  const [program, setProgram] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`/api/programs/${id}`)
      .then((res) => setProgram(res.data))
      .catch(() => setError("Program not found."));
  }, [id]);

  if (error) return <Navigate to="/programs" replace />;
  if (!program) return <p className="text-center py-10">Loading...</p>;

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/programs"
              className="inline-flex items-center text-blue-100 hover:underline hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Programs
            </Link>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-900 rounded">
                {program.field}
              </span>
              {program.isFree && (
                <span className="inline-block ml-2 px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded">
                  Free
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {program.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {program.shortDescription}
            </p>
            <Link
              to="/apply"
              className="inline-block bg-[#FFB400]  hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="bg-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">{program.description}</p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Learning Outcomes
              </h3>
              <ul className="space-y-3">
                {program.learningOutcomes?.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-[#FFB400] mr-3 h-6 w-6 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-900 border-b pb-2">
              Program Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Clock className="text-blue-900 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Duration</span>
                  <span className="font-medium">
                    {program.details?.duration}
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <Calendar className="text-blue-900 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">
                    Start Date
                  </span>
                  <span className="font-medium">
                    {new Date(program.details?.startDate).toLocaleDateString()}
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <Globe className="text-blue-900 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Language</span>
                  <span className="font-medium">
                    {program.details?.languages?.join(", ")}
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <DollarSign className="text-blue-900 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="font-medium">
                    {program.isFree ? (
                      <span className="text-[#FFB400]">Free</span>
                    ) : (
                      `$${program.details?.tuitionFee?.toLocaleString()}`
                    )}
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/apply"
                className="block w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
