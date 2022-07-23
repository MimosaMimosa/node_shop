const Category = require('../models/Category');

exports.index = async (req, res, next) => {
    const data = await Category.find().populate('subcategories');
    return res.status(200).json(data);
};

exports.create = async (req, res, next) => {
    const category = new Category(req.body);
    let data = await category.save();
    return res.status(200).json(data);
};

exports.show = async (req, res, next) => {
    try {
        const data = await Category.findById(req.params.id);
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'Category is deleted successfully',
            success: true,
        });
    } catch (error) {
        next(error);
    }
};
