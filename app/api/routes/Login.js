const express = require('express');
const router = express.Router();
const loginController = require('../controllers/Login');
const loginValidation = require('../validations/user/Login-validation');
const jwtMiddleware = require('../middleware/user/jwt');
const verifyTokenMiddleware = require('../middleware/user/verifyToken');





router.post('/login',loginValidation.validator, loginValidation.loginValidator, loginController.login, jwtMiddleware.jwtgenerator);

router.get('/test', verifyTokenMiddleware.verifyToken, (req, res)=>{

    console.log(`the user has been verified ...`)
    res.send(`the user has been verified ...`)
});



module.exports = router;