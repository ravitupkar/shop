const auth = require('./auth');
const profile = require('./profile');
const category = require('./category');

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