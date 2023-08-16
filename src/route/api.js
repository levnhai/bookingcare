const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.post('/login', userController.handleLogin);
router.get('/all-user', userController.getAllUsers);
router.post('/create-new-user', userController.handleNewUser);
router.delete('/delete-user', userController.handleDeleteUser);
router.put('/edit-user', userController.handleEditUser);

module.exports = router;
