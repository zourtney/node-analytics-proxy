var mongoose = require('mongoose');
require('../../db');
var Request = mongoose.model('Request');
var Response = mongoose.model('Response');

module.exports = function(app) {
    //
    // Requests
    //
    app.get('/api/requests', function(req, res) {
        Request.find(function(err, obj) {
            return res.json(obj);
        });
    });

    app.delete('/api/requests', function(req, res) {
        Request.remove(function(err) {
            return res.json([]);
        });
    });


    //
    // Responses
    //
    app.get('/api/responses', function(req, res) {
        Response.find(function(err, obj) {
            return res.json(obj);
        });
    });

    app.delete('/api/responses', function(req, res) {
        Response.remove(function(err) {
            return res.json([]);
        });
    });
};