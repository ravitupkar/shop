const {validationResult } = require('express-validator');

const User = require('../../models/users');
const SubCategory = require('../../models/subcategory');
const Category = require('../../models/category');

const config = require('../../config');
const mail = require('../../util/mail');

module.exports.createSubCategory = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({status : false, message : "failed Category creation", errors: errors.array() });
    }

    Category.findOne({_id : req.body.category})
    .then((category) => {
        let subcategory = new SubCategory({
            subCategoryName: req.body.subCategoryName,
            subCategorySlug: req.body.subCategorySlug,
            category: req.body.category
        });
        // console.log(category);
        subcategory.save()
        .then((subcategory) => {
            if(!subcategory){
                res.json({status : false, message : "select Category"});
            }
            category.subcategory.push(subcategory._id);
            category.save();
            res.status(200).json({status : true, message : "SubCategory created Successfully"});
        })
        .catch((error) => {
            res.json({status : false, message : "failed SubCategory creation", data : error.errmsg});
        });

    })
    .catch((error) => {
        res.json({status : false, message : "select Category"});
    });

        
}

module.exports.getAllSubCategory = (req, res, next) => {
    SubCategory.find()
        .then((category) => {
            res.status(200).json({status : true, message : "Category List Successfully", data : category});
        })
        .catch((error) => {
            res.json({status : false, message : "failed Category List", data : error.errmsg});
        });
}

module.exports.getActiveSubCategory = (req, res, next) => {
    SubCategory.find({status:true})
    .then((category) => {
        res.status(200).json({status : true, message : "Category List Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category List", data : error.errmsg});
    });
}

module.exports.getSubCategory = (req, res, next) => {
    let slug = req.params.slug;
    SubCategory.find({subCategorySlug: slug})
    .then((subcategory) => {
        
        res.status(200).json({status : true, message : "Category fetch Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category fetch", data : error.errmsg});
    });
}


module.exports.updateSubCategory = (req, res, next) => {
    let _id = req.body._id;
    let subCategoryName = req.body.subCategoryName;
    let subCategorySlug = req.body.subCategorySlug;

    SubCategory.findOneAndUpdate({_id: _id}, { $set : {subCategoryName: subCategoryName, subCategorySlug : subCategorySlug}})
    .then((category) => {
        res.status(200).json({status : true, message : "Category update Successfully", data : category});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Category update", data : error.errmsg});
    });
}


module.exports.deleteSubCategory = (req, res, next) => {
    let _id = req.body._id;

    SubCategory.findOneAndRemove({_id: _id})
    .then((subcategory) => {
        
        res.status(200).json({status : true, message : "subcategory delete Successfully", data : subcategory});
    })
    .catch((error) => {
        res.json({status : false, message : "failed subcategory delete", data : error.errmsg});
    });
}

