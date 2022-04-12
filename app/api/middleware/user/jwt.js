const jwt = require('jsonwebtoken');

const SECRET = process.env.ACCESS_TOKEN_SECRET;


function jwtgenerator(req, res){ 

    const id = req.userExist.id;
    const role = req.userExist.role;

    const user = { id, role }

    const accessToken = jwt.sign(user,SECRET);

    res.json({accessToken: accessToken});

}


module.exports = {

    jwtgenerator

}