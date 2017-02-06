"use strict";
var inversify_config_1 = require("./inversify.config");
var bfs_1 = require("./classes/algorithms/implementation/bfs");
var iddfs_1 = require("./classes/algorithms/implementation/iddfs");
var move_service_1 = require("./classes/moves/move-service");
var color_1 = require("./enums/color");
var fs = require("fs-extra");
var path_1 = require("path");
var moves = inversify_config_1.container.get(move_service_1.MoveService);
var iddfs = inversify_config_1.container.get(iddfs_1.IDDFS);
var bfs = inversify_config_1.container.get(bfs_1.BFS);
var cube = inversify_config_1.container.get('ICubeService').createSolved({
    up: color_1.Color.BLUE,
    down: color_1.Color.GREEN,
    left: color_1.Color.ORANGE,
    right: color_1.Color.RED,
    front: color_1.Color.WHITE,
    back: color_1.Color.YELLOW
});
var hardCube = moves.B.exec(moves.D.exec(moves.L.exec(cube)));
var normalCube = moves.B.exec(moves.D.exec(cube));
var easyCube = moves.D.exec(cube);
var duplicatesFile = path_1.resolve(__dirname, 'database', 'duplicates');
fs.createFileSync(duplicatesFile);
var stopFunction = function (node, solved, history, duplicateOf) {
    if (duplicateOf) {
        fs.appendFileSync(duplicatesFile, '--------\t\t\t'
            + history.toString()
            + ' ('
            + duplicateOf.toString()
            + ')\n');
    }
    else {
        fs.appendFileSync(duplicatesFile, history.toString() + '\n');
    }
    return false;
};
console.log(new Date().toLocaleString());
// console.log(
//     iddfs.exec(hardCube).toString()
// );
console.log(bfs.exec(normalCube, stopFunction).toString());
console.log(new Date().toLocaleString());
