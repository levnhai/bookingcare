const express = require('express');
const homeController = require('../controllers/homeController');

let router = express.Router();

router.get('/', homeController.home);

module.exports = router;
