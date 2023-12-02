const express = require('express');
const app = express();
const router = require('../routes/productRoutes');

app.use(express.json());

app.use('/api/v1', router);

module.exports = app;
