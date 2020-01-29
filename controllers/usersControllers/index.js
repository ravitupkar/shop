const auth = require('./auth');
const profile = require('./profile');

module.exports.userAuth = {
    register : auth.register,
    login : auth.login,
    changePassword : auth.changePassword,
    forgotPassword : auth.forgotPassword,
    ResetPassword : auth.ResetPassword
}

module.exports.userProfile = {
    profile : profile.userProfile,
    updateProfile : profile.updateProfile
}