const User = require('../models/User');


function login(req, res, next){

    const email = req.body.email;
    const password = req.body.password;

    const userCredentials = { email, password };

    User.findOne(userCredentials).then(user =>{

        if (user != null) {

            req.user = user;
            next();

        } else {
            
           res.send(`there is no user with this credencials. try again or register`)

        }
       

    }).catch(err =>{

        res.send(err);

    })

}


module.exports = {

    login
}