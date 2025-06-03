import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import {
  Clock,
  Calendar,
  Globe,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function SingleProgramPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    axios
      .get(`/api/programs/${id}`)
      .then((res) => {
        setProgram(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load program details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!program) return <Navigate to="/programs" replace />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{program.title}</h1>
      <p className="text-gray-700 mb-6">{program.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Program Details</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Duration: {program.duration}
            </li>
            <li className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Start Date: {program.startDate}
            </li>
            <li className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Language: {program.language?.join(", ")}
            </li>
            <li className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Price: ${program.price?.toLocaleString()}
            </li>
          </ul>
        </div>

        {program.outcomes?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
            <ul className="space-y-2 text-gray-700">
              {program.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <a
        href={`/apply?program=${program.id}`}
        className="inline-block mt-8 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-950"
      >
        Apply Now
      </a>
    </div>
  );
}
