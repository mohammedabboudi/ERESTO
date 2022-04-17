const express = require('express');
const router = express.Router();
const { userSelect, userRegister, userEdit, userDelete } = require('../controllers/User');
const { logout } = require("../controllers/logout");
const { authorization } = require('../middleware/authorizeJWTs');
const { saveValidator, saveValidation } = require('../validations/user/register-validation');
const { loginValidator, loginValidation } = require('../validations/user/login-validation');
const { signTokens } = require('../middleware/SignJWTs');
const { login } = require('../controllers/Login');





router.get('/', authorization, userSelect);

router.post('/register', saveValidator, saveValidation, userRegister, signTokens);

router.patch('/edit', authorization, saveValidator, saveValidation, userEdit);

router.delete('/delete', authorization, userDelete);

router.post('/login', loginValidator, loginValidation, login, signTokens);

router.delete('/logout', logout);

router.get('/test', authorization,(req, res)=>{

    res.send(`hello from the server side ...`); 
});


module.exports = router;