const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');
const userMiddleware = require('../middleware/User');





router.get('/', userController.userList);

router.post('/register',userMiddleware.validator, userMiddleware.userValidator, userController.userRegister);

router.patch('/edit',userMiddleware.validator, userMiddleware.userValidator, userController.userEdit);



module.exports = router;