const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const words = require('./app/routes/wordRoutes');

const app = express();
const config = require('./app/config/config');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride()); // parse application/vnd.api+json as json


// Connecting MongoDB using mongoose to our application
mongoose.connect(config.db);

// This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('Connected', () => {
  console.log(`Mongoose default connection open to ${config.db}`);
});

app.use('/api', words);

// Express application will listen to port mentioned in our configuration
app.listen(config.port, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${config.port}`);
});
