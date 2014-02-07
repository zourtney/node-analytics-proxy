var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
    url: String,
    statusCode: Number,
    recordedTime: Date,
    responseTime: Number
});

mongoose.model('Response', ResponseSchema);