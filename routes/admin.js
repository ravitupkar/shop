const express = require('express');
const adminController = require('../controllers/adminControllers');
const adminAuth = require('../middlewares/adminAuth');
const adminValidator = require('../validator/adminValidator');


var router = express.Router();

/* GET users home. */
router.get('/', function(req, res, next) {
  res.json({response : 'respond with a resource'});
});

/* Auth. */

/* register admin . */
router.post('/register', adminValidator.adminRegistervalidation, adminController.adminAuth.register);

/* login admin . */
router.post('/login', adminValidator.adminloginvalidation, adminController.adminAuth.login);

/* admin change-password . */
router.post('/change-password', adminAuth.auth, adminController.adminAuth.changePassword);

/* admin forgot-password . */
router.post('/forgot-password', adminController.adminAuth.forgotPassword);

/* admin reset-password . */
router.post('/reset-password/:id', adminController.adminAuth.ResetPassword);

/* profile admin . */
router.post('/profile', adminValidator.adminprofilevalidation, adminAuth.auth, adminController.adminProfile.profile);

/* admin update-profile. */
router.post('/update-profile', adminAuth.auth, adminController.adminProfile.updateProfile);

/* category. */

/* admin create-category. */
router.post('/create-category', adminValidator.admincategoryvalidation, adminAuth.auth, adminController.adminCategory.createCategory);

/* admin get-all-category. */
router.post('/get-all-category', adminAuth.auth, adminController.adminCategory.getAllCategory);

/* admin get-active-category. */
router.post('/get-active-category', adminAuth.auth, adminController.adminCategory.getActiveCategory);

/* admin get-category. */
router.post('/get-category/:slug', adminAuth.auth, adminController.adminCategory.getCategory);

/* admin update-category. */
router.post('/update-category', adminAuth.auth, adminController.adminCategory.updateCategory);

/* admin delete-category. */
router.post('/delete-category', adminAuth.auth, adminController.adminCategory.deleteCategory);


module.exports = router;
