
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();

// mount our middleware
app.use(express.json());
app.use(logger('dev'));
app.use(cors());



// mount our routes
app.use('/api/users', require('./routes/api/users'));



// tell express to listen
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});
