const Joi = require('joi');
const { formatedError } = require('./helper');

const category = {
    storeRequest: async (...arg) => {
        const schema = Joi.object({
            name: Joi.string().min(5).max(50).required(),
            hey: Joi.string(),
        });

        formatedError(...arg, schema);
    },
};

module.exports = category;
