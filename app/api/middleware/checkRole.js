function checkRole(role){

    return (req, res, next)=>{

        if (req.user.role == role){
            // res.send(`${req.user.role} is ${role}`);
            next();
        }else{

            res.send(`you're not allowed to make this operation because your role is ${req.user.role}, only the ${role} can...`);

        }

    }
}


module.exports = {

    checkRole
}