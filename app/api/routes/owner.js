const express = require('express');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, restaurantSelection } = require('../controllers/owner');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { addMember, deleteMember, listMember, listMembers, editMember } = require('../controllers/member');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const { checkAddedMember } = require('../middleware/checkAddedMember');
const { changeStatus } = require('../controllers/user');


const role = 'owner';
const members = ['manager'];


router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), restaurantSelection);
router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);







module.exports = router;