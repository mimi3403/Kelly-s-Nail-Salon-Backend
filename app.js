const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const contactUsRouter = require('./routes/contactUs')

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/contactus', contactUsRouter);


module.exports = app;
