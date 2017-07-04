"use strict";
var fs = require("fs-extra");
var path_1 = require("path");
var readline = require("readline");
var output = fs.createWriteStream(path_1.resolve(__dirname, 'database', 'filtered-duplicates'));
readline.createInterface({
    input: fs.createReadStream(path_1.resolve(__dirname, 'database', 'duplicates'))
})
    .on('line', function (line) {
    var match = line.match(/\-+?\s+(.+?)\s*?\(.*?\).*/);
    if (match) {
        output.write(match[1] + '\n');
    }
});
