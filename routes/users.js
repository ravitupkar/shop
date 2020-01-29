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

/* user change-password . */
router.post('/change-password', userAuth.auth, userController.userAuth.changePassword);

/* user forgot-password . */
router.post('/forgot-password', userController.userAuth.forgotPassword);

/* user reset-password . */
router.post('/reset-password/:id', userController.userAuth.ResetPassword);

/* profile user . */
router.post('/profile', userAuth.auth, userController.userProfile.profile);

/* user update-profile. */
router.post('/update-profile', userAuth.auth, userController.userProfile.updateProfile);


module.exports = router;
