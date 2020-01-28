const auth = require('./auth');

module.exports.userAuth = {
    register : auth.register,
    login : auth.login,
    profile : auth.userProfile
}