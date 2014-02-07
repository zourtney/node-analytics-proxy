var mongoose = require('mongoose');
var dbConfig = require('../config').database;

mongoose.connect(dbConfig.connectionString);
require('./models/response');
