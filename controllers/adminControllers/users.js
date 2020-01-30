const {validationResult } = require('express-validator');

const User = require('../../models/users');
const SubCategory = require('../../models/subcategory');
const Category = require('../../models/category');
const User = require('../../models/users');

const config = require('../../config');
const mail = require('../../util/mail');

module.exports.getAllUser = (req, res, next) => {
    User.find()
        .then((category) => {
            res.status(200).json({status : true, message : "Category List Successfully", data : category});
        })
        .catch((error) => {
            res.json({status : false, message : "failed Category List", data : error.errmsg});
        });
}

module.exports.getActiveUser = (req, res, next) => {
    User.find({status:true})
    .then((User) => {
        res.status(200).json({status : true, message : "User List Successfully", data : User});
    })
    .catch((error) => {
        res.json({status : false, message : "failed User List", data : error.errmsg});
    });
}
