function checkAddedMember(members){

    return (req, res, next)=>{

        if (members.includes(req.body.role)){
            next();
        }else{
            res.send(`you're not allowed to make this operation because your role is ${req.user.role}...`);
        }
    }
}


module.exports = {

    checkAddedMember
}