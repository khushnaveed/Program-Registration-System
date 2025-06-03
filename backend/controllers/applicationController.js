import Application from "../models/applicationSchema.js";

// Create a new application
export const createApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    const saved = await newApplication.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Error creating Application", error: err });
  }
};

// Get all Application
export const getAllApplications = async (req, res) => {
  try {
    const applicaApplications = await Application.find();
    res.status(200).json(applicaApplications);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching aApplications", error: err });
  }
};

// Get a single application by ID
export const getApplicationById = async (req, res) => {
  try {
    const applicaApplication = await Application.findById(req.params.id);
    if (!applicaApplication)
      return res.status(404).json({ message: "Application not found" });
    res.json(applicaApplication);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Application", error: err });
  }
};

// Update a application by ID
export const updateApplication = async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updated)
      return res.status(404).json({ message: "Application not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Error updating Application", error: err });
  }
};

// Delete a application by ID
export const deleteApplication = async (req, res) => {
  try {
    const deleted = await Application.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Application not found" });
    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting Application", error: err });
  }
};
