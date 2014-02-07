var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config/config.json'));
module.exports = config;