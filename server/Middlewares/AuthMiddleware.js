const User = require("../Models/UserModels");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);
    if (token) {
      // const decodedToken = jwt.verify(token, "your coochie is my secret key",);
      //   console.log(decodedToken)
        
      

      jwt.verify(
        token,
        "your coochie is my secret key",
        async (err, decodedToken) => {
          if (err) {
            
            res.json({ status: false });
            next();
          } else {
            const user = await User.findById(decodedToken.userId);
            
            if (user){ 
              
              res.json({ status: true, user: user.email });
            }
            else {
              res.json({ status: false });
          }
            next();
          }
        }
      );
    } else {
      res.json({ status: false });
      next();
    }
  };
