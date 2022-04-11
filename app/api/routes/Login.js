const express = require('express');
const router = express.Router();
const loginController = require('../controllers/Login');
// const jwtMiddleware = require('../middleware/jwt');





router.post('/login', loginController.login);



module.exports = router;