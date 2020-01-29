const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../../models/users');

const config = require('../../config');
const mail = require('../../util/mail');

  

module.exports.register = (req, res, next) => {
    bcrypt.genSalt(config.SALTROUNDS, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                username: req.body.username,
                user_roll: 'admin',
                password: hash
            });
            console.log(user);
            user.save()
            .then((user) => {
                res.status(200).json({status : true, message : "User created Successfully"});
            })
            .catch((error) => {
                res.json({status : false, message : "failed User creation", data : error.errmsg});
            });
        });
    });

   
}

module.exports.login = (req, res, next) => {

    email = req.body.email;
    password = req.body.password

    User.findOne({email : email})
    .then((user) => {
        if(user){
        bcrypt.compare(req.body.password, user.password, function (err, valid) {
            if (valid) {
                    let {_id, email, username, password, user_roll } = user;
                    var token = jwt.sign({ _id, email, username, password, user_roll}, config.SECRET);
                    res.status(200).json({status : true, message : "User login Successfully", data : {_id, email, token}});
                } else {
                    res.json({status : false, message : "Invalid Username/Password"});
                }
          });
        }else{
            res.json({status : false, message : "User Not Exist"});
        }
    })
    .catch((error) => {
        res.json({status : false, message : "User Not Exist", data : error});
    });
    
}

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

module.exports.changePassword = (req, res, next) => {

    let _id = req.body._id;
    let old_password = req.body.old_password;
    let password = req.body.password;
    User.findOne({_id : _id})
    .then((user) => {
        if(user){
        bcrypt.compare(req.body.old_password, user.password, function (err, valid) {
            if (valid) {
                bcrypt.genSalt(config.SALTROUNDS, function(err, salt) {
                    bcrypt.hash(req.body.password, salt, function(err, hash) {
                        User.findOneAndUpdate({_id : _id}, { $set: { password: hash }})
                        .then((user) => {
                            res.status(200).json({status : true, message : "User Password Changed Successfully"});
                        })
                        .catch((error) => {
                            res.json({status : false, message : "failed User Password Changed", data : error.errmsg});
                        });
                    });
                });
                    
                } else {
                    res.json({status : false, message : "Invalid Orignal Password"});
                }
          });
        }else{
            res.json({status : false, message : "User Not Exist"});
        }
    })
    .catch((error) => {
        res.json({status : false, message : "User Not Exist", data : error});
    });
    
}

module.exports.forgotPassword = (req, res, next) => {

    let email = req.body.email;

    User.findOne({email : email})
    .then((user) => {
        if(user){
            var mailOptions = {
                from: config.ADMINEMAIL, 
                to: user.email,
                subject: `Resetting your password for ${config.APPLICATIONNAME}`,
                text: `
                We have sent you this email in response to your request to reset your password on ${config.APPLICATIONNAME}. 
                After you reset your password, any credit card information stored in My Account will be deleted as a security measure.

                To reset your password for ${config.APPLICATIONNAME}, please follow the link below:
                
                ${config.APPLICATIONURL}/api/users/reset-password/${user._id}
                
                We recommend that you keep your password secure and not share it with anyone. 
                If you feel your password has been compromised, you can change it by going to your My Account Page and clicking on the 
                "Change Email Address or Password" link.
                
                If you need help, or you have any other questions, feel free to email ${config.APPLICATIONNAME}, or call ${config.APPLICATIONNAME} customer service toll-free at ${config.APPLICATIONNAME}.
                
                ${config.APPLICATIONNAME} 
                Customer Service`
              };
              mail.transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    res.status(200).json({status : true, message : "Failed Password Reset Link send on your email"});
                } else {
                    res.status(200).json({status : true, message : "Password Reset Link send on your email Successfully"});
                }
              });
            
        }else{
            res.json({status : false, message : "User Not Exist"});
        }
        
    })
    .catch((error) => {
        
    });
    
}

module.exports.ResetPassword = (req, res, next) => {

    let _id = req.params.id;
    let password = req.body.password;
    User.findOne({_id : _id})
    .then((user) => {
        if(user){
                bcrypt.genSalt(config.SALTROUNDS, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        User.findOneAndUpdate({_id : _id}, { $set: { password: hash }})
                        .then((user) => {
                            res.status(200).json({status : true, message : "User Password Reset Successfully"});
                        })
                        .catch((error) => {
                            res.json({status : false, message : "failed User Password Reset", data : error.errmsg});
                        });
                    });
                });
                    
              
        }else{
            res.json({status : false, message : "User Not Exist"});
        }
    })
    .catch((error) => {
        res.json({status : false, message : "User Not Exist", data : error});
    });
    
}