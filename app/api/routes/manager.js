const express = require('express');
const router = express.Router();
const { addMeal, editMeal, deleteMeal, listMeals, listMeal } = require('../controllers/manager');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { mealValidator, mealValidation } = require('../validations/meal-validation');

const role = 'manager';


router.post('/meal/add', authorization, checkRole(role), mealValidator, mealValidation, addMeal);
router.patch('/meal/edit', authorization, checkRole(role), mealValidator, mealValidation, editMeal);
router.delete('/meal/delete', authorization, checkRole(role), deleteMeal);
router.get('/meals', authorization, checkRole(role), listMeals);
router.get('/meal', authorization, checkRole(role), listMeal);



module.exports = router;