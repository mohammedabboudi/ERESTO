const express = require('express');
const { addUser } = require('../controllers/admin');
const router = express.Router();
const { deleteAccount, listUsers, userSelection } = require('../controllers/user');
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');


const role = 'head';
const createdRoles = ['delivery man'];


router.post('/user/add', authorization, checkRole(role), addUser);
router.delete('/user/delete', authorization, checkRole(role), deleteAccount);
router.get('/users', authorization, checkRole(role), listUsers);
router.post('/user', authorization, checkRole(role), userSelection);






module.exports = router;