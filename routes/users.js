const express = require('express');
const userController = require('../controllers/usersControllers/');
const userAuth = require('../middlewares/auth');


var router = express.Router();

/* GET users home. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* register user . */
router.post('/register', userController.userAuth.register);

/* login user . */
router.post('/login', userController.userAuth.login);

/* profile user . */
router.post('/profile', userAuth.auth, userController.userAuth.profile);


module.exports = router;
