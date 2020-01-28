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
},{
    timestamps :true
}
);

userSchema.pre('save', async function(next){
    try{
        if (!this.isModified) {
            return next();
        } 
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    }catch(err){
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(attempt, next){
    try{
        return await bcrypt.compare(attempt, this.password);
    }catch(err){
        return next(err);
    }
}


const User = mongoose.model('User', userSchema);

module.exports = User;

