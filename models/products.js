const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const productSchema = new mongoose.Schema({
    sku : {
        type : String,
        minlength : 5,
        required : true,
    },
    supplierID : {
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
        minlength : 5,
        required : true,
    },
    productDescription : {
        type : String,
        minlength : 5,
        required : true,
    },
    productPic : {
        type : String
    },
    productVariation : {
        type : String
    },
    productAvailable : {
        type : String,
        minlength : 5,
        required : true,
    },
    unitPrice : {
        type : Number,
        minlength : 5,
        required : true,
    },
    unitsInStock : {
        type : Number,
        minlength : 5,
        required : true,
    },
    discountAvailable : {
        type : String,
        minlength : 5,
        required : true,
    },
    discount : {
        type : String,
        minlength : 5,
        required : true,
    },
    status : {
        type : Boolean
    },
},{
    timestamps :true
}
);

const Products = mongoose.model('Products', productSchema);
module.exports = Products;