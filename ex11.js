var http = require('http');
var fs = require('fs');
var args = {
    "port" : process.argv[2],
    "file" : process.argv[3]
}

var httpServer = http.createServer(function(req, res) {
    var file = fs.createReadStream(args.file);
    file.pipe(res);
});

httpServer.listen(args.port);