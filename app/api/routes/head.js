const express = require('express');
const { addMember, deleteMember, editMember, listMembers, listMember } = require('../controllers/member');
const router = express.Router();
const { authorization } = require('../middleware/authorizeJWTs');
const { checkAddedMember, } = require('../middleware/checkAddedMember');
const { checkModifiedMember } = require('../middleware/checkModifiedMember');
const { checkRole } = require('../middleware/checkRole');



const role = 'head';
const members = ['delivery man'];


router.post('/member/add', authorization, checkRole(role), checkAddedMember(members), addMember);
router.delete('/member/delete', authorization, checkRole(role), deleteMember, (req, res)=>{ res.send(`THE MEMBER IS DELETED SUCCESSFULY...`); });
router.put('/member/edit', authorization, checkRole(role), checkModifiedMember(members), editMember);
router.post('/members', authorization, checkRole(role), listMembers(members));
router.post('/member', authorization, checkRole(role), listMember(members));





module.exports = router;