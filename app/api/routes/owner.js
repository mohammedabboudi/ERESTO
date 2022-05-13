const express = require('express');
const { addUser } = require('../controllers/admin');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, restaurantSelection } = require('../controllers/owner');
const { deleteAccount, listUsers, userSelection } = require('../controllers/user');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');


const role = 'owner';
const createdRoles = ['manager'];


router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), restaurantSelection);
router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);

router.post('/user/add', authorization, checkRole(role), addUser);
router.delete('/user/delete', authorization, checkRole(role), deleteAccount);
router.get('/users', authorization, checkRole(role), listUsers);
router.post('/user', authorization, checkRole(role), userSelection);



module.exports = router;