var fs = require('fs')
var file = process.argv[2];

function readFile(callback) {
    fs.readFile(file, function doneReading(err, fileContents) {
        if (err) {
            return console.log(err)
          }
        callback(fileContents.toString());
    });
}

function countLines(fileContent) {
    var newLines = fileContent.toString().split('\n').length-1
    console.log(newLines);
}

readFile(countLines);

/*
// This will also work
readFile(function(fileContent) {
    var newLines = fileContent.toString().split('\n').length-1
    console.log(newLines);
});
*/


