var config = require('../config').adminServer;

var express = require('express');
var app = express();

require('./routes/api')(app);
require('./routes/webapp')(app);

app.listen(config.src.port);