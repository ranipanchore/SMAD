const express = require('express');
const { updateUser } = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.put('/:id', authenticate, updateUser);

module.exports = router;
