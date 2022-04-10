const database = require('../../config/database/Mongoose_connection');
const User = require('../models/User');


function userList(req, res){

    res.send(`hello from the normal user route ...`);

}


function userRegister(req, res){

    const userCredenials = {

        email : req.body.email,
        password : req.body.password,
        role: req.body.role,
        phoneNumber : req.body.phoneNumber,
        address : req.body.address
    }

    res.send(userCredenials);

}


module.exports = {

    userList,
    userRegister

}