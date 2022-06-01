const express = require('express');
const router = express.Router();
const { userSelect, createAccount, editAccount, deleteAccount } = require('../controllers/user');
const { logout } = require("../controllers/logout");
const { authorization } = require('../middleware/authorizeJWTs');
const { saveValidator, saveValidation } = require('../validations/user/register-validation');
const { loginValidator, loginValidation } = require('../validations/user/login-validation');
const { signTokens } = require('../middleware/SignJWTs');
const { login } = require('../controllers/login');



router.post('/register', saveValidator, saveValidation, createAccount, signTokens);
router.patch('/edit', authorization, saveValidator, saveValidation, editAccount);
router.delete('/delete', authorization, deleteAccount, logout, (req, res)=>{ res.send(`YOU'RE ACCOUNT HAS BEEN DELETED SUCCESSFULY...`); });
router.post('/login', loginValidator, loginValidation, login, signTokens);
router.delete('/logout', logout, (req, res)=>{ res.send(`OK YOU'RE NOW LOGED OUT`); });


module.exports = router;