import { container } from './inversify.config';
import { IHistory } from './classes/history/i-history';
import { ICube } from './classes/cube/i-cube';
import { BFS } from './classes/algorithms/implementation/bfs';
import { IDDFS } from './classes/algorithms/implementation/iddfs';
import { ICubeService } from './classes/cube/i-cube-service';
import { MoveService } from './classes/moves/move-service';
import { Color } from './enums/color';
import fs = require('fs-extra');
import { resolve } from 'path';

let moves = container.get(MoveService);
let iddfs = container.get(IDDFS);
let bfs = container.get(BFS);

let cube = container.get<ICubeService>('ICubeService').createSolved({
    up: Color.BLUE,
    down: Color.GREEN,
    left: Color.ORANGE,
    right: Color.RED,
    front: Color.WHITE,
    back: Color.YELLOW
});

let hardCube = moves.B.exec(
    moves.D.exec(
        moves.L.exec(
            cube
        )
    )
);

let normalCube = moves.B.exec(
    moves.D.exec(
        cube
    )
);

let easyCube = moves.D.exec(
    cube
);


let duplicatesFile = resolve(__dirname, 'database', 'duplicates');
fs.createFileSync(duplicatesFile);

let stopFunction = (
    node: ICube,
    solved: ICube,
    history: IHistory,
    duplicateOf: IHistory
) => {
    if (duplicateOf) {
        fs.appendFileSync(
            duplicatesFile,
            '--------\t\t\t'
            + history.toString()
            + ' ('
            + duplicateOf.toString()
            + ')\n'
        );
    } else {
        fs.appendFileSync(duplicatesFile, history.toString() + '\n');
    }

    return false;
};

console.log(new Date().toLocaleString());
// console.log(
//     iddfs.exec(hardCube).toString()
// );
console.log(
    bfs.exec(normalCube, stopFunction).toString()
);
console.log(new Date().toLocaleString());
