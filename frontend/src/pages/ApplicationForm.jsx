import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import axios from "axios";

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get("/api/programs")
      .then((res) => {
        setPrograms(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching programs:", err);
        setError("Failed to load programs.");
        setLoading(false);
      });
  }, []);

const onSubmit = async (data) => {
  setSubmitting(true);
  setError(null);
  try {
    const response = await axios.post("/api/applications", data);
    console.log("Application submitted:", response.data);
    setSubmitted(true);
  } catch (err) {
    console.error("Submission error:", err);
    const message =
      err.response?.data?.message || "There was an error submitting the form.";
    setError(message);
  } finally {
    setSubmitting(false);
  }
};


  if (submitted) {
    return (
      <>
        <HeroSection
          title="Application Form"
          subtitle="Complete the form below to apply for our programs"
          backgroundImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-8 text-center"
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="text-[#FFB400] " />
          </div>
          <h2 className="text-2xl text-blue-900 font-bold mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-500 mb-6">
            We've received your application and will contact you soon with next
            steps.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-950 transition"
          >
            Return to Home
          </a>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <HeroSection
        title="Application Form"
        subtitle="Complete the form below to apply for our programs"
        backgroundImage="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-8 mb-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 m-6 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div className="mb-8">
            <h3 className="text-xl text-blue-900 font-semibold mb-4 pb-2 border-b">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  Phone
                </label>
                <input
                  type="text"
                  {...register("phone", { required: "This field is required" })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-gray-500">
                  Country
                </label>
                <input
                  type="text"
                  {...register("country", {
                    required: "This field is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-blue-900 font-semibold mb-4 pb-2 border-b">
              Program Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-gray-500">
                  Select Program
                </label>
                {loading ? (
                  <p>Loading programs...</p>
                ) : (
                  <select
                    {...register("program", {
                      required: "This field is required",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.program ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a program...</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program._id}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                )}
                {errors.program && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.program.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  Start Date
                </label>
                <input
                  type="date"
                  {...register("startDate", {
                    required: "This field is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.startDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-500">
                  Education Level
                </label>
                <select
                  {...register("education", {
                    required: "This field is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.education ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select your education level...</option>
                  <option value="high_school">High School</option>
                  <option value="associates">Associate's Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
                {errors.education && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.education.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-gray-500">
                  Experience
                </label>
                <textarea
                  {...register("experience")}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className={`inline-block px-6 py-3 rounded-md font-semibold text-white ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-950"
              } transition`}
            >
              {submitting ? "Loading..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
