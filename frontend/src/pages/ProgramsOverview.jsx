import React, { useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Artificial Intelligence Certification",
    category: "AI",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "This certification program provides a thorough grounding in artificial intelligence and machine learning concepts. You will learn about neural networks, deep learning, computer vision, and natural language processing. Our hands-on approach ensures you will be building real-world AI applications from day one.",
    learningOutcomes: [
      "Design and implement machine learning algorithms",
      "Build and deploy neural networks",
      "Develop computer vision applications",
      "Create natural language processing systems",
      "Apply AI ethically to real-world problems",
    ],
    details: {
      duration: "6 months",
      startDate: "2025-09-01T00:00:00.000Z",
      languages: ["English", "Spanish"],
      tuitionFee: 1999,
    },
  },
  {
    title: "Full-Stack Web Development",
    category: "Development",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Learn front-end and back-end development, including HTML, CSS, JavaScript, React, Node.js, and databases. Build complete web applications with hands-on projects.",
    learningOutcomes: [
      "Develop responsive user interfaces",
      "Create RESTful APIs",
      "Manage databases with MongoDB and SQL",
      "Deploy applications to cloud platforms",
    ],
    details: {
      duration: "5 months",
      startDate: "2025-07-15T00:00:00.000Z",
      languages: ["English"],
      tuitionFee: 1499,
    },
  },
  {
    title: "Data Science Bootcamp",
    category: "Data",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Gain skills in data analysis, visualization, and statistical modeling using Python and R. Work on real datasets to extract actionable insights.",
    learningOutcomes: [
      "Perform data cleaning and preprocessing",
      "Build statistical models",
      "Visualize data effectively",
      "Use machine learning techniques",
    ],
    details: {
      duration: "4 months",
      startDate: "2025-08-01T00:00:00.000Z",
      languages: ["English", "French"],
      tuitionFee: 1799,
    },
  },
  {
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Understand the principles of cybersecurity, risk assessment, and protection mechanisms. Learn to secure networks and systems against cyber threats.",
    learningOutcomes: [
      "Identify security vulnerabilities",
      "Implement encryption methods",
      "Monitor and respond to security incidents",
      "Ensure compliance with security standards",
    ],
    details: {
      duration: "3 months",
      startDate: "2025-10-01T00:00:00.000Z",
      languages: ["English"],
      tuitionFee: 1299,
    },
  },
  {
    title: "Cloud Computing with AWS",
    category: "Cloud",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Master cloud infrastructure and services with Amazon Web Services. Learn deployment, scalability, and cost optimization techniques.",
    learningOutcomes: [
      "Deploy applications on AWS",
      "Manage cloud resources",
      "Implement security best practices",
      "Optimize costs and performance",
    ],
    details: {
      duration: "4 months",
      startDate: "2025-09-15T00:00:00.000Z",
      languages: ["English", "German"],
      tuitionFee: 1599,
    },
  },
  {
    title: "Digital Marketing Strategies",
    category: "Business",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Explore SEO, social media marketing, email campaigns, and content creation to boost brand awareness and sales.",
    learningOutcomes: [
      "Develop effective marketing plans",
      "Use analytics tools to measure success",
      "Create engaging content",
      "Run targeted advertising campaigns",
    ],
    details: {
      duration: "3 months",
      startDate: "2025-08-20T00:00:00.000Z",
      languages: ["English", "Spanish"],
      tuitionFee: 999,
    },
  },
  {
    title: "Project Management Professional (PMP) Prep",
    category: "Project Management",
    image: "https://source.unsplash.com/400x300/?ai,technology",
    description:
      "Prepare for PMP certification with focus on project planning, execution, monitoring, and closing best practices.",
    learningOutcomes: [
      "Understand PMBOK guidelines",
      "Create project schedules and budgets",
      "Manage project risks and stakeholders",
      "Lead project teams effectively",
    ],
    details: {
      duration: "2 months",
      startDate: "2025-11-01T00:00:00.000Z",
      languages: ["English"],
      tuitionFee: 1099,
    },
  },
];

export default function ProgramsOverview() {
  const [dateFilter, setDateFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

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
              className={`px-4 py-2 rounded  ${
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
              key={idx}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm w-fit p-2 rounded-full text-gray-500 bg-blue-100 mb-2 italic">
                  {program.category}
                </p>
                <p className="text-gray-600 mb-4 flex-grow">
                  {program.description}
                </p>

                <div className="mb-4">
                  <strong className="text-blue-900">Learning Outcomes:</strong>
                  <ul className="list-disc list-inside text-gray-500 mt-1 space-y-1">
                    {program.learningOutcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 text-gray-500 mb-4">
                  <div className="m-5">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-900" />
                      <span>
                        Start Date: {formatDate(program.details.startDate)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-900" />
                      <span>Duration: {program.details.duration}</span>
                    </div>
                  </div>

                  <div className="m-5">
                    <div>
                      <span>
                        Languages: {program.details.languages.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span>
                        Tuition Fee: $
                        {program.details.tuitionFee.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="mt-auto bg-blue-900 text-gray-200 py-2 px-4 rounded-lg hover:bg-blue-950 transition-colors duration-200 flex items-center justify-center"
                  onClick={() => alert(`More details for: ${program.title}`)}
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
