const express = require('express');
const router = express.Router();
const userController = require('../controllers/User')

router.get('/', userController.userList);


module.exports = router;