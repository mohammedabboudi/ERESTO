const express = require('express');
const { addRestaurant, editRestaurant } = require('../controllers/manager');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const router = express.Router();

const role = 'manager';

router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);



module.exports = router;