const express = require('express');
const { addSector } = require('../controllers/admin');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const { changeStatus, listUsers, listUser } = require('../controllers/user');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkAddedMember } = require('../middleware/checkAddedMember');
const { checkModifiedMember } = require('../middleware/checkModifiedMember');
const { checkRole } = require('../middleware/checkRole');

const role = 'admin';
const members = ['head','owner'];


router.post('/sector/add', authorization, checkRole(role), addSector);


router.post('/member/add', authorization, checkRole(role), checkAddedMember(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkModifiedMember(members), editMember);
router.post('/members', authorization, checkRole(role), listMembers(members));
router.post('/member', authorization, checkRole(role), listMember(members));


router.get('/users', authorization, checkRole(role), listUsers);
router.post('/user', authorization, checkRole(role), listUser);
router.patch('/user/status', authorization, checkRole(role), changeStatus);



module.exports = router;