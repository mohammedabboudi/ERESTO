const express = require('express');
const router = express.Router();
const { userSelect, userRegister, userEdit, userDelete } = require('../controllers/User');
const { authorization } = require('../middleware/user/authorizeJWTs');
const { signTokens } = require('../middleware/user/signJWTs');
const { validator, registerValidation } = require('../validations/user/Register-validation');




router.get('/', authorization, userSelect);

router.post('/register', validator, registerValidation, userRegister, signTokens);

router.patch('/edit', authorization, validator, registerValidation, userEdit);

router.delete('/delete', authorization, userDelete);



module.exports = router;