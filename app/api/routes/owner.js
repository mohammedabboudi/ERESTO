const express = require('express');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, listrestaurant, } = require('../controllers/owner');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');


const role = 'owner';

router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), listrestaurant);
router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);



module.exports = router;