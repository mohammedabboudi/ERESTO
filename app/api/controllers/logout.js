

function logout (req, res){

    res.cookie("access_token", '', {
        secure: false,
        httpOnly: true,
    })

    res.cookie("refresh_token", '', {
        secure: false,
        httpOnly: true,
    })

    res.send(`OK`)
    
}


module.exports = {

    logout
    
}