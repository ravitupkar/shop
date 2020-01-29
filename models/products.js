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
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required : true,
    },
    categoryID : {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required : true,
    },
    subCategoryID : {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required : true,
    },
    productName : {
        type : String,
        minlength : 5,
        required : true,
    },
    productName : {
        type : String,
        minlength : 5,
        required : true,
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
    user_roll : {
        type : String,
        required : true,
        minlength : 4
    }
},{
    timestamps :true
}
);

const Products = mongoose.model('Products', productSchema);
 module.exports = Products;