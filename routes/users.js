const express = require('express');
const userController = require('../controllers/usersControllers/');


var router = express.Router();

/* GET users home. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* register user . */
router.post('/register', userController.userAuth.register);

/* login user . */
router.post('/login', userController.userAuth.login);


module.exports = router;
