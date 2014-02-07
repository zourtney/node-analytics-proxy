var colors = require('colors');

console.logRequest = function(req) {
    console.log('Request: [' + req.method.toString().cyan + '] ' + req.url);
};

console.logResponse = function(res, timestampDiff) {
    var status;
    if (res.statusCode === 200) {
        status = '200 OK '.green;
    }
    else if (res.statusCode > 400) {
        status = (res.statusCode + ' ERR ').red;
    }

    console.log('Response ' + status + ': [' + res.req.method.toString().cyan + '] ' + res.req.path + ' :: ' + timestampDiff + 'ms');
};

console.logResponseContent = function(res) {
    var str = '';
    res.on('data', function(chunk) {
        str += chunk;
    });
    res.on('end', function() {
        try
        {
            var obj = JSON.parse(str);
            if (obj instanceof Array) {
                console.log('    Array with ' + obj.length + ' items');
            }
        }
        catch(err) {
            console.log('    Unable to process response');
        }
    });
};