const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.get('/login', userController.handleLogin);

module.exports = router;
