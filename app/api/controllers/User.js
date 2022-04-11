const database = require('../../config/database/Mongoose_connection');
const User = require('../models/User');


function userList(req, res){

    res.send(`hello from the normal user route ...`);

}


function userRegister(req, res){


    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.address = req.body.address;

    newUser.save().then(savedUser =>{

        res.send(savedUser);

    }).catch(err =>{

        if (err.keyPattern.email) {
            
            res.send(`Please try another email, this one ${err.keyValue.email} is already exist`);

        }
        else if(err.keyPattern.phoneNumber){

            res.send(`Please try another phone number, this one : ${err.keyValue.phoneNumber} is already exist`);

        }    

    })


}


module.exports = {

    userList,
    userRegister

}