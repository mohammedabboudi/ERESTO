
const { body , validationResult } = require('express-validator');


const validator = [
    body('email').isEmail().withMessage('email must be an email format'),
    body('password').isLength({ min : 10 }).withMessage('password must be at least 10 chars long')
 ]


function loginValidator(req, res, next){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });

    }
        next();

}


module.exports = { 

    validator,
    loginValidator
    
}