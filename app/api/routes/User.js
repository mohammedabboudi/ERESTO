const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const registerValidation = require('../validations/user/Register-validation');





router.get('/', userController.userList);

router.post('/register',registerValidation.validator, registerValidation.registerValidator, userController.userRegister);

router.patch('/edit',registerValidation.validator, registerValidation.registerValidator, userController.userEdit);

router.delete('/delete', userController.userDelete);



module.exports = router;