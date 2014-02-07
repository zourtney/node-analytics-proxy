var mongoose = require('mongoose');

var RequestSchema = new mongoose.Schema({
    url: String,
    method: String,
    recordedTime: Date
});

mongoose.model('Request', RequestSchema);