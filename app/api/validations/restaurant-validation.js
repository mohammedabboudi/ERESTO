
const { body , validationResult } = require('express-validator');


const restaurantValidator = [
    body('name').isLength({ min : 2 }).withMessage('the name is required'),
    body('location').isLength({ min : 2 }).withMessage('location must be at least 2 chars long'),
    body('city').isLength({ min : 2 }).withMessage('city must be at least 4 chars long')
 ]


function restaurantValidation(req, res, next){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });

    }
        next();

}


module.exports = { 

    restaurantValidator,
    restaurantValidation
    
}