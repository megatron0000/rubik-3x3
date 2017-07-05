"use strict";
var fs = require("fs-extra");
var path_1 = require("path");
var readline = require("readline");
function collectDuplicates(pathService) {
    var projectRoot = pathService.getRoot().toString();
    var output = fs.createWriteStream(path_1.resolve(projectRoot, 'database', 'filtered-duplicates'));
    readline
        .createInterface({
        input: fs.createReadStream(path_1.resolve(projectRoot, 'database', 'duplicates'))
    })
        .on('line', function (line) {
        var match = line.match(/\-+?\s+(.+?)\s*?\(.*?\).*/);
        if (match) {
            output.write(match[1] + '\n');
        }
    });
}
exports.collectDuplicates = collectDuplicates;
