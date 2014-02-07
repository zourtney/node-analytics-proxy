var config = require('../config').adminServer;

var express = require('express');
var app = express();

require('./api')(app);

app.listen(config.src.port);