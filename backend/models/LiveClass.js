const mongoose = require('mongoose');

const LiveClassSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  schedule: { type: Date, required: true },
  zoomLink: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LiveClass', LiveClassSchema);
