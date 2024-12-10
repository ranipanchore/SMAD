const express = require('express');
const { createAssignment, updateAssignment, deleteAssignment } = require('../controllers/assignmentController');
const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'trainer']), createAssignment);
router.put('/:id', authenticate, authorize(['admin', 'trainer']), updateAssignment);
router.delete('/:id', authenticate, authorize(['admin', 'trainer']), deleteAssignment);

module.exports = router;
