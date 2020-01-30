const auth = require('./auth');
const profile = require('./profile');
const category = require('./category');
const subcategory = require('./subcategory');
const product = require('./products');

module.exports.adminAuth = {
    register : auth.register,
    login : auth.login,
    changePassword : auth.changePassword,
    forgotPassword : auth.forgotPassword,
    ResetPassword : auth.ResetPassword
}

module.exports.adminProfile = {
    profile : profile.userProfile,
    updateProfile : profile.updateProfile
}

module.exports.adminCategory = {
    createCategory : category.createCategory,
    getAllCategory : category.getAllCategory,
    getActiveCategory : category.getActiveCategory,
    getCategory : category.getCategory,
    updateCategory : category.updateCategory,
    deleteCategory : category.deleteCategory,
}

module.exports.adminSubCategory = {
    createSubCategory : subcategory.createSubCategory,
    getAllSubCategory : subcategory.getAllSubCategory,
    getActiveSubCategory : subcategory.getActiveSubCategory,
    getSubCategory : subcategory.getSubCategory,
    updateSubCategory : subcategory.updateSubCategory,
    deleteSubCategory : subcategory.deleteSubCategory,
}


module.exports.adminProduct = {
    createProduct : product.createProduct,
    getAllProduct : product.getAllProduct,
    getActiveProduct : product.getActiveProduct,
    getProduct : product.getProduct,
    updateProduct : product.updateProduct,
    deleteProduct : product.deleteProduct,
}