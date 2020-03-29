const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors')
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const resources = require('./routes/resources');
const users = require('./routes/users');

const app = express();

app.use(cors())

app.use(express.json());

app.use(
    '/api/v1/resources', 
    resources
);

app.use(
    '/api/v1/users', 
    users
);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);