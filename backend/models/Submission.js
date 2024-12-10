const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' },
  fileUrl: { type: String },
  grade: { type: Number },
  feedback: { type: String },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
