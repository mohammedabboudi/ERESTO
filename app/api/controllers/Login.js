const User = require('../models/User');


function login(req, res, next){

    const email = req.body.email;
    const password = req.body.password;

    const userCredentials = { email, password };

    User.findOne(userCredentials).then(user =>{

        req.userExist = user;
        next();

    }).catch(err =>{

        res.send(err);

    })

}


module.exports = {

    login
}