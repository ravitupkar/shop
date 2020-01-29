const User = require('../../models/users');

module.exports.userProfile = (req, res, next) => {

    let _id = req.body._id;
    User.findOne({_id : _id})
    .then((user) => {
        if(user){
        let {_id, name, email, mobile, username} = user;
        res.status(200).json({status : true, message : "User Profile Successfully", data: {_id, name, email, mobile, username}});
    }else{
        res.json({status : false, message : "User Not Exist"});
    }
    })
    .catch((error) => {
        res.json({status : false, message : "failed User Profile", data : error});
    });
    
}

module.exports.updateProfile = (req, res, next) => {
    let _id = req.body._id;
    let updateData  = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        username: req.body.username,
    }
    User.findOneAndUpdate({_id : _id}, { $set: updateData })
    .then((user) => {
        if(user){
        let {_id, name, email, mobile, username} = user;
        res.status(200).json({status : true, message : "User Profile updated Successfully", data: {_id, name, email, mobile, username}});
    }else{
        res.json({status : false, message : "User Not Exist"});
    }
    })
    .catch((error) => {
        res.json({status : false, message : "failed User Profile", data : error});
    });
    
}