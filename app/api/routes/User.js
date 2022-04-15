const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const registerValidation = require('../validations/user/Register-validation');
const verifyTokenMiddleware = require('../../utilities/verifyAccessToken');




router.get('/', verifyTokenMiddleware.verifyAccessToken, userController.userList);

router.post('/register',registerValidation.validator, registerValidation.registerValidator, userController.userRegister);

router.patch('/edit', verifyTokenMiddleware.verifyAccessToken, registerValidation.validator, registerValidation.registerValidator, userController.userEdit);

router.delete('/delete', verifyTokenMiddleware.verifyAccessToken, userController.userDelete);



module.exports = router;