const express = require('express');
const { addUser } = require('../controllers/admin');
const router = express.Router();
const { addMeal, editMeal, deleteMeal, listMeals, listMeal } = require('../controllers/head');
const { deleteAccount, listUsers, userSelection } = require('../controllers/user');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { mealValidator, mealValidation } = require('../validations/meal-validation');

const role = 'head';
const createdUsers = ['delivery man'];


router.post('/user/add', authorization, checkRole(role), addUser);
router.delete('/user/delete', authorization, checkRole(role), deleteAccount);
router.get('/users', authorization, checkRole(role), listUsers);
router.post('/user', authorization, checkRole(role), userSelection);






module.exports = router;