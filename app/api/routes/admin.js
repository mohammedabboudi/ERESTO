const express = require('express');
const { addSector, addUser } = require('../controllers/admin');
const { userDelete } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';

router.get('/', authorization, checkRole(role));
router.post('/sector/add', authorization, checkRole(role), addSector);
router.post('/user/add', authorization, checkRole(role), addUser);
router.delete('/user/delete', authorization, checkRole(role), userDelete);


module.exports = router;