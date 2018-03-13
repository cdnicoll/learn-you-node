var net = require('net');
var strftime = require('strftime');
var port = process.argv[2] || 8000;
var date = undefined;

var server = net.createServer(function(socket) {
    // Had trouble here, used console.log, where I had to use
    // socket.write
    // TODO: Read up on 'sockets'
    socket.write(strftime('%Y-%m-%d %H:%M'))    // "2017-10-23 15:16"
    socket.end("\n");
}).on('error', function(err) {
    // handle exception here.
    throw err;
});

server.listen(port);

/**
 * I was getting an error "Error connecting to localhost:38597: connect ECONNREFUSED"
 * This was due to having:
 * 
 * ...
 * server.listen(port);
 * server.close(port);
 * ...
 * 
 * The connection was closing before the server was trying to output the date 
 */