const jwt = require('jsonwebtoken');



function generateAccessToken(user, ACCESS_SECRET, expiresIn){

    return jwt.sign(user, ACCESS_SECRET, { expiresIn: expiresIn });

}


function generateRefreshToken(user, REFRESH_SECRET, expiresIn){

    return jwt.sign(user, REFRESH_SECRET, { expiresIn: expiresIn });

}


module.exports = {

    generateAccessToken,
    generateRefreshToken

}
