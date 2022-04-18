const express = require('express');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';

router.get('/', authorization, checkRole(role));
router.post('/sector/add', authorization, checkRole(role));
router.post('/manager/add', authorization, checkRole(role));


module.exports = router;