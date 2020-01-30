const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const categorySchema = new mongoose.Schema({
    categoryName : {
        type : String,
        minlength : 5,
        unique : true,
    },
    categorySlug : {
        type : String,
        minlength : 5,
        unique : true,
    },
    status : {
        type : Boolean,
        default : true,
    },
    subcategory : [{
        type: mongoose.Schema.ObjectId, 
        ref: 'Subcategory',
    }],
    products : [{
        type: mongoose.Schema.ObjectId, 
        ref: 'Subcategory',
    }]
},{
    timestamps :true
}
);

const Category = mongoose.model('Category', categorySchema);
 module.exports = Category;