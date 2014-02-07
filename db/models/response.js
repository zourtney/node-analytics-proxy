var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
    url: String,
    method: String,
    statusCode: Number,
    recordedTime: Date,
    responseTime: Number
});

mongoose.model('Response', ResponseSchema);