var module = require('./module');

var args = {
    "path": process.argv[2],
    "ext":  process.argv[3]
};


module(args.path, args.ext, function(err, files) {
    if (err) {
        return console.log(err);
    }

    for (i=0; i<files.length; i++) {
        console.log(files[i]);
    }
});