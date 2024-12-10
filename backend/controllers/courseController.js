const Course = require('../models/Course');

const createCourse = async (req, res) => {
  const { title, description, syllabus, modules } = req.body;
  const course = new Course({ title, description, syllabus, modules, trainer: req.user.id });
  await course.save();
  res.status(201).json(course);
};

const updateCourse = async (req, res) => {
  const { title, description, syllabus, modules } = req.body;
  const course = await Course.findByIdAndUpdate(req.params.id, { title, description, syllabus, modules }, { new: true });
  res.json(course);
};

const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('trainer students');
  res.json(course);
};

module.exports = { createCourse, updateCourse, deleteCourse, getCourse };
