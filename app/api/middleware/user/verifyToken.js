const { send } = require('express/lib/response');
const jwt = require('jsonwebtoken');

const SECRET = process.env.ACCESS_TOKEN_SECRET;


function verifyToken(req, res, next){

  const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(' ')[1];
  // console.log(authHeader)

  if(authHeader == undefined) return res.sendStatus(401);
  jwt.verify(authHeader, SECRET, (err, user)=>{
    if(err) return res.sendStatus(403);
    console.log(user);
    next();
  })

}
   


module.exports = {

    verifyToken

}