const LiveClass = require('../models/LiveClass');

const createLiveClass = async (req, res) => {
  const { title, description, course, schedule, zoomLink } = req.body;
  const liveClass = new LiveClass({ title, description, course, schedule, zoomLink });
  await liveClass.save();
  res.status(201).json(liveClass);
};

module.exports = { createLiveClass };
