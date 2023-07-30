const express = require('express');
const homeController = require('../controllers/homeController');

let router = express.Router();

router.get('/', homeController.show);

module.exports = router;
