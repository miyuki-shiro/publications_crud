const express = require('express');
const logger = require('morgan');
const cors = require('cors')

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;