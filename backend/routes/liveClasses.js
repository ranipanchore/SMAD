const express = require('express');
const { createLiveClass } = require('../controllers/liveClassController');
const { authenticate } = require('../middleware/auth');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'trainer']), createLiveClass);

module.exports = router;
