const express = require('express');
const crudController = require('../controllers/crudController');

let router = express.Router();

router.get('/', crudController.getAllUser);
router.get('/create', crudController.create);
router.post('/store', crudController.store);
router.get('/:id/edit', crudController.getUserById);
router.post('/update', crudController.update);

module.exports = router;
