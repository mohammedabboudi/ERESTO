function checkRole(role){

    return (req, res, next)=>{

    res.send(`hello this is the ${req.user.role}  =  ${role}`)

    }
}


module.exports = {

    checkRole
}