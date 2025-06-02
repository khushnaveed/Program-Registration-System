import Program from '../models/programSchema.js';

// Create a new program
export const createProgram = async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    const saved = await newProgram.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Error creating program', error: err });
  }
};

// Get all programs
export const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching programs', error: err });
  }
};

// Get a single program by ID
export const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching program', error: err });
  }
};

// Update a program by ID
export const updateProgram = async (req, res) => {
  try {
    const updated = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'Program not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error updating program', error: err });
  }
};

// Delete a program by ID
export const deleteProgram = async (req, res) => {
  try {
    const deleted = await Program.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Program not found' });
    res.json({ message: 'Program deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting program', error: err });
  }
};
