function checkRole(role){

    return (req, res, next)=>{

        if (req.user.role == role){
            next();
        }else{
            res.send(`you're not allowed to make this operation because your role is ${req.user.role}, only the ${role} can...`);
        }
    }
}


module.exports = {

    checkRole
}