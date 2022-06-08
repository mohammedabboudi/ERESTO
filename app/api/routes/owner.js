const express = require('express');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, restaurantSelection } = require('../controllers/owner');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const { restaurantValidator, restaurantValidation } = require('../validations/restaurant-validation');
const { checkAddedMember } = require('../middleware/checkAddedMember');


const role = 'owner';
const members = ['manager'];


router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), restaurantSelection);
router.post('/restaurant/add', authorization, checkRole(role), restaurantValidator, restaurantValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantValidator, restaurantValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);


router.post('/member/add', authorization, checkRole(role), checkAddedMember(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkAddedMember(members), editMember);
router.post('/members', authorization, checkRole(role), listMembers(members));
router.post('/member', authorization, checkRole(role), listMember(members));





module.exports = router;