const express = require('express');
const { changeStatus } = require('../controllers/user');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkAddedMember } = require('../middleware/checkAddedMember');
const { checkRole } = require('../middleware/checkRole');



const role = 'head';
const members = ['delivery man'];






module.exports = router;