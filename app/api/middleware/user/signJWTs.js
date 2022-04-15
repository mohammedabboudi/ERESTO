const { generateAccessToken, generateRefreshToken } = require('../../../utilities/generateJWTs');


const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;


function signTokens(req, res){ 

    const id = req.user.id;
    const role = req.user.role;

    const user = { id, role }

    const accessTokenExpiresIn = '15s';
    const refreshTokenExpiresIn = '10000s';

    const access_token = generateAccessToken(user,ACCESS_SECRET, accessTokenExpiresIn);
    const refresh_token = generateRefreshToken(user, REFRESH_SECRET, refreshTokenExpiresIn);

    res.cookie("access_token", access_token, {
        secure: false,
        httpOnly: true,
    })

    res.cookie("refresh_token", refresh_token, {
        secure: false,
        httpOnly: true,
    }).status(200).json({access_token: access_token , refresh_token: refresh_token, message: "Logged in successfully 😊 👌" });

}




module.exports = {

    signTokens

}