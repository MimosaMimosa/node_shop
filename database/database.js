const mongoose = require('mongoose');

module.exports = {
    connectDb: async (cb) => {
        try {
            let res = await mongoose.connect('mongodb://admin:12345@db:27017/');
            cb();
        } catch (error) {
            cb(error);
        }
    },
};
