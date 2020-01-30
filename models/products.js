const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const productSchema = new mongoose.Schema({
    sku : {
        type : String,
        minlength : 5,
        required : true,
        unique : true
    },
    supplierId : {
        type: mongoose.Schema.ObjectId, 
        ref: 'User',
        required : true,
    },
    categoryId : {
        type: mongoose.Schema.ObjectId, 
        ref: 'Category',
        required : true,
    },
    subCategoryId : {
        type: mongoose.Schema.ObjectId, 
        ref: 'SubCategory',
        required : true,
    },
    productName : {
        type : String,
        required : true,
    },
    productSlug : {
        type : String,
        required : true,
        unique : true
    },
    productDescription : {
        type : String
    },
    productPic : {
        type : String
    },
    productVariation : {
        type : String
    },
    productAvailable : {
        type : String
    },
    unitPrice : {
        type : Number
    },
    unitsInStock : {
        type : Number
    },
    discountAvailable : {
        type : String
    },
    discount : {
        type : String
    },
    status : {
        type : Boolean,
        default: true
    },
},{
    timestamps :true
}
);

const Products = mongoose.model('Products', productSchema);
module.exports = Products;