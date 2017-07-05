"use strict";
var color_1 = require("../enums/color");
var fs = require("fs-extra");
/**
 * Fills 'database/duplicates' with list of moves and their equivalent forms.
 * @param moves Collection of usable moves
 * @param bfs Breadth first search algorithm
 * @param cubeService Cube generator (for creating initial cube for bfs)
 * @param pathService For being able to save nodes of bfs
 */
function searchDuplicates(moves, bfs, cubeService, pathService) {
    var cube = cubeService.createSolved({
        up: color_1.Color.BLUE,
        down: color_1.Color.GREEN,
        left: color_1.Color.ORANGE,
        right: color_1.Color.RED,
        front: color_1.Color.WHITE,
        back: color_1.Color.YELLOW
    });
    var extraHardCube = moves.B.exec(moves.L.exec(moves.L.exec(moves.F.exec(moves.B.exec(cube)))));
    var hardCube = moves.B.exec(moves.D.exec(moves.L.exec(cube)));
    var normalCube = moves.B.exec(moves.D.exec(cube));
    var easyCube = moves.D.exec(cube);
    var duplicatesFile = pathService
        .createInternal('database/duplicates')
        .toAbsolute()
        .toString();
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
    console.log('Starting search for duplicates at ', new Date().toLocaleString());
    bfs.exec(normalCube, stopFunction);
}
exports.searchDuplicates = searchDuplicates;
