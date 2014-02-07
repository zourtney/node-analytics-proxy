var mongoose = require('mongoose');
var dbConfig = require('../config').database;

mongoose.connect(dbConfig.connectionString);

require('./models/request');
require('./models/response');