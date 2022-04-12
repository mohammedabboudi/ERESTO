
const { body , validationResult } = require('express-validator');


const validator = [
    body('email').isEmail().withMessage('email must be an email format'),
    body('password').isLength({ min : 10 }).withMessage('password must be at least 10 chars long'),
    body('phoneNumber').isLength({ min : 10 }).withMessage('phone number must be at least 10 chars long'),
    body('address').isLength({ min : 14 }).withMessage('address must be at least 14 chars long')
 ]


function registerValidator(req, res, next){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });

    }
        next();

}


module.exports = { 

    validator,
    registerValidator
    
}