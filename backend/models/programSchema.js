import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  learningOutcomes: {
    type: [String],
    required: true,
  },
  details: {
    duration: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    tuitionFee: {
      type: Number,
      required: true,
    },
  }
}, {
  timestamps: true
});

const Program = mongoose.model('Program', programSchema);

export default Program;
