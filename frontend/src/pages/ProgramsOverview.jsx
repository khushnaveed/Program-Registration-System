import React, { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import axios from "axios";

const categories = [
  "all",
  "AI",
  "Development",
  "Data",
  "Cybersecurity",
  "Cloud",
  "Business",
  "Project Management",
];

export default function ProgramsOverview() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [dateFilter, setDateFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    axios
      .get("/api/programs")
      .then((res) => {
        setPrograms(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching programs:", err);
        setError("Failed to load programs.");
        setLoading(false);
      });
  }, []);

  const currentDate = new Date();

  const filteredPrograms = programs.filter((program) => {
    const programDate = new Date(program.details.startDate);
    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "upcoming" && programDate >= currentDate) ||
      (dateFilter === "past" && programDate < currentDate);

    const matchesCategory =
      categoryFilter === "all" || program.category === categoryFilter;

    return matchesDate && matchesCategory;
  });

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading)
    return (
      <p className="text-center py-10 text-gray-700">Loading programs...</p>
    );

  if (error)
    return (
      <p className="text-center py-10 text-red-600 font-semibold">{error}</p>
    );

  return (
    <>
      <HeroSection
        title="Programs Overview"
        subtitle="Explore our diverse courses and discover your path to success"
        backgroundImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded ${
                categoryFilter === cat
                  ? "bg-blue-900 shadow text-white"
                  : "bg-white shadow text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, idx) => (
            <div
              key={program._id || idx}
              className="bg-white rounded-lg shadow hover:shadow-lg flex flex-col h-full"
            >
              {/* Program Image */}
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

                <div className="flex justify-between text-sm text-gray-500 mb-6">
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

              <div className=" px-6 text-white bg-blue-900  hover:text-white hover:bg-blue-950 py-4 rounded">
                <button
                  className="w-full flex justify-between items-center font-semibold transition"
                  onClick={() => alert(`More details for: ${program.title}`)}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
