const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

exports.index = async (req, res, next) => {
    const data = await SubCategory.find().populate('category');
    return res.status(200).json(data);
};

exports.create = async (req, res, next) => {
    const { category, ...body } = req.body;
    try {
        await Category.findByIdAndUpdate(category, {
            $push: { subcategories: [category] },
        });
    } catch (error) {
        error.status = 404;
        error.message = `Not found category id:${category}`;
        next(error);
    }

    try {
        const subcategory = new SubCategory(body);
        const data = await subcategory.save();

        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const data = await SubCategory.findById(req.params.id);
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
        await SubCategory.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'Subcategory is deleted successfully',
            success: true,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
