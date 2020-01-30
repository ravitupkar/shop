const {validationResult } = require('express-validator');

const User = require('../../models/users');
const Category = require('../../models/category');
const config = require('../../config');
const mail = require('../../util/mail');

module.exports.createCategory = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({status : false, message : "failed Category creation", errors: errors.array() });
    }
        let category = new Category({
            categoryName: req.body.categoryName,
            categorySlug: req.body.categorySlug
        });
        // console.log(category);
        category.save()
        .then((user) => {
            res.status(200).json({status : true, message : "Category created Successfully"});
        })
        .catch((error) => {
            res.json({status : false, message : "failed Category creation", data : error.errmsg});
        });
}

module.exports.getAllCategory = (req, res, next) => {
        Category.find()
        .then((category) => {
            res.status(200).json({status : true, message : "Category List Successfully", data : category});
        })
        .catch((error) => {
            res.json({status : false, message : "failed Category List", data : error.errmsg});
        });
}

module.exports.getActiveCategory = (req, res, next) => {
    Category.find({status:true})
    .then((category) => {
        res.status(200).json({status : true, message : "Category List Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category List", data : error.errmsg});
    });
}

module.exports.getCategory = (req, res, next) => {
    let slug = req.params.slug;
    Category.find({categorySlug: slug})
    .then((category) => {
        res.status(200).json({status : true, message : "Category fetch Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category fetch", data : error.errmsg});
    });
}


module.exports.updateCategory = (req, res, next) => {
    let _id = req.body._id;
    let categoryName = req.body.categoryName;
    let categorySlug = req.body.categorySlug;

    Category.findOneAndUpdate({_id: _id}, { $set : {categoryName: categoryName, categorySlug : categorySlug}})
    .then((category) => {
        res.status(200).json({status : true, message : "Category update Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category update", data : error.errmsg});
    });
}


module.exports.deleteCategory = (req, res, next) => {
    let _id = req.body._id;

    Category.findOneAndRemove({_id: _id})
    .then((category) => {
        res.status(200).json({status : true, message : "Category delete Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category delete", data : error.errmsg});
    });
}

