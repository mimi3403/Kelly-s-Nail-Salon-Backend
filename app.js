const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const apptRouter = require('./routes/appointments')

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/contactus', apptRouter);


module.exports = app;
