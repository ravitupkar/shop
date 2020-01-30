const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const config = require('../config');

const subCategorySchema = new mongoose.Schema({
    subCategoryName : {
        type : String,
        unique : true,
    },
    subCategorySlug : {
        type : String,
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
        type : Boolean,
        default : true
    },
},{
    timestamps :true
}
);

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
 module.exports = SubCategory;