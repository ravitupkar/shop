const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.auth = (req, res, next) => {
if(req.headers.authorization){

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, config.SECRET);
    const userId = decodedToken._id;
    // res.json({_id : req.body._id , _userid : req.body._id, userId :userId});
    if (req.body._id && req.body._id !== userId) {
      throw 'Invalid user ID';
    } else {
      req.user = decodedToken;
      // console.log(req.user);
      next();
    }
  } catch {

    res.status(401).json({status : false, message : "Invalid request!"});
  }
  
}else{
    res.status(401).json({status : false, message : "authorization token not provided"});
}
};