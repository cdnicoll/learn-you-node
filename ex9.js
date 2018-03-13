var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function httpGet(url, callback) {
    http.get(url, function(res) {
        res.pipe(bl(function (err, data) {
            callback(err, data)
        }));
    
    }).on('error', function(err) {
        callback(err, null) 
    });
}


httpGet(url1, function(err, data1) {
    httpGet(url2, function(err, data2) {
        httpGet(url3, function(err, data3) {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        }); 
    });
});