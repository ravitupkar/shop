const auth = require('./auth');
const profile = require('./profile');

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