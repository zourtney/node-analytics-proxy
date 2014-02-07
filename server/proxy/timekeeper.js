var Timekeeper = function() {
    this.requests = {};
};

Timekeeper.prototype.add = function(req) {
    this.requests[req] = new Date();
};

Timekeeper.prototype.remove = function(req) {
    delete this.requests[req];
}

Timekeeper.prototype.getDifference = function(req) {
    var t = this.requests[req];
    if (t) {
        return new Date() - t;
    }
};

module.exports = Timekeeper;