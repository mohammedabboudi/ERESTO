function checkCreatedRole(createdRoles){

    return (req, res, next)=>{

        if (createdRoles.includes(req.body.role)){
            next();
        }else{
            res.send(`you're not allowed to make this operation because your role is ${req.user.role}, only the ${role} can...`);
        }
    }
}


module.exports = {

    checkCreatedRole
}