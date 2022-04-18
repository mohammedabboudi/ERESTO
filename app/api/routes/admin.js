const express = require('express');
const { addSector, addUser } = require('../controllers/admin');
const { userRegister } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';

router.get('/', authorization, checkRole(role));
router.post('/sector/add', authorization, checkRole(role), addSector);
router.post('/user/add', authorization, checkRole(role), addUser);


module.exports = router;