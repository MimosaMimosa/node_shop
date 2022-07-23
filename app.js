const express = require('express');
require('dotenv').config();
const fileuplodad = require('express-fileupload');
const { connectDb } = require('./database/database');
const categories = require('./router/category');
const subcategories = require('./router/sucategory');

const app = express();

connectDb((error) => {
    if (!error) {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running at port ${process.env.SERVER_PORT}`);
        });
    }
});

app.use(fileuplodad());

app.use(express.json());

app.use('/api/categories', categories);
app.use('/api/subcategories', subcategories);

app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Not Found!' });
});

app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message || 'Server Error!';
    let success = false;
    return res.status(status).json({ message, success, stack: error.stack });
});
