const Assignment = require('../models/Assignment');

const createAssignment = async (req, res) => {
  const { title, description, course, dueDate } = req.body;
  const assignment = new Assignment({ title, description, course, dueDate });
  await assignment.save();
  res.status(201).json(assignment);
};

const updateAssignment = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const assignment = await Assignment.findByIdAndUpdate(req.params.id, { title, description, dueDate }, { new: true });
  res.json(assignment);
};

const deleteAssignment = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = { createAssignment, updateAssignment, deleteAssignment };
