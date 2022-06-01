const express = require('express');
const { changeStatus } = require('../controllers/user');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkMembers } = require('../middleware/checkMembers');
const { checkRole } = require('../middleware/checkRole');


const role = 'head';
const members = ['delivery man'];


router.post('/member/add', authorization, checkRole(role), checkMembers(role, members), addMember);
router.delete('/member/delete', authorization, checkRole(role), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkMembers(role, members), editMember);
router.get('/members', authorization, checkRole(role), checkMembers(role, members), listMembers);
router.post('/member', authorization, checkRole(role), checkMembers(role, members), listMember);
router.patch('/user/status', authorization, checkRole(role), checkMembers(role, members), changeStatus);





module.exports = router;