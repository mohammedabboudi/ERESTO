const express = require('express');
const { addMeal } = require('../controllers/manager');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const router = express.Router();

const role = 'manager';

router.post('/meal/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addMeal);




module.exports = router;