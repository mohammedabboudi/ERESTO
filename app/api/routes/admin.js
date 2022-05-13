const express = require('express');
const { addSector, addUser, changeStatus } = require('../controllers/admin');
const { deleteAccount, listUsers, userSelection } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkCreatedRole } = require('../middleware/checkCreatedRole');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';
const createdRoles = ['head','owner'];


router.post('/sector/add', authorization, checkRole(role), addSector);

router.post('/user/add', authorization, checkRole(role), checkCreatedRole(createdRoles), addUser);
router.delete('/user/delete', authorization, checkRole(role), deleteAccount);
router.get('/users', authorization, checkRole(role), listUsers);
router.post('/user', authorization, checkRole(role), userSelection);

router.patch('/user/status', authorization, checkRole(role), changeStatus);


module.exports = router;