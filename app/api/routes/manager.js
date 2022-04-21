const express = require('express');
const { addRestaurant, editRestaurant, deleteRestaurant, addMeal, editMeal, deleteMeal } = require('../controllers/manager');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { mealValidator, mealValidation } = require('../validations/meal-validation');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const router = express.Router();

const role = 'manager';

router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);
router.post('/meal/add', authorization, checkRole(role), mealValidator, mealValidation, addMeal);
router.patch('/meal/edit', authorization, checkRole(role), mealValidator, mealValidation, editMeal);
router.delete('/meal/delete', authorization, checkRole(role), deleteMeal);



module.exports = router;