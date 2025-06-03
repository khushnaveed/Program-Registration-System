import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("/api/applications");
      setApplications(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    try {
      await axios.delete(`/api/applications/${id}`);
      fetchApplications();
    } catch (err) {
      console.error("Error deleting application:", err);
    }
  };

  if (loading)
    return (
      <div className="p-4 bg-gray-50 min-h-screen flex justify-center items-center">
        <p>Loading applications...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-4 bg-gray-50 min-h-screen flex justify-center items-center">
        <p className="text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="p-6 rounded-lg bg-gray-50 min-h-screen min-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-900">
          <p className="text-sm font-medium text-gray-500">
            Total Applications
          </p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {applications.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          <div className="grid rounded grid-cols-9 gap-2 bg-gray-50 text-blue-900 font-semibold px-4 py-3 mb-2 text-sm">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>Country</span>
            <span>Program</span>
            <span>Start Date</span>
            <span>Education</span>
            <span>Experience</span>
            <span className="text-center">Actions</span>
          </div>

          {applications.map((app) => (
            <div
              key={app._id}
              className="grid grid-cols-9 rounded gap-2 hover:bg-gray-50 items-center bg-white p-4 mb-2 shadow text-sm"
            >
              <span className="truncate">
                {app.firstName} {app.lastName}
              </span>
              <span className="truncate">{app.email}</span>
              <span className="truncate">{app.phone}</span>
              <span className="truncate">{app.country}</span>
              <span className="truncate">{app.program?.title || "N/A"}</span>
              <span>{new Date(app.startDate).toLocaleDateString()}</span>
              <span className="truncate">{app.education}</span>
              <span className="truncate">{app.experience}</span>
              <div className="flex justify-center">
                <Trash2
                  onClick={() => deleteApplication(app._id)}
                  className="text-red-600 cursor-pointer hover:scale-110 transition-transform"
                  size={18}
                  title="Delete Application"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminApplications;
