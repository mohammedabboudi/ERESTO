const jwt = require('jsonwebtoken');


function verifyAccessToken(access_token, ACCESS_SECRET){

  return jwt.verify(access_token, ACCESS_SECRET);
  
}
   


module.exports = {

  verifyAccessToken

}