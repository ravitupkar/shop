const {validationResult } = require('express-validator');

const User = require('../../models/users');
const SubCategory = require('../../models/subcategory');
const Category = require('../../models/category');
const Product = require('../../models/products');

const config = require('../../config');
const mail = require('../../util/mail');

module.exports.createProduct = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({status : false, message : "failed Category creation", errors: errors.array() });
    }
        let product = new Product({
            sku : req.body.sku,
            supplierId : req.body.supplierId,
            categoryId  : req.body.categoryId,
            subCategoryId : req.body.subCategoryId,
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            productPic : req.body.productPic,
            productVariation  : req.body.productVariation,
            productAvailable  : req.body.productAvailable,
            unitPrice  : req.body.unitPrice,
            unitsInStock  : req.body.unitsInStock,
            discountAvailable : req.body.discountAvailable,
            discount  : req.body.discount
        });
        // console.log(category);
        product.save()
        .then((product) => {
            res.status(200).json({status : true, message : "product created Successfully", data : product});
        })
        .catch((error) => {
            res.json({status : false, message : "failed product creation", data : error});
        });

  
    

        
}

module.exports.getAllProduct = (req, res, next) => {
    Product.find()
        .then((category) => {
            res.status(200).json({status : true, message : "Category List Successfully", data : category});
        })
        .catch((error) => {
            res.json({status : false, message : "failed Category List", data : error.errmsg});
        });
}

module.exports.getActiveProduct = (req, res, next) => {
    Product.find({status:true})
    .then((product) => {
        res.status(200).json({status : true, message : "product List Successfully", data : product});
    })
    .catch((error) => {
        res.json({status : false, message : "failed product List", data : error.errmsg});
    });
}

module.exports.getProduct = (req, res, next) => {
    let slug = req.params.slug;
    Product.find({productSlug: slug})
    .then((product) => {
        res.status(200).json({status : true, message : "product fetch Successfully", data : product});
    })
    .catch((error) => {
        res.json({status : false, message : "failed product fetch", data : error.errmsg});
    });
}


module.exports.updateProduct = (req, res, next) => {
    let _id = req.body._id;
    let product = {
        subCategoryName : req.body.subCategoryName,
        subCategorySlug : req.body.subCategorySlug,
    }
    

    Product.findOneAndUpdate({_id: _id}, { $set : product})
    .then((product) => {
        res.status(200).json({status : true, message : "Product update Successfully", data : product});
    })
    .catch((error) => {
        res.json({status : false, message : "failed Product update", data : error.errmsg});
    });
}


module.exports.deleteProduct = (req, res, next) => {
    let _id = req.body._id;

    Product.findOneAndRemove({_id: _id})
    .then((product) => {

        res.status(200).json({status : true, message : "product delete Successfully", data : product});
    })
    .catch((error) => {
        res.json({status : false, message : "failed product delete", data : error.errmsg});
    });
}

