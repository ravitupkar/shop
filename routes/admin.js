const express = require('express');
const adminController = require('../controllers/adminControllers');
const adminAuth = require('../middlewares/auth');


var router = express.Router();

/* GET users home. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* register user . */
router.post('/register', adminController.adminAuth.register);

/* login user . */
router.post('/login', adminController.adminAuth.login);

/* user change-password . */
router.post('/change-password', adminAuth.auth, adminController.adminAuth.changePassword);

/* user forgot-password . */
router.post('/forgot-password', adminController.adminAuth.forgotPassword);

/* user reset-password . */
router.post('/reset-password/:id', adminController.adminAuth.ResetPassword);

/* profile user . */
router.post('/profile', adminAuth.auth, adminController.adminProfile.profile);

/* user update-profile. */
router.post('/update-profile', adminAuth.auth, adminController.adminProfile.updateProfile);


module.exports = router;
