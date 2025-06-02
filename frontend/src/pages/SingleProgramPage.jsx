import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Globe,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import axios from "axios";

export default function SingleProgramPage() {
  const { id } = useParams();

  const [program, setProgram] = useState(null);
  const [relatedPrograms, setRelatedPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios
      .get(`/api/programs/${id}`)
      .then((res) => {
        setProgram(res.data);
        return axios.get(
          `/api/programs?field=${res.data.field}&excludeId=${res.data.id}`
        );
      })
      .then((res) => {
        setRelatedPrograms(res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load program details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">{error}</p>
    );
  if (!program) return <Navigate to="/programs" replace />;

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded">
                {program.field || program.category}
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
              {program.shortDescription || program.description}
            </p>
            <a
              href={`/apply?program=${program.id}`}
              className="inline-block px-6 py-3 border border-transparent text-lg font-semibold rounded-md text-blue-900 bg-white hover:bg-blue-100 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Program Details */}
      <section className="bg-white py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">
              Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">{program.description}</p>
            </div>

            {program.outcomes?.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-blue-800">
                  Outcomes
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="text-green-500 mr-3 h-6 w-6 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="bg-gray-50 rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-800 border-b pb-2">
              Program Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Clock className="text-blue-800 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Duration</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
              </li>
              <li className="flex items-center">
                <Calendar className="text-blue-800 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Start Date</span>
                  <span className="font-medium">{program.startDate}</span>
                </div>
              </li>
              <li className="flex items-center">
                <Globe className="text-blue-800 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Language</span>
                  <span className="font-medium">{program.language?.join(", ")}</span>
                </div>
              </li>
              <li className="flex items-center">
                <DollarSign className="text-blue-800 mr-3 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="font-medium">
                    {program.isFree ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <>${program.price?.toLocaleString()}</>
                    )}
                  </span>
                </div>
              </li>
            </ul>

            <a
              href={`/apply?program=${program.id}`}
              className="mt-6 block w-full text-center px-4 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-950 transition"
            >
              Apply Now
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
