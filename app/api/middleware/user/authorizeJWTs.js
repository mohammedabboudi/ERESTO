const { generateAccessToken } = require("../../../utilities/generateJWTs");
const { verifyAccessToken } = require("../../../utilities/verifyAccessToken");
const { verifyRefreshToken } = require("../../../utilities/verifyRefreshToken");

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;


function authorization(req, res, next){

    // THIS METHOD USING FOR POSTMAN TESTING :
  
    // const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1];
    // console.log(authHeader)
  
    // if(authHeader == undefined) return res.sendStatus(401);
    // jwt.verify(authHeader, ACCESS_SECRET, (err, user)=>{
    //   if(err) return res.sendStatus(403);
    //   console.log(user);
    //   next();
    // })
  
  
    const access_token = req.cookies.access_token || '';
    const refresh_token = req.cookies.refresh_token || '';

    
      try {


        if (access_token) {
              
                const decrypted_access_token = verifyAccessToken(access_token, ACCESS_SECRET);

                req.user = {
                    id: decrypted_access_token.id,
                    role: decrypted_access_token.role,
                };

                next();
              
        }
       


      } catch (err) {
        
        if(refresh_token){

            const decrypted_refresh_token = verifyRefreshToken(refresh_token, REFRESH_SECRET);

            const id = decrypted_refresh_token.id;
            const role = decrypted_refresh_token.role;
        
            const user = { id, role }

            console.log(user)

            const accessTokenExpiresIn = '15s';

            const access_token = generateAccessToken(user,ACCESS_SECRET, accessTokenExpiresIn);


            res.cookie("access_token", access_token, {
                secure: false,
                httpOnly: true,
            });

            console.log(access_token)

            next();

        }


      }
  
  
  }


 module.exports = {

    authorization

 }