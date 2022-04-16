const express = require('express');
const router = express.Router();
const { userSelect, userRegister, userEdit, userDelete } = require('../controllers/User');
const { authorization } = require('../middleware/user/authorizeJWTs');
const registerValidation = require('../validations/user/Register-validation');




router.get('/', authorization, userSelect);

router.post('/register',registerValidation.validator, registerValidation.registerValidator, userRegister);

router.patch('/edit', authorization, registerValidation.validator, registerValidation.registerValidator, userEdit);

router.delete('/delete', authorization, userDelete);



module.exports = router;