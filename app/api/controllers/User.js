const database = require('../../config/database/Mongoose_connection');
const User = require('../models/User');


function userList(req, res){

    res.send(`hello from the normal user route ...`);

}


module.exports = {

    userList

}