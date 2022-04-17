const express = require('express');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');


router.get('/', authorization,(req, res)=>{
    
})


module.exports = router;