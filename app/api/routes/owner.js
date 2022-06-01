const express = require('express');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, restaurantSelection } = require('../controllers/owner');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { addMember, deleteMember, listMember, listMembers, editMember } = require('../controllers/member');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const { checkMembers } = require('../middleware/checkMembers');
const { changeStatus } = require('../controllers/user');


const role = 'owner';
const members = ['manager'];


router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), restaurantSelection);
router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);


router.post('/member/add', authorization, checkRole(role), checkMembers(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), checkMembers(members), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkMembers(members), editMember);
router.get('/members', authorization, checkRole(role), checkMembers(members), listMembers);
router.post('/member', authorization, checkRole(role), checkMembers(members), listMember);
router.patch('/user/status', authorization, checkRole(role), checkMembers(members), changeStatus);






module.exports = router;