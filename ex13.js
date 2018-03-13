var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var dateString = new Date(parsedUrl.query.iso);
    var result = undefined;

    if (parsedUrl.pathname === '/api/parsetime') {
        var date =  {
            "hour": dateString.getHours(),
            "minute": dateString.getMinutes(),
            "second": dateString.getSeconds()
        }
    
        result = JSON.stringify(date);
    }
    else if (parsedUrl.pathname === '/api/unixtime') {
        result = JSON.stringify({"unixtime":dateString.getTime()})
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(result)

    // /api/parsetime
    // /api/unixtime
});

server.listen(port);