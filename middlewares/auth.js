const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.auth = (req, res, next) => {
  if(req.headers.authorization){
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, config.SECRET);
      const userId = decodedToken._id;
      // console.log(decodedToken);
      if(userId){
          User.findOne({_id : userId}).then((user) => {
              if(user.user_roll == 'user'){
                  next();
              }else{
                  res.status(500).json({status : false, message : "unauthorized request !"});
              }
          }).catch((error) => {
              res.status(500).json({status : false, message : "unauthorized request !"});
          })
      } else {
          res.status(500).json({status : false, message : "unauthorized request !"});
      }
    } catch {
      res.status(500).json({status : false, message : "Invalid request !"});
    }
  }else{
      res.status(500).json({status : false, message : "authorization token not provided"});
  }
  };