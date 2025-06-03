import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminPrograms() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [newProgram, setNewProgram] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    learningOutcomes: ["", "", ""],
    details: {
      duration: "",
      startDate: "",
      languages: [""],
      tuitionFee: "",
    },
  });

  const [editingProgramId, setEditingProgramId] = useState(null);
  const [editedProgram, setEditedProgram] = useState({});

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = () => {
    setLoading(true);
    axios
      .get("/api/programs")
      .then((res) => {
        setPrograms(res.data);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const handleCreate = () => {
    axios
      .post("/api/programs", newProgram)
      .then(() => {
        setNewProgram({
          title: "",
          category: "",
          image: "",
          description: "",
          learningOutcomes: ["", "", ""],
          details: {
            duration: "",
            startDate: "",
            languages: [""],
            tuitionFee: "",
          },
        });
        fetchPrograms();
      })
      .catch((err) => console.error("Create failed:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/programs/${id}`)
      .then(() => fetchPrograms())
      .catch((err) => console.error("Delete failed:", err));
  };

  const startEditing = (program) => {
    setEditingProgramId(program._id);
    setEditedProgram({
      ...program,
      learningOutcomes:
        program.learningOutcomes && program.learningOutcomes.length
          ? program.learningOutcomes
          : [""],
      details: {
        ...program.details,
        languages:
          program.details?.languages && program.details.languages.length
            ? program.details.languages
            : [""],
      },
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("details.")) {
      const key = name.split(".")[1];
      setEditedProgram({
        ...editedProgram,
        details: {
          ...editedProgram.details,
          [key]: value,
        },
      });
    } else {
      setEditedProgram({ ...editedProgram, [name]: value });
    }
  };

  const updateArrayField = (field, index, value, isDetails = false) => {
    if (isDetails) {
      const arr = [...(editedProgram.details[field] || [])];
      arr[index] = value;
      setEditedProgram({
        ...editedProgram,
        details: {
          ...editedProgram.details,
          [field]: arr,
        },
      });
    } else {
      const arr = [...(editedProgram[field] || [])];
      arr[index] = value;
      setEditedProgram({ ...editedProgram, [field]: arr });
    }
  };

  const addArrayField = (field, isDetails = false) => {
    if (isDetails) {
      setEditedProgram({
        ...editedProgram,
        details: {
          ...editedProgram.details,
          [field]: [...(editedProgram.details[field] || []), ""],
        },
      });
    } else {
      setEditedProgram({
        ...editedProgram,
        [field]: [...(editedProgram[field] || []), ""],
      });
    }
  };

  const handleEditSave = async (id) => {
    try {
      console.log("Sending update for program id", id, editedProgram);
      await axios.patch(`/api/programs/${id}`, editedProgram);
      setEditingProgramId(null);
      fetchPrograms();
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 rounded-lg bg-gray-50 min-h-screen min-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-900 ">
          <p className="text-sm font-medium text-gray-500">Total Programs</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {programs.length}
          </p>
        </div>
      </div>

      {/* Create New Program */}
      <div className="bg-white p-6 shadow-lg mb-10 space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Create New Program</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={newProgram.title}
            onChange={(e) =>
              setNewProgram({ ...newProgram, title: e.target.value })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProgram.category}
            onChange={(e) =>
              setNewProgram({ ...newProgram, category: e.target.value })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProgram.image}
            onChange={(e) =>
              setNewProgram({ ...newProgram, image: e.target.value })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          <textarea
            placeholder="Description"
            value={newProgram.description}
            onChange={(e) =>
              setNewProgram({ ...newProgram, description: e.target.value })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          {/* Learning Outcomes */}
          <div className="sm:col-span-2">
            <label className="block mb-1 font-semibold">Learning Outcomes</label>
            {newProgram.learningOutcomes.map((lo, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Outcome ${i + 1}`}
                value={lo}
                onChange={(e) => {
                  const updated = [...newProgram.learningOutcomes];
                  updated[i] = e.target.value;
                  setNewProgram({ ...newProgram, learningOutcomes: updated });
                }}
                className="w-full border-gray-300 p-3 shadow-sm mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() =>
                setNewProgram({
                  ...newProgram,
                  learningOutcomes: [...newProgram.learningOutcomes, ""],
                })
              }
              className="text-sm text-blue-900 pb-1 hover:underline"
            >
              + Add Outcome
            </button>
          </div>

          {/* Details */}
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            value={newProgram.details.duration}
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                details: { ...newProgram.details, duration: e.target.value },
              })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          <input
            type="date"
            placeholder="Start Date"
            name="startDate"
            value={newProgram.details.startDate}
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                details: { ...newProgram.details, startDate: e.target.value },
              })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
          {/* Languages */}
          <div>
            <label className="block mb-1 font-semibold">Languages</label>
            {newProgram.details.languages.map((lang, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Language ${i + 1}`}
                value={lang}
                onChange={(e) => {
                  const updated = [...newProgram.details.languages];
                  updated[i] = e.target.value;
                  setNewProgram({
                    ...newProgram,
                    details: { ...newProgram.details, languages: updated },
                  });
                }}
                className="w-full border-gray-300 p-3 shadow-sm mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() =>
                setNewProgram({
                  ...newProgram,
                  details: {
                    ...newProgram.details,
                    languages: [...newProgram.details.languages, ""],
                  },
                })
              }
              className="text-sm text-blue-900 pb-1 hover:underline"
            >
              + Add Language
            </button>
          </div>

          <input
            type="number"
            placeholder="Tuition Fee"
            name="tuitionFee"
            value={newProgram.details.tuitionFee}
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                details: { ...newProgram.details, tuitionFee: e.target.value },
              })
            }
            className="w-full border-gray-300 p-3 shadow-sm"
          />
        </div>

        <button
          onClick={handleCreate}
          className="bg-blue-900 rounded text-white px-6 py-2 hover:bg-blue-950  transition-all duration-200"
        >
          Create Program
        </button>
      </div>

      {/* Programs List */}
      {loading && <p>Loading programs...</p>}
      {error && <p>Error loading programs.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program._id}
            className="bg-white rounded-lg shadow p-6 relative border border-gray-200"
          >
            {editingProgramId === program._id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editedProgram.title || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                <input
                  type="text"
                  name="category"
                  value={editedProgram.category || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                <input
                  type="text"
                  name="image"
                  value={editedProgram.image || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                <textarea
                  name="description"
                  value={editedProgram.description || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                {/* Learning Outcomes */}
                <div className="mb-2">
                  <label className="font-semibold block mb-1">
                    Learning Outcomes
                  </label>
                  {(editedProgram.learningOutcomes || []).map((lo, i) => (
                    <input
                      key={i}
                      type="text"
                      value={lo}
                      onChange={(e) =>
                        updateArrayField("learningOutcomes", i, e.target.value)
                      }
                      className="w-full border-gray-300 p-2 mb-1"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField("learningOutcomes")}
                    className="text-sm text-blue-900  pb-1 hover:underline"
                  >
                    + Add Outcome
                  </button>
                </div>

                {/* Details */}
                <input
                  type="text"
                  name="details.duration"
                  value={editedProgram.details?.duration || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                <input
                  type="date"
                  name="details.startDate"
                  value={editedProgram.details?.startDate || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-2"
                />
                {/* Languages */}
                <div className="mb-2">
                  <label className="font-semibold block mb-1">Languages</label>
                  {(editedProgram.details?.languages || []).map((lang, i) => (
                    <input
                      key={i}
                      type="text"
                      value={lang}
                      onChange={(e) =>
                        updateArrayField("languages", i, e.target.value, true)
                      }
                      className="w-full border-gray-300 p-2 mb-1"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField("languages", true)}
                    className="text-sm text-blue-900 pb-1 hover:underline"
                  >
                    + Add Language
                  </button>
                </div>
                <input
                  type="number"
                  name="details.tuitionFee"
                  value={editedProgram.details?.tuitionFee || ""}
                  onChange={handleEditChange}
                  className="w-full border-gray-300 p-2 mb-4"
                />

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setEditingProgramId(null)}
                    className="px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEditSave(program._id)}
                    className="bg-blue-900 px-4 py-2 text-white rounded hover:bg-blue-950"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
                <p className="mb-1">
                  <strong>Category:</strong> {program.category}
                </p>
                <p className="mb-1">{program.description}</p>
                <p className="mb-1">
                  <strong>Duration:</strong> {program.details?.duration}
                </p>
                <p className="mb-1">
                  <strong>Start Date:</strong> {program.details?.startDate}
                </p>
                <p className="mb-1">
                  <strong>Tuition Fee:</strong> {program.details?.tuitionFee}
                </p>
                <p className="mb-1">
                  <strong>Languages:</strong>{" "}
                  {(program.details?.languages || []).join(", ")}
                </p>
                <p className="mb-2">
                  <strong>Learning Outcomes:</strong>
                  <ul className="list-disc ml-5">
                    {(program.learningOutcomes || []).map((lo, i) => (
                      <li key={i}>{lo}</li>
                    ))}
                  </ul>
                </p>

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => startEditing(program)}
                    className="text-blue-900 hover:text-blue-950"
                    title="Edit Program"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(program._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Program"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
