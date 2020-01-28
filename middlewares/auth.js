const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, config.SECRET);
    const userId = decodedToken._id;
    // res.json({_id : req.body._id , _userid : req.body._id, userId :userId});
    if (req.body._id && req.body._id !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};