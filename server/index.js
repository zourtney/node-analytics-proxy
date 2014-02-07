//
// Set up proxy server
//
var ProxyServer = require('./proxy');
var proxy = new ProxyServer().listen();


//
// Log to console
//
require('./console');

proxy.on('request', function(req) {
    console.logRequest(req);
});

proxy.on('response', function(res, duration) {
    console.logResponse(res, duration);
    console.logResponseContent(res);
});


//
// Save to DB
//
var mongoose = require('mongoose');
require('../db');
var Response = mongoose.model('Response');

proxy.on('response', function(res, duration) {
    var model = new Response({
        url: res.req.path,
        statusCode: res.statusCode,
        recordedTime: Date.now(),
        responseTime: duration
    });
    model.save();
});