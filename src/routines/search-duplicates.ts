import { IHistory } from '../classes/history/i-history';
import { ICube } from '../classes/cube/i-cube';
import { IPathService } from 'strong-paths';
import { ICubeService } from '../classes/cube/i-cube-service';
import { BFS } from '../classes/algorithms/implementation/bfs';
import { MoveService } from '../classes/moves/move-service';
import { Color } from '../enums/color';
import fs = require('fs-extra');

/**
 * Fills 'database/duplicates' with list of moves and their equivalent forms.
 * @param moves Collection of usable moves
 * @param bfs Breadth first search algorithm
 * @param cubeService Cube generator (for creating initial cube for bfs)
 * @param pathService For being able to save nodes of bfs
 */
export function searchDuplicates(
    moves: MoveService,
    bfs: BFS,
    cubeService: ICubeService,
    pathService: IPathService
) {

    let cube = cubeService.createSolved({
        up: Color.BLUE,
        down: Color.GREEN,
        left: Color.ORANGE,
        right: Color.RED,
        front: Color.WHITE,
        back: Color.YELLOW
    });

    let extraHardCube = moves.B.exec(
        moves.L.exec(
            moves.L.exec(
                moves.F.exec(
                    moves.B.exec(
                        cube
                    )
                )
            )
        )
    )

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


    let duplicatesFile = pathService
        .createInternal('database/duplicates')
        .toAbsolute()
        .toString();

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

    console.log('Starting search for duplicates at ', new Date().toLocaleString());

    bfs.exec(normalCube, stopFunction);

}
