

function logout (req, res, next){

    res.cookie("access_token", '', {
        secure: false,
        httpOnly: true,
    })

    res.cookie("refresh_token", '', {
        secure: false,
        httpOnly: true,
    })

    next();
    
}


module.exports = {

    logout
    
}