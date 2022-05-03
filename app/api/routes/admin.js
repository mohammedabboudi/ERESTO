const express = require('express');
const { addSector, addUser, changeStatus, addRole } = require('../controllers/admin');
const { userDelete, usersSelect, userSelect } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';


router.get('/', authorization, checkRole(role));
router.post('/role/add', authorization, checkRole(role), addRole);
router.post('/sector/add', authorization, checkRole(role), addSector);
router.post('/user/add', authorization, checkRole(role), addUser);
router.delete('/user/delete', authorization, checkRole(role), userDelete);
router.get('/users', authorization, checkRole(role), usersSelect);
router.post('/user', authorization, checkRole(role), userSelect);
router.patch('/user/status', authorization, checkRole(role), changeStatus);


module.exports = router;