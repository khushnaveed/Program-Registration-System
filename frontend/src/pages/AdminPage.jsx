import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import AdminApplicatons from "../components/adminPage/AdminApplicatons";
import AdminPrograms from "../components/adminPage/AdminPrograms";
import HeroSection from "../components/HeroSection";

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("applications");

  const tabs = [
    { id: "applications", label: "Applications" },
    { id: "programs", label: "Programs" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "applications":
        return <AdminApplicatons />;
      case "programs":
        return <AdminPrograms />;
      default:
        return <AdminApplicatons />;
    }
  };

  return (
    <>
      <HeroSection
        title="Admin Panel"
        subtitle="View Programs and User's Applications"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-4 py-8">
        <AnimateSharedLayout>
          <div className="flex space-x-8 border-b border-gray-300 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className="relative pb-3 px-4 text-lg font-semibold text-gray-500 hover:text-blue-900 focus:outline-none"
              >
                {tab.label}
                {activeSection === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 rounded-t-md"
                  />
                )}
              </button>
            ))}
          </div>
        </AnimateSharedLayout>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <div className="space-y-6">{renderActiveSection()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
