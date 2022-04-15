const express = require('express');
const router = express.Router();
const { login } = require('../controllers/Login');
const { validator, loginValidator } = require('../validations/user/Login-validation');
const { signTokens } = require('../middleware/user/signJWTs');
const { authorization } = require('../middleware/user/authorizeJWTs');

const jwt = require('jsonwebtoken');


let refreshTokens = [];


router.post('/login', validator, loginValidator, login, signTokens);

router.get('/test', authorization,(req, res)=>{

    res.send(`hello from the server side ...`); 
});


router.post('/token', (req, res)=>{

})


module.exports = router;