const mongoose = require('mongoose');
const Schmea = mongoose.Schema;

const Collection = new Schmea(
    {
        name: { type: String, required: true, unique: true, max: 50 },
    },
    { timeStamps: true }
);

const Category = mongoose.model('category', Collection);

module.exports = Category;
