const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.post('/login', userController.handleLogin);
router.get('/all-user', userController.getAllUsers);

module.exports = router;
