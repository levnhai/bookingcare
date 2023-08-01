const express = require('express');
const homeController = require('../controllers/homeController');

let router = express.Router();

router.get('/', homeController.home);
router.get('/crud', homeController.crud);
router.post('/CreateUser', homeController.CreateUser);

module.exports = router;
