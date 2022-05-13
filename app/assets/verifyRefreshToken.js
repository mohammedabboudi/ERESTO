const jwt = require('jsonwebtoken');


function verifyRefreshToken(refresh_token, REFRESH_SECRET){

    return jwt.verify(refresh_token, REFRESH_SECRET);
    
}
     
  
  
  module.exports = {
  
    verifyRefreshToken
  
  }