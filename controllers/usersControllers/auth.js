const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const config = require('../../config');

module.exports.register = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        username: req.body.username,
        password: req.body.password,
    });

    user.save()
    .then((user) => {
        res.status(200).json({status : true, message : "User created Successfully", data : user});
    })
    .catch((error) => {
        res.json({status : false, message : "failed User creation", data : error});
    });
}

module.exports.login = (req, res, next) => {

    email = req.body.email;
    password = req.body.password

    User.findOne({email : email})
    .then((user) => {
        const valid = user.comparePassword(req.body.password);
        // res.json(user);
        if (valid) {
            let {_id, email, username, password } = user;
            var token = jwt.sign({ _id, email, username, password}, config.SECRET);
            res.status(200).json({status : true, message : "User login Successfully", data : {_id, email, token}});
        } else {
            throw new Error('Invalid Username/Password');
        }
        
      
    })
    .catch((error) => {
        res.json({status : false, message : "User Not Exist", data : error});
    });
    
}