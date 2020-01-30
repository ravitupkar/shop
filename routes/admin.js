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

/* subcategory. */

/* admin create-subcategory. */
router.post('/create-subcategory', adminAuth.auth, adminController.adminSubCategory.createSubCategory);

/* admin get-all-subcategory. */
router.post('/get-all-subcategory', adminAuth.auth, adminController.adminSubCategory.getAllSubCategory);

/* admin get-active-subcategory. */
router.post('/get-active-subcategory', adminAuth.auth, adminController.adminSubCategory.getActiveSubCategory);

/* admin get-subcategory. */
router.post('/get-subcategory/:slug', adminAuth.auth, adminController.adminSubCategory.getSubCategory);

/* admin update-subcategory. */
router.post('/update-subcategory', adminAuth.auth, adminController.adminSubCategory.updateSubCategory);

/* admin delete-subcategory. */
router.post('/delete-subcategory', adminAuth.auth, adminController.adminSubCategory.deleteSubCategory);


/* Product. */

/* admin create-Product. */
router.post('/create-product', adminAuth.auth, adminController.adminProduct.createProduct);

/* admin get-all-product. */
router.post('/get-all-product', adminAuth.auth, adminController.adminProduct.getAllProduct);

/* admin get-active-product. */
router.post('/get-active-product', adminAuth.auth, adminController.adminProduct.getActiveProduct);

/* admin get-product. */
router.post('/get-product/:slug', adminAuth.auth, adminController.adminProduct.getProduct);

/* admin update-product. */
router.post('/update-product', adminAuth.auth, adminController.adminProduct.updateProduct);

/* admin delete-product. */
router.post('/delete-product', adminAuth.auth, adminController.adminProduct.deleteProduct);

module.exports = router;
