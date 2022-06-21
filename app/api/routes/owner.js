const express = require('express');
const router = express.Router();
const { addRestaurant, editRestaurant, deleteRestaurant, listRestaurants, listRestaurant } = require('../controllers/owner');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const { restaurantAddValidator, restaurantAddValidation, restaurantEditValidator, restaurantEditValidation } = require('../validations/restaurant-validation');
const { checkAddedMember } = require('../middleware/checkAddedMember');
const { checkModifiedMember } = require('../middleware/checkModifiedMember');


const role = 'owner';
const members = ['manager'];


router.post('/restaurant/add', authorization, checkRole(role), restaurantAddValidator, restaurantAddValidation, addRestaurant);
router.patch('/restaurant/edit', authorization, checkRole(role), restaurantEditValidator, restaurantEditValidation, editRestaurant);
router.delete('/restaurant/delete', authorization, checkRole(role), deleteRestaurant);
router.get('/restaurants', authorization, checkRole(role), listRestaurants);
router.get('/restaurant', authorization, checkRole(role), listRestaurant);


router.post('/member/add', authorization, checkRole(role), checkAddedMember(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkModifiedMember(members), editMember);
router.post('/members', authorization, checkRole(role), listMembers(members));
router.post('/member', authorization, checkRole(role), listMember(members));





module.exports = router;