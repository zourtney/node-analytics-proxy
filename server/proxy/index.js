var events = require('events');
var httpProxy = require('http-proxy');
var Timekeeper = require('./timekeeper');
var proxyConfig = require('../../config').proxyServer;

var ResponseTimeProxy = function() {
    events.EventEmitter.apply(this, arguments);
    this.destUrl = proxyConfig.dest.address + ':' + proxyConfig.dest.port;
    this.proxy = httpProxy.createProxyServer({});
    this.responseTimes = new Timekeeper();
    return this.initialize();
};

ResponseTimeProxy.prototype.__proto__ = events.EventEmitter.prototype;

ResponseTimeProxy.prototype.initialize = function() {
    var self = this;
    
    self.server = require('http').createServer(function(req, res) {
        req.headers.accept = 'application/json, text/javascript, */*; q=0.01';  // force JSON
        self.responseTimes.add(req);
        self.emit('request', req, res);
        self.proxy.web(req, res, { target: self.destUrl });
    });

    self.proxy.on('proxyRes', function (res) {
        var t = self.responseTimes.getDifference(res.req);
        self.responseTimes.remove(res.req);
        self.emit('response', res, t);
    });
    return this;
};

ResponseTimeProxy.prototype.listen = function() {
    this.server.listen(proxyConfig.src.port);
    return this;
};

module.exports = ResponseTimeProxy;