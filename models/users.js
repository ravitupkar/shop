const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 5
    },
    mobile : {
        type : Number,
        minlength : 10
    },
    profilePic : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minlength : 5
    },
    username : {
        type : String,
        required : true,
        unique : true,
        minlength : 5
    },
    password : {
        type : String,
        required : true,
        minlength : 5
    },
    user_roll : {
        type : String,
        required : true,
        minlength : 4
    },
},{
    timestamps :true
}
);

const User = mongoose.model('User', userSchema);
 module.exports = User;