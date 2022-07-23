const mongoose = require('mongoose');
const Category = require('./Category');
const { Schema } = mongoose;

const Collection = new Schema(
    {
        name: { type: String, required: true, unique: true, max: 50 },
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
    },
    { timestamps: true }
);

const SubCategory = mongoose.model('Subcategory', Collection);

module.exports = SubCategory;
