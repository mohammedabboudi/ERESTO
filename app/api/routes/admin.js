const express = require('express');
const { addSector } = require('../controllers/admin');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const { changeStatus } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkMembers } = require('../middleware/checkMembers');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';
const members = ['head','owner'];


router.post('/sector/add', authorization, checkRole(role), addSector);


router.post('/member/add', authorization, checkRole(role), checkMembers(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), checkMembers(members), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkMembers(members), editMember);
router.get('/members', authorization, checkRole(role), checkMembers(members), listMembers);
router.post('/member', authorization, checkRole(role), checkMembers(members), listMember);
router.patch('/user/status', authorization, checkRole(role), checkMembers(members), changeStatus);



module.exports = router;