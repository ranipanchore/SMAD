const express = require('express');
const { createCourse, updateCourse, deleteCourse, getCourse } = require('../controllers/courseController');
const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'trainer']), createCourse);
router.put('/:id', authenticate, authorize(['admin', 'trainer']), updateCourse);
router.delete('/:id', authenticate, authorize(['admin', 'trainer']), deleteCourse);
router.get('/:id', authenticate, getCourse);

module.exports = router;
