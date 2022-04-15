const express = require('express');
const router = express.Router();
const { logout } = require("../controllers/logout");



router.delete('/logout', logout)



module.exports = router