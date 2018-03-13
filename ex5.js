/**
 * Create a program that prints a list of files in a given directory
 *  - Filter by the extension of the files
 *  - provided a directory name as the first argument to your 
 *    program (e.g. '/path/to/dir/')
 * - file extension to filter by as the second argument
 */

var fs = require('fs');
var path = require('path');
var args = undefined;

function getArguments() {
    if (process.argv.length < 4 || process.argv.length > 6) {
        // process error
        return console.log("Error too many or too little arguments");
    }

    return {
        "path": process.argv[2],
        "ext": '.' + process.argv[3]
    };
}

args = getArguments();

fs.readdir(args.path, function(err, list) {
    if (err) {
        return console.log(err);
    }

    for (i=0; i<list.length; i++) {
        if (path.extname(list[i]) == args.ext) {
            console.log(list[i]);
        }
    }
});

