
// https://github.com/maxogden/art-of-node/#how-to-write-a-module
// https://www.w3schools.com/nodejs/nodejs_modules.asp

/**
 * 1. Export a single function that takes exactly the arguments described.
 * 2. Call the callback exactly once with an error or some data as described.
 * 3. Don't change anything else, like global variables or stdout.
 * 4. Handle all the errors that may occur and pass them to the callback.
 */

var fs = require('fs');
var path = require('path');


module.exports = function(dirName, ext, callback) {
    var files = [];
    fs.readdir(dirName, function(err, list) {
        if (err) {
            return callback(err);
        }

        for (i=0; i<list.length; i++) {
            if (path.extname(list[i]) == "." + ext) {
                files.push(list[i]);
            }
        }

        return callback(null, files);
    })
}


 /*
 // This also works, and I think it's a little more clean
 // To call it:
 // module.readDirByExt(args.path, args.ext, function(err, files) { ... });
module.exports = {
    readDirByExt: function(dirName, ext, callback) {
        var files = [];
        fs.readdir(dirName, function(err, list) {
            if (err) {
                callback(err);
            }

            for (i=0; i<list.length; i++) {
                if (path.extname(list[i]) == ext) {
                    files.push(list[i]);
                }
            }

            callback(null, files);
        })
    }

};
*/