import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program", // reference to a Program model
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  education: {
    type: String,
    enum: ["high_school", "associates", "bachelors", "masters", "doctorate"],
    required: true,
  },
  experience: {
    type: String,
    default: "",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});


const Application = mongoose.model('Application', applicationSchema);
export default Application;
