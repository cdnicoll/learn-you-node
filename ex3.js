var fs = require('fs')
var file = process.argv[2];

var buf = fs.readFileSync(file);
var str = buf.toString();

var split = str.split('\n');


console.log(split.length-1);