const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Not Found!' });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running at port ${process.env.SERVER_PORT}`);
});
