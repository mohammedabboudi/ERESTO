function checkModifiedMember(members){

    return (req, res, next)=>{

        if (typeof req.body.role == 'undefined'){
            res.send(`YOU SHOULD DEFINE ROLE FIELD BEFORE SUBMIT THE FORM !`)
        }else if(members.includes(req.body.role)){
            next();
        }else{
            res.send(`you're not allowed to modify ${req.body.role} because your role is ${req.user.role}...`);
        }
    }
}


module.exports = {

    checkModifiedMember
}