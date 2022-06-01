function checkMembers(members){

    return (req, res, next)=>{

        if (members.includes(req.body.role)){
            next();
        }else{
            res.send(`you're not allowed to make this operation because your role is ${req.user.role}, only the ${role} can make it...`);
        }
    }
}


module.exports = {

    checkMembers
}