const mongoose = require('mongoose');
const { Schema } = mongoose;

const Collection = new Schema(
    {
        name: { type: String, required: true, unique: true, max: 50 },
        subcategories: [{ type: Schema.Types.ObjectId, ref: 'Subcategory' }],
    },
    { timestamps: true }
);

const Category = mongoose.model('Category', Collection);

module.exports = Category;
