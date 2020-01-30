const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const subCategorySchema = new mongoose.Schema({
    subCategoryName : {
        type : String,
        minlength : 5
    },
    subCategorySlug : {
        type : Number,
        minlength : 10,
        unique : true,
    },
    category :{
        type: mongoose.Schema.ObjectId, 
        ref: 'Category',
    },
    products : [{
        type: mongoose.Schema.ObjectId, 
        ref: 'Subcategory',
    }],
    status : {
        type : Boolean
    },
},{
    timestamps :true
}
);

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
 module.exports = SubCategory;