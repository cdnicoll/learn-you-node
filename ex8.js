var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
    res.pipe(bl(function (err, data) {
        console.log(data.length);
        console.log(data.toString());
    }));

}).on('error', function(err) {
  console.log(err);  
});